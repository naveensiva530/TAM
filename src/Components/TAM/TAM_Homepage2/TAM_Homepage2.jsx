import React, { useEffect, useState } from 'react';
import './TAM_Homepage2.css';
import client1 from '../../../assets/client1.png';
import client2 from '../../../assets/client2.png';
import client3 from '../../../assets/client3.png';
import client4 from '../../../assets/client4.png';
import client5 from '../../../assets/client5.png';
import client6 from '../../../assets/client6.png';
import Slider from '../../../Containers/Slider1/Slider1';
import Slider2 from '../../../Containers/Slider2/Slider2';
import award1 from '../../../assets/awards1.jpg';
import award2 from '../../../assets/awards2.jpeg';
import award3 from '../../../assets/awards3.jpeg';
import google from '../../../assets/google.svg';
import playstore from '../../../assets/playstore.svg';
import appstore from '../../../assets/appstore.png';
import star1 from '../../../assets/Star1.png';
import star2 from '../../../assets/Star2.png';
import adv from '../../../assets/career_adv2.png';
import multiattendenceImg from '../../../assets/multiattendenceImg.png';
import liveImg from '../../../assets/liveImg.png';
import regularizationImg from '../../../assets/regularizationImg.png';
import biometricImg from '../../../assets/biometricImg.png';
import shiftImg from '../../../assets/shiftImg.png';
import payrollImg from '../../../assets/payrollImg.png';
import holidayImg from '../../../assets/holidayImg.png';
import rpImg from '../../../assets/rpImg.png';
import hrmsImg from '../../../assets/hrmsImg.png';
import workflowImg from '../../../assets/workflowImg.png';
import { Star, Clock, X, MapPin } from "lucide-react";
import call from '../../../assets/call.png'
import CTA from '../../../assets/Lp-cta.png';
import playStore from '../../../assets/Store-badge.png';
import appStore from '../../../assets/Store-badge2.png';
import tam_of1 from '../../../assets/tam_of1.png';
import tam_of2 from '../../../assets/tam_of2.png';
import tam_of3 from '../../../assets/tam_of3.png';
import tam_of4 from '../../../assets/tam_of4.png';
import tam_of5 from '../../../assets/tam_of5.png';
import tam_of6 from '../../../assets/tam_of6.png';
import tam_of7 from '../../../assets/tam_of7.png';
import tam_of8 from '../../../assets/tam_of8.png';
import tam_of9 from '../../../assets/tam_of9.png';
import tam_of10 from '../../../assets/tam_of10.png';
import tam_of11 from '../../../assets/tam_of11.png';
import tam_of12 from '../../../assets/tam_of12.png';
import multiattendenceLogo from '../../../assets/multiLogo.png';
import liveLogo from '../../../assets/liveLogo.png';
import regularizationLogo from '../../../assets/regularizationLogo.png';
import biometricLogo from '../../../assets/bioLogo.png';
import payrollLogo from '../../../assets/payrollLogo.png';
import leaveLogo from '../../../assets/leaveLogo.png';
import rpLogo from '../../../assets/rpLogo.png';
import workflowLogo from '../../../assets/workflowLogo.png';
import highlySecure from '../../../assets/highlySecure.png';
import reliable from '../../../assets/reliable.png';
import scalable from '../../../assets/scalable.png';
import userFriendly from '../../../assets/userFriendly.png';
import tamBanner from '../../../assets/tam-herobanner2.png';



export default function TAM_Homepage2() {
  const [email, setEmail] = useState('');
  const statsData = [
    { number: "2000+", label: "Happy Clients" },
    { number: "143000+", label: "Active Users" },
    { number: "3+", label: "Years of Excellence" },
  ];

  const features = [
    {
      title: "AI-enabled Face Recognition",
      description:
        "Enable secure and accurate attendance with advanced AI-based face recognition for seamless check-in and check-out.",
      points: [
        "Accurate Identification",
        "Real-Time Verification",
        "Multiple Employees Face Recognition",
      ],
      image: tam_of1,
    },
    {
      title: "Geo Fence",
      description:
        "Ensure location-based attendance with intelligent geo-fencing for on-site and remote teams.",
      points: [
        "Real Time Exit/Entry Alerts",
        "Create Customized Boundaries",
        "Fenced Area Clock-ins and outs",
      ],
      image: tam_of2,
    },
    {
      title: "Reports/Dashboard",
      description:
        "Get instant insights with interactive dashboards and detailed attendance reports.",
      points: [
        "BI and Analytics Reports",
        "Real Time Attendance Tracking",
        "Report Scheduler",
      ],
      image: tam_of3,
    },
    {
      title: "API Integration",
      description:
        "Connect seamlessly with your existing HRMS and payroll through flexible API integrations.",
      points: [
        "Real-Time Workforce Attendance Data",
        "Access Control Device Integration",
        "Biometric Device Integration",
      ],
      image: tam_of4,
    },
    {
      title: "Organizational Charts",
      description:
        "Visualize reporting structures with interactive organizational charts.",
      points: [
        "Clear Workforce hierarchy",
        "Various levels of users",
        "Roles and Responsibilities",
      ],
      image: tam_of5,
    },
    {
      title: "Notification",
      description:
        "Stay updated with smart alerts and real-time notifications for important activities.",
      points: [
        "Check-in/out Reminders",
        "Alerts to reporting officers",
        "Mobile app, SMS, Email & WhatsApp",
      ],
      image: tam_of6,
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);


  const slides = [
    {
      id: 1,
      icon: multiattendenceLogo,
      title: "Multi-Channel Attendance",
      description:
        "With No Qu TAM, organizations gain complete multi-channel attendance flexibility. Whether the team operates from the office, remotely, or on the field, TAM provides seamless attendance tailored to every need.",
      image: multiattendenceImg,
      points: [
        "AI-enabled Face Recognition",
        "QR Scan",
        "Mobile Tap Button",
        "Biometric Device",
      ],
    },
    {
      id: 2,
      icon: liveLogo,
      title: "Live Tracking",
      description:
        "Track your workforce in real time with No Qu Live Tracking. From field to remote teams, get real-time activity tracking with location proof and geo-fencing rules.",
      image: liveImg,
      points: [
        "Real-time monitoring of field workforce",
        "Remote employee tracking",
        "Intermittent location tracking",
        "On-off location tracking",
      ],
    },
    {
      id: 3,
      icon: regularizationLogo,
      title: "Regularization",
      description:
        "Regularization allows HR or authorized persons to correct attendance records. Missed punches, late check-ins, and related issues can be fixed seamlessly.",
      image: regularizationImg,
      points: [
        "Missed punch regularization",
        "Late/Early check-in or check-out correction",
        "Leave / Permissions / Comp-off regularization",
        "Backdated audit & history management",
      ],
    },
    {
      id: 4,
      icon: biometricLogo,
      title: "Biometric Device Integration",
      description:
        "Seamless biometric device integration with centralized data sync ensures real-time, accurate attendance and secure identity verification.",
      image: biometricImg,
      points: [
        "Integrated biometric attendance",
        "Face, Fingerprint & RFID sync",
        "Seamless device & system sync",
        "Access control integration",
      ],
    },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const active = slides[activeSlide];


  const testimonials = [
    {
      text: "The Febulas application is truly impressive. The concept of allowing staff members to mark their attendance directly from their mobile phones, along with integrated break features, is outstanding. The live tracking functionality adds even more value -truly a remarkable solution!",
      author: "BEST MONEY GOLD",
      logo: "bmg.png" // Optional: Replace with actual logo path or remove if not needed
    },
    {
      text: "I had an amazing experience with this company! The customer service was top-notch, and the product exceeded my expectations. I highly recommend them to anyone looking for quality products and excellent service.",
      author: "MANJU ASSOCIATIONS",
      // Optional: Replace with actual logo path or remove if not needed
    },
    {
      text: "We wish to voice our thoughts about NOQU. We've been using this for over a year, and it provides tracking information, site position, and other details. Numerous advancements are being made that provide exact information on what we require. Additionally, Mr.Dev and Mr.Mathesh, patiently answered all of my questions. We wish the team great success in future.",
      author: "HI TECH CONCRETE SOLUTIONS",
      logo: "hitech.png" // Optional: Replace with actual logo path or remove if not needed
    },
    {
      text: "We have been using the NOQU App for the past 3 months. This Mail is to drop a Feedback regarding the App & Customer Care Person at your end. Mr.Nandhakumar is more Responsive in Clearing all the doubts & picking the Calls with no delay. We are thankful in this regard and help us to Grow better.",
      author: "JAI SAKTHI BALAJI",
      // No logo provided, so it will be optional
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  function handlePrev() {
    setCurrentIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }

  function handleNext() {
    setCurrentIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }

  const [activeTab, setActiveTab] = useState("workflow");

  const tabs = [
    { id: "workflow", label: "Workflow", icon: workflowLogo, },
    { id: "roles", label: "Roles & Permissions", icon: rpLogo, },
    { id: "leave", label: "Leave & Holiday", icon: leaveLogo, },
    // { id: "hrms", label: "HRMS", icon: leaveLogo, },
    { id: "payroll", label: "Payroll", icon: payrollLogo, },
  ];

  const tabContent = {
    workflow: {
      title: "Workflow",
     
      paragraph:
        "No Qu modernized attendance requests with a smart automated flow across HR and reporting managers...",
      features: [
        "Leave & Permission Management",
        "Overtime & Comp-off Tracking",
        "Late Check-in & Week off Requests",
        "Automated Alerts, Approvals & Escalations",
      ],
      image: workflowImg,
    },
    roles: {
      title: "Roles & Permissions",
      
      paragraph:
        "No Qu ensures secure and structured access with role-based permissions...",
      features: [
        "Role-based Access Control",
        "Configurable User Permissions",
        "Secure Data Visibility",
        "Streamlined Approval Hierarchy",
      ],
      image: rpImg,
    },
    leave: {
      title: "Leave & Holiday Management",
      
      paragraph:
        "No Qu simplifies leave management with an intuitive and transparent process...",
      features: [
        "Holiday & Comp-off Customization",
        "Effortless Leave Approvals",
        "Employee Self-service Leave Tracking",
        "Transparent Leave Management",
      ],
      image: holidayImg,
    },
    // hrms: {
    //   title: "HRMS",
    //   icon:hrmsLogo,
    //   paragraph:
    //     "No Qu HRMS is an integrated platform designed to align attendance with every core HR function...",
    //   features: [
    //     "Recruitment",
    //     "Employee Self-service Portal",
    //     "Performance Management",
    //     "Asset Management",
    //   ],
    //   image: hrmsImg,
    // },
    payroll: {
      title: "Payroll",
      icon:payrollLogo,
      paragraph:
        "Manage payroll with ease using attendance-integrated automation...",
      features: [
        "Bank API Integration",
        "Salary Management",
        "Loans & Advances",
        "Tax Management",
      ],
      image: payrollImg,
    },
  };

  const currentTab = tabContent[activeTab];

  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const tabWidth = e.target.clientWidth;
    const activeIndex = Math.round(scrollLeft / tabWidth);
    if (activeIndex >= 0 && activeIndex < tabs.length) {
      setActiveTab(tabs[activeIndex].id);
    }
  };



  return (
    <div className="TAM_Homepage2_wrapper">
      {/* Hero Section */}
      <section className="TAM_Homepage2_hero">
        <div className="TAM_Homepage2_hero_container">
          <div className="TAM_Homepage2_hero_content">
            <h1 className="TAM_Homepage2_hero_title">
              The Smart AI-Powered Attendance Solution for the Modern Workforce
            </h1>
            <p className="TAM_Homepage2_hero_subtitle">
              Say to AI Efficiency, Punctuality, Attendance Efficiency and Streamlined Productivity
            </p>
            <div className="TAM_Homepage2_hero_buttons">
              <button className="TAM_Homepage2_btn_primary">Sign up for free trail</button>
              <button className="TAM_Homepage2_btn_secondary">Request Demo</button>
            </div>
          </div>
          <div className="TAM_Homepage2_hero_visual">
            <div className="TAM_Homepage2_hero_image_wrapper">
                <img src={tamBanner}/>
            </div>
          </div>
        </div>
      </section>

      <section className="TAM_Homepage2_trusted">
        <div className="TAM_Homepage2_trusted_container">
          <p className="TAM_Homepage2_trusted_label">Trusted by leading organizations</p>
          <div className="TAM_Homepage2_logos_grid">
            <img className='TAM_Homepage2_logo_item' src={client1} alt="" />
            <img className='TAM_Homepage2_logo_item' src={client2} alt="" />
            <img className='TAM_Homepage2_logo_item' src={client3} alt="" />
            <img className='TAM_Homepage2_logo_item' src={client4} alt="" />
            <img className='TAM_Homepage2_logo_item' src={client5} alt="" />
          </div>
        </div>
      </section>

      <div className="lp5-testimonials-title-wrapper" style={{ marginTop:'60px'}}>
        <h1 className="lp-5-awards-title">Our Features</h1>
      </div>

      <div className='TAM_Homepage2_slider1'>
        <div className="slider1-container">

          {/* TABS */}
          <div className="slider1-tabs-wrapper">
            <div className="slider1-tabs-flex">
              {slides.map((slide, index) => {
                const Icon = slide.icon;
                return (
                  <button
                    key={slide.id}
                    className={`slider1-tab ${activeSlide === index ? "active" : ""}`}
                    onClick={() => setActiveSlide(index)}
                  >
                    <img src={Icon} size={28} className="slider1-tab-icon" />
                    <span className="slider1-tab-title">{slide.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* CONTENT */}
          <div className="slider1-content">

            {/* LEFT IMAGE */}
            <div className="slider1-image-box">
              <img src={active.image} alt={active.title} className="slider1-image" />
            </div>

            {/* RIGHT TEXT CONTENT */}
            <div className="slider1-text-box">
              <h2 className="slider1-title">{active.title}</h2>
              <p className="slider1-description">{active.description}</p>

              {/* <ul className="slider1-points">
                {active.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul> */}
              <ul className="tam-hp-slider2-feature-list">
                {active.points.map((feat, index) => (
                  <li key={index} className="tam-hp-slider2-feature-item">
                    <span className="tam-hp-slider2-check">✓</span>
                    <span className="tam-hp-slider2-feature-text">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="TAM_homepage-section">
        <h2 className="TAM_homepage-stats-title">
          AI Attendance that grows with your business worldwide
        </h2>

        <a href="#" className="TAM_homepage-learnmore">Learn more</a>

        <div className="TAM_homepage-stats-container">
          <div className="TAM_homepage-stat-box">
            <h3 className="TAM_homepage-number TAM_homepage-blue">1000+</h3>
            <p className="TAM_homepage-caption">
              Serving diverse organizations with reliable solutions.
            </p>
          </div>

          <div className="TAM_homepage-stat-box">
            <h3 className="TAM_homepage-number TAM_homepage-green">30000+</h3>
            <p className="TAM_homepage-caption">
              Supporting professionals with seamless workforce management
            </p>
          </div>

          <div className="TAM_homepage-stat-box">
            <h3 className="TAM_homepage-number TAM_homepage-purple">12+</h3>
            <p className="TAM_homepage-caption">
              Extending trusted AI attendance across global markets.
            </p>
          </div>
        </div>
      </div>




      <div className="lp5-testimonials-title-wrapper">
        <h1 className="lp-5-awards-title">Testimonials</h1>
      </div>
      <section className="lp-5-main-content-section">
        <div className="lp-5-main-content-card">
          <div className="lp-5-decorative-circles">
            <div className="lp-5-circle lp-5-circle-1"></div>
            <div className="lp-5-circle lp-5-circle-2"></div>
            <div className="lp-5-circle lp-5-circle-3"></div>
            <div className="lp-5-circle lp-5-circle-4"></div>
          </div>

          <div className="lp-5-testimonial-wrapper">
            <button className="lp-5-testimonial-nav lp-5-prev" onClick={handlePrev}>
              ‹
            </button>

            <div className="lp-5-testimonial-content">
              {testimonials[currentIndex].logo && (
                <img
                  src={testimonials[currentIndex].logo}
                  alt="Company Logo"
                  className="lp-5-testimonial-logo"
                />
              )}
              <p className="lp-5-testimonial-text">
                {testimonials[currentIndex].text}
              </p>
              <h4 className="lp-5-testimonial-author">
                {testimonials[currentIndex].author}
              </h4>
            </div>

            <button className="lp-5-testimonial-nav lp-5-next" onClick={handleNext}>
              ›
            </button>
          </div>
        </div>
      </section>

      <div className='TAM_Homepage2_slider2'>
        <div className="tam-hp-slider2-container">

          <div className="tam-hp-slider2-hero">
            <h1 className="tam-hp-slider2-title">
              From Clock-Ins to Reports <br /> Your Workforce Simplified
            </h1>
          </div>

          <div
            className="tam-hp-slider2-tabs"
            onScroll={handleScroll}
          >
            {tabs.map((tab) => {
              // const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`tam-hp-slider2-tab ${activeTab === tab.id ? "tam-hp-slider2-tab-active" : ""
                    }`}
                >
                  <img src={tab.icon} />
                  {/* <IconComponent className="tam-hp-slider2-tab-icon" size={26} /> */}
                  <span className="tam-hp-slider2-tab-label">{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="tam-hp-slider2-content">

            <div className="tam-hp-slider2-features">
              <h2 className="tam-hp-slider2-section-title">{currentTab.title}</h2>
              <p className="tam-hp-slider2-paragraph">{currentTab.paragraph}</p>

              <ul className="tam-hp-slider2-feature-list">
                {currentTab.features.map((feat, index) => (
                  <li key={index} className="tam-hp-slider2-feature-item">
                    <span className="tam-hp-slider2-check">✓</span>
                    <span className="tam-hp-slider2-feature-text">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="tam-hp-slider2-image-wrap">
              <img
                src={currentTab.image}
                alt={currentTab.title}
                className="tam-hp-slider2-image"
              />
            </div>

          </div>
        </div>
      </div>
      <div className="tam-homepage2-awards">
        <div className="lp5-testimonials-title-wrapper">
          <h1 className="lp-5-awards-title">Our Awards & Recognitions</h1>
        </div>
        <section className="lp-5-awards-section">
          <div className="lp-5-awards-container">
            <div className="lp-5-awards-list">
              <img src={award2} alt="Award 2" className="lp-5-award-image" />
              <img src={award3} alt="Award 3" className="lp-5-award-image" />
              <img src="https://www.softwaresuggest.com/award_logo/highly-recommended-winter-2024.png" alt="Award 4" className="lp-5-award-image" />
            </div>
          </div>
        </section>
        <section className="lp-5-awards-section">
          <div className="lp-5-awards-container">
            <h2 className="tam-homepage-awards-title">We're leading the competition in every category</h2>
            <div className="lp-5-awards-list">
              <div className="tam-award-box">
                <img src={google} alt="Google" />
                <div className="tam-rating-box">
                  <img src={star1} alt="Star" className="tam-star-image" />
                  <img src={star1} alt="Star" className="tam-star-image" />
                  <img src={star1} alt="Star" className="tam-star-image" />
                  <img src={star1} alt="Star" className="tam-star-image" />
                  <img src={star2} alt="Star" className="tam-star-image" />
                </div>
              </div>
              <div className="tam-award-box">
                <img src={playstore} alt="Play Store" />
                <div className="tam-rating-box">
                  <img src={star1} alt="Star" className="tam-star-image" />
                  <img src={star1} alt="Star" className="tam-star-image" />
                  <img src={star1} alt="Star" className="tam-star-image" />
                  <img src={star1} alt="Star" className="tam-star-image" />
                  <img src={star2} alt="Star" className="tam-star-image" />
                </div>
              </div>

              <div className="tam-award-box">
                <img src={appstore} alt="App Store" />
                <div className="tam-rating-box">
                  <img src={star1} alt="Star" className="tam-star-image" />
                  <img src={star1} alt="Star" className="tam-star-image" />
                  <img src={star1} alt="Star" className="tam-star-image" />
                  <img src={star1} alt="Star" className="tam-star-image" />
                  <img src={star2} alt="Star" className="tam-star-image" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="feature-section">

        <div className="tam-homepage2-wrapper">

          <h2 className="tam-homepage2-title">
            Trusted Attendance <br /> for Modern Teams
          </h2>

          <p className="tam-homepage2-subtitle">
            No Qu TAM is a trusted AI-powered attendance system that ensures
            accuracy and compliance for every business. Built on a cloud-based
            attendance platform, it delivers real-time attendance tracking.
            With enterprise-grade protection and transparency, it is the most
            reliable choice for smart attendance management.
          </p>
          <h3 className="lp-5-awards-title" style={{ fontSize: '22px', marginBottom: '10px', color: '#ffbb08' }}>
            Simpler, Stronger, Together
          </h3>
          <p className="tam-homepage2-subtitle">
            No Qu TAM brings everything together in one place, making work easier,
            faster, and more organized.
          </p>

          <div className="lp5-testimonials-title-wrapper" style={{ margin: '30px 0px', fontSize: '22px' }}>
            <h1 className="lp-5-awards-title" style={{ fontSize: '30px' }}>Other Features</h1>
          </div>
          <div className="tam-homepage2-container">
            {features.map((f, i) => (
              <div key={i} className="tam-homepage2-card" aria-labelledby={`feat-${i}-title`}>
                <div className="tam-homepage2-card-inner">

                  {/* ICON / IMAGE (absolutely positioned for smooth corner transition) */}
                  <div className="tam-homepage2-image-wrapper">
                    <img src={f.image} alt={f.title} className="tam-homepage2-image" />
                  </div>

                  {/* HEADER: title sits below image initially; moves beside image on hover */}
                  <div className="tam-homepage2-header">
                    <h3 id={`feat-${i}-title`} className="tam-homepage2-feature-title">{f.title}</h3>
                  </div>

                  {/* BODY: description + bullets (hidden initially, revealed on hover) */}
                  <div className="tam-homepage2-body">
                    <p className="tam-homepage2-feature-desc">{f.description}</p>

                    <ul className="tam-homepage2-feature-points">
                      {f.points.map((p, idx) => (
                        <li key={idx} className="tam-homepage2-point-item"><span style={{ fontWeight: 600, color: '#ffbb08', fontSize: '20px', marginRight: '6px' }}>-</span> {p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="tam-hp2-business-section">
  <h2 className="tam-hp2-business-title">Optimized for Business Success</h2>

  <div className="tam-hp2-business-grid">
    <div className="tam-hp2-business-item">
      <div className="tam-hp2-business-icon tam-hp2-business-icon-orange"><img src={userFriendly} width={35}/></div>
      <h3 className="tam-hp2-business-item-title">User-friendly</h3>
      <p className="tam-hp2-business-item-desc">
        Simple to use with an intuitive design that makes adoption quick and easy.
      </p>
    </div>

    <div className="tam-hp2-business-item">
      <div className="tam-hp2-business-icon tam-hp2-business-icon-orange"><img src={highlySecure} width={35}/></div>
      <h3 className="tam-hp2-business-item-title">Highly Secure</h3>
      <p className="tam-hp2-business-item-desc">
        Enterprise-grade security ensures data privacy, compliance, and complete protection.
      </p>
    </div>

    <div className="tam-hp2-business-item">
      <div className="tam-hp2-business-icon tam-hp2-business-icon-orange"><img src={scalable} width={35}/></div>
      <h3 className="tam-hp2-business-item-title">Scalable</h3>
      <p className="tam-hp2-business-item-desc">
        Adapts effortlessly to businesses of any size, from startups to large enterprises.
      </p>
    </div>

    <div className="tam-hp2-business-item">
      <div className="tam-hp2-business-icon tam-hp2-business-icon-orange"><img src={reliable} width={35}/></div>
      <h3 className="tam-hp2-business-item-title">Reliable</h3>
      <p className="tam-hp2-business-item-desc">
        Delivers accurate, real-time attendance and workforce insights you can trust.
      </p>
    </div>
  </div>
</div>

        <section className="lp-5-cta-section">
          <div className="lp-5-cta-content">
            <div className="lp-5-cta-left">
              <h2 className="lp-5-cta-title">Manage Your Workforce From Anywhere</h2>
              <p className="lp-5-cta-description">
                Handle attendance, leaves, and employee activities right from your mobile. No Qu TAM helps you manage workforce operations efficiently from real-time attendance tracking to leave monitoring all in one powerful mobile app.
              </p>

              <div className="lp-5-app-download">
                <h3 className="lp-5-app-download-title">Get the App</h3>
                <div className="lp-5-store-badges">
                  <img src={playStore} alt="Play Store" />
                  <img src={appStore} alt="App Store" />
                </div>
                <div className="lp-5-call">
                  <p className="lp-5-call-text">Need Help? Call Us Now:</p>
                  <a href="callto:+91 7401600600"><button><img src={call} width={25} /><p>+91 7401 600 600</p></button></a>
                </div>
              </div>
            </div>

            <div className="lp-5-cta-right">
              <img className="lp-5-cta-image" src={CTA} alt="No Qu TAM App" />
            </div>

          </div>
        </section>
      </div>
      <footer className="lp-5-footer-section">
        <div className="lp-5-footer-container">
          <div className="lp-5-footer-copyright">© 2025 Noqu - All Rights Reserved</div>
          <div className="lp-5-footer-links">
            <a href="/privacy-policy" target='blank' className="lp-5-footer-link">Terms of use</a>
            <a href="/terms-and-conditions" target='blank' className="lp-5-footer-link">Privacy policy</a>
          </div>

        </div>
      </footer>
    </div>
  );
}