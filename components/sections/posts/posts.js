// ── POSTS GRID
(function() {
  const grid = document.getElementById('postsGrid');
  if (grid) {
    const heartSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>`;
    const moreSvg = `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>`;
    grid.innerHTML = POSTS_DATA.map(p => `
      <div class="post-card">
        <div class="post-img">
          <img src="${p.image}" alt="post" />
          ${p.featured ? '<span class="post-featured">Featured</span>' : ''}
        </div>
        <div class="post-body">
          <div class="post-text">${p.text}</div>
          <div class="post-meta">
            <span>${p.area}</span><span>${p.date}</span>
          </div>
        </div>
        <div class="post-footer">
          <img class="post-author-avatar" src="${p.avatar}" alt="${p.author}" />
          <div class="post-author-name">
            ${p.author}
            ${p.verified ? `
              <span class="verified-icon" title="Verified">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9.2 16.2L5.8 12.8L4.4 14.2L9.2 19L19.6 8.6L18.2 7.2L9.2 16.2Z"></path>
                </svg>
              </span>
            ` : ''}
          </div>
          <div class="post-actions">
            <button class="post-action-btn wishlist-btn" title="Like">${heartSvg}</button>
            <button class="post-action-btn more-btn" title="More">${moreSvg}</button>
          </div>
        </div>
      </div>
    `).join('');

    // wishlist toggle logic
    grid.addEventListener('click', (e) => {
      const btn = e.target.closest('.wishlist-btn');
      if (btn) {
        btn.classList.toggle('active');
      }
    });
  }
})();

