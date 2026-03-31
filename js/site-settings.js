(function () {
  var SUPABASE_URL = 'https://msvsotdirksefmfvvzua.supabase.co';
  var SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zdnNvdGRpcmtzZWZtZnZ2enVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1NDMxODgsImV4cCI6MjA5MDExOTE4OH0.yoO4pIXkw-PkPPOV5WfK9DTQvs8I7FNYcyvuXafgymk';

  var sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);

  function applyContactSettings(s) {
    if (s.contact_email) {
      document.querySelectorAll('[data-setting="contact_email"]').forEach(function (el) {
        el.textContent = s.contact_email;
        if (el.tagName === 'A') el.href = 'mailto:' + s.contact_email;
      });
    }

    if (s.contact_phone) {
      document.querySelectorAll('[data-setting="contact_phone"]').forEach(function (el) {
        el.textContent = s.contact_phone;
        if (el.tagName === 'A') el.href = 'tel:' + s.contact_phone.replace(/\s/g, '');
      });
    }

    ['social_instagram', 'social_facebook', 'social_behance'].forEach(function (key) {
      if (s[key]) {
        document.querySelectorAll('[data-setting="' + key + '"]').forEach(function (el) {
          el.href = s[key];
        });
      }
    });
  }

  async function loadSettings() {
    var result = await sb.from('settings').select('key, value');
    if (result.error || !result.data) return;

    var s = {};
    result.data.forEach(function (row) { s[row.key] = row.value || ''; });

    window._siteSettings = s;
    applyContactSettings(s);

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
