document.addEventListener('DOMContentLoaded', function () {

  var gallery = document.querySelector('.proj-gallery');
  if (!gallery) return;

  function isMobile() { return window.innerWidth <= 768; }

  // Mouse wheel → horizontal scroll (desktop only)
  gallery.addEventListener('wheel', function (e) {
    if (isMobile()) return;
    e.preventDefault();
    gallery.scrollLeft += (e.deltaY + e.deltaX) * 15;
    updateThumb();
  }, { passive: false });

  // Mouse drag (desktop only)
  var isDragging = false;
  var startX = 0;
  var scrollStart = 0;
  var moved = false;

  gallery.addEventListener('mousedown', function (e) {
    if (isMobile() || e.target.closest('.proj-scrollbar')) return;
    isDragging = true;
    moved = false;
    startX = e.pageX;
    scrollStart = gallery.scrollLeft;
    gallery.classList.add('grabbing');
    e.preventDefault();
  });

  document.addEventListener('mousemove', function (e) {
    if (!isDragging) return;
    var dx = e.pageX - startX;
    if (Math.abs(dx) > 4) moved = true;
    gallery.scrollLeft = scrollStart - dx;
    updateThumb();
  });

  document.addEventListener('mouseup', function () {
    isDragging = false;
    gallery.classList.remove('grabbing');
  });

  // Touch drag (desktop only)
  var touchX = 0;
  var touchScroll = 0;

  gallery.addEventListener('touchstart', function (e) {
    if (isMobile()) return;
    touchX = e.touches[0].pageX;
    touchScroll = gallery.scrollLeft;
    moved = false;
  }, { passive: true });

  gallery.addEventListener('touchmove', function (e) {
    if (isMobile()) return;
    var dx = e.touches[0].pageX - touchX;
    if (Math.abs(dx) > 4) moved = true;
    gallery.scrollLeft = touchScroll - dx;
    updateThumb();
  }, { passive: true });

  // Keyboard navigation
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') gallery.scrollBy({ left:  500, behavior: 'smooth' });
    if (e.key === 'ArrowLeft')  gallery.scrollBy({ left: -500, behavior: 'smooth' });
    if (e.key === 'Escape')     history.back();
  });

  gallery.addEventListener('scroll', updateThumb);

  // Custom scrollbar (desktop only)
  var scrollbar = document.createElement('div');
  scrollbar.className = 'proj-scrollbar';
  scrollbar.innerHTML = '<div class="proj-scrollbar__track"><div class="proj-scrollbar__thumb"></div></div>';
  if (!isMobile()) document.body.appendChild(scrollbar);

  var thumb = scrollbar.querySelector('.proj-scrollbar__thumb');
  var track = scrollbar.querySelector('.proj-scrollbar__track');

  function updateThumb() {
    if (isMobile()) return;
    var scrollWidth = gallery.scrollWidth;
    var clientWidth = gallery.clientWidth;
    if (scrollWidth <= clientWidth) {
      scrollbar.style.display = 'none';
      return;
    }
    scrollbar.style.display = 'block';
    var ratio = clientWidth / scrollWidth;
    var thumbWidth = Math.max(40, track.clientWidth * ratio);
    var maxScroll = scrollWidth - clientWidth;
    var maxThumbLeft = track.clientWidth - thumbWidth;
    thumb.style.width = thumbWidth + 'px';
    thumb.style.left = (gallery.scrollLeft / maxScroll) * maxThumbLeft + 'px';
  }

  // Thumb drag
  var thumbDragging = false;
  var thumbStartX = 0;
  var thumbScrollStart = 0;

  thumb.addEventListener('mousedown', function (e) {
    thumbDragging = true;
    thumbStartX = e.pageX;
    thumbScrollStart = gallery.scrollLeft;
    thumb.classList.add('dragging');
    e.preventDefault();
    e.stopPropagation();
  });

  document.addEventListener('mousemove', function (e) {
    if (!thumbDragging) return;
    var dx = e.pageX - thumbStartX;
    var ratio = (gallery.scrollWidth - gallery.clientWidth) / (track.clientWidth - thumb.offsetWidth);
    gallery.scrollLeft = thumbScrollStart + dx * ratio;
    updateThumb();
  });

  document.addEventListener('mouseup', function () {
    if (thumbDragging) {
      thumbDragging = false;
      thumb.classList.remove('dragging');
    }
  });

  track.addEventListener('click', function (e) {
    if (e.target === thumb) return;
    var ratio = (e.clientX - track.getBoundingClientRect().left) / track.clientWidth;
    gallery.scrollLeft = ratio * (gallery.scrollWidth - gallery.clientWidth);
    updateThumb();
  });

  setTimeout(updateThumb, 100);
  window.addEventListener('resize', updateThumb);

  // Image click → lightbox
  gallery.addEventListener('click', function (e) {
    if (moved) return;
    var img = e.target;
    if (img.tagName !== 'IMG' || !img.closest('.proj-gallery__item')) return;
    var items = Array.from(gallery.querySelectorAll('.proj-gallery__item img'));
    var index = items.indexOf(img);
    if (index < 0) return;
    openLightbox(index, items.map(function (i) { return i.src; }));
  });

  (function () {
    var s = document.createElement('style');
    s.textContent = '.proj-gallery__item img { cursor: zoom-in; }';
    document.head.appendChild(s);
  })();

  function openLightbox(startIndex, srcs) {
    var current = startIndex;
    var total = srcs.length;

    var lb = document.createElement('div');
    lb.className = 'oi-lightbox';
    lb.innerHTML =
      '<div class="oi-lightbox__overlay"></div>' +
      '<div class="oi-lightbox__content"><img class="oi-lightbox__img" src="" alt=""></div>' +
      '<button class="oi-lightbox__close">&#x2715;</button>' +
      '<button class="oi-lightbox__nav oi-lightbox__nav--prev">&#8249;</button>' +
      '<button class="oi-lightbox__nav oi-lightbox__nav--next">&#8250;</button>' +
      '<div class="oi-lightbox__counter"><span class="lb-cur"></span> / ' + total + '</div>';

    document.body.appendChild(lb);

    var lbImg = lb.querySelector('.oi-lightbox__img');
    var lbCur = lb.querySelector('.lb-cur');

    function show(i) {
      current = (i + total) % total;
      lbImg.src = srcs[current];
      lbCur.textContent = current + 1;
    }

    show(startIndex);

    lb.querySelector('.oi-lightbox__nav--prev').addEventListener('click', function () { show(current - 1); });
    lb.querySelector('.oi-lightbox__nav--next').addEventListener('click', function () { show(current + 1); });
    lb.querySelector('.oi-lightbox__overlay').addEventListener('click', closeLb);
    lb.querySelector('.oi-lightbox__close').addEventListener('click', closeLb);

    document.addEventListener('keydown', lbKeys);

    function lbKeys(e) {
      if (e.key === 'Escape')     closeLb();
      if (e.key === 'ArrowRight') show(current + 1);
      if (e.key === 'ArrowLeft')  show(current - 1);
    }

    function closeLb() {
      document.body.removeChild(lb);
      document.removeEventListener('keydown', lbKeys);
    }
  }

});
