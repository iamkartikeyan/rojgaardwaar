/**
 * ROJGAARDWAAR (RojgaarDwaar.in) - Master Application Engine
 * Renders IndGovtJobs-inspired authentic layout with dedicated high-density hubs for:
 * - Home
 * - Govt Jobs (Central)
 * - Railway Jobs
 * - Bank Jobs
 * - PSU Jobs
 * - Fresher Jobs
 * - Graduate Jobs
 * - State Govt Jobs
 * - All other Qualification & State hubs with 3-column tables, exam lists, & FAQs.
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
    } else if (hash === '/category/central-govt') {
      state.currentRoute = 'central-govt';
      state.routeParam = 'central-govt';
      renderCentralGovtJobsView();
    } else if (hash === '/category/railway') {
      state.currentRoute = 'railway';
      state.routeParam = 'railway';
      renderRailwayJobsView();
    } else if (hash === '/category/banking') {
      state.currentRoute = 'banking';
      state.routeParam = 'banking';
      renderBankJobsView();
    } else if (hash === '/category/psu') {
      state.currentRoute = 'psu';
      state.routeParam = 'psu';
      renderPsuJobsView();
    } else if (hash === '/category/fresher') {
      state.currentRoute = 'fresher';
      state.routeParam = 'fresher';
      renderFresherJobsView();
    } else if (hash === '/qualification/graduate') {
      state.currentRoute = 'graduate';
      state.routeParam = 'graduate';
      renderGraduateJobsView();
    } else if (hash === '/category/state-govt') {
      state.currentRoute = 'state-govt';
      state.routeParam = 'state-govt';
      renderStateGovtJobsView();
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
  // 1. Home View
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
  // 2. Central Govt Jobs View
  // =========================================================================

  function renderCentralGovtJobsView() {
    renderCategoryOrGovtJobsView('category', 'central-govt');
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
          <li><strong>RPF Sub-Inspector:</strong> For higher-level positions in the Railway Protection Force.</li>
          <li><strong>RRB Ministerial and Isolated Categories:</strong> For various ministerial posts.</li>
        </ul>

        <div class="green-check-title">
          <span>✅</span> <span>Railway Job Vacancy 2026-27 List:</span>
        </div>
        <ul style="padding-left: 20px; line-height: 1.7; font-size: 13px; color: #333; margin-bottom: 16px;">
          <li><strong>General/Unreserved Quota:</strong> Open to all candidates based on merit.</li>
          <li><strong>SC / ST Quota:</strong> 5 years age relaxation with concession in qualifying marks.</li>
          <li><strong>OBC Quota:</strong> 3 years age relaxation for Non-Creamy Layer.</li>
          <li><strong>EWS Quota:</strong> 10% reservation for economically weaker sections.</li>
          <li><strong>Sports Quota:</strong> Direct recruitment for national/international medalists.</li>
          <li><strong>Persons with Benchmark Disabilities (PwD):</strong> 10-15 years relaxation in non-safety category posts.</li>
          <li><strong>Course Completed Act Apprentices (CCAA):</strong> 20% horizontal reservation in Level-1 (Group D) posts with NCVT weightage.</li>
        </ul>

        <div class="green-check-title">
          <span>✅</span> <span>Frequently Asked Questions:</span>
        </div>
        <div style="line-height: 1.7; font-size: 13px; color: #333;">
          <p style="margin-bottom: 8px;"><strong>What are the popular jobs in Railway Sector?</strong><br>
          Indian Railway jobs include Gazetted (Group 'A' and 'B'), Non-Gazetted (Group 'C' and 'D'), NTPC, Junior Engineer, RPF, Act Apprentices, Level 1, and Level 2 posts.</p>

          <p style="margin-bottom: 8px;"><strong>How to apply for railway recruitment from RojgaarDwaar?</strong><br>
          Candidates check their eligibility in the tables above, then click on the corresponding notification link to download the PDF notice and apply directly on the official RRB portal.</p>

          <p style="margin-bottom: 8px;"><strong>How many railway boards in India?</strong><br>
          There are 21 Railway Recruitment Boards (RRBs) across India including Ahmedabad, Ajmer, Allahabad, Bangalore, Bhopal, Bhubaneswar, Bilaspur, Chandigarh, Chennai, Gorakhpur, Guwahati, Jammu, Kolkata, Malda, Mumbai, Muzaffarpur, Patna, Ranchi, Secunderabad, Siliguri, and Trivandrum.</p>
        </div>

        <div style="margin-top: 18px; padding-top: 10px; border-top: 1px solid #eee; font-size: 12px; color: #008000; font-weight: 700;">
          Categories: <a href="#/" style="color:#008000;">Top Pages</a>
        </div>
      </div>
    `;

    mainContentEl.innerHTML = html;
  }

  // =========================================================================
  // 4. Bank Jobs View
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
        <h1 style="font-size: 19px; font-weight: 800; color: #000000; line-height: 1.35; margin-bottom: 4px;">
          Bank Jobs 2026: Latest Banking Recruitment 18820 Vacancies
        </h1>
        <div style="font-size: 11.5px; color: #666; margin-bottom: 14px;">
          Last Updated: September 01, 2026 | Author: Prabhu
        </div>

        <p style="font-size: 13px; line-height: 1.6; color: #333; margin-bottom: 16px;">
          Bank Jobs 2026 for 10th 12th passed, Degree Holders and Professionals – Apply Online for 18000+ Bank Vacancies Opening in 2026-27. <strong>RojgaarDwaar</strong> updates latest Public Sector Banking Vacancies and Current Private Sector Bank career openings for both fresher and experienced Indian Citizens. More than 50,000 upcoming Govt Bank vacancies are opening in 2026.
        </p>

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
                <td class="post-col"><a href="#/job/${j.id}">${escapeHtml(j.title)}</a></td>
                <td class="date-col">${j.lastDate}</td>
                <td class="action-col"><a href="#/job/${j.id}">${escapeHtml(j.bank)}</a></td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <div class="green-check-title">
          <span>✅</span> <span>Types of Banking Jobs Available in India:</span>
        </div>
        <ul style="padding-left: 20px; line-height: 1.7; font-size: 13px; color: #333; margin-bottom: 16px;">
          <li>Clerical Cadre (Clerk, Junior Associates, Cashier)</li>
          <li>Office Assistant / Attendant / Peon</li>
          <li>Probationary Officer (PO)</li>
          <li>Management Trainee (MT)</li>
          <li>Specialist Officer (SO) – IT, Law, HR, Marketing, etc.</li>
          <li>Financial Analyst / Credit Analyst</li>
          <li>Customer Relationship Manager</li>
          <li>Loan Officer / Auditor / Chartered Accountant</li>
        </ul>

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

        <div class="green-check-title">
          <span>✅</span> <span>Frequently Asked Questions (FAQ):</span>
        </div>
        <div style="line-height: 1.7; font-size: 13px; color: #333;">
          <p style="margin-bottom: 8px;"><strong>1. How to apply for bank jobs in India?</strong><br>
          Eligible candidates can apply online through official notifications listed on RojgaarDwaar with direct links to IBPS, SBI, and RBI application portals.</p>

          <p style="margin-bottom: 8px;"><strong>2. What bank jobs are available after 12th pass or graduation?</strong><br>
          After 12th: Clerk, Office Assistant, Cashier, Peon. After Graduation: Probationary Officer (PO), Specialist Officer (SO), Management Trainee, IT Officer.</p>

          <p style="margin-bottom: 8px;"><strong>3. What are the major upcoming bank exams in India?</strong><br>
          Top exams include IBPS Clerk, IBPS PO, IBPS RRB, SBI Clerk, SBI PO, RBI Assistant, and RBI Grade B.</p>
        </div>

        <div style="margin-top: 18px; padding-top: 10px; border-top: 1px solid #eee; font-size: 12px; color: #008000; font-weight: 700;">
          Categories: <a href="#/" style="color:#008000;">Top Pages</a>
        </div>
      </div>
    `;

    mainContentEl.innerHTML = html;
  }

  // =========================================================================
  // 5. PSU Jobs View (Public Sector Undertakings)
  // =========================================================================

  function renderPsuJobsView() {
    const psuJobs = [
      { title: "Executive Trainee through CBT 2026 – 470 Posts", vacancies: "470", lastDate: "03/09/2026", psu: "Indian Oil Corporation (IOCL)", id: "iocl-executive-cbt-recruitment-2026" },
      { title: "Management Trainee (Engineering, Finance & HR) – 280 Posts", vacancies: "280", lastDate: "28/09/2026", psu: "NTPC Limited", id: "iocl-executive-cbt-recruitment-2026" },
      { title: "Graduate Trainee & Non-Executive Officers – 520 Posts", vacancies: "520", lastDate: "25/09/2026", psu: "Oil & Natural Gas Corp (ONGC)", id: "iocl-executive-cbt-recruitment-2026" },
      { title: "Management Trainee & Assistant Officer – 77 Posts", vacancies: "77", lastDate: "30/09/2026", psu: "CONCOR India", id: "iocl-executive-cbt-recruitment-2026" },
      { title: "Management Trainee (Technical & F&A) – 315 Posts", vacancies: "315", lastDate: "22/09/2026", psu: "Steel Authority of India (SAIL)", id: "iocl-executive-cbt-recruitment-2026" },
      { title: "Executive Trainee (Without GATE) – 190 Posts", vacancies: "190", lastDate: "18/09/2026", psu: "Bharat Electronics Limited (BEL)", id: "iocl-executive-cbt-recruitment-2026" },
      { title: "Design Trainee & Management Trainee – 185 Posts", vacancies: "185", lastDate: "26/09/2026", psu: "Hindustan Aeronautics (HAL)", id: "iocl-executive-cbt-recruitment-2026" },
      { title: "Executive Trainee & Junior Executive – 140 Posts", vacancies: "140", lastDate: "20/09/2026", psu: "GAIL (India) Limited", id: "iocl-executive-cbt-recruitment-2026" },
      { title: "Management Trainee through Open CBT – 640 Posts", vacancies: "640", lastDate: "29/09/2026", psu: "Coal India Limited (CIL)", id: "iocl-executive-cbt-recruitment-2026" },
      { title: "Scientific Officer & Technical Officer – 95 Posts", vacancies: "95", lastDate: "15/09/2026", psu: "Nuclear Power Corp (NPCIL)", id: "iocl-executive-cbt-recruitment-2026" }
    ];

    let html = `
      <div class="content-block" style="padding: 16px 18px;">
        <h1 style="font-size: 19px; font-weight: 800; color: #000000; line-height: 1.35; margin-bottom: 4px;">
          Latest PSU Jobs 2026 | Public Sector Company Jobs (4433+ Vacancies)
        </h1>
        <div style="font-size: 11.5px; color: #666; margin-bottom: 14px;">
          Last Updated: September 01, 2026 | Author: Admin
        </div>

        <p style="font-size: 13px; line-height: 1.6; color: #333; margin-bottom: 16px;">
          <strong>Latest PSU Jobs without GATE, PSU Jobs for Commerce graduates, PSU Jobs for MBA and PSU Jobs for Engineers.</strong> <strong>RojgaarDwaar</strong> tracks and updates all active Maharatna, Navratna, and Miniratna Public Sector Undertaking recruitments with verified direct application links.
        </p>

        <div class="green-check-title">
          <span>✅</span> <span>Latest PSU Jobs Notifications 2026:</span>
        </div>
        <table class="ind-govt-table">
          <thead>
            <tr>
              <th style="width:48%;">Post Names – Total Vacancies</th>
              <th style="width:22%;">Last Date</th>
              <th style="width:30%;">PSU Undertaking</th>
            </tr>
          </thead>
          <tbody>
            ${psuJobs.map(j => `
              <tr>
                <td class="post-col"><a href="#/job/${j.id}">${escapeHtml(j.title)}</a></td>
                <td class="date-col">${j.lastDate}</td>
                <td class="action-col"><a href="#/job/${j.id}">${escapeHtml(j.psu)}</a></td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <div class="green-check-title">
          <span>✅</span> <span>Top Maharatna & Navratna PSU Companies Recruiting in 2026:</span>
        </div>
        <ul style="padding-left: 20px; line-height: 1.7; font-size: 13px; color: #333; margin-bottom: 16px;">
          <li><strong>IOCL (Indian Oil):</strong> Executive CBT, Trade Apprentice, Marketing Officers.</li>
          <li><strong>NTPC Limited:</strong> Executive Trainees in Electrical, Mechanical, Civil & HR.</li>
          <li><strong>ONGC:</strong> Graduate Trainees through GATE & Non-Executive CBT Openings.</li>
          <li><strong>SAIL:</strong> Management Trainees (Technical & Administration) across steel plants.</li>
          <li><strong>BEL & HAL:</strong> Design Trainees, Project Engineers, and Management Trainees.</li>
          <li><strong>Coal India (CIL):</strong> Open CBT recruitment for Mining, Finance, Sales, and Personnel.</li>
          <li><strong>BHEL & PowerGrid:</strong> Executive Engineers and Field Supervisors.</li>
        </ul>

        <div class="green-check-title">
          <span>✅</span> <span>PSU Recruitment Categories (With & Without GATE):</span>
        </div>
        <ul style="padding-left: 20px; line-height: 1.7; font-size: 13px; color: #333; margin-bottom: 16px;">
          <li><strong>PSU Jobs without GATE:</strong> Many PSUs (BEL, HAL, ISRO, BARC, CIL, BIS, CONCOR) conduct their own independent online CBT exams without requiring GATE scores.</li>
          <li><strong>PSU Jobs for Non-Engineers:</strong> Regular openings for MBA (Finance/HR/Marketing), CA/ICWA, LLB (Law Officers), MCA (IT Officers), and Graduates (Junior Executives).</li>
          <li><strong>Pay Scale:</strong> E-2 / E-3 grade pays ranging from ₹50,000 to ₹1,80,000 with Dearness Allowance, HRA, and Performance Related Pay (PRP).</li>
        </ul>

        <div class="green-check-title">
          <span>✅</span> <span>Frequently Asked Questions (PSU Jobs FAQ):</span>
        </div>
        <div style="line-height: 1.7; font-size: 13px; color: #333;">
          <p style="margin-bottom: 8px;"><strong>Q: Can I get a PSU Job without a GATE score?</strong><br>
          A: Yes! Leading PSUs such as Coal India (CIL), BEL, HAL, RITES, NMDC, and Vizag Steel conduct independent Computer Based Tests (CBT) for recruitment.</p>

          <p style="margin-bottom: 8px;"><strong>Q: What is the starting salary in Maharatna PSU companies?</strong><br>
          A: Management Trainees in Maharatna PSUs start on an E-2 scale (Basic Pay ₹50,000–₹1,60,000) with a total CTC ranging from 12 to 18 Lakhs per annum.</p>
        </div>

        <div style="margin-top: 18px; padding-top: 10px; border-top: 1px solid #eee; font-size: 12px; color: #008000; font-weight: 700;">
          Categories: <a href="#/" style="color:#008000;">Top Pages</a>
        </div>
      </div>
    `;

    mainContentEl.innerHTML = html;
  }

  // =========================================================================
  // 6. Fresher Jobs View
  // =========================================================================

  function renderFresherJobsView() {
    const fresherJobs = [
      { title: "India Post Gramin Dak Sevak (GDS) – 44,228 Posts (No Exam / 10th Merit)", vacancies: "44228", lastDate: "21/09/2026", dept: "India Post Department", id: "india-post-gds-recruitment-2026" },
      { title: "Northern Railway Trade Apprentice – 4,096 Posts (10th + ITI Fresher)", vacancies: "4096", lastDate: "24/09/2026", dept: "Railway Recruitment Cell", id: "rrc-northern-railway-apprentice-recruitment-2026" },
      { title: "SSC Multi-Tasking Staff (MTS) & Havaldar – 9,583 Posts", vacancies: "9583", lastDate: "30/09/2026", dept: "Staff Selection Commission", id: "ssc-cgl-recruitment-2026" },
      { title: "SSC Combined Higher Secondary Level (CHSL) 10+2 – 3,712 Posts", vacancies: "3712", lastDate: "28/09/2026", dept: "Staff Selection Commission", id: "ssc-cgl-recruitment-2026" },
      { title: "Indian Army Agniveer Rally – 25,000 Posts (10th / 12th Pass Fresher)", vacancies: "25000", lastDate: "18/09/2026", dept: "Join Indian Army", id: "indian-army-agniveer-rally-2026" },
      { title: "SBI Junior Associate (Customer Support) – 8,283 Posts (Any Fresher Graduate)", vacancies: "8283", lastDate: "25/09/2026", dept: "State Bank of India", id: "ibps-po-recruitment-2026" },
      { title: "IBPS Clerk XIV – 6,128 Posts (Any Graduate Fresher)", vacancies: "6128", lastDate: "21/09/2026", dept: "Institute of Banking Personnel Selection", id: "ibps-po-recruitment-2026" },
      { title: "UP Police Constable (Male & Female) – 42,000 Posts (12th Pass)", vacancies: "42000", lastDate: "29/09/2026", dept: "UP Police PRPB", id: "up-police-constable-recruitment-2026" }
    ];

    let html = `
      <div class="content-block" style="padding: 16px 18px;">
        <h1 style="font-size: 19px; font-weight: 800; color: #000000; line-height: 1.35; margin-bottom: 4px;">
          Fresher Govt Jobs 2026: Apply Online (1,00,000+ Zero Experience Vacancies)
        </h1>
        <div style="font-size: 11.5px; color: #666; margin-bottom: 14px;">
          Last Updated: September 01, 2026 | Author: Admin
        </div>

        <p style="font-size: 13px; line-height: 1.6; color: #333; margin-bottom: 16px;">
          Discover government recruitments requiring <strong>zero work experience</strong>. Candidates who have recently completed 10th, 12th, ITI, Diploma, or Graduation can apply online for high-paying entry-level Central & State government positions.
        </p>

        <div class="green-check-title">
          <span>✅</span> <span>Latest Fresher Govt Job Notifications 2026:</span>
        </div>
        <table class="ind-govt-table">
          <thead>
            <tr>
              <th style="width:48%;">Post Names – Total Vacancies</th>
              <th style="width:22%;">Last Date</th>
              <th style="width:30%;">Department / Agency</th>
            </tr>
          </thead>
          <tbody>
            ${fresherJobs.map(j => `
              <tr>
                <td class="post-col"><a href="#/job/${j.id}">${escapeHtml(j.title)}</a></td>
                <td class="date-col">${j.lastDate}</td>
                <td class="action-col"><a href="#/job/${j.id}">${escapeHtml(j.dept)}</a></td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <div class="green-check-title">
          <span>✅</span> <span>Top Entry-Level Fresher Job Streams:</span>
        </div>
        <ul style="padding-left: 20px; line-height: 1.7; font-size: 13px; color: #333; margin-bottom: 16px;">
          <li><strong>Direct Merit (No Written Exam):</strong> India Post GDS (44k posts) and Railway Act Apprentices (12k posts).</li>
          <li><strong>10th / 12th Pass Entry:</strong> SSC MTS, SSC CHSL, Railway Group D, State Police Constables.</li>
          <li><strong>Graduate Entry:</strong> SBI Clerk, IBPS PO/Clerk, SSC CGL, UPSC Civil Services, State PSC CCE.</li>
        </ul>

        <div class="green-check-title">
          <span>✅</span> <span>Frequently Asked Questions (Fresher Jobs FAQ):</span>
        </div>
        <div style="line-height: 1.7; font-size: 13px; color: #333;">
          <p style="margin-bottom: 8px;"><strong>Q: Can a college fresher with no experience apply for SSC CGL or IBPS PO?</strong><br>
          A: Absolutely. SSC CGL, IBPS PO, and SBI Clerk require only a recognized Bachelor's Degree with zero prior work experience.</p>

          <p style="margin-bottom: 8px;"><strong>Q: What is the age limit for fresher government jobs?</strong><br>
          A: General category candidates can apply between ages 18 to 27 or 30 years (with 3-5 years relaxation for reserved categories).</p>
        </div>

        <div style="margin-top: 18px; padding-top: 10px; border-top: 1px solid #eee; font-size: 12px; color: #008000; font-weight: 700;">
          Categories: <a href="#/" style="color:#008000;">Top Pages</a>
        </div>
      </div>
    `;

    mainContentEl.innerHTML = html;
  }

  // =========================================================================
  // 7. Graduate Jobs View
  // =========================================================================

  function renderGraduateJobsView() {
    const gradJobs = [
      { title: "SSC Combined Graduate Level (CGL) 2026 – 17,727 Posts (Assistant Section Officer, Inspector)", vacancies: "17727", lastDate: "27/09/2026", board: "Staff Selection Commission", id: "ssc-cgl-recruitment-2026" },
      { title: "UPSC Civil Services Examination (CSE) 2026 – 1,056 Posts (IAS, IPS, IFS, IRS)", vacancies: "1056", lastDate: "25/09/2026", board: "Union Public Service Commission", id: "upsc-civil-services-ias-ifs-2026" },
      { title: "IBPS Probationary Officers (PO/MT) – 6,850 Posts (Scale-I Officer)", vacancies: "6850", lastDate: "28/09/2026", board: "IBPS Examination Authority", id: "ibps-po-recruitment-2026" },
      { title: "SBI Probationary Officers (PO) – 2,000 Posts", vacancies: "2000", lastDate: "30/09/2026", board: "State Bank of India", id: "ibps-po-recruitment-2026" },
      { title: "BPSC 70th Combined Competitive Examination (CCE) – 1,950 Posts (SDM, DSP)", vacancies: "1950", lastDate: "29/09/2026", board: "Bihar Public Service Commission", id: "bpsc-70th-cce-recruitment-2026" },
      { title: "UPPSC Combined State / Upper Subordinate Services (PCS) – 420 Posts", vacancies: "420", lastDate: "26/09/2026", board: "Uttar Pradesh PSC", id: "ssc-cgl-recruitment-2026" },
      { title: "RBI Grade 'B' General Officers – 94 Posts (₹1,16,000 Monthly Pay)", vacancies: "94", lastDate: "22/09/2026", board: "Reserve Bank of India", id: "ibps-po-recruitment-2026" },
      { title: "RSMSSB Revenue Patwari & Village Development Officer – 3,820 Posts", vacancies: "3820", lastDate: "24/09/2026", board: "Rajasthan Subordinate Board", id: "rsmssb-patwari-recruitment-2026" },
      { title: "DSSSB Graduate Trained Graduate Teacher (TGT) – 8,420 Posts", vacancies: "8420", lastDate: "28/09/2026", board: "Delhi Subordinate Board", id: "dsssb-teacher-recruitment-2026" }
    ];

    let html = `
      <div class="content-block" style="padding: 16px 18px;">
        <h1 style="font-size: 19px; font-weight: 800; color: #000000; line-height: 1.35; margin-bottom: 4px;">
          Graduate Govt Jobs 2026: Apply Online (50,000+ Degree Holder Openings)
        </h1>
        <div style="font-size: 11.5px; color: #666; margin-bottom: 14px;">
          Last Updated: September 01, 2026 | Author: Admin
        </div>

        <p style="font-size: 13px; line-height: 1.6; color: #333; margin-bottom: 16px;">
          Apply online for latest <strong>Graduate Government Jobs 2026</strong> for BA, B.Sc, B.Com, B.Tech, BBA, BCA, and all degree holders. Discover officer cadre, civil services, banking, insurance, and executive positions across India.
        </p>

        <div class="green-check-title">
          <span>✅</span> <span>Latest Graduate Govt Job Notifications 2026:</span>
        </div>
        <table class="ind-govt-table">
          <thead>
            <tr>
              <th style="width:48%;">Post Names – Total Vacancies</th>
              <th style="width:22%;">Last Date</th>
              <th style="width:30%;">Recruitment Authority</th>
            </tr>
          </thead>
          <tbody>
            ${gradJobs.map(j => `
              <tr>
                <td class="post-col"><a href="#/job/${j.id}">${escapeHtml(j.title)}</a></td>
                <td class="date-col">${j.lastDate}</td>
                <td class="action-col"><a href="#/job/${j.id}">${escapeHtml(j.board)}</a></td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <div class="green-check-title">
          <span>✅</span> <span>Top Career Paths for Degree Holders:</span>
        </div>
        <ul style="padding-left: 20px; line-height: 1.7; font-size: 13px; color: #333; margin-bottom: 16px;">
          <li><strong>Civil Services & Administration:</strong> UPSC IAS/IPS, State PSC SDM/DSP, Tehsildar, Revenue Officers.</li>
          <li><strong>Ministries & Inspection:</strong> SSC CGL Assistant Section Officer (CSS/MEA), Income Tax Inspector, GST Inspector, ED Assistant.</li>
          <li><strong>Banking & Insurance:</strong> Bank Probationary Officers (PO), RBI Grade B, LIC Assistant Administrative Officer (AAO).</li>
        </ul>

        <div class="green-check-title">
          <span>✅</span> <span>Frequently Asked Questions (Graduate Jobs FAQ):</span>
        </div>
        <div style="line-height: 1.7; font-size: 13px; color: #333;">
          <p style="margin-bottom: 8px;"><strong>Q: Is there any minimum percentage required in Graduation for SSC CGL or IBPS PO?</strong><br>
          A: For SSC CGL and IBPS PO, a simple pass degree from any recognized UGC university is sufficient with no minimum percentage barrier.</p>

          <p style="margin-bottom: 8px;"><strong>Q: What is the salary of an SSC CGL Inspector or Bank PO?</strong><br>
          A: SSC CGL Inspector (Level 7) salary is approx ₹75,000 to ₹85,000/month in Metro cities. Bank PO in public sector banks starts around ₹65,000 to ₹72,000/month.</p>
        </div>

        <div style="margin-top: 18px; padding-top: 10px; border-top: 1px solid #eee; font-size: 12px; color: #008000; font-weight: 700;">
          Categories: <a href="#/" style="color:#008000;">Top Pages</a>
        </div>
      </div>
    `;

    mainContentEl.innerHTML = html;
  }

  // =========================================================================
  // 8. State Govt Jobs View
  // =========================================================================

  function renderStateGovtJobsView() {
    const stateJobs = [
      { title: "UP Police Constable (Civil & PAC) – 42,000 Posts", vacancies: "42000", lastDate: "29/09/2026", state: "Uttar Pradesh", id: "up-police-constable-recruitment-2026" },
      { title: "BPSC 70th Combined Competitive Examination (CCE) – 1,950 Posts", vacancies: "1950", lastDate: "29/09/2026", state: "Bihar", id: "bpsc-70th-cce-recruitment-2026" },
      { title: "Maharashtra Police Constable & Driver – 17,471 Posts", vacancies: "17471", lastDate: "27/09/2026", state: "Maharashtra", id: "up-police-constable-recruitment-2026" },
      { title: "RSMSSB Patwari & Junior Accountant – 3,820 Posts", vacancies: "3820", lastDate: "24/09/2026", state: "Rajasthan", id: "rsmssb-patwari-recruitment-2026" },
      { title: "DSSSB Trained Graduate Teacher (TGT) & Special Educator – 8,420 Posts", vacancies: "8420", lastDate: "28/09/2026", state: "Delhi", id: "dsssb-teacher-recruitment-2026" },
      { title: "MPESB Primary School Teacher & Forest Guard – 6,500 Posts", vacancies: "6500", lastDate: "25/09/2026", state: "Madhya Pradesh", id: "dsssb-teacher-recruitment-2026" },
      { title: "TNPSC Combined Civil Services (Group 4 & VAO) – 8,932 Posts", vacancies: "8932", lastDate: "26/09/2026", state: "Tamil Nadu", id: "ssc-cgl-recruitment-2026" },
      { title: "WBPSC West Bengal Civil Service (Exe) – 450 Posts", vacancies: "450", lastDate: "22/09/2026", state: "West Bengal", id: "bpsc-70th-cce-recruitment-2026" }
    ];

    let html = `
      <div class="content-block" style="padding: 16px 18px;">
        <h1 style="font-size: 19px; font-weight: 800; color: #000000; line-height: 1.35; margin-bottom: 4px;">
          State Govt Jobs 2026: Apply Online Across 28 States & 8 UTs (1,20,000+ Vacancies)
        </h1>
        <div style="font-size: 11.5px; color: #666; margin-bottom: 14px;">
          Last Updated: September 01, 2026 | Author: Admin
        </div>

        <p style="font-size: 13px; line-height: 1.6; color: #333; margin-bottom: 16px;">
          Browse verified State Public Service Commission (PSC), Subordinate Services Selection Board (SSSB), Police Recruitment Board, High Court, and Education Department jobs across all Indian States.
        </p>

        <div class="green-check-title">
          <span>✅</span> <span>Major State Government Openings 2026:</span>
        </div>
        <table class="ind-govt-table">
          <thead>
            <tr>
              <th style="width:48%;">Post Names – Total Vacancies</th>
              <th style="width:22%;">Last Date</th>
              <th style="width:30%;">State Board</th>
            </tr>
          </thead>
          <tbody>
            ${stateJobs.map(j => `
              <tr>
                <td class="post-col"><a href="#/job/${j.id}">${escapeHtml(j.title)}</a></td>
                <td class="date-col">${j.lastDate}</td>
                <td class="action-col"><a href="#/job/${j.id}">${escapeHtml(j.state)}</a></td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <div class="green-check-title">
          <span>✅</span> <span>State-Wise Quick Navigator:</span>
        </div>
        <div class="state-check-grid" style="padding:0; margin-bottom:16px;">
          ${data.STATES.slice(0, 18).map(s => `
            <a href="#/state/${s.id}" class="state-check-link">
              <span>✅</span> <span>${s.name} Govt Jobs</span>
            </a>
          `).join('')}
        </div>

        <div class="green-check-title">
          <span>✅</span> <span>Frequently Asked Questions (State Jobs FAQ):</span>
        </div>
        <div style="line-height: 1.7; font-size: 13px; color: #333;">
          <p style="margin-bottom: 8px;"><strong>Q: Can candidates from other states apply for state government jobs?</strong><br>
          A: Yes, Indian citizens from any state can apply for general category vacancies in other states, subject to meeting regional language criteria where mandatory.</p>

          <p style="margin-bottom: 8px;"><strong>Q: Do state government employees receive 7th Pay Commission benefits?</strong><br>
          A: Most state governments (UP, Bihar, Maharashtra, Rajasthan, MP, Haryana, etc.) have implemented revised 7th Pay Matrix scales matching Central norms.</p>
        </div>

        <div style="margin-top: 18px; padding-top: 10px; border-top: 1px solid #eee; font-size: 12px; color: #008000; font-weight: 700;">
          Categories: <a href="#/" style="color:#008000;">Top Pages</a>
        </div>
      </div>
    `;

    mainContentEl.innerHTML = html;
  }

  // =========================================================================
  // 9. Generic Category / State / Qualification Hub View
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
  // 10. Job Detail View
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
  // 11. Admit Cards View
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
  // 12. Results View
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
  // 13. Eligibility Tool View
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
  // 14. Saved Jobs View
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
  // 15. Search View
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
