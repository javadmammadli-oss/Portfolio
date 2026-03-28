// =============================================
// site-settings.js — Supabase settings cədvəlindən sayt məlumatlarını çəkir
// =============================================

(function () {
  var SUPABASE_URL = 'https://msvsotdirksefmfvvzua.supabase.co';
  var SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zdnNvdGRpcmtzZWZtZnZ2enVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1NDMxODgsImV4cCI6MjA5MDExOTE4OH0.yoO4pIXkw-PkPPOV5WfK9DTQvs8I7FNYcyvuXafgymk';

  var sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);

  // Əlaqə / sosial məlumatlarını tətbiq et (data-setting elementləri)
  function applyContactSettings(s) {
    var email = s.contact_email || '';
    if (email) {
      document.querySelectorAll('[data-setting="contact_email"]').forEach(function (el) {
        el.textContent = email;
        if (el.tagName === 'A') el.href = 'mailto:' + email;
      });
    }

    var phone = s.contact_phone || '';
    if (phone) {
      document.querySelectorAll('[data-setting="contact_phone"]').forEach(function (el) {
        el.textContent = phone;
        if (el.tagName === 'A') el.href = 'tel:' + phone.replace(/\s/g, '');
      });
    }

    var socials = ['social_instagram', 'social_facebook', 'social_behance'];
    socials.forEach(function (key) {
      var val = s[key] || '';
      if (val) {
        document.querySelectorAll('[data-setting="' + key + '"]').forEach(function (el) {
          el.href = val;
        });
      }
    });
  }

  async function loadSettings() {
    var result = await sb.from('settings').select('key, value');
    if (result.error || !result.data) return;

    var s = {};
    result.data.forEach(function (row) {
      s[row.key] = row.value || '';
    });

    // Global cache — i18n.js tərəfindən oxunur
    window._siteSettings = s;

    // Əlaqə/sosial məlumatlarını tətbiq et
    applyContactSettings(s);

    // i18n sisteminə settings-i override kimi tətbiq et
    if (typeof window.applyLang === 'function') {
      window.applyLang(window.currentLang || 'az');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadSettings);
  } else {
    loadSettings();
  }
})();
