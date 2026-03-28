// =============================================
// project-detail.js — URL-dəki slug-a görə layihəni Supabase-dən çəkir
// =============================================

(function () {
  var SUPABASE_URL = 'https://msvsotdirksefmfvvzua.supabase.co';
  var SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zdnNvdGRpcmtzZWZtZnZ2enVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1NDMxODgsImV4cCI6MjA5MDExOTE4OH0.yoO4pIXkw-PkPPOV5WfK9DTQvs8I7FNYcyvuXafgymk';

  var sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);

  function escHtml(s) {
    return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  async function loadProject() {
    var params = new URLSearchParams(window.location.search);
    var slug = params.get('slug');

    if (!slug) {
      window.location.href = 'index.html';
      return;
    }

    // Layihə məlumatlarını çək
    var projResult = await sb
      .from('projects')
      .select('*')
      .eq('slug', slug)
      .eq('is_published', true)
      .single();

    if (projResult.error || !projResult.data) {
      window.location.href = 'index.html';
      return;
    }

    var project = projResult.data;

    // Səhifə başlığını yenilə
    var topbarTitle = project.title;
    if (project.description) topbarTitle += ' / ' + project.description;
    document.title = project.title + ' | Portfolio';
    document.getElementById('proj-topbar-title').textContent = topbarTitle;

    // Qalereya şəkillərini çək
    var imgResult = await sb
      .from('project_images')
      .select('url')
      .eq('project_id', project.id)
      .order('sort_order');

    var gallery = document.getElementById('sliderTrack');
    var allImages = [];

    // Cover şəkli birinci olsun
    if (project.cover_image) {
      allImages.push(project.cover_image);
    }

    // Qalereya şəkilləri
    if (imgResult.data && imgResult.data.length) {
      imgResult.data.forEach(function (img) {
        // Cover-i dublikat etmə
        if (img.url !== project.cover_image) {
          allImages.push(img.url);
        }
      });
    }

    if (!allImages.length) {
      gallery.innerHTML = '';
      return;
    }

    gallery.innerHTML = allImages.map(function (url) {
      return (
        '<div class="proj-gallery__item">' +
          '<img src="' + escHtml(url) + '" alt="' + escHtml(project.title) + '" loading="lazy">' +
        '</div>'
      );
    }).join('');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadProject);
  } else {
    loadProject();
  }
})();
