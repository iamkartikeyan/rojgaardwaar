const fs = require('fs');
const path = require('path');

// Load exact 70 posts
const exactPosts = JSON.parse(fs.readFileSync(path.join(__dirname, 'exact_10_posts.json'), 'utf8'));

// Load data.js
global.window = {};
require('../js/data.js');
const allJobs = global.window.ROZGAR_DATA.RECRUITMENTS;

console.log(`Initial total jobs in database: ${allJobs.length}`);

// Find the 70 matching jobs
const filteredJobs = [];
const keptIds = new Set();

exactPosts.forEach((ep, i) => {
  const match = allJobs.find(j => {
    return j.title.toLowerCase().includes(ep.title.toLowerCase().substring(0, 20)) ||
           ep.title.toLowerCase().includes(j.title.toLowerCase().substring(0, 20)) ||
           (j.id && j.id.includes(ep.id.substring(0, 15)));
  });
  if (match) {
    if (!keptIds.has(match.id)) {
      keptIds.add(match.id);
      filteredJobs.push(match);
    }
  }
});

console.log(`Matched and kept exact ${filteredJobs.length} jobs.`);

// Update js/data.js content
const dataJsPath = path.join(__dirname, '../js/data.js');
let dataJsContent = fs.readFileSync(dataJsPath, 'utf8');

// Replace const RECRUITMENTS array in data.js
const recruitmentsRegex = /const RECRUITMENTS = \[[\s\S]*?\];\s*const ADMIT_CARDS/i;
const newRecruitmentsString = `const RECRUITMENTS = ${JSON.stringify(filteredJobs, null, 2)};\n\n  const ADMIT_CARDS`;
dataJsContent = dataJsContent.replace(recruitmentsRegex, newRecruitmentsString);

fs.writeFileSync(dataJsPath, dataJsContent, 'utf8');
console.log(`Updated js/data.js with exactly ${filteredJobs.length} recruitments.`);

// Delete old non-matching HTML files from jobs/ directory
const jobsDir = path.join(__dirname, '../jobs');
const existingFiles = fs.readdirSync(jobsDir);
let deletedCount = 0;

existingFiles.forEach(file => {
  if (file.endsWith('.html')) {
    const fileId = file.replace('.html', '');
    if (!keptIds.has(fileId)) {
      fs.unlinkSync(path.join(jobsDir, file));
      deletedCount++;
    }
  }
});

console.log(`Cleaned jobs/ directory: deleted ${deletedCount} unneeded job files. Kept ${keptIds.size} files.`);
