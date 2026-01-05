// CNVCert Main JavaScript

document.addEventListener('DOMContentLoaded', function() {

  // Initialize AOS
  AOS.init({
    duration: 800,
    offset: 100,
    once: true,
    easing: 'ease-out-cubic'
  });

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        icon.classList.toggle('ri-menu-4-line');
        icon.classList.toggle('ri-close-line');
      }
    });
  }

  // Header Scroll Effect
  const header = document.getElementById('header');
  let lastScroll = 0;

  function handleHeaderScroll() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      header.classList.add('bg-white', 'shadow-lg');
      header.classList.remove('bg-transparent');
      // Change text colors for scrolled state
      document.querySelectorAll('.header-text').forEach(el => {
        el.classList.remove('text-white', 'text-white/70');
        el.classList.add('text-gray-900', 'text-gray-500');
      });
      document.querySelectorAll('.nav-link').forEach(el => {
        el.classList.remove('text-white', 'text-white/80');
        el.classList.add('text-gray-700');
      });
    } else {
      header.classList.remove('bg-white', 'shadow-lg');
      header.classList.add('bg-transparent');
      document.querySelectorAll('.header-text').forEach(el => {
        el.classList.add('text-white', 'text-white/70');
        el.classList.remove('text-gray-900', 'text-gray-500');
      });
      document.querySelectorAll('.nav-link').forEach(el => {
        el.classList.add('text-white', 'text-white/80');
        el.classList.remove('text-gray-700');
      });
    }

    lastScroll = currentScroll;
  }

  window.addEventListener('scroll', handleHeaderScroll);
  handleHeaderScroll(); // Initial check

  // Counter Animation
  const counters = document.querySelectorAll('.counter');
  const speed = 200;

  const animateCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(() => animateCounter(counter), 1);
    } else {
      counter.innerText = target + (target === 99 ? '%' : '+');
    }
  };

  // Intersection Observer for counters
  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));

  // Back to Top Button
  const backToTop = document.getElementById('backToTop');

  if (backToTop) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTop.classList.remove('opacity-0', 'invisible');
        backToTop.classList.add('opacity-100', 'visible');
      } else {
        backToTop.classList.add('opacity-0', 'invisible');
        backToTop.classList.remove('opacity-100', 'visible');
      }
    });

    backToTop.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Hero Swiper (if exists)
  if (document.querySelector('.heroSwiper')) {
    new Swiper('.heroSwiper', {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.heroSwiper .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.heroSwiper .swiper-button-next',
        prevEl: '.heroSwiper .swiper-button-prev',
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      }
    });
  }

  // Certifications Swiper (if exists)
  if (document.querySelector('.certificationsSwiper')) {
    new Swiper('.certificationsSwiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.certificationsSwiper .swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 }
      }
    });
  }

  // Partners Swiper (if exists)
  if (document.querySelector('.partnersSwiper')) {
    new Swiper('.partnersSwiper', {
      slidesPerView: 2,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 6 }
      }
    });
  }

  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Form Validation
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const phone = document.getElementById('phone');
      const message = document.getElementById('message');

      let isValid = true;

      // Reset styles
      [name, email, phone, message].forEach(input => {
        if (input) input.classList.remove('border-red-500', 'ring-2', 'ring-red-200');
      });

      if (name && name.value.trim() === '') {
        isValid = false;
        name.classList.add('border-red-500', 'ring-2', 'ring-red-200');
      }

      if (email && !isValidEmail(email.value)) {
        isValid = false;
        email.classList.add('border-red-500', 'ring-2', 'ring-red-200');
      }

      if (phone && phone.value.trim() === '') {
        isValid = false;
        phone.classList.add('border-red-500', 'ring-2', 'ring-red-200');
      }

      if (isValid) {
        // Show success message
        const successMsg = document.createElement('div');
        successMsg.className = 'fixed top-24 left-1/2 -translate-x-1/2 bg-green-500 text-white px-8 py-4 rounded-xl shadow-2xl z-50 flex items-center space-x-3 animate-bounce';
        successMsg.innerHTML = '<i class="ri-checkbox-circle-fill text-2xl"></i><span>Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.</span>';
        document.body.appendChild(successMsg);

        setTimeout(() => {
          successMsg.remove();
        }, 4000);

        contactForm.reset();
      }
    });
  }

  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // Parallax effect for floating elements
  document.addEventListener('mousemove', function(e) {
    const floatingElements = document.querySelectorAll('.animate-float');
    floatingElements.forEach(el => {
      const speed = 0.02;
      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;
      el.style.transform = `translateY(${y}px) translateX(${x}px)`;
    });
  });

  // Console branding
  console.log('%c CNVCert ', 'background: linear-gradient(135deg, #0A8FDC, #F5841F); color: white; font-size: 24px; font-weight: bold; padding: 10px 20px; border-radius: 8px;');
  console.log('%c Tổ chức chứng nhận ISO hàng đầu Việt Nam ', 'color: #0A8FDC; font-size: 14px;');
  console.log('%c 🌐 cnvcert.com | 📞 0369 777 713 | ✉️ info@cnvcert.com ', 'color: #666; font-size: 12px;');

});
