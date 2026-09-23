/**
 * Adedamola Falade - Portfolio Interactive Logic
 * Fixed 3-Grid Pure Image Gallery & Enhanced Detail Lightbox Popup
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const portfolioGrid = document.getElementById('portfolioGrid');
  const imageCountSpan = document.getElementById('imageCount');
  
  // Lightbox Elements
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxZoomBtn = document.getElementById('lightboxZoomBtn');
  const lightboxMediaContainer = document.getElementById('lightboxMediaContainer');

  // Interactive Elements
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const toastContainer = document.getElementById('toastContainer');
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');
  const menuToggle = document.getElementById('menuToggle');
  const siteNav = document.getElementById('siteNav');
  const currentYearSpan = document.getElementById('currentYear');

  // Images source array
  const rawList = (typeof PORTFOLIO_IMAGES !== 'undefined') 
    ? PORTFOLIO_IMAGES 
    : (window.PORTFOLIO_IMAGES || window.PORTFOLIO_PROJECTS || []);

  const images = (rawList && rawList.length > 0) ? rawList : [
    { id: "work-1", image: "assets/images/PRED.jpg", alt: "Adedamola Falade Graphic Design — PRED" },
    { id: "work-2", image: "assets/images/0a1d12f7a01d18f9c45bc9c2cd4113e6.webp", alt: "Adedamola Falade Graphic Design 2" },
    { id: "work-3", image: "assets/images/Copy%20of%20Pre-IPO%20Stocks%20On-Chain%20Powered%20by%20Injective.png", alt: "Adedamola Falade Graphic Design — Pre-IPO Stocks On-Chain" },
    { id: "work-4", image: "assets/images/Go%20Icognito%20with%20Bungee.jpg", alt: "Adedamola Falade Graphic Design — Go Incognito with Bungee" },
    { id: "work-5", image: "assets/images/15f349eec95f824f1c998cf8211e7f4f.webp", alt: "Adedamola Falade Graphic Design 5" },
    { id: "work-6", image: "assets/images/Add%20a%20heading.png", alt: "Adedamola Falade Graphic Design Visual 6" },
    { id: "work-7", image: "assets/images/PRED%20(1).jpg", alt: "Adedamola Falade Graphic Design — PRED Series 1" },
    { id: "work-8", image: "assets/images/3bb67be9956c009fc95c45ef5968286b.webp", alt: "Adedamola Falade Graphic Design 8" },
    { id: "work-9", image: "assets/images/The%20Market%20is%20always%20open.png", alt: "Adedamola Falade Graphic Design — The Market is Always Open" },
    { id: "work-10", image: "assets/images/Go%20Icognito%20with%20Bungee%20(1).jpg", alt: "Adedamola Falade Graphic Design — Bungee Series 1" },
    { id: "work-11", image: "assets/images/asian.png", alt: "Adedamola Falade Graphic Design — Asian Concept" },
    { id: "work-12", image: "assets/images/464f0dab732b40ea0161d8506bec6087.webp", alt: "Adedamola Falade Graphic Design 12" },
    { id: "work-13", image: "assets/images/Bitcoin%20Trading,%20SIMPLIFIED.png", alt: "Adedamola Falade Graphic Design — Bitcoin Trading Simplified" },
    { id: "work-14", image: "assets/images/PRED%20(2).jpg", alt: "Adedamola Falade Graphic Design — PRED Series 2" },
    { id: "work-15", image: "assets/images/653cc60ceb3fbe1c82532377059fd81f.webp", alt: "Adedamola Falade Graphic Design 15" },
    { id: "work-16", image: "assets/images/Your%20paragraph%20text.png", alt: "Adedamola Falade Graphic Design Composition 16" },
    { id: "work-17", image: "assets/images/Go%20Icognito%20with%20Bungee%20(2).jpg", alt: "Adedamola Falade Graphic Design — Bungee Series 2" },
    { id: "work-18", image: "assets/images/73690696598054f2ec14acbc6142166c.webp", alt: "Adedamola Falade Graphic Design 18" },
    { id: "work-19", image: "assets/images/939bf66ca2252242c469cdfa9e6a5192.webp", alt: "Adedamola Falade Graphic Design 19" },
    { id: "work-20", image: "assets/images/94c866b6fa7f1c31d21fd8a0011442fb.webp", alt: "Adedamola Falade Graphic Design 20" },
    { id: "work-21", image: "assets/images/fb3c87ea122cc5a06303cec0fd9e82fd.webp", alt: "Adedamola Falade Graphic Design 21" },
    { id: "work-22", image: "assets/images/still-e96b060a86d4601a16445e0a4283d39a.webp", alt: "Adedamola Falade Graphic Design 22" }
  ];

  let activeIndex = 0;
  let isZoomed = false;

  // Set current year
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // --- Attach Lightbox Click Handlers to Cards ---
  function initGallery() {
    const existingCards = document.querySelectorAll('.image-card');
    if (existingCards.length > 0) {
      // Synchronize images array directly with the DOM cards so clicking ALWAYS matches 100%
      images.length = 0;
      existingCards.forEach((card, index) => {
        card.setAttribute('data-index', index);
        card.setAttribute('aria-label', `View work ${index + 1}`);
        const img = card.querySelector('img');
        const src = img ? (img.getAttribute('src') || '') : '';
        const alt = img ? (img.getAttribute('alt') || `Adedamola Falade Graphic Design ${index + 1}`) : '';
        images.push({
          id: `work-${index + 1}`,
          image: src,
          alt: alt
        });

        card.addEventListener('click', () => openLightbox(index));
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openLightbox(index);
          }
        });
      });

      if (imageCountSpan) {
        imageCountSpan.textContent = images.length;
      }
    } else if (portfolioGrid) {
      // Dynamic fallback render
      portfolioGrid.innerHTML = '';
      images.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'image-card';
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('data-index', index);
        card.setAttribute('aria-label', `View work ${index + 1}`);

        card.innerHTML = `
          <div class="image-inner">
            <img 
              src="${item.image}" 
              alt="${item.alt || 'Adedamola Falade Graphic Design ' + (index + 1)}" 
              class="grid-img" 
              loading="lazy" 
            />
            <div class="image-overlay-glow"></div>
          </div>
        `;

        card.addEventListener('click', () => openLightbox(index));
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openLightbox(index);
          }
        });

        portfolioGrid.appendChild(card);
      });

      if (imageCountSpan) {
        imageCountSpan.textContent = images.length;
      }
    }
  }

  // --- Enhanced Bold Lightbox Popup ---
  function openLightbox(index) {
    if (!images[index]) return;
    activeIndex = index;
    const item = images[index];

    resetZoom();
    lightboxImg.src = item.image;
    lightboxImg.alt = item.alt || 'Adedamola Falade Graphic Design';

    if (lightboxCounter) {
      const cur = String(index + 1).padStart(2, '0');
      const tot = String(images.length).padStart(2, '0');
      lightboxCounter.textContent = `WORK ${cur} / ${tot}`;
    }

    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    resetZoom();
    lightboxModal.classList.remove('active');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function nextImage() {
    if (images.length === 0) return;
    activeIndex = (activeIndex + 1) % images.length;
    openLightbox(activeIndex);
  }

  function prevImage() {
    if (images.length === 0) return;
    activeIndex = (activeIndex - 1 + images.length) % images.length;
    openLightbox(activeIndex);
  }

  function toggleZoom() {
    isZoomed = !isZoomed;
    if (isZoomed) {
      lightboxImg.classList.add('zoomed');
      if (lightboxMediaContainer) lightboxMediaContainer.classList.add('is-zoomed');
      showToast('Zoomed view (Click to zoom out)');
    } else {
      lightboxImg.classList.remove('zoomed');
      if (lightboxMediaContainer) lightboxMediaContainer.classList.remove('is-zoomed');
    }
  }

  function resetZoom() {
    isZoomed = false;
    if (lightboxImg) lightboxImg.classList.remove('zoomed');
    if (lightboxMediaContainer) lightboxMediaContainer.classList.remove('is-zoomed');
  }

  // Lightbox click triggers
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
  if (lightboxNext) lightboxNext.addEventListener('click', nextImage);
  if (lightboxPrev) lightboxPrev.addEventListener('click', prevImage);
  if (lightboxZoomBtn) lightboxZoomBtn.addEventListener('click', toggleZoom);
  if (lightboxImg) {
    lightboxImg.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleZoom();
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (lightboxModal.classList.contains('active')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === '+' || e.key === '=') toggleZoom();
    }
  });

  // Mobile Touch Gestures (Swipe Next / Prev / Down to close)
  let touchStartX = 0;
  let touchStartY = 0;
  if (lightboxModal) {
    lightboxModal.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
    }, { passive: true });

    lightboxModal.addEventListener('touchend', (e) => {
      if (isZoomed) return;
      if (e.changedTouches.length === 1) {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        const diffX = touchEndX - touchStartX;
        const diffY = touchEndY - touchStartY;

        // Horizontal swipe (threshold 45px)
        if (Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY)) {
          if (diffX < 0) {
            nextImage();
          } else {
            prevImage();
          }
        } else if (diffY > 80 && Math.abs(diffY) > Math.abs(diffX)) {
          // Swipe down to dismiss
          closeLightbox();
        }
      }
    }, { passive: true });
  }

  // --- Copy Email to Clipboard ---
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = copyEmailBtn.getAttribute('data-email') || 'adedamolafalade.design@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email copied to clipboard!');
      }).catch(() => {
        showToast('adedamolafalade.design@gmail.com');
      });
    });
  }

  // --- Toast Notification Helper ---
  function showToast(message) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>${message}</span>
    `;
    toastContainer.appendChild(toast);
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 2800);
  }

  // --- Mobile Navigation Toggle ---
  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', () => {
      siteNav.classList.toggle('open');
      menuToggle.classList.toggle('open');
    });

    siteNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        siteNav.classList.remove('open');
      });
    });
  }

  // --- Contact Form Submission Simulation ---
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('submitBtn');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Sending...</span>`;
      formFeedback.className = 'form-feedback';
      formFeedback.textContent = '';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        formFeedback.className = 'form-feedback success';
        formFeedback.textContent = 'Inquiry sent. Adedamola will be in touch within 24 hours!';
        contactForm.reset();
        showToast('Message sent successfully!');
      }, 900);
    });
  }

  // Initialize
  initGallery();
});
