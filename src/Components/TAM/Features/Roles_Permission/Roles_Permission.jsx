import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import '../TAM_Features_Common.css';
import './Roles_Permission.css';

import HeroImage         from '../../../../assets/banner/roles and permission.png';
import WorkforceImage    from '../../../../assets/Section Images/Roles & Permissions.png';

import FaceImg      from "../../../../assets/Role-Based Access.jpeg";
import QRImg        from "../../../../assets/Permission Controls.jpeg";
import TapImg       from "../../../../assets/Multi-HR Role Support.jpeg";
import BiometricImg from "../../../../assets/Security & Compliance.jpeg";
import VideoImg     from "../../../../assets/Flexibility for Organizations.jpeg";

import TAM_Footer from '../../TAM_Footer/TAM_Footer';
import ScheduleAdemo from '../../../../Containers/RegForms/ScheduleAdemo';

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

/* ============================================================
   STAGGERED LIST
============================================================ */
const StaggeredList = ({ items, renderItem, className = '', baseDelay = 0 }) => {
    const [ref, isVisible] = useScrollAnimation(0.1);
    return (
        <ul ref={ref} className={className}>
            {items.map((item, i) => (
                <li
                    key={i}
                    className={`tf-fade-up ${isVisible ? 'tf-visible' : ''}`}
                    style={{ transitionDelay: `${baseDelay + i * 0.08}s` }}
                >
                    {renderItem(item, i)}
                </li>
            ))}
        </ul>
    );
};

/* ============================================================
   SECTION 1 — HERO MINI CARDS
============================================================ */
const rph_miniCards = [
    {
        rph_wrapClass: 'tf-mini-icon-wrap',
        rph_label:     'Access Control',
        rph_icon: (
            <svg className="tf-mini-svg-icon"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <polyline points="9 12 11 14 15 10"/>
            </svg>
        ),
    },
    {
        rph_wrapClass: 'tf-mini-icon-wrap',
        rph_label:     'Multi-Level Roles',
        rph_icon: (
            <svg className="tf-mini-svg-icon"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
        ),
    },
    {
        rph_wrapClass: 'tf-mini-icon-wrap',
        rph_label:     'Data Security',
        rph_icon: (
            <svg className="tf-mini-svg-icon"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
        ),
    },
];

/* ============================================================
   SECTION 3 — ROLES & PERMISSION DETAIL DATA
============================================================ */
const attendanceData = [
  {
    id: "role-access",
    title: "Role-Based Access",
    side: "left",
    accent: "#0077B6",
    img: FaceImg,
    tagline: "Define and assign roles to ensure structured responsibilities and efficient workforce management across your organization.",
    footer: "This ensures clarity in responsibilities while maintaining controlled and efficient access across all users.",
    boxes: [
      "Define and assign roles across departments and teams",
      "HR, Manager, Employee, Admin, and Sub-admin roles",
      "Branch, department, and regional-level access control",
      "Custom role creation based on business needs",
    ],
  },
  {
    id: "permission-controls",
    title: "Permission Controls",
    side: "right",
    accent: "#38B000",
    img: QRImg,
    tagline: "Provide precise access to the right individuals while maintaining strict control over sensitive organizational data.",
    footer: "This strengthens security while ensuring smooth and uninterrupted operational workflows.",
    boxes: [
      "Configure view, edit, delete, and approval permissions",
      "Restrict access to confidential employee and HR data",
      "Enable multi-level permission structures across roles",
      "Maintain secure and controlled data accessibility",
    ],
  },
  {
    id: "multi-hr",
    title: "Multi-HR Role Support",
    side: "left",
    accent: "#0077B6",
    img: TapImg,
    tagline: "Support both centralized and decentralized HR operations with flexible and scalable role configurations.",
    footer: "This enables HR teams to manage operations effectively across multiple locations with clarity and control.",
    boxes: [
      "Decentralized HR controls across multiple branches",
      "Regional HR roles for improved workforce visibility",
      "Centralized head-office HR management control",
      "Task-specific delegation for efficient HR operations",
    ],
  },
  {
    id: "security",
    title: "Security & Compliance",
    side: "right",
    accent: "#38B000",
    img: BiometricImg,
    tagline: "Ensure complete data protection, accountability, and compliance across every user action within the system.",
    footer: "This ensures every action is secure, traceable, and aligned with organizational policies.",
    boxes: [
      "Strong data validation and access security mechanisms",
      "Role-based data visibility for all system users",
      "Detailed audit trails for every action performed",
      "Transparent and controlled user-role configuration",
    ],
  },
  {
    id: "flexibility",
    title: "Flexibility for Organizations",
    side: "left",
    accent: "#0077B6",
    img: VideoImg,
    tagline: "Adapt easily to your organization's structure, scale, and future growth requirements.",
    footer: "This flexibility ensures the system evolves seamlessly with your organization.",
    boxes: [
      "Supports any organizational hierarchy structure",
      "Ideal for multi-branch and multi-location businesses",
      "Scalable for SMEs and large enterprises",
      "Easy configuration for future growth and expansion",
    ],
  },
];

/* ============================================================
   PARAGRAPH SECTION CARDS
============================================================ */
const rpp_channelCards = [
  {
    rpp_label: 'Role Assignment',
    iconBgClass: 'tf-para-icon-bg-blue',
    rpp_icon: (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
            <rect x="17" y="3" width="16" height="11" rx="3" fill="#0077B6"/>
            <circle cx="22" cy="7.5" r="2" fill="white" opacity="0.9"/>
            <line x1="26" y1="6.5" x2="30" y2="6.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.8"/>
            <line x1="26" y1="9" x2="29" y2="9" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
            <line x1="25" y1="14" x2="25" y2="20" stroke="#0077B6" strokeWidth="2" strokeLinecap="round"/>
            <line x1="10" y1="20" x2="40" y2="20" stroke="#0077B6" strokeWidth="2" strokeLinecap="round"/>
            <line x1="10" y1="20" x2="10" y2="26" stroke="#0077B6" strokeWidth="1.8" strokeLinecap="round"/>
            <line x1="25" y1="20" x2="25" y2="26" stroke="#0077B6" strokeWidth="1.8" strokeLinecap="round"/>
            <line x1="40" y1="20" x2="40" y2="26" stroke="#0077B6" strokeWidth="1.8" strokeLinecap="round"/>
            <rect x="3" y="26" width="14" height="10" rx="3" fill="#DBEAFE" stroke="#0077B6" strokeWidth="1.5"/>
            <text x="10" y="33" textAnchor="middle" fontSize="5.5" fill="#0077B6" fontWeight="700" fontFamily="sans-serif">HR</text>
            <rect x="18" y="26" width="14" height="10" rx="3" fill="#DBEAFE" stroke="#0077B6" strokeWidth="1.5"/>
            <text x="25" y="33" textAnchor="middle" fontSize="5" fill="#0077B6" fontWeight="700" fontFamily="sans-serif">MGR</text>
            <rect x="33" y="26" width="14" height="10" rx="3" fill="#DBEAFE" stroke="#0077B6" strokeWidth="1.5"/>
            <text x="40" y="33" textAnchor="middle" fontSize="5" fill="#0077B6" fontWeight="700" fontFamily="sans-serif">EMP</text>
            <line x1="5" y1="36" x2="5" y2="40" stroke="#0077B6" strokeWidth="1.4" strokeLinecap="round" opacity="0.6"/>
            <line x1="15" y1="36" x2="15" y2="40" stroke="#0077B6" strokeWidth="1.4" strokeLinecap="round" opacity="0.6"/>
            <circle cx="5" cy="43" r="3.5" fill="#0077B6" opacity="0.35"/>
            <circle cx="15" cy="43" r="3.5" fill="#0077B6" opacity="0.55"/>
            <line x1="25" y1="36" x2="25" y2="40" stroke="#0077B6" strokeWidth="1.4" strokeLinecap="round" opacity="0.6"/>
            <circle cx="25" cy="43.5" r="3.5" fill="#0077B6" opacity="0.45"/>
            <line x1="35" y1="36" x2="35" y2="40" stroke="#0077B6" strokeWidth="1.4" strokeLinecap="round" opacity="0.6"/>
            <line x1="44" y1="36" x2="44" y2="40" stroke="#0077B6" strokeWidth="1.4" strokeLinecap="round" opacity="0.6"/>
            <circle cx="35" cy="43.5" r="3.5" fill="#0077B6" opacity="0.3"/>
            <circle cx="44" cy="43.5" r="3.5" fill="#0077B6" opacity="0.5"/>
        </svg>
    ),
  },
  {
    rpp_label: 'Access Control',
    iconBgClass: 'tf-para-icon-bg-green',
    rpp_icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M24 5 L38 11 L38 24 C38 32 31 38 24 42 C17 38 10 32 10 24 L10 11 Z"
          fill="#DCFCE7" stroke="#38B000" strokeWidth="2" strokeLinejoin="round"/>
        <circle cx="24" cy="21" r="5" fill="#38B000"/>
        <rect x="22" y="24" width="4" height="6" rx="1" fill="#38B000"/>
        <circle cx="24" cy="21" r="2" fill="white"/>
        <line x1="13" y1="17" x2="16" y2="17" stroke="#38B000" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <line x1="13" y1="21" x2="16" y2="21" stroke="#38B000" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
        <line x1="32" y1="17" x2="35" y2="17" stroke="#38B000" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <line x1="32" y1="21" x2="35" y2="21" stroke="#38B000" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
        <polyline points="19,33 22,36 29,30" fill="none" stroke="#38B000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    rpp_label: 'Permission Levels',
    iconBgClass: 'tf-para-icon-bg-blue',
    rpp_icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="6" y="36" width="36" height="6" rx="3" fill="#BFDBFE" stroke="#0077B6" strokeWidth="1.5"/>
        <rect x="10" y="27" width="28" height="6" rx="3" fill="#93C5FD" stroke="#0077B6" strokeWidth="1.5"/>
        <rect x="14" y="18" width="20" height="6" rx="3" fill="#0077B6"/>
        <path d="M19 14 L24 10 L29 14" fill="none" stroke="#0077B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="24" cy="10" r="2.5" fill="#0077B6"/>
        <rect x="22" y="37.5" width="4" height="3" rx="0.8" fill="#0077B6" opacity="0.5"/>
        <path d="M22.5 37.5 a1.5 1.5 0 0 1 3 0" fill="none" stroke="#0077B6" strokeWidth="1.2" opacity="0.5"/>
        <rect x="22" y="28.5" width="4" height="3" rx="0.8" fill="#0077B6" opacity="0.7"/>
        <path d="M22.5 28.5 a1.5 1.5 0 0 1 3 0" fill="none" stroke="#0077B6" strokeWidth="1.2" opacity="0.7"/>
        <circle cx="24" cy="21" r="1.5" fill="white"/>
      </svg>
    ),
  },
  {
   rpp_label: 'Data Visibility',
   iconBgClass: 'tf-para-icon-bg-green',
    rpp_icon: (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
            <rect x="4" y="6" width="42" height="30" rx="4" fill="#DCFCE7" stroke="#38B000" strokeWidth="2"/>
            <rect x="7" y="9" width="36" height="24" rx="2" fill="white"/>
            <rect x="11" y="22" width="5" height="9" rx="1.5" fill="#38B000" opacity="0.35"/>
            <rect x="18" y="17" width="5" height="14" rx="1.5" fill="#38B000" opacity="0.55"/>
            <rect x="25" y="13" width="5" height="18" rx="1.5" fill="#38B000"/>
            <rect x="32" y="19" width="5" height="12" rx="1.5" fill="#38B000" opacity="0.45"/>
            <polyline points="13,24 20,19 27,14 34,20" fill="none" stroke="#38B000"
                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                strokeDasharray="2 1.5" opacity="0.7"/>
            <rect x="22" y="36" width="6" height="6" rx="1" fill="#DCFCE7" stroke="#38B000" strokeWidth="1.5"/>
            <rect x="16" y="42" width="18" height="4" rx="2" fill="#DCFCE7" stroke="#38B000" strokeWidth="1.5"/>
            <circle cx="38" cy="34" r="7" fill="white" stroke="#38B000" strokeWidth="2"/>
            <circle cx="38" cy="34" r="4" fill="#DCFCE7" stroke="#38B000" strokeWidth="1.5"/>
            <line x1="38" y1="32" x2="38" y2="36" stroke="#38B000" strokeWidth="1.8" strokeLinecap="round"/>
            <line x1="36" y1="34" x2="40" y2="34" stroke="#38B000" strokeWidth="1.8" strokeLinecap="round"/>
            <line x1="43" y1="39" x2="47" y2="43" stroke="#38B000" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
    ),
  },
];

/* ============================================================
   SECTION 4 — KEY BENEFITS
============================================================ */
const rpi_keyBenefits = [
    'Eliminates confusion in roles and responsibilities',
    'Improves data security and access control',
    ' Enhances operational efficiency across teams',
    'Enables structured and transparent workflows',
    'Supports scalable workforce management systems',
  
];

/* ============================================================
   ROLE PANEL (Section 3 Row)
============================================================ */
const RolePanel = ({ item, idx }) => {
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
                        <img src={item.img} alt={item.title} className="multi_channel_attendance_detail_img" onError={e => { e.target.src = HeroImage; }} />
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

/* ============================================================
   ROOT COMPONENT
============================================================ */
const Roles_Permission = () => {

const [btnLabel, setBtnLabel]     = useState('Request Your Demo');
  const [btnLoading, setBtnLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleDemo = () => {
    openModal();
  };

  const [s3HeaderRef, s3HeaderVisible] = useScrollAnimation(0.2);

  return (
    <>
      <Helmet>
        <title>NoQu TAM: Roles & Permission Management</title>
        <meta name="description" content="Control access and permissions with NoQu TAM's robust roles and permissions system. Define user roles, manage access levels, and ensure secure attendance management across your organization." />
        <meta property="og:title" content="NoQu TAM: Roles & Permission Management" />
        <meta property="og:description" content="Define roles and manage permissions for secure attendance management." />
        <meta property="og:url" content="https://noqu.in/tam-roles-permission" />
      </Helmet>
      <div className="tf-page-wrapper">{/* ====================================================
          SECTION 1 — HERO (left content + right image)
      ==================================================== */}
      <div className="tf-hero-main">
          <div className="tf-hero-left">
              <div className="tf-hero-center-stack">
                  <h1 className="tf-hero-title">
                      Roles &amp; <span className="tf-hero-title-green">Permission</span>
                  </h1>
                  <p className="tf-hero-subtitle">
                   From access to accountability — experience true operational clarity across every role.
                  </p>
                  <div className="tf-hero-cta-area">
                      <button className="tf-demo-btn" onClick={handleDemo} disabled={btnLoading}>
                          {btnLabel}
                          {btnLoading
                              ? <i className="fas fa-spinner fa-spin ms-2" />
                              : <span className="tf-btn-arrow">
                                  <svg width="14" height="13" viewBox="0 0 13 13" fill="none">
                                      <path d="M2.5 6.5H10.5M7 3L10.5 6.5L7 10" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </span>
                          }
                      </button>
                  </div>
              </div>

              {/* Mini Cards */}
              <div className="tf-hero-mini-cards">
                  {rph_miniCards.map((card, index) => (
                      <div className="tf-mini-card" key={index}>
                          <div className={card.rph_wrapClass}>{card.rph_icon}</div>
                          <span className="tf-mini-card-label">{card.rph_label}</span>
                      </div>
                  ))}
              </div>
          </div>
          <div className="tf-hero-right">
              <img src={HeroImage} alt="Roles and Permission Hero" loading="eager" />
          </div>
      </div>

      {/* ================================================
          SECTION 2 — PARAGRAPH
      ================================================ */}
      <section className="tf-para-section">
        <div className="tf-para-grid">
          <AnimatedSection animClass="tf-fade-left">
              <div className="tf-para-left">
                <h2 className="tf-para-heading">Roles &amp; <span className="tf-para-highlight">Permission</span></h2>
                <p className="tf-para-text">
                  Every organization runs stronger when responsibilities are clearly defined and access is properly controlled. <strong>No Qu TAM's </strong>role-based access control system ensures each employee receives precise permissions aligned with responsibilities, improving efficiency and data security. From HR teams to managers and administrators, tasks remain structured, visible, and manageable. Whether handling attendance, approvals, or workflows, the system unifies responsibilities without confusion, enabling teams to work with confidence, accountability, and complete operational control across departments and business functions seamlessly.
                </p>
              </div>
          </AnimatedSection>
          <AnimatedSection animClass="tf-fade-right">
              <div className="tf-para-right">
                <div className="tf-para-cards-grid">
                  {rpp_channelCards.map((card, index) => (
                    <div key={index} className="tf-para-card">
                      <div className={`tf-para-icon-wrap ${card.iconBgClass || ''}`}>
                        {card.rpp_icon}
                      </div>
                      <span className="tf-para-card-label">{card.rpp_label}</span>
                    </div>
                  ))}
                </div>
              </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ================================================
          SECTION 3 — DEFINED ROLES AND DYNAMIC CONTROLS
      ================================================ */}
      <section className="multi_channel_attendance_Type_section" ref={s3HeaderRef}>
        <div className={`multi_channel_attendance_Type_header_inner rp-s3-fade-up ${s3HeaderVisible ? 'rp-s3-visible' : ''}`}>
          <h2 className="multi_channel_attendance_Type_main_heading tf-sec3-headline">
            <span className="multi_channel_attendance_Type_heading_dark tf-sec3-hl-dark">Defined Roles &amp; </span>
            <span className="multi_channel_attendance_Type_heading_blue tf-sec3-hl-blue">Dynamic Controls</span>
          </h2>
          <div className="tf-sec3-bar" />
          <p className="rp-sec3-subtext tf-sec3-subtext">
            No Qu TAM's role and permission framework ensures structured access, secure operations, and seamless workforce management across all organizational levels.
          </p>
        </div>
      </section>

      <section id="multi_channel_attendance_detail_section">
        {attendanceData.map((item, idx) => (
            <RolePanel key={item.id} item={item} idx={idx} />
        ))}
      </section>


      {/* ================================================
          SECTION 4 — IMPROVE
      ================================================ */}
      <section className="tf-improve-section">
        <div className="tf-improve-inner">
          <AnimatedSection animClass="tf-fade-left">
              <div className="tf-improve-left">
                <h2 className="tf-improve-headline">WHY ROLE & PERMISSIONS MATTER</h2>
                <p className="tf-improve-para">A structured role and permission system improves operational clarity, strengthens data security, and enhances workforce efficiency.</p>
                <p className="tf-improve-label">Key benefits include:</p>
                <StaggeredList
                    items={rpi_keyBenefits}
                    className="tf-improve-list"
                    baseDelay={0.1}
                    renderItem={(benefit) => (
                        <div className="tf-improve-item">
                            <span className="tf-improve-bullet" />
                            {benefit}
                        </div>
                    )}
                />

                <AnimatedSection animClass="tf-fade-up" delay="tf-delay-4">
                    <p className="tf-improve-para">By implementing role-based access control, organizations ensure secure, efficient, and well-managed workforce operations.</p>
                    <p className="tf-improve-highlight">No Qu TAM transforms access management into a structured, secure, and intelligent system</p>
                    <p className="tf-improve-para">Ensure every employee operates with the right permissions while maintaining complete organizational control and visibility.</p>
                </AnimatedSection>
              </div>
          </AnimatedSection>
          <AnimatedSection animClass="tf-fade-right" delay="tf-delay-2">
              <div className="tf-improve-right">
                <div className="tf-improve-img-block"><img src={WorkforceImage} alt="Workforce" /></div>
              </div>
          </AnimatedSection>
        </div>
      </section>


      {/* ================================================
          SECTION 5 — CTA
      ================================================ */}
      <AnimatedSection animClass="tf-scale-up">
          <section className="tf-cta-section">
            <div className="tf-cta-wrap">
              <h2 className="tf-cta-headline">Turn role confusion into clear, secure,<br/><span className="tf-cta-headline-blue">and structured access control.</span></h2>
              <div className="tf-cta-btn-group">
                <button className="tf-cta-btn" onClick={openModal}>
                  Request your Demo
                  <div className="tf-cta-btn-arrow-circle">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
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

export default Roles_Permission;
