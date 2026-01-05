// CNV Main JavaScript

document.addEventListener('DOMContentLoaded', function() {

  // Initialize AOS
  AOS.init({
    duration: 600,
    offset: 100,
    once: true,
    easing: 'ease-out'
  });

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('active');
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        icon.classList.toggle('ri-menu-line');
        icon.classList.toggle('ri-close-line');
      }
    });
  }

  // Header Scroll Effect
  const header = document.getElementById('header');
  let lastScroll = 0;

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }

    lastScroll = currentScroll;
  });

  // Back to Top Button
  const backToTop = document.getElementById('backToTop');

  if (backToTop) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    backToTop.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Hero Swiper
  const heroSwiper = new Swiper('.heroSwiper', {
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

  // Certifications Swiper
  const certificationsSwiper = new Swiper('.certificationsSwiper', {
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
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      }
    }
  });

  // Partners Swiper
  const partnersSwiper = new Swiper('.partnersSwiper', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 6,
      }
    }
  });

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

  // Form Validation (if contact form exists)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Basic validation
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const phone = document.getElementById('phone');
      const message = document.getElementById('message');

      let isValid = true;

      if (name && name.value.trim() === '') {
        isValid = false;
        name.classList.add('border-red-500');
      }

      if (email && !isValidEmail(email.value)) {
        isValid = false;
        email.classList.add('border-red-500');
      }

      if (phone && phone.value.trim() === '') {
        isValid = false;
        phone.classList.add('border-red-500');
      }

      if (isValid) {
        // Show success message
        alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
        contactForm.reset();
      }
    });
  }

  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // Lazy Loading Images
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.dataset.src;
    });
  }

  // Console Welcome
  console.log('%cChứng Nhận Việt', 'color: #0A8FDC; font-size: 24px; font-weight: bold;');
  console.log('%cTổ chức chứng nhận ISO hàng đầu Việt Nam', 'color: #F5841F; font-size: 14px;');

});
