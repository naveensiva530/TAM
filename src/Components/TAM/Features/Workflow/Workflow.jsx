import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import '../TAM_Features_Common.css';
import './Workflow.css';

import HeroImage         from '../../../../assets/banner/workflow.png';
import TrackingCardImage from '../../../../assets/15+ Requests2.jpeg';
import RoutingCardImage  from '../../../../assets/Automated Approvals.jpeg';
import PrivacyCardImage  from '../../../../assets/Alerts & Reminders.jpeg';
import WorkforceImage    from '../../../../assets/Section Images/Workflow.png';

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
            ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } },
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
   SECTION 1 — WORKFLOW_HERO_SECTION
   Hero Mini Cards Data
============================================================ */
const wfh_miniCards = [
    {
        wfh_wrapClass: 'tf-mini-icon-wrap',
        wfh_label: '15+ Attendance',
        wfh_icon: (
            /* Calendar with checkmark for Attendance */
            <svg className="tf-mini-svg-icon" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
                <path d="m9 16 2 2 4-4"/>
            </svg>
        ),
    },
    {
        wfh_wrapClass: 'tf-mini-icon-wrap',
        wfh_label: 'Automated Approvals',
        wfh_icon: (
            /* Sparkles/Automation icon representing seamless approval */
            <svg className="tf-mini-svg-icon" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                <path d="M5 3v4"/>
                <path d="M3 5h4"/>
            </svg>
        ),
    },
    {
        wfh_wrapClass: 'tf-mini-icon-wrap',
        wfh_label: 'Alerts & Reminders',
        wfh_icon: (
            /* Bell icon for Alerts */
            <svg className="tf-mini-svg-icon" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
            </svg>
        ),
    },
];

/* ============================================================
   SECTION 2 — WORKFLOW_PARAGRAPH_SECTION
   Channel Cards Data
============================================================ */
const wfp_channelCards = [
    {
       wfp_label: 'Workflow',
       iconBgClass: 'tf-para-icon-bg-blue',
       wfp_icon: (
        <svg viewBox="0 0 64 64" fill="none" width="48" height="48">
            {/* Column headers */}
            <rect x="4" y="6" width="16" height="5" rx="2" fill="#0077B6" opacity="0.25"/>
            <rect x="24" y="6" width="16" height="5" rx="2" fill="#0077B6" opacity="0.55"/>
            <rect x="44" y="6" width="16" height="5" rx="2" fill="#0077B6"/>
            {/* Col 1 cards */}
            <rect x="4" y="14" width="16" height="10" rx="3" fill="#DBEAFE" stroke="#0077B6" strokeWidth="1.5"/>
            <line x1="7" y1="18" x2="17" y2="18" stroke="#0077B6" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
            <line x1="7" y1="21" x2="14" y2="21" stroke="#0077B6" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
            <rect x="4" y="27" width="16" height="10" rx="3" fill="#DBEAFE" stroke="#0077B6" strokeWidth="1.5"/>
            <line x1="7" y1="31" x2="17" y2="31" stroke="#0077B6" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
            <line x1="7" y1="34" x2="13" y2="34" stroke="#0077B6" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
            {/* Col 2 cards */}
            <rect x="24" y="14" width="16" height="10" rx="3" fill="#BFDBFE" stroke="#0077B6" strokeWidth="1.5"/>
            <line x1="27" y1="18" x2="37" y2="18" stroke="#0077B6" strokeWidth="1.2" strokeLinecap="round" opacity="0.7"/>
            <line x1="27" y1="21" x2="33" y2="21" stroke="#0077B6" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
            <rect x="24" y="27" width="16" height="10" rx="3" fill="#0077B6" opacity="0.7"/>
            <line x1="27" y1="31" x2="37" y2="31" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
            <line x1="27" y1="34" x2="33" y2="34" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.7"/>
            {/* Col 3 done card */}
            <rect x="44" y="14" width="16" height="10" rx="3" fill="#0077B6"/>
            <polyline points="47,19 50,22 57,16" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            {/* Move arrows */}
            <path d="M21.5 18 L23.5 19 L21.5 20" fill="none" stroke="#0077B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M41.5 18 L43.5 19 L41.5 20" fill="none" stroke="#0077B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            {/* Progress bar */}
            <rect x="4" y="44" width="56" height="5" rx="2.5" fill="#DBEAFE"/>
            <rect x="4" y="44" width="36" height="5" rx="2.5" fill="#0077B6"/>
            {/* Labels */}
            <text x="12" y="57" textAnchor="middle" fontSize="5.5" fill="#0077B6" fontFamily="sans-serif" fontWeight="600" opacity="0.7">TODO</text>
            <text x="32" y="57" textAnchor="middle" fontSize="5.5" fill="#0077B6" fontFamily="sans-serif" fontWeight="600">IN PROGRESS</text>
            <text x="52" y="57" textAnchor="middle" fontSize="5.5" fill="#0077B6" fontFamily="sans-serif" fontWeight="700">DONE</text>
        </svg>
      ),
    },
    {
        wfp_label: 'Approval',
        iconBgClass: 'tf-para-icon-bg-green',
        wfp_icon: (
            <svg viewBox="0 0 58 58" fill="none" width="45" height="45">
                <rect x="12" y="14" width="34" height="38" rx="5" fill="#DCFCE7" stroke="#38B000" strokeWidth="2"/>
                <rect x="22" y="10" width="14" height="8" rx="3" fill="#F0FFF4" stroke="#38B000" strokeWidth="2"/>
                <line x1="19" y1="28" x2="39" y2="28" stroke="#38B000" strokeWidth="2" strokeLinecap="round"/>
                <line x1="19" y1="35" x2="33" y2="35" stroke="#38B000" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="36" cy="42" r="9" fill="#38B000"/>
                <polyline points="31,42 34.5,46 41,38" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
    },
    {
        wfp_label: 'Notifications',
        iconBgClass: 'tf-para-icon-bg-blue',
        wfp_icon: (
            <svg viewBox="0 0 58 58" fill="none" width="45" height="45">
                <path d="M18 28 a11 11 0 0 1 22 0 c0 12 5 16 5 16 H13 s5-4 5-16 Z" fill="#DBEAFE" stroke="#0077B6" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M24 44 a5 2.5 0 0 0 10 0" fill="#DBEAFE" stroke="#0077B6" strokeWidth="2"/>
                <line x1="29" y1="17" x2="29" y2="13" stroke="#0077B6" strokeWidth="2.2" strokeLinecap="round"/>
                <circle cx="41" cy="16" r="6" fill="#0077B6"/>
                <circle cx="41" cy="16" r="3" fill="white"/>
                <circle cx="41" cy="16" r="1.5" fill="#0077B6"/>
            </svg>
        ),
    },
    {
        wfp_label: 'Automation',
        iconBgClass: 'tf-para-icon-bg-green',
        wfp_icon: (
        <svg viewBox="0 0 64 64" fill="none" width="48" height="48">
            {/* Circular repeat ring */}
            <path d="M18 18 A20 20 0 1 1 14 46" fill="none" stroke="#38B000" strokeWidth="2.5" strokeLinecap="round"/>
            {/* Arrowheads on ring */}
            <polyline points="10,44 14,46 16,42" fill="none" stroke="#38B000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="14,14 18,18 22,14" fill="none" stroke="#38B000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            {/* Center filled circle */}
            <circle cx="33" cy="32" r="13" fill="#38B000"/>
            {/* Play triangle */}
            <polygon points="30,25 30,39 43,32" fill="white"/>
            {/* Speed lines */}
            <line x1="49" y1="26" x2="57" y2="26" stroke="#38B000" strokeWidth="2.2" strokeLinecap="round"/>
            <line x1="50" y1="32" x2="59" y2="32" stroke="#38B000" strokeWidth="2.2" strokeLinecap="round"/>
            <line x1="49" y1="38" x2="57" y2="38" stroke="#38B000" strokeWidth="2.2" strokeLinecap="round"/>
            {/* Dot accents */}
            <circle cx="52" cy="14" r="3" fill="#38B000" opacity="0.4"/>
            <circle cx="58" cy="18" r="2" fill="#38B000" opacity="0.25"/>
        </svg>
        ),
    },
];

/* ============================================================
   SECTION 3 — WORKFLOW_FEATURES_SECTION
   Carousel Cards Data
============================================================ */
const wff_carouselCards = [
    {
        id:         0,
        image:      TrackingCardImage,
        badge:      '01',
        badgeClass: 'wff-badge-green',
        title: '15+ Attendance Requests Supported',
        desc:  'The workflow system handles a wide range of employee requests related to attendance and time management. This flexibility ensures that every attendance-related request is handled through a structured and transparent workflow process.',
        list: [
            'Leave applications',
            'Late check-ins and early check-outs',
            'Permissions and overtime requests',
            'Comp-offs and week-off changes',
        ],
        footer: 'Every request type is tracked clearly, ensuring no attendance action goes unrecorded.',
    },
    {
        id:         1,
        image:      RoutingCardImage,
        badge:      '02',
        badgeClass: 'wff-badge-blue',
        title: 'Automated Approvals',
        desc:  'Attendance requests move automatically to the right approvers based on predefined workflow rules. Managers can review and approve requests quickly while maintaining full visibility of team activities.',
        list: [
            'Instant notifications to reporting officers',
            'Multi-level approval hierarchy',
            'Escalation for pending requests',
            'Intelligent routing to prevent request delays',
        ],
        footer: 'This ensures approvals are fast, fair, and fully transparent across all levels.',
    },
    {
        id:         2,
        image:      PrivacyCardImage,
        badge:      '03',
        badgeClass: 'wff-badge-dark',
        title: 'Alerts & Reminders',
        desc:  'Keep employees, managers, and HR teams informed with real-time notifications. These alerts ensure that no request is overlooked and every workflow step progresses smoothly.',
        list: [
            'Real-time updates for every request',
            'Status notifications for employee submissions',
            'HR and manager reminders for pending approvals',
            'Auto-escalation alerts for delayed responses',
        ],
        footer: 'Timely reminders keep the entire approval chain moving without manual follow-ups.',
    },
];
/* ============================================================
   SECTION 4 — WORKFLOW_IMPROVE_SECTION
   Key Benefits List
============================================================ */
const wfi_keyBenefits = [
    'Faster request approvals and reduced delays',
    'Improved transparency in approval processes',
    'Reduced manual coordination between teams',
    'Better visibility for managers and HR teams',
    'More efficient workforce and attendance management',
];

/* ============================================================
   CHEVRON ICONS
============================================================ */
const ChevronLeft = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 18l-6-6 6-6"/>
    </svg>
);
const ChevronRight = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18l6-6-6-6"/>
    </svg>
);

/* ============================================================
   ROOT COMPONENT
============================================================ */
const Workflow = () => {

  /* ── Hero button state ── */
    const [wfh_demoBtnLabel,   setWfh_demoBtnLabel]   = useState('Request Your Demo');
    const [wfh_demoBtnLoading, setWfh_demoBtnLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


    const wfh_handleDemoClick = () => {
        openModal();
    };

    /* ── Section 3 carousel state ── */
    const [wff_activeIndex, setWff_activeIndex] = useState(0);
    const total = wff_carouselCards.length;

    const wff_prev = () => setWff_activeIndex(i => (i - 1 + total) % total);
    const wff_next = () => setWff_activeIndex(i => (i + 1) % total);

    /* Build visible 3 cards: left | center | right */
    const wff_visibleCards = [
        { card: wff_carouselCards[(wff_activeIndex - 1 + total) % total], position: 'left'   },
        { card: wff_carouselCards[wff_activeIndex],                        position: 'center' },
        { card: wff_carouselCards[(wff_activeIndex + 1) % total],          position: 'right'  },
    ];

    return (
        <>
            <Helmet>
                <title>NoQu TAM: Workflow Automation for Efficient Attendance Management</title>
                <meta name="description" content="Streamline attendance approvals and workflows with NoQu TAM's automated workflow system. Configure request flows, set approval hierarchies, and eliminate manual bottlenecks." />
                <meta property="og:title" content="NoQu TAM: Workflow Automation for Attendance" />
                <meta property="og:description" content="Automate attendance approvals and workflows with NoQu TAM." />
                <meta property="og:url" content="https://noqu.in/tam-workflow" />
            </Helmet>
            <div className="tf-page-wrapper">{/* ================================================
                SECTION 1 — WORKFLOW_HERO_SECTION
            ================================================ */}
            <div className="tf-hero-main">
                <div className="tf-hero-left">
                    <div className="tf-hero-center-stack">
                        <h1 className="tf-hero-title">
                            Workflow <span className="tf-hero-title-green"></span>
                        </h1>
                        <p className="tf-hero-subtitle">
                           Attendance work no longer waits — it flows.
                        </p>
                        <div className="tf-hero-cta-area">
                            <button
                                className="tf-demo-btn"
                                onClick={wfh_handleDemoClick}
                                disabled={wfh_demoBtnLoading}
                            >
                                {wfh_demoBtnLabel}
                                {wfh_demoBtnLoading
                                    ? <i className="fas fa-spinner fa-spin ms-2" />
                                    : (
                                        <span className="tf-btn-arrow">
                                            <svg width="14" height="13" viewBox="0 0 13 13" fill="none">
                                                <path d="M2.5 6.5H10.5M7 3L10.5 6.5L7 10" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </span>
                                    )
                                }
                            </button>
                        </div>
                    </div>

                    <div className="tf-hero-mini-cards">
                        {wfh_miniCards.map((card, index) => (
                            <div className="tf-mini-card" key={index}>
                                <div className={card.wfh_wrapClass}>{card.wfh_icon}</div>
                                <span className="tf-mini-card-label">{card.wfh_label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="tf-hero-right">
                    <img src={HeroImage} alt="Hero" loading="eager" />
                </div>
            </div>


            {/* ================================================
                SECTION 2 — WORKFLOW_PARAGRAPH_SECTION
            ================================================ */}
            <section className="tf-para-section">
                <div className="tf-para-grid">

                    <AnimatedSection animClass="tf-fade-left">
                        <div className="tf-para-left">
                            <h2 className="tf-para-heading">
                                Workflow <span className="tf-para-highlight"></span>
                            </h2>
                            <p className="tf-para-text">
                                <strong>No Qu TAM</strong> streamlines attendance and HR processes through intelligent workflow automation designed for speed and efficiency. Employees can raise requests for regularization, leave, or permissions, which move instantly through predefined approval hierarchies. Managers receive real-time notifications and can approve requests quickly without delays. This automated workflow system reduces manual follow-ups, eliminates communication gaps, and ensures every request is tracked accurately. Organizations benefit from improved productivity, faster decision-making, and seamless coordination between employees, managers, and HR teams.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection animClass="tf-fade-right">
                        <div className="tf-para-right">
                            <div className="tf-para-cards-grid">
                                {wfp_channelCards.map((card, index) => (
                                    <div key={index} className="tf-para-card">
                                        <div className={`tf-para-icon-wrap ${card.iconBgClass || ''}`}>
                                            {card.wfp_icon}
                                        </div>
                                        <span className="tf-para-card-label">{card.wfp_label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>

                </div>
            </section>


            {/* ══════════════════════════════════════
                SECTION 3 — WORKFLOW_FEATURES_SECTION
                (HORIZONTAL CAROUSEL — pulse style)
            ══════════════════════════════════════ */}
            <section className="wff-section">
                <div className="wff-container">

                    {/* Header */}
                    <div className="wff-header">
                       
                        <h2 className="wff-title tf-sec3-headline">
                            The Pulse of <span className="wff-title-blue tf-sec3-hl-blue">Workflow</span>
                        </h2>
                        <div className="tf-sec3-bar" />
                        <p className="wff-subtitle tf-sec3-subtext">
                            No Qu TAM's workflow system manages multiple attendance-related requests
                            efficiently while maintaining clear approval structures.
                        </p>
                    </div>

                    {/* Carousel Row */}
                    <div className="wff-carousel-wrapper">

                        <button className="wff-arrow" onClick={wff_prev} aria-label="Previous">
                            <ChevronLeft size={20} />
                        </button>

                        <div className="wff-carousel-track">
                            {wff_visibleCards.map(({ card, position }) => (
                                <div
                                    key={`${card.id}-${position}`}
                                    className={`wff-card ${position === 'center' ? 'active' : 'side'}`}
                                    onClick={() => {
                                        if (position === 'left')  wff_prev();
                                        if (position === 'right') wff_next();
                                    }}
                                >
                                    {/* TOP — Image */}
                                    <div className="wff-card-img-wrap">
                                        <img src={card.image} alt={card.title} className="wff-card-img" />
                                        <span className={`wff-card-badge ${card.badgeClass}`}>{card.badge}</span>
                                    </div>

                                    {/* BOTTOM — Content */}
                                    {/* BOTTOM — Content */}
<div className="wff-card-body">
    <h3 className="wff-card-title tf-sec3-card-title">{card.title}</h3>
    <p className="wff-card-desc tf-sec3-card-desc">{card.desc}</p>
    <p className="tf-sec3-key-label">Key Features</p>
    <ul className="wff-card-list tf-sec3-card-points">
        {card.list.map((item, i) => (
            <li key={i}>{item}</li>
        ))}
    </ul>
    {card.footer && (
        <p className="wff-card-footer">{card.footer}</p>
    )}
</div>
                                </div>
                            ))}
                        </div>

                        <button className="wff-arrow" onClick={wff_next} aria-label="Next">
                            <ChevronRight size={20} />
                        </button>

                    </div>

                    {/* Dots */}
                    <div className="wff-dots">
                        {wff_carouselCards.map((_, i) => (
                            <button
                                key={i}
                                className={`wff-dot ${i === wff_activeIndex ? 'active' : ''}`}
                                onClick={() => setWff_activeIndex(i)}
                                aria-label={`Slide ${i + 1}`}
                            />
                        ))}
                    </div>

                </div>
            </section>


            {/* ================================================
                SECTION 4 — WORKFLOW_IMPROVE_SECTION
            ================================================ */}
            <section className="tf-improve-section">
                <div className="tf-improve-inner">

                    <AnimatedSection animClass="tf-fade-left">
                        <div className="tf-improve-left">
                            <h2 className="tf-improve-headline">
                               WHY WORKFLOW AUTOMATION MATTERS
                            </h2>
                            <p className="tf-improve-para">
                              Workflow automation simplifies attendance management and improves organizational efficiency.
                            </p>
                            <p className="tf-improve-label">Key benefits include:</p>
                            <StaggeredList
                                items={wfi_keyBenefits}
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
                                   By automating approval workflows, organizations can focus less on administrative tasks and more on managing their workforce effectively.
                                </p>
                                <p className="tf-improve-highlight">
                                    Transform manual approval processes into a seamless and intelligent workflow with No Qu TAM.
                                </p>
                                <p className="tf-improve-para">
                                    Ensure every attendance request moves efficiently through the right approval channels without delays or confusion.
                                </p>
                            </AnimatedSection>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection animClass="tf-fade-right" delay="tf-delay-2">
                        <div className="tf-improve-right">
                            <div className="tf-improve-img-block">
                                <img src={WorkforceImage} alt="Workforce Management" />
                            </div>
                        </div>
                    </AnimatedSection>

                </div>
            </section>


            {/* ================================================
                SECTION 5 — WORKFLOW_CTA_SECTION
            ================================================ */}
            <AnimatedSection animClass="tf-scale-up">
                <section className="tf-cta-section">
                    <div className="tf-cta-wrap">
                        <h2 className="tf-cta-headline">
                           Turn every attendance task into a smooth,<br />
                            <span className="tf-cta-headline-blue">automated HR workflow.</span>
                        </h2>
                        <div className="tf-cta-btn-group">
                            <button className="tf-cta-btn" onClick={openModal}>
                                Request your Demo
                                <div className="tf-cta-btn-arrow-circle">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
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

export default Workflow;
