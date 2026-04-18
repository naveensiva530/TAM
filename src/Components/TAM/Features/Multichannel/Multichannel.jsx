import { useRef, useState, useEffect, useLayoutEffect } from "react";
import { Helmet } from "react-helmet-async";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../TAM_Features_Common.css";
import "./Multichannel.css";

import Multi_bg     from "../../../../assets/banner/Multichannel.png";
import FaceImg      from "../../../../assets/AI- Face Recognition.png";
import QRImg        from "../../../../assets/QR Code Attendance.png";
import TapImg       from "../../../../assets/Mobile Tap Button Attendance.png";
import BiometricImg from "../../../../assets/Biometric Devic Integration.png";
import VideoImg     from "../../../../assets/AI Feed Video.png";
import TAM_Footer   from '../../TAM_Footer/TAM_Footer';
import ScheduleAdemo from '../../../../Containers/RegForms/ScheduleAdemo';


// Add these imports at the top of your file (swap paths to your actual images)
import HospitalImg      from "../../../../assets/banner/icon 1.png";
import FactoryImg       from "../../../../assets/banner/icon2.png";
import RetailImg        from "../../../../assets/banner/icon 4.png";
import GovtImg          from "../../../../assets/banner/icon 5.png";
import CorporateImg     from "../../../../assets/banner/icon 3.png";
// Also add your "All Types of Employee" full-width image:
import AllTypesImg      from "../../../../assets/banner/employee.png";

gsap.registerPlugin(ScrollTrigger);

/* ============================================================
   SCROLL ANIMATION HOOK
============================================================ */
const useScrollAnimation = (threshold = 0.15) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [threshold]);

    return [ref, isVisible];
};

/* ============================================================
   ANIMATED WRAPPER
============================================================ */
const AnimatedSection = ({ children, className = '', animClass = 'tf-fade-up', delay = '', style = {}, threshold = 0.12 }) => {
    const [ref, isVisible] = useScrollAnimation(threshold);
    return (
        <div ref={ref} style={style} className={`${animClass} ${delay} ${isVisible ? 'tf-visible' : ''} ${className}`}>
            {children}
        </div>
    );
};

/* ============================================================   SECTION 1 — HERO CIRCLE ICONS
============================================================ */
const mc_industryCircles = [
    { mc_circle_label: 'Hospital',          mc_circle_img: HospitalImg  },
    { mc_circle_label: 'Factory',           mc_circle_img: FactoryImg   },
    { mc_circle_label: 'Retail Shop',       mc_circle_img: RetailImg    },
    { mc_circle_label: 'Government Office', mc_circle_img: GovtImg      },
    { mc_circle_label: 'Corporate Office',  mc_circle_img: CorporateImg },
];
/* ============================================================
   SECTION 2 — CHANNEL CARDS
============================================================ */
const mc_paraCards = [
    {
        mc_label: 'Mobile App',
        mc_iconBgClass: 'hrp-icon-bg-blue',
        mc_icon: (
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
                <circle cx="23" cy="23" r="19" fill="#0077B6" opacity="0.1"/>
                <rect x="15" y="10" width="16" height="26" rx="3" stroke="#0077B6" strokeWidth="2.5" fill="none"/>
                <line x1="23" y1="31" x2="23" y2="31.5" stroke="#0077B6" strokeWidth="3" strokeLinecap="round"/>
            </svg>
        ),
    },
    {
        mc_label: 'Video Feed',
        mc_iconBgClass: 'hrp-icon-bg-green',
        mc_icon: (
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
                <circle cx="23" cy="23" r="19" fill="#38B000" opacity="0.1"/>
                {/* Wall plate */}
                <rect x="6" y="22" width="5" height="14" rx="2" fill="#38B000"/>
                {/* Horizontal arm */}
                <rect x="10" y="27" width="8" height="3.5" rx="1.5" fill="#38B000"/>
                {/* Pivot knuckle */}
                <circle cx="17" cy="28.5" r="2.8" fill="#2d8a00"/>
                <circle cx="17" cy="28.5" r="1.1" fill="#38B000" opacity="0.6"/>
                {/* Camera body — tapered trapezoid */}
                <path d="M16,17 L38,14 L39,23 L37,30 L16,30 Z" fill="#38B000"/>
                {/* Top darker bevel */}
                <path d="M16,17 L38,14 L38,17 L16,20 Z" fill="#2d8a00" opacity="0.7"/>
                {/* Right side face */}
                <path d="M38,14 L41,16 L41,25 L38,23 Z" fill="#2d8a00" opacity="0.9"/>
                {/* Lens outer housing */}
                <circle cx="28" cy="23" r="5.5" fill="#2d8a00"/>
                {/* Lens rings */}
                <circle cx="28" cy="23" r="4" fill="#38B000" opacity="0.4"/>
                <circle cx="28" cy="23" r="2.8" fill="#2d8a00"/>
                <circle cx="28" cy="23" r="1.4" fill="#38B000" opacity="0.5"/>
                <circle cx="28" cy="23" r="0.6" fill="#8edc5a" opacity="0.9"/>
            </svg>
        ),
    },
    {
        mc_label: 'Biometric',
        mc_iconBgClass: 'hrp-icon-bg-blue',
        mc_icon: (
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
                <circle cx="23" cy="23" r="19" fill="#0077B6" opacity="0.1"/>
                {/* Corner brackets */}
                <path d="M10,16 L10,10 L16,10" stroke="#0077B6" strokeWidth="2" fill="none" strokeLinecap="round"/>
                <path d="M36,16 L36,10 L30,10" stroke="#0077B6" strokeWidth="2" fill="none" strokeLinecap="round"/>
                <path d="M10,30 L10,36 L16,36" stroke="#0077B6" strokeWidth="2" fill="none" strokeLinecap="round"/>
                <path d="M36,30 L36,36 L30,36" stroke="#0077B6" strokeWidth="2" fill="none" strokeLinecap="round"/>
                {/* Fingerprint ridges */}
                <ellipse cx="23" cy="23" rx="3" ry="4" stroke="#0077B6" strokeWidth="1.5" fill="none" strokeDasharray="2,1"/>
                <ellipse cx="23" cy="23" rx="6.5" ry="8" stroke="#0077B6" strokeWidth="1.4" fill="none" strokeDasharray="2.5,1.5"/>
                <ellipse cx="23" cy="23" rx="10" ry="12" stroke="#0077B6" strokeWidth="1.3" fill="none" strokeDasharray="3,2"/>
                <ellipse cx="23" cy="23" rx="13.5" ry="16" stroke="#0077B6" strokeWidth="1.2" fill="none" strokeDasharray="3.5,2.2" clipPath="url(#bpClip)"/>
                <clipPath id="bpClip"><rect x="10" y="10" width="26" height="26"/></clipPath>
            </svg>
        ),
    },
    {
        mc_label: 'RFID',
        mc_iconBgClass: 'hrp-icon-bg-green',
        mc_icon: (
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
                <circle cx="23" cy="23" r="19" fill="#38B000" opacity="0.1"/>
                {/* Reader device */}
                <rect x="8" y="13" width="14" height="20" rx="2" fill="#38B000"/>
                {/* Signal waves */}
                <path d="M22,28 Q27,25 27,23 Q27,21 22,18" stroke="#38B000" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
                <path d="M22,30 Q30,26 30,23 Q30,20 22,16" stroke="#38B000" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5"/>
                {/* RFID Card */}
                <rect x="24" y="22" width="16" height="11" rx="2" fill="white" stroke="#38B000" strokeWidth="1.5" transform="rotate(-15,32,27)"/>
                <circle cx="27" cy="27" r="2" fill="#38B000" opacity="0.7" transform="rotate(-15,32,27)"/>
                <line x1="30" y1="25" x2="38" y2="25" stroke="#38B000" strokeWidth="1" opacity="0.5" transform="rotate(-15,32,27)"/>
                <line x1="30" y1="28" x2="38" y2="28" stroke="#38B000" strokeWidth="1" opacity="0.5" transform="rotate(-15,32,27)"/>
            </svg>
        ),
    },
];

const attendanceData = [
  {
    id: "face",
    title: "AI-enabled Face Recognition",
    side: "left",
    accent: "#0077B6",
    img: FaceImg,
    tagline: "Contactless, Touchless, secure, and AI-powered facial recognition for smart attendance.",
    boxes: [
      "AI-powered Face Recognition Attendance captures secure and seamless employee check-ins and check-outs.",
      "Advanced face recognition delivers accurate and reliable attendance every time.",
      "Allows multiple employees to mark face recognition attendance effortlessly on one device.",
    ],
  },
  {
    id: "qr",
    title: "QR Code Attendance",
    side: "right",
    accent: "#38B000",
    img: QRImg,
    tagline: "Smart, external hardware-free attendance marking with secure, geo-linked QR codes for seamless check-ins/outs.",
    boxes: [
      "QR Code Attendance features a QR code generator wizard that helps create and deploy attendance QR codes easily across locations.",
      "Supports multiple location-wise setups — create different QR codes for each branch or work area with geo-fence integration for accurate on-site check-ins/outs.",
      "No hardware is needed — employees simply scan and record secure, safe, and reliable attendance in real-time.",
    ],
  },
  {
    id: "tap",
    title: "Mobile Tap Button",
    side: "left",
    accent: "#0077B6",
    img: TapImg,
    tagline: "Think attendance but smarter. Tap once, get it done, and get on with your day.",
    boxes: [
      "Mobile Tap Button enables employees to mark attendance with a single tap when they are within the defined geo-fenced area.",
      "Ideal for field employees, allowing them to mark attendance directly from their mobile device on-site.",
      "Admins can define and control geo-fence zones, ensuring attendance is marked only within authorized work locations.",
    ],
  },
  {
    id: "biometric",
    title: "Biometric Device Attendance",
    side: "right",
    accent: "#38B000",
    img: BiometricImg,
    tagline: "Cloud-synced attendance that connects every biometric device into one intelligent network.",
    boxes: [
      "No Qu TAM supports Biometric Device Attendance integrations seamlessly with fingerprint, RFID, and face detection devices for employee attendance.",
      "Offers API integration and parallel database connectivity, ensuring centralized attendance data flow from all devices into one system.",
      "Data remains centralized and syncs to the cloud in real time; works offline and automatically updates once the internet is available.",
    ],
  },
  {
    id: "video",
    title: "Video Feed Attendance",
    side: "left",
    accent: "#0077B6",
    img: VideoImg,
    tagline: "Transform surveillance into insight. Capture, verify, and record attendance through seamless AI video detection.",
    boxes: [
      "No Qu TAM integrates with AI face detection cameras and NVR to capture video feed-based attendance.",
      "An AI camera-based attendance system eliminates the need for manual check-ins and check-outs.",
      "No dedicated AI server is required, making it a cost-effective and scalable attendance solution.",
    ],
  },
];

// ── Attendance Panel (Section 3 Row) ──────────────────────────
const AttendancePanel = ({ item, idx }) => {
    const [ref, isVisible] = useScrollAnimation(0.2);

    return (
        <section
            ref={ref}
            className={`multi_channel_attendance_detail_panel multi_channel_attendance_detail_panel--${item.side} ${isVisible ? 'rp-s3-visible' : ''}`}
            style={{ "--att-accent": item.accent, "--att-accent-10": `${item.accent}18` }}
        >
            <div className={`multi_channel_attendance_detail_num_badge rp-s3-num ${isVisible ? 'rp-s3-visible' : ''}`}>0{idx + 1}</div>
            <div className="multi_channel_attendance_detail_inner">
                <div className={`multi_channel_attendance_detail_visual ${item.side === 'left' ? 'rp-s3-fade-left' : 'rp-s3-fade-right'} ${isVisible ? 'rp-s3-visible' : ''}`}>
                    <div className="multi_channel_attendance_detail_img_frame">
                        <div className="multi_channel_attendance_detail_img_glow" />
                        <img src={item.img} alt={item.title} className="multi_channel_attendance_detail_img" onError={e => { e.target.src = Multi_bg; }} />
                        <div className="multi_channel_attendance_detail_img_chip" style={{ background: item.accent }}>{item.title.split(" ")[0]}</div>
                    </div>
                </div>
                <div className={`multi_channel_attendance_detail_content_side ${item.side === 'left' ? 'rp-s3-fade-right' : 'rp-s3-fade-left'} ${isVisible ? 'rp-s3-visible' : ''}`}>
                    <h2 className="multi_channel_attendance_detail_title tf-sec3-card-title">{item.title}</h2>
                    <p className={`multi_channel_attendance_detail_tagline rp-s3-fade-up tf-sec3-card-desc ${isVisible ? 'rp-s3-visible' : ''}`} style={{ transitionDelay: '0.2s' }}>{item.tagline}</p>
                    <p className="rp-sec3-features-label tf-sec3-key-label">Key Features</p>
                    <div className="multi_channel_attendance_detail_bullets tf-sec3-card-points">
                        {item.boxes.map((text, bi) => (
                            <div className={`multi_channel_attendance_detail_bullet rp-s3-fade-up ${isVisible ? 'rp-s3-visible' : ''}`} style={{ transitionDelay: `${0.3 + (bi * 0.1)}s` }} key={bi}>
                                <div className="multi_channel_attendance_detail_bullet_icon" style={{ background: item.accent }}>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </div>
                                <p className="multi_channel_attendance_detail_bullet_text tf-sec3-card-point">{text}</p>
                            </div>
                        ))}
                    </div>
                    {item.footer && <p className="rp-sec3-footer-note">{item.footer}</p>}
                </div>
            </div>
            <div className="multi_channel_attendance_detail_zigzag" aria-hidden="true"><svg viewBox="0 0 1440 40" preserveAspectRatio="none"></svg></div>
        </section>
    );
};

// ── Component ─────────────────────────────────────────────────
const Multichannel = () => {
  const mainRef    = useRef(null);
  const [demoBtnLabel,   setDemoBtnLabel]   = useState('Request Your Demo');
  const [demoBtnLoading, setDemoBtnLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

const handleDemoClick = () => {
      openModal();
  };

  const [s3HeaderRef, s3HeaderVisible] = useScrollAnimation(0.2);

  useLayoutEffect(() => {
    const rafId = requestAnimationFrame(() => {
      let ctx = gsap.context(() => {
        // Panels are now handled via CSS animations based on Roles & Permissions standards

        // CTA Section GSAP (existing)
        const ctaEl = document.querySelector(".multi_channel_cta_section");
        if (ctaEl) {
          const ctaContent = ctaEl.querySelector(".multi_channel_cta_content_wrapper");
          if (ctaContent) {
            gsap.from(ctaContent, { opacity: 0, y: 50, duration: 0.7, ease: "power2.out", clearProps: "all", scrollTrigger: { trigger: ctaEl, start: "top 85%", once: true } });
          }
        }

        ScrollTrigger.refresh();
      }, mainRef);
      mainRef._gsapCtx = ctx;
    });
    return () => {
      cancelAnimationFrame(rafId);
      if (mainRef._gsapCtx) mainRef._gsapCtx.revert();
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>NoQu TAM: Multi-Channel Attendance System - AI Face Recognition, QR, Biometric & More</title>
        <meta name="description" content="NoQu TAM's multi-channel attendance system supports AI face recognition, QR codes, biometric devices, RFID, mobile tap button, and video feed attendance — all in one unified platform." />
        <meta property="og:title" content="NoQu TAM: Multi-Channel Attendance System" />
        <meta property="og:description" content="Track attendance via face recognition, QR code, biometric, RFID, mobile tap, and video feed." />
        <meta property="og:url" content="https://noqu.in/tam-multichannel" />
      </Helmet>
      <div className="tf-page-wrapper" ref={mainRef}>

      {/* ================================================
          SECTION 1 — HERO
      ================================================ */}
      <div className="tf-hero-main">
          <div className="tf-hero-left">
              <div className="tf-hero-center-stack">
                  <h1 className="tf-hero-title">
                      Multi-Channel <span className="tf-hero-title-green">Attendance</span>
                  </h1>
                  <p className="tf-hero-subtitle">
                      One platform that fits every attendance style.
                  </p>
                  <div className="tf-hero-cta-area">
                      <button
                          className="tf-demo-btn"
                          onClick={handleDemoClick}
                          disabled={demoBtnLoading}
                      >
                          {demoBtnLabel}
                          {demoBtnLoading
                              ? <i className="fas fa-spinner fa-spin ms-2" />
                              : (
                                  <span className="tf-btn-arrow">
                                      <svg width="14" height="13" viewBox="0 0 13 13" fill="none">
                                          <path d="M2.5 6.5H10.5M7 3L10.5 6.5L7 10"
                                              stroke="white" strokeWidth="1.8"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                  </span>
                              )
                          }
                      </button>
                  </div>
              </div>

              {/* Industry Circles */}
             <div className="mc-hero-industry-circles">
    {mc_industryCircles.map((item, index) => (
        <div className="mc-hero-circle-item" key={index}>
            <div className="mc-hero-circle-icon">
                <img
                    src={item.mc_circle_img}
                    alt={item.mc_circle_label}
                    className="mc-hero-circle-img"
                />
            </div>
            <span className="mc-hero-circle-label">{item.mc_circle_label}</span>
        </div>
    ))}
</div>
          </div>
          <div className="tf-hero-right">
              <img src={Multi_bg} alt="Multi Channel Attendance Hero" loading="eager" />
          </div>
      </div>

      {/* ================================================
          SECTION 2 — PARAGRAPH
      ================================================ */}
      <section className="tf-para-section">
          <div className="tf-para-grid">
              <AnimatedSection animClass="tf-fade-left">
                  <div className="tf-para-left">
                      <h2 className="tf-para-heading">
                          Multi-Channel <span className="tf-para-highlight">Attendance</span>
                      </h2>
                      <p className="tf-para-text">
                          <strong>No Qu TAM</strong> enables seamless attendance tracking across mobile apps, AI cameras, RFID systems, and biometric devices within a unified platform. Organizations can efficiently manage workforce attendance across offices, warehouses, factories, sites, and remote locations with real-time accuracy. This SaaS attendance management system ensures secure, reliable, and tamper-proof data collection for permanent, contract, and temporary employees. With centralized control and cloud synchronization, businesses gain complete visibility, reduce manual effort, and streamline attendance operations across distributed teams with ease.
                      </p>
                  </div>
              </AnimatedSection>
              <AnimatedSection animClass="tf-fade-right">
                  <div className="tf-para-right">
                      <div className="tf-para-cards-grid">
                          {mc_paraCards.map((card, index) => (
                              <div key={index} className="tf-para-card">
                                  <div className="tf-para-icon-wrap">
                                      {card.mc_icon}
                                  </div>
                                  <span className="tf-para-card-label">{card.mc_label}</span>
                              </div>
                          ))}
                      </div>
                  </div>
              </AnimatedSection>
          </div>
      </section>

      {/* ================================================
          SECTION 3 — ATTENDANCE TYPES HEADER
      ================================================ */}
      <section className="multi_channel_attendance_Type_section" ref={s3HeaderRef}>
        <div className={`multi_channel_attendance_Type_header_inner rp-s3-fade-up ${s3HeaderVisible ? 'rp-s3-visible' : ''}`}>
          <h2 className="multi_channel_attendance_Type_main_heading tf-sec3-headline">
            <span className="multi_channel_attendance_Type_heading_dark tf-sec3-hl-dark">Attendance </span>
            <span className="multi_channel_attendance_Type_heading_blue tf-sec3-hl-blue">Types</span>
          </h2>
          <div className="tf-sec3-bar" />
          <p className="rp-sec3-subtext tf-sec3-subtext">
            From a biometric device to a mobile check-in. Choose your way to mark attendance.
          </p>
        </div>
      </section>

      {/* ================================================
          SECTION 4 — ATTENDANCE DETAIL PANELS
      ================================================ */}
      <section id="multi_channel_attendance_detail_section">
        {attendanceData.map((item, idx) => (
          <AttendancePanel key={item.id} item={item} idx={idx} />
        ))}
      </section>

      {/* ================================================
    SECTION 5 — ALL TYPES OF EMPLOYEE (Full Width)
================================================ */}
<section className="mc_all_types_section">
    <AnimatedSection animClass="tf-fade-up">
        <h2 className="mc_all_types_heading">
            All Types of <span className="mc_all_types_heading_blue">Employee</span>
        </h2>
    </AnimatedSection>
    <div className="mc_all_types_img_wrapper">
        <img
            src={AllTypesImg}
            alt="All Types of Employee"
            className="mc_all_types_img"
        />
    </div>
</section>

{/* ================================================
    SECTION 6 — CTA  (was Section 5)
================================================ */}
<AnimatedSection animClass="tf-scale-up">
    <section className="multi_channel_cta_section tf-cta-section" id="multi_channel_cta_section">
        <div className="multi_channel_cta_content_wrapper tf-cta-wrap">
            <h2 className="multi_channel_cta_heading tf-cta-headline">
             All your attendance methods - <br className="desktop_br"/>
                <span className="multi_channel_cta_heading_blue tf-cta-headline-blue"> unified in one powerful platform</span>
            </h2>
            <div className="tf-cta-btn-group">
                <button className="multi_channel_cta_button tf-cta-btn" onClick={openModal}>
                    Request your Demo
                    <div className="multi_channel_cta_button_icon tf-cta-btn-arrow-circle">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    </section>
</AnimatedSection>

      <TAM_Footer />
      <ScheduleAdemo isOpen={isModalOpen} onClose={closeModal} />

    </div>
    </>
  );
};

export default Multichannel;
