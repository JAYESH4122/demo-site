// ── LEFT: SPLIT IMAGES
(function () {
  const topImage = HERO_DATA.leftImages.top;
  const bottomImage = HERO_DATA.leftImages.bottom;

  document.getElementById("heroBanner").innerHTML = `
    <div class="hero-image-split">
      <div class="hero-image-panel">
        <img src="${topImage.src}" alt="${topImage.alt}" loading="lazy" />
      </div>
      <div class="hero-image-panel">
        <img src="${bottomImage.src}" alt="${bottomImage.alt}" loading="lazy" />
      </div>
    </div>
  `;
})();

// ── DEMO VIDEO
(function () {
  const d = HERO_DATA.demo;

  document.getElementById("demoVideo").innerHTML = `
    <div class="demo-player-wrap">
      <video class="demo-player" controls playsinline preload="metadata" poster="${d.thumb}">
      <source src="${d.src}" type="video/mp4" />
      Your browser does not support the video tag.
      </video>
      <button class="demo-play" type="button" aria-label="Play demo video">
        <svg viewBox="0 0 24 24" aria-hidden="true"><polygon points="5,3 19,12 5,21"/></svg>
      </button>
    </div>
    <div class="demo-label">${d.label}</div>
  `;

  const demoVideo = document.querySelector(".demo-player");
  const playButton = document.querySelector(".demo-play");

  if (demoVideo && playButton) {
    const startPlayback = () => {
      demoVideo.play();
      playButton.classList.add("is-hidden");
    };

    playButton.addEventListener("click", startPlayback);
    demoVideo.addEventListener("play", () =>
      playButton.classList.add("is-hidden"),
    );
    demoVideo.addEventListener("pause", () => {
      if (!demoVideo.ended) playButton.classList.remove("is-hidden");
    });
  }
})();

// ── REGISTER CARD
(function () {
  const r = HERO_DATA.register;
  const countryOptions = HERO_DATA.countries
    .map((c) => `<option value="${c}">${c}</option>`)
    .join("");

  document.getElementById("registerCard").innerHTML = `
    <h3>${r.title}</h3>

    <div class="register-form-bg">
      <div class="form-group">
        <label>Email ID</label>
        <input class="form-input" type="email" placeholder="" />
      </div>

      <div class="form-group">
        <div class="phone-label-row">
          <span>Country code</span>
          <span class="pipe">|</span>
          <span>Phone Number</span>
        </div>
        <div class="phone-row">
          <div class="phone-country">
            <select id="countrySelect">
              ${countryOptions}
            </select>
          </div>
          <input class="form-input" type="tel" placeholder="" style="flex:1" />
        </div>
      </div>

      <button class="btn-register">${r.buttonText}</button>
    </div>

    <p class="modal-switch-text" style="margin-top: 15px;">
      Already have an account ? <span class="modal-switch-link" onclick="openModal('login')">Member Login</span>
    </p>

    <div class="modal-divider"><span>Or</span></div>

    <div class="social-divider">
      <button class="btn-social">
        <svg viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        Continue with Google
      </button>
      <button class="btn-social">
        <svg viewBox="0 0 26 26" style="width:28px; height:28px;">
          <path fill="#000" d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.37.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.39-1.32 2.76-2.54 3.99zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
        </svg>
        Continue with Apple
      </button>
    </div>
  `;
})();
