import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import '../TAM_Features_Common.css';
import './Leave_Holiday.css';

import HeroImage         from '../../../../assets/banner/Leave_Holiday.png';
import TrackingCardImage from '../../../../assets/Leave Management.jpeg';
import RoutingCardImage  from '../../../../assets/Holiday Configuration.jpeg';
import PrivacyCardImage  from '../../../../assets/Transparency for Employees.jpeg';
import WorkforceImage    from '../../../../assets/Reports & Insights.jpeg';
import WorkforceImage2    from '../../../../assets/Section Images/Leave Management.png';

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
   SECTION 1 — LEAVE_HERO_SECTION
   Hero Mini Cards Data
============================================================ */
const lh_hero_miniCards = [
    {
        lh_wrapClass: 'tf-mini-icon-wrap',
        lh_label:     'Leave Management',
        // A "Calendar Check" icon representing approved leave
        lh_icon: (
            <svg className="tf-mini-svg-icon" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
                <polyline points="9 16 11 18 15 14"/>
            </svg>
        ),
    },
    {
        lh_wrapClass: 'tf-mini-icon-wrap',
        lh_label:     'Holiday Configuration',
        // A "Settings/Gear" icon combined with a calendar feel
        lh_icon: (
            <svg className="tf-mini-svg-icon" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
                <circle cx="12" cy="12" r="3"/>
            </svg>
        ),
    },
    {
        lh_wrapClass: 'tf-mini-icon-wrap',
        lh_label:     'Reports & Insights',
        // A "Bar Chart" icon which is standard for insights
        lh_icon: (
            <svg className="tf-mini-svg-icon" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"/>
                <line x1="12" y1="20" x2="12" y2="4"/>
                <line x1="6" y1="20" x2="6" y2="14"/>
            </svg>
        ),
    },
];

/* ============================================================
   SECTION 2 — LEAVE_PARAGRAPH_SECTION
   Channel Cards Data
============================================================ */
const lh_para_channelCards = [
    {
        lh_label: 'Leave Request',
        lh_iconBgClass: 'tf-para-icon-bg-blue',
        lh_icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8"  y1="2" x2="8"  y2="6"/>
                <line x1="3"  y1="10" x2="21" y2="10"/>
                <polyline points="9 16 11 18 15 14"/>
            </svg>
        ),
    },
    {
        lh_label: 'Time-Off Tracking',
        lh_iconBgClass: 'tf-para-icon-bg-green',
        lh_icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
            </svg>
        ),
    },
    {
        lh_label: 'Notifications',
        lh_iconBgClass: 'tf-para-icon-bg-blue',
        lh_icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
        ),
    },
    {
        lh_label: 'Reports & Insights',
        lh_iconBgClass: 'tf-para-icon-bg-green',
        lh_icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"/>
                <line x1="12" y1="20" x2="12" y2="4"/>
                <line x1="6"  y1="20" x2="6"  y2="14"/>
            </svg>
        ),
    },
];

/* ============================================================
   SECTION 3 — LEAVE_FEATURES_SECTION
   Feature Step Cards Data - UPDATED WITH YOUR CONTENT
============================================================ */
const lh_features_featureCards = [
    {
        lh_id:          0,
        lh_stepNum:     '01',
        lh_title:       'Leave Management',
        lh_circleClass: 'lh-features-circle-green',
        lh_iconBoxClass:'lh-features-iconbox-green',
        lh_image:       TrackingCardImage,
        lh_description: 'This ensures smooth leave processing while maintaining accurate and up-to-date records.',
        lh_subdescription:'Manage employee leave requests efficiently with a structured and real-time approval system.',
        lh_headerIcon: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
                <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>
            </svg>
        ),
        lh_keyPoints: [
            {
                lh_pointIconClass: 'lh-features-point-icon-green',
                lh_pointText: 'Apply, approve, and track leaves in real time',
                lh_pointIcon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
            },
            {
                lh_pointIconClass: 'lh-features-point-icon-blue',
                lh_pointText: 'Support multiple leave types like sick, casual, earned leave',
                lh_pointIcon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/></svg>,
            },
            {
                lh_pointIconClass: 'lh-features-point-icon-green',
                lh_pointText: 'Simplified handling of all leave categories',
                lh_pointIcon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
            },
            {
                lh_pointIconClass: 'lh-features-point-icon-blue',
                lh_pointText: 'Employee self-service access through mobile app',
                lh_pointIcon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
            },
        ],
    },
    {
        lh_id:          1,
        lh_stepNum:     '02',
        lh_title:       'Holiday Configuration',
        lh_circleClass: 'lh-features-circle-blue',
        lh_iconBoxClass:'lh-features-iconbox-blue',
        lh_image:       RoutingCardImage,
        lh_description: 'This helps organizations maintain consistent and well-planned holiday schedules.',
         lh_subdescription:'Plan and manage holidays efficiently across different branches, teams, and locations.',
        lh_headerIcon: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
                <circle cx="12" cy="15" r="1"/>
                <circle cx="16" cy="15" r="1"/>
                <circle cx="8" cy="15" r="1"/>
            </svg>
        ),
        lh_keyPoints: [
            {
                lh_pointIconClass: 'lh-features-point-icon-green',
                lh_pointText: 'Smart and flexible holiday planning system',
                lh_pointIcon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
            },
            {
                lh_pointIconClass: 'lh-features-point-icon-blue',
                lh_pointText: 'Centralized and branch-specific holiday lists',
                lh_pointIcon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14 14 0 0 0 0 20 14 14 0 0 0 0-20"/><line x1="2" y1="12" x2="22" y2="12"/></svg>,
            },
            {
                lh_pointIconClass: 'lh-features-point-icon-green',
                lh_pointText: 'Custom week-offs based on location or team',
                lh_pointIcon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
            },
            {
                lh_pointIconClass: 'lh-features-point-icon-blue',
                lh_pointText: 'Quick configuration of public holidays',
                lh_pointIcon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,
            },
        ],
    },
    {
        lh_id:          2,
        lh_stepNum:     '03',
        lh_title:       'Transparency For Employees',
        lh_circleClass: 'lh-features-circle-dark',
        lh_iconBoxClass:'lh-features-iconbox-dark',
        lh_image:       PrivacyCardImage,
        lh_description: 'This improves employee trust and reduces dependency on HR for leave-related queries.',
         lh_subdescription:'Provide employees with full visibility into their leave requests, balances, and status updates.',
        lh_headerIcon: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
            </svg>
        ),
        lh_keyPoints: [
            {
                lh_pointIconClass: 'lh-features-point-icon-green',
                lh_pointText: 'Transparent view of leave requests and balances',
                lh_pointIcon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
            },
            {
                lh_pointIconClass: 'lh-features-point-icon-blue',
                lh_pointText: 'Check available leave balance anytime',
                lh_pointIcon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
            },
            {
                lh_pointIconClass: 'lh-features-point-icon-green',
                lh_pointText: 'Track leave history and approval status',
                lh_pointIcon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
            },
            {
                lh_pointIconClass: 'lh-features-point-icon-blue',
                lh_pointText: 'Real-time updates via mobile app and portal',
                lh_pointIcon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
            },
        ],
    },
    {
        lh_id:          3,
        lh_stepNum:     '04',
        lh_title:       'Reports & Insights',
        lh_circleClass: 'lh-features-circle-green',
        lh_iconBoxClass:'lh-features-iconbox-green',
        lh_image:       WorkforceImage,
        lh_description: 'This enables data-driven decisions to optimize workforce availability and productivity.',
         lh_subdescription:'Transform leave and holiday data into meaningful insights for better workforce planning.',
        lh_headerIcon: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12v-2a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v2"/><circle cx="12" cy="16" r="5"/><path d="M12 11v5"/>
            </svg>
        ),
        lh_keyPoints: [
            {
                lh_pointIconClass: 'lh-features-point-icon-green',
                lh_pointText: 'Track absence patterns across teams',
                lh_pointIcon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
            },
            {
                lh_pointIconClass: 'lh-features-point-icon-blue',
                lh_pointText: 'Generate detailed leave summary reports',
                lh_pointIcon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
            },
            {
                lh_pointIconClass: 'lh-features-point-icon-green',
                lh_pointText: 'Analyze leave and holiday usage trends',
                lh_pointIcon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
            },
            {
                lh_pointIconClass: 'lh-features-point-icon-blue',
                lh_pointText: 'Improve workforce planning with data insights',
                lh_pointIcon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>,
            },
        ],
    },
];

/* ============================================================
   SECTION 4 — LEAVE_IMPROVES_SECTION
   Key Benefits List
============================================================ */
const lh_improves_keyBenefits = [
    'Reduces last-minute absenteeism issues',
    'Improves workforce planning and availability visibility',
    'Enhances transparency between employees and HR',
    'Minimizes manual tracking and administrative effort',
    'Supports efficient and accurate leave management',
];

/* ============================================================
   FEATURE STEP CARD — SECTION 3 INNER CARD
============================================================ */
const LHF_FeatureStepCard = ({ card, index }) => {
    const [ref, isVisible] = useScrollAnimation(0.1);

    return (
        <div
            ref={ref}
            className={`lh-features-step-row tf-fade-up ${isVisible ? 'tf-visible' : ''}`}
            style={{ transitionDelay: `${index * 0.15}s` }}
        >
            {/* Step Number Circle */}
            <div className="lh-features-step-number-col">
                <div className={`lh-features-step-circle ${card.lh_circleClass}`}>
                    <span className="lh-features-step-circle-text">{card.lh_stepNum}</span>
                </div>
            </div>

            {/* Card Body */}
            <div className="lh-features-step-card-body">

                {/* Header: Icon + Title */}
                <div className="lh-features-step-card-header" data-step={card.lh_stepNum}>
                    <div className={`lh-features-step-icon-box ${card.lh_iconBoxClass}`}>
                        {card.lh_headerIcon}
                    </div>
                    <h3 className="lh-features-step-card-title tf-sec3-card-title">{card.lh_title}</h3>
                </div>

                {/* Two-column body */}
                <div className="lh-features-step-body-grid">

                    {/* LEFT: Image */}
                    <div className="lh-features-step-img-col">
                        <div className="lh-features-step-img-wrap">
                            <img src={card.lh_image} alt={card.lh_title} />
                        </div>
                    </div>

                    {/* RIGHT: Key Points + Description */}
                    <div className="lh-features-step-points-col">
                            
                            <p className="lh-features-step-sub-desc">
        {card.lh_subdescription}
              </p>

                        <p className="lh-features-step-key-label tf-sec3-key-label">Key Features</p>
                        <ul className="lh-features-step-points-list tf-sec3-card-points">
                            {card.lh_keyPoints.map((point, i) => (
                                <li key={i}>
                                    <div className={`lh-features-point-icon ${point.lh_pointIconClass}`}>
                                        {point.lh_pointIcon}
                                    </div>
                                    {point.lh_pointText}
                                </li>
                            ))}
                        </ul>

                        <div className="lh-features-step-desc-block">
                            <p className="lh-features-step-desc-text tf-sec3-card-desc">{card.lh_description}</p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

/* ============================================================
   ROOT COMPONENT
============================================================ */
const Leave_Holiday = () => {

  const [lh_hero_demoBtnLabel, setLh_hero_demoBtnLabel] = useState('Schedule a Demo');
    const [lh_hero_demoBtnLoading, setLh_hero_demoBtnLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const lh_hero_handleDemoClick = () => {
        openModal();
    };

    return (
        <>
            <Helmet>
                <title>NoQu TAM: Leave & Holiday Management System</title>
                <meta name="description" content="Manage employee leaves and holidays effortlessly with NoQu TAM. Configure leave policies, track holiday calendars, and maintain complete transparency across your organization." />
                <meta property="og:title" content="NoQu TAM: Leave & Holiday Management" />
                <meta property="og:description" content="Streamline leave requests and holiday tracking with NoQu TAM." />
                <meta property="og:url" content="https://noqu.in/tam-leave-holiday" />
            </Helmet>
            <div className="tf-page-wrapper">{/* ================================================
                SECTION 1 — HERO
            ================================================ */}
            <div className="tf-hero-main">
                <div className="tf-hero-left">
                    <div className="tf-hero-center-stack">
                        <h1 className="tf-hero-title">
                            Leave & Holiday<span className="tf-hero-title-green"> Management</span>
                        </h1>
                        <p className="tf-hero-subtitle">
                            Know Leave Plans Before the Shift Even Begins.
                        </p>
                        <div className="tf-hero-cta-area">
                            <button
                                className="tf-demo-btn"
                                onClick={lh_hero_handleDemoClick}
                                disabled={lh_hero_demoBtnLoading}
                            >
                                {lh_hero_demoBtnLabel}
                                {lh_hero_demoBtnLoading
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
                        {lh_hero_miniCards.map((card, index) => (
                            <div className="tf-mini-card" key={index}>
                                <div className={card.lh_wrapClass}>
                                    {card.lh_icon}
                                </div>
                                <span className="tf-mini-card-label">{card.lh_label}</span>
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
                                Leave & Holiday<span className="tf-para-highlight">Management</span>
                            </h2>
                            <p className="tf-para-text">
                                 Before every shift begins, knowing workforce availability is critical for smooth operations and productivity. <strong>No Qu TAM's</strong> leave and holiday management system ensures employees apply for leave in advance while managers receive real-time notifications for quick decisions. HR teams gain instant visibility into leave balances, approvals, and schedules without manual tracking. This structured approach eliminates last-minute confusion, reduces absenteeism impact, and improves planning accuracy, enabling organizations to manage workforce availability efficiently, transparently, and proactively across all departments and locations.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection animClass="tf-fade-right">
                        <div className="tf-para-right">
                            <div className="tf-para-cards-grid">
                                {lh_para_channelCards.map((card, index) => (
                                    <div key={index} className="tf-para-card">
                                        <div className="tf-para-icon-wrap">
                                            {card.lh_icon}
                                        </div>
                                        <span className="tf-para-card-label">{card.lh_label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>

                </div>
            </section>


            {/* ================================================
                SECTION 3 — FEATURES (Card format stays)
            ================================================ */}
            <section className="lh-features-section">

                <AnimatedSection animClass="tf-fade-up">
                    <div className="lh-features-section-intro">
                        <h2 className="lh-features-section-headline tf-sec3-headline">
                            <span className="lh-features-headline-green tf-sec3-hl-dark">Time-off Tracking</span>
                            <span className="lh-features-headline-blue tf-sec3-hl-blue"> Console</span>
                        </h2>
                        <div className="tf-sec3-bar" />
                        <p className="lh-features-section-subtext tf-sec3-subtext">
                            No Qu TAM simplifies leave and holiday tracking with a centralized, real-time system that ensures accuracy, transparency, and seamless coordination between employees, managers, and HR teams.
                        </p>
                    </div>
                </AnimatedSection>

                <div className="lh-features-cards-panel">
                    {lh_features_featureCards.map((card, index) => (
                        <LHF_FeatureStepCard key={card.lh_id} card={card} index={index} />
                    ))}
                </div>

            </section>


            {/* ================================================
                SECTION 4 — IMPROVES
            ================================================ */}
            <section className="tf-improve-section">
                <div className="tf-improve-inner">

                    <AnimatedSection animClass="tf-fade-left">
                        <div className="tf-improve-left">

                            <h2 className="tf-improve-headline">
                              WHY LEAVE & HOLIDAY MANAGEMENT MATTERS
                            </h2>

                            <p className="tf-improve-para">
                              A structured leave management system ensures better workforce planning, reduces disruptions, and improves overall operational efficiency.
                            </p>

                            <p className="tf-improve-label">Key benefits include:</p>

                            <StaggeredList
                                items={lh_improves_keyBenefits}
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
                                  By streamlining leave processes, organizations ensure smooth operations and better workforce coordination.
                                </p>

                                <p className="tf-improve-highlight">
                                   No Qu TAM transforms leave management into a proactive, transparent, and efficient system, helping organizations stay prepared, organized, and in control of workforce availability at all times.
                                </p>

                                <p className="tf-improve-para">
                                   With No Qu Leave & Holiday management, organizations can manage time off effectively and gain complete visibility into workforce availability.
                                </p>
                            </AnimatedSection>

                        </div>
                    </AnimatedSection>

                    <AnimatedSection animClass="tf-fade-right" delay="tf-delay-2">
                        <div className="tf-improve-right">
                            <div className="tf-improve-img-block">
                                <img src={WorkforceImage2} alt="Leave Management" />
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
                           Turn leave juggling into smooth, <br />
                            <span className="tf-cta-headline-blue">structured workforce planning.</span>
                        </h2>
                        <div className="tf-cta-btn-group">
                            <button className="tf-cta-btn" onClick={openModal}>
                                Schedule a Demo
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

export default Leave_Holiday;
