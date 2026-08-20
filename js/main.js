// ============================================
// BICYCLE SHOP & ACCESSORIES STORE
// Main JavaScript v2.0
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  // Loading Screen
  var loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    window.addEventListener('load', function() {
      setTimeout(function() { loadingScreen.classList.add('hidden'); }, 500);
    });
    setTimeout(function() { loadingScreen.classList.add('hidden'); }, 3000);
  }

  // Dark Mode Init
  var savedDark = localStorage.getItem('darkMode') === 'true';
  if (savedDark) document.documentElement.classList.add('dark');

  // RTL Init
  var savedRTL = localStorage.getItem('rtlMode') === 'true';
  if (savedRTL) {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.classList.add('rtl');
  }

  // Scroll to Top
  var scrollTopBtn = document.getElementById('scroll-top');
  if (scrollTopBtn) {
    window.addEventListener('scroll', function() {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
    });
    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Animated Counters
  var counters = document.querySelectorAll('[data-counter]');
  if (counters.length > 0) {
    var animateCounter = function(el) {
      var target = parseInt(el.getAttribute('data-counter'));
      var duration = 2000;
      var step = target / (duration / 16);
      var current = 0;
      var timer = setInterval(function() {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = Math.floor(current).toLocaleString();
        if (el.getAttribute('data-suffix')) {
          el.textContent += el.getAttribute('data-suffix');
        }
      }, 16);
    };
    var counterObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(function(c) { counterObserver.observe(c); });
  }

  // FAQ Accordion
  document.querySelectorAll('.faq-question').forEach(function(q) {
    q.addEventListener('click', function() {
      var answer = q.nextElementSibling;
      document.querySelectorAll('.faq-answer.open').forEach(function(a) {
        if (a !== answer) a.classList.remove('open');
      });
      document.querySelectorAll('.faq-question.active').forEach(function(i) {
        if (i !== q) i.classList.remove('active');
      });
      answer.classList.toggle('open');
      q.classList.toggle('active');
    });
  });

  // Tabs
  document.querySelectorAll('[data-tab]').forEach(function(tab) {
    tab.addEventListener('click', function() {
      var group = tab.getAttribute('data-tab-group') || 'default';
      document.querySelectorAll('[data-tab-group="' + group + '"]').forEach(function(t) {
        t.classList.remove('active');
      });
      tab.classList.add('active');
      document.querySelectorAll('[data-tab-content-group="' + group + '"]').forEach(function(c) {
        c.classList.add('hidden');
      });
      var target = document.getElementById(tab.getAttribute('data-tab'));
      if (target) target.classList.remove('hidden');
    });
  });

  // Countdown Timer
  var countdownEl = document.getElementById('countdown');
  if (countdownEl) {
    var endDate = new Date();
    endDate.setDate(endDate.getDate() + 3);
    var updateCountdown = function() {
      var now = new Date();
      var diff = endDate - now;
      var days = Math.floor(diff / (1000 * 60 * 60 * 24));
      var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((diff % (1000 * 60)) / 1000);
      var d = document.getElementById('cd-days');
      var h = document.getElementById('cd-hours');
      var m = document.getElementById('cd-minutes');
      var s = document.getElementById('cd-seconds');
      if (d) d.textContent = String(days).padStart(2, '0');
      if (h) h.textContent = String(hours).padStart(2, '0');
      if (m) m.textContent = String(minutes).padStart(2, '0');
      if (s) s.textContent = String(seconds).padStart(2, '0');
    };
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  // Lazy Loading Images
  var lazyImages = document.querySelectorAll('.lazy-img');
  if (lazyImages.length > 0) {
    var imgObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.addEventListener('load', function() { img.classList.add('loaded'); });
          } else {
            img.classList.add('loaded');
          }
          imgObserver.unobserve(img);
        }
      });
    }, { rootMargin: '100px' });
    lazyImages.forEach(function(img) { imgObserver.observe(img); });
  }

  // Scroll Animations
  var scrollElements = document.querySelectorAll('[data-animate]');
  if (scrollElements.length > 0) {
    var animObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var anim = entry.target.getAttribute('data-animate');
          entry.target.style.animation = anim + ' 0.6s ease forwards';
          animObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    scrollElements.forEach(function(el) {
      el.style.opacity = '0';
      animObserver.observe(el);
    });
  }

  // Product Grid Filter
  var filterBtns = document.querySelectorAll('[data-filter]');
  if (filterBtns.length > 0) {
    filterBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        var filter = btn.getAttribute('data-filter');
        filterBtns.forEach(function(b) {
          b.classList.remove('bg-[#E53935]', 'text-white');
          b.classList.add('bg-white/10', 'text-white/70');
        });
        btn.classList.add('bg-[#E53935]', 'text-white');
        btn.classList.remove('bg-white/10', 'text-white/70');
        document.querySelectorAll('[data-product]').forEach(function(product) {
          if (filter === 'all' || product.getAttribute('data-product') === filter) {
            product.style.display = '';
            product.style.animation = 'fadeInUp 0.4s ease forwards';
          } else {
            product.style.display = 'none';
          }
        });
      });
    });
  }

  // Sort
  var sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', function() {
      var grid = document.getElementById('product-grid');
      if (grid) {
        grid.style.opacity = '0.5';
        setTimeout(function() { grid.style.opacity = '1'; }, 300);
      }
    });
  }

  // Range Slider
  var priceRange = document.getElementById('price-range');
  var priceLabel = document.getElementById('price-label');
  if (priceRange && priceLabel) {
    priceRange.addEventListener('input', function() {
      priceLabel.textContent = '\u20B9' + parseInt(priceRange.value).toLocaleString();
    });
  }

  // Quantity Controls
  document.querySelectorAll('.qty-plus').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var input = btn.parentElement.querySelector('input');
      if (input) input.value = parseInt(input.value) + 1;
    });
  });
  document.querySelectorAll('.qty-minus').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var input = btn.parentElement.querySelector('input');
      if (input && parseInt(input.value) > 1) input.value = parseInt(input.value) - 1;
    });
  });

  // Newsletter Form
  document.querySelectorAll('.newsletter-form').forEach(function(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var input = form.querySelector('input');
      if (input && input.value) {
        input.value = '';
        alert('Thank you for subscribing to our cycling newsletter!');
      }
    });
  });

  // Hero Slider (Home 2)
  var heroSlides = document.querySelectorAll('.hero-slide');
  var currentSlide = 0;
  if (heroSlides.length > 1) {
    setInterval(function() {
      heroSlides[currentSlide].classList.add('hidden');
      heroSlides[currentSlide].classList.remove('block');
      currentSlide = (currentSlide + 1) % heroSlides.length;
      heroSlides[currentSlide].classList.remove('hidden');
      heroSlides[currentSlide].classList.add('block');
    }, 5000);
  }
});
