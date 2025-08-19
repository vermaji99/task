 document.addEventListener('DOMContentLoaded', function() {
      const toggle = document.getElementById('menu-toggle');
      const mobileMenu = document.getElementById('mobile-menu-content');

      toggle.addEventListener('change', function() {
        mobileMenu.classList.toggle('show');
      });
    });