// ── PROFILES SLIDER
(function () {
  const grid = document.getElementById("profilesGrid");
  if (!grid) return;

  grid.innerHTML = PROFILES_DATA.map(
    (p) => `
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
          <button class="btn-follow ${p.following ? "following" : ""}" type="button">${p.following ? "Following" : "Follow"}</button>
        </div>
      </div>
    </div>
  `,
  ).join("");

  // follow toggle
  grid.querySelectorAll(".btn-follow").forEach((btn) => {
    btn.addEventListener("click", function (event) {
      event.stopPropagation();
      const isFollowing = this.classList.contains("following");
      this.classList.toggle("following", !isFollowing);
      this.textContent = isFollowing ? "Follow" : "Following";
    });
  });

  const prevBtn = document.getElementById("profilesPrevBtn");
  const nextBtn = document.getElementById("profilesNextBtn");

  if (!prevBtn || !nextBtn) return;

  const getScrollStep = () => {
    const firstCard = grid.querySelector(".profile-card");
    if (!firstCard) return 280;

    const cardWidth = firstCard.getBoundingClientRect().width;
    const styles = window.getComputedStyle(grid);
    const gap = parseFloat(styles.columnGap || styles.gap || "14");
    const visibleCards = parseFloat(
      styles.getPropertyValue("--visible-cards") || "4.5",
    );

    // Scroll by the number of whole cards currently visible (e.g., 4)
    // This skips the already seen cards and brings the next ones into focus
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
  updateNavState();
})();
