/**
 * ROJGAARDWAAR (RojgaarDwaar.in) - Master Application Engine
 * Renders IndGovtJobs-inspired authentic layout with high-density task modules,
 * dynamic routing, instant search, and full job breakdowns.
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
  // 1. Home View (Exact IndGovtJobs Layout from Screenshot)
  // =========================================================================

  function renderHomeView() {
    // 1. Top Highlights: 5-6 top anchor recruitments
    const topHighlights = data.RECRUITMENTS.slice(0, 6);

    // 2. Paginated New / Updated Govt Job Notifications
    const startIdx = (state.currentPage - 1) * state.pageSize;
    const currentFeed = data.RECRUITMENTS.slice(startIdx, startIdx + state.pageSize);
    const totalPages = Math.ceil(data.RECRUITMENTS.length / state.pageSize);

    // 3. State wise list
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

        <!-- Pagination Bar (Exact IndGovtJobs style) -->
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
  // 2. Job Detail View
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
  // 3. Qualification Hub View
  // =========================================================================

  function renderQualificationView(qualId) {
    const qual = data.QUALIFICATIONS.find(q => q.id === qualId) || data.QUALIFICATIONS[0];
    const matchingJobs = data.RECRUITMENTS.filter(j => j.qualifications.includes(qual.id));

    let html = `
      <div class="content-block">
        <div class="section-bar-header">${escapeHtml(qual.name)} (${matchingJobs.length} Active Openings)</div>
        <div style="padding:12px 14px; font-size:13px; color:#555; border-bottom:1px solid #eee;">
          ${escapeHtml(qual.desc)}. Verified Central & State government job notifications for ${escapeHtml(qual.shortName)} candidates.
        </div>
        <div class="news-feed-list">
          ${matchingJobs.map(job => `
            <div class="news-feed-card">
              <h2 class="news-feed-title"><a href="#/job/${job.id}">${escapeHtml(job.title)}</a></h2>
              <p class="news-feed-summary">${escapeHtml(job.org)} invites applications for ${escapeHtml(job.posts)}. Vacancies: ${job.vacancies}, Last Date: ${job.importantDates.lastDate}.</p>
              <div class="news-feed-meta-row">
                <span class="meta-badge vac">${job.vacancies} Posts</span>
                <span class="meta-badge date">Last Date: ${job.importantDates.lastDate}</span>
                <a href="#/job/${job.id}" class="read-more-link">Read more »</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    mainContentEl.innerHTML = html;
  }

  // =========================================================================
  // 4. State Hub View
  // =========================================================================

  function renderStateView(stateId) {
    const stateObj = data.STATES.find(s => s.id === stateId) || data.STATES[0];
    const matchingJobs = data.RECRUITMENTS.filter(j => j.state === stateObj.id || (stateObj.id !== 'all-india' && j.state === 'all-india'));

    let html = `
      <div class="content-block">
        <div class="section-bar-header">${escapeHtml(stateObj.name)} Government Jobs 2026 (${matchingJobs.length} Posts)</div>
        <div style="padding:12px 14px; font-size:13px; color:#555; border-bottom:1px solid #eee;">
          Explore all active government recruitment notifications for <strong>${escapeHtml(stateObj.name)}</strong>.
        </div>
        <div class="news-feed-list">
          ${matchingJobs.map(job => `
            <div class="news-feed-card">
              <h2 class="news-feed-title"><a href="#/job/${job.id}">${escapeHtml(job.title)}</a></h2>
              <p class="news-feed-summary">${escapeHtml(job.org)} recruitment for ${escapeHtml(job.posts)}. Vacancies: ${job.vacancies}, Last Date: ${job.importantDates.lastDate}.</p>
              <div class="news-feed-meta-row">
                <span class="meta-badge vac">${job.vacancies} Posts</span>
                <span class="meta-badge date">Last Date: ${job.importantDates.lastDate}</span>
                <a href="#/job/${job.id}" class="read-more-link">Read more »</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    mainContentEl.innerHTML = html;
  }

  // =========================================================================
  // 5. Category Hub View
  // =========================================================================

  function renderCategoryView(catId) {
    const catObj = data.CATEGORIES.find(c => c.id === catId) || data.CATEGORIES[0];
    const matchingJobs = data.RECRUITMENTS.filter(j => j.category === catObj.id);

    let html = `
      <div class="content-block">
        <div class="section-bar-header">${escapeHtml(catObj.name)} (${matchingJobs.length} Openings)</div>
        <div class="news-feed-list">
          ${matchingJobs.map(job => `
            <div class="news-feed-card">
              <h2 class="news-feed-title"><a href="#/job/${job.id}">${escapeHtml(job.title)}</a></h2>
              <p class="news-feed-summary">${escapeHtml(job.org)} recruitment for ${escapeHtml(job.posts)}. Vacancies: ${job.vacancies}, Last Date: ${job.importantDates.lastDate}.</p>
              <div class="news-feed-meta-row">
                <span class="meta-badge vac">${job.vacancies} Posts</span>
                <span class="meta-badge date">Last Date: ${job.importantDates.lastDate}</span>
                <a href="#/job/${job.id}" class="read-more-link">Read more »</a>
              </div>
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
      <div class="content-block">
        <div class="section-bar-header">Latest Admit Cards & Hall Tickets 2026</div>
        <div class="news-feed-list">
          ${data.ADMIT_CARDS.map(card => `
            <div class="news-feed-card">
              <h2 class="news-feed-title"><a href="${card.downloadUrl}" target="_blank" rel="noopener noreferrer">${escapeHtml(card.title)}</a></h2>
              <p class="news-feed-summary">${escapeHtml(card.shortOrg)} Exam Date: <strong>${escapeHtml(card.examDate)}</strong>. Status: <span style="color:#008000; font-weight:700;">${escapeHtml(card.status)}</span>. ${escapeHtml(card.importantNotes)}</p>
              <div class="news-feed-meta-row">
                <span class="meta-badge date">Exam: ${escapeHtml(card.examDate)}</span>
                <a href="${card.downloadUrl}" target="_blank" rel="noopener noreferrer" class="read-more-link">Download Admit Card »</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    mainContentEl.innerHTML = html;
  }

  // =========================================================================
  // 7. Results View
  // =========================================================================

  function renderResultsView() {
    let html = `
      <div class="content-block">
        <div class="section-bar-header">Government Exam Results & Cutoff Scores 2026</div>
        <div class="news-feed-list">
          ${data.RESULTS.map(res => `
            <div class="news-feed-card">
              <h2 class="news-feed-title"><a href="${res.downloadUrl}" target="_blank" rel="noopener noreferrer">${escapeHtml(res.title)}</a></h2>
              <p class="news-feed-summary">${escapeHtml(res.description)} Cutoff Highlights: <strong>${escapeHtml(res.cutoffHighlights)}</strong></p>
              <div class="news-feed-meta-row">
                <span class="meta-badge vac">Declared: ${escapeHtml(res.declarationDate)}</span>
                <a href="${res.downloadUrl}" target="_blank" rel="noopener noreferrer" class="read-more-link">Check Result »</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    mainContentEl.innerHTML = html;
  }

  // =========================================================================
  // 8. Eligibility Tool View
  // =========================================================================

  function renderEligibilityToolView() {
    let html = `
      <div class="content-block">
        <div class="section-bar-header">Smart Government Job Eligibility Finder</div>
        <div style="padding:16px;">
          <p style="font-size:13px; color:#555; margin-bottom:14px;">Select your qualification, age, and location to find eligible government jobs instantly.</p>
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
      <div class="content-block">
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
      <div class="content-block">
        <div class="section-bar-header">Search Results for "${escapeHtml(query)}" (${results.length} Openings)</div>
        <div class="news-feed-list">
          ${results.length === 0 ? `
            <div style="padding:30px; text-align:center; color:#666;">No matching government recruitments found.</div>
          ` : results.map(job => `
            <div class="news-feed-card">
              <h2 class="news-feed-title"><a href="#/job/${job.id}">${escapeHtml(job.title)}</a></h2>
              <p class="news-feed-summary">${escapeHtml(job.org)} recruitment for ${escapeHtml(job.posts)}. Vacancies: ${job.vacancies}, Last Date: ${job.importantDates.lastDate}.</p>
              <div class="news-feed-meta-row">
                <span class="meta-badge vac">${job.vacancies} Posts</span>
                <span class="meta-badge date">Last Date: ${job.importantDates.lastDate}</span>
                <a href="#/job/${job.id}" class="read-more-link">Read more »</a>
              </div>
            </div>
          `).join('')}
        </div>
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
          <div class="news-feed-list" style="border-top:1px solid #eee; margin-top:14px;">
            <div style="font-weight:700; padding:8px 0; color:#008000;">Found ${results.length} Matching Jobs:</div>
            ${results.map(job => `
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
        `;
      }
    }
  };

  document.addEventListener('DOMContentLoaded', init);

})();
