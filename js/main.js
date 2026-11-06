/**
 * EDISH CONNECT — EXECUTIVE INTERACTIVE ENGINE
 * High-performance UI interactions, Astrolabe canvas, 9 Hz wave synthesizer,
 * Staircase Progression Navigator & Enterprise Model Calculator.
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroCanvas();
  initStaircaseNavigator();
  initCulturalFitSynthesizer();
  initWaveVisualizer();
  initModelEstimator();
  initHeaderScroll();
  initLiquidGlassNav();
  initSmoothNav();
  initModalInteractions();

  // Support direct initial scroll offset or forced scrolled test via URL param
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('scroll')) {
    const scrollY = parseInt(urlParams.get('scroll')) || 600;
    window.scrollTo(0, scrollY);
  }
});

/* ===================================================================
   1. HERO ASTROLABE & GEOMETRIC CANVAS
   Inspired by Jantar Mantar celestial geometry & network nodes
   =================================================================== */
function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };

  function resize() {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
    createParticles();
  }

  function createParticles() {
    particles = [];
    const count = Math.min(Math.floor((width * height) / 14000), 55);
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1.2,
        baseColor: Math.random() > 0.4 ? 'rgba(200, 155, 60,' : 'rgba(15, 34, 61,',
        alpha: Math.random() * 0.5 + 0.2
      });
    }
  }

  window.addEventListener('resize', resize);
  resize();

  window.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.targetX = e.clientX - rect.left;
    mouse.targetY = e.clientY - rect.top;
  });

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // Mouse smoothing
    mouse.x += (mouse.targetX - mouse.x) * 0.1;
    mouse.y += (mouse.targetY - mouse.y) * 0.1;

    // Draw astrolabe concentric faint orbits in background
    const centerX = width * 0.75;
    const centerY = height * 0.45;
    ctx.save();
    ctx.strokeStyle = 'rgba(200, 155, 60, 0.05)';
    ctx.lineWidth = 1;
    [120, 220, 340].forEach((r, idx) => {
      ctx.beginPath();
      ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
      ctx.stroke();
    });
    ctx.restore();

    // Update and draw nodes
    for (let i = 0; i < particles.length; i++) {
      let p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      // Mouse gentle repel
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        p.x += (dx / dist) * 1.5;
        p.y += (dy / dist) * 1.5;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.baseColor + p.alpha + ')';
      ctx.fill();

      // Connect near neighbors
      for (let j = i + 1; j < particles.length; j++) {
        let p2 = particles[j];
        let d = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (d < 110) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(200, 155, 60, ${0.15 * (1 - d / 110)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
}

/* ===================================================================
   2. INTERACTIVE CULTURAL FIT SYNTHESIZER
   Dynamic Ethos demonstration (Germany, Nordics, USA, Switzerland)
   =================================================================== */
const CULTURAL_PRESETS = {
  germany: {
    flag: '🇩🇪',
    title: 'German Precision',
    photo: 'assets/images/munich_industrial_precision.jpg',
    photoTag: 'Munich • DIN Standard',
    synthesisQuote: 'Deterministic architecture synchronized with Indian mathematical rigor and DIN compliance.',
    synergyPill: 'Calculated Determinism & Zero Defects'
  },
  usa: {
    flag: '🇺🇸',
    title: 'Silicon Valley Velocity',
    photo: 'assets/images/engineering_pod_collaboration.jpg',
    photoTag: 'Silicon Valley • Sprints',
    synthesisQuote: 'Continuous 24/7 follow-the-sun velocity with zero metro market churn.',
    synergyPill: '24/7 Follow-the-Sun Velocity'
  },
  nordics: {
    flag: '🇸🇪',
    title: 'Nordic Low-Churn',
    photo: 'assets/images/modern_tech_center.jpg',
    photoTag: 'Stockholm • Low Churn',
    synthesisQuote: 'Flat-hierarchy collaboration preserving permanent architectural memory with 98% retention.',
    synergyPill: 'Institutional Memory & Low Churn'
  },
  swiss: {
    flag: '🇨🇭',
    title: 'Swiss Banking Security',
    photo: 'assets/images/executive_boardroom_gcc.jpg',
    photoTag: 'Zurich • Bank-Grade Security',
    synthesisQuote: 'Bank-grade ring-fenced IP with sovereign compliance and cryptographic security.',
    synergyPill: 'Bank-Grade Ring-Fenced IP'
  }
};

function initCulturalFitSynthesizer() {
  const buttons = document.querySelectorAll('.culture-toggle-btn');
  const flagEl = document.getElementById('cultureFlag');
  const titleEl = document.getElementById('cultureTitle');
  const traitsEl = document.getElementById('cultureTraits');
  const quoteEl = document.getElementById('cultureQuote');
  const pillEl = document.getElementById('culturePill');
  const photoEl = document.getElementById('culturePhoto');
  const photoTagEl = document.getElementById('culturePhotoTag');

  if (!buttons.length || !titleEl) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const key = btn.getAttribute('data-culture');
      const data = CULTURAL_PRESETS[key];
      if (!data) return;

      // Animate content swap
      const elements = [flagEl, titleEl, traitsEl, quoteEl, pillEl, photoEl, photoTagEl].filter(Boolean);
      elements.forEach(el => {
        el.style.opacity = '0.3';
      });

      setTimeout(() => {
        if (flagEl) flagEl.textContent = data.flag;
        if (titleEl) titleEl.textContent = data.title;
        if (traitsEl && data.traits) traitsEl.textContent = data.traits;
        if (quoteEl) quoteEl.textContent = data.synthesisQuote;
        if (pillEl) pillEl.textContent = data.synergyPill;
        if (photoEl && data.photo) photoEl.src = data.photo;
        if (photoTagEl && data.photoTag) photoTagEl.textContent = data.photoTag;

        elements.forEach(el => {
          el.style.opacity = '1';
        });
      }, 140);
    });
  });

  // Test simulation override via URL param e.g. ?simulate=usa
  const simParams = new URLSearchParams(window.location.search);
  if (simParams.has('simulate')) {
    const simKey = simParams.get('simulate');
    const targetBtn = document.querySelector(`.culture-toggle-btn[data-culture="${simKey}"]`);
    if (targetBtn) targetBtn.click();
  }
}

/* ===================================================================
   3. THE STAIRCASE PROGRESSION NAVIGATOR
   4-Step Strategic Pathway (Pod -> ODC -> BOT -> Sovereign GCC)
   =================================================================== */
const STAIRCASE_STAGES = [
  {
    step: '01',
    name: 'Engineering Pod',
    badge: 'Stage 01 • Scoped Proof of Capability',
    heading: 'Validate India with High-Velocity Dedicated Pods.',
    desc: 'The fastest, lowest-friction entry point. A self-contained, senior engineering pod executing against an explicit backlog, managed under your sprint rituals. Zero legal overhead, immediate velocity.',
    photo: 'assets/images/engineering_pod_collaboration.jpg',
    photoOverlay: 'Stage 01 • Scoped Autonomous Agile Pod',
    controlPct: 40,
    controlLabel: 'Sprint & Backlog Governance',
    specs: [
      { label: 'Time to First Sprint', val: '2 to 3 Weeks' },
      { label: 'Operational Footprint', val: 'Zero Local Entity Required' },
      { label: 'Team Size', val: '4 to 12 Senior Engineers' },
      { label: 'Commercial Structure', val: 'Fixed Sprint / Managed Pod' }
    ]
  },
  {
    step: '02',
    name: 'Dedicated ODC',
    badge: 'Stage 02 • Fully Managed Dedicated Center',
    heading: 'Your Named Center Without Foreign Entity Overhead.',
    desc: 'A branded, dedicated Offshore Development Center functioning as a direct extension of your engineering department. Edish handles talent acquisition, facilities, equipment, payroll, and compliance while you control technical standards and architectural direction.',
    photo: 'assets/images/modern_tech_center.jpg',
    photoOverlay: 'Stage 02 • Branded Dedicated ODC Infrastructure',
    controlPct: 75,
    controlLabel: 'Complete Technical & Cultural Control',
    specs: [
      { label: 'Time to Full Ramp', val: '45 to 60 Days' },
      { label: 'Operating Entity', val: 'Edish Hosted & Fully Managed' },
      { label: 'Team Size', val: '15 to 80 Engineers' },
      { label: 'IP Ring-Fencing', val: '100% Client-Owned Intellectual Property' }
    ]
  },
  {
    step: '03',
    name: 'Build-Operate-Transfer (BOT)',
    badge: 'Stage 03 • De-risked Pathway to Ownership',
    heading: 'Incubate, Mature, and Legally Transfer the Asset.',
    desc: 'The gold standard for enterprises seeking eventual 100% ownership without early operational risk. Edish establishes the physical campus, hires the talent, establishes legal compliances, operates it through maturity, and transfers complete equity to your balance sheet after a defined window (e.g. 18–36 months).',
    photo: 'assets/images/executive_boardroom_gcc.jpg',
    photoOverlay: 'Stage 03 • Incubated Scale & Legal Entity Transfer',
    controlPct: 90,
    controlLabel: 'High Operational Influence & Pre-transfer Autonomy',
    specs: [
      { label: 'Transfer Window', val: '18 to 36 Months' },
      { label: 'Risk Mitigation', val: 'Zero Day-1 Regulatory Drag' },
      { label: 'Team Size', val: '50 to 200+ Specialists' },
      { label: 'Transfer Cost Structure', val: 'Pre-Agreed Fixed Valuation Formula' }
    ]
  },
  {
    step: '04',
    name: 'Sovereign GCC',
    badge: 'Stage 04 • The Ultimate Corporate Destination',
    heading: 'A Sovereign Global Capability Center on Your Balance Sheet.',
    desc: 'Full corporate ownership. Your own Indian Private Limited entity, bespoke physical infrastructure, direct employment contracts, and multi-disciplinary capability spanning Product, AI, R&D, and Global Shared Services.',
    photo: 'assets/images/enterprise_capability_campus.jpg',
    photoOverlay: 'Stage 04 • Sovereign Campus & 100% Asset Ownership',
    controlPct: 100,
    controlLabel: '100% Sovereign Balance Sheet Asset',
    specs: [
      { label: 'Entity Status', val: 'Wholly-Owned Foreign Subsidiary' },
      { label: 'Strategic Functions', val: 'Core R&D, Global Platforms, Executive Leadership' },
      { label: 'Target Team Scale', val: '100 to 500+ Engineers' },
      { label: 'Long-term TCO', val: '55%–65% Structural Savings vs Metro Metros' }
    ]
  }
];

function initStaircaseNavigator() {
  const stepButtons = document.querySelectorAll('.stair-step-btn');
  const badgeEl = document.getElementById('stageBadge');
  const headingEl = document.getElementById('stageHeading');
  const descEl = document.getElementById('stageDesc');
  const specsContainer = document.getElementById('stageSpecsGrid');
  const meterBar = document.getElementById('stageMeterFill');
  const meterLabel = document.getElementById('stageMeterLabel');
  const meterPct = document.getElementById('stageMeterPct');
  const photoEl = document.getElementById('stagePhoto');
  const photoOverlayEl = document.getElementById('stagePhotoOverlay');

  if (!stepButtons.length || !headingEl) return;

  function renderStage(idx) {
    const data = STAIRCASE_STAGES[idx];
    if (!data) return;

    stepButtons.forEach((btn, i) => {
      btn.classList.toggle('active', i === idx);
    });

    if (badgeEl) badgeEl.textContent = data.badge;
    if (headingEl) headingEl.textContent = data.heading;
    if (descEl) descEl.textContent = data.desc;

    if (meterBar) meterBar.style.width = `${data.controlPct}%`;
    if (meterLabel) meterLabel.textContent = data.controlLabel;
    if (meterPct) meterPct.textContent = `${data.controlPct}% Control`;

    if (photoEl && data.photo) {
      photoEl.style.opacity = '0.4';
      setTimeout(() => {
        photoEl.src = data.photo;
        if (photoOverlayEl) photoOverlayEl.textContent = data.photoOverlay;
        photoEl.style.opacity = '1';
      }, 120);
    }

    if (specsContainer) {
      specsContainer.innerHTML = data.specs.map(s => `
        <div class="spec-item">
          <span class="spec-label">${s.label}</span>
          <div class="spec-val">${s.val}</div>
        </div>
      `).join('');
    }
  }

  stepButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      renderStage(index);
    });
  });

  // Render initial
  renderStage(0);
}

/* ===================================================================
   4. THE 9 HZ FREQUENCY / ALPHA WAVE VISUALIZER
   The neuroscience behind "Edish" — Where Engineering Meets Inspiration
   =================================================================== */
function initWaveVisualizer() {
  const canvas = document.getElementById('waveCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let phase = 0;
  let targetFrequency = 9; // 9 Hz default
  let currentFreq = 9;

  function resize() {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  function animate() {
    ctx.clearRect(0, 0, width, height);

    currentFreq += (targetFrequency - currentFreq) * 0.05;
    phase += currentFreq * 0.012;

    const centerY = height / 2;
    const amplitude = height * 0.3;

    // Draw central guide line
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(width, centerY);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.setLineDash([4, 4]);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw Harmonic Wave (9 Hz Alpha Wave)
    ctx.beginPath();
    ctx.lineWidth = 2.5;

    const gradient = ctx.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop(0, 'rgba(200, 155, 60, 0.3)');
    gradient.addColorStop(0.5, 'rgba(223, 177, 91, 1)');
    gradient.addColorStop(1, 'rgba(200, 155, 60, 0.4)');
    ctx.strokeStyle = gradient;

    for (let x = 0; x < width; x++) {
      // Sine harmonic combination
      const freqMultiplier = (currentFreq / 9) * 0.035;
      const y = centerY + Math.sin(x * freqMultiplier + phase) * amplitude
                        + Math.sin(x * freqMultiplier * 0.5 + phase * 0.8) * (amplitude * 0.2);
      if (x === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();

    // Subtle glow overlay
    ctx.save();
    ctx.shadowBlur = 12;
    ctx.shadowColor = 'rgba(200, 155, 60, 0.6)';
    ctx.stroke();
    ctx.restore();

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);

  // Frequency Mode Toggle Buttons
  const freqButtons = document.querySelectorAll('.freq-tab-btn');
  const hzDisplay = document.getElementById('hzDisplayNum');
  const hzTitle = document.getElementById('hzStateTitle');

  freqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      freqButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const freq = parseFloat(btn.getAttribute('data-freq') || '9');
      targetFrequency = freq;

      if (hzDisplay) hzDisplay.textContent = freq.toString();
      if (hzTitle) {
        if (freq === 9) {
          hzTitle.textContent = 'Alpha Wave • Flow State & Synthesis';
        } else if (freq === 20) {
          hzTitle.textContent = 'Beta Wave • Transactional Outsourcing Stress';
        } else {
          hzTitle.textContent = 'Theta Wave • Abstract Brainstorming';
        }
      }
    });
  });
}

/* ===================================================================
   5. INTERACTIVE GCC / ODC MODEL CALCULATOR
   Custom recommendation engine for enterprise leaders
   =================================================================== */
function initModelEstimator() {
  const teamSlider = document.getElementById('calcTeamSize');
  const teamVal = document.getElementById('calcTeamVal');
  const timelineRadios = document.querySelectorAll('input[name="calcTimeline"]');
  const ownershipRadios = document.querySelectorAll('input[name="calcOwnership"]');

  const recName = document.getElementById('recModelName');
  const recExpl = document.getElementById('recModelExplanation');
  const recTime = document.getElementById('recRampTime');
  const recRet = document.getElementById('recRetention');
  const recTco = document.getElementById('recTco');

  if (!teamSlider || !recName) return;

  function updateRecommendation() {
    const teamSize = parseInt(teamSlider.value, 10);
    if (teamVal) teamVal.textContent = `${teamSize} Engineers`;

    let selectedTimeline = 'medium';
    timelineRadios.forEach(r => { if (r.checked) selectedTimeline = r.value; });

    let selectedOwnership = 'flexible';
    ownershipRadios.forEach(r => { if (r.checked) selectedOwnership = r.value; });

    let model = 'Dedicated ODC';
    let explanation = '';
    let ramp = '4 to 6 Weeks';
    let retention = '98.2%';
    let tco = '58% Structural Efficiency';

    if (teamSize < 20 && selectedOwnership !== 'direct') {
      model = 'Dedicated Engineering Pod / ODC';
      explanation = `For a focused squad of ${teamSize} engineers with agile requirements, a managed ODC eliminates entity overhead while guaranteeing complete IP sovereignty and sprint integration.`;
      ramp = '3 to 4 Weeks';
      retention = '98.5%';
      tco = '55% vs Metros';
    } else if (teamSize >= 20 && teamSize < 60 && selectedOwnership === 'transfer') {
      model = 'Build-Operate-Transfer (BOT)';
      explanation = `A cohort of ${teamSize} specialists is prime for a BOT structure: Edish de-risks initial operations in Jaipur, proving out delivery before transferring legal ownership to you in 24 months.`;
      ramp = '6 to 8 Weeks';
      retention = '97.8%';
      tco = '62% vs Metros';
    } else if (teamSize >= 60 || selectedOwnership === 'direct') {
      model = 'Sovereign Global Capability Center (GCC)';
      explanation = `At scale (${teamSize}+ personnel) with long-term strategic priority, establishing a dedicated wholly-owned Indian subsidiary represents maximum asset value, sovereign corporate IP, and institutional resilience.`;
      ramp = '90 to 120 Days';
      retention = '96.5%';
      tco = '66% vs Metros';
    } else {
      model = 'Enterprise Managed ODC';
      explanation = `A dedicated center of ${teamSize} engineers managed by Edish with pre-agreed SLAs, enterprise governance, and an optional conversion clause to BOT or GCC at year two.`;
      ramp = '5 to 7 Weeks';
      retention = '98.0%';
      tco = '60% vs Metros';
    }

    recName.textContent = model;
    if (recExpl) recExpl.textContent = explanation;
    if (recTime) recTime.textContent = ramp;
    if (recRet) recRet.textContent = retention;
    if (recTco) recTco.textContent = tco;

    // Pre-populate proposal modal hidden field if exists
    const hiddenModel = document.getElementById('modalSelectedModel');
    if (hiddenModel) hiddenModel.value = `${model} (${teamSize} engineers)`;
  }

  teamSlider.addEventListener('input', updateRecommendation);
  timelineRadios.forEach(r => r.addEventListener('change', updateRecommendation));
  ownershipRadios.forEach(r => r.addEventListener('change', updateRecommendation));

  updateRecommendation();
}

/* ===================================================================
   6. HEADER SCROLL & GLASS TRANSITION ENGINE (Vectoras Lab Pattern)
   Transitions smoothly: glass-nav-transparent -> glass-nav glass-nav-scrolled
   Animates max-w-7xl -> max-w-5xl, rounded-3xl -> rounded-2xl, px/py compression
   =================================================================== */
function initHeaderScroll() {
  const navbar = document.getElementById('navbar') || document.querySelector('.nav-dock');
  const header = document.querySelector('.site-header');
  if (!navbar) return;

  const transparentClasses = ['max-w-7xl', 'rounded-3xl', 'px-6', 'py-4', 'md:px-8', 'md:py-5', 'glass-nav-transparent'];
  const scrolledClasses = ['max-w-5xl', 'rounded-2xl', 'px-6', 'py-3.5', 'md:px-7', 'md:py-4', 'glass-nav', 'glass-nav-scrolled'];

  const applyNavState = (isScrolled) => {
    if (isScrolled) {
      transparentClasses.forEach(cls => navbar.classList.remove(cls));
      scrolledClasses.forEach(cls => navbar.classList.add(cls));
      if (header) {
        header.classList.add('scrolled', 'glass-nav-scroll');
        header.classList.remove('glass-nav-transparent');
      }
    } else {
      scrolledClasses.forEach(cls => navbar.classList.remove(cls));
      transparentClasses.forEach(cls => navbar.classList.add(cls));
      if (header) {
        header.classList.remove('scrolled', 'glass-nav-scroll');
        header.classList.add('glass-nav-transparent');
      }
    }
  };

  const handleScroll = () => {
    const isScrolled = window.scrollY > 20;
    applyNavState(isScrolled);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Test override via URL parameter ?test_scrolled=1
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('test_scrolled')) {
    applyNavState(true);
  }

  const mobileBtn = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileBtn.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    document.addEventListener('click', (e) => {
      if (mobileDrawer.classList.contains('open') && !mobileDrawer.contains(e.target) && !mobileBtn.contains(e.target)) {
        mobileDrawer.classList.remove('open');
        mobileBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }
}

/* Dynamic Cursor Tracking for Liquid Glass Specular Highlight */
function initLiquidGlassNav() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  header.addEventListener('mousemove', (e) => {
    const rect = header.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    header.style.setProperty('--mouse-x', `${x}px`);
    header.style.setProperty('--mouse-y', `${y}px`);
  });

  header.addEventListener('mouseleave', () => {
    header.style.setProperty('--mouse-x', '50%');
    header.style.setProperty('--mouse-y', '35px');
  });
}

/* Smooth Scrolling with Offset for Navigation Links */
function initSmoothNav() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#' || targetId.startsWith('#modal') || this.hasAttribute('data-open-modal')) return;
      
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        
        // If mobile drawer was open, close it
        const mobileDrawer = document.getElementById('mobileDrawer');
        if (mobileDrawer && mobileDrawer.classList.contains('open')) {
          mobileDrawer.classList.remove('open');
          document.body.style.overflow = '';
        }

        // Update active class on nav links if within desktop nav
        document.querySelectorAll('.nav-menu .nav-link').forEach(link => {
          link.classList.remove('active');
        });
        if (this.classList.contains('nav-link')) {
          this.classList.add('active');
        }

        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* ===================================================================
   7. PROPOSAL MODAL & EXECUTIVE CONSULTATION FORM
   =================================================================== */
function initModalInteractions() {
  const openButtons = document.querySelectorAll('[data-open-modal]');
  const modal = document.getElementById('proposalModal');
  const closeBtn = document.getElementById('closeModalBtn');

  if (!modal) return;

  function openModal() {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });

  // Handle Form Submission Interactivity
  const consultationForms = document.querySelectorAll('.executive-inquiry-form');
  consultationForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Submit';

      if (submitBtn) {
        submitBtn.innerHTML = 'Securing Executive Briefing...';
        submitBtn.disabled = true;
      }

      setTimeout(() => {
        form.innerHTML = `
          <div style="text-align: center; padding: 40px 20px;">
            <div style="width: 56px; height: 56px; border-radius: 50%; background: rgba(200, 155, 60, 0.15); color: #c89b3c; font-size: 1.8rem; display: flex; align-items: center; justify-content: center; margin: 0 auto 18px;">✓</div>
            <h3 style="color: #081426; font-size: 1.4rem; margin-bottom: 8px;">Executive Briefing Scheduled</h3>
            <p style="color: #4a5568; font-size: 0.95rem; line-height: 1.6; max-width: 480px; margin: 0 auto;">
              Thank you. Our founding advisory council in Jaipur and our European client engagement lead will review your requirements and reach out within 24 business hours with a tailored architectural proposal.
            </p>
          </div>
        `;
      }, 1200);
    });
  });
}
