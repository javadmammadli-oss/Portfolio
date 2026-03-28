// =============================================
// portfolio.js — Supabase-dən layihələri çəkib grid-ə render edir
// =============================================

(function () {
  var SUPABASE_URL = 'https://msvsotdirksefmfvvzua.supabase.co';
  var SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zdnNvdGRpcmtzZWZtZnZ2enVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1NDMxODgsImV4cCI6MjA5MDExOTE4OH0.yoO4pIXkw-PkPPOV5WfK9DTQvs8I7FNYcyvuXafgymk';

  var sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);

  function escHtml(s) {
    return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  async function loadPortfolio() {
    var grid = document.getElementById('portfolio-grid');
    if (!grid) return;

    var result = await sb
      .from('projects')
      .select('id, title, slug, description, client, cover_image')
      .eq('is_published', true)
      .order('sort_order');

    if (result.error || !result.data || !result.data.length) return;

    grid.innerHTML = result.data.map(function (p) {
      return (
        '<a href="project.html?slug=' + encodeURIComponent(p.slug) + '" class="oi-thumb">' +
          '<picture class="oi-thumb__pic">' +
            '<img src="' + escHtml(p.cover_image || '') + '" alt="' + escHtml(p.title) + '" loading="lazy">' +
          '</picture>' +
          '<div class="oi-thumb__box">' +
            '<h4 class="oi-thumb__area">' + escHtml(p.description || '') + '</h4>' +
            '<h5 class="oi-thumb__location">' + escHtml(p.client || '') + '</h5>' +
            '<h3 class="oi-thumb__title">' + escHtml(p.title) + '</h3>' +
          '</div>' +
        '</a>'
      );
    }).join('');

    // Scroll animasiyalarını yeni elementlərə tətbiq et
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });

      grid.querySelectorAll('.oi-thumb').forEach(function (el) {
        el.classList.add('anim-fade');
        observer.observe(el);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadPortfolio);
  } else {
    loadPortfolio();
  }
})();
