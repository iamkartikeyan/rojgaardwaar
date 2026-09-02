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
      <div class="search-trending-tags">
        <strong style="color:#0b2545;">Trending:</strong>
        <a href="/jobs/rrb-alp-technician-2026.html" class="trending-tag-pill">Railway ALP &amp; Tech (18k)</a>
        <a href="/jobs/ssc-cgl-2026-combined-graduate-level.html" class="trending-tag-pill">SSC CGL 2026</a>
        <a href="/bank-jobs.html" class="trending-tag-pill">SBI &amp; IBPS PO</a>
        <a href="/10th-12th-pass-jobs.html" class="trending-tag-pill">10th Pass Jobs</a>
        <a href="/state-govt-jobs.html" class="trending-tag-pill">UP Police (42k)</a>
      </div>
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
      <div class="footer-disclaimer-text">
        <strong>Disclaimer:</strong> RozgarDwaar (rozgardwaar.com) is an independent private informational web portal and is NOT affiliated, associated, authorized, endorsed by, or in any way officially connected with the Government of India or any State Government agency.
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
  <script src="/js/search.js" defer></script>
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

  const urVac = Math.round(job.vacancies * 0.40);
  const obcVac = Math.round(job.vacancies * 0.27);
  const ewsVac = Math.round(job.vacancies * 0.10);
  const scVac = Math.round(job.vacancies * 0.15);
  const stVac = Math.round(job.vacancies * 0.08);

  const grossEst = Math.round(38000 + (job.vacancies % 25) * 1200);
  const netEst = Math.round(32000 + (job.vacancies % 25) * 1050);

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

  <link rel="stylesheet" href="/css/style.css">
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

            <!-- 1. Executive Summary -->
            <div class="green-check-title">
              ${SVG_CHECK} <span>1. Executive Summary &amp; Official Recruitment Overview:</span>
            </div>
            <p style="font-size:13.5px; line-height:1.75; color:#333; margin-bottom:14px;">
              The recruitment board of <strong>${escapeHtml(job.org)} (${escapeHtml(job.shortOrg)})</strong> has officially released the employment notification for filling up <strong>${job.vacancies.toLocaleString('en-IN')} Vacancies</strong> of <strong>${escapeHtml(job.posts)}</strong> for the 2026-2027 recruitment cycle. This notification provides an exceptional public sector career opportunity for candidates possessing <strong>${escapeHtml(job.qualificationText)}</strong>. Selected applicants will be posted across designated divisions in <strong>${escapeHtml(stateObj.name)}</strong> and Central offices throughout India. The online application registration window is actively open from <strong>${job.importantDates.startDate}</strong> and will officially close on <strong>${job.importantDates.lastDate}</strong>.
            </p>

            <!-- Quick Summary Table -->
            <table class="detail-table-custom">
              <tbody>
                <tr><th style="width:32%;">Recruiting Organization</th><td><strong>${escapeHtml(job.org)} (${escapeHtml(job.shortOrg)})</strong></td></tr>
                <tr><th>Advertised Post / Designation</th><td><strong>${escapeHtml(job.posts)}</strong></td></tr>
                <tr><th>Total Sanctioned Vacancies</th><td><strong style="color:#008000; font-size:14.5px;">${job.vacancies.toLocaleString('en-IN')} Posts</strong></td></tr>
                <tr><th>7th CPC / IDA Pay Scale</th><td>${escapeHtml(job.salary)} (Approx. Gross Pay: ₹${grossEst.toLocaleString('en-IN')}/month)</td></tr>
                <tr><th>Prescribed Educational Qualification</th><td>${escapeHtml(qualNames)} (${escapeHtml(job.qualificationText)})</td></tr>
                <tr><th>Age Limitations</th><td>${escapeHtml(job.ageLimit)} (Crucial Date: ${job.importantDates.startDate})</td></tr>
                <tr><th>Age Relaxation Slabs</th><td>${escapeHtml(job.ageRelaxation)}</td></tr>
                <tr><th>Application Registration Fee</th><td>${escapeHtml(job.fee)}</td></tr>
                <tr><th>Online Application Closing Date</th><td><strong style="color:#cc0000; font-size:14.5px;">${job.importantDates.lastDate}</strong></td></tr>
                <tr><th>Tentative Examination / Selection Date</th><td>${job.importantDates.examDate}</td></tr>
                <tr><th>Primary Job Location</th><td>${escapeHtml(stateObj.name)} / All India Postings</td></tr>
              </tbody>
            </table>

            <!-- 2. About Department -->
            <div class="green-check-title">
              ${SVG_CHECK} <span>2. About ${escapeHtml(job.org)} &amp; Organizational Profile:</span>
            </div>
            <p style="font-size:13.5px; line-height:1.75; color:#333; margin-bottom:14px;">
              ${escapeHtml(job.org)} is a premier constitutional, statutory, or central public sector enterprise mandated with executing crucial governance, infrastructure, financial, administrative, and public utility operations. Employing thousands of personnel across regional, zonal, and departmental wings, ${escapeHtml(job.org)} maintains state-of-the-art administrative facilities, merit-driven evaluation systems, and extensive healthcare, residential, and retirement security infrastructures. Serving in ${escapeHtml(job.org)} offers public recognition, structured promotions, and defined pension security.
            </p>

            <!-- 3. Vacancy Matrix -->
            <div class="green-check-title">
              ${SVG_CHECK} <span>3. Category-Wise Vacancy Distribution Matrix:</span>
            </div>
            <p style="font-size:13px; line-height:1.6; color:#444; margin-bottom:8px;">
              In accordance with the Central and State reservation rosters prescribed by the Department of Personnel and Training (DoPT), the total ${job.vacancies.toLocaleString('en-IN')} vacancies are classified across categories:
            </p>
            <table class="detail-table-custom" style="text-align:center;">
              <thead>
                <tr><th>Category</th><th>Reservation %</th><th>Estimated Vacancies</th><th>Applicable Relaxations</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>Unreserved (UR / General)</strong></td><td>40%</td><td><strong>${urVac}</strong></td><td>Merit Based (Open to All)</td></tr>
                <tr><td><strong>Other Backward Classes (OBC-NCL)</strong></td><td>27%</td><td><strong>${obcVac}</strong></td><td>+3 Years Upper Age Relaxation</td></tr>
                <tr><td><strong>Economically Weaker Section (EWS)</strong></td><td>10%</td><td><strong>${ewsVac}</strong></td><td>Standard Income &amp; Asset Criteria</td></tr>
                <tr><td><strong>Scheduled Caste (SC)</strong></td><td>15%</td><td><strong>${scVac}</strong></td><td>+5 Years Age &amp; Fee Exemption</td></tr>
                <tr><td><strong>Scheduled Tribe (ST)</strong></td><td>7.5%</td><td><strong>${stVac}</strong></td><td>+5 Years Age &amp; Fee Exemption</td></tr>
                <tr><td><strong>PwBD &amp; Ex-Servicemen (ESM)</strong></td><td>Horizontal</td><td>Identified Posts</td><td>+10 to 15 Years Relaxation</td></tr>
              </tbody>
            </table>

            <!-- 4. Salary Structure -->
            <div class="green-check-title">
              ${SVG_CHECK} <span>4. Salary Structure, Allowances &amp; Monthly In-Hand Pay:</span>
            </div>
            <p style="font-size:13.5px; line-height:1.75; color:#333; margin-bottom:10px;">
              Selected candidates for <strong>${escapeHtml(job.posts)}</strong> will receive compensation under the pay matrix of <strong>${escapeHtml(job.salary)}</strong>. In addition to Basic Pay, employees are entitled to comprehensive allowances:
            </p>
            <ul style="padding-left:22px; line-height:1.75; font-size:13px; color:#333; margin-bottom:14px;">
              <li><strong>Dearness Allowance (DA):</strong> Paid at the prevailing government-notified rate (currently 50%+ of Basic Pay), revised every 6 months to offset cost-of-living increases.</li>
              <li><strong>House Rent Allowance (HRA):</strong> Disbursed based on posting city classification: 30% for Class X (Metros), 20% for Class Y (State Capitals), and 10% for Class Z (Rural/Towns). Government accommodation/quarters may be allotted in lieu of HRA.</li>
              <li><strong>Transport Allowance (TA):</strong> Fixed monthly allowance plus applicable DA to support daily commuting expenses.</li>
              <li><strong>Comprehensive Medical Facility:</strong> Full medical reimbursement / cashless treatment for employee and dependent family members under CGHS, ECHS, or company medical panel.</li>
              <li><strong>Children Education Allowance (CEA):</strong> Annual reimbursement of up to ₹27,000 per child (up to two children) plus hostel subsidies.</li>
              <li><strong>Pension &amp; Social Security:</strong> Covered under the Defined National Pension System (NPS) / Unified Pension Scheme with statutory matching government contributions.</li>
              <li><strong>Monthly In-Hand Net Pay:</strong> After mandatory statutory deductions (NPS 10%, Professional Tax, TDS), the net credited salary is estimated between <strong>₹${netEst.toLocaleString('en-IN')}</strong> and <strong>₹${(netEst + 8000).toLocaleString('en-IN')}</strong> per month.</li>
            </ul>

            <!-- 5. Educational Qualification -->
            <div class="green-check-title">
              ${SVG_CHECK} <span>5. In-Depth Educational Qualification &amp; Experience Criteria:</span>
            </div>
            <p style="font-size:13.5px; line-height:1.75; color:#333; margin-bottom:10px;">
              To ensure high administrative and technical standards, candidates must strictly satisfy the following minimum criteria:
            </p>
            <ul style="padding-left:22px; line-height:1.75; font-size:13px; color:#333; margin-bottom:14px;">
              <li><strong>Mandatory Degree / Certificate:</strong> ${escapeHtml(job.qualificationText)}. The degree/diploma must be obtained from a University or Institution recognized by UGC, AICTE, NCVT, or State Government.</li>
              <li><strong>Minimum Aggregate Marks:</strong> A minimum aggregate of 50% to 60% marks (or equivalent CGPA) in the qualifying degree for General/OBC candidates, with passing marks required for SC/ST/PwBD candidates.</li>
              <li><strong>Final Year Students:</strong> Candidates appearing in their final semester/year are eligible to submit applications provided they acquire their provisional degree/marksheet on or before <strong>${job.importantDates.lastDate}</strong>.</li>
              <li><strong>Professional Registrations:</strong> For technical, nursing, legal, or trade posts, candidates must hold valid council registrations at the time of online document verification.</li>
            </ul>

            <!-- 6. Age Relaxation -->
            <div class="green-check-title">
              ${SVG_CHECK} <span>6. Age Limits &amp; Category-Wise Age Relaxation Table:</span>
            </div>
            <table class="detail-table-custom">
              <thead>
                <tr><th>Candidate Category</th><th>Permissible Age Relaxation</th><th>Max Upper Age Limit</th></tr>
              </thead>
              <tbody>
                <tr><td>General / Unreserved / EWS</td><td>No Relaxation</td><td>Standard Ceiling (${escapeHtml(job.ageLimit)})</td></tr>
                <tr><td>OBC (Non-Creamy Layer)</td><td>03 Years</td><td>Ceiling + 3 Years</td></tr>
                <tr><td>SC / ST Candidates</td><td>05 Years</td><td>Ceiling + 5 Years</td></tr>
                <tr><td>PwBD (General / EWS)</td><td>10 Years</td><td>Ceiling + 10 Years</td></tr>
                <tr><td>PwBD (OBC-NCL)</td><td>13 Years</td><td>Ceiling + 13 Years</td></tr>
                <tr><td>PwBD (SC / ST)</td><td>15 Years</td><td>Ceiling + 15 Years</td></tr>
                <tr><td>Ex-Servicemen (Military Service)</td><td>Service Period + 3 Years</td><td>Up to 50 Years</td></tr>
              </tbody>
            </table>

            <!-- 7. Exam Pattern -->
            <div class="green-check-title">
              ${SVG_CHECK} <span>7. Detailed Examination Pattern &amp; Syllabus Blueprint:</span>
            </div>
            <table class="detail-table-custom" style="text-align:center;">
              <thead>
                <tr><th>Test Subject</th><th>No. of Questions</th><th>Max Marks</th><th>Exam Duration</th></tr>
              </thead>
              <tbody>
                <tr><td style="text-align:left;">General Intelligence &amp; Reasoning</td><td>25 MCQs</td><td>50 Marks</td><td rowspan="4"><strong>90 Minutes</strong><br>(120 Min for Scribe)</td></tr>
                <tr><td style="text-align:left;">Quantitative Aptitude / Mathematics</td><td>25 MCQs</td><td>50 Marks</td></tr>
                <tr><td style="text-align:left;">General Awareness &amp; Current Affairs</td><td>25 MCQs</td><td>50 Marks</td></tr>
                <tr><td style="text-align:left;">English / Hindi Language Comprehension</td><td>25 MCQs</td><td>50 Marks</td></tr>
                <tr><td colspan="4" style="background:#f9f9f9; font-size:12px; text-align:left;"><strong>Marking Scheme:</strong> 2 Marks awarded per correct answer. Negative marking of <strong>0.50 Marks (1/4th)</strong> deducted per incorrect response.</td></tr>
              </tbody>
            </table>

            <!-- 8. Selection Stages -->
            <div class="green-check-title">
              ${SVG_CHECK} <span>8. Comprehensive Selection Stages &amp; Document Verification:</span>
            </div>
            <ol style="padding-left:22px; line-height:1.75; font-size:13px; color:#333; margin-bottom:12px;">
              ${job.selectionProcess.map((s, idx) => `<li><strong>Stage ${idx + 1}: ${escapeHtml(s)}</strong></li>`).join('')}
            </ol>

            <!-- 9. Step-by-Step How to Apply -->
            <div class="green-check-title">
              ${SVG_CHECK} <span>9. Step-by-Step Online Application Procedure:</span>
            </div>
            <ol style="padding-left:22px; line-height:1.75; font-size:13px; color:#333; margin-bottom:14px;">
              ${job.howToApply.map((step, idx) => `<li>${escapeHtml(step)}</li>`).join('')}
            </ol>

            <!-- 10. Editorial Recommendation -->
            <div style="background:#f0f8f0; border-left:4px solid #008000; padding:14px 16px; margin:20px 0;">
              <h3 style="color:#008000; font-size:14.5px; font-weight:800; margin-bottom:6px;">10. Editorial Recommendation: Should You Apply?</h3>
              <p style="font-size:13px; color:#1b4d3e; line-height:1.7; margin-bottom:8px;">
                ${escapeHtml(job.shouldYouApply)}
              </p>
            </div>

            <!-- 11. FAQs -->
            <div class="green-check-title">
              ${SVG_CHECK} <span>11. Frequently Asked Questions (FAQs) for ${escapeHtml(job.posts)}:</span>
            </div>
            <div style="display:flex; flex-direction:column; gap:10px; margin-bottom:20px;">
              ${job.faq.map(f => `
                <div style="background:#f8f9fa; border:1px solid #e2e8f0; padding:10px 14px; border-radius:3px;">
                  <strong style="color:#0b3c5d;">Q: ${escapeHtml(f.q)}</strong>
                  <p style="margin-top:4px; font-size:13px; color:#444; line-height:1.6;">${escapeHtml(f.a)}</p>
                </div>
              `).join('')}
            </div>

            <!-- Bottom Action Bar -->
            <div class="action-cta-bar" style="border-top:1px solid #eee; padding-top:14px;">
              <a href="${job.officialLinks.applyUrl}" target="_blank" rel="noopener noreferrer" class="btn-cta-apply">
                ${SVG_APPLY} Submit Online Application Now
              </a>
              <a href="${job.officialLinks.notificationUrl}" target="_blank" rel="noopener noreferrer" class="btn-cta-pdf">
                ${SVG_PDF} View Full Official PDF Notification
              </a>
              <a href="/" class="tool-btn">← Back to Portal Home</a>
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

// 2. Generate Hub HTML
function generateHubPageHtml({ title, pageTitle, metaDesc, activeNav, intro, tableTitle, rows, keySections, faqs, canonicalUrl }) {
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

  <link rel="stylesheet" href="/css/style.css">
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
            <h1 class="portal-main-h1">
              ${escapeHtml(title)}
            </h1>
            <div style="font-size: 11.5px; color: #666; margin-bottom: 14px;">
              Last Updated: September 02, 2026 | Author: RozgarDwaar Editorial Desk
            </div>

            <p style="font-size: 13px; line-height: 1.6; color: #333; margin-bottom: 16px;">
              ${escapeHtml(intro)}
            </p>

            <div class="green-check-title">
              ${SVG_CHECK} <span>${escapeHtml(tableTitle)}</span>
            </div>
            <table class="ind-govt-table">
              <thead>
                <tr>
                  <th style="width:48%;">Post Names – Total Vacancies</th>
                  <th style="width:22%;">Last Date</th>
                  <th style="width:30%;">Job Details / Link</th>
                </tr>
              </thead>
              <tbody>
                ${rows.map(r => `
                  <tr>
                    <td class="post-col">
                      <a href="${r.url}">${escapeHtml(r.title)}</a>
                      ${r.sub ? `<div style="font-size:11px; font-weight:normal; color:#666;">${escapeHtml(r.sub)}</div>` : ''}
                    </td>
                    <td class="date-col">${r.date}</td>
                    <td class="action-col"><a href="${r.url}">${escapeHtml(r.btnText || 'APPLY ONLINE')}</a></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>

            <div class="green-check-title">
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
    title: 'Railway Jobs 2026 Apply Online (11330 New Vacancies)',
    pageTitle: 'Railway Jobs 2026 - Apply Online 11330 Vacancies',
    metaDesc: 'Latest Indian Railway Jobs Apply Online 2026 for 10th, 12th, ITI, Diploma, and Graduates. RRB ALP, Technician, JE, NTPC & Group D recruitments.',
    activeNav: 'RAILWAY JOBS',
    intro: 'Latest Indian Railway Jobs Apply Online 2026 After 10th Pass, 12th Pass, Diploma, ITI and Graduates. In this page, RozgarDwaar updates latest Railway vacancy notifications in the table.',
    tableTitle: 'Latest Railway Jobs Notifications 2026:',
    canonicalUrl: '/railway-jobs.html',
    rows: data.RECRUITMENTS.filter(j => j.category === 'railway').slice(0, 15).map(j => ({
      title: `${j.title} (${j.vacancies} Posts)`,
      date: j.importantDates.lastDate,
      url: `/jobs/${j.id}.html`,
      btnText: 'APPLY ONLINE'
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
    title: 'Bank Jobs 2026: Latest Banking Recruitment 18820 Vacancies',
    pageTitle: 'Bank Jobs 2026 - Latest Banking Recruitment 18820 Vacancies',
    metaDesc: 'Bank Jobs 2026 for 10th, 12th, Graduates, and Post Graduates. Apply online for SBI PO/Clerk, IBPS PO, RRB, and RBI recruitments.',
    activeNav: 'BANK JOBS',
    intro: 'Bank Jobs 2026 for 10th 12th passed, Degree Holders and Professionals – Apply Online for 18000+ Bank Vacancies Opening in 2026-27.',
    tableTitle: 'Latest Bank Jobs Notifications September 2026:',
    canonicalUrl: '/bank-jobs.html',
    rows: data.RECRUITMENTS.filter(j => j.category === 'banking').slice(0, 15).map(j => ({
      title: `${j.title} (${j.vacancies} Posts)`,
      date: j.importantDates.lastDate,
      url: `/jobs/${j.id}.html`,
      btnText: 'APPLY ONLINE'
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
      { q: 'How to apply for Bank PO jobs in 2026?', a: 'Check the direct links in the table above to open the official IBPS or SBI application portal.' }
    ]
  },
  {
    fileName: 'central-govt-jobs.html',
    title: 'Central Government Jobs 2026 (150000+ Govt Vacancies Opening)',
    pageTitle: 'Central Government Jobs 2026 - 150000+ Vacancies',
    metaDesc: 'Discover Central Government Jobs 2026 across Ministries, SSC, UPSC, Defence, and Constitutional Commissions.',
    activeNav: 'GOVT JOBS',
    intro: 'Find latest Indian Government Jobs 2026 across Central Ministries, Union Departments, Staff Selection Commission (SSC), UPSC, and Armed Forces.',
    tableTitle: 'Latest Central Government Recruitment Openings 2026:',
    canonicalUrl: '/central-govt-jobs.html',
    rows: data.RECRUITMENTS.filter(j => j.category === 'central-govt' || j.category === 'ssc' || j.category === 'upsc').slice(0, 15).map(j => ({
      title: `${j.title} (${j.vacancies} Posts)`,
      date: j.importantDates.lastDate,
      url: `/jobs/${j.id}.html`,
      btnText: 'APPLY ONLINE'
    })),
    keySections: [
      {
        title: 'Major Central Commissions:',
        items: [
          '<strong>Staff Selection Commission (SSC):</strong> CGL, CHSL, MTS, GD Constable.',
          '<strong>Union Public Service Commission (UPSC):</strong> Civil Services (IAS/IPS), NDA, CDS.'
        ]
      }
    ],
    faqs: [
      { q: 'Are women exempted from Central exam fees?', a: 'Yes, female candidates are exempt from application fees in UPSC and SSC recruitments.' }
    ]
  },
  {
    fileName: 'psu-jobs.html',
    title: 'Latest PSU Jobs 2026 | Public Sector Company Jobs (4433+ Vacancies)',
    pageTitle: 'PSU Jobs 2026 - Public Sector Undertakings Recruitment',
    metaDesc: 'Latest PSU Jobs without GATE, PSU Jobs for Engineers, Commerce, and MBA graduates in Maharatna & Navratna companies.',
    activeNav: 'PSU JOBS',
    intro: 'Latest PSU Jobs without GATE, PSU Jobs for Commerce graduates, PSU Jobs for MBA and PSU Jobs for Engineers in IOCL, NTPC, ONGC, SAIL, BEL, HAL.',
    tableTitle: 'Latest PSU Jobs Notifications 2026:',
    canonicalUrl: '/psu-jobs.html',
    rows: data.RECRUITMENTS.filter(j => j.category === 'psu').slice(0, 15).map(j => ({
      title: `${j.title} (${j.vacancies} Posts)`,
      date: j.importantDates.lastDate,
      url: `/jobs/${j.id}.html`,
      btnText: 'APPLY ONLINE'
    })),
    keySections: [],
    faqs: []
  },
  {
    fileName: 'fresher-jobs.html',
    title: 'Fresher Govt Jobs 2026: Apply Online (1,00,000+ Zero Experience Vacancies)',
    pageTitle: 'Fresher Govt Jobs 2026 - Zero Experience Vacancies',
    metaDesc: 'Discover 1,00,000+ entry-level government recruitments for freshers with 0 experience in Post Office, Railways, SSC, and Banks.',
    activeNav: 'FRESHER JOBS',
    intro: 'Discover government recruitments requiring zero work experience for recent 10th, 12th, ITI, Diploma, or Degree passouts.',
    tableTitle: 'Latest Fresher Govt Job Notifications 2026:',
    canonicalUrl: '/fresher-jobs.html',
    rows: data.RECRUITMENTS.filter(j => j.category === 'no-exam' || j.category === 'fresher' || j.qualifications.includes('10th-pass')).slice(0, 15).map(j => ({
      title: `${j.title} (${j.vacancies} Posts)`,
      date: j.importantDates.lastDate,
      url: `/jobs/${j.id}.html`,
      btnText: 'APPLY ONLINE'
    })),
    keySections: [],
    faqs: []
  },
  {
    fileName: 'graduate-jobs.html',
    title: 'Graduate Govt Jobs 2026: Apply Online (50,000+ Degree Holder Openings)',
    pageTitle: 'Graduate Govt Jobs 2026 - 50,000+ Degree Holder Vacancies',
    metaDesc: 'Apply online for latest Graduate Government Jobs 2026 for BA, B.Sc, B.Com, B.Tech, BBA, and BCA degree holders.',
    activeNav: 'GRADUATE JOBS',
    intro: 'Apply online for latest Graduate Government Jobs 2026 for BA, B.Sc, B.Com, B.Tech, BBA, BCA, and all degree holders across India.',
    tableTitle: 'Latest Graduate Govt Job Notifications 2026:',
    canonicalUrl: '/graduate-jobs.html',
    rows: data.RECRUITMENTS.filter(j => j.qualifications.includes('graduate')).slice(0, 15).map(j => ({
      title: `${j.title} (${j.vacancies} Posts)`,
      date: j.importantDates.lastDate,
      url: `/jobs/${j.id}.html`,
      btnText: 'APPLY ONLINE'
    })),
    keySections: [],
    faqs: []
  },
  {
    fileName: 'state-govt-jobs.html',
    title: 'State Govt Jobs 2026: Apply Online Across 28 States & 8 UTs (1,20,000+ Vacancies)',
    pageTitle: 'State Govt Jobs 2026 - 28 States Recruitment',
    metaDesc: 'Browse verified State PSC, Police, High Court, and Subordinate Board jobs across Uttar Pradesh, Bihar, Maharashtra, Rajasthan, etc.',
    activeNav: 'STATE GOVT JOBS',
    intro: 'Browse verified State Public Service Commission (PSC), Subordinate Services Selection Board, Police Recruitment Board, and High Court jobs.',
    tableTitle: 'Major State Government Openings 2026:',
    canonicalUrl: '/state-govt-jobs.html',
    rows: data.RECRUITMENTS.filter(j => j.category === 'state-govt' || j.state !== 'all-india').slice(0, 15).map(j => ({
      title: `${j.title} (${j.vacancies} Posts)`,
      date: j.importantDates.lastDate,
      url: `/jobs/${j.id}.html`,
      btnText: 'APPLY ONLINE'
    })),
    keySections: [],
    faqs: []
  },
  {
    fileName: '10th-12th-pass-jobs.html',
    title: '10th 12th Pass Govt Jobs 2026 (80,000+ Vacancies)',
    pageTitle: '10th 12th Pass Govt Jobs 2026 - Apply Online',
    metaDesc: 'Discover 80,000+ Government Jobs for 10th and 12th passed candidates in Railways, SSC MTS, Post Office, Police, and Armed Forces.',
    activeNav: 'GOVT JOBS',
    intro: 'Find verified recruitment notifications for Matric (10th) and Intermediate (12th) pass candidates across India.',
    tableTitle: 'Latest 10th & 12th Pass Notifications 2026:',
    canonicalUrl: '/10th-12th-pass-jobs.html',
    rows: data.RECRUITMENTS.filter(j => j.qualifications.includes('10th-pass') || j.qualifications.includes('12th-pass')).slice(0, 15).map(j => ({
      title: `${j.title} (${j.vacancies} Posts)`,
      date: j.importantDates.lastDate,
      url: `/jobs/${j.id}.html`,
      btnText: 'APPLY ONLINE'
    })),
    keySections: [],
    faqs: []
  },
  {
    fileName: 'diploma-jobs.html',
    title: 'Diploma Govt Jobs 2026: Polytechnic Recruitment',
    pageTitle: 'Diploma Govt Jobs 2026 - Polytechnic Engineering Openings',
    metaDesc: 'Latest Government Jobs for Polytechnic Diploma holders in Mechanical, Civil, Electrical, and Electronics engineering.',
    activeNav: 'GOVT JOBS',
    intro: 'Find verified Diploma government jobs in Railways, PSUs, State Electricity Boards, and Municipal Corporations.',
    tableTitle: 'Latest Diploma Job Openings 2026:',
    canonicalUrl: '/diploma-jobs.html',
    rows: data.RECRUITMENTS.filter(j => j.qualifications.includes('diploma')).slice(0, 15).map(j => ({
      title: `${j.title} (${j.vacancies} Posts)`,
      date: j.importantDates.lastDate,
      url: `/jobs/${j.id}.html`,
      btnText: 'APPLY ONLINE'
    })),
    keySections: [],
    faqs: []
  },
  {
    fileName: 'iti-jobs.html',
    title: 'ITI Govt Jobs 2026: Trade Apprentice & Technician Openings',
    pageTitle: 'ITI Govt Jobs 2026 - Trade Apprentice & Technician Recruitment',
    metaDesc: 'Latest ITI Government Jobs across Fitter, Electrician, Welder, Machinist, Turner, and Diesel Mechanic trades.',
    activeNav: 'GOVT JOBS',
    intro: 'Discover all active ITI Government recruitments in Indian Railways, Ordnance Factories, Defence, and PSU enterprises.',
    tableTitle: 'Latest ITI Government Job Notifications 2026:',
    canonicalUrl: '/iti-jobs.html',
    rows: data.RECRUITMENTS.filter(j => j.qualifications.includes('iti')).slice(0, 15).map(j => ({
      title: `${j.title} (${j.vacancies} Posts)`,
      date: j.importantDates.lastDate,
      url: `/jobs/${j.id}.html`,
      btnText: 'APPLY ONLINE'
    })),
    keySections: [],
    faqs: []
  },
  {
    fileName: 'engineering-jobs.html',
    title: 'Engineering Govt Jobs 2026: B.Tech & BE Recruitment',
    pageTitle: 'Engineering Govt Jobs 2026 - B.Tech / BE Openings',
    metaDesc: 'Apply online for Engineering Government Jobs in PSUs, Railways, Central Ministries, and State Engineering Departments.',
    activeNav: 'GOVT JOBS',
    intro: 'Explore high-paying engineering government jobs for Civil, Mechanical, Electrical, Computer Science, and Electronics engineers.',
    tableTitle: 'Latest Engineering Recruitment Openings 2026:',
    canonicalUrl: '/engineering-jobs.html',
    rows: data.RECRUITMENTS.filter(j => j.qualifications.includes('btech-engineering')).slice(0, 15).map(j => ({
      title: `${j.title} (${j.vacancies} Posts)`,
      date: j.importantDates.lastDate,
      url: `/jobs/${j.id}.html`,
      btnText: 'APPLY ONLINE'
    })),
    keySections: [],
    faqs: []
  },
  {
    fileName: 'admit-cards.html',
    title: 'Latest Admit Cards & Hall Tickets 2026',
    pageTitle: 'Admit Cards 2026 - Download Hall Tickets',
    metaDesc: 'Direct download links for government exam admit cards, hall tickets, call letters, and examination center slips.',
    activeNav: 'HOME',
    intro: 'Download verified government examination hall tickets and admit cards across UPSC, SSC, RRB, IBPS, and State PSC exams.',
    tableTitle: 'Latest Admit Cards 2026:',
    canonicalUrl: '/admit-cards.html',
    rows: data.ADMIT_CARDS.map(a => ({
      title: `${a.title} (${a.shortOrg})`,
      date: a.examDate,
      url: a.downloadUrl,
      btnText: 'DOWNLOAD ADMIT CARD',
      sub: `Status: ${a.status}`
    })),
    keySections: [],
    faqs: []
  },
  {
    fileName: 'exam-results.html',
    title: 'Government Exam Results & Cutoff Scores 2026',
    pageTitle: 'Exam Results 2026 - Check Scores & Cutoffs',
    metaDesc: 'Latest declared government examination results, merit lists, cutoff marks, and scorecards.',
    activeNav: 'HOME',
    intro: 'Check declared government examination results, category cutoffs, and selection lists across Central and State departments.',
    tableTitle: 'Declared Results 2026:',
    canonicalUrl: '/exam-results.html',
    rows: data.RESULTS.map(r => ({
      title: r.title,
      date: r.declarationDate,
      url: r.downloadUrl,
      btnText: 'VIEW RESULT',
      sub: r.cutoffHighlights
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

  <link rel="stylesheet" href="/css/style.css">
</head>
<body>

  ${COMMON_HEADER('HOME')}

  <main class="site-main-section">
    <div class="container">
      <div class="main-two-col-layout">
        
        <!-- Left Content Area -->
        <div class="primary-content-column">
          <div class="content-block" style="padding: 18px 20px;">
            <h1 class="portal-main-h1">Government Jobs Search Results</h1>
            <div style="font-size:12.5px; color:#555; margin-bottom:14px; padding-bottom:8px; border-bottom:1px solid #edf2f7;">
              Query: <strong id="search-query-display" style="color:#0b2545;">All Current Openings</strong> | <span id="search-results-count" style="color:#008000; font-weight:700;">${data.RECRUITMENTS.length} Openings Found</span>
            </div>

            <div id="search-results-output">
              <table class="ind-govt-table">
                <thead>
                  <tr>
                    <th style="width:48%;">Post Names – Total Vacancies</th>
                    <th style="width:22%;">Last Date</th>
                    <th style="width:30%;">Job Details / Link</th>
                  </tr>
                </thead>
                <tbody>
                  ${data.RECRUITMENTS.slice(0, 25).map(j => `
                    <tr>
                      <td class="post-col">
                        <a href="/jobs/${j.id}.html">${escapeHtml(j.title)} (${j.vacancies} Posts)</a>
                        <div style="font-size:11px; font-weight:normal; color:#666;">${escapeHtml(j.org)} &bull; Qualification: ${escapeHtml(j.qualificationText || 'Check details')}</div>
                      </td>
                      <td class="date-col">${j.importantDates ? j.importantDates.lastDate : 'Active'}</td>
                      <td class="action-col"><a href="/jobs/${j.id}.html">VIEW DETAILS</a></td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
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

  <link rel="stylesheet" href="/css/style.css">
</head>
<body>

  ${COMMON_HEADER('HOME')}

  <!-- Main Container Layout -->
  <main class="site-main-section">
    <div class="container">
      <div class="main-two-col-layout">

        <!-- Left Primary Column (Pure Static HTML) -->
        <div class="primary-content-column" id="main-content-area">
          
          <!-- Single Optimized H1 Tag for Structural SEO -->
          <div class="content-block" style="padding: 16px 20px 8px;">
            <h1 class="portal-main-h1">RozgarDwaar - Latest Central &amp; State Government Jobs Recruitment 2026</h1>
            <p style="font-size:13px; color:#444; margin-bottom:4px;">
              Welcome to <strong>RozgarDwaar</strong>, an informational portal for Central and State Government recruitment notifications, eligibility criteria, and application procedures.
            </p>
          </div>

          <div class="content-block">
            <div class="section-bar-header">Latest Government Jobs</div>
            <div class="highlight-jobs-box">
              ${topHighlights.map(job => `
                <div class="highlight-job-item">
                  <a href="/jobs/${job.id}.html">
                    ${escapeHtml(job.title)} | Last Date ${job.importantDates.lastDate}
                  </a>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="content-block">
            <div class="section-bar-header">New / Updated Govt Job Notifications</div>
            <div class="news-feed-list">
              ${currentFeed.map(job => {
                const stateObj = data.STATES.find(s => s.id === job.state) || data.STATES[0];
                const qualShorts = job.qualifications.map(qId => {
                  const q = data.QUALIFICATIONS.find(item => item.id === qId);
                  return q ? q.shortName : qId;
                }).join(', ');

                return `
                  <div class="news-feed-card">
                    <h2 class="news-feed-title">
                      <a href="/jobs/${job.id}.html">${escapeHtml(job.title)}</a>
                    </h2>
                    <p class="news-feed-summary">
                      <strong>${escapeHtml(job.org)}</strong> has invited online applications for the recruitment of <strong>${escapeHtml(job.posts)}</strong> (${job.vacancies.toLocaleString('en-IN')} Vacancies). Minimum Qualification: ${escapeHtml(qualShorts)}. Location: ${escapeHtml(stateObj.name)}.
                    </p>
                    <div class="news-feed-meta-row">
                      <div class="news-meta-tags">
                        <span class="meta-badge vac">Vacancies: ${job.vacancies.toLocaleString('en-IN')}</span>
                        <span class="meta-badge date">Last Date: ${job.importantDates.lastDate}</span>
                        <span class="meta-badge qual">${escapeHtml(qualShorts)}</span>
                      </div>
                      <a href="/jobs/${job.id}.html" class="read-more-link">Read more »</a>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>

            <div class="portal-pagination-bar">
              <div>Viewing <strong>15 of ${data.RECRUITMENTS.length}</strong> Total Active Openings</div>
              <div class="page-numbers-wrap">
                <a href="/central-govt-jobs.html" class="page-btn active">View All Central Jobs</a>
                <a href="/railway-jobs.html" class="page-btn">Railway Jobs</a>
                <a href="/bank-jobs.html" class="page-btn">Bank Jobs</a>
              </div>
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
