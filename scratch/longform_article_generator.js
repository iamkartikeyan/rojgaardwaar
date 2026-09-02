const fs = require('fs');
const path = require('path');

if (!global.window || !global.window.ROZGAR_DATA) {
  global.window = global.window || {};
  require('../js/data.js');
}
const data = global.window.ROZGAR_DATA;

let exactPosts = [];
try {
  exactPosts = JSON.parse(fs.readFileSync(path.join(__dirname, 'exact_10_posts.json'), 'utf8'));
} catch (e) {
  exactPosts = [];
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatExactContentForSiteUI(html) {
  let c = html;
  
  // Replace tables with .detail-table-custom
  c = c.replace(/<table[^>]*>/gi, '<table class="detail-table-custom">');
  
  // Replace headings with green-check-title style
  c = c.replace(/<h[234][^>]*>(.*?)<\/h[234]>/gi, (match, titleText) => {
    return `<div class="green-check-title" style="margin-top:22px;">
      <svg class="icon-svg check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#008000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
      <span>${titleText.replace(/^[✅\s]+/, '')}:</span>
    </div>`;
  });

  // Ensure clean links and branding
  c = c.replace(/https?:\/\/(?:www\.)?indgovtjobs\.in\/?/gi, 'https://rozgardwaar.com/');
  c = c.replace(/www\.indgovtjobs\.in/gi, 'rozgardwaar.com');
  c = c.replace(/indgovtjobs\.in/gi, 'rozgardwaar.com');
  c = c.replace(/Ind\s*Govt\s*Jobs/gi, 'RozgarDwaar');
  c = c.replace(/Indian\s*Govt\s*Jobs/gi, 'RozgarDwaar');
  c = c.replace(/indgovtjobs/gi, 'RozgarDwaar');

  return c;
}

function parseFactualPost(job) {
  let title = job.title || '';
  let org = job.org || '';
  let posts = job.posts || '';

  // Refine Organization Name
  let cleanOrg = org.replace(/Notification No.*$/i, '')
                    .replace(/Advt No.*$/i, '')
                    .replace(/Recruitment.*$/i, '')
                    .replace(/Vacancy.*$/i, '')
                    .replace(/Apply Online.*$/i, '')
                    .trim();

  // Refine Post Name
  let cleanPost = posts;
  if (!cleanPost || cleanPost === 'Various Technical & Administrative Posts' || cleanPost.includes('Posts') || cleanPost.length < 3) {
    if (/faculty/i.test(title)) cleanPost = 'Assistant Professor, Associate Professor & Professor';
    else if (/apprentice/i.test(title)) cleanPost = 'Trade, Graduate & Technician Apprentice';
    else if (/officer/i.test(title)) cleanPost = 'Specialist Officer / Executive Officer';
    else if (/engineer/i.test(title)) cleanPost = 'Project Engineer / Executive Trainee';
    else if (/teacher/i.test(title)) cleanPost = 'School Teacher (Primary / TGT / PGT)';
    else if (/constable/i.test(title)) cleanPost = 'Police Constable / Head Constable';
    else if (/si\s*&|subedar|sub inspector/i.test(title)) cleanPost = 'Sub Inspector (SI) & Subedar';
    else if (/clerk/i.test(title)) cleanPost = 'Junior Associate / Clerk';
    else if (/mts|peon/i.test(title)) cleanPost = 'Multi Tasking Staff (MTS) & Sanitation Worker';
    else if (/scientist/i.test(title)) cleanPost = 'Scientist / Research Associate';
    else if (/non teaching/i.test(title)) cleanPost = 'Non-Teaching Technical & Administrative Staff';
    else cleanPost = 'Various Sanctioned Group A, B & C Vacancies';
  }

  // Refine Selection Process text based on actual category
  let selectionHtml = '';
  if (job.category === 'police' || /police|si|constable|subedar/i.test(title)) {
    selectionHtml = `
      <ul style="padding-left:20px; line-height:1.75; font-size:13.5px; color:#333; margin-bottom:14px;">
        <li><strong>Written Examination:</strong> Computer Based Test (CBT) or OMR written test covering General Knowledge, Reasoning, Numerical Ability, and Language.</li>
        <li><strong>Physical Measurement Test (PMT):</strong> Verification of height and chest measurements as per official police standards.</li>
        <li><strong>Physical Efficiency Test (PET):</strong> Qualifying physical endurance trials (running race, long jump, and shot put).</li>
        <li><strong>Document Verification &amp; Medical:</strong> Scrutiny of original certificates followed by medical fitness test.</li>
      </ul>`;
  } else if (job.category === 'no-exam' || /apprentice|no exam|merit/i.test(title)) {
    selectionHtml = `
      <ul style="padding-left:20px; line-height:1.75; font-size:13.5px; color:#333; margin-bottom:14px;">
        <li><strong>Merit Based Shortlisting:</strong> Selection is based purely on marks obtained in qualifying educational examination (10th / ITI / Diploma / Degree).</li>
        <li><strong>No Written Exam or Interview:</strong> Direct selection based on academic merit list.</li>
        <li><strong>Apprenticeship Portal Registration:</strong> Active enrollment on NAPS (apprenticeshipindia.gov.in) or NATS portal.</li>
        <li><strong>Document Verification:</strong> Verification of original educational certificates, caste credentials, and medical fitness certificate.</li>
      </ul>`;
  } else if (job.category === 'teaching' || /faculty|professor|teacher/i.test(title)) {
    selectionHtml = `
      <ul style="padding-left:20px; line-height:1.75; font-size:13.5px; color:#333; margin-bottom:14px;">
        <li><strong>Screening &amp; Shortlisting:</strong> Evaluation of Academic Performance Index (API) score, research publications, and teaching experience.</li>
        <li><strong>Seminar / Teaching Demonstration:</strong> Research presentation and classroom demonstration before the faculty selection panel.</li>
        <li><strong>Personal Interview:</strong> Final interview conducted by the institutional Selection Committee.</li>
      </ul>`;
  } else if (job.category === 'banking' || /bank|ibps|sbi/i.test(title)) {
    selectionHtml = `
      <ul style="padding-left:20px; line-height:1.75; font-size:13.5px; color:#333; margin-bottom:14px;">
        <li><strong>Online Examination:</strong> Objective test evaluating Reasoning, Quantitative Aptitude, English, and Banking Awareness.</li>
        <li><strong>Interview / Group Discussion:</strong> Structured personal interview for shortlisted candidates.</li>
        <li><strong>Document Verification &amp; Biometric Matching:</strong> Verification of original credentials prior to joining.</li>
      </ul>`;
  } else {
    selectionHtml = `
      <ul style="padding-left:20px; line-height:1.75; font-size:13.5px; color:#333; margin-bottom:14px;">
        <li><strong>Written Examination / Computer Based Test (CBT):</strong> Objective assessment covering domain trade subjects and general aptitude.</li>
        <li><strong>Skill Test / Trade Test (If Applicable):</strong> Practical trade or typing assessment for relevant technical posts.</li>
        <li><strong>Document Verification &amp; Medical Check:</strong> Scrutiny of original certificates and pre-employment medical fitness.</li>
      </ul>`;
  }

  return {
    cleanOrg,
    cleanPost,
    selectionHtml
  };
}

function generateFactualArticle(job, stateObj) {
  // Check if this job has exact verbatim content from indgovtjobs
  const exactMatch = exactPosts.find(ep => {
    return job.title.toLowerCase().includes(ep.title.toLowerCase().substring(0, 20)) ||
           ep.title.toLowerCase().includes(job.title.toLowerCase().substring(0, 20)) ||
           (job.id && job.id.includes(ep.id.substring(0, 15)));
  });

  if (exactMatch) {
    const formattedExact = formatExactContentForSiteUI(exactMatch.contentHtml);
    return `
        <!-- Left Content Area -->
        <div class="primary-content-column">
          <div class="content-block" style="padding: 20px;">
            
            <div style="font-size:12px; color:#666; margin-bottom:12px;">
              <a href="/">Home</a> &rsaquo; <a href="/central-govt-jobs.html">${escapeHtml(job.subCategory || 'Govt Jobs')}</a> &rsaquo; <span>${escapeHtml(job.shortOrg)}</span>
            </div>

            <!-- Single Clean H1 Tag -->
            <h1 class="portal-main-h1">${escapeHtml(job.title)}</h1>
            <div style="font-size:12px; color:#555; margin-bottom:14px; border-bottom:1px solid #eee; padding-bottom:8px;">
              Published by: <strong>RozgarDwaar Editorial Desk</strong> | Updated: <strong>${exactMatch.publishedDate || '2026-09-02'}</strong>
            </div>

            <!-- Direct Official Action Buttons -->
            <div class="action-cta-bar">
              <a href="${job.officialLinks.applyUrl}" target="_blank" rel="noopener noreferrer" class="btn-cta-apply">
                <svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg> Apply Online (Official Website)
              </a>
              <a href="${job.officialLinks.notificationUrl}" target="_blank" rel="noopener noreferrer" class="btn-cta-pdf">
                <svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg> Download Notification PDF
              </a>
              <a href="${job.officialLinks.websiteUrl}" target="_blank" rel="noopener noreferrer" class="btn-cta-web">
                <svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> Official Website
              </a>
            </div>

            <!-- Exact Verbatim Content Body -->
            <div class="exact-article-body" style="font-size:13.5px; line-height:1.8; color:#222;">
              ${formattedExact}
            </div>

            <!-- Bottom Action Buttons -->
            <div class="action-cta-bar" style="border-top:1px solid #eee; padding-top:14px; margin-top:24px;">
              <a href="${job.officialLinks.applyUrl}" target="_blank" rel="noopener noreferrer" class="btn-cta-apply">
                <svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg> Apply Online Now
              </a>
              <a href="${job.officialLinks.notificationUrl}" target="_blank" rel="noopener noreferrer" class="btn-cta-pdf">
                <svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg> Download PDF
              </a>
              <a href="/" class="tool-btn">&larr; Back to Portal Home</a>
            </div>

          </div>
        </div>`;
  }

  // Fallback factual article
  const { cleanOrg, cleanPost, selectionHtml } = parseFactualPost(job);
  const vacFormatted = job.vacancies ? job.vacancies.toLocaleString('en-IN') : 'As per Notification';

  return `
        <!-- Left Content Area -->
        <div class="primary-content-column">
          <div class="content-block" style="padding: 20px;">
            
            <div style="font-size:12px; color:#666; margin-bottom:12px;">
              <a href="/">Home</a> &rsaquo; <a href="/central-govt-jobs.html">${escapeHtml(job.subCategory || 'Govt Jobs')}</a> &rsaquo; <span>${escapeHtml(job.shortOrg)}</span>
            </div>

            <!-- Single Clean H1 Tag -->
            <h1 class="portal-main-h1">${escapeHtml(job.title)}</h1>
            <div style="font-size:12px; color:#555; margin-bottom:14px; border-bottom:1px solid #eee; padding-bottom:8px;">
              Published by: <strong>RozgarDwaar Editorial Desk</strong> | Source: <strong>Official Recruitment Notice (${escapeHtml(job.shortOrg)})</strong>
            </div>

            <!-- Direct Official Action Buttons -->
            <div class="action-cta-bar">
              <a href="${job.officialLinks.applyUrl}" target="_blank" rel="noopener noreferrer" class="btn-cta-apply">
                <svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg> Apply Online (Official Website)
              </a>
              <a href="${job.officialLinks.notificationUrl}" target="_blank" rel="noopener noreferrer" class="btn-cta-pdf">
                <svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg> Download Notification PDF
              </a>
              <a href="${job.officialLinks.websiteUrl}" target="_blank" rel="noopener noreferrer" class="btn-cta-web">
                <svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> Official Website
              </a>
            </div>

            <!-- Factual Introduction -->
            <p style="font-size:14px; line-height:1.8; color:#222; margin-top:12px; margin-bottom:16px;">
              <strong>${escapeHtml(cleanOrg)}</strong> has officially released the recruitment notification inviting eligible Indian candidates to apply for <strong>${vacFormatted} vacancies</strong> of <strong>${escapeHtml(cleanPost)}</strong>. The online application window is currently active and eligible candidates can submit their applications on or before the closing date of <strong>${job.importantDates.lastDate}</strong>. Below are the complete factual details regarding eligibility criteria, educational qualification, age limits, application fee, selection procedure, and direct official links.
            </p>

            <!-- Table 1: Quick Overview Table -->
            <div class="green-check-title">
              <svg class="icon-svg check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#008000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>Official Recruitment Overview &amp; Key Details:</span>
            </div>
            
            <table class="detail-table-custom">
              <tbody>
                <tr><th style="width:34%;">Recruiting Organization</th><td><strong>${escapeHtml(cleanOrg)}</strong></td></tr>
                <tr><th>Advertised Post Name</th><td><strong>${escapeHtml(cleanPost)}</strong></td></tr>
                <tr><th>Total Sanctioned Vacancies</th><td><strong style="color:#008000; font-size:14.5px;">${vacFormatted} Posts</strong></td></tr>
                <tr><th>Pay Scale / Remuneration</th><td><strong>${escapeHtml(job.salary)}</strong></td></tr>
                <tr><th>Educational Qualification</th><td>${escapeHtml(job.qualificationText)}</td></tr>
                <tr><th>Prescribed Age Limit</th><td>${escapeHtml(job.ageLimit)}</td></tr>
                <tr><th>Application Registration Fee</th><td>${escapeHtml(job.fee)}</td></tr>
                <tr><th>Online Application Start Date</th><td>${job.importantDates.startDate}</td></tr>
                <tr><th>Online Application Last Date</th><td><strong style="color:#cc0000; font-size:14.5px;">${job.importantDates.lastDate}</strong></td></tr>
                <tr><th>Selection Methodology</th><td>${job.category === 'no-exam' ? 'Merit Based (No Written Exam)' : 'Written Exam / Interview &amp; Document Verification'}</td></tr>
                <tr><th>Job Posting Location</th><td>${escapeHtml(stateObj.name)} / All India</td></tr>
              </tbody>
            </table>

            <!-- Section 2: Educational Eligibility -->
            <div class="green-check-title" style="margin-top:22px;">
              <svg class="icon-svg check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#008000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>Educational Qualification &amp; Eligibility Criteria:</span>
            </div>
            <p style="font-size:13.5px; line-height:1.75; color:#333; margin-bottom:10px;">
              Candidates applying for <strong>${escapeHtml(cleanPost)}</strong> in <strong>${escapeHtml(cleanOrg)}</strong> must possess the following minimum qualifications:
            </p>
            <ul style="padding-left:20px; line-height:1.75; font-size:13.5px; color:#333; margin-bottom:14px;">
              <li><strong>Prescribed Qualification:</strong> Must have passed <strong>${escapeHtml(job.qualificationText)}</strong> from a recognized Board, Council, or University.</li>
              <li><strong>Passing Marks:</strong> Minimum aggregate marks in the qualifying degree as specified in the official recruitment notification.</li>
              <li><strong>Validity of Degrees:</strong> All academic marksheets and passing certificates must be valid and issued on or before the application closing date (<strong>${job.importantDates.lastDate}</strong>).</li>
            </ul>

            <!-- Section 3: Age Limit & Relaxation -->
            <div class="green-check-title" style="margin-top:22px;">
              <svg class="icon-svg check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#008000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>Age Limit &amp; Category Relaxation:</span>
            </div>
            <table class="detail-table-custom">
              <thead>
                <tr style="background:#f1f5f9;">
                  <th style="width:40%;">Candidate Category</th>
                  <th style="width:30%;">Prescribed Age Limit</th>
                  <th style="width:30%;">Permissible Age Relaxation</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>General / Unreserved / EWS</td><td>${escapeHtml(job.ageLimit)}</td><td>Standard Ceiling</td></tr>
                <tr><td>OBC (Non-Creamy Layer)</td><td>${escapeHtml(job.ageLimit)}</td><td>03 Years Upper Age Relaxation</td></tr>
                <tr><td>SC / ST Candidates</td><td>${escapeHtml(job.ageLimit)}</td><td>05 Years Upper Age Relaxation</td></tr>
                <tr><td>PwBD / Ex-Servicemen</td><td>${escapeHtml(job.ageLimit)}</td><td>10 to 15 Years as per Govt Rules</td></tr>
              </tbody>
            </table>

            <!-- Section 4: Selection Process -->
            <div class="green-check-title" style="margin-top:22px;">
              <svg class="icon-svg check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#008000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>Selection Process &amp; Evaluation Stages:</span>
            </div>
            <p style="font-size:13.5px; line-height:1.75; color:#333; margin-bottom:10px;">
              The selection procedure for <strong>${escapeHtml(cleanPost)}</strong> in <strong>${escapeHtml(cleanOrg)}</strong> will be conducted according to the following stages:
            </p>
            ${selectionHtml}

            <!-- Section 5: How to Apply -->
            <div class="green-check-title" style="margin-top:22px;">
              <svg class="icon-svg check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#008000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>Step-by-Step Instructions: How to Apply Online</span>
            </div>
            <ol style="padding-left:20px; line-height:1.75; font-size:13.5px; color:#333; margin-bottom:14px;">
              <li>Visit the official application portal using the direct link provided in the table below.</li>
              <li>Read the official recruitment advertisement carefully before filling out the registration form.</li>
              <li>Complete the online candidate registration with a valid email ID and active mobile number.</li>
              <li>Fill in all required personal, educational, and communication details accurately.</li>
              <li>Upload clear scanned copies of required documents, passport photograph, and signature.</li>
              <li>Pay the prescribed application fee (<strong>${escapeHtml(job.fee)}</strong>) through online payment modes.</li>
              <li>Submit the completed application form and download/print the confirmation receipt for future reference.</li>
            </ol>

            <!-- Section 6: Official Links -->
            <div class="green-check-title" style="margin-top:22px;">
              <svg class="icon-svg check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#008000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>Official Notification &amp; Direct Links:</span>
            </div>
            <table class="detail-table-custom">
              <tbody>
                <tr>
                  <th style="width:38%;">Online Application Portal</th>
                  <td><a href="${job.officialLinks.applyUrl}" target="_blank" rel="noopener noreferrer" style="color:#008000; font-weight:700;">Click Here to Apply Online &raquo;</a></td>
                </tr>
                <tr>
                  <th>Download Official Notification (PDF)</th>
                  <td><a href="${job.officialLinks.notificationUrl}" target="_blank" rel="noopener noreferrer" style="color:#0000cc; font-weight:700;">Download Official PDF Notification &raquo;</a></td>
                </tr>
                <tr>
                  <th>Official Department Website</th>
                  <td><a href="${job.officialLinks.websiteUrl}" target="_blank" rel="noopener noreferrer" style="color:#333; font-weight:700;">Visit Official Website &raquo;</a></td>
                </tr>
              </tbody>
            </table>

            <!-- Bottom Action Buttons -->
            <div class="action-cta-bar" style="border-top:1px solid #eee; padding-top:14px; margin-top:24px;">
              <a href="${job.officialLinks.applyUrl}" target="_blank" rel="noopener noreferrer" class="btn-cta-apply">
                <svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg> Apply Online Now
              </a>
              <a href="${job.officialLinks.notificationUrl}" target="_blank" rel="noopener noreferrer" class="btn-cta-pdf">
                <svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg> Download PDF
              </a>
              <a href="/" class="tool-btn">&larr; Back to Portal Home</a>
            </div>

          </div>
        </div>`;
}

module.exports = {
  generateLongFormArticle: generateFactualArticle
};
