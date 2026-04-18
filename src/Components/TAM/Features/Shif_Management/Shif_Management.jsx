import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import '../TAM_Features_Common.css';
import './Shif_Management.css';

import HeroImage         from '../../../../assets/banner/shift management 3.png';
import TrackingCardImage from '../../../../assets/Shift Configuration.jpeg';
import RoutingCardImage  from '../../../../assets/Route Mapping.png';
import PrivacyCardImage  from '../../../../assets/Privacy.png';
import WorkforceImage    from '../../../../assets/Shift_Management_Bottom_Section_Image.png';
import Self              from '../../../../assets/Open Shift.jpeg';
import RO                from '../../../../assets/Running Shift.jpeg';
import HR                from '../../../../assets/Split Shift.jpeg';

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
   shift_hero_section
   Hero Mini Cards Data
============================================================ */
const shmh_miniCards = [
    {
        shmh_wrapClass: 'tf-mini-icon-wrap',
        shmh_label:     'Open Shift',
        shmh_icon: (
            <svg className="tf-mini-svg-icon"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
        ),
    },
    {
        shmh_wrapClass: 'tf-mini-icon-wrap',
        shmh_label:     'Running Shift',
        shmh_icon: (
            <svg className="tf-mini-svg-icon"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
    },
    {
        shmh_wrapClass: 'tf-mini-icon-wrap',
        shmh_label:     'Split Shift',
        shmh_icon: (
            <svg className="tf-mini-svg-icon"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                <line x1="12" y1="8" x2="12" y2="16" />
                <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
        ),
    },
];

/* ============================================================
   shift_paragraph_section
   Channel Cards Data
============================================================ */
const shmp_channelCards = [
    {
        shmp_label: 'Shift Planning',
        iconBgClass: 'tf-para-icon-bg-blue',
        shmp_icon: (
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8"  y1="2" x2="8"  y2="6"/>
                <line x1="3"  y1="10" x2="21" y2="10"/>
                <rect x="7"  y="14" width="3" height="3" rx="0.5"/>
                <rect x="14" y="14" width="3" height="3" rx="0.5"/>
            </svg>
        ),
    },
    {
        shmp_label: 'Shift Swaps',
        iconBgClass: 'tf-para-icon-bg-green',
        shmp_icon: (
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 16V4m0 0L3 8m4-4l4 4"/>
                <path d="M17 8v12m0 0l4-4m-4 4l-4-4"/>
            </svg>
        ),
    },
    {
        shmp_label: 'Overtime',
        iconBgClass: 'tf-para-icon-bg-blue',
        shmp_icon: (
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="12" r="8"/>
                <polyline points="11 8 11 12 14 14"/>
                <line x1="19" y1="5" x2="23" y2="5"/>
                <line x1="21" y1="3" x2="21" y2="7"/>
            </svg>
        ),
    },
    {
        shmp_label: 'Compliance',
        iconBgClass: 'tf-para-icon-bg-green',
        shmp_icon: (
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <polyline points="9 12 11 14 15 10"/>
            </svg>
        ),
    },
];

/* ============================================================
   Section 3 — shift_features_section rows data
   (UPDATED WITH NEW CONTENT - ALL IMAGES LEFT, CONTENT RIGHT)
============================================================ */
const shmf_featuresRows = [
    {
        img:      Self,
        alt:      'Open Shift',
        imgH:     '550px',
        title:    'OPEN SHIFT',
        desc:     'Enable flexible attendance for dynamic work environments without strict time restrictions.',
        features: [
            '24/7 attendance flexibility for employees',
            'Supports flexible work timing models',
            'Location-independent attendance marking',
            'Multiple check-ins and check-outs allowed',
        ],
        closing:  'This is ideal for organizations requiring adaptable and non-restrictive shift structures.',
    },
    {
        img:      RO,
        alt:      'Running Shift',
        imgH:     '550px',
        title:    'RUNNING SHIFT',
        desc:     'Maintain structured and time-bound work schedules for consistent workforce operations.',
        features: [
            'Fixed shift timings for structured work hours',
            'Standardized attendance patterns across teams',
            'Time-bound shift control for better discipline',
            'Clear start and end time definitions',
        ],
        closing:  'This ensures predictable schedules and better workforce coordination.',
    },
    {
        img:      HR,
        alt:      'Split Shift',
        imgH:     '550px',
        title:    'SPLIT SHIFT',
        desc:     'Divide workdays into multiple segments for improved productivity and flexibility.',
        features: [
            'Split work hours into multiple segments',
            'Flexible mid-day break management',
            'Optimized utilization of working hours',
            'Improved work-rest balance for employees',
        ],
        closing:  'This is ideal for businesses with varied workload distribution throughout the day.',
    },
    {
        img:      TrackingCardImage,
        alt:      'Shift Configurations',
        imgH:     '550px',
        title:    'SHIFT CONFIGURATIONS',
        desc:     'Customize shift settings to match organizational policies and workforce requirements.',
        features: [
            'Configure flexible or fixed break timings',
            'Manage overtime, permissions, and half-day rules',
            'Set grace time and buffer time controls',
            'Support night shift and special shift setups',
        ],
        closing:  'This allows organizations to tailor shift policies for maximum efficiency and compliance.',
    },
];

/* ============================================================
   shift_improves_section — Key Benefits
============================================================ */
const shmi_keyBenefits = [
    'Eliminates shift conflicts and scheduling confusion',
    'Improves workforce productivity and time utilization',
    'Ensures accurate attendance and overtime tracking',
    'Enhances employee work-life balance',
    'Supports scalable and flexible workforce planning',
];

/* ============================================================
   FEATURES ROW — individual animated row for section 3
   (ALL IMAGES LEFT, CONTENT RIGHT - NO ZIG ZAG)
============================================================ */
const FeaturesRow = ({ row, index }) => {
    const [imgRef,   imgVisible]   = useScrollAnimation(0.12);
    const [textRef,  textVisible]  = useScrollAnimation(0.12);

    return (
        <div className="shmf-row">
            {/* Image - Always on Left */}
            <div
                ref={imgRef}
                className={`shmf-image shmf-s3-fade-left ${imgVisible ? 'shmf-s3-visible' : ''}`}
                style={{ transitionDelay: '0s' }}
            >
                <img
                    src={row.img}
                    alt={row.alt}
                    style={{ width: '100%', height: row.imgH, objectFit: 'cover', borderRadius: '24px' }}
                />
            </div>

            {/* Text - Always on Right */}
            <div
                ref={textRef}
                className={`shmf-text shmf-s3-fade-right ${textVisible ? 'shmf-s3-visible' : ''}`}
                style={{ transitionDelay: '0.15s' }}
            >
                <h3 className="shmf-sub-title tf-sec3-card-title">{row.title}</h3>
                <p className="shmf-desc tf-sec3-card-desc">{row.desc}</p>
                <p className="shmf-features-label tf-sec3-key-label">Key Features</p>
                <ul className="shmf-list tf-sec3-card-points">
                    {row.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
                <p className="shmf-closing">{row.closing}</p>
            </div>
        </div>
    );
};

/* ============================================================
   ROOT COMPONENT
============================================================ */
const Shif_Management = () => {

  const [shmh_demoBtnLabel,   setShmh_demoBtnLabel]   = useState('Request Your Demo');
    const [shmh_demoBtnLoading, setShmh_demoBtnLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const shmh_handleDemoClick = () => {
        openModal();
    };

    /* Section-3 header animation */
    const [s3HeaderRef, s3HeaderVisible] = useScrollAnimation(0.12);

    return (
        <div className="tf-page-wrapper">{/* ================================================
                SECTION 1 — shift_hero_section
            ================================================ */}
            <div className="tf-hero-main">
                <div className="tf-hero-left">
                    <div className="tf-hero-center-stack">
                        <h1 className="tf-hero-title">
                            Shift Management <span className="tf-hero-title-green"></span>
                        </h1>
                        <p className="tf-hero-subtitle">
                           Simplify Shift Planning. Boost Productivity.
                        </p>
                        <div className="tf-hero-cta-area">
                            <button
                                className="tf-demo-btn"
                                onClick={shmh_handleDemoClick}
                                disabled={shmh_demoBtnLoading}
                            >
                                {shmh_demoBtnLabel}
                                {shmh_demoBtnLoading
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
                        {shmh_miniCards.map((card, index) => (
                            <div className="tf-mini-card" key={index}>
                                <div className={card.shmh_wrapClass}>
                                    {card.shmh_icon}
                                </div>
                                <span className="tf-mini-card-label">{card.shmh_label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="tf-hero-right">
                    <img src={HeroImage} alt="Hero" loading="eager" />
                </div>
            </div>


            {/* ================================================
                SECTION 2 — shift_paragraph_section
            ================================================ */}
            <section className="tf-para-section">
                <div className="tf-para-grid">

                    <AnimatedSection animClass="tf-fade-left">
                        <div className="tf-para-left">
                            <h2 className="tf-para-heading">
                                Shift <span className="tf-para-highlight">Management</span>
                            </h2>
                            <p className="tf-para-text">
                                 Managing shifts efficiently is essential to maintain productivity, workforce balance, and operational clarity. <strong>No Qu TAM’s </strong> shift management system eliminates confusion by structuring schedules with precision and flexibility. From open and running shifts to split shifts and advanced configurations, every working hour is clearly defined. Features like overtime tracking, grace time, buffer time, and flexible breaks ensure accuracy without disrupting workflows. This enables organizations to align workforce schedules effectively, reduce conflicts, and maintain consistent productivity across teams, departments, and business operations seamlessly.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection animClass="tf-fade-right">
                        <div className="tf-para-right">
                            <div className="tf-para-cards-grid">
                                {shmp_channelCards.map((card, index) => (
                                    <div key={index} className="tf-para-card">
                                        <div className={`tf-para-icon-wrap ${card.iconBgClass || ''}`}>
                                            {card.shmp_icon}
                                        </div>
                                        <span className="tf-para-card-label">{card.shmp_label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>

                </div>
            </section>


            {/* ================================================
                SECTION 3 — shift_features_section
                (UPDATED WITH NEW CONTENT)
            ================================================ */}
            <section className="shmf-section">

                {/* Header with scroll animation */}
                <div
                    ref={s3HeaderRef}
                    className={`shmf-header shmf-s3-fade-up ${s3HeaderVisible ? 'shmf-s3-visible' : ''}`}
                >
                    <h2 className="shmf-main-title tf-sec3-headline">
                        Smart Shift{' '}
                        <span className="shmf-title-blue tf-sec3-hl-blue">Planner</span>
                    </h2>
                    <div className="tf-sec3-bar" />
                    <p className="shmf-main-subtitle tf-sec3-subtext">
                        No Qu TAM provides a powerful shift planning system designed to handle complex 
                        workforce schedules with clarity, flexibility, and complete operational control.
                    </p>
                </div>

                <div className="shmf-container">
                    {shmf_featuresRows.map((row, index) => (
                        <FeaturesRow key={index} row={row} index={index} />
                    ))}
                </div>

            </section>


            {/* ================================================
                SECTION 4 — shift_improves_section
            ================================================ */}
            <section className="tf-improve-section">
                <div className="tf-improve-inner">

                    <AnimatedSection animClass="tf-fade-left">
                        <div className="tf-improve-left">

                            <h2 className="tf-improve-headline">
                                WHY SHIFT MANAGEMENT MATTERS
                            </h2>

                            <p className="tf-improve-para">
                               A structured shift management system improves workforce efficiency, reduces confusion, and ensures better operational control.
                            </p>

                            <p className="tf-improve-label">Key benefits include:</p>

                            <StaggeredList
                                items={shmi_keyBenefits}
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
                                   By streamlining shift planning, organizations can ensure smooth operations and consistent productivity.
                                </p>

                                <p className="tf-improve-highlight">
                                    No Qu TAM transforms shift scheduling into a structured, flexible, and intelligent system, helping organizations manage workforce time efficiently while maintaining clarity, control, and operational excellence.
                                </p>

                                <p className="tf-improve-para">
                                    Ensure every shift is properly assigned, verified, and ready for payroll processing
                                    without unnecessary delays.
                                </p>
                            </AnimatedSection>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection animClass="tf-fade-right" delay="tf-delay-2">
                        <div className="tf-improve-right">
                            <div className="tf-improve-img-block">
                                <img src={WorkforceImage} alt="Shift Management" />
                            </div>
                        </div>
                    </AnimatedSection>

                </div>
            </section>


            {/* ================================================
                SECTION 5 — shift_cta_section
            ================================================ */}
            <AnimatedSection animClass="tf-scale-up">
                <section className="tf-cta-section">
                    <div className="tf-cta-wrap">
                        <h2 className="tf-cta-headline">
                           Transform your shift planning into a structured <br />
                            <span className="tf-cta-headline-blue">and efficient workforce system.</span>
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
    );
};

export default Shif_Management;
