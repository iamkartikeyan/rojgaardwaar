const fs = require('fs');
const path = require('path');

// Mock window to load data
global.window = {};
require('./js/data.js');
const data = global.window.ROZGAR_DATA;

if (!data) {
  console.error("ROZGAR_DATA not found!");
  process.exit(1);
}

const JOBS_DIR = path.join(__dirname, 'jobs');
if (!fs.existsSync(JOBS_DIR)) {
  fs.mkdirSync(JOBS_DIR, { recursive: true });
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

const GA4_TAG = `
  <!-- Google Analytics 4 (GA4) / GTM Tag -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-ROZGARDWAAR"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-ROZGARDWAAR');
  </script>
`;

const WEBSITE_SCHEMA = `
  <!-- WebSite & Organization Schema Markup (JSON-LD) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "RozgarDwaar",
    "url": "https://rozgardwaar.com/",
    "description": "Online Information Portal for Central and State Government Recruitment Notifications in India.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://rozgardwaar.com/central-govt-jobs.html?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "RozgarDwaar",
      "url": "https://rozgardwaar.com/",
      "logo": "https://rozgardwaar.com/images/logo.svg"
    }
  }
  </script>
`;

const ASSET_VERSION = 'v20260902b';

// Common SVG Icons
const SVG_CHECK = `<svg class="icon-svg check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#008000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
const SVG_SEARCH = `<svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`;
const SVG_APPLY = `<svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>`;
const SVG_PDF = `<svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>`;
const SVG_WEB = `<svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`;
const SVG_WHATSAPP = `<svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.274.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z"/></svg>`;

const COMMON_HEADER = (activeNav = 'HOME') => `
  <!-- Top Utility Bar (Desktop Only) -->
  <div class="site-top-strip">
    <div class="container">
      <div class="top-strip-inner">
        <div class="top-portal-subtitle">
          Government Recruitment Notifications &amp; Employment News 2026
        </div>
        <div class="top-strip-links">
          <a href="/admit-cards.html">Admit Cards</a>
          <a href="/exam-results.html">Results</a>
          <a href="/central-govt-jobs.html">Central Govt</a>
          <a href="/railway-jobs.html">Railways</a>
          <a href="/bank-jobs.html">Banking</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Main Brand Header Area -->
  <header class="site-brand-area">
    <div class="container">
      <div class="brand-header-flex">
        <a href="/" class="brand-wrapper">
          <img src="/images/logo.svg" alt="RozgarDwaar Logo" class="brand-logo-img" width="38" height="38">
          <div>
            <div class="brand-title-text">
              Rozgar<span>Dwaar</span>
            </div>
            <div class="brand-tagline-text">Government Jobs &amp; Recruitment Information Portal</div>
          </div>
        </a>

        <!-- Desktop Quick Channels -->
        <div class="header-trust-badges">
          <a href="https://whatsapp.com/channel/ROZGARDWAAR" target="_blank" rel="noopener noreferrer" class="trust-badge-pill whatsapp">${SVG_WHATSAPP} WhatsApp Updates</a>
        </div>

        <!-- Mobile Menu Toggle Button (Visible only on Mobile) -->
        <button type="button" class="mobile-menu-toggle-btn" onclick="toggleMobileNav()" aria-label="Open Navigation Menu">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <span class="hamburger-text">MENU</span>
        </button>
      </div>
    </div>
  </header>

  <!-- Primary Desktop Navigation Bar (Desktop Only) -->
  <nav class="site-primary-navbar">
    <div class="container">
      <ul class="nav-menu-list">
        <li><a href="/" class="nav-menu-link ${activeNav === 'HOME' ? 'active' : ''}">HOME</a></li>
        <li><a href="/central-govt-jobs.html" class="nav-menu-link ${activeNav === 'GOVT JOBS' ? 'active' : ''}">CENTRAL JOBS</a></li>
        <li><a href="/railway-jobs.html" class="nav-menu-link ${activeNav === 'RAILWAY JOBS' ? 'active' : ''}">RAILWAY JOBS</a></li>
        <li><a href="/bank-jobs.html" class="nav-menu-link ${activeNav === 'BANK JOBS' ? 'active' : ''}">BANK JOBS</a></li>
        <li><a href="/psu-jobs.html" class="nav-menu-link ${activeNav === 'PSU JOBS' ? 'active' : ''}">PSU JOBS</a></li>
        <li><a href="/fresher-jobs.html" class="nav-menu-link ${activeNav === 'FRESHER JOBS' ? 'active' : ''}">FRESHER JOBS</a></li>
        <li><a href="/graduate-jobs.html" class="nav-menu-link ${activeNav === 'GRADUATE JOBS' ? 'active' : ''}">GRADUATE JOBS</a></li>
        <li><a href="/state-govt-jobs.html" class="nav-menu-link ${activeNav === 'STATE GOVT JOBS' ? 'active' : ''}">STATE GOVT</a></li>
      </ul>
    </div>
  </nav>

  <!-- Modern Hero Search Strip -->
  <div class="site-search-strip">
    <div class="container">
      <form id="main-search-form" class="search-form-wrapper" action="/search.html" method="GET">
        <div class="search-input-inner">
          ${SVG_SEARCH}
          <input type="text" id="main-search-input" name="q" class="search-input" placeholder="Search by Department, Sector (Railway, Bank, SSC), Qualification, or State..." autocomplete="off">
        </div>
        <button type="submit" class="search-btn">${SVG_SEARCH} Search Jobs</button>
      </form>
    </div>
  </div>

  <!-- Ultra-Clean Slide-In Mobile Navigation Drawer -->
  <div id="mobile-drawer-overlay" class="mobile-drawer-overlay" onclick="toggleMobileNav()"></div>
  <div id="mobile-nav-drawer" class="mobile-nav-drawer">
    <div class="mobile-drawer-header">
      <div class="mobile-drawer-title">
        <img src="/images/logo.svg" alt="Logo" width="22" height="22" style="vertical-align:middle; margin-right:6px;">
        RozgarDwaar Menu
      </div>
      <button type="button" class="mobile-drawer-close-btn" onclick="toggleMobileNav()" aria-label="Close Navigation Menu">✕</button>
    </div>
    <div class="mobile-drawer-body">
      <div class="mobile-drawer-section-title">Government Job Sectors</div>
      <ul class="mobile-drawer-links">
        <li><a href="/" onclick="toggleMobileNav()">Home</a></li>
        <li><a href="/central-govt-jobs.html" onclick="toggleMobileNav()">Central Govt Jobs</a></li>
        <li><a href="/railway-jobs.html" onclick="toggleMobileNav()">Railway Jobs (RRB / RRC)</a></li>
        <li><a href="/bank-jobs.html" onclick="toggleMobileNav()">Bank Jobs (IBPS / SBI / RBI)</a></li>
        <li><a href="/psu-jobs.html" onclick="toggleMobileNav()">PSU Recruitments (IOCL / NTPC)</a></li>
        <li><a href="/fresher-jobs.html" onclick="toggleMobileNav()">Fresher Jobs (Zero Experience)</a></li>
        <li><a href="/graduate-jobs.html" onclick="toggleMobileNav()">Graduate Jobs (Any Degree)</a></li>
        <li><a href="/state-govt-jobs.html" onclick="toggleMobileNav()">State Govt Jobs (All States)</a></li>
      </ul>

      <div class="mobile-drawer-section-title">Jobs by Qualification</div>
      <ul class="mobile-drawer-links">
        <li><a href="/10th-12th-pass-jobs.html" onclick="toggleMobileNav()">10th &amp; 12th Pass Jobs</a></li>
        <li><a href="/diploma-jobs.html" onclick="toggleMobileNav()">Diploma / Polytechnic Jobs</a></li>
        <li><a href="/iti-jobs.html" onclick="toggleMobileNav()">ITI Trade Jobs</a></li>
        <li><a href="/engineering-jobs.html" onclick="toggleMobileNav()">Engineering / B.Tech Jobs</a></li>
      </ul>

      <div class="mobile-drawer-section-title">Quick Tools &amp; Alerts</div>
      <ul class="mobile-drawer-links">
        <li><a href="/admit-cards.html" onclick="toggleMobileNav()">Admit Cards &amp; Hall Tickets</a></li>
        <li><a href="/exam-results.html" onclick="toggleMobileNav()">Exam Results &amp; Cutoffs</a></li>
        <li><a href="https://whatsapp.com/channel/ROZGARDWAAR" target="_blank" rel="noopener noreferrer" style="color:#128c7e !important; font-weight:700;">Join WhatsApp Job Channel</a></li>
        <li><a href="https://t.me/ROZGARDWAAR" target="_blank" rel="noopener noreferrer" style="color:#0088cc !important; font-weight:700;">Join Telegram Alerts</a></li>
      </ul>

      <div class="mobile-drawer-section-title">Legal &amp; Information</div>
      <ul class="mobile-drawer-links legal">
        <li><a href="/about.html" onclick="toggleMobileNav()">About Us</a></li>
        <li><a href="/contact.html" onclick="toggleMobileNav()">Contact Us</a></li>
        <li><a href="/privacy-policy.html" onclick="toggleMobileNav()">Privacy Policy</a></li>
        <li><a href="/terms.html" onclick="toggleMobileNav()">Terms &amp; Conditions</a></li>
        <li><a href="/disclaimer.html" onclick="toggleMobileNav()">Disclaimer</a></li>
      </ul>
    </div>
  </div>

  <script>
    function toggleMobileNav() {
      const drawer = document.getElementById('mobile-nav-drawer');
      const overlay = document.getElementById('mobile-drawer-overlay');
      if (drawer && overlay) {
        drawer.classList.toggle('open');
        overlay.classList.toggle('open');
        document.body.classList.toggle('no-scroll');
      }
    }
  </script>
`;

const COMMON_SIDEBAR = `
  <aside class="sidebar-column">
    <!-- 1. Get Daily Job Alerts by Email -->
    <div class="daily-alert-card">
      <div class="daily-alert-title">Get Daily Job Alerts by Email</div>
      <input type="email" id="sidebar-alert-email" class="alert-input-email" placeholder="Enter your email">
      <button type="button" class="alert-btn-subscribe" onclick="alert('Success! You have been subscribed to RozgarDwaar daily alerts.')">Subscribe</button>
    </div>

    <!-- 2. Govt Jobs by Education (Color Coded) -->
    <div class="sidebar-box">
      <div class="sidebar-box-header">Govt Jobs by Education</div>
      <div class="sidebar-box-body">
        <ul class="sidebar-links-list qual-color-list">
          <li class="sidebar-list-item qual-10th-12th"><a href="/10th-12th-pass-jobs.html">${SVG_CHECK} 10th 12th Pass Government Jobs</a></li>
          <li class="sidebar-list-item qual-graduate"><a href="/graduate-jobs.html">${SVG_CHECK} Graduate Government Jobs</a></li>
          <li class="sidebar-list-item qual-diploma"><a href="/diploma-jobs.html">${SVG_CHECK} Diploma Government Jobs</a></li>
          <li class="sidebar-list-item qual-iti"><a href="/iti-jobs.html">${SVG_CHECK} ITI Government Jobs</a></li>
          <li class="sidebar-list-item qual-engg"><a href="/engineering-jobs.html">${SVG_CHECK} Engineering Government Jobs</a></li>
          <li class="sidebar-list-item qual-mba"><a href="/graduate-jobs.html">${SVG_CHECK} MBA Government Jobs</a></li>
          <li class="sidebar-list-item qual-mca"><a href="/engineering-jobs.html">${SVG_CHECK} MCA Government Jobs</a></li>
          <li class="sidebar-list-item qual-law"><a href="/graduate-jobs.html">${SVG_CHECK} Law Government Jobs</a></li>
          <li class="sidebar-list-item qual-pg"><a href="/graduate-jobs.html">${SVG_CHECK} Post Graduate Government Jobs</a></li>
        </ul>
      </div>
    </div>

    <!-- 3. Govt Jobs by Category -->
    <div class="sidebar-box">
      <div class="sidebar-box-header">Govt Jobs by Category</div>
      <div class="sidebar-box-body">
        <ul class="sidebar-links-list">
          <li class="sidebar-list-item"><a href="/railway-jobs.html">– Railway Jobs</a></li>
          <li class="sidebar-list-item"><a href="/bank-jobs.html">– Bank Jobs</a></li>
          <li class="sidebar-list-item"><a href="/psu-jobs.html">– PSU Jobs</a></li>
          <li class="sidebar-list-item"><a href="/central-govt-jobs.html">– SSC Jobs</a></li>
          <li class="sidebar-list-item"><a href="/state-govt-jobs.html">– PSC Jobs</a></li>
          <li class="sidebar-list-item"><a href="/central-govt-jobs.html">– UPSC Jobs</a></li>
          <li class="sidebar-list-item"><a href="/fresher-jobs.html">– Post Office Jobs</a></li>
          <li class="sidebar-list-item"><a href="/state-govt-jobs.html">– Police Jobs</a></li>
          <li class="sidebar-list-item"><a href="/central-govt-jobs.html">– Defence Jobs</a></li>
        </ul>
      </div>
    </div>

    <!-- 4. Govt Jobs by State -->
    <div class="sidebar-box">
      <div class="sidebar-box-header">Govt Jobs by State</div>
      <div class="sidebar-box-body">
        <ul class="sidebar-links-list">
          <li class="sidebar-list-item"><a href="/state-govt-jobs.html">– Uttar Pradesh Jobs</a></li>
          <li class="sidebar-list-item"><a href="/state-govt-jobs.html">– Bihar Jobs</a></li>
          <li class="sidebar-list-item"><a href="/state-govt-jobs.html">– Maharashtra Jobs</a></li>
          <li class="sidebar-list-item"><a href="/state-govt-jobs.html">– Rajasthan Jobs</a></li>
          <li class="sidebar-list-item"><a href="/state-govt-jobs.html">– Delhi Jobs</a></li>
          <li class="sidebar-list-item"><a href="/state-govt-jobs.html">– Madhya Pradesh Jobs</a></li>
          <li class="sidebar-list-item"><a href="/state-govt-jobs.html">– West Bengal Jobs</a></li>
          <li class="sidebar-list-item"><a href="/state-govt-jobs.html">– Tamil Nadu Jobs</a></li>
        </ul>
      </div>
    </div>
  </aside>
`;

const COMMON_FOOTER = `
  <!-- Footer 3-Column Directory Box -->
  <section class="site-bottom-directory">
    <div class="container">
      <div class="bottom-directory-grid">
        <div class="bottom-dir-box">
          <div class="bottom-dir-header">Top Pages</div>
          <div class="bottom-dir-body">
            <ul class="sidebar-links-list">
              <li class="sidebar-list-item"><a href="/central-govt-jobs.html">– Employment News</a></li>
              <li class="sidebar-list-item"><a href="/fresher-jobs.html">– Fresher Jobs</a></li>
              <li class="sidebar-list-item"><a href="/railway-jobs.html">– RRB Jobs</a></li>
              <li class="sidebar-list-item"><a href="/bank-jobs.html">– Bank Jobs</a></li>
              <li class="sidebar-list-item"><a href="/psu-jobs.html">– PSU Jobs</a></li>
            </ul>
          </div>
        </div>

        <div class="bottom-dir-box">
          <div class="bottom-dir-header">Top Railway Job Pages</div>
          <div class="bottom-dir-body">
            <ul class="sidebar-links-list">
              <li class="sidebar-list-item"><a href="/jobs/rrb-alp-technician-2026.html">– RRB Technician 2026</a></li>
              <li class="sidebar-list-item"><a href="/jobs/rrb-alp-technician-2026.html">– RRB ALP 2026</a></li>
              <li class="sidebar-list-item"><a href="/railway-jobs.html">– Railway Group D 2026</a></li>
              <li class="sidebar-list-item"><a href="/railway-jobs.html">– RRB NTPC 2026</a></li>
            </ul>
          </div>
        </div>

        <div class="bottom-dir-box">
          <div class="bottom-dir-header">Job Alert Channels</div>
          <div class="bottom-dir-body">
            <ul class="sidebar-links-list">
              <li class="sidebar-list-item"><a href="https://whatsapp.com/channel/ROZGARDWAAR" target="_blank" rel="noopener noreferrer">Join WhatsApp Channel</a></li>
              <li class="sidebar-list-item"><a href="https://t.me/ROZGARDWAAR" target="_blank" rel="noopener noreferrer">Join Telegram Group</a></li>
              <li class="sidebar-list-item"><a href="https://x.com/ROZGARDWAAR" target="_blank" rel="noopener noreferrer">Follow Twitter (X) Page</a></li>
              <li class="sidebar-list-item"><a href="https://instagram.com/ROZGARDWAAR" target="_blank" rel="noopener noreferrer">Follow Instagram Page</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Dark Footer Bottom Bar -->
  <footer class="site-dark-footer">
    <div class="container">
      <div class="footer-legal-links">
        <a href="/about.html">About Us</a>
        <a href="/contact.html">Contact Us</a>
        <a href="/privacy-policy.html">Privacy Policy</a>
        <a href="/terms.html">Terms &amp; Conditions</a>
        <a href="/disclaimer.html">Disclaimer</a>
        <a href="/editorial-policy.html">Editorial Policy</a>
        <a href="/corrections-policy.html">Corrections Policy</a>
        <a href="/source-verification.html">Sources Directory</a>
      </div>
      <div class="footer-copyright-note">
        Copyright &copy; 2026 <strong>ROZGARDWAAR</strong> | Government Job Notifications &amp; Employment Information. All rights reserved.
      </div>
    </div>
  </footer>

  <!-- Interactive Cookie Consent Banner -->
  <div id="rozgar-cookie-banner" class="cookie-consent-banner" style="display:none;">
    <div class="cookie-consent-text">
      <strong>Cookie Policy:</strong> RozgarDwaar uses cookies and analytical tracking to personalize advertisements via Google AdSense, measure traffic, and enhance your portal browsing experience. By continuing, you agree to our <a href="/privacy-policy.html">Privacy Policy</a>.
    </div>
    <div class="cookie-consent-actions">
      <button class="cookie-btn-accept" onclick="acceptCookies()">Accept All Cookies</button>
      <button class="cookie-btn-decline" onclick="dismissCookies()">Essential Only</button>
    </div>
  </div>

  <script>
    function checkCookieConsent() {
      if (!localStorage.getItem('rozgar_cookie_consent')) {
        document.getElementById('rozgar-cookie-banner').style.display = 'flex';
      }
    }
    function acceptCookies() {
      localStorage.setItem('rozgar_cookie_consent', 'accepted');
      document.getElementById('rozgar-cookie-banner').style.display = 'none';
    }
    function dismissCookies() {
      localStorage.setItem('rozgar_cookie_consent', 'essential');
      document.getElementById('rozgar-cookie-banner').style.display = 'none';
    }
    document.addEventListener('DOMContentLoaded', checkCookieConsent);
  </script>
  <script src="/js/search.js?v=${ASSET_VERSION}" defer></script>
`;

function generateJobPostingSchema(job, stateObj) {
  return `
  <!-- Google JobPosting Schema Markup (JSON-LD) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    "title": "${escapeHtml(job.title)}",
    "description": "${escapeHtml(job.title)} announced by ${escapeHtml(job.org)} for ${job.vacancies} vacancies of ${escapeHtml(job.posts)}. Salary: ${escapeHtml(job.salary)}. Minimum Qualification: ${escapeHtml(job.qualificationText)}.",
    "identifier": {
      "@type": "PropertyValue",
      "name": "${escapeHtml(job.shortOrg)}",
      "value": "${job.id}"
    },
    "datePosted": "${job.importantDates.startDate || '2026-08-15'}",
    "validThrough": "${job.importantDates.lastDate || '2026-10-31'}T23:59:59+05:30",
    "employmentType": "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "${escapeHtml(job.org)}",
      "sameAs": "${job.officialLinks.websiteUrl}"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "${escapeHtml(stateObj.name)}",
        "addressCountry": "IN"
      }
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": 25000,
        "maxValue": 85000,
        "unitText": "MONTH"
      }
    },
    "qualifications": "${escapeHtml(job.qualificationText)}",
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "India"
    }
  }
  </script>
  `;
}

// 1. Generate All 303 Jobs
console.log("Generating static HTML files with SVG Logo and zero emojis for all 303 jobs...");
let generatedCount = 0;
data.RECRUITMENTS.forEach(job => {
  const filePath = path.join(JOBS_DIR, `${job.id}.html`);
  const stateObj = data.STATES.find(s => s.id === job.state) || data.STATES[0];
  const qualNames = job.qualifications.map(qId => {
    const q = data.QUALIFICATIONS.find(item => item.id === qId);
    return q ? q.name : qId;
  }).join(' / ');

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(job.title)} - Apply Online ${job.vacancies} Posts | RozgarDwaar</title>
  
  <meta name="title" content="${escapeHtml(job.title)} - RozgarDwaar">
  <meta name="description" content="${escapeHtml(job.org)} Recruitment 2026: Apply online for ${job.vacancies} vacancies of ${escapeHtml(job.posts)}. Salary: ${escapeHtml(job.salary)}. Last Date: ${job.importantDates.lastDate}.">
  <meta name="keywords" content="${escapeHtml(job.shortOrg)} recruitment 2026, ${escapeHtml(job.posts)}, govt jobs 2026, ${escapeHtml(job.org)} vacancy, ${escapeHtml(stateObj.name)} govt jobs">
  <meta name="author" content="RozgarDwaar Editorial Team">
  <meta name="robots" content="index, follow">
  <meta name="google-adsense-account" content="ca-pub-6828732559916178">
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6828732559916178" crossorigin="anonymous"></script>
  <link rel="canonical" href="https://rozgardwaar.com/jobs/${job.id}.html">

  ${GA4_TAG}
  ${generateJobPostingSchema(job, stateObj)}

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
              <a href="/">Home</a> &rsaquo; <a href="/central-govt-jobs.html">${escapeHtml(job.subCategory || 'Govt Jobs')}</a> &rsaquo; <span>${escapeHtml(job.shortOrg)}</span>
            </div>

            <!-- Single Optimized H1 Tag -->
            <h1 class="portal-main-h1">${escapeHtml(job.title)}</h1>
            <div style="font-size:12px; color:#555; margin-bottom:14px; border-bottom:1px solid #eee; padding-bottom:8px;">
              Published by: <strong>RozgarDwaar Editorial Desk</strong> | Source: <strong>Official Recruitment Notice (${escapeHtml(job.shortOrg)})</strong>
            </div>

            <div class="action-cta-bar">
              <a href="${job.officialLinks.applyUrl}" target="_blank" rel="noopener noreferrer" class="btn-cta-apply">
                ${SVG_APPLY} Apply Online (Official Website)
              </a>
              <a href="${job.officialLinks.notificationUrl}" target="_blank" rel="noopener noreferrer" class="btn-cta-pdf">
                ${SVG_PDF} Download Notification PDF
              </a>
              <a href="${job.officialLinks.websiteUrl}" target="_blank" rel="noopener noreferrer" class="btn-cta-web">
                ${SVG_WEB} Official Website
              </a>
            </div>

            <!-- 1. Official Recruitment Summary Table -->
            <div class="green-check-title">
              ${SVG_CHECK} <span>1. Official Recruitment Overview &amp; Key Details:</span>
            </div>
            
            <table class="detail-table-custom">
              <tbody>
                <tr><th style="width:32%;">Recruiting Organization</th><td><strong>${escapeHtml(job.org)} (${escapeHtml(job.shortOrg)})</strong></td></tr>
                <tr><th>Advertised Post / Designation</th><td><strong>${escapeHtml(job.posts)}</strong></td></tr>
                <tr><th>Total Sanctioned Vacancies</th><td><strong style="color:#008000; font-size:14.5px;">${job.vacancies.toLocaleString('en-IN')} Posts</strong></td></tr>
                <tr><th>Pay Scale / Remuneration</th><td><strong>${escapeHtml(job.salary)}</strong></td></tr>
                <tr><th>Educational Qualification</th><td>${escapeHtml(qualNames)} (${escapeHtml(job.qualificationText)})</td></tr>
                <tr><th>Age Limit Criteria</th><td>${escapeHtml(job.ageLimit)}</td></tr>
                ${job.ageRelaxation ? `<tr><th>Applicable Age Relaxation</th><td>${escapeHtml(job.ageRelaxation)}</td></tr>` : ''}
                <tr><th>Application Registration Fee</th><td>${escapeHtml(job.fee)}</td></tr>
                <tr><th>Application Start Date</th><td>${job.importantDates.startDate}</td></tr>
                <tr><th>Application Closing Date</th><td><strong style="color:#cc0000; font-size:14.5px;">${job.importantDates.lastDate}</strong></td></tr>
                ${job.importantDates.examDate ? `<tr><th>Exam / Selection Date</th><td>${job.importantDates.examDate}</td></tr>` : ''}
                <tr><th>Primary Posting Location</th><td>${escapeHtml(stateObj.name)}</td></tr>
              </tbody>
            </table>

            <!-- 2. Educational Eligibility -->
            <div class="green-check-title" style="margin-top:18px;">
              ${SVG_CHECK} <span>2. Educational Qualification &amp; Eligibility:</span>
            </div>
            <p style="font-size:13.5px; line-height:1.75; color:#333; margin-bottom:14px;">
              Candidates applying for <strong>${escapeHtml(job.posts)}</strong> in <strong>${escapeHtml(job.org)}</strong> must possess <strong>${escapeHtml(job.qualificationText)}</strong> from a recognized board, council, or university. Candidates should verify all eligibility criteria and certificates prior to the closing date (<strong>${job.importantDates.lastDate}</strong>).
            </p>

            <!-- 3. Official Links & Application -->
            <div class="green-check-title" style="margin-top:18px;">
              ${SVG_CHECK} <span>3. Official Notification &amp; Application Links:</span>
            </div>
            <table class="detail-table-custom">
              <tbody>
                <tr>
                  <th style="width:38%;">Online Application Portal</th>
                  <td><a href="${job.officialLinks.applyUrl}" target="_blank" rel="noopener noreferrer" style="color:#008000; font-weight:700;">Click Here to Apply Online &raquo;</a></td>
                </tr>
                <tr>
                  <th>Official Notification (PDF)</th>
                  <td><a href="${job.officialLinks.notificationUrl}" target="_blank" rel="noopener noreferrer" style="color:#0000cc; font-weight:700;">Download Official Notice PDF &raquo;</a></td>
                </tr>
                <tr>
                  <th>Official Organization Website</th>
                  <td><a href="${job.officialLinks.websiteUrl}" target="_blank" rel="noopener noreferrer" style="color:#333; font-weight:700;">Visit Official Website &raquo;</a></td>
                </tr>
              </tbody>
            </table>

            <!-- Bottom Navigation Bar -->
            <div class="action-cta-bar" style="border-top:1px solid #eee; padding-top:14px; margin-top:20px;">
              <a href="${job.officialLinks.applyUrl}" target="_blank" rel="noopener noreferrer" class="btn-cta-apply">
                ${SVG_APPLY} Apply Online Now
              </a>
              <a href="${job.officialLinks.notificationUrl}" target="_blank" rel="noopener noreferrer" class="btn-cta-pdf">
                ${SVG_PDF} Official PDF Notification
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

  fs.writeFileSync(filePath, html, 'utf8');
  generatedCount++;
});
console.log(`Generated ${generatedCount} job files in /jobs/`);

// 2. Generate Hub HTML (Clean Minimal Cards Everywhere)
function generateHubPageHtml({ title, pageTitle, metaDesc, activeNav, intro, jobs, keySections, faqs, canonicalUrl }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(pageTitle)} | RozgarDwaar</title>
  
  <meta name="title" content="${escapeHtml(pageTitle)}">
  <meta name="description" content="${escapeHtml(metaDesc)}">
  <meta name="keywords" content="Govt Jobs 2026, RozgarDwaar, Sarkari Naukri, Online Application">
  <meta name="author" content="RozgarDwaar Editorial Team">
  <meta name="robots" content="index, follow">
  <meta name="google-adsense-account" content="ca-pub-6828732559916178">
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6828732559916178" crossorigin="anonymous"></script>
  <link rel="canonical" href="https://rozgardwaar.com${canonicalUrl}">

  ${GA4_TAG}
  ${WEBSITE_SCHEMA}

  <link rel="stylesheet" href="/css/style.css?v=${ASSET_VERSION}">
</head>
<body>

  ${COMMON_HEADER(activeNav)}

  <main class="site-main-section">
    <div class="container">
      <div class="main-two-col-layout">
        
        <!-- Left Content Area -->
        <div class="primary-content-column">
          <div class="content-block" style="padding: 18px 20px;">
            <!-- Single Optimized H1 Tag -->
            <h1 class="portal-main-h1" style="font-size: 18px; font-weight: 800; color: #0b2545; margin-bottom: 8px;">
              ${escapeHtml(title)}
            </h1>

            <p style="font-size: 13.5px; line-height: 1.6; color: #4a5568; margin-bottom: 16px;">
              ${escapeHtml(intro)}
            </p>

            <div class="news-feed-list" style="padding:0;">
              ${jobs.map(j => `
                <div class="news-feed-card">
                  <h2 class="news-feed-title">
                    <a href="${j.url}">${escapeHtml(j.title)}</a>
                  </h2>
                  <p class="news-feed-summary">
                    ${escapeHtml(j.desc)} <a href="${j.url}" class="read-more-link">Read more &raquo;</a>
                  </p>
                </div>
              `).join('')}
            </div>

            <div class="green-check-title" style="margin-top:20px;">
              ${SVG_CHECK} <span>Govt Jobs by Qualification:</span>
            </div>
            <div class="qual-hub-links-box">
              <a href="/10th-12th-pass-jobs.html" style="color:#008000;">10th Pass / 12th Pass Govt Jobs</a>
              <a href="/graduate-jobs.html" style="color:#0000cc;">Graduate / Degree Govt Jobs</a>
              <a href="/diploma-jobs.html" style="color:#cc0000;">Diploma Govt Jobs (Polytechnic)</a>
              <a href="/iti-jobs.html" style="color:#990066;">ITI Pass Govt Jobs (All Trades)</a>
              <a href="/engineering-jobs.html" style="color:#008000;">Engineering / B.Tech Govt Jobs</a>
              <a href="/graduate-jobs.html" style="color:#0000cc;">Post Graduate / Master Degree Jobs</a>
            </div>

            ${(keySections || []).map(s => `
              <div class="green-check-title">
                ${SVG_CHECK} <span>${escapeHtml(s.title)}</span>
              </div>
              <ul style="padding-left: 20px; line-height: 1.7; font-size: 13px; color: #333; margin-bottom: 16px;">
                ${s.items.map(item => `<li>${item}</li>`).join('')}
              </ul>
            `).join('')}

            ${(faqs && faqs.length > 0) ? `
              <div class="green-check-title">
                ${SVG_CHECK} <span>Frequently Asked Questions:</span>
              </div>
              <div style="line-height: 1.7; font-size: 13px; color: #333;">
                ${faqs.map(f => `
                  <p style="margin-bottom: 8px;">
                    <strong>${escapeHtml(f.q)}</strong><br>
                    ${escapeHtml(f.a)}
                  </p>
                `).join('')}
              </div>
            ` : ''}

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
}

const hubs = [
  {
    fileName: 'railway-jobs.html',
    title: 'Railway Jobs 2026 Recruitment',
    pageTitle: 'Railway Jobs 2026 - Indian Railways Recruitment',
    metaDesc: 'Latest Indian Railway Recruitment notifications for RRB ALP, Technician, JE, NTPC & Group D posts.',
    activeNav: 'RAILWAY JOBS',
    intro: 'Latest Indian Railway employment recruitment notifications for 10th Pass, 12th Pass, Diploma, ITI and Graduates.',
    canonicalUrl: '/railway-jobs.html',
    jobs: data.RECRUITMENTS.filter(j => j.category === 'railway').slice(0, 15).map(j => ({
      title: j.title,
      url: `/jobs/${j.id}.html`,
      desc: `${j.org} invites online applications for ${j.posts}.`
    })),
    keySections: [
      {
        title: 'Railway Exams 2026-27 List:',
        items: [
          '<strong>RRB NTPC:</strong> Non-Technical Popular Categories.',
          '<strong>RRB JE:</strong> Junior Engineer across Civil, Electrical & Mechanical branches.',
          '<strong>RRB Group D:</strong> Track maintainers, helpers, and Level-1 posts.'
        ]
      }
    ],
    faqs: [
      { q: 'What are popular Railway jobs in 2026?', a: 'Top posts include RRB ALP, Technician Grade 1/3, Junior Engineer, and RRC Trade Apprentices.' }
    ]
  },
  {
    fileName: 'bank-jobs.html',
    title: 'Bank Jobs 2026 Recruitment',
    pageTitle: 'Bank Jobs 2026 - Latest Banking Recruitment',
    metaDesc: 'Bank Jobs 2026 for 10th, 12th, Graduates, and Post Graduates. SBI PO/Clerk, IBPS PO, RRB, and RBI recruitments.',
    activeNav: 'BANK JOBS',
    intro: 'Latest Bank employment recruitment notifications for Degree Holders and Professionals.',
    canonicalUrl: '/bank-jobs.html',
    jobs: data.RECRUITMENTS.filter(j => j.category === 'banking').slice(0, 15).map(j => ({
      title: j.title,
      url: `/jobs/${j.id}.html`,
      desc: `${j.org} invites online applications for ${j.posts}.`
    })),
    keySections: [
      {
        title: 'Types of Banking Jobs Available:',
        items: [
          'Clerical Cadre (Clerk, Junior Associates, Cashier)',
          'Probationary Officer (PO) & Management Trainee (MT)',
          'Specialist Officers (SO) – IT, Law, HR, Marketing'
        ]
      }
    ],
    faqs: [
      { q: 'How to apply for Bank PO jobs in 2026?', a: 'Check the direct links above to open the official IBPS or SBI application portal.' }
    ]
  },
  {
    fileName: 'central-govt-jobs.html',
    title: 'Central Government Jobs 2026 Recruitment',
    pageTitle: 'Central Government Jobs 2026',
    metaDesc: 'Discover Central Government Jobs 2026 across Ministries, SSC, UPSC, Defence, and Constitutional Commissions.',
    activeNav: 'GOVT JOBS',
    intro: 'Find latest Indian Government Jobs 2026 across Central Ministries, Union Departments, SSC, UPSC, and Armed Forces.',
    canonicalUrl: '/central-govt-jobs.html',
    jobs: data.RECRUITMENTS.filter(j => j.category === 'central-govt' || j.category === 'ssc' || j.category === 'upsc').slice(0, 15).map(j => ({
      title: j.title,
      url: `/jobs/${j.id}.html`,
      desc: `${j.org} invites online applications for ${j.posts}.`
    })),
    keySections: [],
    faqs: []
  },
  {
    fileName: 'psu-jobs.html',
    title: 'PSU Jobs 2026 Recruitment',
    pageTitle: 'PSU Jobs 2026 - Public Sector Undertakings Recruitment',
    metaDesc: 'Latest PSU Jobs for Engineers, Commerce, and MBA graduates in Maharatna & Navratna companies.',
    activeNav: 'PSU JOBS',
    intro: 'Latest PSU recruitment notifications in IOCL, NTPC, ONGC, SAIL, BEL, and HAL.',
    canonicalUrl: '/psu-jobs.html',
    jobs: data.RECRUITMENTS.filter(j => j.category === 'psu').slice(0, 15).map(j => ({
      title: j.title,
      url: `/jobs/${j.id}.html`,
      desc: `${j.org} invites online applications for ${j.posts}.`
    })),
    keySections: [],
    faqs: []
  },
  {
    fileName: 'fresher-jobs.html',
    title: 'Fresher Govt Jobs 2026 Recruitment',
    pageTitle: 'Fresher Govt Jobs 2026',
    metaDesc: 'Discover entry-level government recruitments for freshers in Post Office, Railways, SSC, and Banks.',
    activeNav: 'FRESHER JOBS',
    intro: 'Discover government recruitments for recent 10th, 12th, ITI, Diploma, or Degree passouts.',
    canonicalUrl: '/fresher-jobs.html',
    jobs: data.RECRUITMENTS.filter(j => j.category === 'no-exam' || j.category === 'fresher' || j.qualifications.includes('10th-pass')).slice(0, 15).map(j => ({
      title: j.title,
      url: `/jobs/${j.id}.html`,
      desc: `${j.org} invites online applications for ${j.posts}.`
    })),
    keySections: [],
    faqs: []
  },
  {
    fileName: 'graduate-jobs.html',
    title: 'Graduate Govt Jobs 2026 Recruitment',
    pageTitle: 'Graduate Govt Jobs 2026',
    metaDesc: 'Apply online for latest Graduate Government Jobs for BA, B.Sc, B.Com, B.Tech, BBA, and BCA degree holders.',
    activeNav: 'GRADUATE JOBS',
    intro: 'Apply online for latest Graduate Government Jobs for all degree holders across India.',
    canonicalUrl: '/graduate-jobs.html',
    jobs: data.RECRUITMENTS.filter(j => j.qualifications.includes('graduate')).slice(0, 15).map(j => ({
      title: j.title,
      url: `/jobs/${j.id}.html`,
      desc: `${j.org} invites online applications for ${j.posts}.`
    })),
    keySections: [],
    faqs: []
  },
  {
    fileName: 'state-govt-jobs.html',
    title: 'State Govt Jobs 2026 Recruitment',
    pageTitle: 'State Govt Jobs 2026',
    metaDesc: 'Browse State PSC, Police, High Court, and Subordinate Board recruitments.',
    activeNav: 'STATE GOVT JOBS',
    intro: 'Browse State Public Service Commission (PSC), Police Recruitment, and High Court notifications.',
    canonicalUrl: '/state-govt-jobs.html',
    jobs: data.RECRUITMENTS.filter(j => j.category === 'state-govt' || j.state !== 'all-india').slice(0, 15).map(j => ({
      title: j.title,
      url: `/jobs/${j.id}.html`,
      desc: `${j.org} invites online applications for ${j.posts}.`
    })),
    keySections: [],
    faqs: []
  },
  {
    fileName: '10th-12th-pass-jobs.html',
    title: '10th 12th Pass Govt Jobs 2026 Recruitment',
    pageTitle: '10th 12th Pass Govt Jobs 2026',
    metaDesc: 'Discover Government Jobs for 10th and 12th passed candidates.',
    activeNav: 'GOVT JOBS',
    intro: 'Find recruitment notifications for Matric (10th) and Intermediate (12th) pass candidates.',
    canonicalUrl: '/10th-12th-pass-jobs.html',
    jobs: data.RECRUITMENTS.filter(j => j.qualifications.includes('10th-pass') || j.qualifications.includes('12th-pass')).slice(0, 15).map(j => ({
      title: j.title,
      url: `/jobs/${j.id}.html`,
      desc: `${j.org} invites online applications for ${j.posts}.`
    })),
    keySections: [],
    faqs: []
  },
  {
    fileName: 'diploma-jobs.html',
    title: 'Diploma Govt Jobs 2026 Recruitment',
    pageTitle: 'Diploma Govt Jobs 2026 - Polytechnic Openings',
    metaDesc: 'Latest Government Jobs for Polytechnic Diploma holders.',
    activeNav: 'GOVT JOBS',
    intro: 'Find Diploma government jobs in Railways, PSUs, and State Engineering Departments.',
    canonicalUrl: '/diploma-jobs.html',
    jobs: data.RECRUITMENTS.filter(j => j.qualifications.includes('diploma')).slice(0, 15).map(j => ({
      title: j.title,
      url: `/jobs/${j.id}.html`,
      desc: `${j.org} invites online applications for ${j.posts}.`
    })),
    keySections: [],
    faqs: []
  },
  {
    fileName: 'iti-jobs.html',
    title: 'ITI Govt Jobs 2026 Recruitment',
    pageTitle: 'ITI Govt Jobs 2026',
    metaDesc: 'Latest ITI Government Jobs across all technical trades.',
    activeNav: 'GOVT JOBS',
    intro: 'Discover all active ITI Government recruitments across technical trades.',
    canonicalUrl: '/iti-jobs.html',
    jobs: data.RECRUITMENTS.filter(j => j.qualifications.includes('iti')).slice(0, 15).map(j => ({
      title: j.title,
      url: `/jobs/${j.id}.html`,
      desc: `${j.org} invites online applications for ${j.posts}.`
    })),
    keySections: [],
    faqs: []
  },
  {
    fileName: 'engineering-jobs.html',
    title: 'Engineering Govt Jobs 2026 Recruitment',
    pageTitle: 'Engineering Govt Jobs 2026 - B.Tech / BE Openings',
    metaDesc: 'Apply online for Engineering Government Jobs in PSUs, Railways, and Central Ministries.',
    activeNav: 'GOVT JOBS',
    intro: 'Explore engineering government jobs for Civil, Mechanical, Electrical, Computer Science, and Electronics branches.',
    canonicalUrl: '/engineering-jobs.html',
    jobs: data.RECRUITMENTS.filter(j => j.qualifications.includes('btech-engineering')).slice(0, 15).map(j => ({
      title: j.title,
      url: `/jobs/${j.id}.html`,
      desc: `${j.org} invites online applications for ${j.posts}.`
    })),
    keySections: [],
    faqs: []
  },
  {
    fileName: 'admit-cards.html',
    title: 'Latest Admit Cards & Hall Tickets 2026',
    pageTitle: 'Admit Cards 2026 - Download Hall Tickets',
    metaDesc: 'Direct download links for government exam admit cards and hall tickets.',
    activeNav: 'HOME',
    intro: 'Download government examination hall tickets and admit cards across UPSC, SSC, RRB, IBPS, and State PSC exams.',
    canonicalUrl: '/admit-cards.html',
    jobs: data.ADMIT_CARDS.map(a => ({
      title: `${a.title} (${a.shortOrg})`,
      url: a.downloadUrl,
      desc: `${a.shortOrg} has released examination admit card / hall ticket for download.`
    })),
    keySections: [],
    faqs: []
  },
  {
    fileName: 'exam-results.html',
    title: 'Government Exam Results & Cutoff Scores 2026',
    pageTitle: 'Exam Results 2026 - Check Scores & Cutoffs',
    metaDesc: 'Latest declared government examination results, merit lists, and scorecards.',
    activeNav: 'HOME',
    intro: 'Check declared government examination results and selection lists across Central and State departments.',
    canonicalUrl: '/exam-results.html',
    jobs: data.RESULTS.map(r => ({
      title: r.title,
      url: r.downloadUrl,
      desc: `${r.title} declared. Official scorecards and cutoff lists available.`
    })),
    keySections: [],
    faqs: []
  }
];

hubs.forEach(h => {
  const filePath = path.join(__dirname, h.fileName);
  fs.writeFileSync(filePath, generateHubPageHtml(h), 'utf8');
  console.log(`Generated Hub HTML: ${h.fileName}`);
});

// Generate dedicated search.html page
const searchPageHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Search Government Jobs 2026 - Central &amp; State Recruitment Openings | RozgarDwaar</title>
  
  <meta name="title" content="Search Government Jobs 2026 - Central &amp; State Recruitment Openings">
  <meta name="description" content="Search active Indian government recruitment notifications across Central, State, Railway, Banking, SSC, and PSU sectors.">
  <meta name="robots" content="index, follow">
  <meta name="google-adsense-account" content="ca-pub-6828732559916178">
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6828732559916178" crossorigin="anonymous"></script>
  <link rel="canonical" href="https://rozgardwaar.com/search.html">

  ${GA4_TAG}
  ${WEBSITE_SCHEMA}

  <link rel="stylesheet" href="/css/style.css?v=${ASSET_VERSION}">
</head>
<body>

  ${COMMON_HEADER('HOME')}

  <main class="site-main-section">
    <div class="container">
      <div class="main-two-col-layout">
        
        <!-- Left Content Area -->
        <div class="primary-content-column">
          <div class="content-block" style="padding: 18px 20px;">
            <h1 class="portal-main-h1" style="font-size:18px; font-weight:800; color:#0b2545; margin-bottom:8px;">Government Jobs Search Results</h1>
            <div style="font-size:12.5px; color:#555; margin-bottom:14px; padding-bottom:8px; border-bottom:1px solid #edf2f7;">
              Query: <strong id="search-query-display" style="color:#0b2545;">All Current Openings</strong>
            </div>

            <div id="search-results-output">
              <div class="news-feed-list" style="padding:0;">
                ${data.RECRUITMENTS.slice(0, 25).map(j => `
                  <div class="news-feed-card">
                    <h2 class="news-feed-title">
                      <a href="/jobs/${j.id}.html">${escapeHtml(j.title)}</a>
                    </h2>
                    <p class="news-feed-summary">
                      ${escapeHtml(j.org)} invites online applications for ${escapeHtml(j.posts)}. <a href="/jobs/${j.id}.html" class="read-more-link">Read more &raquo;</a>
                    </p>
                  </div>
                `).join('')}
              </div>
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

fs.writeFileSync(path.join(__dirname, 'search.html'), searchPageHtml, 'utf8');
console.log("Generated search.html dedicated page.");

// 3. Pre-render index.html with vector SVG logo and zero emojis
const topHighlights = data.RECRUITMENTS.slice(0, 6);
const currentFeed = data.RECRUITMENTS.slice(0, 15);
const topStates = [
  { id: "maharashtra", name: "Maharashtra Govt Jobs" },
  { id: "uttar-pradesh", name: "Uttar Pradesh Govt Jobs" },
  { id: "andhra-pradesh", name: "Andhra Pradesh Govt Jobs" },
  { id: "tamil-nadu", name: "Tamil Nadu Govt Jobs" },
  { id: "delhi", name: "Delhi Govt Jobs" },
  { id: "bihar", name: "Bihar Govt Jobs" },
  { id: "west-bengal", name: "West Bengal Govt Jobs" },
  { id: "madhya-pradesh", name: "Madhya Pradesh Govt Jobs" },
  { id: "odisha", name: "Odisha Govt Jobs" },
  { id: "gujarat", name: "Gujarat Govt Jobs" },
  { id: "haryana", name: "Haryana Govt Jobs" },
  { id: "kerala", name: "Kerala Govt Jobs" },
  { id: "punjab", name: "Punjab Govt Jobs" },
  { id: "karnataka", name: "Karnataka Govt Jobs" },
  { id: "rajasthan", name: "Rajasthan Govt Jobs" }
];

const indexStaticHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>RozgarDwaar - Central & State Government Jobs 2026 | Indian Govt Recruitment Portal</title>
  
  <meta name="title" content="RozgarDwaar - Central & State Government Jobs 2026 | Indian Govt Recruitment Portal">
  <meta name="description" content="Discover verified Indian government recruitment notifications across Central Govt, Railway, Banking, PSU, SSC, UPSC, Defence, Police, State PSCs, 10th/12th Pass, Graduate, Diploma, ITI & Engineering jobs.">
  <meta name="keywords" content="RozgarDwaar, Indian government jobs, central govt jobs 2026, railway recruitment 2026, ssc cgl, bank po, upsc, defence jobs, 10th pass govt jobs, 12th pass jobs, graduate govt jobs">
  <meta name="author" content="RozgarDwaar Editorial Team">
  <meta name="robots" content="index, follow">
  <meta name="google-adsense-account" content="ca-pub-6828732559916178">
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6828732559916178" crossorigin="anonymous"></script>
  <link rel="canonical" href="https://rozgardwaar.com/">

  ${GA4_TAG}
  ${WEBSITE_SCHEMA}

  <link rel="stylesheet" href="/css/style.css?v=${ASSET_VERSION}">
</head>
<body>

  ${COMMON_HEADER('HOME')}

  <!-- Main Container Layout -->
  <main class="site-main-section">
    <div class="container">
      <div class="main-two-col-layout">

        <!-- Left Primary Column (Pure Static HTML) -->
        <div class="primary-content-column" id="main-content-area">
          
          <h1 class="portal-main-h1" style="font-size: 16.5px; font-weight: 800; color: #0b2545; margin: 0 0 12px; padding: 4px 2px;">
            Latest Government Jobs Recruitment Notifications 2026
          </h1>

          <div class="content-block">
            <div class="section-bar-header">Latest Government Jobs</div>
            <div class="highlight-jobs-box">
              ${topHighlights.map(job => `
                <div class="highlight-job-item">
                  <a href="/jobs/${job.id}.html">
                    ${escapeHtml(job.title)}
                  </a>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="content-block">
            <div class="section-bar-header">New / Updated Govt Job Notifications</div>
            <div class="news-feed-list">
              ${currentFeed.map(job => {
                return `
                  <div class="news-feed-card">
                    <h2 class="news-feed-title">
                      <a href="/jobs/${job.id}.html">${escapeHtml(job.title)}</a>
                    </h2>
                    <p class="news-feed-summary">
                      ${escapeHtml(job.org)} invites online applications for ${escapeHtml(job.posts)}. <a href="/jobs/${job.id}.html" class="read-more-link">Read more &raquo;</a>
                    </p>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <div class="content-block">
            <div class="section-bar-header">State wise Govt Jobs</div>
            <div class="state-check-grid">
              ${topStates.map(s => `
                <a href="/state-govt-jobs.html" class="state-check-link">
                  ${SVG_CHECK} <span>${s.name}</span>
                </a>
              `).join('')}
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

fs.writeFileSync(path.join(__dirname, 'index.html'), indexStaticHtml, 'utf8');
console.log("Pre-rendered index.html with official SVG vector logo and zero emojis.");

// 4. Update Policy HTML Pages with vector SVG logo and zero emojis
const policyFiles = [
  'about.html', 'contact.html', 'privacy-policy.html', 'terms.html',
  'disclaimer.html', 'editorial-policy.html', 'corrections-policy.html',
  'source-verification.html'
];

policyFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Clean misleading claims in schema and body
    content = content.replace(/India's Leading Government Job Discovery and Information Portal for Central and State Recruitment Notifications\./g, 'Online Information Portal for Central and State Government Recruitment Notifications in India.');
    content = content.replace(/India's Leading Government Job Discovery Portal/g, 'Government Job Notifications & Employment Information');
    content = content.replace(/India's Premier Government Job Discovery Gateway/g, 'Government Jobs & Recruitment Information Portal');
    content = content.replace(/<span class="verified-portal-tag">Official Portal<\/span>/g, '');
    content = content.replace(/<div class="trust-badge-pill">100% Free Alerts<\/div>/g, '');
    content = content.replace(/Official Verification Status: <span style="color:#008000; font-weight:700;">AUTHENTICATED PRIMARY SOURCE<\/span>/g, 'Information Source: Official Notification');
    content = content.replace(/🏛️|🚪|🚆|🏦|🏢|🎓|📜|🗺️|🎒|📐|🔧|⚙️|🎟️|📊|💬|📢|🔍|🚀|📄|🌐|⏰|🎯|💡|✅|✔|🍪/g, '');

    // Inject GA4 if missing
    if (!content.includes('G-ROZGARDWAAR')) {
      content = content.replace('</head>', `${GA4_TAG}\n${WEBSITE_SCHEMA}\n</head>`);
    }

    content = content.replace(/\/css\/style\.css(\?v=[a-zA-Z0-9]+)?/g, '/css/style.css?v=' + ASSET_VERSION);

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Cleaned and updated policy page: ${file}`);
  }
});

// 5. Generate Comprehensive Sitemap XML
const sitemapUrls = [
  'https://rozgardwaar.com/',
  'https://rozgardwaar.com/central-govt-jobs.html',
  'https://rozgardwaar.com/railway-jobs.html',
  'https://rozgardwaar.com/bank-jobs.html',
  'https://rozgardwaar.com/psu-jobs.html',
  'https://rozgardwaar.com/fresher-jobs.html',
  'https://rozgardwaar.com/graduate-jobs.html',
  'https://rozgardwaar.com/state-govt-jobs.html',
  'https://rozgardwaar.com/10th-12th-pass-jobs.html',
  'https://rozgardwaar.com/diploma-jobs.html',
  'https://rozgardwaar.com/iti-jobs.html',
  'https://rozgardwaar.com/engineering-jobs.html',
  'https://rozgardwaar.com/admit-cards.html',
  'https://rozgardwaar.com/exam-results.html',
  'https://rozgardwaar.com/about.html',
  'https://rozgardwaar.com/contact.html',
  'https://rozgardwaar.com/privacy-policy.html',
  'https://rozgardwaar.com/terms.html',
  'https://rozgardwaar.com/disclaimer.html',
  'https://rozgardwaar.com/editorial-policy.html',
  'https://rozgardwaar.com/corrections-policy.html',
  'https://rozgardwaar.com/source-verification.html',
  ...data.RECRUITMENTS.map(j => `https://rozgardwaar.com/jobs/${j.id}.html`)
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map(u => `  <url>
    <loc>${u}</loc>
    <lastmod>2026-09-02</lastmod>
    <changefreq>${u.includes('/jobs/') ? 'weekly' : 'daily'}</changefreq>
    <priority>${u === 'https://rozgardwaar.com/' ? '1.0' : (u.includes('/jobs/') ? '0.8' : '0.9')}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemapXml, 'utf8');
console.log(`Generated sitemap.xml with ${sitemapUrls.length} static URLs.`);
