import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import '../TAM_Features_Common.css';
import './Biometric.css';

import HeroImage         from '../../../../assets/banner/biometric.png';
import TrackingCardImage from '../../../../assets/Real Time Tracking.png';
import RoutingCardImage  from '../../../../assets/Route Mapping.png';
import PrivacyCardImage  from '../../../../assets/Privacy.png';
import WorkforceImage    from '../../../../assets/Section Images/Biometric Device.png';
import hardwareSetupImg  from '../../../../assets/bio6.jpeg';
import dataStreamImg     from '../../../../assets/bio4.jpeg';
import reportsImg        from '../../../../assets/bio5.jpeg';

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
   SECTION 1 — BIOMETRIC_HERO_SECTION
   Hero Mini Cards Data
============================================================ */
const bth_miniCards = [
    {
        bth_wrapClass: 'tf-mini-icon-wrap',
        bth_label:     'Biometric Device',
        bth_icon: (
            /* Fingerprint Icon */
            <svg className="tf-mini-svg-icon"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10" />
                <path d="M5 15.5C5 12.5 7.5 10 12 10s7 2.5 7 5.5" />
                <path d="M8 18c0-2.2 1.8-4 4-4s4 1.8 4 4" />
                <path d="M12 22V19" />
            </svg>
        ),
    },
    {
        bth_wrapClass: 'tf-mini-icon-wrap',
        bth_label:     'Pain Points Solved',
        bth_icon: (
            /* Target/Success Icon */
            <svg className="tf-mini-svg-icon"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
            </svg>
        ),
    },
    {
        bth_wrapClass: 'tf-mini-icon-wrap',
        bth_label:     'Biometric-Mobile App Integration',
        bth_icon: (
            /* Smartphone with Connectivity link */
            <svg className="tf-mini-svg-icon"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="10" height="16" x="7" y="4" rx="2" />
                <path d="M12 18h.01" />
                <path d="M10 2L10 2" />
                <path d="M14 2L14 2" />
            </svg>
        ),
    },
];

/* ============================================================
   SECTION 2 — BIOMETRIC_PARAGRAPH_SECTION
   Channel Cards Data
============================================================ */
const btp_channelCards = [
    {
        btp_label: 'Fingerprint',
        btp_icon: (
 <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="72" height="72" rx="18" fill="#EBF4FF"/>
          <path d="M10 24 L10 11 L23 11" stroke="#0077B6" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="M62 24 L62 11 L49 11" stroke="#0077B6" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="M10 48 L10 61 L23 61" stroke="#0077B6" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="M62 48 L62 61 L49 61" stroke="#0077B6" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="M36 40 C34 38 34 34 36 32 C38 30 40.5 30.5 41.5 33" stroke="#0077B6" strokeWidth="2" strokeLinecap="round" fill="none"/>
          <path d="M31.5 44 C27 40 27 31 31.5 27 C35 23.5 41 23.5 44.5 27 C48 30.5 48 40 44 44" stroke="#0077B6" strokeWidth="1.9" strokeLinecap="round" fill="none"/>
          <path d="M27.5 48 C21 43 21 28 27 22 C33 16 43 16 48.5 22 C54 28 54 43 48 48" stroke="#0077B6" strokeWidth="1.7" strokeLinecap="round" fill="none"/>
          <path d="M23 52 C15 46 15 23 22 16 C29 9 45 9 52 16 C59 23 59 45 52 52" stroke="#0077B6" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.65"/>
          <path d="M18 56 C9 49 9 19 17 12 C25 5 49 5 57 12 C65 19 65 48 57 56" stroke="#0077B6" strokeWidth="1.1" strokeLinecap="round" fill="none" opacity="0.35"/>
          <circle cx="36" cy="36" r="3" fill="#0077B6"/>
          <circle cx="36" cy="36" r="1.4" fill="#EBF4FF"/>
          <rect x="10" y="35" width="52" height="2.5" rx="1.25" fill="#38C5FF" opacity="0.85"/>
          <rect x="10" y="31" width="52" height="10" rx="3" fill="#38C5FF" opacity="0.07"/>
        </svg>
        ),
    },
    {
        btp_label: 'Face Recognition',
        btp_icon: (
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path d="M6 16 L6 6 L16 6" stroke="#38B000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M34 6 L44 6 L44 16" stroke="#38B000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M6 34 L6 44 L16 44" stroke="#38B000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M44 34 L44 44 L34 44" stroke="#38B000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <circle cx="25" cy="22" r="10" fill="#C8EFC8" stroke="#38B000" strokeWidth="1.5"/>
                <circle cx="21" cy="20" r="2" fill="#2E7D32"/>
                <circle cx="29" cy="20" r="2" fill="#2E7D32"/>
                <path d="M20 25 Q25 29 30 25" stroke="#2E7D32" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                <circle cx="21" cy="20" r="3.5" fill="none" stroke="#38B000" strokeWidth="1" opacity="0.5"/>
                <circle cx="29" cy="20" r="3.5" fill="none" stroke="#38B000" strokeWidth="1" opacity="0.5"/>
                <circle cx="25" cy="32" r="1.5" fill="#38B000" opacity="0.6"/>
                <circle cx="15" cy="23" r="1.5" fill="#38B000" opacity="0.5"/>
                <circle cx="35" cy="23" r="1.5" fill="#38B000" opacity="0.5"/>
            </svg>
        ),
    },
    {
        btp_label: 'Sync',
        btp_icon: (
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <rect x="4" y="14" width="14" height="22" rx="3" fill="#BBDEFB" stroke="#1565C0" strokeWidth="1.5"/>
                <rect x="7" y="18" width="8" height="6" rx="1.5" fill="#0077B6" opacity="0.6"/>
                <circle cx="11" cy="30" r="2" fill="#0077B6" opacity="0.5"/>
                <rect x="32" y="14" width="14" height="22" rx="3" fill="#BBDEFB" stroke="#1565C0" strokeWidth="1.5"/>
                <rect x="35" y="18" width="8" height="6" rx="1.5" fill="#0077B6" opacity="0.6"/>
                <circle cx="39" cy="30" r="2" fill="#0077B6" opacity="0.5"/>
                <path d="M18 21 L32 21" stroke="#0077B6" strokeWidth="2" strokeLinecap="round"/>
                <polygon points="30,18.5 34,21 30,23.5" fill="#0077B6"/>
                <path d="M32 29 L18 29" stroke="#0077B6" strokeWidth="2" strokeLinecap="round"/>
                <polygon points="20,26.5 16,29 20,31.5" fill="#0077B6"/>
                <circle cx="25" cy="25" r="5" fill="#0077B6"/>
                <path d="M22 24 A3 3 0 0 1 28 24" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                <path d="M28 26 A3 3 0 0 1 22 26" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                <polygon points="21,22.5 22,25 20,25" fill="#fff"/>
                <polygon points="29,27.5 28,25 30,25" fill="#fff"/>
            </svg>
        ),
    },
    {
        btp_label: 'Cloud',
        btp_icon: (
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path d="M36 34 H14 C10.134 34 7 30.866 7 27 C7 23.4 9.6 20.4 13 20 C13 13.4 18.4 8 25 8 C30.8 8 35.6 12 36.8 17.4 C40.2 17.8 43 20.8 43 24.5 C43 29.6 39.1 34 36 34 Z" fill="#C8EFC8" stroke="#38B000" strokeWidth="1.8"/>
                <line x1="25" y1="42" x2="25" y2="28" stroke="#38B000" strokeWidth="2.5" strokeLinecap="round"/>
                <polygon points="19,32 25,26 31,32" fill="#38B000"/>
                <path d="M13 26 Q16 22 20 23" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
                <circle cx="19" cy="40" r="2" fill="#38B000" opacity="0.35"/>
                <circle cx="31" cy="40" r="2" fill="#38B000" opacity="0.35"/>
                <circle cx="19" cy="45" r="1.5" fill="#38B000" opacity="0.2"/>
                <circle cx="31" cy="45" r="1.5" fill="#38B000" opacity="0.2"/>
                <rect x="21" y="16" width="8" height="7" rx="1.5" fill="#38B000" opacity="0.7"/>
                <path d="M22.5 16 C22.5 13.5 27.5 13.5 27.5 16" stroke="#38B000" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.8"/>
                <circle cx="25" cy="20" r="1.2" fill="#fff"/>
            </svg>
        ),
    },
];

/* ============================================================
   SECTION 3 — BIOMETRIC_FEATURES_SECTION
   Stacking Cards Data
============================================================ */
const btf_stackCards = [
    {
        btf_id:      0,
        btf_title:   'Biometric Device Types',
        btf_text:    'No Qu supports integration with a wide range of biometric devices used by modern organizations.',
        btf_img:     hardwareSetupImg,
        btf_imgAlt:  'Biometric device types',
        btf_footer:  'This flexibility allows businesses to continue using their existing devices while benefiting from advanced attendance management capabilities.',
        btf_list: [
            {
                btf_label: 'Fingerprint scanners',
                btf_svgPath: <><path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10"/><path d="M5 15c0-3.866 3.134-7 7-7s7 3.134 7 7"/><path d="M12 22V11"/></>,
            },
            {
                btf_label: 'Face recognition systems',
                btf_svgPath: <><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/><path d="M12 12v3m-3 3h6"/></>,
            },
            {
                btf_label: 'RFID-based attendance devices',
                btf_svgPath: <><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></>,
            },
        ],
    },
    {
        btf_id:      1,
        btf_title:   'Pain Points Solved',
        btf_text:    'Biometric device integration helps resolve common attendance management challenges faced by HR teams.',
        btf_img:     dataStreamImg,
        btf_imgAlt:  'Pain points solved',
        btf_footer:  'With automated synchronization, organizations can eliminate manual data entry and reduce the risk of attendance errors.',
        btf_list: [
            {
                btf_label: 'Leave, week off, and comp-off configuration',
                btf_svgPath: <><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></>,
            },
            {
                btf_label: 'Identification and correction of missed punches',
                btf_svgPath: <><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></>,
            },
            {
                btf_label: 'Centralized attendance data for multiple locations',
                btf_svgPath: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>,
            },
        ],
    },
    {
        btf_id:      2,
        btf_title:   'Biometric Device and Mobile App Integration',
        btf_text:    'No Qu TAM connects biometric attendance data with the mobile application, allowing employees and managers to access attendance information anytime.',
        btf_img:     reportsImg,
        btf_imgAlt:  'Mobile app integration',
        btf_footer:  'This integration ensures employees stay connected to the attendance system while enabling managers to approve requests and monitor workforce activity on the go.',
        btf_list: [
            {
                btf_label: 'View biometric-linked attendance records',
                btf_svgPath: <><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></>,
            },
            {
                btf_label: 'Apply leave requests directly from the mobile app',
                btf_svgPath: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></>,
            },
            {
                btf_label: 'Submit regularization requests and approvals through mobile',
                btf_svgPath: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></>,
            },
        ],
    },
];

/* ============================================================
   SECTION 4 — BIOMETRIC_IMPROVE_SECTION
   Key Benefits List
============================================================ */
const bti_keyBenefits = [
    'Automatic attendance data synchronization',
    'Reduced manual data corrections',
    'Accurate and tamper-proof attendance records',
    'Centralized attendance monitoring for multiple locations',
    'Better employee accountability and record management',
];

/* ============================================================
   ROOT COMPONENT
============================================================ */
const Biometric = () => {

  const [bth_demoBtnLabel, setBth_demoBtnLabel] = useState('Request Your Demo');
    const [bth_demoBtnLoading, setBth_demoBtnLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const [syncRef, syncVisible] = useScrollAnimation(0.12);

    const bth_handleDemoClick = () => {
        openModal();
    };

    return (
        <>
            <Helmet>
                <title>NoQu TAM: Biometric Device Integration for Attendance Management</title>
                <meta name="description" content="Integrate biometric devices seamlessly with NoQu TAM for accurate attendance tracking. Supports fingerprint, RFID, and face detection devices with real-time cloud synchronization." />
                <meta property="og:title" content="NoQu TAM: Biometric Device Integration" />
                <meta property="og:description" content="Connect biometric devices to NoQu TAM for seamless attendance management." />
                <meta property="og:url" content="https://noqu.in/tam-biometric" />
            </Helmet>
            <div className="tf-page-wrapper">{/* ================================================
                SECTION 1 — HERO
            ================================================ */}
            <div className="tf-hero-main">
                <div className="tf-hero-left">
                    <div className="tf-hero-center-stack">
                        <h1 className="tf-hero-title">
                            Biometric Device <span className="tf-hero-title-green">Integration</span>
                        </h1>
                        <p className="tf-hero-subtitle">
                           Sync any biometric. Simplify HR like never before.
                        </p>
                        <div className="tf-hero-cta-area">
                            <button
                                className="tf-demo-btn"
                                onClick={bth_handleDemoClick}
                                disabled={bth_demoBtnLoading}
                            >
                                {bth_demoBtnLabel}
                                {bth_demoBtnLoading
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
                        {bth_miniCards.map((card, index) => (
                            <div className="tf-mini-card" key={index}>
                                <div className={card.bth_wrapClass}>
                                    {card.bth_icon}
                                </div>
                                <span className="tf-mini-card-label">{card.bth_label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="tf-hero-right">
                    <img src={HeroImage} alt="Biometric Device Hero" loading="eager" />
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
                             Biometric Device <span className="tf-para-highlight">Integration</span>
                            </h2>
                            <p className="tf-para-text">
                                <strong>No Qu TAM</strong> integrates seamlessly with biometric devices including fingerprint scanners, face recognition systems, and RFID technologies to ensure accurate attendance data collection. Traditional biometric systems often face issues like missed punches and manual corrections, leading to inconsistencies. With automated synchronization and cloud connectivity, attendance data remains centralized, secure, and tamper-proof. This integration eliminates manual effort, improves data reliability, and supports multi-location workforce management. Organizations benefit from streamlined operations, reduced errors, and real-time visibility into employee attendance records.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection animClass="tf-fade-right">
                        <div className="tf-para-right">
                            <div className="tf-para-cards-grid">
                                {btp_channelCards.map((card, index) => (
                                    <div key={index} className="tf-para-card">
                                        <div className="tf-para-icon-wrap">
                                            {card.btp_icon}
                                        </div>
                                        <span className="tf-para-card-label">{card.btp_label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>

                </div>
            </section>


            {/* ================================================
                SECTION 3 — FEATURES (Unique classes kept)
            ================================================ */}
            <section className="btf-section">

                <div
                    ref={syncRef}
                    className={`btf-sync-header tf-fade-up${syncVisible ? ' tf-visible' : ''}`}
                >
                  <h2 className="btf-sync-top-heading tf-sec3-headline">
                    <span className="tf-sec3-hl-dark">Seamless Device </span><span className="btf-sync-heading-blue tf-sec3-hl-blue">Synchronization</span>
                  </h2>
                  <div className="tf-sec3-bar" />
                    <p className="btf-sync-top-desc tf-sec3-subtext">
                        No Qu enables smooth and reliable synchronization between biometric devices
                        and the attendance management system, ensuring real-time attendance updates
                        and accurate workforce records.
                    </p>
                </div>

                <div className="btf-stack-container">
                    {btf_stackCards.map((card, idx) => (
                        <div className="btf-sticky-wrapper" key={card.btf_id}>
                            <div className={`btf-sync-card btf-card-${idx + 1}`}>
                                <div className="btf-sync-card-content">
                                    <h3 className="btf-sync-card-title tf-sec3-card-title">{card.btf_title}</h3>
                                    <p className="btf-sync-card-text tf-sec3-card-desc">{card.btf_text}</p>
                                    <p className="tf-sec3-key-label" style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Key Features</p>
                                    <ul className="btf-sync-card-list tf-sec3-card-points">
                                        {card.btf_list.map(({ btf_label, btf_svgPath }) => (
                                            <li key={btf_label}>
                                                <span className="btf-sync-list-icon">
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                        {btf_svgPath}
                                                    </svg>
                                                </span>
                                                {btf_label}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="btf-sync-card-footer">{card.btf_footer}</p>
                                </div>
                                <div className="btf-sync-card-visual">
                                    <img src={card.btf_img} alt={card.btf_imgAlt} className="btf-sync-card-img" />
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
                               WHY BIOMETRIC INTEGRATION MATTERS
                            </h2>

                            <p className="tf-improve-para">
                               Integrating biometric devices with a centralized attendance management system improves efficiency and accuracy across workforce operations.
                            </p>

                            <p className="tf-improve-label">Key benefits include:</p>

                            <StaggeredList
                                items={bti_keyBenefits}
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
                                    By connecting biometric devices with No Qu TAM, organizations can simplify attendance management and reduce the administrative burden on HR teams.
                                </p>

                                <p className="tf-improve-highlight">
                                    Transform biometric attendance data into a fully automated workforce management system. 
                                </p>

                                <p className="tf-improve-para">
                                   
With No Qu TAM, attendance records move seamlessly from devices to dashboards, ensuring accuracy, transparency, and operational efficiency.
                                </p>
                            </AnimatedSection>

                        </div>
                    </AnimatedSection>

                    <AnimatedSection animClass="tf-fade-right" delay="tf-delay-2">
                        <div className="tf-improve-right">
                            <div className="tf-improve-img-block">
                                <img src={WorkforceImage} alt="Attendance Regularization" />
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
                          From device to dashboard, <br />
                            <span className="tf-cta-headline-blue">data is done right!</span>
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

export default Biometric;
