/**
 * SUNDAY OJIMA ONALO — PERSONAL BRAND WEBSITE (v2)
 * Minimal, accessible Vanilla JavaScript (< 15KB)
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileDrawer();
  initDayRailAndHeaderScroll();
  initContactForm();
});

/**
 * Mobile Drawer Menu (Accessible Fullscreen Overlay)
 */
function initMobileDrawer() {
  const openBtn = document.querySelector('.mobile-menu-btn');
  const drawer = document.querySelector('.mobile-drawer');
  const closeBtn = document.querySelector('.mobile-drawer-close');

  if (!openBtn || !drawer) return;

  function toggleDrawer(open) {
    drawer.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
    openBtn.setAttribute('aria-expanded', String(open));
    if (open && closeBtn) {
      closeBtn.focus();
    }
  }

  openBtn.addEventListener('click', () => toggleDrawer(true));
  if (closeBtn) closeBtn.addEventListener('click', () => toggleDrawer(false));

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      toggleDrawer(false);
      openBtn.focus();
    }
  });

  // Close when clicking any link inside drawer
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => toggleDrawer(false));
  });
}

/**
 * Day Rail Sun Dot, Mobile Progress Line, and Dynamic Header Scroll
 */
function initDayRailAndHeaderScroll() {
  const header = document.querySelector('.site-header');
  const railDot = document.querySelector('.day-rail-dot');
  const progressBar = document.querySelector('.day-progress-bar');
  const darkSections = document.querySelectorAll('.ground-ink, .ground-forest');

  let lastScrollY = window.scrollY;
  let ticking = false;

  function updateScroll() {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? Math.min(Math.max(scrollY / docHeight, 0), 1) : 0;

    // 1. Move Day Rail Dot (tracks 0% to 100% of the rail length)
    if (railDot) {
      const rail = document.querySelector('.day-rail');
      if (rail) {
        const railHeight = rail.clientHeight - 10;
        railDot.style.top = `${scrollPercent * railHeight}px`;
      }
    }

    // 2. Update Mobile Progress Bar
    if (progressBar) {
      progressBar.style.width = `${scrollPercent * 100}%`;
    }

    // 3. Header Show/Hide on Scroll
    if (header) {
      if (scrollY > 60) {
        header.classList.add('is-scrolled');
        if (scrollY > lastScrollY && scrollY > 200) {
          // Scrolling down: hide header
          header.classList.add('nav-hidden');
        } else {
          // Scrolling up: reveal header
          header.classList.remove('nav-hidden');
        }
      } else {
        header.classList.remove('is-scrolled', 'nav-hidden');
      }

      // 4. Adapt Header Color over Dark Sections
      let isOverDark = false;
      darkSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 72 && rect.bottom >= 72) {
          isOverDark = true;
          if (section.classList.contains('ground-forest')) {
            header.classList.add('theme-forest');
            header.classList.remove('theme-ink');
          } else {
            header.classList.add('theme-ink');
            header.classList.remove('theme-forest');
          }
        }
      });

      if (!isOverDark) {
        header.classList.remove('theme-ink', 'theme-forest');
        document.body.classList.remove('theme-dark-view');
      } else {
        document.body.classList.add('theme-dark-view');
      }
    }

    lastScrollY = scrollY;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateScroll);
      ticking = true;
    }
  }, { passive: true });

  // Initial call
  updateScroll();
}

/**
 * Accessible Contact Form
 */
function initContactForm() {
  const form = document.querySelector('#contactForm');
  if (!form) return;

  const msgBox = document.querySelector('#formMsg');
  const action = form.getAttribute('action') || 'TODO_FORM_ENDPOINT';

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.elements['name'] ? form.elements['name'].value.trim() : '';
    const email = form.elements['email'] ? form.elements['email'].value.trim() : '';
    const route = form.elements['route'] ? form.elements['route'].value : '';
    const message = form.elements['message'] ? form.elements['message'].value.trim() : '';

    if (!name || !email || !message) {
      showMsg('Please fill in all required fields.', 'error');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showMsg('Please provide a valid email address.', 'error');
      return;
    }

    if (action.includes('TODO_FORM_ENDPOINT') || action === '#' || action === '') {
      // Graceful mailto fallback
      const subject = encodeURIComponent(`[${route || 'Enquiry'}] Message from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nRoute: ${route}\n\n${message}`);
      showMsg('Opening your email client to send message...', 'success');
      setTimeout(() => {
        window.location.href = `mailto:TODO_CONTACT_EMAIL?subject=${subject}&body=${body}`;
      }, 600);
      return;
    }

    // Real API Endpoint
    fetch(action, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, route, message })
    })
    .then(res => {
      if (res.ok) {
        showMsg('Thank you. Sunday Ojima Onalo will be in touch with you shortly.', 'success');
        form.reset();
      } else {
        throw new Error('Submission error');
      }
    })
    .catch(() => {
      showMsg('Unable to send at this moment. Please reach out directly via email.', 'error');
    });
  });

  function showMsg(text, type) {
    if (!msgBox) return;
    msgBox.textContent = text;
    msgBox.className = `form-msg is-${type}`;
    msgBox.setAttribute('role', 'alert');
  }
}
