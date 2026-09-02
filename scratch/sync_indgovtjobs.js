const https = require('https');
const fs = require('fs');

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
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

async function run() {
  console.log('Fetching live posts from indgovtjobs.in JSON feed...');
  try {
    const feed1 = await fetchJson('https://www.indgovtjobs.in/feeds/posts/default?alt=json&max-results=50');
    const entries = feed1.feed.entry || [];
    console.log(`Successfully fetched ${entries.length} recent live recruitment posts from indgovtjobs.in!`);
    
    const parsedPosts = entries.map(entry => {
      const title = entry.title.$t;
      const content = entry.content ? entry.content.$t : '';
      const published = entry.published.$t;
      const url = entry.link.find(l => l.rel === 'alternate') ? entry.link.find(l => l.rel === 'alternate').href : '';
      
      return {
        title,
        url,
        published,
        summary: content.substring(0, 300).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
      };
    });

    console.table(parsedPosts.slice(0, 10).map(p => ({ Title: p.title.substring(0, 60), Published: p.published.substring(0, 10) })));
  } catch (err) {
    console.error('Error fetching indgovtjobs feed:', err.message);
  }
}

run();
