/**
 * LAHOAITHU E-COMMERCE ACADEMY - MAIN SCRIPT
 * High-performance Vanilla JS
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHeroCarousel();
  initCourseExplorer();
  initCounterAnimation();
  initLeadForm();
  initFacilityModal();
});

/* --------------------------------------------------------------------------
   1. NAVBAR & MOBILE MENU
   -------------------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky Navbar on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      menuToggle.innerHTML = isOpen 
        ? '<svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>'
        : '<svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>';
    });

    // Close menu when clicking nav links
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        if (menuToggle) {
          menuToggle.innerHTML = '<svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>';
        }
      });
    });
  }
}

/* --------------------------------------------------------------------------
   2. HERO BACKGROUND CAROUSEL
   -------------------------------------------------------------------------- */
function initHeroCarousel() {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.carousel-dot');
  if (!slides.length) return;

  let currentSlide = 0;
  const totalSlides = slides.length;
  let slideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    currentSlide = index;
  }

  function nextSlide() {
    let next = (currentSlide + 1) % totalSlides;
    showSlide(next);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      clearInterval(slideInterval);
      showSlide(index);
      startAutoPlay();
    });
  });

  function startAutoPlay() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  startAutoPlay();
}

/* --------------------------------------------------------------------------
   3. CÁC KHOÁ HỌC TẠI LAHOAITHU - INTERACTIVE COURSE EXPLORER
   -------------------------------------------------------------------------- */
const COURSES_DATA = {
  tiktok: {
    title: "Khoá Học TikTok Shop Thực Chiến Toàn Diện (A-Z)",
    badge: "Xu hướng 2026",
    image: "./assets/hero_banner_1.jpg",
    desc: "Đào tạo từ xây kênh, sáng tạo video ngắn gắn giỏ hàng triệu view, thiết lập gian hàng chuẩn SEO TikTok Shop, liên kết Affiliate & KOC và chạy quảng cáo TikTok Ads tối ưu ROAS x5.",
    tech: ["TikTok Shop Seller Center", "CapCut Pro Video", "TikTok Ads Manager", "Affiliate Network", "AI Script Writing"],
    curriculum: [
      "Xây dựng định vị kênh & chiến lược content chuyển đổi cao",
      "Kỹ thuật tối ưu SEO sản phẩm leo Top tìm kiếm sàn TikTok",
      "Quy trình săn & booking KOC/KOL Affiliate bùng nổ đơn hàng",
      "Thiết lập & tối ưu chiến dịch TikTok Ads (GMV Max, Shopping Ads)"
    ],
    oldPrice: "12.500.000đ",
    newPrice: "6.890.000đ",
    tagline: "Bảo đảm ra đơn ngay trong khoá học!"
  },
  shopee: {
    title: "Khoá Học Shopee Master Bán Hàng Đỉnh Cao",
    badge: "Bền vững & Ổn định",
    image: "./assets/hero_banner_2.jpg",
    desc: "Chiến lược xây dựng gian hàng Shopee Mall / Yêu thích chuẩn chỉnh, tối ưu chỉ số chuyển đổi, kỹ thuật đấu thầu từ khóa thông minh, tham gia Flash Sale sàn và giữ top bán chạy.",
    tech: ["Shopee Kênh Người Bán", "Shopee Quảng Cáo Nâng Cao", "Tool Nghiên Cứu Thị Trường", "Phần Mềm Quản Lý Kho Đa Kênh"],
    curriculum: [
      "Nghiên cứu thị trường & chọn sản phẩm 'ngách' win",
      "Thiết kế hình ảnh & video sản phẩm chuẩn chuẩn hóa tăng CTR",
      "Tuyệt chiêu đấu thầu từ khóa và quảng cáo khám phá chi phí thấp",
      "Xây dựng hệ thống chăm sóc khách hàng tự động & re-marketing"
    ],
    oldPrice: "10.000.000đ",
    newPrice: "5.490.000đ",
    tagline: "Nắm vững thuật toán Shopee mới nhất!"
  },
  livestream: {
    title: "Khoá Nghệ Thuật Livestream Triệu View & Đột Phá Doanh Số",
    badge: "Thực chiến tại Studio",
    image: "./assets/classroom_1.jpg",
    desc: "Cầm tay chỉ việc trực tiếp tại phòng Studio chuẩn 4K của Lahioaithu. Rèn luyện khẩu khí, kịch bản ghim deal cuốn hút, kỹ năng tương tác giữ chân người xem và bẻ khoá mắt xem.",
    tech: ["Studio 4K & Softbox", "OBS Studio Pro", "Phần Mềm Chốt Đơn Tự Động", "Thiết Bị Âm Thanh Chuyên Nghiệp"],
    curriculum: [
      "Kỹ thuật giải phóng hình thể, phong thái & năng lượng trước camera",
      "Kịch bản Livestream 5 bước kéo và giữ mắt xem nghìn view",
      "Bí quyết tung deal, kích thích tâm lý FOMO mua hàng tức thì",
      "Vận hành phòng live: Đội ngũ Backstage, Seeding và ghim giỏ hàng"
    ],
    oldPrice: "15.000.000đ",
    newPrice: "8.990.000đ",
    tagline: "Thực hành trực tiếp tại Studio của học viện!"
  },
  automation: {
    title: "Khoá Tự Động Hóa Vận Hành, Quản Trị & AI TMĐT",
    badge: "Dành cho Chủ Shop & Doanh Nghiệp",
    image: "./assets/classroom_2.jpg",
    desc: "Ứng dụng Trí tuệ nhân tạo (AI) và hệ thống CRM tự động hóa khâu xử lý đơn hàng, kế toán dòng tiền, kiểm soát hoàn hàng, đồng bộ kho đa sàn và nhân bản đội ngũ bán hàng.",
    tech: ["AI Automation Tools", "ERP / CRM Đa Sàn", "Chatbot AI CSKH", "Dashboard PowerBI Doanh Thu"],
    curriculum: [
      "Xây dựng sơ đồ vận hành tự động hoá không phụ thuộc con người",
      "Ứng dụng ChatGPT & AI tạo content, hình ảnh và video hàng loạt",
      "Kiểm soát tài chính, tỷ lệ hoàn hàng và tối ưu dòng tiền lãi thực",
      "Xây dựng KPI & đào tạo đội ngũ nhân sự livestream, ads, kho vận"
    ],
    oldPrice: "18.000.000đ",
    newPrice: "9.900.000đ",
    tagline: "Tiết kiệm 70% thời gian quản lý & chi phí nhân sự!"
  }
};

function initCourseExplorer() {
  const tabBtns = document.querySelectorAll('.course-tab-btn');
  const panel = document.getElementById('course-detail-panel');
  if (!tabBtns.length || !panel) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const courseKey = btn.getAttribute('data-course');
      if (!courseKey || !COURSES_DATA[courseKey]) return;

      // Update active tab button
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Smooth switch animation
      panel.classList.add('switching');

      setTimeout(() => {
        const data = COURSES_DATA[courseKey];
        
        // Update Panel Content
        document.getElementById('detail-image').src = data.image;
        document.getElementById('detail-tag').textContent = data.badge;
        document.getElementById('detail-title').textContent = data.title;
        document.getElementById('detail-desc').textContent = data.desc;
        document.getElementById('detail-old-price').textContent = data.oldPrice;
        document.getElementById('detail-new-price').textContent = data.newPrice;

        // Render Tech Tags
        const techContainer = document.getElementById('detail-tech');
        techContainer.innerHTML = data.tech.map(t => `<span class="meta-pill">⚡ ${t}</span>`).join('');

        // Render Curriculum
        const curContainer = document.getElementById('detail-curriculum');
        curContainer.innerHTML = data.curriculum.map(item => `
          <div class="curriculum-item">
            <span class="curriculum-icon">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            </span>
            <span>${item}</span>
          </div>
        `).join('');

        // Fade back in
        panel.classList.remove('switching');
      }, 200);
    });
  });
}

/* --------------------------------------------------------------------------
   4. SCROLL NUMBER COUNTER ANIMATION
   -------------------------------------------------------------------------- */
function initCounterAnimation() {
  const counters = document.querySelectorAll('.counter-val');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-target'), 10);
        animateValue(entry.target, 0, target, 1800);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start).toLocaleString();
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

/* --------------------------------------------------------------------------
   5. FORM SUBMISSION & EMAIL NOTIFICATION
   -------------------------------------------------------------------------- */
function initLeadForm() {
  const form = document.getElementById('lead-register-form');
  const modal = document.getElementById('success-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullName = form.querySelector('[name="fullname"]').value.trim();
    const phone = form.querySelector('[name="phone"]').value.trim();
    const course = form.querySelector('[name="course"]').value;
    const contactMethod = form.querySelector('[name="contact_method"]').value;
    const notes = form.querySelector('[name="notes"]').value.trim();

    if (!fullName || !phone) {
      alert('Vui lòng điền đầy đủ Họ tên và Số điện thoại / Zalo!');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>Đang gửi thông tin...</span>';
    submitBtn.disabled = true;

    // Simulate sending via EmailJS / Formspree / Backend API
    setTimeout(() => {
      submitBtn.innerHTML = originalBtnText;
      submitBtn.disabled = false;
      form.reset();

      // Show Success Modal
      if (modal) {
        modal.classList.add('active');
      }
    }, 900);
  });

  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  // Close modal when clicking outside
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }
}

/* --------------------------------------------------------------------------
   6. FACILITY LIGHTBOX VIEWER
   -------------------------------------------------------------------------- */
function initFacilityModal() {
  const facilityCards = document.querySelectorAll('.facility-card');
  const imageModal = document.getElementById('image-viewer-modal');
  const modalImg = document.getElementById('viewer-img');
  const modalTitle = document.getElementById('viewer-title');
  const closeViewerBtn = document.getElementById('close-viewer-btn');

  if (!facilityCards.length || !imageModal) return;

  facilityCards.forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      const title = card.querySelector('.facility-title');
      if (img && modalImg) {
        modalImg.src = img.src;
        if (modalTitle && title) {
          modalTitle.textContent = title.textContent;
        }
        imageModal.classList.add('active');
      }
    });
  });

  if (closeViewerBtn) {
    closeViewerBtn.addEventListener('click', () => {
      imageModal.classList.remove('active');
    });
  }

  imageModal.addEventListener('click', (e) => {
    if (e.target === imageModal) {
      imageModal.classList.remove('active');
    }
  });
  /* Xử lý Accordion đóng mở ở Footer trên Mobile */
document.querySelectorAll('.footer-toggle-title').forEach(title => {
  title.addEventListener('click', () => {
    const parentCol = title.parentElement;
    parentCol.classList.toggle('open');
  });
});
/* Tính năng kéo thả chuột để cuộn ngang trên máy tính (Desktop Drag-to-Scroll) */
const slider = document.querySelector('.review-track-wrapper');
if (slider) {
  let isDown = false;
  let startX;
  let scrollLeft;
  slider.style.cursor = 'grab'; // Biến con trỏ chuột thành hình bàn tay
  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.style.cursor = 'grabbing';
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.style.cursor = 'grab';
  });
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.style.cursor = 'grab';
  });
  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5; // Tốc độ trượt theo tay kéo
    slider.scrollLeft = scrollLeft - walk;
  });
}
/* Chuyển ảnh Banner tự động */
const bannerSlides = document.querySelectorAll('.hero-banner-slide');
const bannerDots = document.querySelectorAll('#heroCarouselDots .h-dot');
if (bannerSlides.length) {
  let activeSlide = 0;
  function setSlide(index) {
    bannerSlides.forEach((slide, idx) => slide.classList.toggle('active', idx === index));
    bannerDots.forEach((dot, idx) => dot.classList.toggle('active', idx === index));
    activeSlide = index;
  }
  // Tự động chuyển slide sau 4.5s
  setInterval(() => {
    let next = (activeSlide + 1) % bannerSlides.length;
    setSlide(next);
  }, 4500);
  // Click vào chấm tròn để chuyển
  bannerDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-index'), 10);
      setSlide(idx);
    });
  });
}
}
