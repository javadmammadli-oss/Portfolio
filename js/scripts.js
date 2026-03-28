// =============================================
// scripts.js — Portfolio saytının əsas JS faylı
// =============================================

document.addEventListener('DOMContentLoaded', function () {

  // ----- Smooth scroll (anchor linklər) -----
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ----- Header scroll effekti -----
  const header = document.querySelector('.oi-header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // ----- Əlaqə formu validasiyası -----
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let valid = true;

      const name = document.getElementById('formName');
      const phone = document.getElementById('formPhone');

      var t = (window.I18N && window.currentLang) ? (window.I18N[window.currentLang] || window.I18N.az) : window.I18N && window.I18N.az;

      // Ad yoxlaması
      if (!name || name.value.trim().length < 2) {
        showError(name, t ? t.form_err_name : 'Ad tələb olunur');
        valid = false;
      } else {
        clearError(name);
      }

      // Telefon yoxlaması
      if (!phone || phone.value.trim().length < 7) {
        showError(phone, t ? t.form_err_phone : 'Düzgün telefon daxil edin');
        valid = false;
      } else {
        clearError(phone);
      }

      if (valid) {
        var successMsg = t ? t.form_success : 'Mesajınız göndərildi! Tezliklə əlaqə saxlayacağıq.';
        form.innerHTML = '<p class="oi-form__success">' + successMsg + '</p>';
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

  // ----- Scroll animasiyaları -----
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
