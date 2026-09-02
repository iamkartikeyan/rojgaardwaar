/**
 * ROJGAARDWAAR (RojgaarDwaar.in) - Master Application Engine
 * Handles dynamic routing, live search, faceted filtering, eligibility tool,
 * bookmarking, state rendering, and zero-blank-page UI management.
 */

(function() {
  'use strict';

  const data = window.ROJGAAR_DATA;
  if (!data) {
    console.error('ROJGAAR_DATA failed to load.');
    return;
  }

  // Application State
  const state = {
    currentRoute: 'home',
    routeParam: null,
    activeTab: 'latest',
    searchQuery: '',
    currentPage: 1,
    pageSize: 20,
    savedJobs: JSON.parse(localStorage.getItem('rojgaar_saved_jobs') || '[]'),
    darkMode: localStorage.getItem('rojgaar_theme') === 'dark'
  };

  // DOM Elements cache
  let mainContentEl = null;
  let searchInputEl = null;
  let suggestionsBoxEl = null;
  let bookmarkCountEl = null;

  // Initialize Application
  function init() {
    mainContentEl = document.getElementById('main-content-area');
    searchInputEl = document.getElementById('main-search-input');
    suggestionsBoxEl = document.getElementById('search-suggestions');
    bookmarkCountEl = document.getElementById('bookmark-badge-count');

    // Setup Theme
    if (state.darkMode) {
      document.body.classList.add('dark-mode');
    }

    // Set Today's Date in Top Bar
    const dateEl = document.getElementById('current-date-display');
    if (dateEl) {
      const now = new Date();
      const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
      dateEl.textContent = now.toLocaleDateString('en-IN', options);
    }

    // Update Bookmark Badge
    updateBookmarkBadge();

    // Attach Event Listeners
    setupEventListeners();

    // Render Sidebars
    renderSidebarWidgets();

    // Handle Initial Route
    handleRouteChange();
    window.addEventListener('hashchange', handleRouteChange);
  }

  // =========================================================================
  // Router System
  // =========================================================================

  function handleRouteChange() {
    const hash = window.location.hash.slice(1) || '/';
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Close any active modals
    closeAllModals();

    if (hash === '/' || hash === '') {
      state.currentRoute = 'home';
      state.routeParam = null;
      renderHomeView();
    } else if (hash.startsWith('/job/')) {
      const jobId = hash.replace('/job/', '').trim();
      state.currentRoute = 'job-detail';
      state.routeParam = jobId;
      renderJobDetailView(jobId);
    } else if (hash.startsWith('/qualification/')) {
      const qualId = hash.replace('/qualification/', '').trim();
      state.currentRoute = 'qualification';
      state.routeParam = qualId;
      renderQualificationView(qualId);
    } else if (hash.startsWith('/state/')) {
      const stateId = hash.replace('/state/', '').trim();
      state.currentRoute = 'state';
      state.routeParam = stateId;
      renderStateView(stateId);
    } else if (hash.startsWith('/category/')) {
      const catId = hash.replace('/category/', '').trim();
      state.currentRoute = 'category';
      state.routeParam = catId;
      renderCategoryView(catId);
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
    } else {
      // Direct policy/info page routing fallback
      renderStaticInfoView(hash.replace('/', ''));
    }

    updateNavigationActiveState();
  }

  function updateNavigationActiveState() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentHash = window.location.hash || '#/';
    
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentHash || (currentHash.startsWith(href) && href !== '#/')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // =========================================================================
  // Views Rendering
  // =========================================================================

  // 1. Home View
  function renderHomeView() {
    state.currentPage = 1;
    let filteredJobs = getFilteredRecruitmentsByTab(state.activeTab);

    let html = `
      <div class="section-header-bar">
        <div class="section-title">
          <span>🏛️</span>
          <span>Government Job Openings 2026</span>
          <span class="badge badge-verified" style="margin-left: 8px;">100% Primary Source Verified</span>
        </div>
        <div class="section-controls">
          <button class="table-action-btn" onclick="window.ROJGAAR_APP.openEligibilityModal()">
            <span>⚡</span> Check My Eligibility
          </button>
        </div>
      </div>

      <div class="tab-nav-wrapper">
        <button class="tab-btn ${state.activeTab === 'latest' ? 'active' : ''}" onclick="window.ROJGAAR_APP.switchTab('latest')">
          <span>🔥 Latest Jobs</span>
          <span class="tab-counter">${data.RECRUITMENTS.length}</span>
        </button>
        <button class="tab-btn ${state.activeTab === 'closing-soon' ? 'active' : ''}" onclick="window.ROJGAAR_APP.switchTab('closing-soon')">
          <span>⏰ Closing Soon</span>
          <span class="tab-counter">${data.RECRUITMENTS.filter(j => j.urgent).length}</span>
        </button>
        <button class="tab-btn ${state.activeTab === 'no-exam' ? 'active' : ''}" onclick="window.ROJGAAR_APP.switchTab('no-exam')">
          <span>✨ No Exam Jobs</span>
          <span class="tab-counter">${data.RECRUITMENTS.filter(j => j.noExam).length}</span>
        </button>
        <button class="tab-btn ${state.activeTab === 'railway' ? 'active' : ''}" onclick="window.ROJGAAR_APP.switchTab('railway')">
          <span>🚆 Railway</span>
        </button>
        <button class="tab-btn ${state.activeTab === 'banking' ? 'active' : ''}" onclick="window.ROJGAAR_APP.switchTab('banking')">
          <span>🏦 Banking</span>
        </button>
        <button class="tab-btn ${state.activeTab === 'ssc' ? 'active' : ''}" onclick="window.ROJGAAR_APP.switchTab('ssc')">
          <span>📋 SSC</span>
        </button>
        <button class="tab-btn ${state.activeTab === 'defence' ? 'active' : ''}" onclick="window.ROJGAAR_APP.switchTab('defence')">
          <span>🎖️ Defence</span>
        </button>
      </div>

      <div class="job-table-container">
        ${renderRecruitmentTable(filteredJobs)}
        ${renderPagination(filteredJobs.length)}
      </div>
    `;

    mainContentEl.innerHTML = html;
  }

  // 2. Job Detail View
  function renderJobDetailView(jobId) {
    const job = data.RECRUITMENTS.find(j => j.id === jobId) || data.RECRUITMENTS[0];
    const isSaved = state.savedJobs.includes(job.id);
    const stateObj = data.STATES.find(s => s.id === job.state) || data.STATES[0];

    // Format Qualifications readable
    const qualLabels = job.qualifications.map(qId => {
      const q = data.QUALIFICATIONS.find(item => item.id === qId);
      return q ? `<a href="#/qualification/${q.id}" class="badge badge-qual" style="margin-right:4px;">${q.shortName}</a>` : '';
    }).join(' ');

    let html = `
      <div class="job-detail-card">
        <!-- Hero Header -->
        <div class="job-detail-hero">
          <div class="detail-breadcrumb">
            <a href="#/">Home</a> &rsaquo;
            <a href="#/category/${job.category}">${job.subCategory || 'Govt Jobs'}</a> &rsaquo;
            <span>${job.shortOrg}</span>
          </div>
          <h1 class="detail-main-title">${escapeHtml(job.title)}</h1>
          <div class="detail-badges-row">
            <span class="badge badge-verified">✔ Official Source Verified</span>
            <span class="badge ${job.urgent ? 'badge-urgent' : 'badge-qual'}">Last Date: ${job.importantDates.lastDate}</span>
            <span class="badge" style="background:#ffffff; color:#0f2b48;">Total Vacancies: ${job.vacancies.toLocaleString('en-IN')}</span>
            <span class="badge" style="background:rgba(255,255,255,0.2); color:#ffffff;">📍 ${stateObj.name}</span>
          </div>
        </div>

        <!-- Official Actions Bar -->
        <div class="official-actions-bar">
          <div class="official-btn-group">
            <a href="${job.officialLinks.applyUrl}" target="_blank" rel="noopener noreferrer" class="btn-apply-online">
              <span>🚀</span> Apply Online (Official)
            </a>
            <a href="${job.officialLinks.notificationUrl}" target="_blank" rel="noopener noreferrer" class="btn-download-notif">
              <span>📄</span> Official Notification PDF
            </a>
            <a href="${job.officialLinks.websiteUrl}" target="_blank" rel="noopener noreferrer" class="btn-official-website">
              <span>🌐</span> Official Website
            </a>
          </div>

          <div class="share-toolbar">
            <button class="table-action-btn" onclick="window.ROJGAAR_APP.toggleSaveJob('${job.id}')" title="Save Job">
              <span>${isSaved ? '★ Saved' : '☆ Save'}</span>
            </button>
            <button class="share-btn whatsapp" onclick="window.ROJGAAR_APP.shareToSocial('whatsapp', '${job.id}')" title="Share on WhatsApp" style="background-color:var(--whatsapp);">
              <span>📱</span>
            </button>
            <button class="share-btn telegram" onclick="window.ROJGAAR_APP.shareToSocial('telegram', '${job.id}')" title="Share on Telegram" style="background-color:var(--telegram);">
              <span>✈️</span>
            </button>
            <button class="share-btn x-twitter" onclick="window.ROJGAAR_APP.shareToSocial('x', '${job.id}')" title="Share on X" style="background-color:var(--x-social);">
              <span>𝕏</span>
            </button>
            <button class="share-btn" onclick="window.ROJGAAR_APP.copyJobLink('${job.id}')" title="Copy Link" style="background-color:var(--primary);">
              <span>🔗</span>
            </button>
          </div>
        </div>

        <!-- Key Summary Matrix -->
        <div class="key-summary-matrix">
          <table class="summary-table">
            <tbody>
              <tr>
                <td class="col-head">Organization</td>
                <td class="col-val">${escapeHtml(job.org)} (${escapeHtml(job.shortOrg)})</td>
                <td class="col-head">Recruitment Category</td>
                <td class="col-val">${escapeHtml(job.subCategory || job.category.toUpperCase())}</td>
              </tr>
              <tr>
                <td class="col-head">Posts / Roles</td>
                <td class="col-val">${escapeHtml(job.posts)}</td>
                <td class="col-head">Total Vacancies</td>
                <td class="col-val"><strong style="color:var(--accent-green-dark);">${job.vacancies.toLocaleString('en-IN')} Openings</strong></td>
              </tr>
              <tr>
                <td class="col-head">Salary / Pay Scale</td>
                <td class="col-val">${escapeHtml(job.salary)}</td>
                <td class="col-head">Application Fee</td>
                <td class="col-val">${escapeHtml(job.fee)}</td>
              </tr>
              <tr>
                <td class="col-head">Age Limit</td>
                <td class="col-val">${escapeHtml(job.ageLimit)}</td>
                <td class="col-head">Age Relaxation</td>
                <td class="col-val">${escapeHtml(job.ageRelaxation)}</td>
              </tr>
              <tr>
                <td class="col-head">Application Last Date</td>
                <td class="col-val"><strong style="color:var(--accent-red);">${job.importantDates.lastDate}</strong></td>
                <td class="col-head">Selection Process</td>
                <td class="col-val">${job.noExam ? 'Direct Merit / Interview (No Written Exam)' : 'Written CBT / Physical / DV'}</td>
              </tr>
              <tr>
                <td class="col-head">Qualifications</td>
                <td class="col-val" colspan="3">${qualLabels} <div style="margin-top:4px; font-weight:normal; color:var(--text-secondary);">${escapeHtml(job.qualificationText)}</div></td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Detailed Content Body -->
        <div class="detail-content-body">
          
          <!-- Should You Apply Advisory Box -->
          <div class="should-apply-box">
            <div class="should-apply-title">
              <span>💡</span> RojgaarDwaar Editorial Guidance: Should You Apply?
            </div>
            <p class="should-apply-text">${escapeHtml(job.shouldYouApply)}</p>
          </div>

          <!-- Important Dates Section -->
          <div class="detail-section-block">
            <h2 class="detail-section-title"><span>📅</span> Important Recruitment Dates</h2>
            <table class="recruitment-table" style="max-width: 650px;">
              <tbody>
                <tr>
                  <td><strong>Notification Released Date</strong></td>
                  <td>${job.importantDates.notificationDate}</td>
                </tr>
                <tr>
                  <td><strong>Online Application Start Date</strong></td>
                  <td>${job.importantDates.startDate}</td>
                </tr>
                <tr>
                  <td><strong>Online Application Deadline</strong></td>
                  <td><strong style="color:var(--accent-red);">${job.importantDates.lastDate}</strong></td>
                </tr>
                <tr>
                  <td><strong>Fee Payment Last Date</strong></td>
                  <td>${job.importantDates.feeLastDate}</td>
                </tr>
                <tr>
                  <td><strong>Examination / Merit Schedule</strong></td>
                  <td>${job.importantDates.examDate}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Selection Process -->
          <div class="detail-section-block">
            <h2 class="detail-section-title"><span>🎯</span> Selection Stages & Procedure</h2>
            <ul class="custom-bullet-list">
              ${job.selectionProcess.map(step => `<li>${escapeHtml(step)}</li>`).join('')}
            </ul>
          </div>

          <!-- Documents Required Checklist -->
          <div class="detail-section-block">
            <h2 class="detail-section-title"><span>📋</span> Documents Required Before Applying</h2>
            <ul class="custom-bullet-list">
              ${job.documentsRequired.map(doc => `<li>${escapeHtml(doc)}</li>`).join('')}
            </ul>
          </div>

          <!-- Step-by-Step How to Apply -->
          <div class="detail-section-block">
            <h2 class="detail-section-title"><span>📝</span> Step-by-Step How to Apply</h2>
            <ol style="padding-left: 20px; line-height: 1.8; font-size: 0.9rem; color: var(--text-primary);">
              ${job.howToApply.map(step => `<li>${escapeHtml(step)}</li>`).join('')}
            </ol>
          </div>

          <!-- Official Links Summary Table -->
          <div class="detail-section-block">
            <h2 class="detail-section-title"><span>🔗</span> Official Links & Portals</h2>
            <table class="recruitment-table">
              <thead>
                <tr>
                  <th>Resource</th>
                  <th>Official Link</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Official Online Application Portal</strong></td>
                  <td><a href="${job.officialLinks.applyUrl}" target="_blank" rel="noopener noreferrer" class="btn-apply-online" style="padding:4px 12px; font-size:0.8rem;">Click Here to Apply</a></td>
                </tr>
                <tr>
                  <td><strong>Download Official Detailed Notification PDF</strong></td>
                  <td><a href="${job.officialLinks.notificationUrl}" target="_blank" rel="noopener noreferrer" class="table-action-btn">Download PDF</a></td>
                </tr>
                <tr>
                  <td><strong>Official Department / Commission Website</strong></td>
                  <td><a href="${job.officialLinks.websiteUrl}" target="_blank" rel="noopener noreferrer" class="table-action-btn">Visit Website</a></td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Frequently Asked Questions -->
          <div class="detail-section-block">
            <h2 class="detail-section-title"><span>❓</span> Frequently Asked Questions (FAQs)</h2>
            <div class="faq-accordion-list">
              ${job.faq.map((item, idx) => `
                <div class="faq-item">
                  <button class="faq-question-btn" onclick="window.ROJGAAR_APP.toggleFaq(this)">
                    <span>Q${idx + 1}: ${escapeHtml(item.q)}</span>
                    <span>▼</span>
                  </button>
                  <div class="faq-answer-panel">
                    <p>${escapeHtml(item.a)}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Related Jobs -->
          <div class="detail-section-block">
            <h2 class="detail-section-title"><span>👀</span> Related Government Job Openings</h2>
            <div class="job-table-container">
              ${renderRecruitmentTable(data.RECRUITMENTS.filter(r => r.category === job.category && r.id !== job.id).slice(0, 5))}
            </div>
          </div>

        </div>
      </div>
    `;

    mainContentEl.innerHTML = html;
  }

  // 3. Qualification Hub View
  function renderQualificationView(qualId) {
    const qual = data.QUALIFICATIONS.find(q => q.id === qualId) || data.QUALIFICATIONS[0];
    const matchingJobs = data.RECRUITMENTS.filter(j => j.qualifications.includes(qual.id));

    let html = `
      <div class="section-header-bar">
        <div class="section-title">
          <span>${qual.icon}</span>
          <span>${escapeHtml(qual.name)} (${matchingJobs.length} Active Openings)</span>
        </div>
      </div>

      <div style="background:var(--bg-surface); padding:16px; border:1px solid var(--border-color); border-top:none; margin-bottom:16px;">
        <p style="font-size:0.92rem; color:var(--text-secondary);">${escapeHtml(qual.desc)}. Browse verified latest Central and State government recruitment opportunities for ${escapeHtml(qual.shortName)} candidates.</p>
      </div>

      <div class="job-table-container">
        ${renderRecruitmentTable(matchingJobs)}
        ${renderPagination(matchingJobs.length)}
      </div>
    `;

    mainContentEl.innerHTML = html;
  }

  // 4. State Hub View
  function renderStateView(stateId) {
    const stateObj = data.STATES.find(s => s.id === stateId) || data.STATES[0];
    const matchingJobs = data.RECRUITMENTS.filter(j => j.state === stateObj.id || (stateObj.id !== 'all-india' && j.state === 'all-india'));

    let html = `
      <div class="section-header-bar">
        <div class="section-title">
          <span>${stateObj.icon}</span>
          <span>${escapeHtml(stateObj.name)} Government Jobs 2026 (${matchingJobs.length} Posts)</span>
        </div>
      </div>

      <div style="background:var(--bg-surface); padding:16px; border:1px solid var(--border-color); border-top:none; margin-bottom:16px;">
        <p style="font-size:0.92rem; color:var(--text-secondary);">Explore all active government recruitment notifications for <strong>${escapeHtml(stateObj.name)}</strong>, including State PSC, Police, High Court, Electricity Board, Municipal Corporations, and Central departments located in this state.</p>
      </div>

      <div class="job-table-container">
        ${renderRecruitmentTable(matchingJobs)}
        ${renderPagination(matchingJobs.length)}
      </div>
    `;

    mainContentEl.innerHTML = html;
  }

  // 5. Category Hub View
  function renderCategoryView(catId) {
    const catObj = data.CATEGORIES.find(c => c.id === catId) || data.CATEGORIES[0];
    const matchingJobs = data.RECRUITMENTS.filter(j => j.category === catObj.id);

    let html = `
      <div class="section-header-bar">
        <div class="section-title">
          <span>${catObj.icon}</span>
          <span>${escapeHtml(catObj.name)} (${matchingJobs.length} Openings)</span>
        </div>
      </div>

      <div class="job-table-container">
        ${renderRecruitmentTable(matchingJobs)}
        ${renderPagination(matchingJobs.length)}
      </div>
    `;

    mainContentEl.innerHTML = html;
  }

  // 6. Admit Cards View
  function renderAdmitCardsView() {
    let html = `
      <div class="section-header-bar">
        <div class="section-title">
          <span>🎫</span>
          <span>Latest Admit Cards & Exam Hall Tickets 2026</span>
        </div>
      </div>

      <div class="job-table-container">
        <table class="recruitment-table">
          <thead>
            <tr>
              <th>Admit Card / Hall Ticket Title</th>
              <th>Organization</th>
              <th>Exam Date</th>
              <th>Status</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            ${data.ADMIT_CARDS.map(card => `
              <tr>
                <td>
                  <strong style="color:var(--primary);">${escapeHtml(card.title)}</strong>
                  <div style="font-size:0.75rem; color:var(--text-muted); margin-top:2px;">${escapeHtml(card.importantNotes)}</div>
                </td>
                <td><span class="badge badge-qual">${escapeHtml(card.shortOrg)}</span></td>
                <td><strong style="color:var(--accent-red);">${escapeHtml(card.examDate)}</strong></td>
                <td><span class="badge badge-verified">${escapeHtml(card.status)}</span></td>
                <td>
                  <a href="${card.downloadUrl}" target="_blank" rel="noopener noreferrer" class="table-action-btn">
                    <span>📥</span> Get Hall Ticket
                  </a>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;

    mainContentEl.innerHTML = html;
  }

  // 7. Results View
  function renderResultsView() {
    let html = `
      <div class="section-header-bar">
        <div class="section-title">
          <span>📊</span>
          <span>Government Exam Results, Scorecards & Cutoff Marks 2026</span>
        </div>
      </div>

      <div class="job-table-container">
        <table class="recruitment-table">
          <thead>
            <tr>
              <th>Result / Merit List Name</th>
              <th>Organization</th>
              <th>Declared Date</th>
              <th>Cutoff Highlights</th>
              <th>Check Result</th>
            </tr>
          </thead>
          <tbody>
            ${data.RESULTS.map(res => `
              <tr>
                <td>
                  <strong style="color:var(--primary);">${escapeHtml(res.title)}</strong>
                  <div style="font-size:0.75rem; color:var(--text-secondary); margin-top:2px;">${escapeHtml(res.description)}</div>
                </td>
                <td><span class="badge badge-qual">${escapeHtml(res.shortOrg)}</span></td>
                <td><strong style="color:var(--accent-green-dark);">${escapeHtml(res.declarationDate)}</strong></td>
                <td><small style="color:var(--text-primary); font-weight:600;">${escapeHtml(res.cutoffHighlights)}</small></td>
                <td>
                  <a href="${res.downloadUrl}" target="_blank" rel="noopener noreferrer" class="table-action-btn">
                    <span>📄</span> View Result
                  </a>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;

    mainContentEl.innerHTML = html;
  }

  // 8. Eligibility Tool Page View
  function renderEligibilityToolView() {
    let html = `
      <div class="section-header-bar">
        <div class="section-title">
          <span>⚡</span>
          <span>Smart Government Job Eligibility Finder</span>
        </div>
      </div>

      <div style="background:var(--bg-surface); padding:20px; border:1px solid var(--border-color); border-top:none; border-radius:0 0 var(--radius-md) var(--radius-md); margin-bottom:20px;">
        <p style="margin-bottom:16px; font-size:0.9rem; color:var(--text-secondary);">Select your educational background, age, and state to instantly discover all government job opportunities for which you are eligible.</p>
        
        <form id="eligibility-page-form" onsubmit="window.ROJGAAR_APP.handleEligibilitySubmit(event)">
          <div class="form-grid-2">
            <div class="form-group">
              <label class="form-label">Highest Educational Qualification</label>
              <select id="elig-qual-select" class="form-select" required>
                <option value="all">-- All Qualifications --</option>
                ${data.QUALIFICATIONS.map(q => `<option value="${q.id}">${q.name}</option>`).join('')}
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Your Age (Years)</label>
              <input type="number" id="elig-age-input" class="form-input" min="15" max="65" value="23" required>
            </div>
            <div class="form-group">
              <label class="form-label">Home State / Preferred Location</label>
              <select id="elig-state-select" class="form-select">
                <option value="all">-- All India & All States --</option>
                ${data.STATES.map(s => `<option value="${s.id}">${s.name}</option>`).join('')}
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Preferred Job Category</label>
              <select id="elig-cat-select" class="form-select">
                <option value="all">-- All Categories --</option>
                ${data.CATEGORIES.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
              </select>
            </div>
          </div>
          <button type="submit" class="modal-submit-btn" style="max-width:300px;">
            <span>🔍 Find Matching Jobs</span>
          </button>
        </form>
      </div>

      <div id="eligibility-results-container">
        <!-- Results populated dynamically -->
      </div>
    `;

    mainContentEl.innerHTML = html;
  }

  // 9. Saved / Bookmarked Jobs View
  function renderSavedJobsView() {
    const savedList = data.RECRUITMENTS.filter(j => state.savedJobs.includes(j.id));

    let html = `
      <div class="section-header-bar">
        <div class="section-title">
          <span>★</span>
          <span>My Saved / Bookmarked Jobs (${savedList.length})</span>
        </div>
        <div class="section-controls">
          ${savedList.length > 0 ? `<button class="table-action-btn" onclick="window.ROJGAAR_APP.clearAllSavedJobs()">Clear All</button>` : ''}
        </div>
      </div>

      <div class="job-table-container">
        ${savedList.length === 0 ? `
          <div style="padding:40px 20px; text-align:center; color:var(--text-muted);">
            <div style="font-size:2.5rem; margin-bottom:10px;">📑</div>
            <p>You have not saved any jobs yet. Click the <strong>Save</strong> button on any job card to track it here.</p>
            <a href="#/" class="table-action-btn" style="margin-top:14px; display:inline-flex;">Browse Latest Jobs</a>
          </div>
        ` : renderRecruitmentTable(savedList)}
      </div>
    `;

    mainContentEl.innerHTML = html;
  }

  // 10. Search View
  function renderSearchView(query) {
    const q = query.toLowerCase().trim();
    const results = data.RECRUITMENTS.filter(j => 
      j.title.toLowerCase().includes(q) ||
      j.org.toLowerCase().includes(q) ||
      j.posts.toLowerCase().includes(q) ||
      j.qualificationText.toLowerCase().includes(q) ||
      j.category.toLowerCase().includes(q)
    );

    let html = `
      <div class="section-header-bar">
        <div class="section-title">
          <span>🔍</span>
          <span>Search Results for: "<em>${escapeHtml(query)}</em>" (${results.length} Matches Found)</span>
        </div>
      </div>

      <div class="job-table-container">
        ${results.length === 0 ? `
          <div style="padding:40px 20px; text-align:center; color:var(--text-muted);">
            <div style="font-size:2.5rem; margin-bottom:10px;">🔍</div>
            <p>No matching government jobs found for "<strong>${escapeHtml(query)}</strong>". Try searching for 10th pass, Railway, SSC, Police, or Graduate.</p>
            <a href="#/" class="table-action-btn" style="margin-top:14px; display:inline-flex;">Back to All Jobs</a>
          </div>
        ` : `
          ${renderRecruitmentTable(results)}
          ${renderPagination(results.length)}
        `}
      </div>
    `;

    mainContentEl.innerHTML = html;
  }

  // 11. Static Info Policy View Fallback (for single page mode)
  function renderStaticInfoView(pageSlug) {
    let title = "RojgaarDwaar Information";
    let content = "<p>Please visit our dedicated page for complete information.</p>";

    if (pageSlug === 'privacy-policy') {
      title = "Privacy Policy";
      content = `
        <p>At RojgaarDwaar, accessible from https://rojgaardwaar.in, the privacy of our visitors is of extreme importance to us. This Privacy Policy document outlines the types of personal information received and collected by RojgaarDwaar and how it is used.</p>
        <h3>Log Files & Cookies</h3>
        <p>Like many other Web sites, RojgaarDwaar makes use of log files. We also use cookies to store information about visitors' preferences, user-specific information on which pages the user access or visit.</p>
        <h3>Google AdSense & DoubleClick DART Cookies</h3>
        <p>Google, as a third-party vendor, uses cookies to serve ads on RojgaarDwaar. Google's use of the DART cookie enables it to serve ads to users based on their visit to RojgaarDwaar and other sites on the Internet.</p>
      `;
    } else if (pageSlug === 'disclaimer') {
      title = "Non-Government Entity Disclaimer";
      content = `
        <p><strong>RojgaarDwaar is an independent educational and job information portal.</strong> We are NOT affiliated, associated, authorized, endorsed by, or in any way officially connected with any Indian Government department, Union Public Service Commission, Staff Selection Commission, State PSCs, or Indian Railways.</p>
        <p>All recruitment notices published on this website are compiled from primary official notifications, gazettes, and authorized government recruitment portals. Candidates are strongly advised to verify details in the official recruitment advertisement before applying.</p>
      `;
    } else if (pageSlug === 'about') {
      title = "About RojgaarDwaar";
      content = `
        <p><strong>RojgaarDwaar (“Your Doorway to Government Jobs”)</strong> was established with a singular mission: to make authentic Indian government job information transparent, accessible, and structured for millions of aspiring youth across all Indian states and Union Territories.</p>
      `;
    }

    let html = `
      <div class="job-detail-card" style="padding:24px;">
        <h1 style="color:var(--primary); font-size:1.6rem; font-weight:800; margin-bottom:16px;">${title}</h1>
        <div style="line-height:1.8; font-size:0.92rem; color:var(--text-secondary);">
          ${content}
        </div>
      </div>
    `;

    mainContentEl.innerHTML = html;
  }

  // =========================================================================
  // Table & Helper Renderers
  // =========================================================================

  function renderRecruitmentTable(jobsList) {
    const startIdx = (state.currentPage - 1) * state.pageSize;
    const paginated = jobsList.slice(startIdx, startIdx + state.pageSize);

    if (paginated.length === 0) {
      return `<div style="padding:30px; text-align:center; color:var(--text-muted);">No job recruitments found in this category.</div>`;
    }

    return `
      <table class="recruitment-table">
        <thead>
          <tr>
            <th style="width: 42%;">Recruitment Title / Department</th>
            <th style="width: 14%;">Vacancies</th>
            <th style="width: 16%;">Qualification</th>
            <th style="width: 14%;">Last Date</th>
            <th style="width: 14%;">Action</th>
          </tr>
        </thead>
        <tbody>
          ${paginated.map(job => {
            const stateObj = data.STATES.find(s => s.id === job.state) || data.STATES[0];
            const qualShorts = job.qualifications.map(qId => {
              const q = data.QUALIFICATIONS.find(item => item.id === qId);
              return q ? q.shortName : qId;
            }).join(' / ');

            return `
              <tr>
                <td>
                  <a href="#/job/${job.id}" class="post-title-link">${escapeHtml(job.title)}</a>
                  <div class="org-tag">
                    <span>🏛️ ${escapeHtml(job.shortOrg)}</span>
                    <span>• 📍 ${escapeHtml(stateObj.name)}</span>
                    ${job.noExam ? `<span class="badge badge-noexam">No Exam</span>` : ''}
                    ${job.urgent ? `<span class="badge badge-urgent">Closing Soon</span>` : ''}
                  </div>
                </td>
                <td>
                  <span class="vacancy-num">${job.vacancies.toLocaleString('en-IN')}</span>
                  <div style="font-size:0.72rem; color:var(--text-muted);">Posts</div>
                </td>
                <td>
                  <span class="badge badge-qual" style="max-width:140px; overflow:hidden; text-overflow:ellipsis;">${escapeHtml(qualShorts)}</span>
                </td>
                <td class="deadline-cell">
                  <span class="deadline-date">${job.importantDates.lastDate}</span>
                  <span class="deadline-status">${job.urgent ? '⚠️ Hurry' : 'Active'}</span>
                </td>
                <td>
                  <a href="#/job/${job.id}" class="table-action-btn">
                    <span>Details &rsaquo;</span>
                  </a>
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    `;
  }

  function renderPagination(totalCount) {
    const totalPages = Math.ceil(totalCount / state.pageSize);
    if (totalPages <= 1) return '';

    let pagesHtml = '';
    const maxVisible = 5;
    let startPage = Math.max(1, state.currentPage - 2);
    let endPage = Math.min(totalPages, startPage + maxVisible - 1);

    if (endPage - startPage < maxVisible - 1) {
      startPage = Math.max(1, endPage - maxVisible + 1);
    }

    for (let p = startPage; p <= endPage; p++) {
      pagesHtml += `
        <button class="page-num-btn ${p === state.currentPage ? 'active' : ''}" onclick="window.ROJGAAR_APP.goToPage(${p})">
          ${p}
        </button>
      `;
    }

    return `
      <div class="pagination-container">
        <div>Showing <strong>${Math.min((state.currentPage - 1) * state.pageSize + 1, totalCount)}</strong> to <strong>${Math.min(state.currentPage * state.pageSize, totalCount)}</strong> of <strong>${totalCount}</strong> Openings</div>
        <div class="pagination-pages">
          ${state.currentPage > 1 ? `<button class="page-num-btn" onclick="window.ROJGAAR_APP.goToPage(${state.currentPage - 1})">&laquo;</button>` : ''}
          ${pagesHtml}
          ${state.currentPage < totalPages ? `<button class="page-num-btn" onclick="window.ROJGAAR_APP.goToPage(${state.currentPage + 1})">&raquo;</button>` : ''}
        </div>
      </div>
    `;
  }

  // =========================================================================
  // Sidebar Widgets Rendering
  // =========================================================================

  function renderSidebarWidgets() {
    const qualListEl = document.getElementById('sidebar-qual-list');
    const catListEl = document.getElementById('sidebar-cat-list');
    const stateGridEl = document.getElementById('sidebar-state-grid');

    if (qualListEl) {
      qualListEl.innerHTML = data.QUALIFICATIONS.map(q => {
        const count = data.RECRUITMENTS.filter(j => j.qualifications.includes(q.id)).length;
        return `
          <li class="widget-link-item">
            <a href="#/qualification/${q.id}" class="sidebar-nav-link">
              <span>${q.icon} ${q.shortName}</span>
              <span class="link-count-badge">${count}</span>
            </a>
          </li>
        `;
      }).join('');
    }

    if (catListEl) {
      catListEl.innerHTML = data.CATEGORIES.slice(0, 10).map(c => {
        const count = data.RECRUITMENTS.filter(j => j.category === c.id).length;
        return `
          <li class="widget-link-item">
            <a href="#/category/${c.id}" class="sidebar-nav-link">
              <span>${c.icon} ${c.name}</span>
              <span class="link-count-badge">${count}</span>
            </a>
          </li>
        `;
      }).join('');
    }

    if (stateGridEl) {
      stateGridEl.innerHTML = data.STATES.map(s => `
        <a href="#/state/${s.id}" class="state-grid-btn">
          <span>${s.icon} ${s.name}</span>
          <span style="font-size:0.7rem; color:var(--text-muted);">${s.totalActive}</span>
        </a>
      `).join('');
    }
  }

  // =========================================================================
  // Event Handlers & User Interactions
  // =========================================================================

  function setupEventListeners() {
    // Search input live autocomplete
    if (searchInputEl) {
      searchInputEl.addEventListener('input', debounce(handleSearchAutocomplete, 200));
      
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

  function handleSearchAutocomplete() {
    const q = searchInputEl.value.trim().toLowerCase();
    if (q.length < 2) {
      suggestionsBoxEl.style.display = 'none';
      return;
    }

    const matches = data.RECRUITMENTS.filter(j => 
      j.title.toLowerCase().includes(q) ||
      j.org.toLowerCase().includes(q) ||
      j.posts.toLowerCase().includes(q) ||
      j.qualificationText.toLowerCase().includes(q)
    ).slice(0, 6);

    if (matches.length === 0) {
      suggestionsBoxEl.innerHTML = `<div style="padding:10px; font-size:0.84rem; color:var(--text-muted); text-align:center;">No matching recruitments found.</div>`;
      suggestionsBoxEl.style.display = 'block';
      return;
    }

    suggestionsBoxEl.innerHTML = matches.map(m => `
      <div class="suggestion-item" onclick="window.ROJGAAR_APP.selectSuggestion('${m.id}')">
        <div>
          <div class="suggestion-title">${escapeHtml(m.title)}</div>
          <div class="suggestion-meta">🏛️ ${escapeHtml(m.shortOrg)} • ⏰ Last Date: ${m.importantDates.lastDate}</div>
        </div>
        <span class="badge badge-qual">${m.vacancies} Posts</span>
      </div>
    `).join('');

    suggestionsBoxEl.style.display = 'block';
  }

  function getFilteredRecruitmentsByTab(tab) {
    if (tab === 'closing-soon') return data.RECRUITMENTS.filter(j => j.urgent);
    if (tab === 'no-exam') return data.RECRUITMENTS.filter(j => j.noExam);
    if (tab === 'railway') return data.RECRUITMENTS.filter(j => j.category === 'railway');
    if (tab === 'banking') return data.RECRUITMENTS.filter(j => j.category === 'banking');
    if (tab === 'ssc') return data.RECRUITMENTS.filter(j => j.category === 'ssc');
    if (tab === 'defence') return data.RECRUITMENTS.filter(j => j.category === 'defence');
    return data.RECRUITMENTS;
  }

  function updateBookmarkBadge() {
    if (bookmarkCountEl) {
      bookmarkCountEl.textContent = state.savedJobs.length;
    }
  }

  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>🔔</span> <span>${escapeHtml(message)}</span>`;
    
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    
    container.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 3200);
  }

  function closeAllModals() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
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

  // =========================================================================
  // Public APIs for UI Actions
  // =========================================================================

  window.ROJGAAR_APP = {
    init,
    switchTab: function(tabName) {
      state.activeTab = tabName;
      state.currentPage = 1;
      renderHomeView();
    },
    goToPage: function(pageNum) {
      state.currentPage = pageNum;
      if (state.currentRoute === 'home') renderHomeView();
      else if (state.currentRoute === 'qualification') renderQualificationView(state.routeParam);
      else if (state.currentRoute === 'state') renderStateView(state.routeParam);
      else if (state.currentRoute === 'category') renderCategoryView(state.routeParam);
      else if (state.currentRoute === 'search') renderSearchView(state.routeParam);
      window.scrollTo({ top: 400, behavior: 'smooth' });
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
        showToast('Job saved to your bookmarks!');
      } else {
        state.savedJobs.splice(idx, 1);
        showToast('Job removed from saved bookmarks.');
      }
      localStorage.setItem('rojgaar_saved_jobs', JSON.stringify(state.savedJobs));
      updateBookmarkBadge();
      
      if (state.currentRoute === 'job-detail') {
        renderJobDetailView(jobId);
      } else if (state.currentRoute === 'saved') {
        renderSavedJobsView();
      }
    },
    clearAllSavedJobs: function() {
      state.savedJobs = [];
      localStorage.setItem('rojgaar_saved_jobs', JSON.stringify([]));
      updateBookmarkBadge();
      renderSavedJobsView();
      showToast('All saved jobs cleared.');
    },
    toggleFaq: function(btn) {
      const panel = btn.nextElementSibling;
      if (panel.style.display === 'none' || !panel.style.display) {
        panel.style.display = 'block';
        btn.querySelector('span:last-child').textContent = '▲';
      } else {
        panel.style.display = 'none';
        btn.querySelector('span:last-child').textContent = '▼';
      }
    },
    shareToSocial: function(platform, jobId) {
      const job = data.RECRUITMENTS.find(j => j.id === jobId);
      if (!job) return;
      const url = window.location.origin + window.location.pathname + `#/job/${job.id}`;
      const text = `Check out this Govt Job Opening: ${job.title} (Vacancies: ${job.vacancies}, Last Date: ${job.importantDates.lastDate}) on RojgaarDwaar: ${url}`;

      if (platform === 'whatsapp') {
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
      } else if (platform === 'telegram') {
        window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(job.title)}`, '_blank');
      } else if (platform === 'x') {
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
      }
    },
    copyJobLink: function(jobId) {
      const url = window.location.origin + window.location.pathname + `#/job/${jobId}`;
      navigator.clipboard.writeText(url).then(() => {
        showToast('Job link copied to clipboard!');
      }).catch(() => {
        showToast('Link: ' + url);
      });
    },
    toggleDarkMode: function() {
      state.darkMode = !state.darkMode;
      document.body.classList.toggle('dark-mode', state.darkMode);
      localStorage.setItem('rojgaar_theme', state.darkMode ? 'dark' : 'light');
    },
    openEligibilityModal: function() {
      const modal = document.getElementById('eligibility-modal');
      if (modal) modal.classList.add('active');
    },
    closeModal: function(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) modal.classList.remove('active');
    },
    handleEligibilitySubmit: function(e) {
      e.preventDefault();
      const qual = document.getElementById('elig-qual-select').value;
      const age = parseInt(document.getElementById('elig-age-input').value, 10) || 24;
      const stateId = document.getElementById('elig-state-select').value;
      const catId = document.getElementById('elig-cat-select').value;

      let results = data.RECRUITMENTS;

      if (qual !== 'all') {
        results = results.filter(j => j.qualifications.includes(qual));
      }
      if (stateId !== 'all') {
        results = results.filter(j => j.state === stateId || j.state === 'all-india');
      }
      if (catId !== 'all') {
        results = results.filter(j => j.category === catId);
      }

      const resultsContainer = document.getElementById('eligibility-results-container');
      if (resultsContainer) {
        resultsContainer.innerHTML = `
          <div class="section-header-bar" style="margin-top:20px;">
            <div class="section-title">
              <span>🎯</span>
              <span>Matching Jobs Found: ${results.length} Eligible Openings</span>
            </div>
          </div>
          <div class="job-table-container">
            ${renderRecruitmentTable(results)}
          </div>
        `;
      }
    }
  };

  // Run on DOM ready
  document.addEventListener('DOMContentLoaded', init);

})();
