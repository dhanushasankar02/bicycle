function renderFooter() {
  var footerContainer = document.getElementById("footer-container");
  if (!footerContainer) return;

  footerContainer.innerHTML = '\
    <footer class="bg-[#0a0a0a] text-gray-400 pt-16 pb-6">\
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\
        <!-- Top Section -->\
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">\
          <!-- About -->\
          <div class="lg:col-span-1">\
            <div class="flex items-center gap-2.5 mb-5">\
              <div class="w-9 h-9 bg-[#E53935] rounded-xl flex items-center justify-center">\
                <i class="fa-solid fa-bicycle text-white text-sm"></i>\
              </div>\
              <span class="text-white font-bold text-lg">Bicycle<span class="text-[#E53935]">Shop</span></span>\
            </div>\
            <p class="text-gray-500 text-sm leading-relaxed mb-5">\
              Your premium bicycle store since 2010. We offer the finest bicycles, accessories, and expert service to keep you riding with confidence.\
            </p>\
            <div class="flex gap-2.5">\
              <a href="#" class="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-500 hover:bg-[#E53935] hover:text-white transition-all duration-300" aria-label="Facebook">\
                <i class="fab fa-facebook-f text-sm"></i>\
              </a>\
              <a href="#" class="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-500 hover:bg-[#E53935] hover:text-white transition-all duration-300" aria-label="Instagram">\
                <i class="fab fa-instagram text-sm"></i>\
              </a>\
              <a href="#" class="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-500 hover:bg-[#E53935] hover:text-white transition-all duration-300" aria-label="Twitter">\
                <i class="fab fa-twitter text-sm"></i>\
              </a>\
              <a href="#" class="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-500 hover:bg-[#E53935] hover:text-white transition-all duration-300" aria-label="YouTube">\
                <i class="fab fa-youtube text-sm"></i>\
              </a>\
            </div>\
          </div>\
          <!-- Quick Links -->\
          <div>\
            <h4 class="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Quick Links</h4>\
            <ul class="space-y-3">\
              <li><a href="index.html" class="footer-link text-gray-500 text-sm hover:text-[#E53935]">Home</a></li>\
              <li><a href="about.html" class="footer-link text-gray-500 text-sm hover:text-[#E53935]">About Us</a></li>\
              <li><a href="accessories.html" class="footer-link text-gray-500 text-sm hover:text-[#E53935]">Accessories</a></li>\
              <li><a href="services.html" class="footer-link text-gray-500 text-sm hover:text-[#E53935]">Services</a></li>\
              <li><a href="faq.html" class="footer-link text-gray-500 text-sm hover:text-[#E53935]">FAQ</a></li>\
              <li><a href="contact.html" class="footer-link text-gray-500 text-sm hover:text-[#E53935]">Contact</a></li>\
            </ul>\
          </div>\
          <!-- Bicycle Categories -->\
          <div>\
            <h4 class="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Categories</h4>\
            <ul class="space-y-3">\
              <li><a href="#" class="footer-link text-gray-500 text-sm hover:text-[#E53935]">Mountain Bikes</a></li>\
              <li><a href="#" class="footer-link text-gray-500 text-sm hover:text-[#E53935]">Road Bikes</a></li>\
              <li><a href="#" class="footer-link text-gray-500 text-sm hover:text-[#E53935]">Hybrid Bikes</a></li>\
              <li><a href="#" class="footer-link text-gray-500 text-sm hover:text-[#E53935]">Electric Bikes</a></li>\
              <li><a href="#" class="footer-link text-gray-500 text-sm hover:text-[#E53935]">Kids Bikes</a></li>\
              <li><a href="#" class="footer-link text-gray-500 text-sm hover:text-[#E53935]">BMX Bikes</a></li>\
            </ul>\
          </div>\
          <!-- Support -->\
          <div>\
            <h4 class="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Support</h4>\
            <ul class="space-y-3">\
              <li><a href="#" class="footer-link text-gray-500 text-sm hover:text-[#E53935]">Track Order</a></li>\
              <li><a href="#" class="footer-link text-gray-500 text-sm hover:text-[#E53935]">Shipping Info</a></li>\
              <li><a href="#" class="footer-link text-gray-500 text-sm hover:text-[#E53935]">Returns & Exchange</a></li>\
              <li><a href="#" class="footer-link text-gray-500 text-sm hover:text-[#E53935]">Warranty Policy</a></li>\
              <li><a href="#" class="footer-link text-gray-500 text-sm hover:text-[#E53935]">Size Guide</a></li>\
              <li><a href="#" class="footer-link text-gray-500 text-sm hover:text-[#E53935]">Privacy Policy</a></li>\
            </ul>\
          </div>\
          <!-- Contact -->\
          <div>\
            <h4 class="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Contact</h4>\
            <ul class="space-y-4">\
              <li class="flex items-start gap-3">\
                <i class="fas fa-map-marker-alt text-[#E53935] mt-0.5 text-sm"></i>\
                <span class="text-gray-500 text-sm">123 Cycling Street, Bike City, BC 560001</span>\
              </li>\
              <li class="flex items-start gap-3">\
                <i class="fas fa-phone-alt text-[#E53935] mt-0.5 text-sm"></i>\
                <span class="text-gray-500 text-sm">+91 98765 43210</span>\
              </li>\
              <li class="flex items-start gap-3">\
                <i class="fas fa-envelope text-[#E53935] mt-0.5 text-sm"></i>\
                <span class="text-gray-500 text-sm">info@bicycleshop.com</span>\
              </li>\
              <li class="flex items-start gap-3">\
                <i class="fas fa-clock text-[#E53935] mt-0.5 text-sm"></i>\
                <div class="text-gray-500 text-sm">\
                  <p>Mon-Sat: 9AM - 8PM</p>\
                  <p>Sun: 10AM - 6PM</p>\
                </div>\
              </li>\
            </ul>\
          </div>\
        </div>\
        <!-- Newsletter -->\
        <div class="bg-white/5 rounded-2xl p-8 mb-12">\
          <div class="flex flex-col md:flex-row items-center justify-between gap-6">\
            <div class="text-center md:text-left">\
              <h4 class="text-white font-semibold text-lg mb-1">Join Our Cycling Community</h4>\
              <p class="text-gray-500 text-sm">Get exclusive deals, new arrivals, and cycling tips delivered to your inbox.</p>\
            </div>\
            <form class="newsletter-form flex w-full md:w-auto">\
              <input type="email" placeholder="Enter your email" class="bg-white/5 border border-white/10 text-white text-sm px-4 py-3 rounded-l-xl focus:outline-none focus:border-[#E53935] transition w-full md:w-72 newsletter-input">\
              <button type="submit" class="bg-[#E53935] hover:bg-[#C62828] text-white text-sm font-semibold px-6 py-3 rounded-r-xl transition whitespace-nowrap">\
                Subscribe\
              </button>\
            </form>\
          </div>\
        </div>\
        <!-- Payment -->\
        <div class="flex flex-wrap items-center justify-center gap-6 mb-8 pb-8 border-b border-white/5">\
          <span class="text-gray-600 text-sm">We Accept:</span>\
          <div class="flex items-center gap-5">\
            <i class="fab fa-cc-visa text-2xl text-gray-600 hover:text-[#E53935] transition"></i>\
            <i class="fab fa-cc-mastercard text-2xl text-gray-600 hover:text-[#E53935] transition"></i>\
            <i class="fas fa-money-check text-2xl text-gray-600 hover:text-[#E53935] transition"></i>\
            <i class="fab fa-cc-paypal text-2xl text-gray-600 hover:text-[#E53935] transition"></i>\
            <i class="fab fa-stripe text-2xl text-gray-600 hover:text-[#E53935] transition"></i>\
          </div>\
        </div>\
        <!-- Copyright -->\
        <div class="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-600 text-sm">\
          <p>&copy; 2026 Bicycle Shop. All rights reserved.</p>\
          <div class="flex gap-6">\
            <a href="#" class="hover:text-[#E53935] transition">Privacy Policy</a>\
            <a href="#" class="hover:text-[#E53935] transition">Terms</a>\
            <a href="#" class="hover:text-[#E53935] transition">Sitemap</a>\
          </div>\
        </div>\
      </div>\
    </footer>';
}

document.addEventListener("DOMContentLoaded", renderFooter);
