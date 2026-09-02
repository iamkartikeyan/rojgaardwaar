const https = require('https');
const fs = require('path');
const fsPromises = require('fs').promises;
const fsSync = require('fs');

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(json);
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

function cleanHtmlText(html) {
  if (!html) return '';
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function slugify(text) {
  return text.toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim()
    .substring(0, 80);
}

function parseEntry(entry) {
  const title = entry.title.$t.trim();
  const content = entry.content ? entry.content.$t : (entry.summary ? entry.summary.$t : '');
  const published = entry.published.$t ? entry.published.$t.substring(0, 10) : '2026-08-01';
  const postUrl = entry.link.find(l => l.rel === 'alternate') ? entry.link.find(l => l.rel === 'alternate').href : '';

  // Extract Vacancy Count
  let vacancies = 50;
  const vacMatch = title.match(/(\d[\d,]*)\s*(posts|vacancies|posts|opening)/i) || content.match(/Total Vacancies[^0-9]*(\d[\d,]*)/i);
  if (vacMatch) {
    vacancies = parseInt(vacMatch[1].replace(/,/g, ''), 10) || 50;
  }

  // Extract Last Date
  let lastDate = '2026-09-30';
  const dateMatch = title.match(/Last Date\s*([0-9]{1,2}[-/.][0-9]{1,2}[-/.][0-9]{4}|[0-9]{1,2}\s+[A-Za-z]+\s+[0-9]{4})/i) ||
                    content.match(/Last Date[^0-9]*([0-9]{1,2}[-/.][0-9]{1,2}[-/.][0-9]{4}|[0-9]{1,2}\s+[A-Za-z]+\s+[0-9]{4})/i);
  if (dateMatch) {
    lastDate = dateMatch[1];
  }

  // Extract Salary
  let salary = 'Level-6 / Level-7 Pay Scale + Allowances';
  const salMatch = content.match(/Pay Scale[^<:]*[:\s]*([^\n<]+)/i) || content.match(/(₹[\d,]+\s*[-–to]+\s*₹[\d,]+|Level-\d[^\n<]*)/i);
  if (salMatch) {
    salary = cleanHtmlText(salMatch[0]).substring(0, 70);
  }

  // Extract Qualification
  let qualificationText = 'Graduate / Degree / Diploma / 10th / 12th Pass';
  const qualMatch = content.match(/Educational Qualification[^<:]*[:\s]*([^\n<]+)/i) || content.match(/Qualification[^<:]*[:\s]*([^\n<]+)/i);
  if (qualMatch) {
    qualificationText = cleanHtmlText(qualMatch[1]).substring(0, 120);
  }

  // Determine Category
  let category = 'central-govt';
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('railway') || lowerTitle.includes('rrb') || lowerTitle.includes('rrc')) category = 'railway';
  else if (lowerTitle.includes('bank') || lowerTitle.includes('sbi') || lowerTitle.includes('ibps') || lowerTitle.includes('rbi')) category = 'banking';
  else if (lowerTitle.includes('psu') || lowerTitle.includes('iocl') || lowerTitle.includes('ntpc') || lowerTitle.includes('ongc') || lowerTitle.includes('bel') || lowerTitle.includes('bhel') || lowerTitle.includes('sail')) category = 'psu';
  else if (lowerTitle.includes('police') || lowerTitle.includes('constable') || lowerTitle.includes('sub inspector') || lowerTitle.includes('si ')) category = 'police';
  else if (lowerTitle.includes('teacher') || lowerTitle.includes('faculty') || lowerTitle.includes('professor') || lowerTitle.includes('bpsc school')) category = 'teaching';
  else if (lowerTitle.includes('apprentice') || lowerTitle.includes('no exam') || lowerTitle.includes('gds')) category = 'no-exam';

  // Extract Org Name
  let org = title.split('Recruitment')[0].split('–')[0].split('-')[0].trim();
  if (!org || org.length < 3) org = 'Government Department';

  // Official Links
  let officialPdf = 'https://www.indgovtjobs.in';
  let officialApply = 'https://www.indgovtjobs.in';
  let officialWeb = 'https://www.indgovtjobs.in';

  const pdfMatch = content.match(/href="([^"]*(?:\.pdf|drive\.google\.com[^"]*))"/i);
  if (pdfMatch) officialPdf = pdfMatch[1];

  const applyMatch = content.match(/href="([^"]*(?:apply|registration|online|portal)[^"]*)"/i);
  if (applyMatch && !applyMatch[1].includes('indgovtjobs.in')) officialApply = applyMatch[1];
  else officialApply = postUrl;

  return {
    id: slugify(title),
    title: title,
    org: org,
    shortOrg: org.substring(0, 30),
    posts: title.includes('for') ? title.split('for')[1].split('|')[0].trim() : 'Prescribed Posts',
    vacancies: vacancies,
    salary: salary,
    qualificationText: qualificationText,
    qualifications: ['graduate', '12th-pass'],
    category: category,
    subCategory: 'Recruitment Notice',
    state: 'all-india',
    importantDates: {
      startDate: published,
      lastDate: lastDate,
      examDate: 'As per Notification'
    },
    fee: 'As per Category (Refer Notification)',
    ageLimit: '18 to 35 Years (Relaxation as per norms)',
    ageRelaxation: 'SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years',
    officialLinks: {
      applyUrl: officialApply,
      notificationUrl: officialPdf,
      websiteUrl: postUrl
    }
  };
}

async function startImport() {
  console.log('Fetching all posts across multiple pages from indgovtjobs.in...');
  const allParsed = [];

  for (let startIndex of [1, 51, 101, 151, 201, 251]) {
    const url = `https://www.indgovtjobs.in/feeds/posts/default?alt=json&start-index=${startIndex}&max-results=50`;
    console.log(`Fetching from ${url}...`);
    try {
      const res = await fetchJson(url);
      const entries = res.feed.entry || [];
      console.log(`Fetched ${entries.length} posts from startIndex ${startIndex}`);
      for (const entry of entries) {
        allParsed.push(parseEntry(entry));
      }
      if (entries.length < 50) break;
    } catch (e) {
      console.error(`Error fetching startIndex ${startIndex}:`, e.message);
    }
  }

  console.log(`\nTotal Successfully Parsed Real Posts from IndGovtJobs: ${allParsed.length}`);
  fsSync.writeFileSync('./scratch/indgovtjobs_parsed.json', JSON.stringify(allParsed, null, 2), 'utf8');
  console.log('Saved to ./scratch/indgovtjobs_parsed.json');
}

startImport();
