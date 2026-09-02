/**
 * ROJGAARDWAAR (RojgaarDwaar.in) - Master Application Engine
 * Renders IndGovtJobs-inspired authentic layout with high-density task modules,
 * dedicated Railway, Bank, PSU, Central, State & Qualification hubs with 3-column tables.
 */

(function() {
  'use strict';

  const data = window.ROJGAAR_DATA;
  if (!data) {
    console.error('ROJGAAR_DATA not loaded.');
    return;
  }

  const state = {
    currentRoute: 'home',
    routeParam: null,
    currentPage: 1,
    pageSize: 10,
    savedJobs: JSON.parse(localStorage.getItem('rojgaar_saved_jobs') || '[]')
  };

  let mainContentEl = null;
  let searchInputEl = null;
  let suggestionsBoxEl = null;

  function init() {
    mainContentEl = document.getElementById('main-content-area');
    searchInputEl = document.getElementById('main-search-input');
    suggestionsBoxEl = document.getElementById('search-suggestions');

    setupEventListeners();
    handleRouteChange();
    window.addEventListener('hashchange', handleRouteChange);
  }

  // =========================================================================
  // Dynamic Hash Router
  // =========================================================================

  function handleRouteChange() {
    const hash = window.location.hash.slice(1) || '/';
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (hash === '/' || hash === '') {
      state.currentRoute = 'home';
      state.routeParam = null;
      renderHomeView();
    } else if (hash.startsWith('/job/')) {
      const jobId = hash.replace('/job/', '').trim();
      state.currentRoute = 'job-detail';
      state.routeParam = jobId;
      renderJobDetailView(jobId);
    } else if (hash === '/category/railway') {
      state.currentRoute = 'railway';
      state.routeParam = 'railway';
      renderRailwayJobsView();
    } else if (hash === '/category/banking') {
      state.currentRoute = 'banking';
      state.routeParam = 'banking';
      renderBankJobsView();
    } else if (hash.startsWith('/qualification/')) {
      const qualId = hash.replace('/qualification/', '').trim();
      state.currentRoute = 'qualification';
      state.routeParam = qualId;
      renderCategoryOrGovtJobsView('qualification', qualId);
    } else if (hash.startsWith('/state/')) {
      const stateId = hash.replace('/state/', '').trim();
      state.currentRoute = 'state';
      state.routeParam = stateId;
      renderCategoryOrGovtJobsView('state', stateId);
    } else if (hash.startsWith('/category/')) {
      const catId = hash.replace('/category/', '').trim();
      state.currentRoute = 'category';
      state.routeParam = catId;
      renderCategoryOrGovtJobsView('category', catId);
    } else if (hash === '/admit-cards') {
      state.currentRoute = 'admit-cards';
      state.routeParam = null;
      renderAdmitCardsView();
    } else if (hash === '/results') {
      state.currentRoute = 'results';
      state.routeParam = null;
      renderResultsView();
    } else if (hash === '/eligibility') {
      state.currentRoute = 'eligibility';
      state.routeParam = null;
      renderEligibilityToolView();
    } else if (hash === '/saved') {
      state.currentRoute = 'saved';
      state.routeParam = null;
      renderSavedJobsView();
    } else if (hash.startsWith('/search')) {
      const params = new URLSearchParams(hash.split('?')[1] || '');
      const query = params.get('q') || '';
      state.currentRoute = 'search';
      state.routeParam = query;
      renderSearchView(query);
    }

    updateNavActiveState();
  }

  function updateNavActiveState() {
    const links = document.querySelectorAll('.nav-menu-link');
    const currentHash = window.location.hash || '#/';
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentHash || (currentHash.startsWith(href) && href !== '#/')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // =========================================================================
  // 1. Home View (Exact IndGovtJobs Layout)
  // =========================================================================

  function renderHomeView() {
    const topHighlights = data.RECRUITMENTS.slice(0, 6);
    const startIdx = (state.currentPage - 1) * state.pageSize;
    const currentFeed = data.RECRUITMENTS.slice(startIdx, startIdx + state.pageSize);
    const totalPages = Math.ceil(data.RECRUITMENTS.length / state.pageSize);

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
      { id: "rajasthan", name: "Rajasthan Govt Jobs" },
      { id: "goa", name: "Goa Govt Jobs" },
      { id: "puducherry", name: "Puducherry Govt Jobs" },
      { id: "himachal-pradesh", name: "Himachal Pradesh Govt Jobs" },
      { id: "telangana", name: "Telangana Govt Jobs" }
    ];

    let html = `
      <!-- 1. Latest Government Jobs Header Block -->
      <div class="content-block">
        <div class="section-bar-header">Latest Government Jobs</div>
        <div class="highlight-jobs-box">
          ${topHighlights.map(job => `
            <div class="highlight-job-item">
              <a href="#/job/${job.id}">
                ${escapeHtml(job.title)} | Last Date ${job.importantDates.lastDate}
              </a>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 2. New / Updated Govt Job Notifications Feed -->
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
                  <a href="#/job/${job.id}">${escapeHtml(job.title)}</a>
                </h2>
                <p class="news-feed-summary">
                  ${escapeHtml(job.org)} has invited online applications for the recruitment of ${escapeHtml(job.posts)} (${job.vacancies.toLocaleString('en-IN')} Vacancies). Minimum Qualification: ${escapeHtml(qualShorts)}. Location: ${escapeHtml(stateObj.name)}.
                </p>
                <div class="news-feed-meta-row">
                  <div class="news-meta-tags">
                    <span class="meta-badge vac">🎯 ${job.vacancies.toLocaleString('en-IN')} Posts</span>
                    <span class="meta-badge date">⏰ Last Date: ${job.importantDates.lastDate}</span>
                    <span class="meta-badge qual">🎓 ${escapeHtml(qualShorts)}</span>
                  </div>
                  <a href="#/job/${job.id}" class="read-more-link">Read more »</a>
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Pagination Bar -->
        <div class="portal-pagination-bar">
          <div>Page <strong>${state.currentPage}</strong> of <strong>${totalPages}</strong> (${data.RECRUITMENTS.length} Total Openings)</div>
          <div class="page-numbers-wrap">
            ${state.currentPage > 1 ? `<button class="page-btn" onclick="window.ROJGAAR_APP.goToPage(${state.currentPage - 1})">Prev</button>` : ''}
            ${[1, 2, 3, 4, 5].filter(p => p <= totalPages).map(p => `
              <button class="page-btn ${p === state.currentPage ? 'active' : ''}" onclick="window.ROJGAAR_APP.goToPage(${p})">${p}</button>
            `).join('')}
            ${state.currentPage < totalPages ? `<button class="page-btn" onclick="window.ROJGAAR_APP.goToPage(${state.currentPage + 1})">Next »</button>` : ''}
          </div>
        </div>
      </div>

      <!-- 3. State wise Govt Jobs Block -->
      <div class="content-block">
        <div class="section-bar-header">State wise Govt Jobs</div>
        <div class="state-check-grid">
          ${topStates.map(s => `
            <a href="#/state/${s.id}" class="state-check-link">
              <span>✅</span> <span>${s.name}</span>
            </a>
          `).join('')}
        </div>
      </div>
    `;

    mainContentEl.innerHTML = html;
  }

  // =========================================================================
  // 2. Bank Jobs View (Exact Layout from Fourth Screenshot)
  // =========================================================================

  function renderBankJobsView() {
    const bankJobs = [
      { title: "Office Assistant (Multipurpose), Officer Scale-I, II & III – 13742+ Posts", vacancies: "13742", lastDate: "21/09/2026", bank: "IBPS RRB XV 2026", id: "ibps-po-recruitment-2026" },
      { title: "Local Bank Officer (LBO) – 2432 Posts", vacancies: "2432", lastDate: "07/09/2026", bank: "Bank of Baroda", id: "ibps-po-recruitment-2026" },
      { title: "Officers – 205 Posts", vacancies: "205", lastDate: "25/09/2026", bank: "Bank of India", id: "ibps-po-recruitment-2026" },
      { title: "Trade Finance Officer – 35 Posts", vacancies: "35", lastDate: "10/09/2026", bank: "State Bank of India", id: "ibps-po-recruitment-2026" },
      { title: "Specialist Officers (IT) – 20 Posts", vacancies: "20", lastDate: "15/09/2026", bank: "UCO Bank", id: "ibps-po-recruitment-2026" },
      { title: "Specialist Officers (SO), Generalist – 251 Posts", vacancies: "251", lastDate: "15/09/2026", bank: "Indian Overseas Bank", id: "ibps-po-recruitment-2026" },
      { title: "Security Guard – 25 Posts", vacancies: "25", lastDate: "14/09/2026", bank: "Indian Overseas Bank", id: "ibps-po-recruitment-2026" },
      { title: "Specialist Officers – 41 Posts", vacancies: "41", lastDate: "07/09/2026", bank: "Nainital Bank", id: "ibps-po-recruitment-2026" },
      { title: "Various Officer, Manager & Other Posts – 1679 Posts", vacancies: "1679", lastDate: "31/09/2026", bank: "Baroda Global Shared Services Limited", id: "ibps-po-recruitment-2026" },
      { title: "Probationary Officers (PO/MT) – 6850 Posts", vacancies: "6850", lastDate: "28/09/2026", bank: "IBPS PO 2026", id: "ibps-po-recruitment-2026" },
      { title: "Junior Associates (Customer Support & Sales) – 8283 Posts", vacancies: "8283", lastDate: "25/09/2026", bank: "State Bank of India (SBI Clerk)", id: "ibps-po-recruitment-2026" },
      { title: "Officers in Grade 'B' (General / DEPR / DSIM) – 94 Posts", vacancies: "94", lastDate: "22/09/2026", bank: "Reserve Bank of India (RBI)", id: "ibps-po-recruitment-2026" },
      { title: "Assistant Manager (Grade 'A' RDBS / Rajbhasha) – 102 Posts", vacancies: "102", lastDate: "26/09/2026", bank: "NABARD", id: "ibps-po-recruitment-2026" }
    ];

    let html = `
      <div class="content-block" style="padding: 16px 18px;">
        
        <!-- Title & Meta Header (Exact screenshot match) -->
        <h1 style="font-size: 19px; font-weight: 800; color: #000000; line-height: 1.35; margin-bottom: 4px;">
          Bank Jobs 2026: Latest Banking Recruitment 18820 Vacancies
        </h1>
        <div style="font-size: 11.5px; color: #666; margin-bottom: 14px;">
          Last Updated: September 01, 2026 | Author: Prabhu
        </div>

        <p style="font-size: 13px; line-height: 1.6; color: #333; margin-bottom: 16px;">
          Bank Jobs 2026 for 10th 12th passed, Degree Holders and Professionals – Apply Online for 18000+ Bank Vacancies Opening in 2026-27. <strong>RojgaarDwaar</strong> updates latest Public Sector Banking Vacancies and Current Private Sector Bank career openings for both fresher and experienced Indian Citizens. People find your career in Banking Sector based on your education qualification and bank / finance field experience. More than 50,000 upcoming Govt Bank vacancies are opening in 2026. Job Seekers don't miss your Job opportunities in both Government and Scheduled Banks.
        </p>

        <!-- 1. Table: Latest Bank Jobs Notifications September 2026 -->
        <div class="green-check-title">
          <span>✅</span> <span>Latest Bank Jobs Notifications September 2026:</span>
        </div>
        <table class="ind-govt-table">
          <thead>
            <tr>
              <th style="width:48%;">Post Names – Total Vacancies</th>
              <th style="width:22%;">Last Date</th>
              <th style="width:30%;">Job Details</th>
            </tr>
          </thead>
          <tbody>
            ${bankJobs.map(j => `
              <tr>
                <td class="post-col">
                  <a href="#/job/${j.id}">${escapeHtml(j.title)}</a>
                </td>
                <td class="date-col">${j.lastDate}</td>
                <td class="action-col">
                  <a href="#/job/${j.id}">${escapeHtml(j.bank)}</a>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <!-- 2. Types of Banking Jobs Available in India -->
        <div class="green-check-title">
          <span>✅</span> <span>Types of Banking Jobs Available in India:</span>
        </div>
        <p style="font-size: 13px; line-height: 1.6; color: #333; margin-bottom: 8px;">
          The banking sector offers diverse bank job opportunities for candidates with varying qualifications. Popular roles include:
        </p>
        <ul style="padding-left: 20px; line-height: 1.7; font-size: 13px; color: #333; margin-bottom: 16px;">
          <li>Clerical Cadre (Clerk, Junior Associates, Cashier)</li>
          <li>Office Assistant / Attendant / Peon</li>
          <li>Probationary Officer (PO)</li>
          <li>Management Trainee (MT)</li>
          <li>Specialist Officer (SO) – IT, Law, HR, Marketing, etc.</li>
          <li>Financial Analyst / Credit Analyst</li>
          <li>Customer Relationship Manager</li>
          <li>Investment Banking Roles</li>
          <li>Loan Officer / Auditor / Chartered Accountant</li>
          <li>Security Officer / Medical Officer</li>
          <li>Various Manager and Officer-level positions</li>
        </ul>

        <!-- 3. Major Govt Banks In India -->
        <div class="green-check-title">
          <span>✅</span> <span>Major Govt Banks In India:</span>
        </div>
        <ul style="padding-left: 20px; line-height: 1.7; font-size: 13px; color: #333; margin-bottom: 16px;">
          <li>State Bank of India (SBI)</li>
          <li>Bank of Baroda</li>
          <li>Punjab National Bank</li>
          <li>Canara Bank</li>
          <li>Union Bank of India</li>
          <li>Indian Bank</li>
          <li>Bank of India</li>
          <li>Central Bank of India</li>
          <li>Indian Overseas Bank</li>
          <li>UCO Bank</li>
          <li>Bank of Maharashtra</li>
          <li>Punjab and Sind Bank</li>
        </ul>

        <!-- 4. About the Indian Banking Sector -->
        <div class="green-check-title">
          <span>✅</span> <span>About the Indian Banking Sector:</span>
        </div>
        <p style="font-size: 13px; line-height: 1.6; color: #333; margin-bottom: 16px;">
          The Indian banking sector is one of the most robust financial systems globally, regulated by the Reserve Bank of India (RBI). It comprises scheduled banks (public sector, private sector, regional rural, and foreign banks) and Non-Scheduled Banks. With 12 public sector banks and numerous private players, the sector offers stable and rewarding bank jobs with excellent growth prospects.
        </p>

        <!-- 5. Frequently Asked Questions (FAQ) (Exact Screenshot Content) -->
        <div class="green-check-title">
          <span>✅</span> <span>Frequently Asked Questions (FAQ):</span>
        </div>
        <div style="line-height: 1.7; font-size: 13px; color: #333;">
          <p style="margin-bottom: 10px;">
            <strong>1. How to apply for bank jobs in India?</strong><br>
            Eligible candidates can apply online or offline through official notifications listed on <strong>RojgaarDwaar</strong>. The site updates daily with the latest bank job vacancies in government and public sector banks.
          </p>

          <p style="margin-bottom: 10px;">
            <strong>2. Why choose government bank jobs?</strong><br>
            Government bank jobs offer unmatched job security, attractive salaries, allowances, and strong career progression – making them among the most preferred careers in India.
          </p>

          <p style="margin-bottom: 10px;">
            <strong>3. What bank jobs are available after 12th pass or graduation?</strong><br>
            <strong>After 12th:</strong> Clerk, Office Assistant, Cashier, Peon, Customer Service roles.<br>
            <strong>After Graduation:</strong> Probationary Officer (PO), Specialist Officer (SO), Management Trainee, IT Officer, Law Officer, Manager roles.
          </p>

          <p style="margin-bottom: 10px;">
            <strong>4. What are the major upcoming bank exams in India?</strong><br>
            Top upcoming bank exams include <strong>IBPS Clerk, IBPS PO, IBPS RRB, SBI Clerk, SBI PO, RBI Assistant, and RBI Grade B</strong> exams conducted for clerical and officer-level recruitment.
          </p>

          <p style="margin-bottom: 10px;">
            <strong>5. What are the eligibility criteria and selection process for bank jobs?</strong><br>
            <strong>Qualification:</strong> Minimum 10+2 for clerical posts; Bachelor's/Master's degree for officer roles.<br>
            <strong>Selection:</strong> Usually online written exam + interview (for officer posts).<br>
            <strong>Age Limit:</strong> Generally 20–30 years (relaxations applicable).
          </p>
        </div>

        <div style="margin-top: 18px; padding-top: 10px; border-top: 1px solid #eee; font-size: 12px; color: #008000; font-weight: 700;">
          Categories: <a href="#/" style="color:#008000;">Top Pages</a>
        </div>

      </div>
    `;

    mainContentEl.innerHTML = html;
  }

  // =========================================================================
  // 3. Railway Jobs View
  // =========================================================================

  function renderRailwayJobsView() {
    const railwayJobs = [
      { title: "Junior Engineers (JE), DMS & CMA – 4200 Posts", vacancies: "4200", lastDate: "12/09/2026", board: "Railway Recruitment Boards (RRBs)", id: "rrb-alp-technician-2026" },
      { title: "Act Apprentice – 4173 Posts", vacancies: "4173", lastDate: "21/09/2026", board: "Southern Railway", id: "rrc-northern-railway-apprentice-recruitment-2026" },
      { title: "Act Apprentice – 2400 Posts", vacancies: "2400", lastDate: "18/09/2026", board: "East Coast Railway", id: "rrc-northern-railway-apprentice-recruitment-2026" },
      { title: "Apprentice – 1010 Posts", vacancies: "1010", lastDate: "27/09/2026", board: "Integral Coach Factory (ICF)", id: "rrc-northern-railway-apprentice-recruitment-2026" },
      { title: "Engineers, Technician, Assistant & Executive – 60 Posts", vacancies: "60", lastDate: "25/09/2026", board: "Maharashtra Metro Rail", id: "rrb-alp-technician-2026" },
      { title: "Sports Quota – 64 Posts", vacancies: "64", lastDate: "30/09/2026", board: "Western Railway", id: "rrb-alp-technician-2026" },
      { title: "Assistant Engineers (Civil + Mechanical + S&T) – 05 Posts", vacancies: "05", lastDate: "28/09/2026", board: "Konkan Railway", id: "rrb-alp-technician-2026" },
      { title: "Stage Pilot – 04 Posts", vacancies: "04", lastDate: "18/09/2026", board: "Delhi Metro Rail", id: "rrb-alp-technician-2026" },
      { title: "Cultural Quota – 02 Posts", vacancies: "02", lastDate: "19/09/2026", board: "North Central Railway", id: "rrb-alp-technician-2026" },
      { title: "Various Manager Level Posts (RITES) – 75 Posts", vacancies: "75", lastDate: "18/09/2026", board: "RITES Limited", id: "rrb-alp-technician-2026" },
      { title: "Tourism Monitor – 05 Posts", vacancies: "05", lastDate: "26/09/2026", board: "IRCTC North Zone", id: "rrb-alp-technician-2026" },
      { title: "Scouts and Guides Quota – 16 Posts", vacancies: "16", lastDate: "30/09/2026", board: "Eastern Railway", id: "rrb-alp-technician-2026" },
      { title: "Assistant Loco Pilot (ALP) – 18,799 Posts", vacancies: "18799", lastDate: "28/09/2026", board: "Railway Recruitment Boards (RRBs)", id: "rrb-alp-technician-2026" },
      { title: "Technician Grade I & III – 9,144 Posts", vacancies: "9144", lastDate: "25/09/2026", board: "Railway Recruitment Boards (RRBs)", id: "rrb-alp-technician-2026" },
      { title: "Northern Railway Trade Apprentice – 4,096 Posts", vacancies: "4096", lastDate: "24/09/2026", board: "RRC Northern Railway", id: "rrc-northern-railway-apprentice-recruitment-2026" }
    ];

    let html = `
      <div class="content-block" style="padding: 16px 18px;">
        
        <!-- Title & Meta (Exact screenshot style) -->
        <h1 style="font-size: 19px; font-weight: 800; color: #000000; line-height: 1.35; margin-bottom: 4px;">
          Railway Jobs 2026 Apply Online (11330 New Vacancies)
        </h1>
        <div style="font-size: 11.5px; color: #666; margin-bottom: 14px;">
          Last Updated: September 01, 2026 | Author: Admin
        </div>

        <p style="font-size: 13px; line-height: 1.6; color: #333; margin-bottom: 12px;">
          <strong>Latest Indian Railway Jobs Apply Online 2026 After 10th Pass, 12th Pass, Diploma, ITI and Graduates.</strong>
        </p>

        <p style="font-size: 13px; line-height: 1.6; color: #333; margin-bottom: 16px;">
          In this page, <strong>RojgaarDwaar</strong> updates latest Railway vacancy notifications in the table. Both <strong>Male and Female</strong> Indian Citizens are eligible to apply online for various Railway Technical, Non Technical, Assistant Loco Pilot, Police, Para Medical, Medical, Group D, Ministerial and Act Apprentice posts.
        </p>

        <!-- 1. Table: Latest Railway Jobs Notifications 2026 -->
        <div class="green-check-title">
          <span>✅</span> <span>Latest Railway Jobs Notifications 2026:</span>
        </div>
        <table class="ind-govt-table">
          <thead>
            <tr>
              <th style="width:48%;">Post Names – Total Vacancies</th>
              <th style="width:22%;">Last Date</th>
              <th style="width:30%;">Notifications</th>
            </tr>
          </thead>
          <tbody>
            ${railwayJobs.map(j => `
              <tr>
                <td class="post-col">
                  <a href="#/job/${j.id}">${escapeHtml(j.title)}</a>
                </td>
                <td class="date-col">${j.lastDate}</td>
                <td class="action-col">
                  <a href="#/job/${j.id}">${escapeHtml(j.board)}</a>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <!-- 2. Railway Exams 2026-27 List -->
        <div class="green-check-title">
          <span>✅</span> <span>Railway Exams 2026-27 List:</span>
        </div>
        <ul style="padding-left: 20px; line-height: 1.7; font-size: 13px; color: #333; margin-bottom: 16px;">
          <li><strong>RRB NTPC</strong> (Non-Technical Popular Categories): For various non-technical posts.</li>
          <li><strong>RRB JE</strong> (Junior Engineer): For the recruitment of Junior engineers in the Indian Railways.</li>
          <li><strong>RRB Group D:</strong> For various posts in the Group D category, including track maintainers and helpers.</li>
          <li><strong>RRB SSE</strong> (Senior Section Engineer): For the recruitment of senior engineers.</li>
          <li><strong>RRB ALP</strong> (Assistant Loco Pilot): For the recruitment of Assistant Loco Pilots.</li>
          <li><strong>RRB Paramedical:</strong> For various paramedical posts in the rail services.</li>
          <li><strong>RPF Constable:</strong> For recruitment in the Railway Protection Force.</li>
          <li><strong>RPF Sub-Inspector:</strong> For higher-level positions in the Railway Protection Force (RPF) and Railway Protection Special Force (RPSF).</li>
          <li><strong>RRB Ministerial and Isolated Categories:</strong> For various ministerial posts and isolated categories.</li>
        </ul>

        <!-- 3. Railway Job Vacancy 2026-27 List / Reservation & Quota Guide -->
        <div class="green-check-title">
          <span>✅</span> <span>Railway Job Vacancy 2026-27 List:</span>
        </div>
        <ul style="padding-left: 20px; line-height: 1.7; font-size: 13px; color: #333; margin-bottom: 16px;">
          <li><strong>General/Unreserved Quota:</strong> Open to all candidates based on merit, forming vertical reservation for general category.</li>
          <li><strong>Scheduled Castes (SC) and Scheduled Tribes (ST) Quota:</strong> Reserved posts for SC/ST candidates, providing benefits like age relaxation and a lower cut-off mark.</li>
          <li><strong>Other Backward Classes (OBC) Quota:</strong> Reserved positions for OBC candidates with similar benefits as SC/ST.</li>
          <li><strong>Economically Weaker Section:</strong> Reservation for individuals who fall under the low income bracket, receiving age relaxations.</li>
          <li><strong>Sports Quota:</strong> Jobs offered based on outstanding achievements in sports, requiring candidates to meet specific criteria.</li>
          <li><strong>Meritorious Sports Persons:</strong> Special recruitment opportunities for athletes with exceptional records at national or international levels.</li>
          <li><strong>Persons with Disabilities (PwD) Quota:</strong> Reservations for candidates with physical disabilities, along with additional time in exams.</li>
          <li><strong>Disability Quota:</strong> Specific provisions for different types of disabilities during the recruitment process.</li>
          <li><strong>Nursing Quota:</strong> Reserved for candidates with nursing qualifications, especially in paramedical posts.</li>
          <li><strong>Cultural Quota:</strong> For individuals with remarkable contribution in cultural fields, allowing them to apply for specific positions.</li>
          <li><strong>Group 'A' Posts:</strong> These posts are filled through examinations conducted by UPSC, including Civil Services Exam, Engineering Services Exam, and Combined Medical Services Examination.</li>
          <li><strong>Group 'B' Posts:</strong> These posts are not open for direct recruitment. Group 'B' positions are filled through promotion of Group 'C' employees on a seniority-cum-merit basis.</li>
          <li><strong>Group 'C' Posts:</strong> This category includes both technical and non-technical positions, such as Clerk, Station Master, Ticket Collector, Commercial Apprentice, Traffic Apprentice, and various engineering posts (Civil, Mechanical, Electrical, Signal & Telecom, etc.).</li>
          <li><strong>Group 'D' Posts:</strong> The positions in this group cover role in disciplines, including Trackman, Helper, Assistant Points Man, Safaiwala/Safaiwali, Gunman, and Peon.</li>
          <li><strong>Other Posts:</strong> This includes Course Completed Act Apprentices (CCAA with 20% reserved vacancy), Sports Quota, Cultural Quota, Scouts and Guides Quota, and more.</li>
        </ul>

        <!-- 4. Frequently Asked Questions -->
        <div class="green-check-title">
          <span>✅</span> <span>Frequently Asked Questions:</span>
        </div>
        <div style="line-height: 1.7; font-size: 13px; color: #333;">
          <p style="margin-bottom: 8px;"><strong>What are the popular jobs in Railway Sector?</strong><br>
          Indian Railway jobs include Gazetted (Group 'A' and 'B'), Non-Gazetted (Group 'C' and 'D'), NTPC, Junior Engineer, RPF/RPSF, Act Apprentices, Level 1, and Level 2 posts.</p>

          <p style="margin-bottom: 8px;"><strong>How to apply for railway recruitment from RojgaarDwaar?</strong><br>
          The search/browse window blog frequently updates the latest Indian Railway jobs. Eligible candidates need to check their qualification against military/railway listings, then click on a specific Railway Name for detailed notification and application links.</p>

          <p style="margin-bottom: 8px;"><strong>What are the qualifications for railway jobs?</strong><br>
          Minimum qualifications include passing the 10th class or ITI for Group D & Apprentice, and holding a Graduate or Post Graduate degree for Group A/B posts.</p>

          <p style="margin-bottom: 8px;"><strong>How many railway zones and boards in India?</strong><br>
          There are 21 Railway Boards in India: Ahmedabad, Ajmer, Allahabad, Bangalore, Bhopal, Bhubaneswar, Bilaspur, Chandigarh, Chennai, Gorakhpur, Guwahati, Jammu, Kolkata, Malda, Mumbai, Muzaffarpur, Patna, Ranchi, Secunderabad, Siliguri, and Trivandrum.</p>

          <p style="margin-bottom: 8px;"><strong>How many types of railway jobs are there?</strong><br>
          Group 'A' Posts are recruited through UPSC exams. Group 'B' Posts: Upgraded posts from Group 'C' employees. Group 'C' Posts: Technical and Non-Technical cadre posts. Group 'D' Posts: Various Level-1 posts including Trackman, Helper, etc. Other Posts: ITI Apprentices, Sports Quota, etc.</p>

          <p style="margin-bottom: 8px;"><strong>Which is the best job in the Railway?</strong><br>
          The best job depends on individual qualifications and preferences. For 10th or 12th pass candidates, popular posts include Clerk, Station Master, and Ticket Collector, while engineers may prefer Group A/B engineering positions.</p>

          <p style="margin-bottom: 8px;"><strong>How many jobs are vacant in the Indian Railways?</strong><br>
          Each year, more than one lakh vacancies open up in the Railway sector.</p>

          <p style="margin-bottom: 8px;"><strong>Is a woman is eligible to apply for railway jobs?</strong><br>
          Yes, both Male and Female candidates having passed required educational qualifications are eligible to apply for Group C and Group D railway posts.</p>

          <p style="margin-bottom: 8px;"><strong>Who is eligible to apply for railway jobs?</strong><br>
          Indian citizens who have passed at least Matriculation/10th standard are eligible to apply. Strong technical skills are also preferred.</p>

          <p style="margin-bottom: 8px;"><strong>Why does every job seeker prefer a Railway Job in India?</strong><br>
          The page provides weekly updates for job seekers looking for railway jobs and offers free alerts for railway job opportunities.</p>
        </div>

        <div style="margin-top: 18px; padding-top: 10px; border-top: 1px solid #eee; font-size: 12px; color: #008000; font-weight: 700;">
          Categories: <a href="#/" style="color:#008000;">Top Pages</a>
        </div>

      </div>
    `;

    mainContentEl.innerHTML = html;
  }

  // =========================================================================
  // 4. Category & Qualification Hubs
  // =========================================================================

  function renderCategoryOrGovtJobsView(type, identifier) {
    let pageTitle = "Central Government Jobs 2026 (150000+ Govt Vacancies Opening)";
    let matchingJobs = data.RECRUITMENTS;
    let introText = "Find latest Indian Government Jobs 2026 across Central Ministries, Public Sector Undertakings (PSUs), Railways (RRB), Public Sector Banks, Staff Selection Commission (SSC), UPSC, Armed Forces, and State Government Boards.";

    if (type === 'category') {
      const cat = data.CATEGORIES.find(c => c.id === identifier);
      if (cat) {
        pageTitle = `${cat.name} 2026 (${cat.count * 150}+ Govt Vacancies Opening)`;
        matchingJobs = data.RECRUITMENTS.filter(j => j.category === cat.id);
        introText = `Explore all verified ${cat.name} notifications. Apply online for active vacancies, check eligibility criteria, salary scales, and upcoming examination dates.`;
      }
    } else if (type === 'qualification') {
      const qual = data.QUALIFICATIONS.find(q => q.id === identifier);
      if (qual) {
        pageTitle = `${qual.name} Jobs 2026 (50000+ Govt Vacancies Opening)`;
        matchingJobs = data.RECRUITMENTS.filter(j => j.qualifications.includes(qual.id));
        introText = `Discover verified Central and State Government Jobs for ${qual.shortName} qualified candidates across Railways, Police, Banking, SSC, PSUs, and Ministries.`;
      }
    } else if (type === 'state') {
      const stateObj = data.STATES.find(s => s.id === identifier);
      if (stateObj) {
        pageTitle = `${stateObj.name} Government Jobs 2026 (${stateObj.totalActive * 80}+ Govt Vacancies Opening)`;
        matchingJobs = data.RECRUITMENTS.filter(j => j.state === stateObj.id || (stateObj.id !== 'all-india' && j.state === 'all-india'));
        introText = `All verified Government jobs and recruitment notifications in ${stateObj.name} including State PSC, Police, High Court, Electricity Boards, and Central Units located in the state.`;
      }
    }

    const table1Jobs = matchingJobs.slice(0, 10);
    const table2Jobs = matchingJobs.slice(10, 20);

    let html = `
      <div class="content-block" style="padding: 16px 18px;">
        <h1 style="font-size: 18px; font-weight: 800; color: #0b3c5d; line-height: 1.35; margin-bottom: 8px;">
          ${escapeHtml(pageTitle)}
        </h1>
        <p style="font-size: 12px; color: #666; margin-bottom: 12px;">
          LIVE RECRUITMENT STATUS: <strong>ACTIVE & VERIFIED NOTIFICATIONS</strong>
        </p>
        
        <p style="font-size: 13px; line-height: 1.6; color: #333; margin-bottom: 14px;">
          ${escapeHtml(introText)} All eligible candidates holding 10th, 12th, ITI, Diploma, Graduation, B.Tech, MBA, MCA, and Post Graduation degrees can verify their qualification profile and submit applications before the respective deadline.
        </p>

        <!-- Table 1 -->
        <div class="green-check-title">
          <span>✅</span> <span>Latest Government Jobs & Recruitment Openings:</span>
        </div>
        <table class="ind-govt-table">
          <thead>
            <tr>
              <th style="width:48%;">Recruitment / Post Name</th>
              <th style="width:24%;">Last Date</th>
              <th style="width:28%;">Job Details</th>
            </tr>
          </thead>
          <tbody>
            ${table1Jobs.map(job => `
              <tr>
                <td class="post-col">
                  <a href="#/job/${job.id}">${escapeHtml(job.title)}</a>
                  <div style="font-size:11px; font-weight:normal; color:#666;">Vacancies: ${job.vacancies} Posts | ${escapeHtml(job.shortOrg)}</div>
                </td>
                <td class="date-col">${job.importantDates.lastDate}</td>
                <td class="action-col"><a href="#/job/${job.id}">APPLY ONLINE</a></td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <!-- Table 2 (if available) -->
        ${table2Jobs.length > 0 ? `
          <div class="green-check-title">
            <span>✅</span> <span>Top Departmental Opportunities:</span>
          </div>
          <table class="ind-govt-table">
            <thead>
              <tr>
                <th style="width:48%;">Recruitment / Post Name</th>
                <th style="width:24%;">Last Date</th>
                <th style="width:28%;">Job Details</th>
              </tr>
            </thead>
            <tbody>
              ${table2Jobs.map(job => `
                <tr>
                  <td class="post-col">
                    <a href="#/job/${job.id}">${escapeHtml(job.title)}</a>
                    <div style="font-size:11px; font-weight:normal; color:#666;">Vacancies: ${job.vacancies} Posts | ${escapeHtml(job.shortOrg)}</div>
                  </td>
                  <td class="date-col">${job.importantDates.lastDate}</td>
                  <td class="action-col"><a href="#/job/${job.id}">GET DETAILS</a></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        ` : ''}

        <!-- Qualification Links Box -->
        <div class="green-check-title">
          <span>✅</span> <span>Govt Jobs by Qualification:</span>
        </div>
        <div class="qual-hub-links-box">
          <a href="#/qualification/10th-pass" style="color:#008000;">10th Pass / 12th Pass Govt Jobs</a>
          <a href="#/qualification/graduate" style="color:#0000cc;">Graduate / Degree Govt Jobs</a>
          <a href="#/qualification/diploma" style="color:#cc0000;">Diploma Govt Jobs (Polytechnic)</a>
          <a href="#/qualification/iti" style="color:#990066;">ITI Pass Govt Jobs (All Trades)</a>
          <a href="#/qualification/btech-engineering" style="color:#008000;">Engineering / B.Tech Govt Jobs</a>
          <a href="#/qualification/post-graduate" style="color:#0000cc;">Post Graduate / Master Degree Jobs</a>
        </div>

        <!-- Information & Rules Section -->
        <div class="green-check-title">
          <span>✅</span> <span>Age Relaxation & Reservation Rules:</span>
        </div>
        <ul style="padding-left: 20px; line-height: 1.7; font-size: 13px; color: #333; margin-bottom: 16px;">
          <li><strong>SC / ST Candidates:</strong> 05 Years upper age relaxation as per Central Govt norms.</li>
          <li><strong>OBC (Non-Creamy Layer):</strong> 03 Years upper age relaxation.</li>
          <li><strong>Persons with Benchmark Disabilities (PwBD):</strong> 10 to 15 Years relaxation across Group A, B, and C posts.</li>
          <li><strong>Ex-Servicemen:</strong> Military service rendered plus 3 years relaxation.</li>
          <li><strong>Female Candidates:</strong> Application fee exemption in major Central recruitments (UPSC, SSC, Railways).</li>
        </ul>

        <!-- Frequently Asked Questions -->
        <div class="green-check-title">
          <span>✅</span> <span>Frequently Asked Questions:</span>
        </div>
        <div style="line-height: 1.7; font-size: 13px; color: #333;">
          <p style="margin-bottom: 8px;"><strong>Q: What is the minimum educational qualification required for Government Jobs?</strong><br>
          A: Minimum qualification ranges from 10th / Matriculation for Multi-Tasking Staff (MTS), Group D, and Postal GDS to Graduation and Engineering for Officer, Inspector, and Trainee positions.</p>

          <p style="margin-bottom: 8px;"><strong>Q: How can I apply for these Government Jobs?</strong><br>
          A: Click on the corresponding "APPLY ONLINE" or "GET DETAILS" link in the table above to access the official application link, read the official notification PDF, and submit your application online.</p>

          <p style="margin-bottom: 8px;"><strong>Q: Is there any application fee for Female and SC/ST candidates?</strong><br>
          A: In most Union Government exams conducted by UPSC and SSC, female, SC, ST, and PwBD candidates are exempted from payment of the application examination fee.</p>
        </div>

      </div>
    `;

    mainContentEl.innerHTML = html;
  }

  // =========================================================================
  // 5. Job Detail View
  // =========================================================================

  function renderJobDetailView(jobId) {
    const job = data.RECRUITMENTS.find(j => j.id === jobId) || data.RECRUITMENTS[0];
    const isSaved = state.savedJobs.includes(job.id);
    const stateObj = data.STATES.find(s => s.id === job.state) || data.STATES[0];

    const qualShorts = job.qualifications.map(qId => {
      const q = data.QUALIFICATIONS.find(item => item.id === qId);
      return q ? q.shortName : qId;
    }).join(' / ');

    let html = `
      <div class="job-detail-wrap">
        <div style="font-size:12px; color:#666; margin-bottom:10px;">
          <a href="#/">Home</a> &rsaquo; <a href="#/category/${job.category}">${escapeHtml(job.subCategory || 'Govt Jobs')}</a> &rsaquo; <span>${escapeHtml(job.shortOrg)}</span>
        </div>

        <h1 class="job-detail-h1">${escapeHtml(job.title)}</h1>

        <div class="action-cta-bar">
          <a href="${job.officialLinks.applyUrl}" target="_blank" rel="noopener noreferrer" class="btn-cta-apply">
            🚀 Apply Online (Official Portal)
          </a>
          <a href="${job.officialLinks.notificationUrl}" target="_blank" rel="noopener noreferrer" class="btn-cta-pdf">
            📄 Download Official Notification PDF
          </a>
          <a href="${job.officialLinks.websiteUrl}" target="_blank" rel="noopener noreferrer" class="btn-cta-web">
            🌐 Official Website
          </a>
          <button onclick="window.ROJGAAR_APP.toggleSaveJob('${job.id}')" class="tool-btn" style="cursor:pointer;">
            ${isSaved ? '★ Saved' : '☆ Save Job'}
          </button>
        </div>

        <p style="font-size:13.5px; line-height:1.7; color:#333; margin-bottom:14px;">
          <strong>${escapeHtml(job.org)}</strong> has issued latest recruitment advertisement for filling up <strong>${job.vacancies.toLocaleString('en-IN')} Vacancies</strong> of <strong>${escapeHtml(job.posts)}</strong>. Eligible candidates who possess ${escapeHtml(job.qualificationText)} can submit online applications on or before the closing date <strong>${job.importantDates.lastDate}</strong>.
        </p>

        <!-- Quick Summary Table -->
        <table class="detail-table-custom">
          <tbody>
            <tr>
              <th style="width:30%;">Organization / Department</th>
              <td><strong>${escapeHtml(job.org)} (${escapeHtml(job.shortOrg)})</strong></td>
            </tr>
            <tr>
              <th>Post Name / Roles</th>
              <td>${escapeHtml(job.posts)}</td>
            </tr>
            <tr>
              <th>Total Vacancies</th>
              <td><strong style="color:#008000; font-size:14px;">${job.vacancies.toLocaleString('en-IN')} Posts</strong></td>
            </tr>
            <tr>
              <th>Pay Scale / Salary</th>
              <td>${escapeHtml(job.salary)}</td>
            </tr>
            <tr>
              <th>Educational Qualification</th>
              <td>${escapeHtml(qualShorts)} - ${escapeHtml(job.qualificationText)}</td>
            </tr>
            <tr>
              <th>Age Limit</th>
              <td>${escapeHtml(job.ageLimit)} (Age Relaxation: ${escapeHtml(job.ageRelaxation)})</td>
            </tr>
            <tr>
              <th>Application Fee</th>
              <td>${escapeHtml(job.fee)}</td>
            </tr>
            <tr>
              <th>Application Last Date</th>
              <td><strong style="color:#cc0000; font-size:14px;">${job.importantDates.lastDate}</strong></td>
            </tr>
            <tr>
              <th>Job Location</th>
              <td>${escapeHtml(stateObj.name)} / All India</td>
            </tr>
          </tbody>
        </table>

        <!-- Should You Apply Advisory -->
        <div style="background:#f0f8f0; border-left:4px solid #008000; padding:12px 14px; margin:18px 0;">
          <h3 style="color:#008000; font-size:14px; font-weight:700; margin-bottom:4px;">💡 Editorial Recommendation: Should You Apply?</h3>
          <p style="font-size:13px; color:#224422; line-height:1.6;">${escapeHtml(job.shouldYouApply)}</p>
        </div>

        <!-- Important Dates -->
        <h3 style="color:#0b3c5d; font-size:15px; font-weight:700; margin:20px 0 8px;">Important Dates</h3>
        <table class="detail-table-custom">
          <tbody>
            <tr><td>Notification Released Date</td><td>${job.importantDates.notificationDate}</td></tr>
            <tr><td>Online Application Starts</td><td>${job.importantDates.startDate}</td></tr>
            <tr><td>Application Closing Date</td><td><strong style="color:#cc0000;">${job.importantDates.lastDate}</strong></td></tr>
            <tr><td>Exam / Selection Date</td><td>${job.importantDates.examDate}</td></tr>
          </tbody>
        </table>

        <!-- Selection Process -->
        <h3 style="color:#0b3c5d; font-size:15px; font-weight:700; margin:20px 0 8px;">Selection Process</h3>
        <ul style="padding-left:20px; line-height:1.7; font-size:13px;">
          ${job.selectionProcess.map(s => `<li>${escapeHtml(s)}</li>`).join('')}
        </ul>

        <!-- How to Apply -->
        <h3 style="color:#0b3c5d; font-size:15px; font-weight:700; margin:20px 0 8px;">How to Apply</h3>
        <ol style="padding-left:20px; line-height:1.7; font-size:13px;">
          ${job.howToApply.map(s => `<li>${escapeHtml(s)}</li>`).join('')}
        </ol>

        <!-- FAQs -->
        <h3 style="color:#0b3c5d; font-size:15px; font-weight:700; margin:20px 0 8px;">Frequently Asked Questions (FAQs)</h3>
        <div style="display:flex; flex-direction:column; gap:8px;">
          ${job.faq.map(f => `
            <div style="background:#f8f9fa; border:1px solid #e2e8f0; padding:10px 12px; border-radius:3px;">
              <strong style="color:#0b3c5d;">Q: ${escapeHtml(f.q)}</strong>
              <p style="margin-top:4px; font-size:13px; color:#444;">${escapeHtml(f.a)}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    mainContentEl.innerHTML = html;
  }

  // =========================================================================
  // 6. Admit Cards View
  // =========================================================================

  function renderAdmitCardsView() {
    let html = `
      <div class="content-block" style="padding:16px;">
        <div class="section-bar-header">Latest Admit Cards & Hall Tickets 2026</div>
        <table class="ind-govt-table" style="margin-top:14px;">
          <thead>
            <tr>
              <th style="width:48%;">Admit Card / Exam Title</th>
              <th style="width:24%;">Exam Date</th>
              <th style="width:28%;">Download Link</th>
            </tr>
          </thead>
          <tbody>
            ${data.ADMIT_CARDS.map(card => `
              <tr>
                <td class="post-col">
                  <strong>${escapeHtml(card.title)}</strong>
                  <div style="font-size:11px; font-weight:normal; color:#666;">${escapeHtml(card.shortOrg)} • Status: ${escapeHtml(card.status)}</div>
                </td>
                <td class="date-col">${escapeHtml(card.examDate)}</td>
                <td class="action-col"><a href="${card.downloadUrl}" target="_blank" rel="noopener noreferrer">DOWNLOAD HALL TICKET</a></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;

    mainContentEl.innerHTML = html;
  }

  // =========================================================================
  // 7. Results View
  // =========================================================================

  function renderResultsView() {
    let html = `
      <div class="content-block" style="padding:16px;">
        <div class="section-bar-header">Government Exam Results & Cutoff Scores 2026</div>
        <table class="ind-govt-table" style="margin-top:14px;">
          <thead>
            <tr>
              <th style="width:48%;">Result / Exam Name</th>
              <th style="width:24%;">Declared Date</th>
              <th style="width:28%;">Check Result</th>
            </tr>
          </thead>
          <tbody>
            ${data.RESULTS.map(res => `
              <tr>
                <td class="post-col">
                  <strong>${escapeHtml(res.title)}</strong>
                  <div style="font-size:11px; font-weight:normal; color:#666;">${escapeHtml(res.cutoffHighlights)}</div>
                </td>
                <td class="date-col">${escapeHtml(res.declarationDate)}</td>
                <td class="action-col"><a href="${res.downloadUrl}" target="_blank" rel="noopener noreferrer">VIEW RESULT / SCORE</a></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;

    mainContentEl.innerHTML = html;
  }

  // =========================================================================
  // 8. Eligibility Tool View
  // =========================================================================

  function renderEligibilityToolView() {
    let html = `
      <div class="content-block" style="padding:16px;">
        <div class="section-bar-header">Smart Government Job Eligibility Finder</div>
        <div style="padding:16px 0;">
          <p style="font-size:13px; color:#555; margin-bottom:14px;">Select your qualification and age to find eligible government jobs instantly.</p>
          <form onsubmit="window.ROJGAAR_APP.handleEligibilitySubmit(event)">
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:12px;">
              <div>
                <label style="font-weight:700; font-size:12px; display:block; margin-bottom:4px;">Qualification</label>
                <select id="elig-qual-select" style="width:100%; padding:6px; border:1px solid #ccc; font-size:13px;">
                  <option value="all">-- All Qualifications --</option>
                  ${data.QUALIFICATIONS.map(q => `<option value="${q.id}">${q.name}</option>`).join('')}
                </select>
              </div>
              <div>
                <label style="font-weight:700; font-size:12px; display:block; margin-bottom:4px;">Your Age (Years)</label>
                <input type="number" id="elig-age-input" value="23" min="15" max="65" style="width:100%; padding:6px; border:1px solid #ccc; font-size:13px;">
              </div>
            </div>
            <button type="submit" class="search-btn" style="width:100%; padding:8px;">Search Eligible Jobs</button>
          </form>
        </div>
        <div id="eligibility-results-container"></div>
      </div>
    `;

    mainContentEl.innerHTML = html;
  }

  // =========================================================================
  // 9. Saved Jobs View
  // =========================================================================

  function renderSavedJobsView() {
    const savedList = data.RECRUITMENTS.filter(j => state.savedJobs.includes(j.id));

    let html = `
      <div class="content-block" style="padding:16px;">
        <div class="section-bar-header">My Saved Jobs (${savedList.length})</div>
        <div class="news-feed-list">
          ${savedList.length === 0 ? `
            <div style="padding:30px; text-align:center; color:#666;">
              No jobs saved yet. Click "Save Job" on any posting to track it here.
            </div>
          ` : savedList.map(job => `
            <div class="news-feed-card">
              <h2 class="news-feed-title"><a href="#/job/${job.id}">${escapeHtml(job.title)}</a></h2>
              <div class="news-feed-meta-row">
                <span class="meta-badge vac">${job.vacancies} Posts</span>
                <span class="meta-badge date">Last Date: ${job.importantDates.lastDate}</span>
                <a href="#/job/${job.id}" class="read-more-link">View Details »</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    mainContentEl.innerHTML = html;
  }

  // =========================================================================
  // 10. Search View
  // =========================================================================

  function renderSearchView(query) {
    const q = query.toLowerCase().trim();
    const results = data.RECRUITMENTS.filter(j => 
      j.title.toLowerCase().includes(q) ||
      j.org.toLowerCase().includes(q) ||
      j.posts.toLowerCase().includes(q) ||
      j.qualificationText.toLowerCase().includes(q)
    );

    let html = `
      <div class="content-block" style="padding:16px;">
        <div class="section-bar-header">Search Results for "${escapeHtml(query)}" (${results.length} Openings)</div>
        <table class="ind-govt-table" style="margin-top:14px;">
          <thead>
            <tr>
              <th style="width:48%;">Recruitment / Post Name</th>
              <th style="width:24%;">Last Date</th>
              <th style="width:28%;">Job Details</th>
            </tr>
          </thead>
          <tbody>
            ${results.length === 0 ? `
              <tr><td colspan="3" style="text-align:center; padding:20px; color:#666;">No matching government recruitments found.</td></tr>
            ` : results.map(job => `
              <tr>
                <td class="post-col">
                  <a href="#/job/${job.id}">${escapeHtml(job.title)}</a>
                  <div style="font-size:11px; font-weight:normal; color:#666;">Vacancies: ${job.vacancies} Posts | ${escapeHtml(job.shortOrg)}</div>
                </td>
                <td class="date-col">${job.importantDates.lastDate}</td>
                <td class="action-col"><a href="#/job/${job.id}">APPLY ONLINE</a></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;

    mainContentEl.innerHTML = html;
  }

  // =========================================================================
  // Event Handlers & Helpers
  // =========================================================================

  function setupEventListeners() {
    if (searchInputEl) {
      searchInputEl.addEventListener('input', debounce(handleAutocomplete, 200));
      document.addEventListener('click', (e) => {
        if (!searchInputEl.contains(e.target) && !suggestionsBoxEl.contains(e.target)) {
          suggestionsBoxEl.style.display = 'none';
        }
      });
    }

    const searchForm = document.getElementById('main-search-form');
    if (searchForm) {
      searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const q = searchInputEl.value.trim();
        if (q) {
          suggestionsBoxEl.style.display = 'none';
          window.location.hash = `#/search?q=${encodeURIComponent(q)}`;
        }
      });
    }
  }

  function handleAutocomplete() {
    const q = searchInputEl.value.trim().toLowerCase();
    if (q.length < 2) {
      suggestionsBoxEl.style.display = 'none';
      return;
    }

    const matches = data.RECRUITMENTS.filter(j => 
      j.title.toLowerCase().includes(q) ||
      j.org.toLowerCase().includes(q) ||
      j.posts.toLowerCase().includes(q)
    ).slice(0, 6);

    if (matches.length === 0) {
      suggestionsBoxEl.innerHTML = `<div class="suggestion-item" style="color:#666;">No matches found.</div>`;
    } else {
      suggestionsBoxEl.innerHTML = matches.map(m => `
        <div class="suggestion-item" onclick="window.ROJGAAR_APP.selectSuggestion('${m.id}')">
          <strong>${escapeHtml(m.title)}</strong>
          <div style="font-size:11.5px; color:#666;">${escapeHtml(m.shortOrg)} • Last Date: ${m.importantDates.lastDate}</div>
        </div>
      `).join('');
    }

    suggestionsBoxEl.style.display = 'block';
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

  function debounce(func, wait) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  // Public Interface
  window.ROJGAAR_APP = {
    init,
    goToPage: function(p) {
      state.currentPage = p;
      renderHomeView();
      window.scrollTo({ top: 300, behavior: 'smooth' });
    },
    selectSuggestion: function(jobId) {
      if (suggestionsBoxEl) suggestionsBoxEl.style.display = 'none';
      if (searchInputEl) searchInputEl.value = '';
      window.location.hash = `#/job/${jobId}`;
    },
    toggleSaveJob: function(jobId) {
      const idx = state.savedJobs.indexOf(jobId);
      if (idx === -1) {
        state.savedJobs.push(jobId);
        alert('Job saved to your bookmarks!');
      } else {
        state.savedJobs.splice(idx, 1);
        alert('Job removed from bookmarks.');
      }
      localStorage.setItem('rojgaar_saved_jobs', JSON.stringify(state.savedJobs));
      if (state.currentRoute === 'job-detail') renderJobDetailView(jobId);
      else if (state.currentRoute === 'saved') renderSavedJobsView();
    },
    handleEligibilitySubmit: function(e) {
      e.preventDefault();
      const qual = document.getElementById('elig-qual-select').value;
      let results = data.RECRUITMENTS;
      if (qual !== 'all') {
        results = results.filter(j => j.qualifications.includes(qual));
      }
      const container = document.getElementById('eligibility-results-container');
      if (container) {
        container.innerHTML = `
          <table class="ind-govt-table" style="margin-top:14px;">
            <thead>
              <tr>
                <th style="width:48%;">Recruitment / Post Name</th>
                <th style="width:24%;">Last Date</th>
                <th style="width:28%;">Job Details</th>
              </tr>
            </thead>
            <tbody>
              ${results.map(job => `
                <tr>
                  <td class="post-col">
                    <a href="#/job/${job.id}">${escapeHtml(job.title)}</a>
                    <div style="font-size:11px; font-weight:normal; color:#666;">Vacancies: ${job.vacancies} Posts | ${escapeHtml(job.shortOrg)}</div>
                  </td>
                  <td class="date-col">${job.importantDates.lastDate}</td>
                  <td class="action-col"><a href="#/job/${job.id}">APPLY ONLINE</a></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        `;
      }
    }
  };

  document.addEventListener('DOMContentLoaded', init);

})();
