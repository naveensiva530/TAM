import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import '../TAM_Features_Common.css';
import './Regularization.css';

import HeroImage         from '../../../../assets/banner/Regularization.png';
import TrackingCardImage from '../../../../assets/Real Time Tracking.png';
import RoutingCardImage  from '../../../../assets/Route Mapping.png';
import PrivacyCardImage  from '../../../../assets/Privacy.png';
import WorkforceImage    from '../../../../assets/Section Images/Regularization.png';
import Self              from '../../../../assets/Self.png';
import RO                from '../../../../assets/Ro.png';
import HR                from '../../../../assets/HR.png';

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
   SECTION 1 — HERO
   Hero Mini Cards Data
============================================================ */
const regh_miniCards = [
    {
        regh_wrapClass: 'tf-mini-icon-wrap',
        regh_label:     'Self-Regularization',
        regh_icon: (
            <svg className="tf-mini-svg-icon"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
        ),
    },
    {
        regh_wrapClass: 'tf-mini-icon-wrap',
        regh_label:     'RO Regularization',
        regh_icon: (
            <svg className="tf-mini-svg-icon"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/>
                <polyline points="21 3 21 8 16 8"/>
            </svg>
        ),
    },
    {
        regh_wrapClass: 'tf-mini-icon-wrap',
        regh_label:     'HR Regularization',
        regh_icon: (
            <svg className="tf-mini-svg-icon"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <circle cx="12" cy="11" r="3"/>
                <path d="M7 16c0-1 1-2 5-2s5 1 5 2"/>
            </svg>
        ),
    },
];

/* ============================================================
   SECTION 2 — PARAGRAPH
   Channel Cards Data
============================================================ */
const regp_channelCards = [
    {
        regp_label: 'Correction',
        iconBgClass: 'tf-para-icon-bg-blue',
        regp_icon: (
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <rect x="7" y="5" width="28" height="36" rx="4" fill="#BBDEFB"/>
                <rect x="7" y="5" width="28" height="36" rx="4" stroke="#1565C0" strokeWidth="1.2" fill="none"/>
                <rect x="12" y="14" width="18" height="3" rx="1.5" fill="#EF9A9A"/>
                <line x1="12" y1="15.5" x2="30" y2="15.5" stroke="#C62828" strokeWidth="1.8" strokeLinecap="round"/>
                <rect x="12" y="21" width="14" height="3" rx="1.5" fill="#EF9A9A"/>
                <line x1="12" y1="22.5" x2="26" y2="22.5" stroke="#C62828" strokeWidth="1.8" strokeLinecap="round"/>
                <rect x="12" y="28" width="18" height="2.5" rx="1.2" fill="#1976D2" opacity="0.5"/>
                <rect x="12" y="33" width="12" height="2.5" rx="1.2" fill="#1976D2" opacity="0.5"/>
                <g transform="translate(28,2) rotate(45)">
                    <rect x="0" y="0" width="7" height="20" rx="2" fill="#E53935"/>
                    <rect x="0" y="17" width="7" height="5" rx="1" fill="#FFF9C4"/>
                    <polygon points="0,22 3.5,28 7,22" fill="#FFCCBC"/>
                    <polygon points="2,25 3.5,28 5,25" fill="#8D6E63"/>
                    <rect x="0" y="0" width="7" height="3" rx="1" fill="#EF9A9A"/>
                </g>
                <circle cx="39" cy="39" r="9" fill="#38B000"/>
                <polyline points="34,39 37.5,43 44,34" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
        ),
    },
    {
        regp_label: 'Approval',
        iconBgClass: 'tf-para-icon-bg-green',
        regp_icon: (
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <rect x="6" y="4" width="28" height="36" rx="4" fill="#DCEDC8"/>
                <rect x="6" y="4" width="28" height="36" rx="4" stroke="#33691E" strokeWidth="1.2" fill="none"/>
                <rect x="6" y="4" width="28" height="8" rx="4" fill="#8BC34A"/>
                <rect x="6" y="8" width="28" height="4" fill="#8BC34A"/>
                <rect x="11" y="17" width="18" height="2.5" rx="1.2" fill="#558B2F" opacity="0.5"/>
                <rect x="11" y="22" width="14" height="2.5" rx="1.2" fill="#558B2F" opacity="0.5"/>
                <rect x="11" y="27" width="16" height="2.5" rx="1.2" fill="#558B2F" opacity="0.5"/>
                <rect x="11" y="32" width="10" height="2.5" rx="1.2" fill="#558B2F" opacity="0.5"/>
                <circle cx="37" cy="35" r="11" fill="#38B000"/>
                <circle cx="37" cy="35" r="9" fill="none" stroke="#fff" strokeWidth="1" strokeDasharray="2.5 2" opacity="0.6"/>
                <polyline points="31,35 35.5,40 43,28" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
        ),
    },
    {
        regp_label: 'Workflow',
        iconBgClass: 'tf-para-icon-bg-blue',
        regp_icon: (
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <circle cx="11" cy="11" r="8" fill="#1976D2"/>
                <circle cx="11" cy="9" r="2.5" fill="#fff"/>
                <path d="M6.5 15c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                <circle cx="39" cy="11" r="8" fill="#0077B6"/>
                <circle cx="39" cy="9" r="2.5" fill="#fff"/>
                <path d="M34.5 15c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                <circle cx="25" cy="40" r="8" fill="#2E7D32"/>
                <circle cx="25" cy="38" r="2.5" fill="#fff"/>
                <path d="M20.5 44c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                <line x1="19" y1="11" x2="31" y2="11" stroke="#1976D2" strokeWidth="2" strokeLinecap="round"/>
                <polygon points="30,8.5 34,11 30,13.5" fill="#1976D2"/>
                <path d="M35 18 Q35 30 30 35" stroke="#0077B6" strokeWidth="2" strokeLinecap="round" fill="none"/>
                <polygon points="27,33 30,37 33,33" fill="#0077B6"/>
                <path d="M15 18 Q15 30 20 35" stroke="#1976D2" strokeWidth="2" strokeLinecap="round" fill="none"/>
                <polygon points="17,33 20,37 23,33" fill="#1976D2"/>
            </svg>
        ),
    },
    {
        regp_label: 'Audit Trail',
        iconBgClass: 'tf-para-icon-bg-green',
        regp_icon: (
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <line x1="14" y1="6" x2="14" y2="44" stroke="#38B000" strokeWidth="3" strokeLinecap="round"/>
                <circle cx="14" cy="11" r="5" fill="#38B000"/>
                <circle cx="14" cy="11" r="2.5" fill="#fff"/>
                <rect x="22" y="7.5" width="20" height="7" rx="3.5" fill="#C8E6C9"/>
                <rect x="25" y="10" width="14" height="2" rx="1" fill="#2E7D32" opacity="0.6"/>
                <circle cx="14" cy="25" r="5" fill="#F9A825"/>
                <circle cx="14" cy="25" r="2.5" fill="#fff"/>
                <rect x="22" y="21.5" width="16" height="7" rx="3.5" fill="#FFF9C4"/>
                <rect x="25" y="24" width="10" height="2" rx="1" fill="#F57F17" opacity="0.6"/>
                <circle cx="14" cy="39" r="5" fill="#0077B6"/>
                <circle cx="14" cy="39" r="2.5" fill="#fff"/>
                <rect x="22" y="35.5" width="18" height="7" rx="3.5" fill="#BBDEFB"/>
                <rect x="25" y="38" width="12" height="2" rx="1" fill="#1565C0" opacity="0.6"/>
                <circle cx="42" cy="10" r="6" fill="none" stroke="#38B000" strokeWidth="2.2"/>
                <circle cx="42" cy="10" r="2.5" fill="#C8E6C9"/>
                <line x1="46.5" y1="14.5" x2="49" y2="17" stroke="#38B000" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
        ),
    },
];

/* ============================================================
   Section 3 — Handle Attendance rows data
============================================================ */
const handleRows = [
    {
        img:      Self,
        alt:      'Self Regularization',
        rowClass: 'reg-handle-img-self',
        title:    'Self-Regularization',
        desc:     'Employees can quickly request corrections for missed punches or incorrect attendance entries through an easy self-service workflow.',
        features: [
            'Quick employee self-requests',
            'Fix attendance present entries or leave types',
            'Smart approval flow to RO / admin / multi-level approvals',
            'Seamless experience with improved accuracy',
        ],
        closing:  'Self-regularization empowers employees to correct attendance issues quickly while ensuring that every request follows the proper approval structure.',
    },
    {
        img:      RO,
        alt:      'RO Regularization',
        rowClass: 'reg-handle-img-ro',
        title:    'RO Regularization',
        desc:     'Reporting Officers can review and manage team attendance corrections efficiently.',
        features: [
            'Bulk or single approvals',
            'Simplified team management workflow',
            'Error-free attendance records',
            'On-time and accurate payroll processing',
        ],
        closing:  'Managers gain better control over team attendance while ensuring requests are verified and approved without delays.',
    },
    {
        img:      HR,
        alt:      'HR Regularization',
        rowClass: 'reg-handle-img-hr',
        title:    'HR Regularization',
        desc:     'HR teams maintain full control and visibility over attendance corrections with a structured system.',
        features: [
            'System-driven approval mechanism',
            'Direct approval or decline requests',
            'Reason-based reference attachment',
            'Complete history and audit trail',
        ],
        closing:  'This ensures that all corrections are documented properly, improving compliance, transparency, and record accuracy.',
    },
];

/* ============================================================
   SECTION 4 — IMPROVES Key Benefits
============================================================ */
const regi_keyBenefits = [
    'Reduced manual workload for HR teams',
    'Faster resolution of attendance issues',
    'Improved transparency in approval workflows',
    'Accurate attendance data for payroll processing',
    'Better employee accountability and record management',
];

/* ============================================================
   HANDLE ROW — individual animated row for section 3
============================================================ */
const HandleRow = ({ row, index }) => {
    const [imgRef,  imgVisible]  = useScrollAnimation(0.12);
    const [textRef, textVisible] = useScrollAnimation(0.12);

    return (
        <div className="reg-handle-row">
            <div
                ref={imgRef}
                className={`reg-handle-image reg-s3-fade-left ${imgVisible ? 'reg-s3-visible' : ''}`}
                style={{ transitionDelay: '0s' }}
            >
                <img
                    src={row.img}
                    alt={row.alt}
                    className={`reg-handle-img-item ${row.rowClass}`}
                />
            </div>

            <div
                ref={textRef}
                className={`reg-handle-text reg-s3-fade-right ${textVisible ? 'reg-s3-visible' : ''}`}
                style={{ transitionDelay: '0.15s' }}
            >
                <h3 className="reg-handle-sub-title tf-sec3-card-title">{row.title}</h3>
                <p  className="reg-handle-desc tf-sec3-card-desc">{row.desc}</p>
                <p  className="reg-handle-features-label tf-sec3-key-label">Key Features</p>
                <ul className="reg-handle-list tf-sec3-card-points">
                    {row.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
                <p className="reg-handle-closing">{row.closing}</p>
            </div>
        </div>
    );
};

/* ============================================================
   ROOT COMPONENT
============================================================ */
const Regularization = () => {

  const [regh_demoBtnLabel,   setLth_demoBtnLabel]   = useState('Request Your Demo');
    const [regh_demoBtnLoading, setLth_demoBtnLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const regh_handleDemoClick = () => {
        openModal();
    };

    const [s3HeaderRef, s3HeaderVisible] = useScrollAnimation(0.12);

    return (
        <>
            <Helmet>
                <title>NoQu TAM: Attendance Regularization System</title>
                <meta name="description" content="Correct attendance discrepancies effortlessly with NoQu TAM's regularization system. Employees can request attendance corrections and managers can approve them seamlessly." />
                <meta property="og:title" content="NoQu TAM: Attendance Regularization" />
                <meta property="og:description" content="Streamline attendance correction requests with NoQu TAM's regularization module." />
                <meta property="og:url" content="https://noqu.in/tam-regularization" />
            </Helmet>
            <div className="tf-page-wrapper">{/* ================================================
                SECTION 1 — Hero
            ================================================ */}
            <div className="tf-hero-main">
                
                <div className="tf-hero-left">
                    <div className="tf-hero-center-stack">
                        <h1 className="tf-hero-title">
                            Regularization <span className="tf-hero-title-green"></span>
                        </h1>
                        <p className="tf-hero-subtitle">
                            Effortless Corrections. Accurate Attendance, Every Time.
                        </p>
                        <div className="tf-hero-cta-area">
                            <button
                                className="tf-demo-btn"
                                onClick={regh_handleDemoClick}
                                disabled={regh_demoBtnLoading}
                            >
                                {regh_demoBtnLabel}
                                {regh_demoBtnLoading
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
                        {regh_miniCards.map((card, index) => (
                            <div className="tf-mini-card" key={index}>
                                <div className={card.regh_wrapClass}>
                                    {card.regh_icon}
                                </div>
                                <span className="tf-mini-card-label">{card.regh_label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="tf-hero-right">
                    <img src={HeroImage} alt="Hero" loading="eager" />
                </div>
            </div>


            {/* ================================================
                SECTION 2 — Paragraph
            ================================================ */}
            <section className="tf-para-section">
                <div className="tf-para-grid">

                    <AnimatedSection animClass="tf-fade-left">
                        <div className="tf-para-left">
                            <h2 className="tf-para-heading">
                               Regularization <span className="tf-para-highlight"></span>
                            </h2>
                            <p className="tf-para-text">
                                <strong>No Qu TAM</strong> simplifies attendance regularization by enabling employees
                                and administrators to correct missed or incorrect entries efficiently within a structured
                                system. Traditional manual corrections often lead to delays, confusion, and payroll errors.
                                With automated workflows and approval mechanisms, all requests are managed transparently
                                and accurately. This attendance management system ensures proper documentation, reduces
                                HR workload, and maintains audit-ready records. Organizations benefit from improved
                                accuracy, faster approvals, and seamless payroll processing while maintaining complete
                                visibility over attendance corrections.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection animClass="tf-fade-right">
                        <div className="tf-para-right">
                            <div className="tf-para-cards-grid">
                                {regp_channelCards.map((card, index) => (
                                    <div key={index} className="tf-para-card">
                                        <div className={`tf-para-icon-wrap ${card.iconBgClass || ''}`}>
                                            {card.regp_icon}
                                        </div>
                                        <span className="tf-para-card-label">{card.regp_label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>

                </div>
            </section>


            {/* ================================================
                SECTION 3 — Handle Attendance
            ================================================ */}
            <section className="reg-handle-section">

                <div
                    ref={s3HeaderRef}
                    className={`reg-handle-header reg-s3-fade-up ${s3HeaderVisible ? 'reg-s3-visible' : ''}`}
                >
                    <h2 className="reg-handle-main-title tf-sec3-headline">
                        Handle Every Attendance Correction{' '}
                        <span className="reg-handle-title-blue tf-sec3-hl-blue">With Confidence</span>
                    </h2>
                    <div className="tf-sec3-bar" />
                    <p className="reg-handle-main-subtitle tf-sec3-subtext">
                        No Qu provides a flexible regularization workflow that supports employees, reporting officers,
                        and HR teams. The system ensures that every attendance correction follows a clear approval
                        process while maintaining accuracy and accountability.
                    </p>
                </div>

                <div className="reg-handle-container">
                    {handleRows.map((row, index) => (
                        <HandleRow key={index} row={row} index={index} />
                    ))}
                </div>

            </section>


            {/* ================================================
                SECTION 4 — Improves
            ================================================ */}
            <section className="tf-improve-section">
                <div className="tf-improve-inner">

                    <AnimatedSection animClass="tf-fade-left">
                        <div className="tf-improve-left">
                            <h2 className="tf-improve-headline">
                                WHY ATTENDANCE REGULARIZATION MATTERS
                            </h2>
                            <p className="tf-improve-para">
                                A well-structured regularization system helps organizations maintain accurate
                                attendance records and eliminate payroll discrepancies.
                            </p>
                            <p className="tf-improve-label">Key benefits include:</p>
                            <StaggeredList
                                items={regi_keyBenefits}
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
                                    By automating attendance corrections, organizations can reduce administrative effort
                                    while maintaining reliable workforce data.
                                </p>
                                <p className="tf-improve-highlight">
                                    Transform attendance corrections into a smooth and transparent process with No Qu Regularization.
                                </p>
                                <p className="tf-improve-para">
                                    Ensure every attendance record is accurate, verified, and ready for payroll processing
                                    without unnecessary delays.
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
                            From missed marks to managed records — <br />
                            <span className="tf-cta-headline-blue">we got it right!</span>
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

export default Regularization;
