function renderNavbar() {
  var container = document.getElementById("navbar-container");
  if (!container) return;

  var savedDark = localStorage.getItem("darkMode") === "true";
  var savedRTL = localStorage.getItem("rtlMode") === "true";

  container.innerHTML = '\
    <nav id="main-navbar" class="fixed top-0 left-0 w-full z-50 transition-all duration-300">\
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\
        <div class="flex items-center justify-between h-16 lg:h-[72px]">\
          <!-- Logo -->\
          <a href="index.html" class="flex items-center gap-2.5 shrink-0">\
            <div class="w-9 h-9 bg-[#E53935] rounded-xl flex items-center justify-center shadow-lg shadow-red-500/20">\
              <i class="fa-solid fa-bicycle text-white text-sm"></i>\
            </div>\
            <span class="nav-logo-text text-white font-bold text-lg tracking-tight hidden sm:block">Bicycle<span class="text-[#E53935]">Shop</span></span>\
          </a>\
          <!-- Desktop Nav -->\
          <nav class="hidden lg:flex items-center gap-1">\
            <div class="relative group">\
              <button class="nav-link-text text-white/80 hover:text-white transition px-3.5 py-2 text-sm font-medium flex items-center gap-1.5 rounded-lg hover:bg-white/5">\
                Home <i class="fa-solid fa-chevron-down text-[10px] opacity-60"></i>\
              </button>\
              <div class="absolute top-full left-0 mt-1 bg-white dark:bg-[#1E1E1E] shadow-xl rounded-xl py-2 w-44 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100 dark:border-[#333]">\
                <a href="index.html" class="block px-4 py-2.5 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-[#252525] hover:text-[#E53935] text-sm font-medium transition">Home 1</a>\
                <a href="home2.html" class="block px-4 py-2.5 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-[#252525] hover:text-[#E53935] text-sm font-medium transition">Home 2</a>\
              </div>\
            </div>\
            <a href="about.html" class="nav-link-text text-white/80 hover:text-white transition px-3.5 py-2 text-sm font-medium rounded-lg hover:bg-white/5">About</a>\
            <a href="accessories.html" class="nav-link-text text-white/80 hover:text-white transition px-3.5 py-2 text-sm font-medium rounded-lg hover:bg-white/5">Accessories</a>\
            <a href="services.html" class="nav-link-text text-white/80 hover:text-white transition px-3.5 py-2 text-sm font-medium rounded-lg hover:bg-white/5">Services</a>\
            <a href="faq.html" class="nav-link-text text-white/80 hover:text-white transition px-3.5 py-2 text-sm font-medium rounded-lg hover:bg-white/5">FAQ</a>\
            <a href="contact.html" class="nav-link-text text-white/80 hover:text-white transition px-3.5 py-2 text-sm font-medium rounded-lg hover:bg-white/5">Contact</a>\
          </nav>\
          <!-- Right Icons -->\
          <div class="flex items-center gap-1.5" dir="ltr">\
            <button id="dark-toggle" class="nav-icon-btn flex w-9 h-9 rounded-lg items-center justify-center transition" aria-label="Toggle dark mode">\
              <i class="fa-solid fa-moon text-sm"></i>\
            </button>\
            <button class="action-btn nav-icon-btn flex w-9 h-9 rounded-lg items-center justify-center transition" id="btn-rtl-toggle" aria-label="Toggle LTR/RTL Layout" title="Switch layout direction">\
              <span style="font-size: 14px; font-weight: 700;">⇄</span>\
            </button>\
            <a href="login.html" class="nav-login-btn hidden lg:inline-flex items-center gap-1.5 border border-white/20 hover:border-[#E53935] text-white/90 hover:text-white text-sm font-medium px-3.5 py-1.5 rounded-lg transition hover:bg-[#E53935]/10">\
              <i class="fa-solid fa-user text-xs"></i> Login\
            </a>\
            <a href="login.html" class="hidden lg:inline-flex items-center gap-1.5 bg-[#E53935] hover:bg-[#C62828] text-white text-sm font-medium px-4 py-1.5 rounded-lg transition shadow-lg shadow-red-500/25">\
              <i class="fa-solid fa-user-plus text-xs"></i> Sign Up\
            </a>\
            <button id="mobile-menu-btn" class="nav-icon-btn lg:hidden w-9 h-9 text-white/70 hover:text-white flex items-center justify-center" aria-label="Open menu">\
              <i class="fa-solid fa-bars text-lg"></i>\
            </button>\
          </div>\
        </div>\
      </div>\
    </nav>\
    <!-- Mobile Menu -->\
    <div id="mobile-menu" class="fixed top-0 right-0 w-[300px] h-full bg-[#0B1622] z-[60] transform translate-x-full transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-2xl overflow-y-auto">\
      <div class="flex flex-col h-full">\
        <!-- Mobile Menu Header -->\
        <div class="flex items-center justify-between px-5 py-4 border-b border-white/10">\
          <span class="text-white font-bold text-xl tracking-tight">Bicycle<span class="text-[#E53935]">Shop</span></span>\
          <button id="close-mobile-menu" class="w-8 h-8 text-white/60 hover:text-white flex items-center justify-center rounded-lg hover:bg-white/10 transition" aria-label="Close menu">\
            <i class="fa-solid fa-xmark"></i>\
          </button>\
        </div>\
        <!-- Mobile Menu Body -->\
        <div class="flex-1 overflow-y-auto px-4 py-4">\
          <nav class="space-y-1">\
            <div class="mobile-nav-item">\
              <div class="flex items-center justify-between">\
                <a href="index.html" class="mobile-link block text-white/80 hover:text-white transition py-3 px-3 rounded-lg text-sm font-medium w-full hover:bg-white/5">Home</a>\
                <button class="mobile-dropdown-btn text-white/60 hover:text-white transition px-2 py-3 rounded-lg hover:bg-white/5" aria-label="Toggle dropdown">\
                  <i class="fa-solid fa-chevron-down text-xs transition-transform duration-200"></i>\
                </button>\
              </div>\
              <div class="mobile-dropdown hidden pl-4 space-y-1 mt-1">\
                <a href="index.html" class="mobile-link block text-white/50 hover:text-[#E53935] transition py-2.5 px-3 rounded-lg text-sm">Home 1</a>\
                <a href="home2.html" class="mobile-link block text-white/50 hover:text-[#E53935] transition py-2.5 px-3 rounded-lg text-sm">Home 2</a>\
              </div>\
            </div>\
            <a href="about.html" class="mobile-link block text-white/80 hover:text-white transition py-3 px-3 rounded-lg text-sm font-medium hover:bg-white/5">About</a>\
            <a href="accessories.html" class="mobile-link block text-white/80 hover:text-white transition py-3 px-3 rounded-lg text-sm font-medium hover:bg-white/5">Accessories</a>\
            <a href="services.html" class="mobile-link block text-white/80 hover:text-white transition py-3 px-3 rounded-lg text-sm font-medium hover:bg-white/5">Services</a>\
            <a href="faq.html" class="mobile-link block text-white/80 hover:text-white transition py-3 px-3 rounded-lg text-sm font-medium hover:bg-white/5">FAQ</a>\
            <a href="contact.html" class="mobile-link block text-white/80 hover:text-white transition py-3 px-3 rounded-lg text-sm font-medium hover:bg-white/5">Contact</a>\
          </nav>\
          <hr class="border-white/10 my-4" />\
          <div class="space-y-1">\
            <button id="mobile-dark-toggle" class="flex items-center gap-3 text-white/70 hover:text-white transition py-3 px-3 rounded-lg text-sm font-medium w-full hover:bg-white/5">\
              <i class="fa-solid fa-moon text-sm w-5 text-center"></i>\
              <span>Dark Mode</span>\
              <span id="mobile-dark-status" class="ml-auto text-xs text-white/40 font-medium">OFF</span>\
            </button>\
            <button class="action-btn flex items-center gap-3 text-white/70 hover:text-white transition py-3 px-3 rounded-lg text-sm font-medium w-full hover:bg-white/5" id="mobile-rtl-toggle" aria-label="Toggle LTR/RTL Layout" title="Switch layout direction">\
              <span style="font-size: 14px; font-weight: 700; width: 20px; text-align: center;">⇄</span>\
              <span>RTL Mode</span>\
              <span id="mobile-rtl-status" class="ml-auto text-xs text-white/40 font-medium">OFF</span>\
            </button>\
          </div>\
          <hr class="border-white/10 my-4" />\
          <div class="space-y-3">\
            <a href="login.html" class="mobile-link flex items-center justify-center gap-2 border border-white/20 hover:border-[#E53935] hover:bg-[#E53935]/10 text-white/90 font-medium py-3 px-4 rounded-lg transition w-full">\
              <i class="fa-solid fa-user text-xs"></i> Login\
            </a>\
            <a href="login.html" class="mobile-link flex items-center justify-center gap-2 bg-[#E53935] hover:bg-[#C62828] text-white font-medium py-3 px-4 rounded-lg transition w-full shadow-lg shadow-red-500/25">\
              <i class="fa-solid fa-user-plus text-xs"></i> Sign Up\
            </a>\
          </div>\
        </div>\
      </div>\
    </div>\
    <div id="mobile-overlay" class="fixed inset-0 bg-black/60 z-[55] hidden transition-opacity duration-300"></div>';

  // ==========================================
  // DARK MODE
  // ==========================================
  function applyDarkMode(dark) {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", dark);
    updateDarkIcons(dark);
    updateNavbar();
  }

  function updateDarkIcons(dark) {
    var dt = document.getElementById("dark-toggle");
    if (dt) {
      dt.innerHTML = dark
        ? '<i class="fa-solid fa-sun text-sm"></i>'
        : '<i class="fa-solid fa-moon text-sm"></i>';
    }
    var ms = document.getElementById("mobile-dark-status");
    if (ms) ms.textContent = dark ? "ON" : "OFF";
  }

  applyDarkMode(savedDark);

  var darkToggle = document.getElementById("dark-toggle");
  if (darkToggle) {
    darkToggle.addEventListener("click", function () {
      applyDarkMode(!document.documentElement.classList.contains("dark"));
    });
  }

  var mobileDarkToggle = document.getElementById("mobile-dark-toggle");
  if (mobileDarkToggle) {
    mobileDarkToggle.addEventListener("click", function () {
      applyDarkMode(!document.documentElement.classList.contains("dark"));
    });
  }

  // ==========================================
  // RTL MODE
  // ==========================================
  function applyRTL(rtl) {
    document.documentElement.setAttribute("dir", rtl ? "rtl" : "ltr");
    if (rtl) {
      document.documentElement.classList.add("rtl");
    } else {
      document.documentElement.classList.remove("rtl");
    }
    localStorage.setItem("rtlMode", rtl);
    var rs = document.getElementById("mobile-rtl-status");
    if (rs) rs.textContent = rtl ? "ON" : "OFF";
  }

  applyRTL(savedRTL);

  document.addEventListener("click", function (e) {
    var target = e.target.closest("#btn-rtl-toggle, #rtl-toggle, #mobile-rtl-toggle");
    if (target) {
      applyRTL(document.documentElement.getAttribute("dir") !== "rtl");
    }
  });

  // ==========================================
  // MOBILE MENU
  // ==========================================
  var mobileMenuBtn = document.getElementById("mobile-menu-btn");
  var mobileMenu = document.getElementById("mobile-menu");
  var closeMobileMenu = document.getElementById("close-mobile-menu");
  var mobileOverlay = document.getElementById("mobile-overlay");

  function openMobileMenu() {
    mobileMenu.classList.remove("translate-x-full");
    mobileOverlay.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  function closeMobileMenuFn() {
    mobileMenu.classList.add("translate-x-full");
    mobileOverlay.classList.add("hidden");
    document.body.style.overflow = "";
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener("click", openMobileMenu);
  if (closeMobileMenu) closeMobileMenu.addEventListener("click", closeMobileMenuFn);
  if (mobileOverlay) mobileOverlay.addEventListener("click", closeMobileMenuFn);

  document.querySelectorAll(".mobile-link").forEach(function (link) {
    link.addEventListener("click", closeMobileMenuFn);
  });

  document.querySelectorAll(".mobile-dropdown-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var dropdown = this.closest(".mobile-nav-item").querySelector(".mobile-dropdown");
      var icon = this.querySelector("i");
      dropdown.classList.toggle("hidden");
      icon.classList.toggle("rotate-180");
    });
  });

  // ==========================================
  // STICKY NAVBAR ON SCROLL
  // ==========================================
  var mainNavbar = document.getElementById("main-navbar");
  function updateNavbar() {
    if (!mainNavbar) return;
    if (window.scrollY > 50) {
      mainNavbar.classList.add("navbar-scrolled");
    } else {
      mainNavbar.classList.remove("navbar-scrolled");
    }
  }
  if (mainNavbar) {
    window.addEventListener("scroll", updateNavbar);
    updateNavbar();
  }

  // ==========================================
  // ESCAPE KEY
  // ==========================================
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeMobileMenuFn();
    }
  });

  // ==========================================
  // ACTIVE NAV LINK HIGHLIGHT
  // ==========================================
  function highlightActiveNav() {
    var path = window.location.pathname.split("/").pop();
    if (!path || path === "" || path === "/") path = "index.html";

    var desktopLinks = document.querySelectorAll("#main-navbar nav > a, #main-navbar nav .group div a");
    desktopLinks.forEach(function (link) {
      var href = link.getAttribute("href");
      if (href === path) {
        link.classList.remove("text-white/80", "hover:bg-white/5", "text-gray-700", "dark:text-gray-200");
        if (link.closest(".group")) {
          link.classList.add("bg-[#E53935]/15", "text-[#E53935]", "font-bold");
          var homeBtn = link.closest(".group").querySelector("button");
          if (homeBtn) {
            homeBtn.classList.remove("text-white/80", "hover:bg-white/5");
            homeBtn.classList.add("bg-[#E53935]", "text-white", "font-semibold", "shadow-sm");
          }
        } else {
          link.classList.add("bg-[#E53935]", "text-white", "font-semibold", "shadow-sm");
        }
      }
    });

    var mobileLinks = document.querySelectorAll("#mobile-menu a.mobile-link");
    mobileLinks.forEach(function (link) {
      var href = link.getAttribute("href");
      if (href === path) {
        link.classList.remove("text-white/80", "text-white/50", "hover:bg-white/5");
        link.classList.add("bg-[#E53935]", "text-white", "font-semibold", "shadow-sm");
      }
    });
  }

  highlightActiveNav();
}

renderNavbar();
