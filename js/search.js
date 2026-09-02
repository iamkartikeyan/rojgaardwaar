// RozgarDwaar High-Performance Unified Client Search Engine
(function() {
  let searchData = null;
  let isDataLoading = false;

  function ensureDataLoaded(callback) {
    if (window.ROZGAR_DATA && window.ROZGAR_DATA.RECRUITMENTS) {
      searchData = window.ROZGAR_DATA.RECRUITMENTS;
      if (callback) callback(searchData);
      return;
    }

    if (isDataLoading) {
      setTimeout(() => ensureDataLoaded(callback), 100);
      return;
    }

    isDataLoading = true;
    const script = document.createElement('script');
    script.src = '/js/data.js';
    script.async = true;
    script.onload = () => {
      isDataLoading = false;
      if (window.ROZGAR_DATA && window.ROZGAR_DATA.RECRUITMENTS) {
        searchData = window.ROZGAR_DATA.RECRUITMENTS;
        if (callback) callback(searchData);
      }
    };
    script.onerror = () => {
      isDataLoading = false;
      console.warn('Could not load data.js for search');
    };
    document.head.appendChild(script);
  }

  function initSearch() {
    const searchForm = document.getElementById('main-search-form');
    const searchInput = document.getElementById('main-search-input');
    if (!searchInput) return;

    // Create Suggestions Dropdown if not present
    let suggestionsBox = document.getElementById('search-suggestions-dropdown');
    if (!suggestionsBox) {
      suggestionsBox = document.createElement('div');
      suggestionsBox.id = 'search-suggestions-dropdown';
      suggestionsBox.className = 'search-suggestions-dropdown';
      if (searchForm) {
        searchForm.parentNode.style.position = 'relative';
        searchForm.parentNode.appendChild(suggestionsBox);
      }
    }

    // Preload data on search focus or hover
    searchInput.addEventListener('focus', () => ensureDataLoaded());
    searchInput.addEventListener('mouseenter', () => ensureDataLoaded());

    // Live Instant Autocomplete
    let debounceTimer = null;
    searchInput.addEventListener('input', function() {
      clearTimeout(debounceTimer);
      const query = this.value.trim();
      if (query.length < 2) {
        suggestionsBox.style.display = 'none';
        suggestionsBox.innerHTML = '';
        return;
      }

      debounceTimer = setTimeout(() => {
        ensureDataLoaded((jobs) => {
          renderSuggestions(query, jobs, suggestionsBox);
        });
      }, 150);
    });

    // Close suggestions on outside click
    document.addEventListener('click', function(e) {
      if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
        suggestionsBox.style.display = 'none';
      }
    });

    // Form Submit Handler
    if (searchForm) {
      searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (query) {
          window.location.href = `/search.html?q=${encodeURIComponent(query)}`;
        } else {
          searchInput.focus();
        }
      });
    }

    // Check if we are on search.html and process query
    if (window.location.pathname.includes('search.html')) {
      const urlParams = new URLSearchParams(window.location.search);
      const q = urlParams.get('q');
      if (q) {
        if (searchInput) searchInput.value = q;
        ensureDataLoaded((jobs) => {
          renderSearchResultsPage(q, jobs);
        });
      }
    }
  }

  function filterJobs(query, jobs) {
    if (!jobs || !query) return [];
    const terms = query.toLowerCase().split(/\s+/).filter(t => t.length > 0);
    return jobs.filter(job => {
      const searchTarget = [
        job.title,
        job.org,
        job.shortOrg,
        job.posts,
        job.category,
        job.subCategory,
        job.state,
        job.qualificationText,
        ...(job.qualifications || [])
      ].join(' ').toLowerCase();

      return terms.every(term => searchTarget.includes(term));
    });
  }

  function renderSuggestions(query, jobs, box) {
    const matches = filterJobs(query, jobs).slice(0, 6);
    if (matches.length === 0) {
      box.innerHTML = `
        <div class="suggestion-item no-match">
          <span>No openings found matching "<strong>${escapeHtml(query)}</strong>"</span>
        </div>
      `;
      box.style.display = 'block';
      return;
    }

    box.innerHTML = `
      <div class="suggestions-header">
        <span>Matching Notifications</span>
      </div>
      ${matches.map(j => `
        <a href="/jobs/${j.id}.html" class="suggestion-item">
          <div class="sugg-left">
            <div class="sugg-title">${escapeHtml(j.title)}</div>
            <div class="sugg-org">${escapeHtml(j.org)} &bull; ${escapeHtml(j.posts)}</div>
          </div>
        </a>
      `).join('')}
      <a href="/search.html?q=${encodeURIComponent(query)}" class="suggestions-footer">
        View all results for "<strong>${escapeHtml(query)}</strong>" &raquo;
      </a>
    `;
    box.style.display = 'block';
  }

  function renderSearchResultsPage(query, jobs) {
    const resultsContainer = document.getElementById('search-results-output');
    const queryDisplayEl = document.getElementById('search-query-display');

    if (queryDisplayEl) queryDisplayEl.textContent = query;

    const matches = filterJobs(query, jobs);
    if (!resultsContainer) return;

    if (matches.length === 0) {
      resultsContainer.innerHTML = `
        <div class="no-search-results-box" style="padding: 24px; text-align: center;">
          <p style="font-size:15px; font-weight:700; color:#0b2545; margin-bottom:8px;">No government job recruitments found matching "${escapeHtml(query)}".</p>
          <p style="font-size:13px; color:#666;">Try searching for Railway, Bank, SSC, 10th Pass, Police, or Graduate.</p>
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = `
      <div class="news-feed-list" style="padding:0;">
        ${matches.map(j => `
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
    `;
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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSearch);
  } else {
    initSearch();
  }
})();
