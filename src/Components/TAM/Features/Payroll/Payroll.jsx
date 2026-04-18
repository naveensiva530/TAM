import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import '../TAM_Features_Common.css';
import './Payroll.css';

import HeroImage         from '../../../../assets/banner/web banner design 1.png';
import PayrollCalcImage  from '../../../../assets/Payroll Calculation.jpeg';
import ComplianceImage   from '../../../../assets/Statutory Compliance.jpeg';
import PayslipImage      from '../../../../assets/Payslip Generation & Multi Payment Methods.jpeg';
import ReportsImage      from '../../../../assets/Advanced Reports.jpeg';
import WorkforceImage    from '../../../../assets/Section Images/Payroll.png';

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
   SECTION 1 — PAYROLL_HERO_SECTION
   Hero Mini Cards Data
============================================================ */
const pay_hero_miniCards = [
    {
        wrapClass: 'tf-mini-icon-wrap',
        label: 'Salary Processing',
        icon: (
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
        wrapClass: 'tf-mini-icon-wrap',
        label: 'Tax Compliance',
        icon: (
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
        wrapClass: 'tf-mini-icon-wrap',
        label: 'Payslip Generation',
        icon: (
            <svg className="tf-mini-svg-icon" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
        ),
    },
];

/* ============================================================
   SECTION 2 — PAYROLL_PARAGRAPH_SECTION
   Channel Cards Data
============================================================ */
const pay_para_channelCards = [
    {
        label: 'Salary Processing',
        iconBgClass: 'tf-para-icon-bg-blue',
        icon: (
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2"/>
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                <line x1="12" y1="12" x2="12" y2="16"/>
                <line x1="10" y1="14" x2="14" y2="14"/>
            </svg>
        ),
    },
    {
        label: 'Payroll Calculation',
        iconBgClass: 'tf-para-icon-bg-green',
        icon: (
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="2"/>
                <line x1="8"  y1="6"  x2="16" y2="6"/>
                <line x1="8"  y1="10" x2="10" y2="10"/>
                <line x1="14" y1="10" x2="16" y2="10"/>
                <line x1="8"  y1="14" x2="10" y2="14"/>
                <line x1="14" y1="14" x2="16" y2="14"/>
                <line x1="8"  y1="18" x2="10" y2="18"/>
                <line x1="14" y1="18" x2="16" y2="18"/>
            </svg>
        ),
    },
    {
        label: 'Payslip',
        iconBgClass: 'tf-para-icon-bg-blue',
        icon: (
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="8"  y1="13" x2="16" y2="13"/>
                <line x1="8"  y1="17" x2="12" y2="17"/>
                <line x1="10" y1="9"  x2="8"  y2="9"/>
            </svg>
        ),
    },
    {
        label: 'Payment Transfer',
        iconBgClass: 'tf-para-icon-bg-green',
        icon: (
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="5" width="20" height="14" rx="2"/>
                <path d="M2 10h20"/>
                <path d="M6 15h2"/>
                <path d="M10 15h2"/>
                <circle cx="17" cy="15" r="1.5"/>
            </svg>
        ),
    },
];

/* ============================================================
   SECTION 3 — PAYROLL_FEATURES_SECTION
   Carousel Cards Data - UPDATED WITH NEW CONTENT
============================================================ */
const pay_features_carouselCards = [
    {
        id:         0,
        image:      PayrollCalcImage,
        badge:      '01',
        badgeClass: 'pay-badge-green',
        title: 'Payroll Calculation',
        desc:  'Automate salary processing with accurate calculations based on attendance, shifts, and policies.',
        list: [
            'Accurate salary computation based on attendance data',
            'Tax compliance including TDS, PF, and ESI calculations',
            'Bonus calculations based on company policies',
            'Manage deductions and reimbursements efficiently',
        ],
        footer: 'This ensures error-free and timely payroll processing for every employee.',
    },
    {
        id:         1,
        image:      ComplianceImage,
        badge:      '02',
        badgeClass: 'pay-badge-blue',
        title: 'Statutory Compliance',
        desc:  'Maintain compliance with government regulations and statutory requirements effortlessly.',
        list: [
            'PF, ESI, and Professional Tax compliance management',
            'Generate Form 16 for employee tax reporting',
            'Gratuity calculations as per regulations',
            'Ensure labor law compliance across payroll',
        ],
        footer: 'This reduces compliance risks and ensures accurate statutory reporting.',
    },
    {
        id:         2,
        image:      PayslipImage,
        badge:      '03',
        badgeClass: 'pay-badge-dark',
        title: 'Payslip Generation & Multi Payment Methods',
        desc:  'Generate and distribute payslips while supporting multiple payment methods.',
        list: [
            'Detailed payslips with statutory information',
            'Digital payslip delivery to employees',
            'Bank transfer integration for salary payments',
            'Support for cash and cheque payment methods',
        ],
        footer: 'This ensures smooth salary disbursement and clear employee communication.',
    },
    {
        id:         3,
        image:      ReportsImage,
        badge:      '04',
        badgeClass: 'pay-badge-green',
        title: 'Advanced Reports',
        desc:  'Access detailed payroll reports for better financial tracking and decision-making.',
        list: [
            'Salary register reports for payroll tracking',
            'Tax reports for compliance and filing',
            'Cost center analysis for financial insights',
            'ESI and PF formatted reports',
            'Payment and full & final settlement reports',
        ],
        footer: 'This provides complete visibility into payroll operations and financial data.',
    },
];

/* ============================================================
   SECTION 4 — PAYROLL_IMPROVE_SECTION
   Key Benefits List
============================================================ */
const pay_improve_keyBenefits = [
    'Eliminates manual payroll errors and discrepancies',
    'Ensures timely and accurate salary disbursement',
    'Maintains compliance with statutory regulations',
    'Improves financial transparency and reporting',
    'Reduces administrative workload for HR teams',
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
const Payroll = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const pay_hero_handleDemoClick = () => {
        openModal();
    };

    /* ── Section 3 carousel state ── */
    const [pay_features_activeIndex, setPay_features_activeIndex] = useState(0);
    const total = pay_features_carouselCards.length;

    const pay_features_prev = () => setPay_features_activeIndex(i => (i - 1 + total) % total);
    const pay_features_next = () => setPay_features_activeIndex(i => (i + 1) % total);

    /* Build visible 3 cards: left | center | right */
    const pay_features_visibleCards = [
        { card: pay_features_carouselCards[(pay_features_activeIndex - 1 + total) % total], position: 'left'   },
        { card: pay_features_carouselCards[pay_features_activeIndex],                        position: 'center' },
        { card: pay_features_carouselCards[(pay_features_activeIndex + 1) % total],          position: 'right'  },
    ];

    return (
        <>
            <Helmet>
                <title>NoQu TAM: Payroll Integration for Seamless Attendance Management</title>
                <meta name="description" content="Integrate attendance data directly into your payroll system with NoQu TAM. Automate salary calculations, statutory compliance, and payslip generation for error-free payroll processing." />
                <meta property="og:title" content="NoQu TAM: Payroll Integration" />
                <meta property="og:description" content="Automate payroll processing with NoQu TAM attendance integration." />
                <meta property="og:url" content="https://noqu.in/tam-payroll" />
            </Helmet>
            <div className="tf-page-wrapper">{/* ================================================
                SECTION 1 — HERO
            ================================================ */}
            <div className="tf-hero-main">
                
                <div className="tf-hero-left">
                    <div className="tf-hero-center-stack">
                        <h1 className="tf-hero-title">
                            Payroll <span className="tf-hero-title-green"></span>
                        </h1>
                        <p className="tf-hero-subtitle">
                           Complete payroll solution for modern businesses
                        </p>
                        <div className="tf-hero-cta-area">
                            <button
                                className="tf-demo-btn"
                                onClick={pay_hero_handleDemoClick}
                            >
                                {'Request Your Demo'}
                                <span className="tf-btn-arrow">
                                    <svg width="14" height="13" viewBox="0 0 13 13" fill="none">
                                        <path d="M2.5 6.5H10.5M7 3L10.5 6.5L7 10" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="tf-hero-mini-cards">
                        {pay_hero_miniCards.map((card, index) => (
                            <div className="tf-mini-card" key={index}>
                                <div className={card.wrapClass}>{card.icon}</div>
                                <span className="tf-mini-card-label">{card.label}</span>
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
                                Payroll <span className="tf-para-highlight"></span>
                            </h2>
                            <p className="tf-para-text">
                                Payroll processing demands accuracy, compliance, and seamless integration with attendance data to avoid costly errors and delays. <strong>No Qu’s payroll </strong>system automatically converts attendance, shifts, and approvals into payroll-ready timesheets, eliminating manual intervention. From salary calculations to statutory compliance, every component is synchronized in real time. This ensures timely payouts, reduces discrepancies, and improves financial transparency. With a structured and automated payroll workflow, organizations can confidently manage employee compensation while maintaining compliance, consistency, and operational efficiency across departments and business cycles.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection animClass="tf-fade-right">
                        <div className="tf-para-right">
                            <div className="tf-para-cards-grid">
                                {pay_para_channelCards.map((card, index) => (
                                    <div key={index} className="tf-para-card">
                                        <div className="tf-para-icon-wrap">
                                            {card.icon}
                                        </div>
                                        <span className="tf-para-card-label">{card.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>

                </div>
            </section>


            {/* ══════════════════════════════════════
                SECTION 3 — PAYROLL_FEATURES_SECTION
                (HORIZONTAL CAROUSEL - UPDATED)
            ══════════════════════════════════════ */}
            <section className="pay-features-section">
                <div className="pay-features-container">

                    {/* Header */}
                    <div className="pay-features-header">
                        <h2 className="pay-features-title tf-sec3-headline">
                            Complete <span className="pay-title-blue tf-sec3-hl-blue">Payroll Solution</span>
                        </h2>
                        <div className="tf-sec3-bar" />
                        <p className="pay-features-subtitle tf-sec3-subtext">
                            No Qu delivers a comprehensive payroll management system that simplifies calculations, 
                            ensures compliance, and provides accurate, real-time payroll processing.
                        </p>
                    </div>

                    {/* Carousel Row */}
                    <div className="pay-features-carousel-wrapper">

                        <button className="pay-features-arrow" onClick={pay_features_prev} aria-label="Previous">
                            <ChevronLeft size={20} />
                        </button>

                        <div className="pay-features-carousel-track">
                            {pay_features_visibleCards.map(({ card, position }) => (
                                <div
                                    key={`${card.id}-${position}`}
                                    className={`pay-features-card ${position === 'center' ? 'active' : 'side'}`}
                                    onClick={() => {
                                        if (position === 'left')  pay_features_prev();
                                        if (position === 'right') pay_features_next();
                                    }}
                                >
                                    {/* TOP — Image */}
                                    <div className="pay-features-card-img-wrap">
                                        <img src={card.image} alt={card.title} className="pay-features-card-img" />
                                        <span className={`pay-features-card-badge ${card.badgeClass}`}>{card.badge}</span>
                                    </div>

                                    {/* BOTTOM — Content */}
                                    <div className="pay-features-card-body">
                                        <h3 className="pay-features-card-title tf-sec3-card-title">{card.title}</h3>
                                        <p className="pay-features-card-desc tf-sec3-card-desc">{card.desc}</p>
                                        
                                        <p className="pay-features-card-features-label tf-sec3-key-label">Key Features</p>
                                        
                                        <ul className="pay-features-card-list tf-sec3-card-points">
                                            {card.list.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                        
                                        {card.footer && (
                                            <p className="pay-features-card-footer">{card.footer}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="pay-features-arrow" onClick={pay_features_next} aria-label="Next">
                            <ChevronRight size={20} />
                        </button>

                    </div>

                    {/* Dots */}
                    <div className="pay-features-dots">
                        {pay_features_carouselCards.map((_, i) => (
                            <button
                                key={i}
                                className={`pay-features-dot ${i === pay_features_activeIndex ? 'active' : ''}`}
                                onClick={() => setPay_features_activeIndex(i)}
                                aria-label={`Slide ${i + 1}`}
                            />
                        ))}
                    </div>

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
                               WHY PAYROLL MATTERS
                            </h2>
                            <p className="tf-improve-para">
                               A structured payroll system ensures accurate payouts, compliance, and efficient financial management.
                            </p>
                            <p className="tf-improve-label">Key benefits include:</p>

                            <StaggeredList
                                items={pay_improve_keyBenefits}
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
                                  By automating payroll processes, organizations ensure reliable and consistent compensation management.
                                </p>

                                <p className="tf-improve-highlight">
                                    No Qu transforms payroll into a seamless, accurate, and compliant system.
                                </p>
                                <p className="tf-improve-para">
                                  Ensure every employee is paid correctly while maintaining full control over financial and workforce operations.
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
                SECTION 5 — CTA
            ================================================ */}
            <AnimatedSection animClass="tf-scale-up">
                <section className="tf-cta-section">
                    <div className="tf-cta-wrap">
                        <h2 className="tf-cta-headline">
                          Turn attendance data into accurate, reliable,<br />
                            <span className="tf-cta-headline-blue">and compliant payroll payouts.</span>
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

export default Payroll;
