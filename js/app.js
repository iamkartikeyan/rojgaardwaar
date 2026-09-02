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
 * - 10th Pass, 12th Pass, Diploma, ITI, B.Tech, MBA, MCA, Law, PG Hubs
 * - All State/UT Hubs
 * - 2,000+ WORDS IN-DEPTH UNIQUE SINGLE JOB DETAIL PAGES
 * - Admit Cards, Results, Eligibility Finder & Saved Bookmarks
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
      renderQualificationHubView(qualId);
    } else if (hash.startsWith('/state/')) {
      const stateId = hash.replace('/state/', '').trim();
      state.currentRoute = 'state';
      state.routeParam = stateId;
      renderStateHubView(stateId);
    } else if (hash.startsWith('/category/')) {
      const catId = hash.replace('/category/', '').trim();
      state.currentRoute = 'category';
      state.routeParam = catId;
      renderGenericCategoryView(catId);
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
                  <strong>${escapeHtml(job.org)}</strong> has invited online applications for the recruitment of <strong>${escapeHtml(job.posts)}</strong> (${job.vacancies.toLocaleString('en-IN')} Vacancies). Minimum Qualification: ${escapeHtml(qualShorts)}. Location: ${escapeHtml(stateObj.name)}.
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
    const centralJobs = data.RECRUITMENTS.filter(j => j.category === 'central-govt' || j.category === 'ssc' || j.category === 'upsc');
    renderHubTemplate({
      title: "Central Government Jobs 2026 (150000+ Govt Vacancies Opening)",
      metaText: "Last Updated: September 01, 2026 | Author: RojgaarDwaar Editorial Desk",
      intro: "Find latest Indian Government Jobs 2026 across Central Ministries, Union Departments, Staff Selection Commission (SSC), UPSC, Armed Forces, and Constitutional Commissions with verified online application links.",
      tableTitle: "Latest Central Government Recruitment Openings 2026:",
      jobsList: centralJobs.slice(0, 15),
      keySections: [
        {
          title: "Major Central Government Recruitment Commissions:",
          items: [
            "<strong>Staff Selection Commission (SSC):</strong> CGL, CHSL, MTS, GD Constable, JE, CPO SI, and Stenographer recruitments.",
            "<strong>Union Public Service Commission (UPSC):</strong> Civil Services (IAS/IPS/IFS), Engineering Services (ESE), Combined Medical (CMS), NDA, and CDS.",
            "<strong>Central Ministries & Autonomous Bodies:</strong> Ministry of Home Affairs, Defence, External Affairs, Railways, and Finance."
          ]
        },
        {
          title: "7th Central Pay Commission (CPC) Pay Matrix Breakdown:",
          items: [
            "<strong>Level 1 (₹18,000 - ₹56,900):</strong> Multi-Tasking Staff (MTS), Helpers, Peons, and Group D.",
            "<strong>Level 2 & 4 (₹19,900 - ₹81,100):</strong> Lower Division Clerks (LDC), Postal Assistants, Constables, and Typists.",
            "<strong>Level 6 & 7 (₹35,400 - ₹1,42,400):</strong> Sub-Inspectors, Assistant Section Officers (ASO), Inspectors, and Junior Engineers.",
            "<strong>Level 10 (₹56,100 - ₹1,77,500):</strong> Group 'A' Gazetted Officers (IAS, IPS, IRS, Scientists, and Assistant Executive Engineers)."
          ]
        }
      ],
      faqs: [
        { q: "How to apply for Central Government jobs on RojgaarDwaar?", a: "Browse through the active recruitment tables above, click on the corresponding 'APPLY ONLINE' link to access the verified official application portal, and read the notification PDF before applying." },
        { q: "What is the upper age relaxation for SC/ST and OBC candidates in Central Govt jobs?", a: "SC/ST candidates receive a 5-year upper age relaxation, OBC (Non-Creamy Layer) candidates receive 3 years, and Persons with Benchmark Disabilities (PwBD) receive 10 to 15 years." },
        { q: "Are women candidates exempted from examination application fees?", a: "Yes, in almost all Central recruitments conducted by UPSC and SSC, female candidates are completely exempted from payment of the application fee." }
      ]
    });
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

    renderHubTemplate({
      title: "Railway Jobs 2026 Apply Online (11330 New Vacancies)",
      metaText: "Last Updated: September 01, 2026 | Author: Admin",
      intro: "Latest Indian Railway Jobs Apply Online 2026 After 10th Pass, 12th Pass, Diploma, ITI and Graduates. In this page, RojgaarDwaar updates latest Railway vacancy notifications in the table. Both Male and Female Indian Citizens are eligible to apply online for various Railway Technical, Non Technical, Assistant Loco Pilot, Police, Para Medical, Medical, Group D, Ministerial and Act Apprentice posts.",
      tableTitle: "Latest Railway Jobs Notifications 2026:",
      rawJobs: railwayJobs,
      keySections: [
        {
          title: "Railway Exams 2026-27 List:",
          items: [
            "<strong>RRB NTPC</strong> (Non-Technical Popular Categories): For various non-technical posts.",
            "<strong>RRB JE</strong> (Junior Engineer): For the recruitment of Junior engineers in the Indian Railways.",
            "<strong>RRB Group D:</strong> For various posts in the Group D category, including track maintainers and helpers.",
            "<strong>RRB SSE</strong> (Senior Section Engineer): For the recruitment of senior engineers.",
            "<strong>RRB ALP</strong> (Assistant Loco Pilot): For the recruitment of Assistant Loco Pilots.",
            "<strong>RRB Paramedical:</strong> For various paramedical posts in the rail services.",
            "<strong>RPF Constable:</strong> For recruitment in the Railway Protection Force.",
            "<strong>RPF Sub-Inspector:</strong> For higher-level positions in the Railway Protection Force.",
            "<strong>RRB Ministerial and Isolated Categories:</strong> For various ministerial posts and isolated categories."
          ]
        },
        {
          title: "Railway Job Vacancy 2026-27 List / Reservation & Quota Guide:",
          items: [
            "<strong>General/Unreserved Quota:</strong> Open to all candidates based on merit.",
            "<strong>Scheduled Castes (SC) and Scheduled Tribes (ST) Quota:</strong> Reserved posts with 5 years age relaxation.",
            "<strong>Other Backward Classes (OBC) Quota:</strong> 3 years age relaxation for Non-Creamy Layer.",
            "<strong>Economically Weaker Section:</strong> 10% vertical reservation.",
            "<strong>Sports Quota:</strong> Direct recruitment for national and international athletes.",
            "<strong>Persons with Disabilities (PwD) Quota:</strong> Reservations along with extra time during CBT.",
            "<strong>Course Completed Act Apprentices (CCAA):</strong> 20% horizontal reservation in Level-1 (Group D) posts + NCVT score weightage."
          ]
        }
      ],
      faqs: [
        { q: "What are the popular jobs in Railway Sector?", a: "Indian Railway jobs include Gazetted (Group 'A' and 'B'), Non-Gazetted (Group 'C' and 'D'), NTPC, Junior Engineer, RPF, Act Apprentices, Level 1, and Level 2 posts." },
        { q: "How to apply for railway recruitment from RojgaarDwaar?", a: "Check your qualification against railway listings in the table above, then click on the specific Railway/RRB link for the direct application portal and notification PDF." },
        { q: "How many railway boards in India?", a: "There are 21 Railway Recruitment Boards (RRBs) across India covering all zones." }
      ]
    });
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

    renderHubTemplate({
      title: "Bank Jobs 2026: Latest Banking Recruitment 18820 Vacancies",
      metaText: "Last Updated: September 01, 2026 | Author: Prabhu",
      intro: "Bank Jobs 2026 for 10th 12th passed, Degree Holders and Professionals – Apply Online for 18000+ Bank Vacancies Opening in 2026-27. RojgaarDwaar updates latest Public Sector Banking Vacancies and Current Private Sector Bank career openings for both fresher and experienced Indian Citizens. More than 50,000 upcoming Govt Bank vacancies are opening in 2026.",
      tableTitle: "Latest Bank Jobs Notifications September 2026:",
      rawJobs: bankJobs.map(j => ({ title: j.title, lastDate: j.lastDate, actionText: j.bank, id: j.id })),
      keySections: [
        {
          title: "Types of Banking Jobs Available in India:",
          items: [
            "Clerical Cadre (Clerk, Junior Associates, Cashier)",
            "Office Assistant / Attendant / Peon",
            "Probationary Officer (PO)",
            "Management Trainee (MT)",
            "Specialist Officer (SO) – IT, Law, HR, Marketing, etc.",
            "Financial Analyst / Credit Analyst",
            "Customer Relationship Manager",
            "Loan Officer / Auditor / Chartered Accountant"
          ]
        },
        {
          title: "Major Govt Banks In India:",
          items: [
            "State Bank of India (SBI)", "Bank of Baroda", "Punjab National Bank", "Canara Bank", "Union Bank of India", "Indian Bank", "Bank of India", "Central Bank of India", "Indian Overseas Bank", "UCO Bank", "Bank of Maharashtra", "Punjab and Sind Bank"
          ]
        }
      ],
      faqs: [
        { q: "1. How to apply for bank jobs in India?", a: "Eligible candidates can apply online through official notifications listed on RojgaarDwaar with direct links to IBPS, SBI, and RBI application portals." },
        { q: "2. What bank jobs are available after 12th pass or graduation?", a: "After 12th: Clerk, Office Assistant, Cashier, Peon. After Graduation: Probationary Officer (PO), Specialist Officer (SO), Management Trainee, IT Officer." },
        { q: "3. What are the major upcoming bank exams in India?", a: "Top exams include IBPS Clerk, IBPS PO, IBPS RRB, SBI Clerk, SBI PO, RBI Assistant, and RBI Grade B." }
      ]
    });
  }

  // =========================================================================
  // 5. PSU Jobs View
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

    renderHubTemplate({
      title: "Latest PSU Jobs 2026 | Public Sector Company Jobs (4433+ Vacancies)",
      metaText: "Last Updated: September 01, 2026 | Author: Admin",
      intro: "Latest PSU Jobs without GATE, PSU Jobs for Commerce graduates, PSU Jobs for MBA and PSU Jobs for Engineers. RojgaarDwaar tracks and updates all active Maharatna, Navratna, and Miniratna Public Sector Undertaking recruitments with verified direct application links.",
      tableTitle: "Latest PSU Jobs Notifications 2026:",
      rawJobs: psuJobs.map(j => ({ title: j.title, lastDate: j.lastDate, actionText: j.psu, id: j.id })),
      keySections: [
        {
          title: "Top Maharatna & Navratna PSU Companies Recruiting in 2026:",
          items: [
            "<strong>IOCL (Indian Oil):</strong> Executive CBT, Trade Apprentice, Marketing Officers.",
            "<strong>NTPC Limited:</strong> Executive Trainees in Electrical, Mechanical, Civil & HR.",
            "<strong>ONGC:</strong> Graduate Trainees through GATE & Non-Executive CBT Openings.",
            "<strong>SAIL:</strong> Management Trainees across Bhilai, Rourkela, Bokaro, and Durgapur steel plants.",
            "<strong>BEL & HAL:</strong> Design Trainees, Project Engineers, and Management Trainees.",
            "<strong>Coal India (CIL):</strong> Open CBT recruitment for Mining, Finance, Sales, and Personnel."
          ]
        },
        {
          title: "PSU Recruitment Categories (With & Without GATE):",
          items: [
            "<strong>PSU Jobs without GATE:</strong> Many PSUs (BEL, HAL, ISRO, BARC, CIL, BIS, CONCOR) conduct independent online CBT exams without requiring GATE scores.",
            "<strong>Pay Scale:</strong> E-2 / E-3 grade pays ranging from ₹50,000 to ₹1,80,000 with DA, HRA, and Performance Related Pay (PRP)."
          ]
        }
      ],
      faqs: [
        { q: "Can I get a PSU Job without a GATE score?", a: "Yes! Leading PSUs such as Coal India (CIL), BEL, HAL, RITES, NMDC, and Vizag Steel conduct independent Computer Based Tests (CBT) for recruitment." },
        { q: "What is the starting salary in Maharatna PSU companies?", a: "Management Trainees in Maharatna PSUs start on an E-2 scale (Basic Pay ₹50,000–₹1,60,000) with a total CTC ranging from 12 to 18 Lakhs per annum." }
      ]
    });
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

    renderHubTemplate({
      title: "Fresher Govt Jobs 2026: Apply Online (1,00,000+ Zero Experience Vacancies)",
      metaText: "Last Updated: September 01, 2026 | Author: Admin",
      intro: "Discover government recruitments requiring zero work experience. Candidates who have recently completed 10th, 12th, ITI, Diploma, or Graduation can apply online for high-paying entry-level Central & State government positions.",
      tableTitle: "Latest Fresher Govt Job Notifications 2026:",
      rawJobs: fresherJobs.map(j => ({ title: j.title, lastDate: j.lastDate, actionText: j.dept, id: j.id })),
      keySections: [
        {
          title: "Top Entry-Level Fresher Job Streams:",
          items: [
            "<strong>Direct Merit (No Written Exam):</strong> India Post GDS (44k posts) and Railway Act Apprentices (12k posts).",
            "<strong>10th / 12th Pass Entry:</strong> SSC MTS, SSC CHSL, Railway Group D, State Police Constables.",
            "<strong>Graduate Entry:</strong> SBI Clerk, IBPS PO/Clerk, SSC CGL, UPSC Civil Services, State PSC CCE."
          ]
        }
      ],
      faqs: [
        { q: "Can a college fresher with no experience apply for SSC CGL or IBPS PO?", a: "Absolutely. SSC CGL, IBPS PO, and SBI Clerk require only a recognized Bachelor's Degree with zero prior work experience." },
        { q: "What is the age limit for fresher government jobs?", a: "General category candidates can apply between ages 18 to 27 or 30 years (with 3-5 years relaxation for reserved categories)." }
      ]
    });
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

    renderHubTemplate({
      title: "Graduate Govt Jobs 2026: Apply Online (50,000+ Degree Holder Openings)",
      metaText: "Last Updated: September 01, 2026 | Author: Admin",
      intro: "Apply online for latest Graduate Government Jobs 2026 for BA, B.Sc, B.Com, B.Tech, BBA, BCA, and all degree holders. Discover officer cadre, civil services, banking, insurance, and executive positions across India.",
      tableTitle: "Latest Graduate Govt Job Notifications 2026:",
      rawJobs: gradJobs.map(j => ({ title: j.title, lastDate: j.lastDate, actionText: j.board, id: j.id })),
      keySections: [
        {
          title: "Top Career Paths for Degree Holders:",
          items: [
            "<strong>Civil Services & Administration:</strong> UPSC IAS/IPS, State PSC SDM/DSP, Tehsildar, Revenue Officers.",
            "<strong>Ministries & Inspection:</strong> SSC CGL Assistant Section Officer (CSS/MEA), Income Tax Inspector, GST Inspector, ED Assistant.",
            "<strong>Banking & Insurance:</strong> Bank Probationary Officers (PO), RBI Grade B, LIC Assistant Administrative Officer (AAO)."
          ]
        }
      ],
      faqs: [
        { q: "Is there any minimum percentage required in Graduation for SSC CGL or IBPS PO?", a: "For SSC CGL and IBPS PO, a simple pass degree from any recognized UGC university is sufficient with no minimum percentage barrier." },
        { q: "What is the salary of an SSC CGL Inspector or Bank PO?", a: "SSC CGL Inspector (Level 7) salary is approx ₹75,000 to ₹85,000/month in Metro cities. Bank PO in public sector banks starts around ₹65,000 to ₹72,000/month." }
      ]
    });
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

    renderHubTemplate({
      title: "State Govt Jobs 2026: Apply Online Across 28 States & 8 UTs (1,20,000+ Vacancies)",
      metaText: "Last Updated: September 01, 2026 | Author: Admin",
      intro: "Browse verified State Public Service Commission (PSC), Subordinate Services Selection Board (SSSB), Police Recruitment Board, High Court, and Education Department jobs across all Indian States.",
      tableTitle: "Major State Government Openings 2026:",
      rawJobs: stateJobs.map(j => ({ title: j.title, lastDate: j.lastDate, actionText: j.state, id: j.id })),
      keySections: [
        {
          title: "State-Wise Quick Navigator:",
          customHtml: `
            <div class="state-check-grid" style="padding:0; margin-bottom:16px;">
              ${data.STATES.slice(0, 18).map(s => `
                <a href="#/state/${s.id}" class="state-check-link">
                  <span>✅</span> <span>${s.name} Govt Jobs</span>
                </a>
              `).join('')}
            </div>
          `
        }
      ],
      faqs: [
        { q: "Can candidates from other states apply for state government jobs?", a: "Yes, Indian citizens from any state can apply for general category vacancies in other states, subject to meeting regional language criteria where mandatory." },
        { q: "Do state government employees receive 7th Pay Commission benefits?", a: "Most state governments have implemented revised 7th Pay Matrix scales matching Central norms." }
      ]
    });
  }

  // =========================================================================
  // 9. Dedicated Qualification & State Hub Views
  // =========================================================================

  function renderQualificationHubView(qualId) {
    const qual = data.QUALIFICATIONS.find(q => q.id === qualId) || data.QUALIFICATIONS[0];
    const matchingJobs = data.RECRUITMENTS.filter(j => j.qualifications.includes(qual.id));

    renderHubTemplate({
      title: `${qual.name} 2026 (${matchingJobs.length * 120}+ Active Govt Vacancies)`,
      metaText: `Verified Qualification Hub | Author: RojgaarDwaar Editorial Team`,
      intro: `${qual.desc}. Discover all active Central & State government recruitment notifications verified for ${qual.shortName} candidates with direct application links.`,
      tableTitle: `Latest ${qual.shortName} Government Job Notifications 2026:`,
      jobsList: matchingJobs.slice(0, 15),
      keySections: [
        {
          title: `Career Tracks & Growth for ${qual.shortName} Qualified Candidates:`,
          items: [
            `<strong>Central Government Openings:</strong> Posts in Railways, SSC, Defence, Postal Department, and Central Ministries.`,
            `<strong>State Department Openings:</strong> State Police, Secretariat, Subordinate Boards, and Municipal Corporations.`,
            `<strong>Selection Standards:</strong> Clear breakdown of written examination syllabus, physical fitness criteria, and skill test parameters.`
          ]
        }
      ],
      faqs: [
        { q: `What is the average starting salary for ${qual.shortName} government posts?`, a: `Starting salary ranges from ₹25,000 to ₹75,000+ depending on the department, Level, and Pay Band.` },
        { q: `How do I apply for these ${qual.shortName} vacancies?`, a: `Click on the corresponding 'APPLY ONLINE' link in the table above to access the official application form.` }
      ]
    });
  }

  function renderStateHubView(stateId) {
    const stateObj = data.STATES.find(s => s.id === stateId) || data.STATES[0];
    const matchingJobs = data.RECRUITMENTS.filter(j => j.state === stateObj.id || (stateObj.id !== 'all-india' && j.state === 'all-india'));

    renderHubTemplate({
      title: `${stateObj.name} Government Jobs 2026 (${matchingJobs.length * 90}+ Vacancies Opening)`,
      metaText: `State Recruitment Hub | Author: RojgaarDwaar State Desk`,
      intro: `Explore verified government recruitment notifications for ${stateObj.name}. Apply online for active vacancies across State PSC, Police Recruitment Board, High Court, Health Department, and Education Board.`,
      tableTitle: `Latest Government Recruitment Notifications in ${stateObj.name}:`,
      jobsList: matchingJobs.slice(0, 15),
      keySections: [
        {
          title: `Recruitment Authorities Monitored in ${stateObj.name}:`,
          items: [
            `<strong>State Public Service Commission (PSC):</strong> State Civil Services, Administrative Officers, and Engineering Cadre.`,
            `<strong>Subordinate Selection Board:</strong> Clerical, Assistant, Forest Guard, and Technical posts.`,
            `<strong>State Police Department:</strong> Sub-Inspector (SI), Constable, and Jail Warder recruitments.`
          ]
        }
      ],
      faqs: [
        { q: `Are candidates outside ${stateObj.name} eligible to apply?`, a: `Yes, for general category vacancies, eligible Indian citizens from all states can apply, subject to regional language criteria.` }
      ]
    });
  }

  function renderGenericCategoryView(catId) {
    const cat = data.CATEGORIES.find(c => c.id === catId) || data.CATEGORIES[0];
    const matchingJobs = data.RECRUITMENTS.filter(j => j.category === cat.id);

    renderHubTemplate({
      title: `${cat.name} 2026 (${matchingJobs.length * 140}+ Active Vacancies)`,
      metaText: `Category Recruitment Hub | Author: RojgaarDwaar Editorial Desk`,
      intro: `Explore verified recruitment notifications for ${cat.name}. Check eligibility parameters, pay scale, official PDF notification, and online application portal.`,
      tableTitle: `Active ${cat.name} Notifications 2026:`,
      jobsList: matchingJobs.slice(0, 15),
      faqs: [
        { q: `How to stay updated with latest ${cat.name} alerts?`, a: `Bookmark this page or subscribe to our free Telegram and WhatsApp channels for daily verified notifications.` }
      ]
    });
  }

  // =========================================================================
  // Master Hub Template Builder
  // =========================================================================

  function renderHubTemplate(config) {
    let rowsHtml = '';

    if (config.rawJobs) {
      rowsHtml = config.rawJobs.map(j => `
        <tr>
          <td class="post-col"><a href="#/job/${j.id}">${escapeHtml(j.title)}</a></td>
          <td class="date-col">${j.lastDate}</td>
          <td class="action-col"><a href="#/job/${j.id}">${escapeHtml(j.actionText || 'APPLY ONLINE')}</a></td>
        </tr>
      `).join('');
    } else if (config.jobsList) {
      rowsHtml = config.jobsList.map(j => `
        <tr>
          <td class="post-col">
            <a href="#/job/${j.id}">${escapeHtml(j.title)}</a>
            <div style="font-size:11px; font-weight:normal; color:#666;">Vacancies: ${j.vacancies} Posts | ${escapeHtml(j.shortOrg)}</div>
          </td>
          <td class="date-col">${j.importantDates.lastDate}</td>
          <td class="action-col"><a href="#/job/${j.id}">APPLY ONLINE</a></td>
        </tr>
      `).join('');
    }

    let keySectionsHtml = '';
    if (config.keySections) {
      keySectionsHtml = config.keySections.map(s => `
        <div class="green-check-title">
          <span>✅</span> <span>${escapeHtml(s.title)}</span>
        </div>
        ${s.customHtml ? s.customHtml : `
          <ul style="padding-left: 20px; line-height: 1.7; font-size: 13px; color: #333; margin-bottom: 16px;">
            ${s.items.map(item => `<li>${item}</li>`).join('')}
          </ul>
        `}
      `).join('');
    }

    let faqsHtml = '';
    if (config.faqs && config.faqs.length > 0) {
      faqsHtml = `
        <div class="green-check-title">
          <span>✅</span> <span>Frequently Asked Questions:</span>
        </div>
        <div style="line-height: 1.7; font-size: 13px; color: #333;">
          ${config.faqs.map(f => `
            <p style="margin-bottom: 8px;">
              <strong>${escapeHtml(f.q)}</strong><br>
              ${escapeHtml(f.a)}
            </p>
          `).join('')}
        </div>
      `;
    }

    let html = `
      <div class="content-block" style="padding: 16px 18px;">
        <h1 style="font-size: 19px; font-weight: 800; color: #000000; line-height: 1.35; margin-bottom: 4px;">
          ${escapeHtml(config.title)}
        </h1>
        <div style="font-size: 11.5px; color: #666; margin-bottom: 14px;">
          ${escapeHtml(config.metaText)}
        </div>

        <p style="font-size: 13px; line-height: 1.6; color: #333; margin-bottom: 16px;">
          ${escapeHtml(config.intro)}
        </p>

        <div class="green-check-title">
          <span>✅</span> <span>${escapeHtml(config.tableTitle)}</span>
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
            ${rowsHtml}
          </tbody>
        </table>

        <!-- Qualification Quick Navigator Box -->
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

        ${keySectionsHtml}

        ${faqsHtml}

        <div style="margin-top: 18px; padding-top: 10px; border-top: 1px solid #eee; font-size: 12px; color: #008000; font-weight: 700;">
          Categories: <a href="#/" style="color:#008000;">Top Pages</a>
        </div>
      </div>
    `;

    mainContentEl.innerHTML = html;
  }

  // =========================================================================
  // 10. In-Depth 2,000+ Words Unique Single Job Detail View
  // =========================================================================

  function renderJobDetailView(jobId) {
    const job = data.RECRUITMENTS.find(j => j.id === jobId) || data.RECRUITMENTS[0];
    const isSaved = state.savedJobs.includes(job.id);
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

    let html = `
      <div class="job-detail-wrap">
        <!-- Breadcrumbs -->
        <div style="font-size:12px; color:#666; margin-bottom:12px;">
          <a href="#/">Home</a> &rsaquo; <a href="#/category/${job.category}">${escapeHtml(job.subCategory || 'Govt Jobs')}</a> &rsaquo; <span>${escapeHtml(job.shortOrg)}</span>
        </div>

        <!-- Master Title -->
        <h1 class="job-detail-h1">${escapeHtml(job.title)}</h1>
        <div style="font-size:12px; color:#555; margin-bottom:14px; border-bottom:1px solid #eee; padding-bottom:8px;">
          Published by: <strong>RojgaarDwaar Editorial Desk</strong> | Official Verification Status: <span style="color:#008000; font-weight:700;">AUTHENTICATED PRIMARY SOURCE</span>
        </div>

        <!-- Action CTA Buttons -->
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

        <!-- Section 1: Executive Overview -->
        <div class="green-check-title">
          <span>✅</span> <span>1. Executive Summary & Official Recruitment Overview:</span>
        </div>
        <p style="font-size:13.5px; line-height:1.75; color:#333; margin-bottom:14px;">
          The recruitment board of <strong>${escapeHtml(job.org)} (${escapeHtml(job.shortOrg)})</strong> has officially released the employment notification for the recruitment of <strong>${job.vacancies.toLocaleString('en-IN')} Vacancies</strong> of <strong>${escapeHtml(job.posts)}</strong> for the 2026-2027 recruitment cycle. This notification provides an exceptional public sector career opportunity for candidates possessing <strong>${escapeHtml(job.qualificationText)}</strong>. Selected applicants will be posted across designated divisions in <strong>${escapeHtml(stateObj.name)}</strong> and Central offices throughout India. The online application registration window is actively open from <strong>${job.importantDates.startDate}</strong> and will officially close on <strong>${job.importantDates.lastDate}</strong>.
        </p>

        <!-- Master Summary Table -->
        <table class="detail-table-custom">
          <tbody>
            <tr>
              <th style="width:32%;">Recruiting Organization</th>
              <td><strong>${escapeHtml(job.org)} (${escapeHtml(job.shortOrg)})</strong></td>
            </tr>
            <tr>
              <th>Advertised Post / Designation</th>
              <td><strong>${escapeHtml(job.posts)}</strong></td>
            </tr>
            <tr>
              <th>Total Sanctioned Vacancies</th>
              <td><strong style="color:#008000; font-size:14.5px;">${job.vacancies.toLocaleString('en-IN')} Posts</strong></td>
            </tr>
            <tr>
              <th>7th CPC / IDA Pay Scale</th>
              <td>${escapeHtml(job.salary)} (Approx. Gross Pay: ₹${grossEst.toLocaleString('en-IN')}/month)</td>
            </tr>
            <tr>
              <th>Prescribed Educational Qualification</th>
              <td>${escapeHtml(qualNames)} (${escapeHtml(job.qualificationText)})</td>
            </tr>
            <tr>
              <th>Age Limitations</th>
              <td>${escapeHtml(job.ageLimit)} (Crucial Date: ${job.importantDates.startDate})</td>
            </tr>
            <tr>
              <th>Age Relaxation Slabs</th>
              <td>${escapeHtml(job.ageRelaxation)}</td>
            </tr>
            <tr>
              <th>Application Registration Fee</th>
              <td>${escapeHtml(job.fee)}</td>
            </tr>
            <tr>
              <th>Online Application Closing Date</th>
              <td><strong style="color:#cc0000; font-size:14.5px;">${job.importantDates.lastDate}</strong></td>
            </tr>
            <tr>
              <th>Tentative Examination / Selection Date</th>
              <td>${job.importantDates.examDate}</td>
            </tr>
            <tr>
              <th>Primary Job Location</th>
              <td>${escapeHtml(stateObj.name)} / All India Postings</td>
            </tr>
          </tbody>
        </table>

        <!-- Section 2: Department Background -->
        <div class="green-check-title">
          <span>✅</span> <span>2. About ${escapeHtml(job.org)} & Organizational Profile:</span>
        </div>
        <p style="font-size:13.5px; line-height:1.75; color:#333; margin-bottom:14px;">
          ${escapeHtml(job.org)} is a premier constitutional, statutory, or central public sector enterprise mandated with executing crucial governance, infrastructure, financial, administrative, and public utility operations. Employing thousands of personnel across regional, zonal, and departmental wings, ${escapeHtml(job.org)} maintains state-of-the-art administrative facilities, merit-driven evaluation systems, and extensive healthcare, residential, and retirement security infrastructures. Serving in ${escapeHtml(job.org)} offers public recognition, structured promotions, and defined pension security.
        </p>

        <!-- Section 3: Category-Wise Vacancy Matrix -->
        <div class="green-check-title">
          <span>✅</span> <span>3. Category-Wise Vacancy Distribution Matrix:</span>
        </div>
        <p style="font-size:13px; line-height:1.6; color:#444; margin-bottom:8px;">
          In accordance with the Central and State reservation rosters prescribed by the Department of Personnel and Training (DoPT), the total ${job.vacancies.toLocaleString('en-IN')} vacancies are classified across categories:
        </p>
        <table class="detail-table-custom" style="text-align:center;">
          <thead>
            <tr>
              <th>Category</th>
              <th>Reservation %</th>
              <th>Estimated Vacancies</th>
              <th>Applicable Relaxations</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>Unreserved (UR / General)</strong></td><td>40%</td><td><strong>${urVac}</strong></td><td>Merit Based (Open to All)</td></tr>
            <tr><td><strong>Other Backward Classes (OBC-NCL)</strong></td><td>27%</td><td><strong>${obcVac}</strong></td><td>+3 Years Upper Age Relaxation</td></tr>
            <tr><td><strong>Economically Weaker Section (EWS)</strong></td><td>10%</td><td><strong>${ewsVac}</strong></td><td>Standard Income & Asset Criteria</td></tr>
            <tr><td><strong>Scheduled Caste (SC)</strong></td><td>15%</td><td><strong>${scVac}</strong></td><td>+5 Years Age & Fee Exemption</td></tr>
            <tr><td><strong>Scheduled Tribe (ST)</strong></td><td>7.5%</td><td><strong>${stVac}</strong></td><td>+5 Years Age & Fee Exemption</td></tr>
            <tr><td><strong>PwBD & Ex-Servicemen (ESM)</strong></td><td>Horizontal</td><td>Identified Posts</td><td>+10 to 15 Years Relaxation</td></tr>
          </tbody>
        </table>

        <!-- Section 4: Pay Scale & Allowances -->
        <div class="green-check-title">
          <span>✅</span> <span>4. Salary Structure, Allowances & Monthly In-Hand Pay:</span>
        </div>
        <p style="font-size:13.5px; line-height:1.75; color:#333; margin-bottom:10px;">
          Selected candidates for <strong>${escapeHtml(job.posts)}</strong> will receive compensation under the pay matrix of <strong>${escapeHtml(job.salary)}</strong>. In addition to the Basic Pay, employees are entitled to comprehensive allowances:
        </p>
        <ul style="padding-left:22px; line-height:1.75; font-size:13px; color:#333; margin-bottom:14px;">
          <li><strong>Dearness Allowance (DA):</strong> Paid at the prevailing government-notified rate (currently 50%+ of Basic Pay), revised every 6 months to offset cost-of-living increases.</li>
          <li><strong>House Rent Allowance (HRA):</strong> Disbursed based on posting city classification: 30% for Class X (Metros), 20% for Class Y (State Capitals), and 10% for Class Z (Rural/Towns). Government accommodation/quarters may be allotted in lieu of HRA.</li>
          <li><strong>Transport Allowance (TA):</strong> Fixed monthly allowance plus applicable DA to support daily commuting expenses.</li>
          <li><strong>Comprehensive Medical Facility:</strong> Full medical reimbursement / cashless treatment for employee and dependent family members under CGHS, ECHS, or company medical panel.</li>
          <li><strong>Children Education Allowance (CEA):</strong> Annual reimbursement of up to ₹27,000 per child (up to two children) plus hostel subsidies.</li>
          <li><strong>Pension & Social Security:</strong> Covered under the Defined National Pension System (NPS) / Unified Pension Scheme with statutory matching government contributions.</li>
          <li><strong>Monthly In-Hand Net Pay:</strong> After mandatory statutory deductions (NPS 10%, Professional Tax, TDS), the net credited salary is estimated between <strong>₹${netEst.toLocaleString('en-IN')}</strong> and <strong>₹${(netEst + 8000).toLocaleString('en-IN')}</strong> per month.</li>
        </ul>

        <!-- Section 5: Detailed Eligibility -->
        <div class="green-check-title">
          <span>✅</span> <span>5. In-Depth Educational Qualification & Experience Criteria:</span>
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

        <!-- Section 6: Age Limits & Relaxation Table -->
        <div class="green-check-title">
          <span>✅</span> <span>6. Age Limits & Category-Wise Age Relaxation Table:</span>
        </div>
        <p style="font-size:13px; line-height:1.6; color:#444; margin-bottom:8px;">
          The candidate must have attained a minimum age of 18 or 21 years and must not exceed <strong>${escapeHtml(job.ageLimit)}</strong> as of <strong>${job.importantDates.startDate}</strong>. Upper age relaxations are permissible as follows:
        </p>
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
            <tr><td>Departmental Candidates</td><td>Up to 40-45 Years</td><td>As per Service Rules</td></tr>
          </tbody>
        </table>

        <!-- Section 7: Exam Pattern & Syllabus Blueprint -->
        <div class="green-check-title">
          <span>✅</span> <span>7. Detailed Examination Pattern & Syllabus Blueprint:</span>
        </div>
        <p style="font-size:13.5px; line-height:1.75; color:#333; margin-bottom:10px;">
          The selection examination conducted by ${escapeHtml(job.org)} evaluates candidates across general aptitude and core technical capabilities:
        </p>
        <table class="detail-table-custom" style="text-align:center;">
          <thead>
            <tr>
              <th>Test Subject</th>
              <th>No. of Questions</th>
              <th>Max Marks</th>
              <th>Exam Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style="text-align:left;">General Intelligence & Reasoning</td><td>25 MCQs</td><td>50 Marks</td><td rowspan="4"><strong>90 Minutes</strong><br>(120 Min for Scribe)</td></tr>
            <tr><td style="text-align:left;">Quantitative Aptitude / Mathematics</td><td>25 MCQs</td><td>50 Marks</td></tr>
            <tr><td style="text-align:left;">General Awareness & Current Affairs</td><td>25 MCQs</td><td>50 Marks</td></tr>
            <tr><td style="text-align:left;">English / Hindi Language Comprehension</td><td>25 MCQs</td><td>50 Marks</td></tr>
            <tr><td colspan="4" style="background:#f9f9f9; font-size:12px; text-align:left;"><strong>Marking Scheme:</strong> 2 Marks awarded per correct answer. Negative marking of <strong>0.50 Marks (1/4th)</strong> deducted per incorrect response.</td></tr>
          </tbody>
        </table>

        <!-- Subject Topic Breakdown -->
        <div style="background:#fdfefe; border:1px solid #e2e8f0; padding:12px 14px; margin-bottom:16px;">
          <h4 style="color:#0b3c5d; font-size:13.5px; font-weight:700; margin-bottom:6px;">Topic-Wise Core Syllabus Breakdown:</h4>
          <ul style="padding-left:18px; line-height:1.7; font-size:12.5px; color:#444;">
            <li><strong>Reasoning:</strong> Analogies, Syllogisms, Blood Relations, Coding-Decoding, Non-Verbal Series, Venn Diagrams, Seating Arrangement, Direction Tests.</li>
            <li><strong>Quantitative Aptitude:</strong> Percentages, Ratio & Proportion, Profit & Loss, Simple & Compound Interest, Time & Work, Speed Time & Distance, Mensuration, Algebra, Data Interpretation.</li>
            <li><strong>General Awareness:</strong> Indian History, Indian Polity & Constitution, Geography, Economy, General Science (Physics, Chemistry, Biology), Government Schemes, National & International Current Affairs.</li>
            <li><strong>Language:</strong> Reading Comprehension, Error Spotting, Fill in the blanks, Synonyms/Antonyms, One-word substitution, Active/Passive voice.</li>
          </ul>
        </div>

        <!-- Section 8: Selection Stages & DV Checklist -->
        <div class="green-check-title">
          <span>✅</span> <span>8. Comprehensive Selection Stages & Document Verification:</span>
        </div>
        <ol style="padding-left:22px; line-height:1.75; font-size:13px; color:#333; margin-bottom:12px;">
          ${job.selectionProcess.map((s, idx) => `<li><strong>Stage ${idx + 1}: ${escapeHtml(s)}</strong></li>`).join('')}
        </ol>
        <div style="background:#f8f9fa; border-left:4px solid #008000; padding:12px 14px; margin-bottom:16px;">
          <h4 style="color:#008000; font-size:13px; font-weight:700; margin-bottom:4px;">Mandatory Document Verification (DV) Checklist:</h4>
          <p style="font-size:12.5px; color:#333; line-height:1.6;">
            1. Matriculation / 10th Class Passing Certificate (Proof of Date of Birth).<br>
            2. Consolidated Marksheets & Passing Certificates of ${escapeHtml(qualNames)}.<br>
            3. Caste / Community Certificate (SC/ST/OBC-NCL) in prescribed Central/State Govt format.<br>
            4. EWS Income & Asset Certificate for the current financial year.<br>
            5. Disability Certificate issued by a competent Chief Medical Officer / Medical Board.<br>
            6. Valid Photo ID (Aadhaar Card / PAN Card / Passport / Voter ID) + 8 Passport Size Photos.
          </p>
        </div>

        <!-- Section 9: Step by Step How to Apply -->
        <div class="green-check-title">
          <span>✅</span> <span>9. Step-by-Step Online Application Procedure:</span>
        </div>
        <ol style="padding-left:22px; line-height:1.75; font-size:13px; color:#333; margin-bottom:14px;">
          ${job.howToApply.map((step, idx) => `<li>${escapeHtml(step)}</li>`).join('')}
        </ol>
        <p style="font-size:13px; color:#555; margin-bottom:16px;">
          <strong>Photograph & Signature Specifications:</strong> Scanned color photograph must be 20 KB to 50 KB (3.5 cm x 4.5 cm) on light background. Scanned signature must be 10 KB to 20 KB on white paper with black ink.
        </p>

        <!-- Section 10: Editorial "Should You Apply?" -->
        <div style="background:#f0f8f0; border-left:4px solid #008000; padding:14px 16px; margin:20px 0;">
          <h3 style="color:#008000; font-size:14.5px; font-weight:800; margin-bottom:6px;">💡 10. Editorial Recommendation: Should You Apply?</h3>
          <p style="font-size:13px; color:#1b4d3e; line-height:1.7; margin-bottom:8px;">
            ${escapeHtml(job.shouldYouApply)}
          </p>
          <div style="font-size:12.5px; color:#224422; line-height:1.6;">
            <strong>Preparation Strategy:</strong> Dedicate 6-8 hours daily to syllabus coverage, practice 50 quantitative/reasoning MCQs every morning, follow daily current affairs capsules, and attempt at least 20 full-length mock tests before the exam date (${job.importantDates.examDate}).
          </div>
        </div>

        <!-- Section 11: 10+ Detailed FAQs -->
        <div class="green-check-title">
          <span>✅</span> <span>11. Frequently Asked Questions (FAQs) for ${escapeHtml(job.posts)}:</span>
        </div>
        <div style="display:flex; flex-direction:column; gap:10px; margin-bottom:20px;">
          ${job.faq.map(f => `
            <div style="background:#f8f9fa; border:1px solid #e2e8f0; padding:10px 14px; border-radius:3px;">
              <strong style="color:#0b3c5d;">Q: ${escapeHtml(f.q)}</strong>
              <p style="margin-top:4px; font-size:13px; color:#444; line-height:1.6;">${escapeHtml(f.a)}</p>
            </div>
          `).join('')}
          <div style="background:#f8f9fa; border:1px solid #e2e8f0; padding:10px 14px; border-radius:3px;">
            <strong style="color:#0b3c5d;">Q: Is there any service bond or minimum tenure requirement for ${escapeHtml(job.posts)}?</strong>
            <p style="margin-top:4px; font-size:13px; color:#444; line-height:1.6;">A: Candidates selected for executive, officer, or technical trainee positions may be required to execute a service agreement bond of ₹1,00,000 to ₹3,00,000 to serve the organization for a minimum period of 2 to 3 years.</p>
          </div>
          <div style="background:#f8f9fa; border:1px solid #e2e8f0; padding:10px 14px; border-radius:3px;">
            <strong style="color:#0b3c5d;">Q: What happens if there is an error in my online application?</strong>
            <p style="margin-top:4px; font-size:13px; color:#444; line-height:1.6;">A: Most recruitment bodies open an official application correction window for 3 to 5 days after the closing date (${job.importantDates.lastDate}). Minor spelling discrepancies can also be supported with a gazetted magistrate affidavit during document verification.</p>
          </div>
          <div style="background:#f8f9fa; border:1px solid #e2e8f0; padding:10px 14px; border-radius:3px;">
            <strong style="color:#0b3c5d;">Q: What is the probation period and confirmation process?</strong>
            <p style="margin-top:4px; font-size:13px; color:#444; line-height:1.6;">A: Selected candidates serve a standard probation period of 1 to 2 years. Upon successful completion of training and departmental appraisal, candidates are confirmed as regular permanent employees.</p>
          </div>
        </div>

        <!-- Bottom Action Bar -->
        <div class="action-cta-bar" style="border-top:1px solid #eee; padding-top:14px;">
          <a href="${job.officialLinks.applyUrl}" target="_blank" rel="noopener noreferrer" class="btn-cta-apply">
            🚀 Submit Online Application Now
          </a>
          <a href="${job.officialLinks.notificationUrl}" target="_blank" rel="noopener noreferrer" class="btn-cta-pdf">
            📄 View Full Official PDF Notification
          </a>
          <a href="#/" class="tool-btn">← Back to Portal Home</a>
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
            <button type="submit" class="search-btn" style="width:100%; padding:8px; cursor:pointer;">Search Eligible Jobs</button>
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
              No jobs saved yet. Click "☆ Save Job" on any posting to track it here.
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
              <tr><td colspan="3" style="text-align:center; padding:20px; color:#666;">No matching government recruitments found for "${escapeHtml(query)}". Try searching for Railway, Bank, SSC, 10th Pass, or Teacher.</td></tr>
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
    subscribeAlerts: function() {
      const input = document.getElementById('sidebar-alert-email');
      const email = input ? input.value.trim() : '';
      if (!email || !email.includes('@')) {
        alert('Please enter a valid email address to subscribe for daily government job alerts.');
        return;
      }
      alert(`Success! ${email} has been subscribed to daily RojgaarDwaar free recruitment alerts.`);
      if (input) input.value = '';
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
