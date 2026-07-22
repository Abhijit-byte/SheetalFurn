document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Sticky Header + scroll progress ---
  const header = document.getElementById('main-header');
  const progressThumb = document.querySelector('.scroll-progress-thumb');

  function updateScrollProgress() {
    if (!progressThumb) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? Math.min(Math.max(scrollTop / docHeight, 0), 1) : 0;
    progressThumb.style.height = `${progress * 100}%`;
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    updateScrollProgress();
  });

  // --- 2. Mobile Drawer Menu ---
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileClose = document.getElementById('mobile-drawer-close');
  const mobileOverlay = document.getElementById('mobile-drawer-overlay');

  function openMobileMenu() {
    mobileDrawer.classList.add('open');
    mobileOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileDrawer.classList.remove('open');
    mobileOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openMobileMenu);
  if (mobileClose) mobileClose.addEventListener('click', closeMobileMenu);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);

  // Close menu on clicking mobile nav link
  function setupMobileAccordion() {
    const mobileNavLinks = document.querySelector('.mobile-nav-links');
    if (mobileNavLinks) {
      const productsLink = Array.from(mobileNavLinks.querySelectorAll('a')).find(
        a => a.textContent.trim().toLowerCase() === 'products'
      );

      if (productsLink) {
        const accordionDiv = document.createElement('div');
        accordionDiv.className = 'mobile-nav-dropdown-container';
        accordionDiv.innerHTML = `
          <button class="mobile-nav-item mobile-dropdown-btn" type="button">
            <span>Products</span>
            <svg class="chevron-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div class="mobile-dropdown-content">
            <!-- SEATING -->
            <div class="mobile-subdropdown">
              <button class="mobile-subdropdown-btn" type="button">
                <span>Seating</span>
                <svg class="chevron-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div class="mobile-subdropdown-content">
                <a href="executive-chairs.html" class="mobile-sub-link">Executive Chairs</a>
                <a href="conference-chairs.html" class="mobile-sub-link">Conference Chairs</a>
                <a href="task-chairs.html" class="mobile-sub-link">Task Chairs</a>
                <a href="lounge-chairs.html" class="mobile-sub-link">Lounge Chairs</a>
                <a href="sofas.html" class="mobile-sub-link">Sofas</a>
              </div>
            </div>
            <!-- WORKSTATIONS -->
            <div class="mobile-subdropdown">
              <button class="mobile-subdropdown-btn" type="button">
                <span>Workstations</span>
                <svg class="chevron-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div class="mobile-subdropdown-content">
                <a href="iron-frame-workstations.html" class="mobile-sub-link">Iron Workstations</a>
                <a href="wooden-workstations.html" class="mobile-sub-link">Wooden Workstations</a>
              </div>
            </div>
            <!-- EDUCATION -->
            <div class="mobile-subdropdown">
              <button class="mobile-subdropdown-btn" type="button">
                <span>Education</span>
                <svg class="chevron-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div class="mobile-subdropdown-content">
                <a href="classroom-furniture.html" class="mobile-sub-link">Classroom Furniture</a>
                <a href="hostel-furniture.html" class="mobile-sub-link">Hostel Furniture</a>
                <a href="institutional-seating.html" class="mobile-sub-link">Institutional Seating</a>
                <a href="institutional-storage.html" class="mobile-sub-link">Institutional Storage</a>
                <a href="staff-tables.html" class="mobile-sub-link">Staff Tables</a>
              </div>
            </div>
            <!-- WOODWORK -->
            <div class="mobile-subdropdown">
              <button class="mobile-subdropdown-btn" type="button">
                <span>Woodwork</span>
                <svg class="chevron-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div class="mobile-subdropdown-content">
                <a href="cafe-tables.html" class="mobile-sub-link">Cafe Tables</a>
                <a href="conference-tables.html" class="mobile-sub-link">Conference Tables</a>
                <a href="executive-tables.html" class="mobile-sub-link">Executive Tables</a>
                <a href="presidential-tables.html" class="mobile-sub-link">Presidential Tables</a>
                <a href="reception-tables.html" class="mobile-sub-link">Reception Tables</a>
              </div>
            </div>
            <!-- ARCHIVING -->
            <div class="mobile-subdropdown">
              <button class="mobile-subdropdown-btn" type="button">
                <span>Archiving</span>
                <svg class="chevron-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div class="mobile-subdropdown-content">
                <a href="almirah-lockers.html" class="mobile-sub-link">Almirah & Lockers</a>
                <a href="office-storage.html" class="mobile-sub-link">Office Storage</a>
                <a href="racks.html" class="mobile-sub-link">Racks</a>
              </div>
            </div>
          </div>
        `;

        productsLink.parentNode.replaceChild(accordionDiv, productsLink);

        const mainBtn = accordionDiv.querySelector('.mobile-dropdown-btn');
        const mainContent = accordionDiv.querySelector('.mobile-dropdown-content');

        mainBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const isOpen = mainContent.classList.contains('open');
          if (isOpen) {
            mainContent.classList.remove('open');
            mainBtn.classList.remove('open');
          } else {
            mainContent.classList.add('open');
            mainBtn.classList.add('open');
          }
        });

        const subBtns = accordionDiv.querySelectorAll('.mobile-subdropdown-btn');
        subBtns.forEach(subBtn => {
          subBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const subContent = subBtn.nextElementSibling;
            const isSubOpen = subContent.classList.contains('open');
            if (isSubOpen) {
              subContent.classList.remove('open');
              subBtn.classList.remove('open');
            } else {
              accordionDiv.querySelectorAll('.mobile-subdropdown-content.open').forEach(openSub => {
                openSub.classList.remove('open');
                openSub.previousElementSibling.classList.remove('open');
              });
              subContent.classList.add('open');
              subBtn.classList.add('open');
            }
          });
        });

        const subLinks = accordionDiv.querySelectorAll('.mobile-sub-link');
        subLinks.forEach(subLink => {
          subLink.addEventListener('click', () => {
            closeMobileMenu();
          });
        });
      }
    }
  }

  // Set up the accordion and click events
  setupMobileAccordion();

  const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
  mobileNavItems.forEach(item => {
    if (!item.classList.contains('mobile-dropdown-btn')) {
      item.addEventListener('click', closeMobileMenu);
    }
  });

  // --- 3. Scroll Reveal System ---
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // --- 4. Interactive Moodboard Configurator (3D Canvas) ---
  const container = document.getElementById('canvas-3d');
  let scene, camera, renderer, controls;
  let chairGroup;
  let upholsteryMaterial, frameMaterial;
  let isUserInteracting = false;

  if (container) {
    const width = container.clientWidth || 450;
    const height = container.clientHeight || 450;

    // Scene
    scene = new THREE.Scene();

    // Camera
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1.4, 4.5);

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enablePan = false;
    controls.minPolarAngle = 0.1;
    controls.maxPolarAngle = Math.PI / 2 + 0.05;
    controls.minDistance = 3.0;
    controls.maxDistance = 6.0;

    controls.addEventListener('start', () => {
      isUserInteracting = true;
    });
    controls.addEventListener('end', () => {
      isUserInteracting = false;
    });

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1.5);
    spotLight.position.set(8, 12, 8);
    spotLight.castShadow = true;
    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;
    spotLight.shadow.bias = -0.001;
    scene.add(spotLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.4);
    dirLight.position.set(-8, 8, -8);
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0xfff1e0, 0.6, 15);
    pointLight.position.set(0, 4, -4);
    scene.add(pointLight);

    // Group for the chair
    chairGroup = new THREE.Group();
    chairGroup.position.set(0, -0.8, 0); // Center the chair around the pivot
    scene.add(chairGroup);

    // Materials mapping to colors
    upholsteryMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#b0705a'), // Default: Boucle Terra Cotta
      roughness: 0.8,
      metalness: 0.0,
    });

    frameMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#1a1a1a'), // Default: Charcoal Black
      roughness: 0.35,
      metalness: 0.2,
    });

    // Build Chair Model (from ModelChair.jsx)
    // 1. Seat
    const seatGeo = new THREE.BoxGeometry(1.6, 0.2, 1.6);
    const seatMesh = new THREE.Mesh(seatGeo, upholsteryMaterial);
    seatMesh.position.set(0, 1.2, 0);
    seatMesh.castShadow = true;
    seatMesh.receiveShadow = true;
    chairGroup.add(seatMesh);

    // 2. Backrest
    const backGeo = new THREE.BoxGeometry(1.6, 1.4, 0.2);
    const backMesh = new THREE.Mesh(backGeo, upholsteryMaterial);
    backMesh.position.set(0, 2.0, -0.7);
    backMesh.castShadow = true;
    backMesh.receiveShadow = true;
    chairGroup.add(backMesh);

    // 3. Legs
    const legGeo = new THREE.CylinderGeometry(0.08, 0.04, 1.2, 16);
    const legPositions = [
      [-0.7, 0.6, 0.7],
      [0.7, 0.6, 0.7],
      [-0.7, 0.6, -0.7],
      [0.7, 0.6, -0.7]
    ];

    legPositions.forEach(pos => {
      const legMesh = new THREE.Mesh(legGeo, frameMaterial);
      legMesh.position.set(pos[0], pos[1], pos[2]);
      legMesh.castShadow = true;
      chairGroup.add(legMesh);
    });

    // Ground Shadow Plane
    const floorGeo = new THREE.PlaneGeometry(15, 15);
    const floorMat = new THREE.ShadowMaterial({ opacity: 0.15 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.8;
    floor.receiveShadow = true;
    scene.add(floor);

    // Animation Loop
    function animate() {
      requestAnimationFrame(animate);

      if (!isUserInteracting && chairGroup) {
        chairGroup.rotation.y += 0.003;
      }

      if (controls) {
        controls.update();
      }

      renderer.render(scene, camera);
    }
    animate();

    // Resize handler
    window.addEventListener('resize', () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    });
  }

  const upholsteryDots = document.querySelectorAll('#upholstery-dots .color-dot');
  const upholsterySelectionText = document.getElementById('upholstery-name');

  const frameDots = document.querySelectorAll('#frame-dots .color-dot');
  const frameSelectionText = document.getElementById('frame-name');

  // Handle Upholstery configuration click
  upholsteryDots.forEach(dot => {
    dot.addEventListener('click', () => {
      // Toggle active states
      upholsteryDots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');

      // Update name text
      const name = dot.getAttribute('data-name');
      const colorVal = dot.getAttribute('data-color');
      upholsterySelectionText.textContent = name;

      // Update upholstery 3D material color and properties
      if (upholsteryMaterial) {
        upholsteryMaterial.color.set(colorVal);
        if (name.includes('Leather')) {
          upholsteryMaterial.roughness = 0.4;
          upholsteryMaterial.metalness = 0.1;
        } else if (name.includes('Velvet') || name.includes('Boucle')) {
          upholsteryMaterial.roughness = 0.8;
          upholsteryMaterial.metalness = 0.0;
        } else {
          upholsteryMaterial.roughness = 0.9;
          upholsteryMaterial.metalness = 0.0;
        }
      }

      // Add a scale pop interaction
      if (chairGroup) {
        chairGroup.scale.set(1.06, 1.06, 1.06);
        setTimeout(() => {
          if (chairGroup) chairGroup.scale.set(1, 1, 1);
        }, 200);
      }
    });
  });

  // Handle Frame configuration click
  frameDots.forEach(dot => {
    dot.addEventListener('click', () => {
      // Toggle active states
      frameDots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');

      // Update name text
      const name = dot.getAttribute('data-name');
      const colorVal = dot.getAttribute('data-color');
      frameSelectionText.textContent = name;

      // Update frame 3D material color
      if (frameMaterial) {
        frameMaterial.color.set(colorVal);
      }

      // Add scale pop interaction
      if (chairGroup) {
        chairGroup.scale.set(1.06, 1.06, 1.06);
        setTimeout(() => {
          if (chairGroup) chairGroup.scale.set(1, 1, 1);
        }, 200);
      }
    });
  });

  // --- 5. Interactive Category Showcase ---
  const categoryItems = document.querySelectorAll('.category-item');
  const categoryImages = document.querySelectorAll('.showcase-img');
  const categoryOverlayChair = document.getElementById('category-overlay-chair');

  categoryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const activeIndex = parseInt(item.getAttribute('data-index'), 10);

      // Reset active categories
      categoryItems.forEach(cat => cat.classList.remove('active'));
      item.classList.add('active');

      // Cross-fade image showcase
      categoryImages.forEach((img, idx) => {
        if (idx === activeIndex) {
          img.classList.add('active');
        } else {
          img.classList.remove('active');
        }
      });
    });

    // Add click event redirecting to actual product pages
    item.addEventListener('click', () => {
      const url = item.getAttribute('data-url');
      if (url) {
        window.location.href = url;
      }
    });
  });

  // --- 6. Newsletter Form Submission Handling ---
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('newsletter-email');
      const email = emailInput.value.trim();

      if (email) {
        // High-end success message inside the newsletter block
        const container = newsletterForm.parentElement;
        container.style.opacity = '0';
        setTimeout(() => {
          container.innerHTML = `
            <div style="padding: 1.5rem 0; text-align: left; animation: fadeIn 0.8s forwards;">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" style="margin-bottom: 1rem;"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <h3 style="font-size: 1.75rem; font-weight: 700; color: #ffffff; margin-bottom: 0.5rem; font-family: 'Outfit', sans-serif;">Thank you!</h3>
              <p style="color: #cbd5e1; font-size: 0.9375rem; font-family: 'Inter', sans-serif; line-height: 1.5;">You have successfully subscribed with <strong>${email}</strong>.<br>We'll send design inspiration and news to your inbox.</p>
            </div>
          `;
          container.style.opacity = '1';
        }, 400);
      }
    });
  }

  // --- 7. Footer Copyright Year Dynamic Insertion ---
  const footerYear = document.getElementById('footer-year');
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }

  // Add support for custom keyframe animations
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(styleSheet);

  // --- 8. Offerings Infinite Carousel Slider ---
  const track = document.getElementById('offerings-track');
  const viewport = document.getElementById('offerings-viewport');
  const prevBtn = document.querySelector('.slider-arrow.prev');
  const nextBtn = document.querySelector('.slider-arrow.next');

  if (track && viewport) {
    const originalCards = Array.from(track.children);
    const originalCount = originalCards.length;

    // Clone 5 cards to prepend, 5 cards to append for seamless looping
    const clonesToPrepend = [];
    const clonesToAppend = [];
    const numClones = 5;

    for (let i = 0; i < numClones; i++) {
      const indexToPrepend = (originalCount - 1 - (i % originalCount) + originalCount) % originalCount;
      const clonePre = originalCards[indexToPrepend].cloneNode(true);
      clonePre.classList.add('clone');
      clonesToPrepend.unshift(clonePre);

      const indexToAppend = i % originalCount;
      const cloneApp = originalCards[indexToAppend].cloneNode(true);
      cloneApp.classList.add('clone');
      clonesToAppend.push(cloneApp);
    }

    clonesToPrepend.forEach(clone => track.insertBefore(clone, track.firstChild));
    clonesToAppend.forEach(clone => track.appendChild(clone));

    let cards = Array.from(track.children);
    let currentIndex = numClones;
    let isTransitioning = false;
    let cardWidth = 0;
    let gap = 30; // matches css gap

    function updateLayout() {
      if (cards.length === 0) return;
      const firstCard = cards[0];
      cardWidth = firstCard.getBoundingClientRect().width;

      track.style.transition = 'none';
      setTrackPosition();
      track.offsetHeight; // trigger reflow
      track.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    }

    function setTrackPosition() {
      const offset = -currentIndex * (cardWidth + gap);
      track.style.transform = `translateX(${offset}px)`;
    }

    function moveToSlide(index) {
      if (isTransitioning) return;
      isTransitioning = true;
      currentIndex = index;
      track.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      setTrackPosition();
    }

    track.addEventListener('transitionend', () => {
      isTransitioning = false;
      if (currentIndex < numClones) {
        track.style.transition = 'none';
        currentIndex += originalCount;
        setTrackPosition();
      } else if (currentIndex >= numClones + originalCount) {
        track.style.transition = 'none';
        currentIndex -= originalCount;
        setTrackPosition();
      }
    });

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        moveToSlide(currentIndex + 1);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        moveToSlide(currentIndex - 1);
      });
    }

    let autoSlideInterval = setInterval(() => {
      moveToSlide(currentIndex + 1);
    }, 3000);

    viewport.addEventListener('mouseenter', () => {
      clearInterval(autoSlideInterval);
    });

    viewport.addEventListener('mouseleave', () => {
      autoSlideInterval = setInterval(() => {
        moveToSlide(currentIndex + 1);
      }, 3000);
    });

    // Touch Swipe support
    let startX = 0;
    let currentX = 0;
    let isDragging = false;

    viewport.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
      clearInterval(autoSlideInterval);
    }, { passive: true });

    viewport.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      currentX = e.touches[0].clientX;
    }, { passive: true });

    viewport.addEventListener('touchend', () => {
      if (!isDragging) return;
      isDragging = false;
      const diffX = startX - currentX;
      if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
          moveToSlide(currentIndex + 1);
        } else {
          moveToSlide(currentIndex - 1);
        }
      }
      autoSlideInterval = setInterval(() => {
        moveToSlide(currentIndex + 1);
      }, 3000);
    });

    window.addEventListener('resize', updateLayout);
    window.addEventListener('load', updateLayout);
    setTimeout(updateLayout, 150);
  }

  // --- 9. Custom Cursor navigation feature ---
  const customCursor = document.getElementById('customCursor');
  const customCursorDot = document.getElementById('customCursorDot');
  const customCursorText = document.getElementById('customCursorText');

  if (customCursor && customCursorDot) {
    let targetX = 0;
    let targetY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let isHidden = true;
    let lastHoveredElement = null;

    // Helper to calculate contrast color for swatches
    function getContrastColor(hex) {
      if (!hex) return '#ffffff';
      const cleanHex = hex.replace('#', '');
      const r = parseInt(cleanHex.substring(0, 2), 16);
      const g = parseInt(cleanHex.substring(2, 4), 16);
      const b = parseInt(cleanHex.substring(4, 6), 16);
      const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
      return (yiq >= 170) ? '#162b3c' : '#ffffff';
    }

    // Centered state reset and updater
    function updateCursorState(target) {
      if (target === lastHoveredElement) return;
      lastHoveredElement = target;

      // 1. Reset all state classes & dynamic properties
      customCursor.classList.remove('color-picker-hover', 'canvas-hover', 'image-hover', 'slider-hover', 'hover', 'has-text');
      customCursorDot.classList.remove('hover');
      if (customCursorText) customCursorText.textContent = '';

      customCursor.style.removeProperty('--hover-color');
      customCursor.style.removeProperty('--hover-bg');
      customCursor.style.removeProperty('--hover-glow');
      customCursor.style.removeProperty('--hover-glow-subtle');
      customCursor.style.removeProperty('--hover-color-text');

      if (!target) return;

      // 2. Adjust cursor theme based on section color
      const inDarkSection = target.closest('.hero-section, .moodboard-left, .footer');
      if (inDarkSection) {
        customCursor.classList.add('theme-dark');
        customCursor.classList.remove('theme-light');
        customCursorDot.classList.add('theme-dark');
        customCursorDot.classList.remove('theme-light');
      } else {
        customCursor.classList.add('theme-light');
        customCursor.classList.remove('theme-dark');
        customCursorDot.classList.add('theme-light');
        customCursorDot.classList.remove('theme-dark');
      }

      // 3. Apply element-specific styling and labels

      // Color Dot Selection
      const colorDot = target.closest('.color-dot');
      if (colorDot) {
        const hexColor = colorDot.getAttribute('data-color');
        const colorName = colorDot.getAttribute('data-name') || 'COLOR';

        if (customCursorText) customCursorText.textContent = colorName.toUpperCase();
        customCursor.classList.add('color-picker-hover', 'has-text');

        customCursor.style.setProperty('--hover-color', hexColor);
        customCursor.style.setProperty('--hover-bg', `${hexColor}25`);
        customCursor.style.setProperty('--hover-glow', `${hexColor}60`);
        customCursor.style.setProperty('--hover-glow-subtle', `${hexColor}30`);
        customCursor.style.setProperty('--hover-color-text', getContrastColor(hexColor));
        return;
      }

      // 3D Model Configuration Canvas
      const canvas3D = target.closest('#canvas-3d');
      if (canvas3D) {
        if (customCursorText) customCursorText.textContent = 'ROTATE';
        customCursor.classList.add('canvas-hover', 'has-text');
        return;
      }

      // Image Cards and Showcase Galleries
      const imageCard = target.closest('.image-card, .showcase-img, .offering-img-wrapper, .overlay-chair');
      if (imageCard) {
        if (customCursorText) customCursorText.textContent = 'VIEW';
        customCursor.classList.add('image-hover', 'has-text');
        return;
      }

      // Product Details Page Hover Custom Cursor
      const productCard = target.closest('.product-card');
      if (productCard) {
        if (target.closest('.scroller-arrow') || target.closest('.scroller-dot')) {
          customCursor.classList.add('hover');
          customCursorDot.classList.add('hover');
          return;
        }
        if (customCursorText) customCursorText.textContent = 'VIEW DETAIL';
        customCursor.classList.add('image-hover', 'has-text');
        return;
      }

      // Slider/Carousel Viewports
      const offeringsSlider = target.closest('#offerings-viewport');
      if (offeringsSlider) {
        if (customCursorText) customCursorText.textContent = 'DRAG';
        customCursor.classList.add('slider-hover', 'has-text');
        return;
      }

      // General interactive elements (links, buttons, controls)
      const interactive = target.closest('a, button, input, select, textarea, .category-item, .slider-arrow, .tool-btn, [role="button"]');
      if (interactive) {
        customCursor.classList.add('hover');
        customCursorDot.classList.add('hover');
        return;
      }
    }

    // Only activate cursor tracking on devices that support hover
    if (window.matchMedia('(hover: hover)').matches) {
      // Hide cursor initially until mouse moves
      customCursor.classList.add('hidden');
      customCursorDot.classList.add('hidden');

      document.addEventListener('mousemove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;

        // Immediate position for inner dot
        customCursorDot.style.left = `${targetX}px`;
        customCursorDot.style.top = `${targetY}px`;

        // Show cursor if hidden
        if (isHidden) {
          customCursor.classList.remove('hidden');
          customCursorDot.classList.remove('hidden');
          isHidden = false;
        }

        // Dynamically update cursor styling based on hover targets
        updateCursorState(e.target);
      });

      // Smooth custom cursor outer circle with lerp/inertia
      const animateCursor = () => {
        const ease = 0.16; // Lerp factor
        cursorX += (targetX - cursorX) * ease;
        cursorY += (targetY - cursorY) * ease;

        customCursor.style.left = `${cursorX}px`;
        customCursor.style.top = `${cursorY}px`;

        requestAnimationFrame(animateCursor);
      };
      animateCursor();

      // Mouseenter and Mouseleave on Window
      document.addEventListener('mouseleave', () => {
        customCursor.classList.add('hidden');
        customCursorDot.classList.add('hidden');
        isHidden = true;
        updateCursorState(null);
      });

      document.addEventListener('mouseenter', () => {
        customCursor.classList.remove('hidden');
        customCursorDot.classList.remove('hidden');
        isHidden = false;
      });

      // Click / Active State
      document.addEventListener('mousedown', () => {
        customCursor.classList.add('active');
      });

      document.addEventListener('mouseup', () => {
        customCursor.classList.remove('active');
      });

      // Click on genuine links hides the cursor to avoid flashing on reload
      document.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (link) {
          const href = link.getAttribute('href');
          if (href && !href.startsWith('#') && href !== '#') {
            customCursor.classList.add('hidden');
            customCursorDot.classList.add('hidden');
            isHidden = true;
          }
        }
      });
    }
  }

  // --- 10. Hero Infinite Carousel / Fade Slider ---
  const heroBg = document.querySelector('.hero-bg');
  const heroTitle = document.querySelector('.hero-title');
  const cards = document.querySelectorAll('.hero-scroller-card');

  const slideData = [
    { image: 'images/sofas.png', title: 'Sofas' },
    { image: 'images/seating.png', title: 'Task Chairs' },
    { image: 'images/lounge_chairs.png', title: 'Lounge Chairs' },
    { image: 'images/workstations.png', title: 'Workstations' },
    { image: 'images/storage.png', title: 'Archiving' },
    { image: 'images/conference_tables.png', title: 'Conference Tables' },
    { image: 'images/tables.png', title: 'Executive Tables' }
  ];

  if (heroBg && heroTitle && cards.length > 0) {
    let currentHeroIndex = 0;
    let isTransitioning = false;
    let heroInterval;
    let heroScrollLock = false;
    let heroScrollLockTimer;

    const scroller = document.getElementById('heroScroller');

    function lockHeroScroll() {
      heroScrollLock = true;
      if (heroScrollLockTimer) {
        clearTimeout(heroScrollLockTimer);
      }
      heroScrollLockTimer = setTimeout(() => {
        heroScrollLock = false;
      }, 500);
    }

    function showHeroSlide(index) {
      if (isTransitioning || index === currentHeroIndex) return;
      isTransitioning = true;
      currentHeroIndex = index;

      // Update cards immediately and scroll active one into center view
      cards.forEach((card, idx) => {
        if (idx === index) {
          card.classList.add('active');
          if (scroller && !heroScrollLock) {
            const scrollerWidth = scroller.clientWidth;
            const cardWidth = card.clientWidth;
            const relativeLeft = card.offsetParent === scroller
              ? card.offsetLeft
              : card.offsetLeft - scroller.offsetLeft;
            const targetLeft = relativeLeft - (scrollerWidth / 2) + (cardWidth / 2);
            scroller.scrollTo({
              left: targetLeft,
              behavior: 'auto'
            });
          }
        } else {
          card.classList.remove('active');
        }
      });

      // Fade out background and title
      heroBg.classList.add('fade-out');
      heroTitle.classList.add('fade-out');

      setTimeout(() => {
        // Change slide image and text
        heroBg.style.backgroundImage = `url('${slideData[index].image}')`;
        heroTitle.textContent = slideData[index].title;

        // Fade in
        heroBg.classList.remove('fade-out');
        heroTitle.classList.remove('fade-out');

        isTransitioning = false;
      }, 350); // Matches transition duration
    }

    if (scroller) {
      ['wheel', 'touchstart', 'touchmove', 'pointerdown'].forEach(eventName => {
        scroller.addEventListener(eventName, lockHeroScroll, { passive: true });
      });
    }

    function startHeroAutoplay() {
      heroInterval = setInterval(() => {
        const nextIndex = (currentHeroIndex + 1) % slideData.length;
        showHeroSlide(nextIndex);
      }, 3000);
    }

    function resetHeroAutoplay() {
      clearInterval(heroInterval);
      startHeroAutoplay();
    }

    cards.forEach((card, idx) => {
      card.addEventListener('click', () => {
        showHeroSlide(idx);
        resetHeroAutoplay();
      });
    });

    startHeroAutoplay();
  }

  // --- 11. Scroll Slideshow System ---
  const slideshowWrapper = document.querySelector('.scroll-slideshow-wrapper');
  const slides = document.querySelectorAll('.scroll-slide');
  const totalSlides = slides.length;
  let currentSlide = 0;
  let isAnimating = false;
  const cooldownTime = 1200; // ms, slightly longer than transition duration
  let dotsNav = null;

  function updateDots(index) {
    if (!dotsNav) return;
    const dots = dotsNav.querySelectorAll('.scroll-dot-btn');
    dots.forEach((dot, idx) => {
      if (idx === index) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    // Theme dots based on slide index (dark themes on 0 and 8, light on others)
    if (index === 0 || index === 8) {
      dotsNav.classList.add('theme-dark');
    } else {
      dotsNav.classList.remove('theme-dark');
    }
  }

  function updateHeaderTheme(index) {
    const header = document.getElementById('main-header');
    if (!header) return;
    if (index > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  function updateRevealAnimations(index) {
    slides.forEach((slide, idx) => {
      const reveals = slide.querySelectorAll('.reveal');
      if (idx === index) {
        reveals.forEach(el => {
          el.classList.add('in-view');
        });
      } else {
        reveals.forEach(el => {
          el.classList.remove('in-view');
        });
      }
    });
  }

  function enforceSlideshowLayouts() {
    const isActive = document.body.classList.contains('slideshow-active');

    // Target Moodboard Elements
    const moodboardSection = document.querySelector('.moodboard-section');
    const moodboardLeft = document.querySelector('.moodboard-left');
    const moodboardRight = document.querySelector('.moodboard-right');
    const moodboardContainer = document.querySelector('.moodboard-container');
    const productWrapper = document.querySelector('.product-image-wrapper');

    if (moodboardSection && moodboardLeft && moodboardRight) {
      if (isActive) {
        // Enforce horizontal flex row layout for Moodboard
        moodboardSection.style.setProperty('display', 'flex', 'important');
        moodboardSection.style.setProperty('flex-direction', 'row', 'important');
        moodboardSection.style.setProperty('padding-top', '0', 'important');
        moodboardSection.style.setProperty('padding-bottom', '0', 'important');
        moodboardSection.style.setProperty('height', '100vh', 'important');

        moodboardLeft.style.setProperty('height', '100vh', 'important');
        moodboardLeft.style.setProperty('width', '33.333%', 'important');
        moodboardLeft.style.setProperty('padding', '6rem 4rem', 'important');
        moodboardLeft.style.setProperty('display', 'flex', 'important');
        moodboardLeft.style.setProperty('flex-direction', 'column', 'important');
        moodboardLeft.style.setProperty('justify-content', 'center', 'important');

        moodboardRight.style.setProperty('height', '100vh', 'important');
        moodboardRight.style.setProperty('width', '66.666%', 'important');
        moodboardRight.style.setProperty('padding-top', '0', 'important');
        moodboardRight.style.setProperty('padding-bottom', '0', 'important');
        moodboardRight.style.setProperty('display', 'flex', 'important');
        moodboardRight.style.setProperty('align-items', 'center', 'important');

        if (moodboardContainer) {
          moodboardContainer.style.setProperty('gap', '3.5rem', 'important');
        }
        if (productWrapper) {
          productWrapper.style.setProperty('max-width', '450px', 'important');
        }
      } else {
        // Reset styles for normal vertical scrolling layout
        moodboardSection.style.removeProperty('display');
        moodboardSection.style.removeProperty('flex-direction');
        moodboardSection.style.removeProperty('padding-top');
        moodboardSection.style.removeProperty('padding-bottom');
        moodboardSection.style.removeProperty('height');

        moodboardLeft.style.removeProperty('height');
        moodboardLeft.style.removeProperty('width');
        moodboardLeft.style.removeProperty('padding');
        moodboardLeft.style.removeProperty('display');
        moodboardLeft.style.removeProperty('flex-direction');
        moodboardLeft.style.removeProperty('justify-content');

        moodboardRight.style.removeProperty('height');
        moodboardRight.style.removeProperty('width');
        moodboardRight.style.removeProperty('padding-top');
        moodboardRight.style.removeProperty('padding-bottom');
        moodboardRight.style.removeProperty('display');
        moodboardRight.style.removeProperty('align-items');

        if (moodboardContainer) {
          moodboardContainer.style.removeProperty('gap');
        }
        if (productWrapper) {
          productWrapper.style.removeProperty('max-width');
        }
      }
    }
  }

  function goToSlide(index) {
    if (index < 0 || index >= totalSlides || isAnimating) return;
    isAnimating = true;
    currentSlide = index;

    if (slideshowWrapper) {
      slideshowWrapper.style.transform = `translateY(-${currentSlide * 100}vh)`;
    }

    updateDots(currentSlide);
    updateHeaderTheme(currentSlide);
    updateRevealAnimations(currentSlide);
    enforceSlideshowLayouts();

    // Trigger three.js resize check if on moodboard slide (index 5)
    if (currentSlide === 5) {
      window.dispatchEvent(new Event('resize'));
    }

    setTimeout(() => {
      isAnimating = false;
    }, cooldownTime);
  }

  function createDotsNav() {
    if (document.querySelector('.scroll-dots-nav')) return;

    dotsNav = document.createElement('div');
    dotsNav.className = 'scroll-dots-nav';

    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('button');
      dot.className = 'scroll-dot-btn';
      if (i === 0) dot.className += ' active';
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => {
        goToSlide(i);
      });
      dotsNav.appendChild(dot);
    }

    document.body.appendChild(dotsNav);
    updateDots(currentSlide);
  }

  function destroyDotsNav() {
    const existingNav = document.querySelector('.scroll-dots-nav');
    if (existingNav) {
      existingNav.remove();
      dotsNav = null;
    }
  }

  function checkSlideshowActive() {
    document.body.classList.remove('slideshow-active');
    destroyDotsNav();
    enforceSlideshowLayouts();
    if (slideshowWrapper) {
      slideshowWrapper.style.transform = 'none';
    }
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'));
    updateScrollProgress();
  }

  window.addEventListener('resize', checkSlideshowActive);
  window.addEventListener('load', checkSlideshowActive);
  checkSlideshowActive();
});

/* =====================
   MEGA MENU PREVIEW
===================== */

const megaLinks = document.querySelectorAll('.mega-column a');
const previewImage = document.getElementById('megaPreviewImage');

const previewData = {
  "Executive Chairs": "products/Seating/Executive chairs/Baleno/62282.jpeg",
  "Conference Chairs": "products/Seating/Conference chairs/Conference 1/2dfa1798-478c-4dc3-affd-367b8b39cffc.jpeg",
  "Task Chairs": "products/Seating/Task chairs/802 abs/62335_Original.jpeg",
  "Lounge Chairs": "products/Seating/Lounge Chairs/Lounge 1/1BDE8421-06F0-496C-8E5F-DE8E1B0A5DEF.png",
  "Sofas": "products/Seating/Sofas/Sofa 1/IMG_3638.jpeg",
  "Iron Frame Workstations": "products/Workstations/Iron frame workstations/Aviator/054699fd-c69c-41cf-8d2a-95256d7dfcf0 2.jpeg",
  "Wooden Workstations": "products/Workstations/Wooden workstations/Oslo/IMG_3741.png",
  "Classroom Furniture": "products/Education/Classroom furniture/6189oJEcs1L._AC_AIweblab1006854,T4_FMavif_SF1050,1050_PQ64_.jpg",
  "Hostel Furniture": "products/Education/Hostel furniture/Hostel beds/22EC9130-D98B-4278-80C7-4FA4B7C57AD0.png",
  "Institutional Seating": "products/Education/Institutional seating/62357.jpeg",
  "Institutional Storage": "products/Education/Institutional storage/IMG_3008.png",
  "Staff Tables": "products/Education/Staff tables/IMG_3916.jpeg",
  "Cafe Tables": "products/Woodwork/Cafe tables/Cafe 1/0EE04ED1-0565-4D34-89CC-57544EA535EC.png",
  "Conference Tables": "products/Woodwork/Conference tables/Elite conference/IMG_4076.jpeg",
  "Executive Tables": "products/Woodwork/Executive tables/Enrich executive/IMG_3699.png",
  "Presidential Tables": "products/Woodwork/Presidential tables/Elite presidential table/IMG_3689.png",
  "Reception Tables": "products/Woodwork/Reception tables/Harmony/IMG_3656.png",
  "Almirah & Lockers": "products/Archiving/Almirah and lockers/51OGYdci2QL._AC_UF1000,1000_QL80_.jpeg",
  "Office Storage": "products/Archiving/Office Storage/Pedestal/IMG_3008.png",
  "Racks": "products/Archiving/Racks/46fc5215-9b94-45ef-92f4-8d251aacd804.jpeg"
};

megaLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    const item = link.textContent.trim();
    if (previewImage && previewData[item]) {
      previewImage.src = previewData[item];
    }
  });
});

// --- Product card image scroller dot indicator updates on scroll ---
document.querySelectorAll('.product-image-scroller').forEach(scroller => {
  const dots = scroller.parentElement.querySelectorAll('.scroller-dot');
  scroller.addEventListener('scroll', () => {
    const scrollLeft = scroller.scrollLeft;
    const width = scroller.clientWidth;
    const activeIndex = Math.round(scrollLeft / width);
    dots.forEach((dot, index) => {
      if (index === activeIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  });
});

// --- Arrow navigation for product card image scrollers ---
document.querySelectorAll('.product-image-container, .product-card-image-wrapper').forEach(container => {
  const scroller = container.querySelector('.product-image-scroller');
  if (!scroller) return;

  const prevBtn = container.querySelector('.scroller-arrow-prev');
  const nextBtn = container.querySelector('.scroller-arrow-next');

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent triggering card clicks
      const width = scroller.clientWidth;
      scroller.scrollBy({ left: -width, behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent triggering card clicks
      const width = scroller.clientWidth;
      scroller.scrollBy({ left: width, behavior: 'smooth' });
    });
  }
});

// --- Product card redirect to dynamic details page ---
document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('click', (e) => {
    // If user clicks on interactive elements (arrows, dots), do not redirect
    if (e.target.closest('.scroller-arrow') || e.target.closest('.product-scroller-dots') || e.target.closest('.scroller-dot')) {
      return;
    }

    const nameEl = card.querySelector('.product-name');
    if (!nameEl) return;
    const name = nameEl.innerText.trim();
    
    // Extract category slug from the filename
    const filename = window.location.pathname.split('/').pop() || 'index.html';
    let category = filename.replace('.html', '');
    if (category === '' || category === 'index') {
      category = 'sofas'; // default fallback for test index clicks
    }
    
    // Slugify name
    const productSlug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    
    // Redirect
    window.location.href = `product-detail.html?cat=${category}&prod=${productSlug}`;
  });
});
