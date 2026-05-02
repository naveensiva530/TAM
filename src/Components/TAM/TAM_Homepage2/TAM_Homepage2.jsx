

import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './TAM_Homepage2.css';

// Preload hero images for instant display
const heroBgImg = new Image();
heroBgImg.src = tamBg;
const heroBannerImg = new Image();
heroBannerImg.src = tamBanner;

// Client logos — first group
import client1 from '../../../assets/client1.png';
import client2 from '../../../assets/client2.png';
import client3 from '../../../assets/client3.png';
import client4 from '../../../assets/client4.png';
import client5 from '../../../assets/client5.png';
import client6 from '../../../assets/client6.png';

// Client logos — second group
import client7 from '../../../assets/FB.png';
import client8 from '../../../assets/Jll.png';
import client9 from '../../../assets/Nexus.webp';
import client10 from '../../../assets/Samco.png';
import client11 from '../../../assets/SeaShell.jpeg';
import client12 from '../../../assets/Sangeetha.png';

// Slider containers (used elsewhere in the app)
import Slider from '../../../Containers/Slider1/Slider1';
import Slider2 from '../../../Containers/Slider2/Slider2';

// Awards & platform rating images
import award1 from '../../../assets/elcotlogo.png';
import award2 from '../../../assets/awards2.jpeg';
import award3 from '../../../assets/awards3.jpeg';
import google from '../../../assets/google.png';
import playstore from '../../../assets/playstore.png';
import appstore from '../../../assets/appstore.png';
import star1 from '../../../assets/Star1.png';
import star2 from '../../../assets/Star2.png';

// Misc assets
import adv from '../../../assets/career_adv2.png';

// Feature slide images (used in the Features slider section)
import multiattendenceImg from '../../../assets/Multi Channel - Home.png';
import liveImg from '../../../assets/live2 (1).jpeg';
import regularizationImg from '../../../assets/live2 (4).jpeg';
import biometricImg from '../../../assets/live2 (5).jpeg';
import shiftImg from '../../../assets/Shift Management.png';
import payrollImg from '../../../assets/Payroll.png';
import holidayImg from '../../../assets/Leave & Holiday Management.png';
import rpImg from '../../../assets/Roles___Permissions.jpeg';
import hrmsImg from '../../../assets/HRMS.png';
import workflowImg from '../../../assets/Workflow.png';

// Lucide icons used in various UI elements
import { Star, Clock, X, MapPin } from 'lucide-react';

// CTA / app-download section assets
import call from '../../../assets/call.png';
import CTA from '../../../assets/Lp-cta.png';
import playStore from '../../../assets/Store-badge.png';
import appStore from '../../../assets/Store-badge2.png';

// Feature overview card images (6-card grid)
import tam_of1 from '../../../assets/WEBSITE ICON-01.png';
import tam_of2 from '../../../assets/WEBSITE ICON-05.png';
import tam_of3 from '../../../assets/WEBSITE ICON-03.png';
import tam_of4 from '../../../assets/WEBSITE ICON-06.png';
import tam_of5 from '../../../assets/WEBSITE ICON-02.png';
import tam_of6 from '../../../assets/WEBSITE ICON-04.png';

// Feature slide icon logos (small logos for the tab nav)
import multiattendenceLogo from '../../../assets/multiLogo.png';
import liveLogo from '../../../assets/liveLogo.png';
import regularizationLogo from '../../../assets/regularizationLogo.png';
import biometricLogo from '../../../assets/bioLogo.png';
import payrollLogo from '../../../assets/payrollLogo.png';
import workflowLogo from '../../../assets/workflowLogo.png';

// Business values icons
import highlySecure from '../../../assets/highlySecure.png';
import reliable from '../../../assets/reliable.png';
import scalable from '../../../assets/scalable.png';
import userFriendly from '../../../assets/userFriendly.png';

// Hero section images
import tamBanner from '../../../assets/web image.webp';
import tamBg from '../../../assets/tam2-bg.webp';

// Lucide icons for the Workflow tab sidebar
import {
  Workflow,
  Users,
  Calendar,

  IndianRupee,
  Building2,
  CalendarClock,
} from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Testimonial company logos
import bmg from '../../../assets/bmglogo.png';
import purpleOptics from '../../../assets/purplelogo2.png';
import Do from '../../../assets/client4.png';


// Layout components
import TAM_Footer from '../TAM_Footer/TAM_Footer';
import ScheduleAdemo from '../../../Containers/RegForms/ScheduleAdemo';



// ─────────────────────────────────────────────────────────────
// SECTION 2b — COUNT UP FUNCTION FOR STATS
// ─────────────────────────────────────────────────────────────
function CountUp({ end, suffix = '', duration = 1500 }) {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let start = 0;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
        observer.disconnect();
      }
    }, { threshold: 0.5 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  const displayCount = count.toLocaleString('en-IN');
  return <span ref={ref}>{displayCount} {suffix}</span>;
}

// ─────────────────────────────────────────────────────────────
// SECTION 3 — MAIN HOMEPAGE COMPONENT
// ─────────────────────────────────────────────────────────────
export default function TAM_Homepage2() {

  // Preload hero images immediately on mount
  useEffect(() => {
    const preloadImages = [tamBg, tamBanner];
    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // ── 3a. STATE & MODAL HANDLERS ──────────────────────────────
  // Controls whether the "Schedule a Demo" modal is open or closed
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Legacy popup observer for any .popup_initial elements



  // ── 3b. RESPONSIVE RESIZE HANDLER ───────────────────────────
  // Tracks whether the screen is mobile width (≤768px)
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);





  // ── 3c. SCROLL-REVEAL INTERSECTIONOBSERVER ───────────────────
  // Watches all elements with reveal-* classes.
  // Adds 'is-revealed' when they enter the viewport → triggers CSS transition.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    const elements = document.querySelectorAll(
      '.reveal-on-scroll, .reveal-left, .reveal-right, .reveal-zoom'
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);


  // ── 3d. DATA — FEATURE OVERVIEW CARDS (6-card grid) ──────────
  // Each object maps to one card in the "Trusted Attendance for Modern Teams" grid
  const features = [
    {
      title: 'AI-enabled Face Recognition',
      description:
        'Enable secure and accurate attendance with advanced AI-based face recognition for seamless check-in and check-out.',
      points: [
        'Accurate Identification',
        'Real-Time Verification',
        'Multiple Employees Face Recognition',
      ],
      image: tam_of1,
    },
    {
      title: 'Geo Fence',
      description:
        'Ensure location-based attendance with intelligent geo-fencing for on-site and remote teams.',
      points: [
        'Real Time Exit/Entry Alerts',
        'Create Customized Boundaries',
        'Fenced Area Clock-ins and outs',
      ],
      image: tam_of2,
    },
    {
      title: 'Reports/Dashboard',
      description:
        'Get instant insights with interactive dashboards and detailed attendance reports.',
      points: [
        'BI and Analytics Reports',
        'Real Time Attendance Tracking',
        'Report Scheduler',
      ],
      image: tam_of3,
    },
    {
      title: 'API Integration',
      description:
        'Connect seamlessly with your existing HRMS and payroll through flexible API integrations.',
      points: [
        'Real-Time Workforce Attendance Data',
        'Access Control Device Integration',
        'Biometric Device Integration',
      ],
      image: tam_of4,
    },
    {
      title: 'Organizational Charts',
      description:
        'Visualize reporting structures with interactive organizational charts.',
      points: [
        'Clear Workforce hierarchy',
        'Various levels of users',
        'Roles and Responsibilities',
      ],
      image: tam_of5,
    },
    {
      title: 'Notification',
      description:
        'Stay updated with smart alerts and real-time notifications for important activities.',
      points: [
        'Check-in/out Reminders',
        'Alerts to reporting officers',
        'Mobile app, SMS, Email & WhatsApp',
      ],
      image: tam_of6,
    },
  ];


  // ── 3e. DATA — FEATURE SLIDES (tab-style slider) ─────────────
  // Used in the Features Slider section at the top.
  // activeSlide tracks which tab is currently selected.
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 1,
      icon: multiattendenceLogo,
      title: 'Multi-Channel Attendance',
      description:
        'With No Qu TAM, the organizations gain complete multi-channel attendance flexibility. Whether the team operates from the office, works remotely, or on the field, TAM provides a seamless attendance solution tailored to the needs. Experience hassle-free, accurate, and convenient attendance every time.',
      image: multiattendenceImg,
      points: [
        'AI-enabled Face Recognition',
        'QR Scan',
        'Mobile Tap Button',
        'Biometric Device',
        'AI Video Feed',
      ],
    },
    {
      id: 2,
      icon: liveLogo,
      title: 'Live Tracking',
      description:
        "Track your workforce in real time with No Qu Live Tracking. From on-field to remote teams, get live activity tracking with location proof, geo-tagging, and fencing rules. Live Tracking allows employers to monitor employees’ real-time location and attendance status, ensuring workforce visibility and improving productivity.",
      image: liveImg,
      points: [
        'Real-time Monitoring of The Field Workforce',
        'Remote Employee Tracking',
        'Sporadic/Intermittent Location Tracking',
        'On-off Location Tracking',
      ],
    },
    {
      id: 3,
      icon: regularizationLogo,
      title: 'Regularization',
      description:
        'Regularization allows HRs, Admins, or any authorized persons to correct attendance records and self-regularization requests can be raised by employees.Through this process, missed punches and late check-ins can be regularized, ensuring accurate and up-to-date attendance for payroll and compliance.',
      image: regularizationImg,
      points: [
        'Missed Punch Regularization',
        'Late and Early Check-in/Check-out Regularization',
        'Leave, Permissions, Week-off, Comp-off, Present, Absent Regularization',
        'Backdated Attendance Corrections, Audit Trail, and History Management',
      ],
    },
    {
      id: 4,
      icon: biometricLogo,
      title: 'Biometric Device Integration',
      description:
        'No Qu TAM offers seamless Biometric device integration, enabling businesses to connect their existing devices. Attendance data is captured and synchronized in real time, ensuring accuracy and eliminating manual errors. With secure identity verification and centralized data, organizations gain a reliable and efficient way to monitor workforce attendance while enhancing real-time attendance reports and visibility. ',
      image: biometricImg,
      points: [
        'Integrated Biometric Attendance',
        'Face, Fingerprint & RFID Device Sync',
        'Seamless Device & System Sync',
        'Access Control Integration',
      ],
    },
    {
      id: 5,
      icon: workflowLogo,
      title: 'Workflow',
      description: 'Workflow modernized attendance requests with a smart, automated flow across HR and reporting managers. From leave and permissions to late check-ins, overtime, comp-offs, and week-offs, every request is tracked with clarity. With built-in alerts, approvals, and escalations, the system ensures seamless processing without delays.',
      image: workflowImg,
      points: [
        'Leave & Permission Management',
        'Overtime & Comp-off Tracking',
        'Late Check-in, Early Check-out, and Week-off Requests',
        'Automated Alerts, Approvals & Escalations',
      ],
    },
  ];

  // Derived active slide data
  const active = slides[activeSlide];


  // ── 3f. DATA — TESTIMONIALS ───────────────────────────────────
  // 3 testimonial entries shown in equal-height rotating cards.
  // currentIndex controls which card is in the center position.
  const testimonials = [
    {
      text: "We love this App! It's user-friendly, efficient, and accurate for tracking attendance. The GPS feature provides real-time updates, and the customizable options fit our needs perfectly. Managing teams and generating reports is a breeze.",
      author: 'Best Money Gold',
      logo: bmg,
    },
    {
      text: "No Qu Attendance has greatly improved our daily workflow with its simple and efficient interface. The support staff are incredibly responsive and always go the extra mile to assist. The app runs smoothly, backed by a solid and secure infrastructure. Frequent updates and new features show the team's commitment to excellence, and we highly trust No Qu TAM as the best Attendance App for Businesses.",
      author: 'Purple Opticals',
      logo: purpleOptics,
    },
    {
      text: 'No Qu TAM has transformed how we manage attendance across our branches. The biometric integration works flawlessly and the real-time reports save us hours every week. Highly recommended for any growing business.',
      author: 'Do My Home',
      logo: Do,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);


  // ── 3g. DATA — CLIENT LOGOS (infinite marquee) ───────────────
  const clientLogos = [
    { src: client1, alt: 'Client logo' },
    { src: client2, alt: 'Client logo' },
    { src: client3, alt: 'Client logo' },
    { src: client4, alt: 'Client logo' },
    { src: client5, alt: 'Client logo' },
    { src: client6, alt: 'Client logo' },
    { src: client7, alt: 'Client logo' },

    { src: client9, alt: 'Client logo' },
    { src: client10, alt: 'Client logo' },
    { src: client11, alt: 'Client logo' },
    { src: client12, alt: 'Client logo' },
  ];


  // ── 3h. TESTIMONIAL NAVIGATION HANDLERS ──────────────────────
  // handlePrev / handleNext cycle through the testimonials array
  function handlePrev() {
    setCurrentIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }

  function handleNext() {
    setCurrentIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }


  // ── 3i. DATA — TABS & TAB CONTENT (Workflow section) ─────────
  // tabs array drives the sidebar nav buttons.
  // tabContent object holds the text/image for each tab panel.
  const [activeTab, setActiveTab] = useState('roles');

  const tabs = [
    { id: 'roles', label: 'Roles & Permissions', icon: Users },
    { id: 'leave', label: 'Leave & Holiday', icon: Calendar },
    { id: 'shift', label: 'Shift Management', icon: CalendarClock },
    { id: 'hrms', label: 'HRMS', icon: Building2 },
    { id: 'payroll', label: 'Payroll', icon: IndianRupee },
  ];

  const tabContent = {
    roles: {
      title: 'Roles & Permissions',
      paragraph:
        'Roles and Permissions ensure secure and structured access with role-based permissions. Define user roles, control data visibility, and streamline approvals to maintain accuracy and accountability across the organization. With flexible configurations, every team gets the right level of access they need.',
      features: [
        'Role and Location-based Access Control',
        'Configurable User Permissions',
        'Secure Data Visibility',
        'Streamlined Approval Hierarchy',
      ],
      image: rpImg,
    },
    leave: {
      title: 'Leave & Holiday Management',
      paragraph:
        'No Qu TAM simplifies leave management with an intuitive and transparent process. By configuring leave, holidays, and comp-offs to streamline approvals, every step is effortless. Employees can track and manage their own leave while HR ensures accuracy, compliance, and smooth operations.',
      features: [
        'Leave, Holiday & Comp-off',
        'Effortless Leave Approvals',
        'Employee Self-service Leave Tracking',
        'Transparent Leave Management',
      ],
      image: holidayImg,
    },
    shift: {
      title: 'Shift Management',
      paragraph:
        'Shift Management simplifies diverse Attendance Management needs, offering complete flexibility for organizations with standard, flexible, or shift-based work structures. It ensures accurate time tracking, automated calculations, and effortless policy enforcement for every work model.',
      features: [
        'Fixed Schedules & Grace Periods',
        'Flexible Hours With Core Timet',
        'Shift Scheduling & Night Shifts',
        'Over Time, Permission & Break Tracking',
      ],
      image: shiftImg,
    },
    hrms: {
      title: 'HRMS',
      paragraph:
        'No Qu HRMS is a fully integrated platform designed to align attendance with every core HR function. From payroll readiness to performance tracking, it simplifies all workforce management while maintaining compliance and operational efficiency. Whether teams operate in-office, remotely, or in hybrid environments, No Qu HRMS ensures clarity, control, and consistency across all processes.',
      features: [
        'Recruitment',
        'Employee Self-service Portal',
        'Performance Management',
        'Asset Management',
      ],
      image: hrmsImg,
    },
    payroll: {
      title: 'Payroll',
      paragraph:
        'Manage payroll with ease using attendance-integrated automation. From payroll-ready timesheets to synchronized leave and overtime calculations, No Qu Payroll ensures accuracy, compliance, and faster processing. Built for flexibility, it adapts to every pay cycle, project, or contractor requirement.',
      features: [
        'Bank API Integration',
        'Salary Management',
        'Loan and Advance Management',
        'Tax Management',
      ],
      image: payrollImg,
    },
  };

  // Derived current tab data used in the JSX below
  const currentTab = tabContent[activeTab];


  // ── 3j. HANDLERS — TAB CLICK & MOBILE NAV SCROLL ─────────────

  // Horizontal scroll-snap handler for mobile tab content swipe
  let timeout = null;
  const handleScroll = (e) => {
    const container = e.target;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      const width = container.clientWidth;
      const index = Math.round(container.scrollLeft / width);
      container.scrollTo({ left: index * width, behavior: 'smooth' });
      if (index >= 0 && index < tabs.length) {
        setActiveTab(tabs[index].id);
      }
    }, 120);
  };

  const tabsRef = useRef(null);
  const navRowRef = useRef(null); // ref used to center active slide tab on mobile
  const workflowNavRowRef = useRef(null); // ref for workflow mobile nav scrolling

  // Tab button click — updates the active tab panel
  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  // Mobile: when activeSlide changes, scroll the nav row to center that button
  useEffect(() => {
    const navRow = navRowRef.current;
    if (!navRow) return;
    const activeBtn = navRow.children[activeSlide];
    if (!activeBtn) return;
    const navWidth = navRow.offsetWidth;
    const btnLeft = activeBtn.offsetLeft;
    const btnWidth = activeBtn.offsetWidth;
    navRow.scrollTo({
      left: btnLeft - navWidth / 2 + btnWidth / 2,
      behavior: 'smooth',
    });
  }, [activeSlide]);

  // Mobile: scroll the workflow nav row to center active button
  useEffect(() => {
    const navRow = workflowNavRowRef.current;
    if (!navRow) return;
    const activeIndex = tabs.findIndex(t => t.id === activeTab);
    if (activeIndex === -1) return;
    const activeBtn = navRow.children[activeIndex];
    if (!activeBtn) return;
    const navWidth = navRow.offsetWidth;
    const btnLeft = activeBtn.offsetLeft;
    const btnWidth = activeBtn.offsetWidth;
    navRow.scrollTo({
      left: btnLeft - navWidth / 2 + btnWidth / 2,
      behavior: 'smooth',
    });
  }, [activeTab, tabs]);


  // ── 3k. JSX RETURN ────────────────────────────────────────────
  return (
    <>
      <Helmet>
        <title>NoQu TAM: Time and Attendance Management System - AI-Powered Workforce Solutions</title>
        <meta name="description" content="NoQu TAM is an AI-powered Time and Attendance Management system with facial recognition, live tracking, geo-fencing, and seamless payroll integration for modern workforce management." />
        <meta property="og:title" content="NoQu TAM: Time and Attendance Management System" />
        <meta property="og:description" content="AI-powered attendance management with facial recognition, live tracking, geo-fencing, and payroll integration." />
        <meta property="og:image" content="https://noqu.in/logo.png" />
        <meta property="og:url" content="https://noqu.in/tam" />
        <link rel="canonical" href="https://noqu.in/tam" />
        <meta name="twitter:card" content="NoQu" />
        <meta name="twitter:title" content="NoQu TAM: Time and Attendance Management" />
        <meta name="twitter:description" content="AI-powered attendance management with facial recognition, live tracking, and payroll integration." />
        <meta name="twitter:image" content="https://noqu.in/logo.png" />
      </Helmet>
      <div className="TAM_Homepage2_wrapper">

        {/* ═══════════════════════════════════════════════════════
          HERO SECTION
          Left: headline + subtitle + CTA button
          Right: banner image on white circle backing
          Circle and image are shown immediately — no onLoad gate
          ═══════════════════════════════════════════════════════ */}
        <section className="TAM_Hero_Section_Wrapper" style={{ position: 'relative' }}>
          <img
            src={tamBg}
            alt=""
            fetchpriority="high"
            loading="eager"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
          />
          <div className="TAM_Hero_Main_Box" style={{ position: 'relative', zIndex: 1 }}>

            {/* Left content — text still has a fast fade-in for feel */}
            <div className="TAM_Hero_Box_Left">
              <h1 className="TAM_Hero_Box_Title TAM_Hero_Title_Animate">
                The <span className="text-green-pill">Smart AI</span>
                -Powered Attendance Solution for the Modern Workforce
              </h1>
              <p className="TAM_Hero_Box_Subtitle TAM_Hero_Subtitle_Animate">
                No Qu TAM enhances <strong>Efficiency</strong>, improves{' '}
                <strong>Productivity</strong>, and increases <strong>Profitability</strong>.
              </p>
              <div className="TAM_Hero_Button_Area TAM_Hero_Btn_Animate">
                <button className="TAM_Hero_Btn_Primary" onClick={openModal}>
                  Schedule your Demo
                </button>
              </div>
            </div>

            {/* Right image — All delay/animation removed for instant loading */}
            <div className="TAM_Hero_Box_Right hero-img-visible">
              <div className="TAM_Hero_Image_Circle_Backing">
                <div className="TAM_Hero_Image_Container">
                  <img
                    src={tamBanner}
                    alt="AI Attendance Dashboard"
                    className="TAM_Hero_Inner_Image"
                    fetchpriority="high"
                    loading="eager"
                    decoding="sync"
                  />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
          CLIENTS MARQUEE SECTION
          Infinite auto-scrolling logo strip.
          Array is duplicated for seamless loop.
          Gradient overlays fade the edges.
          ═══════════════════════════════════════════════════════ */}
        <section className="TAM_FullWidth_Trusted">
          <div className="tam-global-heading-wrapper reveal-on-scroll">
            <h2 className="tam-global-section-title">Clients<span className="tam-global-section-title-blue"></span></h2>
            <div className="tam-global-title-bar"></div>
          </div>

          <div className="TAM_Marquee_Outer">
            <div className="TAM_Edge_Fade_Left"></div>
            <div className="TAM_Edge_Fade_Right"></div>
            <div className="TAM_Marquee_Track">
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <div className="TAM_Logo_Box" key={index}>
                  <img
                    src={logo.src}
                    alt={logo.alt || 'Client Logo'}
                    className="TAM_Brand_Logo_Image"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════════════════════
          FEATURES SLIDER SECTION
          Top tab buttons select a feature.
          Content area shows image (left) + description (right).
          navRowRef used to auto-center active tab on mobile.
          ═══════════════════════════════════════════════════════ */}
        <section className="zoho-premium-stationary-section">
          <div className="zoho-box-container">
            <div className="tam-global-heading-wrapper reveal-on-scroll">
              <h2 className="tam-global-section-title">Features <span className="tam-global-section-title-blue"></span></h2>
              <div className="tam-global-title-bar"></div>
            </div>

            <div className="zoho-nav-wrapper">
              {/* Mobile swipe hint text */}
              <p className="zoho-swipe-instruction">← Swipe to explore →</p>

              {/* Tab navigation buttons */}
              <nav className="zoho-box-nav-row" ref={navRowRef}>
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    className={`zoho-stationary-box ${activeSlide === index ? 'active' : ''}`}
                    onClick={() => setActiveSlide(index)}
                  >
                    <span className="zoho-box-label">{slide.title}</span>
                  </button>
                ))}
              </nav>

              {/* Dot indicators (mobile) */}
              <div className="zoho-nav-dots">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`zoho-dot ${activeSlide === index ? 'active' : ''}`}
                  />
                ))}
              </div>
            </div>

            {/* Slide content panels — only active one is displayed */}
            <div className="zoho-content-stage">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`zoho-content-view ${activeSlide === index ? 'show' : ''}`}
                  style={{ display: activeSlide === index ? 'grid' : 'none' }}
                >
                  {/* Left: feature screenshot */}
                  <div className="zoho-left-image-pane">
                    <img src={slide.image} alt={slide.title} className="zoho-stationary-img" />
                  </div>

                  {/* Right: title, description, bullet points */}
                  <div className="zoho-right-text-pane">
                    <h3 className="zoho-feature-title">{slide.title}</h3>
                    <p className="zoho-feature-desc">{slide.description}</p>
                    <ul className="zoho-feature-points" style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
                      {slide.points.slice(0, 5).map((point, i) => (
                        <li key={i} style={{ display: 'flex', gap: '15px', marginBottom: '10px', fontWeight: '700', fontSize: '16px', color: '#1e293b' }}>
                          <span style={{ color: '#38B000', fontWeight: 'bold' }}>✓</span> {point}
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════════════════════
          STATS SECTION
          3 boxes: Clients count / Users count / Countries count
          ═══════════════════════════════════════════════════════ */}
        <div className="TAM_homepage-stats-section">
          <div className="tam-global-heading-wrapper reveal-on-scroll" style={{ padding: '0 20px' }}>
            <h2 className="tam-global-section-title">
              AI attendance <span className="tam-global-section-title-blue">that grows with your business worldwide</span>
            </h2>
            <div className="tam-global-title-bar"></div>
          </div>

          <div className="TAM_homepage-stats-container">
            {/* Stat box: Clients */}
            <div className="TAM_homepage-stat-box reveal-on-scroll delay-1">
              <div className="TAM_stat-icon-bg blue-bg"></div>
              <h3 className="TAM_homepage-number color-blue"><CountUp end={2040} suffix="+" /></h3>
              <p className="TAM_homepage-stat-label">Clients</p>
              <p className="TAM_homepage-caption">
                Serving diverse organizations with reliable solutions.
              </p>
            </div>

            {/* Stat box: Users */}
            <div className="TAM_homepage-stat-box reveal-on-scroll delay-2">
              <div className="TAM_stat-icon-bg green-bg"></div>
              <h3 className="TAM_homepage-number color-green"><CountUp end={205600} suffix="+" /></h3>
              <p className="TAM_homepage-stat-label">Users</p>
              <p className="TAM_homepage-caption">
                Supporting professionals with seamless workforce management.
              </p>
            </div>

            {/* Stat box: Countries */}
            <div className="TAM_homepage-stat-box reveal-on-scroll delay-3">
              <div className="TAM_stat-icon-bg navy-bg"></div>
              <h3 className="TAM_homepage-number color-navy"><CountUp end={3} suffix="+" /></h3>
              <p className="TAM_homepage-stat-label">Countries</p>
              <p className="TAM_homepage-caption">
                Extending trusted AI attendance across global markets.
              </p>
            </div>
          </div>
        </div>


        {/* ═══════════════════════════════════════════════════════
          TESTIMONIALS SECTION
          Shows 3 equal-height cards at a time.
          Cards rotate on arrow click (prev / next).
          Layout per card (top → bottom):
            • Company logo (circular ring)
            • Quote paragraph  (flex:1 — stretches to fill)
            • Company name + ★★★★★ rating (always at bottom)
          Dot indicators below let users jump to any testimonial.
          ═══════════════════════════════════════════════════════ */}
        <div className="tam-testi-section">
          {/* Section heading */}
          <div className="tam-global-heading-wrapper reveal-on-scroll">
            <h2 className="tam-global-section-title">Testimonials <span className="tam-global-section-title-blue"></span></h2>
            <div className="tam-global-title-bar"></div>
          </div>

          <div className="tam-testi-main-container">
            {/* Left Arrow */}
            <button
              className="tam-testi-arrow arrow-left"
              onClick={handlePrev}
              aria-label="Previous"
            >
              &#8249;
            </button>

            {/* Cards row */}
            <div className="tam-testi-cards-row">
              {[0, 1, 2].map((offset) => {
                const idx = (currentIndex + offset) % testimonials.length;
                const t = testimonials[idx];
                const isCenter = offset === 1;
                const isLeft = offset === 0;
                const isRight = offset === 2;

                return (
                  <div
                    key={`${currentIndex}-${offset}`}
                    className={`tam-testi-card-new tam-testi-card-anim ${isCenter ? 'tam-testi-card-center' : 'tam-testi-card-side'
                      }`}
                    onClick={isLeft ? handlePrev : isRight ? handleNext : undefined}
                    title={isLeft ? 'Previous' : isRight ? 'Next' : undefined}
                  >
                    {/* Top Logo */}
                    <div className="tam-testi-logo-ring">
                      {t.logo && (
                        <img src={t.logo} alt={t.author} className="tam-testi-logo-img" />
                      )}
                    </div>

                    {/* Quote Text */}
                    <p className="tam-testi-text">“{t.text}”</p>

                    {/* Author & Stars */}
                    <div className="tam-testi-bottom">
                      <span className="tam-testi-name">{t.author}</span>
                      <span className="tam-testi-stars-row">★★★★★</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Arrow */}
            <button
              className="tam-testi-arrow arrow-right"
              onClick={handleNext}
              aria-label="Next"
            >
              &#8250;
            </button>
          </div>

          {/* Dot indicators */}
          <div className="tam-testi-dots">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`tam-testi-dot ${i === currentIndex % testimonials.length ? 'active' : ''
                  }`}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </div>
        </div>


        {/* ═══════════════════════════════════════════════════════
          WORKFLOW / TAB SECTION
          Left sidebar: 5 tab buttons with lucide icons in circles
          Right content: image + paragraph + feature list
          Tabs: Roles & Permissions | Leave & Holiday |
                Shift Management | HRMS | Payroll
          ═══════════════════════════════════════════════════════ */}
        <div className="TAM_2030_Brutal_Organic">
          <div className="tam-container">
            <div className="tam-global-heading-wrapper reveal-on-scroll">
              <h1 className="tam-global-section-title">
                From Clock-Ins <span className="tam-global-section-title-blue">to Reports</span>
              </h1>
              <div className="tam-global-title-bar"></div>
              <p style={{ marginTop: '15px', color: '#64748b', fontSize: '18px', fontWeight: '500' }}>Your Workforce Simplified</p>
            </div>

            <div className="tam-grid-layout">
              <aside className="tam-nav-column reveal-left">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleTabClick(tab.id)}
                      className={`tam-nav-link ${activeTab === tab.id ? 'active' : ''}`}
                    >
                      <IconComponent size={24} strokeWidth={2.5} className="tam-nav-icon" />
                      <span className="tam-nav-text">{tab.label}</span>
                    </button>
                  );
                })}
              </aside>

              {/* RIGHT CONTENT STAGE */}
              {/* Pre-render all images & content to avoid delay. Active tab gets the .show class. */}
              <div className="tam-content-stage-wrapper" style={{ width: '100%' }}>
                {tabs.map((tab) => {
                  const content = tabContent[tab.id];
                  return (
                    <main
                      key={tab.id}
                      className={`tam-content-area ${activeTab === tab.id ? 'show' : ''}`}
                      style={{
                        display: activeTab === tab.id ? 'grid' : 'none'
                      }}
                    >
                      <div className="tam-image-viewport">
                        <img
                          src={content.image}
                          alt={content.title}
                          className="tam-bloom-image"
                        />
                      </div>

                      <div className="tam-text-blueprint">
                        <h2 className="tam-section-title">{content.title}</h2>
                        <p className="tam-section-desc">{content.paragraph}</p>

                        <div className="tam-feature-blueprint" style={{ marginTop: '20px' }}>
                          {content.features.map((feat, index) => (
                            <div key={index} className="tam-feature-line" style={{ display: 'flex', gap: '15px', marginBottom: '10px', fontWeight: '700', fontSize: '16px', color: '#1e293b' }}>
                              <span style={{ color: '#38B000', fontWeight: 'bold' }}>✓</span> {feat}
                            </div>
                          ))}
                        </div>
                      </div>
                    </main>
                  );
                })}
              </div>
            </div>
          </div>
        </div>


        {/* ═══════════════════════════════════════════════════════
          AWARDS & RECOGNITIONS SECTION
          Left: 3 award badge images
          Right: Google / Play Store / App Store star ratings
          ═══════════════════════════════════════════════════════ */}
        <div className="tam-awards-full-row-section">
          <div className="tam-global-heading-wrapper reveal-on-scroll">
            <h1 className="tam-global-section-title">
              Awards & <span className="tam-global-section-title-blue">Recognitions</span>
            </h1>
            <div className="tam-global-title-bar"></div>
            <p style={{ marginTop: '15px', color: '#64748b', fontSize: '18px', fontWeight: '500' }}>We're leading the competition in every category</p>
          </div>

          <div className="tam-slider-container reveal-on-scroll delay-1">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={true}
              breakpoints={{
                640: { slidesPerView: 2 },
                900: { slidesPerView: 3 },
                1200: { slidesPerView: 5 }, // Desktop-la 5 items theriyum
              }}
              className="tam-awards-swiper"
            >
              {/* 1. G-Pay (Google Rating) */}
              <SwiperSlide>
                <div className="tam-award-unit">
                  <img src={google} alt="G-Pay (Google Rating)" className="tam-platform-logo-large" />
                  <div className="tam-star-row">
                    <img src={star1} alt="Star" /><img src={star1} alt="Star" />
                    <img src={star1} alt="Star" /><img src={star1} alt="Star" />
                    <img src={star2} alt="Star" />
                  </div>
                </div>
              </SwiperSlide>

              {/* 2. Playstore */}
              <SwiperSlide>
                <div className="tam-award-unit">
                  <img src={playstore} alt="Play Store" className="tam-platform-logo-large" />
                  <div className="tam-star-row">
                    <img src={star1} alt="Star" /><img src={star1} alt="Star" />
                    <img src={star1} alt="Star" /><img src={star1} alt="Star" />
                    <img src={star2} alt="Star" />
                  </div>
                </div>
              </SwiperSlide>

              {/* 3. App Store */}
              <SwiperSlide>
                <div className="tam-award-unit">
                  <img src={appstore} alt="App Store" className="tam-platform-logo-large" />
                  <div className="tam-star-row">
                    <img src={star1} alt="Star" /><img src={star1} alt="Star" />
                    <img src={star1} alt="Star" /><img src={star1} alt="Star" />
                    <img src={star2} alt="Star" />
                  </div>
                </div>
              </SwiperSlide>

              {/* 4. Highly Recommended Award */}
              <SwiperSlide>
                <div className="tam-award-unit">
                  <img
                    src="https://www.softwaresuggest.com/award_logo/highly-recommended-winter-2024.png"
                    alt="Highly Recommended Award"
                    className="tam-award-img-large"
                  />
                </div>
              </SwiperSlide>

              {/* 5. DPIIT (Awards 2) */}
              <SwiperSlide>
                <div className="tam-award-unit">
                  <img src={award2} alt="DPIIT" className="tam-award-img-large" />
                </div>
              </SwiperSlide>

              {/* 6. StartupTN (Awards 3) */}
              <SwiperSlide>
                <div className="tam-award-unit">
                  <img src={award3} alt="StartupTN" className="tam-award-img-large" />
                </div>
              </SwiperSlide>

              {/* 7. Elcot (Award 1) */}
              <SwiperSlide>
                <div className="tam-award-unit">
                  <img src={award1} alt="Elcot" className="tam-award-img-large" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════
          FEATURE CARDS GRID SECTION
          Heading: "Trusted Attendance for Modern Teams"
          6-card grid showing key platform capabilities
          ═══════════════════════════════════════════════════════ */}
        <div className="feature-section tam-full-width-bg">
          <div className="tam-homepage2-wrapper">

            <div className="tam-global-heading-wrapper">
              <h2 className="tam-global-section-title">
                Trusted Attendance for <span className="tam-global-section-title-blue">Modern Teams</span>
              </h2>
              <div className="tam-global-title-bar"></div>
            </div>

            <p className="tam-homepage2-subtitle-wide">
              No Qu TAM is a trusted AI-powered attendance system that ensures accuracy
              and compliance for every business. Built on a cloud-based attendance platform,
              it delivers real-time attendance tracking with enterprise-grade protection.
            </p>

            <h3 className="lp-5-awards-title-accent">Simpler, Stronger, Together</h3>

            <p className="tam-homepage2-subtitle-wide">
              No Qu TAM brings everything together in one place, making work easier,
              faster, and more organized.
            </p>

            <div className="tam-global-heading-wrapper" style={{ marginTop: '50px', marginBottom: '30px' }}>
              <h1 className="tam-global-section-title"> <span className="tam-global-section-title-blue">Features</span></h1>
              <div className="tam-global-title-bar"></div>
            </div>

            {/* 6-card feature grid — mapped from features array above */}
            <div className="tam-homepage2-container">
              {features.map((f, i) => (
                <div key={i} className={`tam-homepage2-card reveal-zoom delay-${(i % 3) + 1}`}>
                  <div className="tam-homepage2-card-inner">
                    <div className="tam-homepage2-image-wrapper">
                      <img src={f.image} alt={f.title} className="tam-homepage2-image" />
                    </div>
                    <div className="tam-homepage2-header">
                      <h3 className="tam-homepage2-feature-title">{f.title}</h3>
                    </div>
                    <div className="tam-homepage2-body">
                      <p className="tam-homepage2-feature-desc">{f.description}</p>
                      <ul className="tam-homepage2-feature-points">
                        {f.points.map((p, idx) => (
                          <li key={idx} className="tam-homepage2-point-item">
                            <span className="tam-bullet-icon">✓</span> {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>


          {/* ═══════════════════════════════════════════════════════
            BUSINESS VALUES SECTION
            4 pillars: User-friendly / Secure / Scalable / Reliable
            ═══════════════════════════════════════════════════════ */}
          <div className="tam-hp2-business-section reveal-on-scroll">
            <div className="tam-global-heading-wrapper">
              <h2 className="tam-global-section-title">Optimized for <span className="tam-global-section-title-blue">Business Success</span></h2>
              <div className="tam-global-title-bar"></div>
            </div>

            <div className="tam-hp2-business-grid">

              {/* Pillar 1: User-friendly */}
              <div className="tam-hp2-business-item reveal-zoom delay-1">
                <div className="tam-hp2-business-icon tam-hp2-business-icon-orange">
                  <img src={userFriendly} width={35} alt="User Friendly" />
                </div>
                <h3 className="tam-hp2-business-item-title">User-friendly</h3>
                <p className="tam-hp2-business-item-desc">
                  Simple to use with an intuitive design that makes adoption quick and easy.
                </p>
              </div>

              {/* Pillar 2: Highly Secure */}
              <div className="tam-hp2-business-item reveal-zoom delay-2">
                <div className="tam-hp2-business-icon tam-hp2-business-icon-orange">
                  <img src={highlySecure} width={35} alt="Highly Secure" />
                </div>
                <h3 className="tam-hp2-business-item-title">Highly Secure</h3>
                <p className="tam-hp2-business-item-desc">
                  Enterprise-grade security ensures data privacy, compliance, and complete protection.
                </p>
              </div>

              {/* Pillar 3: Scalable */}
              <div className="tam-hp2-business-item reveal-zoom delay-3">
                <div className="tam-hp2-business-icon tam-hp2-business-icon-orange">
                  <img src={scalable} width={35} alt="Scalable" />
                </div>
                <h3 className="tam-hp2-business-item-title">Scalable</h3>
                <p className="tam-hp2-business-item-desc">
                  Adapts effortlessly to businesses of any size, from startups to large enterprises.
                </p>
              </div>

              {/* Pillar 4: Reliable */}
              <div className="tam-hp2-business-item reveal-zoom delay-4">
                <div className="tam-hp2-business-icon tam-hp2-business-icon-orange">
                  <img src={reliable} width={35} alt="Reliable" />
                </div>
                <h3 className="tam-hp2-business-item-title">Reliable</h3>
                <p className="tam-hp2-business-item-desc">
                  Delivers accurate, real-time attendance and workforce insights you can trust.
                </p>
              </div>

            </div>
          </div>


          <div className="home_page_cta_section_2_content_wrap">
            <div className="tam-global-heading-wrapper" style={{ textAlign: 'center', marginBottom: '30px' }}>
              <h2 className="tam-global-section-title" style={{ color: 'black' }}>
                Your Journey to Smarter <br />
                <span className="tam-global-section-title-blue">
                  Workforce Management
                </span>
              </h2>

            </div>

            <div className="home_page_cta_section_2_btn_group">
              <button className="home_page_cta_section_2_cta_btn" onClick={openModal}>
                Request your Demo

                <div className="home_page_cta_section_2_btn_arrow_circle">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="3">
                    <path d="M5 12h14M12 5l7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round" />
                  </svg>
                </div>
              </button>
            </div>
          </div>


          {/* ═══════════════════════════════════════════════════════
            CTA / APP DOWNLOAD SECTION
            Left: headline + description + store badges + phone CTA
            Right: phone mockup image
            ═══════════════════════════════════════════════════════ */}
          <section className="lp-5-cta-section reveal-on-scroll">
            <div className="lp-5-cta-content">

              {/* Left text & download links */}
              <div className="lp-5-cta-left reveal-left">
                <div className="tam-global-heading-wrapper" style={{ textAlign: 'left', marginBottom: '20px' }}>
                  <h2 className="tam-global-section-title" style={{ textAlign: 'left' }}>
                    Manage Your Workforce <span className="tam-global-section-title-blue">From Anywhere</span>
                  </h2>
                  <div className="tam-global-title-bar" style={{ marginLeft: 0, marginBottom: '25px' }}></div>
                </div>
                <p className="lp-5-cta-description">
                  Handle attendance, leaves, and employee activities right from your mobile.
                  No Qu TAM helps you manage workforce operations efficiently — from real-time
                  attendance tracking to leave monitoring — all in one powerful mobile app.
                </p>

                <div className="lp-5-app-download">
                  <h3 className="lp-5-app-download-title">Get the App</h3>

                  {/* App store badges */}
                  <div className="lp-5-store-badges">
                    <a href="https://play.google.com/store/apps/details?id=com.noqu.app" target="blank">
                      <img src={playStore} alt="Play Store" />
                    </a>
                    <a href="https://apps.apple.com/us/app/noqu-tam/id6554003975" target="blank">
                      <img src={appStore} alt="App Store" />
                    </a>
                  </div>

                  {/* Phone call CTA */}
                  <div className="lp-5-call">
                    <p className="lp-5-call-text">Need Help? Call Us Now:</p>
                    <a href="callto:+91 7401600600">
                      <button>
                        <img src={call} width={25} alt="Call" />
                        <p>+91 7401 600 600</p>
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: app mockup image */}
              <div className="lp-5-cta-right reveal-right">
                <img className="lp-5-cta-image" src={CTA} alt="No Qu TAM App" />
              </div>

            </div>
          </section>

        </div>


        {/* ═══════════════════════════════════════════════════════
          FOOTER + SCROLL-TO-TOP BUTTON
          ScrollToTopButton is a fixed element (outside document flow)
          ═══════════════════════════════════════════════════════ */}

        <TAM_Footer />
        <ScheduleAdemo isOpen={isModalOpen} onClose={closeModal} />

      </div>
    </>
  );
}
