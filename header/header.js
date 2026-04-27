// ── NAVBAR
(function () {
  const d = HEADER_DATA;
  const icons = {
    Home: `<svg viewBox="0 0 24 24"><path class="icon-outline" d="M3 11.5 12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/><path class="icon-fill" d="M12 3 2 11v10h7v-6h6v6h7V11L12 3z"/></svg>`,
    Directory: `<svg viewBox="0 0 24 24"><g class="icon-outline"><circle cx="5" cy="6" r="1.5"/><circle cx="5" cy="12" r="1.5"/><circle cx="5" cy="18" r="1.5"/><path d="M9 6h11M9 12h11M9 18h11"/></g><g class="icon-fill"><path d="M3.5 4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM3.5 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM3.5 16.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM8 5h13v2H8zM8 11h13v2H8zM8 17h13v2H8z"/></g></svg>`,
    Classifieds: `<svg viewBox="0 0 24 24"><g class="icon-outline"><path d="M3 8h18l-1.4 4.1a2 2 0 0 1-1.9 1.4H6.3a2 2 0 0 1-1.9-1.4L3 8z"/><path d="M5 13.5h14V19a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-5.5z"/><path d="M9 17h6"/><path d="M12 13.5V21"/></g><g class="icon-fill"><path d="M2 7h20l-1.6 5a2.4 2.4 0 0 1-2.3 1.7H5.9A2.4 2.4 0 0 1 3.6 12L2 7z"/><path d="M4.5 13.5h15V19a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-5.5z"/><path d="M11.25 14.5h1.5V21h-1.5z"/><path d="M8.5 17h7v1.5h-7z"/></g></svg>`,
    Events: `<svg viewBox="0 0 24 24"><g class="icon-outline"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18"/><path d="M8 3v4M16 3v4"/><rect x="9" y="12" width="6" height="5" rx="1"/></g><g class="icon-fill"><path d="M7 2h2v3h6V2h2v3h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2V2z"/><path d="M3 9h18v2H3z"/><path d="M10 12h4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1z" fill="white"/></g></svg>`,
    Post: `<svg viewBox="0 0 24 24"><g class="icon-outline"><circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/></g><g class="icon-fill"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"/><path d="M11 7h2v4h4v2h-4v4h-2v-4H7v-2h4z" fill="white"/></g></svg>`,
  };

  document.getElementById('navbar').innerHTML = `
    <div class="nav-logo">
      <div class="nav-logo-icon">
        <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="none" stroke="white" stroke-width="2"/></svg>
      </div>
      <span class="logo-text">${d.nav.logo}</span>
    </div>
    <div class="nav-links" id="navLinks">
      ${d.nav.links.map(l => `<a href="#" data-section="${l}">${icons[l] || ''}${l}</a>`).join('')}
    </div>
    <div class="nav-right">
      <button class="nav-burger-btn" type="button" aria-label="Toggle navigation" aria-controls="navLinks" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <button class="nav-search-btn">
        <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <span>Search</span>
      </button>
      <button class="btn-member-login" onclick="openModal('login')"><span class="member-word">Member</span> Login</button>
    </div>
  `;

  const navbar = document.getElementById('navbar');
  const burgerBtn = navbar.querySelector('.nav-burger-btn');
  const navLinks = navbar.querySelector('#navLinks');

  function setNavOpen(open) {
    navbar.classList.toggle('nav-open', open);
    burgerBtn.setAttribute('aria-expanded', String(open));
  }

  burgerBtn.addEventListener('click', () => {
    setNavOpen(!navbar.classList.contains('nav-open'));
  });

  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      navLinks.querySelectorAll('a').forEach(x => x.classList.remove('active'));
      a.classList.add('active');
      if (window.matchMedia('(max-width: 768px)').matches) {
        setNavOpen(false);
      }
    });
  });

  const first = navLinks.querySelector('a');
  if (first) first.classList.add('active');

  document.addEventListener('click', e => {
    if (
      navbar.classList.contains('nav-open') &&
      !navbar.contains(e.target)
    ) {
      setNavOpen(false);
    }
  });

  window.addEventListener('resize', () => {
    if (!window.matchMedia('(max-width: 768px)').matches) {
      setNavOpen(false);
    }
  });
})();

/*
// ── SEARCH BAR
(function () {
  const d = HEADER_DATA;
  const chevron = `<svg class="chevron" viewBox="0 0 24 24"><polyline points="9 6 15 12 9 18"/></svg>`;

  document.getElementById('searchBar').innerHTML = `
    <div class="search-pill" id="locationPill">
      <svg viewBox="0 0 24 24" class="search-pill-icon"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
      <span id="locationText">${d.search.locations[0]}</span>
      ${chevron}
    </div>
    <div class="search-pill" id="selectPill" onclick="toggleSelectDropdown()">
      <span id="selectText">Select</span>
      ${chevron}
    </div>
    <div class="search-input-pill">
      <input type="text" id="searchInput" placeholder="Enter Keyword" list="keywordSuggestions" />
      <datalist id="keywordSuggestions">
        ${d.search.keywords.map(k => `<option value="${k}">`).join('')}
      </datalist>
      <button class="btn-search-circle" onclick="doSearch()">
        <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      </button>
    </div>
    <button class="btn-categories" onclick="toggleAllCategories()">
      <svg viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>
      All Categories
    </button>
  `;

  let locIdx = 0;
  document.getElementById('locationPill').addEventListener('click', () => {
    locIdx = (locIdx + 1) % d.search.locations.length;
    document.getElementById('locationText').textContent = d.search.locations[locIdx];
  });
})();
*/

// ── SELECT DROPDOWN
let _selectedCategory = '';

function toggleSelectDropdown() {
  let dropdown = document.getElementById('selectDropdown');
  if (dropdown) { dropdown.remove(); return; }

  const pill = document.getElementById('selectPill');
  const rect = pill.getBoundingClientRect();

  const icons = {
    Home: `<svg viewBox="0 0 24 24" width="14" height="14"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>`,
    Directory: `<svg viewBox="0 0 24 24" width="14" height="14"><path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"/></svg>`,
    Classifieds: `<svg viewBox="0 0 24 24" width="14" height="14"><path d="M3 8h18l-1.4 4.1a2 2 0 0 1-1.9 1.4H6.3a2 2 0 0 1-1.9-1.4L3 8z"/><path d="M5 13.5h14V19a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-5.5z"/><path d="M9 17h6"/><path d="M12 13.5V21"/></svg>`,
    Events: `<svg viewBox="0 0 24 24" width="14" height="14"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg>`,
    Post: `<svg viewBox="0 0 24 24" width="14" height="14"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>`,
  };

  dropdown = document.createElement('div');
  dropdown.id = 'selectDropdown';
  dropdown.style.cssText = `
    position:fixed;
    top:${rect.bottom + 8}px;
    left:${rect.left}px;
    background:white;
    border:1px solid var(--border);
    border-radius:10px;
    box-shadow:0 8px 30px rgba(0,0,0,0.12);
    z-index:999;
    min-width:${rect.width + 40}px;
    padding:6px;
    display:flex;
    flex-direction:column;
    gap:2px;
    animation:dropIn 0.15s ease;
  `;

  const options = [{ label: 'All Categories', value: '', icon: '' },
    ...HEADER_DATA.search.categories.map(c => ({ label: c, value: c, icon: icons[c] || '' }))
  ];

  dropdown.innerHTML = options.map(opt => `
    <div
      onclick="selectOption('${opt.value}', '${opt.label}')"
      style="
        display:flex;align-items:center;gap:10px;
        padding:9px 12px;font-size:calc(13px * var(--font-scale));cursor:pointer;
        color:${_selectedCategory === opt.value ? 'var(--blue)' : 'var(--text)'};
        background:${_selectedCategory === opt.value ? '#f0f4ff' : 'transparent'};
        font-family:var(--font);border-radius:6px;
        font-weight:${_selectedCategory === opt.value ? '600' : '500'};
        transition:background 0.1s,color 0.1s;
      "
      onmouseover="this.style.background='#f0f4ff';this.style.color='var(--blue)'"
      onmouseout="this.style.background='${_selectedCategory === opt.value ? '#f0f4ff' : 'transparent'}';this.style.color='${_selectedCategory === opt.value ? 'var(--blue)' : 'var(--text)'}'"
    >
      ${opt.icon}
      <span>${opt.label}</span>
      ${_selectedCategory === opt.value ? `<svg style="margin-left:auto" viewBox="0 0 24 24" width="14" height="14" fill="var(--blue)"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>` : ''}
    </div>
  `).join('');

  document.body.appendChild(dropdown);

  setTimeout(() => document.addEventListener('click', function handler(e) {
    if (!dropdown.contains(e.target) && !e.target.closest('#selectPill')) {
      dropdown.remove();
      document.removeEventListener('click', handler);
    }
  }), 0);
}

// ── ALL CATEGORIES DROPDOWN (WITH TABS)
let _currentTab = HEADER_DATA.categories?.[0]?.name || 'Mobiles';

function toggleAllCategories() {
  let dropdown = document.getElementById('allCategoriesDropdown');
  if (dropdown) { dropdown.remove(); return; }

  const btn = document.querySelector('.btn-categories');
  const rect = btn.getBoundingClientRect();

  dropdown = document.createElement('div');
  dropdown.id = 'allCategoriesDropdown';
  dropdown.className = 'all-categories-dropdown-v2';
  
  // Center the large dropdown relative to the container if possible, 
  // or just place it under the bar.
  dropdown.style.cssText = `
    position:fixed;
    top:${rect.bottom + 15}px;
    right:${window.innerWidth - rect.right}px;
    background:white;
    border-radius:16px;
    box-shadow:0 20px 60px rgba(0,0,0,0.15);
    z-index:2000;
    width: min(90vw, 850px);
    max-height: 80vh;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    animation: dropIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    padding: 24px;
  `;

  // Keep dropdown open for all internal interactions (tab switches, pill clicks).
  dropdown.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  renderAllCategoriesContent(dropdown);
  document.body.appendChild(dropdown);

  setTimeout(() => document.addEventListener('click', function handler(e) {
    if (!e.target.closest('#allCategoriesDropdown') && !e.target.closest('.btn-categories')) {
      dropdown.remove();
      document.removeEventListener('click', handler);
    }
  }), 0);
}

function renderAllCategoriesContent(container) {
  const cats = HEADER_DATA.categories;
  const activeCat = cats.find(cat => cat.name === _currentTab) || cats[0];

  container.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; padding-bottom:15px; border-bottom:1px solid #eee;">
      <h3 style="margin:0; font-size:calc(20px * var(--font-scale)); font-weight:800; color:var(--blue);">All Categories</h3>
      <button onclick="document.getElementById('allCategoriesDropdown').remove()" style="background:none; border:none; font-size:calc(24px * var(--font-scale)); cursor:pointer; color:#999;">&times;</button>
    </div>
    <div class="categories-tabs-row" role="tablist" aria-label="Browse categories">
      ${cats.map(cat => `
        <button
          class="category-tab ${cat.name === activeCat.name ? 'active' : ''}"
          role="tab"
          aria-selected="${cat.name === activeCat.name ? 'true' : 'false'}"
          onclick="switchTab('${cat.name}')"
          type="button"
        >
          <img src="${cat.icon}" alt="${cat.name}" loading="lazy" />
          <span>${cat.name}</span>
        </button>
      `).join('')}
    </div>
    <div class="category-tab-panel" role="tabpanel">
      <div class="category-panel-head">
        <div class="category-panel-title">
          <img src="${activeCat.icon}" alt="${activeCat.name}" loading="lazy" />
          <h4>${activeCat.name}</h4>
        </div>
        <button class="category-panel-viewall" onclick="selectCategory('${activeCat.name}')" type="button">View All</button>
      </div>
      <div class="subcategory-pills">
        ${activeCat.subcategories.map(sub => `
          <button class="subcategory-pill" onclick="selectCategory('${sub}')" type="button">${sub}</button>
        `).join('')}
      </div>
    </div>
  `;
}

function switchTab(tab) {
  _currentTab = tab;
  const dropdown = document.getElementById('allCategoriesDropdown');
  if (dropdown) renderAllCategoriesContent(dropdown);
}

function selectCategory(cat) {
  document.getElementById('searchInput').value = cat;
  document.getElementById('allCategoriesDropdown')?.remove();
}

function selectOption(value, label) {
  _selectedCategory = value;
  document.getElementById('selectText').textContent = label || 'Select';
  document.getElementById('selectText').style.color = value ? 'var(--blue)' : '';
  document.getElementById('selectDropdown')?.remove();
}

// ── SEARCH
function doSearch() {
  const keyword = document.getElementById('searchInput').value.trim();
  const category = _selectedCategory;
  const location = document.getElementById('locationText').textContent;

  const results = HEADER_DATA.directory.filter(item => {
    const matchCat = !category || item.category === category;
    const matchKey = !keyword || item.name.toLowerCase().includes(keyword.toLowerCase());
    return matchCat && matchKey;
  });

  const msg = results.length
    ? `Found ${results.length} result(s) in "${location}":\n\n` + results.map(r => `• ${r.name} (${r.category}) — ⭐ ${r.rating}`).join('\n')
    : `No results found for "${keyword || 'all'}" in "${location}".`;

  alert(msg);
}

// ── MODAL LOGIC
(function initModals() {
  const overlay = document.createElement('div');
  overlay.id = 'modalOverlay';
  overlay.className = 'modal-overlay';
  overlay.onclick = (e) => { if (e.target === overlay) closeModal(); };
  document.body.appendChild(overlay);
})();

function openModal(type) {
  const overlay = document.getElementById('modalOverlay');
  const r = HERO_DATA.register;
  const countries = HERO_DATA.countries;

  const socialBtns = `
    <div class="modal-divider"><span>Or</span></div>
    <div class="modal-social-row">
      <button class="modal-social-btn">
        <svg viewBox="0 0 26 26"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
        Continue with Google
      </button>
      <button class="modal-social-btn">
        <svg viewBox="0 0 26 26" style="width:28px; height:28px;">
          <path fill="#000" d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.37.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.39-1.32 2.76-2.54 3.99zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
        </svg>
        Continue with Apple
      </button>
    </div>
  `;

  let content = '';
  if (type === 'login') {
    content = `
      <div class="modal-container">
        <button class="modal-close" onclick="closeModal()">×</button>
        <h2 class="modal-title">Member Login</h2>
        <div class="modal-group">
          <input type="email" class="modal-input" placeholder="User Email" />
        </div>
        <div class="modal-group">
          <input type="password" class="modal-input" placeholder="Password" />
        </div>
        <div class="modal-extra-row">
          <label class="modal-remember">
            <input type="checkbox" /> Remember Me
          </label>
          <span class="modal-forgot">Forgot Password ?</span>
        </div>
        <button class="modal-btn-primary modal-btn-login">Login</button>
        <p class="modal-switch-text">
          Don't have an account? <span class="modal-switch-link" onclick="openModal('register')">Create FREE Account</span>
        </p>
        ${socialBtns}
      </div>
    `;
  } else {
    content = `
      <div class="modal-container">
        <button class="modal-close" onclick="closeModal()">×</button>
        <h2 class="modal-title">Create FREE Account</h2>
        <div class="modal-form-bg">
          <div class="modal-group">
            <label class="modal-label">Email ID</label>
            <input type="email" class="modal-input" placeholder="" />
          </div>
          <div class="modal-group">
            <div class="modal-row" style="margin-bottom:5px;">
               <label class="modal-label" style="margin:0">Country Code</label>
               <span class="modal-pipe">|</span>
               <label class="modal-label" style="margin:0">Phone Number</label>
            </div>
            <div class="modal-row">
              <div class="modal-phone-country">
                <select>
                  ${countries.map(c => `<option>${c}</option>`).join('')}
                </select>
              </div>
              <input type="tel" class="modal-input" style="flex:1" placeholder="" />
            </div>
          </div>
          <button class="modal-btn-primary modal-btn-register">Register FREE</button>
        </div>
        <p class="modal-switch-text">
          Already have an account ? <span class="modal-switch-link" onclick="openModal('login')">Member Login</span>
        </p>
        ${socialBtns}
      </div>
    `;
  }

  overlay.innerHTML = content;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}
