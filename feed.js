// feed.js
(function() {
  // Wait for DOM
  document.addEventListener('DOMContentLoaded', () => {

    // 1. Render Sliders
    const sliders = document.querySelectorAll('.profiles-slider-wrap');
    
    // Check if PROFILES_DATA exists
    if (typeof PROFILES_DATA !== 'undefined' && sliders.length > 0) {
      sliders.forEach((sliderWrap, index) => {
        const grid = sliderWrap.querySelector('.profiles-grid');
        const prevBtn = sliderWrap.querySelector('.prev');
        const nextBtn = sliderWrap.querySelector('.next');
        
        if (grid) {
          // Render cards
          grid.innerHTML = PROFILES_DATA.map((p) => `
            <div class="profile-card">
              <div class="profile-thumb" style="background:${p.bg}">
                <img src="${p.logo}" alt="${p.name}" />
              </div>
              <div class="profile-info">
                <div class="profile-name-row">
                  <span class="profile-name">${p.name}</span>
                  ${
                    p.verified
                      ? `
                    <span class="verified-icon" title="Verified">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M9.2 16.2L5.8 12.8L4.4 14.2L9.2 19L19.6 8.6L18.2 7.2L9.2 16.2Z"></path>
                      </svg>
                    </span>
                  `
                      : ""
                  }
                </div>
                <div class="profile-loc-row">
                  <span class="profile-loc">${p.location}</span>
                </div>
                <button class="btn-follow ${p.following ? "following" : ""}" type="button">${p.following ? "Following" : "Follow"}</button>
              </div>
            </div>
          `).join("");

          // Follow toggle
          grid.querySelectorAll(".btn-follow").forEach((btn) => {
            btn.addEventListener("click", function (event) {
              event.stopPropagation();
              const isFollowing = this.classList.contains("following");
              this.classList.toggle("following", !isFollowing);
              this.textContent = isFollowing ? "Follow" : "Following";
            });
          });

          // Slider logic
          if (prevBtn && nextBtn) {
            const getScrollStep = () => {
              const firstCard = grid.querySelector(".profile-card");
              if (!firstCard) return 280;
              const cardWidth = firstCard.getBoundingClientRect().width;
              const styles = window.getComputedStyle(grid);
              const gap = parseFloat(styles.columnGap || styles.gap || "14");
              const visibleCards = parseFloat(styles.getPropertyValue("--visible-cards") || "3.5");
              const cardsToScroll = Math.floor(visibleCards);
              return cardsToScroll * (cardWidth + gap);
            };

            const updateNavState = () => {
              const maxLeft = grid.scrollWidth - grid.clientWidth;
              prevBtn.disabled = grid.scrollLeft <= 1;
              nextBtn.disabled = grid.scrollLeft >= maxLeft - 1;
            };

            prevBtn.addEventListener("click", () => {
              grid.scrollBy({ left: -getScrollStep(), behavior: "smooth" });
            });

            nextBtn.addEventListener("click", () => {
              grid.scrollBy({ left: getScrollStep(), behavior: "smooth" });
            });

            grid.addEventListener("scroll", updateNavState, { passive: true });
            window.addEventListener("resize", updateNavState);
            
            // Give time for layout
            setTimeout(updateNavState, 100);
          }
        }
      });
    }

    // 2. Render Posts
    const postContainers = document.querySelectorAll('.posts-grid.single-column');
    if (typeof POSTS_DATA !== 'undefined' && postContainers.length > 0) {
      
      const heartSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>`;
      const moreSvg = `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>`;
      
      const renderPostHTML = (p) => `
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
      `;

      // Split posts among containers
      // First container gets 1 post, second container gets the rest
      if (postContainers.length >= 2) {
        if (POSTS_DATA.length > 0) {
          postContainers[0].innerHTML = renderPostHTML(POSTS_DATA[0]);
        }
        if (POSTS_DATA.length > 1) {
          postContainers[1].innerHTML = POSTS_DATA.slice(1).map(renderPostHTML).join('');
        }
      } else {
        postContainers[0].innerHTML = POSTS_DATA.map(renderPostHTML).join('');
      }

      // Wishlist toggle
      postContainers.forEach(container => {
        container.addEventListener('click', (e) => {
          const btn = e.target.closest('.wishlist-btn');
          if (btn) {
            btn.classList.toggle('active');
          }
        });
      });
    }
    // 3. Post Box Attach Logic
    const attachBtn = document.querySelector('.post-box-attach');
    if (attachBtn) {
      // Create hidden file input
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.style.display = 'none';
      fileInput.accept = 'image/*, video/*, .pdf, .doc, .docx'; // Common file types
      document.body.appendChild(fileInput);

      attachBtn.addEventListener('click', () => {
        fileInput.click();
      });

      fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
          console.log('File selected:', file.name);
          // Optional: Show feedback to user
          // alert(`Selected file: ${file.name}`);
        }
      });
    }
  });
})();
