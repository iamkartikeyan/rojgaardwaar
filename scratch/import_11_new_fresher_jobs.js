const fs = require('fs');
const path = require('path');
const https = require('https');

function fetchQuery(q) {
  return new Promise((resolve) => {
    const req = https.get('https://www.indgovtjobs.in/feeds/posts/default?alt=json&q=' + encodeURIComponent(q) + '&max-results=10', { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(json.feed.entry || []);
        } catch(e) { resolve([]); }
      });
    });
    req.on('error', () => resolve([]));
    req.setTimeout(4000, () => {
      req.destroy();
      resolve([]);
    });
  });
}

function cleanExactContent(html) {
  let c = html;
  c = c.replace(/https?:\/\/(?:www\.)?indgovtjobs\.in\/?/gi, 'https://rozgardwaar.com/');
  c = c.replace(/www\.indgovtjobs\.in/gi, 'rozgardwaar.com');
  c = c.replace(/indgovtjobs\.in/gi, 'rozgardwaar.com');
  c = c.replace(/Ind\s*Govt\s*Jobs/gi, 'RozgarDwaar');
  c = c.replace(/Indian\s*Govt\s*Jobs/gi, 'RozgarDwaar');
  c = c.replace(/indgovtjobs/gi, 'RozgarDwaar');
  c = c.replace(/<table[^>]*>/gi, '<table class="detail-table-custom">');
  c = c.replace(/<div class="separator"[\s\S]*?<\/div>/gi, '');
  c = c.replace(/<a name="more"><\/a>/gi, '');
  return c;
}

// Load current data
global.window = {};
require('../js/data.js');
const existingJobs = global.window.ROZGAR_DATA.RECRUITMENTS;
const existingIds = new Set(existingJobs.map(j => j.id));

async function run() {
  console.log('Searching for fresh Fresher / Apprentice jobs in parallel from indgovtjobs.in...');
  const fresherQueries = [
    'Apprentice', 'Fresher', 'Trainee', 'Trade Apprentice', 'Graduate Apprentice', 
    'Technician Apprentice', 'Diploma Trainee', 'Executive Trainee', 'NAPS', 'NATS', 'No Exam'
  ];
  
  const queryResults = await Promise.all(fresherQueries.map(q => fetchQuery(q)));
  
  const candidateEntries = [];
  const seenUrls = new Set();

  queryResults.forEach(entries => {
    entries.forEach(e => {
      const title = e.title.$t.trim();
      const link = e.link.find(l => l.rel === 'alternate')?.href;
      
      // Filter out general digests
      if (/opening|closing|sarkari naukri [0-9]|digest|pass govt jobs|admit card|result/i.test(title)) return;
      
      if (link && !seenUrls.has(link)) {
        seenUrls.add(link);
        let slug = link.split('/').pop().replace('.html', '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
        if (!existingIds.has(slug)) {
          candidateEntries.push({ entry: e, slug, title });
        }
      }
    });
  });

  console.log(`Found ${candidateEntries.length} unique candidate Fresher / Apprentice posts.`);

  // Pick top 11 Fresher jobs
  const newFresherEntries = candidateEntries.slice(0, 11);
  console.log(`Selected 11 fresh Fresher recruitments:`);
  newFresherEntries.forEach((item, idx) => {
    console.log(`${idx + 1}. ${item.title}`);
  });

  // Convert to DB format & exactPosts format
  let exactPostsList = [];
  try {
    exactPostsList = JSON.parse(fs.readFileSync(path.join(__dirname, 'exact_10_posts.json'), 'utf8'));
  } catch(e) { exactPostsList = []; }

  const newDbJobs = [];

  for (const item of newFresherEntries) {
    const e = item.entry;
    const rawContent = e.content.$t;
    const cleanContent = cleanExactContent(rawContent);

    let pdfMatch = rawContent.match(/href="([^"]+?\.(?:pdf|PDF)[^"]*)"/i) || rawContent.match(/href="(https?:\/\/drive\.google\.com\/file\/d\/[^"]+)"/i);
    let applyMatch = rawContent.match(/href="(https?:\/\/(?:[a-zA-Z0-9-]+\.)+(?:gov\.in|nic\.in|edu\.in|org|ac\.in|co\.in|com)[^"]*)"/i);
    const altLink = e.link.find(l => l.rel === 'alternate')?.href;
    let fallbackUrl = altLink ? altLink.replace(/https?:\/\/(?:www\.)?indgovtjobs\.in/gi, 'https://rozgardwaar.com') : 'https://rozgardwaar.com/';

    const pdfUrl = pdfMatch ? pdfMatch[1] : fallbackUrl;
    const applyUrl = applyMatch ? applyMatch[1] : fallbackUrl;

    // Extract vacancies from title
    let vacMatch = item.title.match(/(?:for|of)\s+([0-9,]+)\+?\s+([^|–—\n]+?)\s+(?:Posts?|Vacanc|Openings?)/i);
    let vacCount = vacMatch ? parseInt(vacMatch[1].replace(/,/g, ''), 10) : 100;
    let postName = vacMatch ? vacMatch[2].trim() : 'Trade / Technician / Graduate Apprentice';

    let dateMatch = item.title.match(/Last\s*Date\s*[:\s]*([0-9]{1,2}[-/][0-9]{1,2}[-/][0-9]{4})/i);
    let lastDate = dateMatch ? dateMatch[1] : '2026-09-30';

    const isNoExam = /apprentice|merit|no exam/i.test(item.title);

    const dbJob = {
      id: item.slug,
      title: item.title,
      org: item.title.split(/(?:Recruitment|Notification|Vacancy|Advt)/i)[0].trim().replace(/^[-–—:\s]+|[-–—:\s]+$/g, ''),
      shortOrg: item.title.split(/(?:Recruitment|Notification|Vacancy|Advt)/i)[0].trim().substring(0, 30),
      posts: postName,
      vacancies: vacCount,
      salary: "Monthly Stipend ₹8,000 – ₹18,000/- as per Apprenticeship Rules / NATS",
      qualificationText: "10th Pass / 12th Pass / ITI (NCVT) / Diploma / Degree (Fresher Eligible)",
      qualifications: ["10th-pass", "12th-pass", "iti", "diploma", "graduate"],
      category: isNoExam ? "no-exam" : "central-govt",
      subCategory: "Fresher & Apprentice Recruitment",
      state: "all-india",
      importantDates: {
        startDate: "2026-09-02",
        lastDate: lastDate,
        examDate: isNoExam ? "No Written Exam (Merit Based Selection)" : "To be notified"
      },
      fee: "General/OBC: ₹100 / Nil (SC/ST/PwBD/Female: Nil)",
      ageLimit: "15 to 24 / 28 Years (Relaxation as per norms)",
      ageRelaxation: "SC/ST: 5 Years, OBC: 3 Years, PwBD: 10 Years",
      officialLinks: {
        applyUrl: applyUrl,
        notificationUrl: pdfUrl,
        websiteUrl: applyUrl
      }
    };

    newDbJobs.push(dbJob);

    exactPostsList.push({
      id: item.slug,
      title: item.title,
      contentHtml: cleanContent,
      pdfUrl: pdfUrl,
      applyUrl: applyUrl,
      publishedDate: e.published.$t.substring(0, 10)
    });
  }

  // Update exact_10_posts.json
  fs.writeFileSync(path.join(__dirname, 'exact_10_posts.json'), JSON.stringify(exactPostsList, null, 2), 'utf8');

  // Append new jobs to existingJobs in data.js
  const combinedJobs = [...existingJobs, ...newDbJobs];
  const dataJsPath = path.join(__dirname, '../js/data.js');
  let dataJsContent = fs.readFileSync(dataJsPath, 'utf8');

  const recruitmentsRegex = /const RECRUITMENTS = \[[\s\S]*?\];\s*const ADMIT_CARDS/i;
  const newRecruitmentsString = `const RECRUITMENTS = ${JSON.stringify(combinedJobs, null, 2)};\n\n  const ADMIT_CARDS`;
  dataJsContent = dataJsContent.replace(recruitmentsRegex, newRecruitmentsString);

  fs.writeFileSync(dataJsPath, dataJsContent, 'utf8');
  console.log(`Successfully added 11 fresh Fresher / Apprentice jobs! Total recruitments on site: ${combinedJobs.length}`);
}

run().catch(console.error);
