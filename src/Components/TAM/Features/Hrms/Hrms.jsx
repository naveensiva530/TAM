import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import '../TAM_Features_Common.css';
import './Hrms.css';

import HeroImage         from '../../../../assets/banner/Hrms.png';
import TrackingCardImage from '../../../../assets/Analytics & Reporting.jpeg';
import RoutingCardImage  from '../../../../assets/Section Images/HRMS.png';
import PrivacyCardImage  from '../../../../assets/Compliance Management.jpeg';
import WorkforceImage    from '../../../../assets/Analytics & Reporting.jpeg';
import hardwareSetupImg  from '../../../../assets/Employee Management.jpeg';
import dataStreamImg     from '../../../../assets/Recruitment & Onboarding.jpeg';
import reportsImg        from '../../../../assets/Performance Management.jpeg';

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
   ANIMATED WRAPPER COMPONENT
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
   SECTION 1 — HRMS_HERO_SECTION
   Hero Mini Cards Data
============================================================ */
const hrh_miniCards = [
    {
        hrh_wrapClass: 'tf-mini-icon-wrap',
        hrh_label:     'Employee Management',
        // Icon: Users/Group icon to represent managing a team
        hrh_icon: (
            <svg className="tf-mini-svg-icon"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
    },
    {
        hrh_wrapClass: 'tf-mini-icon-wrap',
        hrh_label:     'Recruitment & Onboarding',
        // Icon: User Plus icon to represent hiring and adding new members
        hrh_icon: (
            <svg className="tf-mini-svg-icon"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="8.5" cy="7" r="4" />
                <line x1="20" y1="8" x2="20" y2="14" />
                <line x1="17" y1="11" x2="23" y2="11" />
            </svg>
        ),
    },
    {
        hrh_wrapClass: 'tf-mini-icon-wrap',
        hrh_label:     'Performance Management',
        // Icon: Trending Up/Line Chart to represent growth and KPIs
        hrh_icon: (
            <svg className="tf-mini-svg-icon"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
            </svg>
        ),
    },
];

/* ============================================================
   SECTION 2 — HRMS_PARAGRAPH_SECTION
   Channel Cards Data
============================================================ */
const hrp_channelCards = [
    {
        hrp_label: 'Employee Management',
        hrp_iconBgClass: 'hrp-icon-bg-blue',
        hrp_icon: (
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
        ),
    },
    {
        hrp_label: 'Recruitment',
        hrp_iconBgClass: 'hrp-icon-bg-green',
        hrp_icon: (
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <line x1="19" y1="8" x2="19" y2="14"/>
                <line x1="16" y1="11" x2="22" y2="11"/>
            </svg>
        ),
    },
    {
        hrp_label: 'Performance',
        hrp_iconBgClass: 'hrp-icon-bg-blue',
        hrp_icon: (
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                <polyline points="17 6 23 6 23 12"/>
            </svg>
        ),
    },
    {
        hrp_label: 'Data Management',
        hrp_iconBgClass: 'hrp-icon-bg-green',
        hrp_icon: (
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3"/>
                <path d="M3 5v4c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
                <path d="M3 9v4c0 1.66 4.03 3 9 3s9-1.34 9-3V9"/>
                <path d="M3 13v4c0 1.66 4.03 3 9 3s9-1.34 9-3v-4"/>
            </svg>
        ),
    },
];

/* ============================================================
   SECTION 3 — HRMS_FEATURES_SECTION (Stacking Cards Format)
============================================================ */
const hrf_stackCards = [
    {
        hrf_id:      0,
        hrf_title:   'Employee Management',
        hrf_text:    'Manage the entire employee lifecycle with structured data, clear hierarchy, and centralized records.',
        hrf_img:     hardwareSetupImg,
        hrf_imgAlt:  'Employee Management',
        hrf_footer:  'This ensures accurate, organized, and easily accessible employee information across the organization.',
        hrf_list: [
            {
                hrf_label: 'End-to-end employee lifecycle management system',
                hrf_svgPath: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>,
            },
            {
                hrf_label: 'Define organizational hierarchy across departments',
                hrf_svgPath: <><path d="M12 3v18"/><path d="M3 9h18"/><rect x="2" y="2" width="20" height="20" rx="2"/></>,
            },
            {
                hrf_label: 'Track employee skills and competencies efficiently',
                hrf_svgPath: <><circle cx="12" cy="8" r="4"/><path d="M5.5 20v-2a6.5 6.5 0 0 1 13 0v2"/></>,
            },
            {
                hrf_label: 'Centralized document and digital record management',
                hrf_svgPath: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></>,
            },
        ],
    },
    {
        hrf_id:      1,
        hrf_title:   'Recruitment & Onboarding',
        hrf_text:    'Streamline hiring and onboarding processes with a structured and digital-first approach.',
        hrf_img:     dataStreamImg,
        hrf_imgAlt:  'Recruitment and Onboarding',
        hrf_footer:  'This reduces hiring delays and ensures a smooth onboarding experience for new employees.',
        hrf_list: [
            {
                hrf_label: 'Manage talent acquisition and onboarding workflows',
                hrf_svgPath: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/></>,
            },
            {
                hrf_label: 'Applicant tracking for better hiring decisions',
                hrf_svgPath: <><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></>,
            },
            {
                hrf_label: 'Schedule interviews with structured coordination',
                hrf_svgPath: <><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></>,
            },
            {
                hrf_label: 'Digital onboarding for faster employee integration',
                hrf_svgPath: <><path d="M4 4v16h16"/><polyline points="20 10 12 18 8 14"/></>,
            },
        ],
    },
    {
        hrf_id:      2,
        hrf_title:   'Performance Management',
        hrf_text:    'Track, evaluate, and manage employee performance with structured appraisal systems.',
        hrf_img:     reportsImg,
        hrf_imgAlt:  'Performance Management',
        hrf_footer:  'This helps organizations build a performance-driven and accountable workforce.',
        hrf_list: [
            {
                hrf_label: 'Manage employee appraisals efficiently',
                hrf_svgPath: <><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></>,
            },
            {
                hrf_label: 'Track promotions based on performance metrics',
                hrf_svgPath: <><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></>,
            },
            {
                hrf_label: 'Handle role changes and de-promotions',
                hrf_svgPath: <><path d="M2 12h20"/><path d="M12 2v20"/></>,
            },
            {
                hrf_label: 'Maintain structured performance evaluation records',
                hrf_svgPath: <><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></>,
            },
        ],
    },
    {
        hrf_id:      3,
        hrf_title:   'Analytics and Reporting',
        hrf_text:    'Gain actionable insights with advanced analytics and real-time HR data visibility.',
        hrf_img:     TrackingCardImage,
        hrf_imgAlt:  'Analytics and Reporting',
        hrf_footer:  'This empowers HR teams with insights to improve planning and workforce management.',
        hrf_list: [
            {
                hrf_label: 'Advanced HR analytics with real-time dashboards',
                hrf_svgPath: <><path d="M21 12v-2a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v2"/><circle cx="12" cy="16" r="5"/><path d="M12 11v5"/></>,
            },
            {
                hrf_label: 'Generate compliance and operational reports',
                hrf_svgPath: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></>,
            },
            {
                hrf_label: 'Visualize workforce data with clarity',
                hrf_svgPath: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></>,
            },
            {
                hrf_label: 'Make data-driven HR decisions quickly',
                hrf_svgPath: <><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></>,
            },
        ],
    },
    {
        hrf_id:      4,
        hrf_title:   'Compliance Management',
        hrf_text:    'Ensure regulatory compliance and maintain accurate records across all HR processes.',
        hrf_img:     PrivacyCardImage,
        hrf_imgAlt:  'Compliance Management',
        hrf_footer:  'This reduces compliance risks while ensuring transparency and accountability.',
        hrf_list: [
            {
                hrf_label: 'Automated compliance tracking and updates',
                hrf_svgPath: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></>,
            },
            {
                hrf_label: 'Support labor law compliance requirements',
                hrf_svgPath: <><path d="M12 2v20"/><path d="M2 12h20"/></>,
            },
            {
                hrf_label: 'Maintain detailed audit trails for all activities',
                hrf_svgPath: <><rect x="2" y="2" width="20" height="20" rx="2"/><line x1="9" y1="9" x2="15" y2="15"/><line x1="15" y1="9" x2="9" y2="15"/></>,
            },
            {
                hrf_label: 'Ensure accurate and compliant HR documentation',
                hrf_svgPath: <><path d="M16 2v4h4"/><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 12h8"/><path d="M8 16h6"/></>,
            },
        ],
    },
];

/* ============================================================
   SECTION 4 — HRMS_IMPROVES_SECTION
   Key Benefits List
============================================================ */
const hri_keyBenefits = [
    'Eliminates dependency on multiple HR tools',
    'Improves data accuracy and real-time synchronization',
    'Enhances visibility across all HR operations',
    'Reduces manual work and administrative effort',
    'Supports scalable and efficient workforce management',
];

/* ============================================================
   ROOT COMPONENT
============================================================ */
const Hrms = () => {

  const [hrh_demoBtnLabel, setHrh_demoBtnLabel] = useState('Request Your Demo');
    const [hrh_demoBtnLoading, setHrh_demoBtnLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const [headerRef, headerVisible] = useScrollAnimation(0.12);

    const hrh_handleDemoClick = () => {
        openModal();
    };

    return (
        <>
            <Helmet>
                <title>NoQu TAM: HRMS - Human Resource Management System</title>
                <meta name="description" content="Comprehensive HRMS module within NoQu TAM for complete workforce management. Manage employee data, recruitment, onboarding, performance, and compliance all in one unified platform." />
                <meta property="og:title" content="NoQu TAM: HRMS - Human Resource Management" />
                <meta property="og:description" content="Complete HRMS within NoQu TAM for workforce management." />
                <meta property="og:url" content="https://noqu.in/tam-hrms" />
            </Helmet>
            <div className="tf-page-wrapper">{/* ================================================
                SECTION 1 — HERO
            ================================================ */}
            <div className="tf-hero-main">
                <div className="tf-hero-left">
                    <div className="tf-hero-center-stack">
                        <h1 className="tf-hero-title">
                            HRMS <span className="tf-hero-title-green"></span>
                        </h1>
                        <p className="tf-hero-subtitle">
                           The one unified system where every HR piece finally fits.
                        </p>
                        <div className="tf-hero-cta-area">
                            <button
                                className="tf-demo-btn"
                                onClick={hrh_handleDemoClick}
                                disabled={hrh_demoBtnLoading}
                            >
                                {hrh_demoBtnLabel}
                                {hrh_demoBtnLoading
                                    ? <i className="fas fa-spinner fa-spin ms-2" />
                                    : (
                                        <span className="tf-btn-arrow">
                                            <svg width="14" height="13" viewBox="0 0 13 13" fill="none">
                                                <path
                                                    d="M2.5 6.5H10.5M7 3L10.5 6.5L7 10"
                                                    stroke="white"
                                                    strokeWidth="1.8"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                    )
                                }
                            </button>
                        </div>
                    </div>

                    <div className="tf-hero-mini-cards">
                        {hrh_miniCards.map((card, index) => (
                            <div className="tf-mini-card" key={index}>
                                <div className={card.hrh_wrapClass}>
                                    {card.hrh_icon}
                                </div>
                                <span className="tf-mini-card-label">{card.hrh_label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="tf-hero-right">
                    <img src={HeroImage} alt="Hero" loading="eager" />
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
                             HRMS<span className="tf-para-highlight"></span>
                            </h2>
                            <p className="tf-para-text">
                                Managing HR operations across multiple tools creates inefficiencies, data inconsistencies, and operational delays. <strong>No Qu HRMS </strong> unifies attendance management, payroll integration, and employee data into one intelligent platform, ensuring real-time synchronization across all HR processes. From onboarding to daily workforce operations and exit management, every activity is connected and streamlined. This centralized HRMS system eliminates manual errors, improves data accuracy, and enhances visibility, enabling HR teams to manage their workforce efficiently, make faster decisions, and focus on building a productive and engaged organization.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection animClass="tf-fade-right">
                        <div className="tf-para-right">
                            <div className="tf-para-cards-grid">
                               {hrp_channelCards.map((card, index) => (
                                    <div key={index} className="tf-para-card">
                                        <div className="tf-para-icon-wrap">
                                            {card.hrp_icon}
                                        </div>
                                        <span className="tf-para-card-label">{card.hrp_label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>

                </div>
            </section>

            {/* ================================================
                SECTION 3 — FEATURES (Stacking Cards)
            ================================================ */}
            <section className="hrf-section">

                <div
                    ref={headerRef}
                    className={`hrf-sync-header tf-fade-up${headerVisible ? ' tf-visible' : ''}`}
                >
                    <h2 className="hrf-sync-top-heading tf-sec3-headline">
                        Complete <span className="hrf-sync-heading-green tf-sec3-hl-dark">Hr Solution</span>
                    </h2>
                    <div className="tf-sec3-bar" />
                    <p className="hrf-sync-top-desc tf-sec3-subtext">
                        No Qu HRMS delivers an integrated, end-to-end human resource management system designed 
                        to simplify operations, improve accuracy, and provide complete control over workforce 
                        data and processes.
                    </p>
                </div>

                <div className="hrf-stack-container">
                    {hrf_stackCards.map((card, idx) => (
                        <div className="hrf-sticky-wrapper" key={card.hrf_id}>
                            <div className={`hrf-sync-card hrf-card-${idx + 1}`}>
                                <div className="hrf-sync-card-content">
                                    <h3 className="hrf-sync-card-title tf-sec3-card-title">{card.hrf_title}</h3>
                                    <p className="hrf-sync-card-text tf-sec3-card-desc">{card.hrf_text}</p>
                                    <p className="tf-sec3-key-label" style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Key Features</p>
                                    <ul className="hrf-sync-card-list tf-sec3-card-points">
                                        {card.hrf_list.map(({ hrf_label, hrf_svgPath }) => (
                                            <li key={hrf_label}>
                                                <span className="hrf-sync-list-icon">
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                        {hrf_svgPath}
                                                    </svg>
                                                </span>
                                                {hrf_label}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="hrf-sync-card-footer">{card.hrf_footer}</p>
                                </div>
                                <div className="hrf-sync-card-visual">
                                    <img src={card.hrf_img} alt={card.hrf_imgAlt} className="hrf-sync-card-img" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </section>

            {/* ================================================
                SECTION 4 — IMPROVE
            ================================================ */}
            <section className="tf-improve-section">
                <div className="tf-improve-inner">

                    <AnimatedSection animClass="tf-fade-left">
                        <div className="tf-improve-left">

                            <h2 className="tf-improve-headline">
                              WHY HRMS MATTERS
                            </h2>

                            <p className="tf-improve-para">
                             A unified HRMS platform improves efficiency, reduces errors, and enables better workforce management.
                            </p>

                            <p className="tf-improve-label">Key benefits include:</p>

                            <StaggeredList
                                items={hri_keyBenefits}
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
                                <p className="tf-improve-para">
                                    By centralizing HR processes, organizations can operate faster, smarter, and more efficiently.
                                </p>

                                <p className="tf-improve-highlight">
                                    No Qu HRMS transforms fragmented HR operations into a unified, intelligent system, ensuring seamless workforce management, accurate data handling, and complete organizational control.
                                </p>

                                <p className="tf-improve-para">
                                    Ensure every attendance record is accurate, verified, and ready for payroll processing without unnecessary delays.
                                </p>
                            </AnimatedSection>

                        </div>
                    </AnimatedSection>

                    <AnimatedSection animClass="tf-fade-right" delay="tf-delay-2">
                        <div className="tf-improve-right">
                            <div className="tf-improve-img-block">
                                <img src={RoutingCardImage} alt="Attendance Regularization" />
                            </div>
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
                        <h2 className="tf-cta-headline">
                          Turn manual HR routines into fast, accurate, <br />
                            <span className="tf-cta-headline-blue">and fully digital operations.</span>
                        </h2>
                        <div className="tf-cta-btn-group">
                            <button className="tf-cta-btn" onClick={openModal}>
                                Request your Demo
                                <div className="tf-cta-btn-arrow-circle">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" strokeWidth="3">
                                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
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

export default Hrms;
