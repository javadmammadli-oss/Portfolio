document.addEventListener('DOMContentLoaded', function () {

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Header scroll effect
  const header = document.querySelector('.oi-header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // Hero scroll-driven video
  var heroVideo = document.querySelector('.oi-hero__video');
  if (heroVideo) {
    var reversing  = false;
    var reverseRaf = null;
    var stopTimer  = null;

    function videoFallback() {
      heroVideo.style.display = 'none';
      var hero = document.querySelector('.mod-hero');
      if (hero) {
        hero.style.backgroundImage    = "url('img/hero/hero-bg.jpg')";
        hero.style.backgroundSize     = 'cover';
        hero.style.backgroundPosition = 'center';
      }
    }

    heroVideo.addEventListener('error', videoFallback);
    heroVideo.pause();
    heroVideo.currentTime = 0;

    function stopAll() {
      reversing = false;
      if (!heroVideo.paused) heroVideo.pause();
      if (reverseRaf) { clearInterval(reverseRaf); reverseRaf = null; }
    }

    var REVERSE_MS = 50; // seek interval in ms (~20fps) — fewer seeks = smoother
    function startReverse() {
      if (reverseRaf) return;
      reverseRaf = setInterval(function () {
        if (!reversing) { clearInterval(reverseRaf); reverseRaf = null; return; }
        if (heroVideo.seeking) return; // wait for previous seek to finish
        var newTime = Math.max(0, heroVideo.currentTime - (REVERSE_MS / 1000) * heroVideo.playbackRate);
        heroVideo.currentTime = newTime;
        if (newTime <= 0) stopAll();
      }, REVERSE_MS);
    }

    heroVideo.playbackRate = 4.5;

    window.addEventListener('wheel', function (e) {
      var dur = heroVideo.duration;
      if (!dur) return;

      // Only intercept at the very top of the page
      if (window.scrollY !== 0) return;

      var goingDown = e.deltaY > 0;
      var atEnd     = heroVideo.currentTime >= dur - 0.05;
      var atStart   = heroVideo.currentTime <= 0.05;

      // Video done → let page scroll down normally
      if (goingDown && atEnd)    return;
      // Video at start → nothing above, let browser handle
      if (!goingDown && atStart) return;

      e.preventDefault();
      clearTimeout(stopTimer);

      if (goingDown) {
        if (reversing) stopAll();
        if (heroVideo.paused) heroVideo.play();
      } else {
        if (!heroVideo.paused) heroVideo.pause();
        if (!reversing) {
          reversing = true;
          startReverse();
        }
      }

      stopTimer = setTimeout(stopAll, 120);
    }, { passive: false });
  }

  // Contact form
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let valid = true;

      const name = document.getElementById('formName');
      const phone = document.getElementById('formPhone');
      const t = window.I18N && (window.I18N[window.currentLang] || window.I18N.az);

      if (!name || name.value.trim().length < 2) {
        showError(name, t ? t.form_err_name : 'Ad tələb olunur');
        valid = false;
      } else {
        clearError(name);
      }

      if (!phone || phone.value.trim().length < 7) {
        showError(phone, t ? t.form_err_phone : 'Düzgün telefon daxil edin');
        valid = false;
      } else {
        clearError(phone);
      }

      if (valid) {
        form.innerHTML = '<p class="oi-form__success">' + (t ? t.form_success : 'Mesajınız göndərildi!') + '</p>';
      }
    });
  }

  function showError(input, msg) {
    if (!input) return;
    input.classList.add('error');
    let errEl = input.parentNode.querySelector('.oi-form__error');
    if (!errEl) {
      errEl = document.createElement('span');
      errEl.className = 'oi-form__error';
      input.parentNode.appendChild(errEl);
    }
    errEl.textContent = msg;
  }

  function clearError(input) {
    if (!input) return;
    input.classList.remove('error');
    const errEl = input.parentNode.querySelector('.oi-form__error');
    if (errEl) errEl.remove();
  }

  // Scroll animations
  const animEls = document.querySelectorAll(
    '.oi-service__card, .oi-about__inner, .oi-contacts__inner, .oi-thumb, .proj-desc__inner'
  );

  if (animEls.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    animEls.forEach(function (el) {
      el.classList.add('anim-fade');
      observer.observe(el);
    });
  }

});
