const fs = require('fs');
const path = require('path');
const https = require('https');

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

function cleanExactContent(html) {
  let c = html;
  
  // Clean branding references
  c = c.replace(/https?:\/\/(?:www\.)?indgovtjobs\.in\/?/gi, 'https://rozgardwaar.com/');
  c = c.replace(/www\.indgovtjobs\.in/gi, 'rozgardwaar.com');
  c = c.replace(/indgovtjobs\.in/gi, 'rozgardwaar.com');
  c = c.replace(/Ind\s*Govt\s*Jobs/gi, 'RozgarDwaar');
  c = c.replace(/Indian\s*Govt\s*Jobs/gi, 'RozgarDwaar');
  c = c.replace(/indgovtjobs/gi, 'RozgarDwaar');

  // Replace tables with .detail-table-custom
  c = c.replace(/<table[^>]*>/gi, '<table class="detail-table-custom">');

  // Clean empty spans, Blogger comment markers or ad slots
  c = c.replace(/<div class="separator"[\s\S]*?<\/div>/gi, '');
  c = c.replace(/<a name="more"><\/a>/gi, '');

  return c;
}

async function run() {
  console.log('Fetching top 45 exact articles from indgovtjobs.in feed...');
  const json = await fetchJson('https://www.indgovtjobs.in/feeds/posts/default?alt=json&max-results=45');
  const entries = json.feed.entry;

  console.log(`Retrieved ${entries.length} exact posts from feed.`);

  const exactPosts = entries.map((e, idx) => {
    const title = e.title.$t.trim();
    const rawContent = e.content.$t;
    const cleanContent = cleanExactContent(rawContent);

    // Extract alternate link for slug
    const altLink = e.link.find(l => l.rel === 'alternate');
    let slug = altLink ? altLink.href.split('/').pop().replace('.html', '') : `indgovtjobs-post-${idx+1}`;
    slug = slug.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

    // Extract official apply/pdf links from content
    let pdfMatch = rawContent.match(/href="([^"]+?\.(?:pdf|PDF)[^"]*)"/i) || rawContent.match(/href="(https?:\/\/drive\.google\.com\/file\/d\/[^"]+)"/i);
    let applyMatch = rawContent.match(/href="(https?:\/\/(?:[a-zA-Z0-9-]+\.)+(?:gov\.in|nic\.in|edu\.in|org|ac\.in|co\.in|com)[^"]*)"/i);

    let fallbackUrl = altLink ? altLink.href.replace(/https?:\/\/(?:www\.)?indgovtjobs\.in/gi, 'https://rozgardwaar.com') : 'https://rozgardwaar.com/';
    const pdfUrl = pdfMatch ? pdfMatch[1] : fallbackUrl;
    const applyUrl = applyMatch ? applyMatch[1] : fallbackUrl;

    return {
      id: slug,
      title: title,
      contentHtml: cleanContent,
      pdfUrl: pdfUrl,
      applyUrl: applyUrl,
      publishedDate: e.published.$t.substring(0, 10)
    };
  });

  fs.writeFileSync(path.join(__dirname, 'exact_10_posts.json'), JSON.stringify(exactPosts, null, 2), 'utf8');
  console.log(`Saved ${exactPosts.length} exact posts to scratch/exact_10_posts.json!`);
}

run().catch(err => {
  console.error('Error fetching exact posts:', err);
});
