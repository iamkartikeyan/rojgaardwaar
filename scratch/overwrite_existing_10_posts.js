const fs = require('fs');
const path = require('path');

// Mock window to load data
global.window = {};
require('../js/data.js');
const data = global.window.ROZGAR_DATA;
const jobs = data.RECRUITMENTS;

const exactPosts = JSON.parse(fs.readFileSync(path.join(__dirname, 'exact_10_posts.json'), 'utf8'));

// Format and clean exact content with native website styles
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

  // Ensure clean links
  c = c.replace(/https?:\/\/(?:www\.)?indgovtjobs\.in\/?/gi, 'https://rozgardwaar.com/');
  c = c.replace(/www\.indgovtjobs\.in/gi, 'rozgardwaar.com');
  c = c.replace(/indgovtjobs\.in/gi, 'rozgardwaar.com');
  c = c.replace(/Ind\s*Govt\s*Jobs/gi, 'RozgarDwaar');
  c = c.replace(/Indian\s*Govt\s*Jobs/gi, 'RozgarDwaar');
  c = c.replace(/indgovtjobs/gi, 'RozgarDwaar');

  return c;
}

const ASSET_VERSION = 'v20260902b';
const SVG_LOGO = `<svg class="brand-shield-svg" width="34" height="38" viewBox="0 0 34 38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="RozgarDwaar Shield Logo"><path d="M17 1L2 6.5V17.5C2 27.2 8.4 35.8 17 38C25.6 35.8 32 27.2 32 17.5V6.5L17 1Z" fill="#0B2545" stroke="#134074" stroke-width="2" stroke-linejoin="round"/><path d="M17 5L5 9.4V17.5C5 25.3 10.1 32.2 17 34.2C23.9 32.2 29 25.3 29 17.5V9.4L17 5Z" fill="#134074"/><rect x="13.5" y="14" width="7" height="13" rx="1" fill="#EEF4F8"/><path d="M17 11L11 16H23L17 11Z" fill="#43AA8B"/><circle cx="17" cy="20.5" r="1.5" fill="#0B2545"/></svg>`;

const COMMON_HEADER = (activeNav) => `
  <!-- Top Bar -->
  <header class="site-topbar">
    <div class="container topbar-flex">
      <div class="topbar-left">
        <span>Government Recruitment Notifications &amp; Employment News 2026</span>
      </div>
      <div class="topbar-right">
        <a href="/admit-cards.html">Admit Cards</a>
        <a href="/exam-results.html">Results</a>
        <a href="/central-govt-jobs.html">Central Govt</a>
        <a href="/railway-jobs.html">Railways</a>
        <a href="/bank-jobs.html">Banking</a>
      </div>
    </div>
  </header>

  <!-- Main Branding Header -->
  <div class="site-branding">
    <div class="container brand-flex">
      <div class="brand-logo-title">
        <a href="/" class="brand-link" style="display:flex; align-items:center; text-decoration:none; gap:12px;">
          ${SVG_LOGO}
          <div>
            <div class="logo-title">Rozgar<span>Dwaar</span></div>
            <div class="logo-sub">Government Jobs &amp; Recruitment Information Portal</div>
          </div>
        </a>
      </div>
      <div class="brand-banner">
        <a href="https://whatsapp.com/channel/0029Va9Wxyz" target="_blank" rel="noopener noreferrer" class="whatsapp-badge">
          <svg class="icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          <span>WhatsApp Updates</span>
        </a>
      </div>
    </div>
  </div>

  <!-- Primary Navigation Bar -->
  <nav class="site-navbar">
    <div class="container nav-flex">
      <button class="menu-toggle" id="menuToggle" aria-label="Toggle Navigation">
        <svg class="icon-svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </button>
      <ul class="nav-links" id="navLinks">
        <li><a href="/" class="${activeNav === 'HOME' ? 'active' : ''}">HOME</a></li>
        <li><a href="/central-govt-jobs.html" class="${activeNav === 'CENTRAL' ? 'active' : ''}">CENTRAL JOBS</a></li>
        <li><a href="/railway-jobs.html" class="${activeNav === 'RAILWAY' ? 'active' : ''}">RAILWAY JOBS</a></li>
        <li><a href="/bank-jobs.html" class="${activeNav === 'BANK' ? 'active' : ''}">BANK JOBS</a></li>
        <li><a href="/psu-jobs.html" class="${activeNav === 'PSU' ? 'active' : ''}">PSU JOBS</a></li>
        <li><a href="/fresher-jobs.html" class="${activeNav === 'FRESHER' ? 'active' : ''}">FRESHER JOBS</a></li>
        <li><a href="/graduate-jobs.html" class="${activeNav === 'GRADUATE' ? 'active' : ''}">GRADUATE JOBS</a></li>
        <li><a href="/state-govt-jobs.html" class="${activeNav === 'STATE' ? 'active' : ''}">STATE GOVT</a></li>
      </ul>
    </div>
  </nav>

  <!-- Search Strip -->
  <div class="search-strip">
    <div class="container">
      <form action="/search.html" method="GET" class="search-form-row">
        <div class="search-input-wrap">
          <svg class="search-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input type="text" name="q" placeholder="Search by Department, Sector (Railway, Bank, SSC), Qualification, or State..." autocomplete="off">
        </div>
        <button type="submit" class="search-btn">
          <svg class="icon-svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          Search Jobs
        </button>
      </form>
    </div>
  </div>`;

const COMMON_SIDEBAR = `
        <aside class="sidebar-column">
          <!-- Email Subscription Widget -->
          <div class="content-block sidebar-block" style="padding: 16px; border: 2px solid #008000; border-radius: 4px; text-align: center; margin-bottom: 20px;">
            <div style="font-weight: 700; color: #000; font-size: 14.5px; margin-bottom: 8px;">Get Daily Job Alerts by Email</div>
            <form onsubmit="event.preventDefault(); alert('Subscribed successfully!');" style="display: flex; flex-direction: column; gap: 8px;">
              <input type="email" placeholder="Enter your email" required style="padding: 8px 10px; border: 1px solid #ccc; border-radius: 3px; font-size: 12.5px;">
              <button type="submit" style="background: #000; color: #fff; border: none; padding: 9px; font-weight: 700; font-size: 13px; border-radius: 3px; cursor: pointer;">Subscribe</button>
            </form>
          </div>

          <!-- Quick Categories -->
          <div class="content-block sidebar-block" style="margin-bottom: 20px;">
            <div class="sidebar-header" style="background:#e8eff5; padding:8px 12px; font-weight:700; font-size:13px; color:#0b2545; border-left:3px solid #008000;">Govt Jobs by Education</div>
            <div style="padding: 10px 12px;">
              <ul style="list-style:none; padding:0; margin:0; line-height:2.1; font-size:12.5px;">
                <li><a href="/10th-12th-pass-jobs.html" style="color:#008000; font-weight:700; text-decoration:none;">&check; 10th 12th Pass Government Jobs</a></li>
                <li><a href="/graduate-jobs.html" style="color:#0000cc; font-weight:700; text-decoration:none;">&check; Graduate Government Jobs</a></li>
                <li><a href="/diploma-jobs.html" style="color:#008000; font-weight:700; text-decoration:none;">&check; Diploma Government Jobs</a></li>
                <li><a href="/iti-jobs.html" style="color:#008000; font-weight:700; text-decoration:none;">&check; ITI Government Jobs</a></li>
                <li><a href="/engineering-jobs.html" style="color:#008000; font-weight:700; text-decoration:none;">&check; Engineering Government Jobs</a></li>
              </ul>
            </div>
          </div>
        </aside>`;

const COMMON_FOOTER = `
  <footer class="site-footer">
    <div class="container footer-links">
      <a href="/about.html">About Us</a>
      <a href="/contact.html">Contact Us</a>
      <a href="/privacy-policy.html">Privacy Policy</a>
      <a href="/terms.html">Terms &amp; Conditions</a>
      <a href="/disclaimer.html">Disclaimer</a>
      <a href="/editorial-policy.html">Editorial Policy</a>
      <a href="/corrections-policy.html">Corrections Policy</a>
      <a href="/source-verification.html">Sources Directory</a>
    </div>
    <div class="container copyright">
      Copyright &copy; 2026 <strong>ROZGARDWAAR</strong> | Government Job Notifications &amp; Employment Information. All rights reserved.
    </div>
  </footer>`;

console.log('Overwriting existing 10 posts with exact IndGovtJobs content in native UI/UX...');

let overwrittenCount = 0;

exactPosts.forEach((ep, idx) => {
  // Find matching job in database
  const match = jobs.find(j => {
    return j.title.toLowerCase().includes(ep.title.toLowerCase().substring(0, 20)) ||
           ep.title.toLowerCase().includes(j.title.toLowerCase().substring(0, 20)) ||
           (j.id && j.id.includes(ep.id.substring(0, 15)));
  });

  const targetId = match ? match.id : ep.id;
  const targetPath = path.join(__dirname, '../jobs', `${targetId}.html`);

  const formattedContent = formatExactContentForSiteUI(ep.contentHtml);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${ep.title} | RozgarDwaar</title>
  
  <meta name="title" content="${ep.title} - RozgarDwaar">
  <meta name="description" content="${ep.title} - Official Notification, Eligibility Criteria, Selection Process, and Apply Online Link on RozgarDwaar.">
  <meta name="keywords" content="govt jobs 2026, recruitment notification, sarkari naukri, rozgardwaar, apply online">
  <meta name="author" content="RozgarDwaar Editorial Team">
  <meta name="robots" content="index, follow">
  <meta name="google-adsense-account" content="ca-pub-6828732559916178">
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6828732559916178" crossorigin="anonymous"></script>
  <link rel="canonical" href="https://rozgardwaar.com/jobs/${targetId}.html">

  <link rel="stylesheet" href="/css/style.css?v=${ASSET_VERSION}">
</head>
<body>

  ${COMMON_HEADER('GOVT JOBS')}

  <!-- Main Container -->
  <main class="site-main-section">
    <div class="container">
      <div class="main-two-col-layout">
        
        <!-- Left Content Area -->
        <div class="primary-content-column">
          <div class="content-block" style="padding: 20px;">
            
            <div style="font-size:12px; color:#666; margin-bottom:12px;">
              <a href="/">Home</a> &rsaquo; <a href="/central-govt-jobs.html">Govt Jobs</a> &rsaquo; <span>Recruitment Notification</span>
            </div>

            <!-- Single Clean H1 Tag -->
            <h1 class="portal-main-h1">${ep.title}</h1>
            <div style="font-size:12px; color:#555; margin-bottom:14px; border-bottom:1px solid #eee; padding-bottom:8px;">
              Published by: <strong>RozgarDwaar Editorial Desk</strong> | Updated: <strong>${ep.publishedDate}</strong>
            </div>

            <!-- Action CTA Bar -->
            <div class="action-cta-bar">
              <a href="${ep.applyUrl}" target="_blank" rel="noopener noreferrer" class="btn-cta-apply">
                <svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg> Apply Online Now
              </a>
              <a href="${ep.pdfUrl}" target="_blank" rel="noopener noreferrer" class="btn-cta-pdf">
                <svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg> Download Notification PDF
              </a>
              <a href="/" class="tool-btn">&larr; Back to Portal Home</a>
            </div>

            <!-- Exact Content Body formatted in RozgarDwaar native UI -->
            <div class="exact-article-body" style="font-size:13.5px; line-height:1.8; color:#222;">
              ${formattedContent}
            </div>

            <!-- Bottom Action CTA Bar -->
            <div class="action-cta-bar" style="border-top:1px solid #eee; padding-top:14px; margin-top:24px;">
              <a href="${ep.applyUrl}" target="_blank" rel="noopener noreferrer" class="btn-cta-apply">
                <svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg> Apply Online Now
              </a>
              <a href="${ep.pdfUrl}" target="_blank" rel="noopener noreferrer" class="btn-cta-pdf">
                <svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg> Download Notification PDF
              </a>
              <a href="/" class="tool-btn">&larr; Back to Portal Home</a>
            </div>

          </div>
        </div>

        <!-- Right Sidebar -->
        ${COMMON_SIDEBAR}

      </div>
    </div>
  </main>

  ${COMMON_FOOTER}

</body>
</html>`;

  fs.writeFileSync(targetPath, html, 'utf8');
  overwrittenCount++;
  console.log(`Overwritten existing blog: jobs/${targetId}.html`);
});

console.log(`Successfully overwritten all ${overwrittenCount} existing blog posts with native UI/UX!`);
