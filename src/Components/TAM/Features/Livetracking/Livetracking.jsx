import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import '../TAM_Features_Common.css';
import './Livetracking.css';

import HeroImage         from '../../../../assets/banner/Livetracking.png';
import TrackingCardImage from '../../../../assets/Real Time Tracking.png';
import RoutingCardImage  from '../../../../assets/Route Mapping.png';
import PrivacyCardImage  from '../../../../assets/Privacy.png';
import WorkforceImage    from '../../../../assets/Section Images/Live Tracking.png';

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
const lth_miniCards = [
    {
        lth_wrapClass: 'tf-mini-icon-wrap',
        lth_label:     'Real-Time Location',
        lth_icon: (
            <svg className="tf-mini-svg-icon"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
            </svg>
        ),
    },
    {
        lth_wrapClass: 'tf-mini-icon-wrap',
        lth_label:     'Route Mapping',
        lth_icon: (
            <svg className="tf-mini-svg-icon"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/>
                <path d="M6 17V7a2 2 0 0 1 2-2h3"/>
                <path d="M18 7v10a2 2 0 0 1-2 2h-3"/>
                <polyline points="12 4 14 6 12 8"/>
            </svg>
        ),
    },
    {
        lth_wrapClass: 'tf-mini-icon-wrap',
        lth_label:     'Privacy Controls',
        lth_icon: (
            <svg className="tf-mini-svg-icon"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <polyline points="9 12 11 14 15 10"/>
            </svg>
        ),
    },
];

/* ============================================================
   SECTION 2 — CHANNEL CARDS
============================================================ */
const ltp_channelCards = [
    {
        ltp_label: 'GPS Tracking',
        ltp_icon: (
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
                <path d="M23 5C17.477 5 13 9.477 13 15c0 8.5 10 24 10 24s10-15.5 10-24c0-5.523-4.477-10-10-10z" fill="#0077B6"/>
                <path d="M19 11C19 9.343 20.343 8 22 8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.55"/>
                <circle cx="23" cy="15" r="4" fill="#ffffff"/>
                <circle cx="23" cy="15" r="2.2" fill="#0077B6"/>
                <circle cx="23" cy="15" r="9.5" stroke="#0077B6" strokeWidth="1" fill="none" opacity="0.25"/>
                <circle cx="23" cy="15" r="13" stroke="#0077B6" strokeWidth="0.8" fill="none" opacity="0.15"/>
            </svg>
        ),
    },
    {
        ltp_label: 'Route Tracking',
        ltp_icon: (
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
                <path d="M12 37 C12 30, 21 30, 21 23 C21 16, 30 16, 30 9" stroke="#38B000" strokeWidth="3" strokeLinecap="round" fill="none"/>
                <circle cx="12" cy="37" r="4.5" fill="#38B000"/>
                <circle cx="12" cy="37" r="2.2" fill="#fff"/>
                <path d="M30 3C26.686 3 24 5.686 24 9c0 5 6 10 6 10s6-5 6-10c0-3.314-2.686-6-6-6z" fill="#38B000"/>
                <circle cx="30" cy="9" r="2.5" fill="#fff"/>
                <circle cx="21" cy="23" r="3.5" fill="#38B000"/>
                <circle cx="21" cy="23" r="1.8" fill="#fff"/>
                <circle cx="15" cy="33" r="1.2" fill="#38B000" opacity="0.4"/>
                <circle cx="17.5" cy="28" r="1.2" fill="#38B000" opacity="0.4"/>
                <circle cx="24.5" cy="18" r="1.2" fill="#38B000" opacity="0.4"/>
                <circle cx="27.5" cy="13" r="1.2" fill="#38B000" opacity="0.4"/>
            </svg>
        ),
    },
    {
        ltp_label: 'Activity Timeline',
        ltp_icon: (
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
                <circle cx="23" cy="23" r="19" fill="#0077B6"/>
                <circle cx="23" cy="23" r="16" fill="#E8F4FD"/>
                <line x1="23" y1="23" x2="23" y2="11" stroke="#0077B6" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="23" y1="23" x2="30" y2="23" stroke="#004F80" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="23" cy="23" r="1.8" fill="#002E5A"/>
                <line x1="23" y1="8"  x2="23" y2="11" stroke="#0077B6" strokeWidth="2" strokeLinecap="round"/>
                <line x1="38" y1="23" x2="35" y2="23" stroke="#0077B6" strokeWidth="2" strokeLinecap="round"/>
                <line x1="23" y1="38" x2="23" y2="35" stroke="#0077B6" strokeWidth="2" strokeLinecap="round"/>
                <line x1="8"  y1="23" x2="11" y2="23" stroke="#0077B6" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="19" cy="33" r="1.8" fill="#0077B6" fillOpacity="0.4"/>
                <circle cx="23" cy="33" r="1.8" fill="#0077B6" fillOpacity="0.7"/>
                <circle cx="27" cy="33" r="2"   fill="#002E5A"/>
            </svg>
        ),
    },
    {
        ltp_label: 'Geo-Fencing',
        ltp_icon: (
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
                <ellipse cx="23" cy="26" rx="17" ry="11" stroke="#38B000" strokeWidth="2" strokeDasharray="4.5 3" fill="none"/>
                <ellipse cx="23" cy="26" rx="10" ry="6.5" fill="#38B000" opacity="0.12"/>
                <path d="M23 8C19.686 8 17 10.686 17 14c0 5.25 6 12 6 12s6-6.75 6-12c0-3.314-2.686-6-6-6z" fill="#38B000"/>
                <circle cx="23" cy="14" r="2.8" fill="#fff" opacity="0.9"/>
                <circle cx="7"  cy="26" r="2.2" fill="#38B000"/>
                <circle cx="39" cy="26" r="2.2" fill="#38B000"/>
                <circle cx="15" cy="16.5" r="1.6" fill="#38B000" opacity="0.5"/>
                <circle cx="31" cy="16.5" r="1.6" fill="#38B000" opacity="0.5"/>
                <circle cx="15" cy="35.5" r="1.6" fill="#38B000" opacity="0.5"/>
                <circle cx="31" cy="35.5" r="1.6" fill="#38B000" opacity="0.5"/>
            </svg>
        ),
    },
];

/* ============================================================
   SECTION 3 — FEATURE CARDS DATA
============================================================ */
const ltf_featureCards = [
    {
        ltf_id:          0,
        ltf_stepNum:     '01',
        ltf_title:       'Real-Time Location Tracking',
        ltf_circleClass: 'ltf-circle-green',
        ltf_iconBoxClass:'ltf-iconbox-green',
        ltf_image:       TrackingCardImage,
        ltf_description: 'Real-time location tracking allows managers to instantly view where employees are working and access location history when needed. This improves accountability and ensures field activities are performed at the correct locations.',
        ltf_subDescription: 'Track employee movements with accurate GPS data and real-time updates.',
        ltf_headerIcon: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
            </svg>
        ),
        ltf_keyPoints: [
            { ltf_pointIconClass: 'ltf-point-icon-green', ltf_pointText: 'GPS Coordinates to Track Employee Location',     ltf_pointIcon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg> },
            { ltf_pointIconClass: 'ltf-point-icon-blue',  ltf_pointText: 'Field Employee Location History',                ltf_pointIcon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
            { ltf_pointIconClass: 'ltf-point-icon-green', ltf_pointText: 'Timeline & Activity Tracking',                   ltf_pointIcon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
            { ltf_pointIconClass: 'ltf-point-icon-blue',  ltf_pointText: 'Geo-tagging for Check-In/Out Places',             ltf_pointIcon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/></svg> },
        ],
    },
    {
        ltf_id:          1,
        ltf_stepNum:     '02',
        ltf_title:       'Route Mapping & Alerts',
        ltf_circleClass: 'ltf-circle-blue',
        ltf_iconBoxClass:'ltf-iconbox-blue',
        ltf_image:       RoutingCardImage,
        ltf_description: 'Route tracking helps organizations understand employee travel patterns and identify opportunities to improve efficiency. Geofence alerts notify managers when employees enter or exit designated work zones, ensuring accurate location-based monitoring.',
         ltf_subDescription: 'Monitor employee travel routes and receive real-time alerts for better operational planning.',
        ltf_headerIcon: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/>
                <path d="M6 17V7a2 2 0 0 1 2-2h3"/>
                <path d="M18 7v10a2 2 0 0 1-2 2h-3"/>
                <polyline points="12 4 14 6 12 8"/>
            </svg>
        ),
        ltf_keyPoints: [
            { ltf_pointIconClass: 'ltf-point-icon-green', ltf_pointText: 'Distance Calculation',          ltf_pointIcon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> },
            { ltf_pointIconClass: 'ltf-point-icon-blue',  ltf_pointText: 'Route Tracking',                ltf_pointIcon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M6 17V7a2 2 0 0 1 2-2h3"/><path d="M18 7v10a2 2 0 0 1-2 2h-3"/></svg> },
            { ltf_pointIconClass: 'ltf-point-icon-green', ltf_pointText: 'Travel Time Analysis',          ltf_pointIcon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
            { ltf_pointIconClass: 'ltf-point-icon-blue',  ltf_pointText: 'Geofence Alerts and Updates',   ltf_pointIcon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg> },
        ],
    },
    {
        ltf_id:          2,
        ltf_stepNum:     '03',
        ltf_title:       'Privacy Controls',
        ltf_circleClass: 'ltf-circle-dark',
        ltf_iconBoxClass:'ltf-iconbox-dark',
        ltf_image:       PrivacyCardImage,
        ltf_description: 'No Qu prioritizes employee privacy by allowing organizations to define when tracking is active and who can access location data. Employees can also view their own tracking details, ensuring transparency and building trust across teams.',
        ltf_subDescription: 'Maintain transparency while ensuring responsible tracking.',
        ltf_headerIcon: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <polyline points="9 12 11 14 15 10"/>
            </svg>
        ),
        ltf_keyPoints: [
            { ltf_pointIconClass: 'ltf-point-icon-green', ltf_pointText: 'Location Monitoring Limited to Work Hours', ltf_pointIcon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
            { ltf_pointIconClass: 'ltf-point-icon-blue',  ltf_pointText: 'Employee Self-Tracking View',               ltf_pointIcon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> },
            { ltf_pointIconClass: 'ltf-point-icon-green', ltf_pointText: 'Controlled Tracking Visibility for ROs',     ltf_pointIcon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
            { ltf_pointIconClass: 'ltf-point-icon-blue',  ltf_pointText: 'Enable or Disable Tracking Anytime',         ltf_pointIcon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg> },
        ],
    },
];

/* ============================================================
   SECTION 4 — KEY BENEFITS
============================================================ */
const lti_keyBenefits = [
    'Improve real-time visibility of field workforce activities',
    'Increase accountability across remote teams',
    'Reduce delays caused by manual reporting',
    'Optimize travel routes and reduce unnecessary travel time',
    'Improve coordination between managers and employees',
    'Enhance customer service response times',
];

/* ============================================================
   FEATURE STEP CARD (Section 3)
============================================================ */
const LTF_FeatureStepCard = ({ card, index }) => {
    const [ref, isVisible] = useScrollAnimation(0.08);

    return (
        <div
            ref={ref}
            className={`ltf-step-row tf-fade-up ${isVisible ? 'tf-visible' : ''}`}
            style={{ transitionDelay: `${index * 0.12}s` }}
        >
            {/* Step Number Circle */}
            <div className="ltf-step-number-col">
                <div className={`ltf-step-circle ${card.ltf_circleClass}`}>
                    <span className="ltf-step-circle-text">{card.ltf_stepNum}</span>
                </div>
            </div>

            {/* Card Body */}
            <div className="ltf-step-card-body">

                {/* Header */}
                <div className="ltf-step-card-header" data-step={card.ltf_stepNum}>
                    <div className="ltf-step-header-top">
                        <span className={`ltf-step-badge ltf-badge-${card.ltf_stepNum === '01' ? 'green' : card.ltf_stepNum === '02' ? 'blue' : 'dark'}`}>
                            {card.ltf_stepNum}
                        </span>
                    </div>
                    <div className="ltf-step-header-main">
                        <div className={`ltf-step-icon-box ${card.ltf_iconBoxClass}`}>
                            {card.ltf_headerIcon}
                        </div>
                        <h3 className="ltf-step-card-title">{card.ltf_title}</h3>
                    </div>
                </div>

                {/* Two-column body */}
                <div className="ltf-step-body-grid">

                    {/* LEFT: Image */}
                    <div className="ltf-step-img-col">
                        <div className="ltf-step-img-wrap">
                            <img src={card.ltf_image} alt={card.ltf_title} />
                        </div>
                    </div>

                    {/* RIGHT: Key Points + Description */}
                    <div className="ltf-step-points-col">

                    <p className="ltf-step-desc-text" style={{ marginBottom: '2rem' }}>
        {card.ltf_subDescription}
              </p>
                        <p className="ltf-step-key-label">Key Features</p>

                        <ul className="ltf-step-points-list">
                            {card.ltf_keyPoints.map((point, i) => (
                                <li
                                    key={i}
                                    className={`tf-fade-up ${isVisible ? 'tf-visible' : ''}`}
                                    style={{ transitionDelay: `${(index * 0.12) + 0.18 + i * 0.08}s` }}
                                >
                                    <div className={`ltf-point-icon ${point.ltf_pointIconClass}`}>
                                        {point.ltf_pointIcon}
                                    </div>
                                    {point.ltf_pointText}
                                </li>
                            ))}
                        </ul>

                        <div
                            className={`ltf-step-desc-block tf-fade-up ${isVisible ? 'tf-visible' : ''}`}
                            style={{ transitionDelay: `${(index * 0.12) + 0.5}s` }}
                        >
                            <p className="ltf-step-desc-text">{card.ltf_description}</p>
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
const Livetracking = () => {

  const [lth_demoBtnLabel,   setLth_demoBtnLabel]   = useState('Request Your Demo');
    const [lth_demoBtnLoading, setLth_demoBtnLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const lth_handleDemoClick = () => {
        openModal();
    };

    return (
        <>
            <Helmet>
                <title>NoQu TAM: Live Location Tracking for Workforce Management</title>
                <meta name="description" content="Track employee locations in real-time with NoQu TAM's live tracking feature. Monitor field workforce, ensure accountability, and convert location data into meaningful workforce insights." />
                <meta property="og:title" content="NoQu TAM: Live Location Tracking" />
                <meta property="og:description" content="Real-time employee location tracking for effective workforce management." />
                <meta property="og:url" content="https://noqu.in/tam-live-tracking" />
            </Helmet>
            <div className="tf-page-wrapper">{/* ================================================
                SECTION 1 — HERO
            ================================================ */}
            <div className="tf-hero-main">

                <div className="tf-hero-left">

                    <div className="tf-hero-center-stack">
                        <h1 className="tf-hero-title">
                            Live <span className="tf-hero-title-green">Tracking</span>
                        </h1>
                        <p className="tf-hero-subtitle">
                            Know where your team is with advanced GPS tracking. Not to control, but to empower.
                        </p>
                        <div className="tf-hero-cta-area">
                            <button
                                className="tf-demo-btn"
                                onClick={lth_handleDemoClick}
                                disabled={lth_demoBtnLoading}
                            >
                                {lth_demoBtnLabel}
                                {lth_demoBtnLoading
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

                    {/* Mini Cards */}
                    <div className="tf-hero-mini-cards">
                        {lth_miniCards.map((card, index) => (
                            <div className="tf-mini-card" key={index}>
                                <div className={card.lth_wrapClass}>{card.lth_icon}</div>
                                <span className="tf-mini-card-label">{card.lth_label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="tf-hero-right">
                    <img
                        src={HeroImage}
                        alt="Live Tracking Hero"
                        loading="eager"
                    />
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
                                Live <span className="tf-para-highlight">Tracking</span>
                            </h2>
                            <p className="tf-para-text">
                                <strong>No Qu TAM</strong> provides advanced GPS-based live tracking designed for modern businesses that value productivity, transparency, and privacy. Organizations can monitor field employees across locations with real-time accuracy, ensuring accountability without intrusion. From sales teams to delivery staff, every movement is captured and transformed into actionable insights. This workforce tracking system enhances coordination, optimizes travel efficiency, and improves operational visibility. With intelligent tracking and privacy controls, businesses gain complete control while empowering employees to perform confidently and efficiently.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection animClass="tf-fade-right">
                        <div className="tf-para-right">
                            <div className="tf-para-cards-grid">
                                {ltp_channelCards.map((card, index) => (
                                    <div key={index} className="tf-para-card">
                                        <div className="tf-para-icon-wrap">
                                            {card.ltp_icon}
                                        </div>
                                        <span className="tf-para-card-label">{card.ltp_label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>

                </div>
            </section>

            {/* ================================================
                SECTION 3 — FEATURES (Unique Class Names Kept)
            ================================================ */}
            <section className="ltf-section">

                <AnimatedSection animClass="lt-blur-up">
                    <div className="ltf-section-intro">
                        <h2 className="ltf-section-headline">
                            <span className="ltf-headline-green">Comprehensive</span>
                            <span className="ltf-headline-blue"> Tracking Features</span>
                        </h2>
                        <div className="ltf-headline-bar" />
                        <p className="ltf-section-subtext">
                            No Qu Live Tracking provides powerful tools that help organizations monitor workforce activity, optimize travel routes, and improve operational efficiency while maintaining employee trust and transparency.
                        </p>
                    </div>
                </AnimatedSection>

                <div className="ltf-cards-panel">
                    {ltf_featureCards.map((card, index) => (
                        <LTF_FeatureStepCard key={card.ltf_id} card={card} index={index} />
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
                                HOW LIVE TRACKING IMPROVES WORKFORCE MANAGEMENT
                            </h2>

                            <p className="tf-improve-para">
                                Live employee tracking helps organizations convert location data into meaningful workforce insights.
                            </p>

                            <p className="tf-improve-label">Key benefits include:</p>

                            <StaggeredList
                                items={lti_keyBenefits}
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
                                    By understanding how teams move and operate in the field, businesses can make better operational decisions, improve productivity, and ensure smoother day-to-day operations.
                                </p>
                                <p className="tf-improve-highlight">
                                    Transform simple location updates into powerful insights that improve transparency, productivity, and operational efficiency.
                                </p>
                                <p className="tf-improve-para">
                                    With No Qu Live Tracking, organizations can manage field teams more effectively and gain complete visibility into workforce activities.
                                </p>
                            </AnimatedSection>

                        </div>
                    </AnimatedSection>

                    <AnimatedSection animClass="tf-fade-right" delay="tf-delay-2">
                        <div className="tf-improve-right">
                            <div className="tf-improve-img-block">
                                <img src={WorkforceImage} alt="Live Tracking Workforce" />
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
                            Turn location data into a<br />
                            <span className="tf-cta-headline-blue">workforce tracking system</span>
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

export default Livetracking;
