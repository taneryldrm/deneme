// Header background change on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.95)";
  } else {
    header.style.background = "white";
  }
});

  // Form submission handling (for contact page)
  document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector("form");
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert(
          "Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız."
        );
        this.reset();
      });
    }

  // Counter animation for stats
  const statCards = document.querySelectorAll('.stat-card');
  
  const animateCounter = (element, target) => {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current) + (target === 24 ? '' : '+');
    }, 20);
  };

  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const statNumber = entry.target.querySelector('.stat-number');
        const target = parseInt(entry.target.dataset.count);
        animateCounter(statNumber, target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  statCards.forEach(card => {
    observer.observe(card);
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Video background handling
  const heroVideos = document.querySelectorAll('.hero-video');
  heroVideos.forEach(video => {
    video.addEventListener('loadeddata', function() {
      this.style.opacity = '1';
    });
    
    video.addEventListener('error', function() {
      // Fallback to gradient background if video fails to load
      const hero = this.closest('.hero, .page-hero');
      if (hero) {
        hero.style.background = 'linear-gradient(135deg, #4a90e2 0%, #2c5aa0 100%)';
      }
    });
  });

  // Parallax effect for hero particles
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const particles = document.querySelector('.hero-particles');
    if (particles) {
      particles.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });

  // Add hover effects to floating cards
  const floatingCards = document.querySelectorAll('.floating-card');
  floatingCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.1) translateY(-10px)';
      this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1) translateY(0)';
      this.style.boxShadow = 'none';
    });
  });

  // Add scroll-triggered animations
  const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
        observer.unobserve(entry.target);
      }
    });
  };

  const scrollObserver = new IntersectionObserver(animateOnScroll, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // Observe elements for scroll animations
  const animateElements = document.querySelectorAll('.service-preview-card, .feature-card, .stat-card, .service-card, .portfolio-item, .value-card, .team-card');
  animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    scrollObserver.observe(el);
  });

  // FAQ Accordion functionality
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all FAQ items
      faqItems.forEach(faqItem => {
        faqItem.classList.remove('active');
      });
      
      // Open clicked item if it wasn't active
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // Form enhancement
  const contactFormEnhanced = document.querySelector('form');
  if (contactFormEnhanced) {
    const inputs = contactFormEnhanced.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
      });
      
      input.addEventListener('blur', function() {
        if (!this.value) {
          this.parentElement.classList.remove('focused');
        }
      });
    });
  }
});
