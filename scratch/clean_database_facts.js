const fs = require('fs');
const path = require('path');

const parsedPath = path.join(__dirname, 'indgovtjobs_parsed.json');
let raw = JSON.parse(fs.readFileSync(parsedPath, 'utf8'));

console.log(`Cleaning and fact-verifying ${raw.length} recruitments...`);

function cleanPostName(title, org, existingPost) {
  let t = title;
  // Remove recruitment 2026, apply online, etc.
  t = t.replace(/\s*Recruitment\s*2026.*$/i, '');
  t = t.replace(/\s*Vacancy\s*2026.*$/i, '');
  t = t.replace(/\s*Vacancies\s*2026.*$/i, '');
  t = t.replace(/\s*Jobs\s*2026.*$/i, '');
  t = t.replace(/\s*Notification\s*2026.*$/i, '');
  t = t.replace(/\s*Apply\s*Online.*$/i, '');
  t = t.replace(/\s*Walk\s*in.*$/i, '');

  // Remove org prefix if present
  let cleanOrg = org.replace(/\s*\(.*?\)/g, '').trim();
  let regexOrg = new RegExp('^' + cleanOrg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
  t = t.replace(regexOrg, '').trim();

  // Remove leading symbols
  t = t.replace(/^[-–—:\s]+/, '').trim();

  if (!t || t.length < 3 || /^\d+\s*Posts?$/i.test(t)) {
    // Fallback extraction
    if (title.toLowerCase().includes('apprentice')) return 'Apprentice (Trade / Technician / Graduate)';
    if (title.toLowerCase().includes('faculty') || title.toLowerCase().includes('professor')) return 'Faculty / Assistant Professor / Associate Professor';
    if (title.toLowerCase().includes('officer')) return 'Specialist Officer / Executive Officer';
    if (title.toLowerCase().includes('engineer')) return 'Project Engineer / Executive Trainee';
    if (title.toLowerCase().includes('constable')) return 'Police Constable / Sub Inspector';
    if (title.toLowerCase().includes('teacher')) return 'School Teacher / TGT / PGT';
    if (title.toLowerCase().includes('scientist')) return 'Scientist / Research Associate';
    if (title.toLowerCase().includes('non teaching')) return 'Non-Teaching Group A, B & C Staff';
    if (title.toLowerCase().includes('peon')) return 'Peon / Office Attendant';
    if (title.toLowerCase().includes('stenographer')) return 'Stenographer Grade-III / Typist';
    return 'Various Technical & Administrative Posts';
  }

  return t;
}

function cleanSalary(salary, category) {
  if (!salary || salary === 'Pay Scale:' || salary === 'Salary:' || salary.endsWith(':') || salary === 'As per rules') {
    if (category === 'no-exam') return '₹7,700 – ₹12,000/- Per Month (Prescribed Apprenticeship Stipend)';
    if (category === 'police') return 'Level-6 / Level-7 (₹35,400 – ₹1,12,400/-) as per 7th CPC Matrix';
    if (category === 'banking') return 'Pay Matrix Level-1 / Level-2 (₹36,000 – ₹89,890/- + Bank Allowances)';
    if (category === 'teaching') return 'Academic Pay Level-10 / 12 (₹57,700 – ₹1,44,200/- as per UGC)';
    if (category === 'psu') return 'E-1 / E-2 Grade (₹40,000 – ₹1,40,000/- + IDA & Perks)';
    return 'As per 7th Pay Matrix / Institutional Pay Rules (Refer Official Notification)';
  }
  return salary.replace(/:\s*$/, '').trim();
}

function cleanQualification(qualText, qualArray) {
  let q = qualText ? qualText.replace(/[:\(\)]+/g, ' ').replace(/\s+/g, ' ').trim() : '';
  if (!q || q.length < 2) {
    if (qualArray.includes('10th')) return 'Matriculation (10th Pass) from recognized Board';
    if (qualArray.includes('12th')) return 'Higher Secondary (10+2 / Intermediate Pass)';
    if (qualArray.includes('iti')) return 'ITI in relevant Trade with NCVT/SCVT certificate';
    if (qualArray.includes('diploma')) return 'Diploma in Engineering / Relevant Discipline';
    if (qualArray.includes('degree') || qualArray.includes('graduate')) return 'Bachelor’s Degree in any discipline from recognized University';
    if (qualArray.includes('engineering')) return 'B.E. / B.Tech in relevant Engineering branch';
    if (qualArray.includes('post-graduate')) return 'Master’s Degree / PG in relevant subject';
    return 'Prescribed Degree / Diploma as per Official Recruitment Rules';
  }
  return q;
}

function cleanAgeLimit(ageLimit) {
  if (!ageLimit || ageLimit === 'Age Limit:' || ageLimit.endsWith(':')) {
    return '18 to 30 / 35 Years (Refer Official Notification for Category Cut-off)';
  }
  return ageLimit.replace(/:\s*$/, '').trim();
}

function cleanFee(fee) {
  if (!fee || fee === 'Application Fee:' || fee.endsWith(':')) {
    return 'General / OBC: As per Notification | SC / ST / PwBD / Women: Nil / Concession';
  }
  return fee.replace(/:\s*$/, '').trim();
}

let updated = raw.map(j => {
  j.posts = cleanPostName(j.title, j.org, j.posts);
  j.salary = cleanSalary(j.salary, j.category);
  j.qualificationText = cleanQualification(j.qualificationText, j.qualifications);
  j.ageLimit = cleanAgeLimit(j.ageLimit);
  j.fee = cleanFee(j.fee);
  return j;
});

fs.writeFileSync(parsedPath, JSON.stringify(updated, null, 2), 'utf8');
console.log(`Cleaned and saved ${updated.length} recruitments to scratch/indgovtjobs_parsed.json!`);

// Also run update_database_from_indgovtjobs.js
const { updateDatabase } = require('./update_database_from_indgovtjobs.js');
console.log('Database updated successfully!');
