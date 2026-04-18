import React, { useState } from 'react';
import './lp.css';
import star1 from '../../assets/Star1.png';
import star2 from '../../assets/Star2.png';
import google from '../../assets/google.png';
import client1 from '../../assets/client1.png';
import client2 from '../../assets/client2.png';
import client3 from '../../assets/client3.png';
import client4 from '../../assets/client4.png';
import client5 from '../../assets/client5.png';
import client6 from '../../assets/client6.png';
import icon1 from '../../assets/Lp-feature-icon-1.png';
import icon2 from '../../assets/Lp-feature-icon-2.png';
import icon3 from '../../assets/Lp-feature-icon-3.png';
import icon4 from '../../assets/Lp-feature-icon-4.png';
import icon5 from '../../assets/Lp-feature-icon-5.png';
import icon6 from '../../assets/Lp-feature-icon-6.png';
import icon7 from '../../assets/Lp-icon-7.png';
import payroll from '../../assets/lp-payroll.png';
import hr from '../../assets/lp-hr.png';
import erp from '../../assets/lp-erp.png';
import circle from '../../assets/circle-icon.png';
import CTA from '../../assets/Lp-cta.png';
import playStore from '../../assets/Store-badge.png';
import appStore from '../../assets/Store-badge2.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const LandingPage = () => {

  const [fullName, setFullName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const showform = () => {   
            window.scrollTo(0, 0);
        }
  // Client logos data
  const clientLogos = [
    { src: client1, alt: "Client logo", className: "client-logo-1" },
    { src: client2, alt: "Client logo", className: "client-logo-2" },
    { src: client3, alt: "Client logo", className: "client-logo-3" },
    { src: client4, alt: "Client logo", className: "client-logo-4" },
    { src: client5, alt: "Client logo", className: "client-logo-5" },
    { src: client6, alt: "Client logo", className: "client-logo-6" },
  ];

  // Feature cards data
  const featureCards = [
    {
      title: "Smart Attendance",
      description: "AI-powered attendance tracking with facial recognition and geolocation verification.",
      icon: icon1,
    },
    {
      title: "Live Tracking",
      description: "Real-time monitoring of employee presence with instant notifications and alerts.",
      icon: icon2,
    },
    {
      title: "Shift Management",
      description: "Real-time monitoring of employee presence with instant notifications and alerts.",
      icon: icon3,
    },
    {
      title: "Leave Management",
      description: "Streamlined leave requests, approvals, and balance tracking in one place.",
      icon: icon4,
    },
    {
      title: "Report Schedulers",
      description: "Automated report generation and delivery with customizable schedules.",
      icon: icon5,
    },
    {
      title: "User Rights & Control",
      description: "Granular permission management with role-based access control.",
      icon: icon6,
    },
    {
      title: "Regularization",
      description: "Easy attendance correction and regularization with approval workflows",
      icon: icon7,
    },
  ];

  // FAQ data
  const faqItems = [
    { question: "What is No Qu TAM?", answer: "No Qu TAM is an AI-powered attendance and workforce management system that helps track employee time, leaves, and productivity in real time." },
    { question: "What kind of support does No Qu offer?", answer: "We provide dedicated support via phone, email, and chat, with response times typically within 1 minute for chat assistance." },
    { question: "How does No Qu TAM help with payroll?", answer: "No Qu TAM - Time and Attendance Management auto-syncs attendance, leave, and shift data with your payroll system, ensuring accurate calculations and error-free salary processing." },

  ];

  const formData = {
    fullName,
    countryCode,
    phoneNo,
    email,
    city,
    message,
  };

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSending(true);


    // Send the form data to the backend API
    axios.post('https://app.noqu.in/api/ig-form', formData)
      //   axios.post('http://localhost:3004/api/ig-form', formData)
      .then((_response) => {
        // navigate('/LP_Submit');
        console.log("Email sent successfully")
        setIsSending(false);
        navigate('/Submit');
        // setIsSubmitted(true)
      })
      .catch((error) => {
        navigate('/submit-fail');
        console.error(error);
        setIsSending(false);

      });
  };

  const [openFaq, setOpenFaq] = React.useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="landing-page">
      {/* Header Section */}
      <section className="header-section">
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="hero-title">
              The smartest AI Powered Attendance Solution
            </h1>
            <p className="hero-description">
              Manage attendance process, empower teams, and scale productivity with No Qu TAM
            </p>
            {/* <div className="hero-buttons">
              <button className="btn-primary">Book a Free Demo</button>
              <button className="btn-secondary">Schedule Now</button>
            </div> */}
            <div className="rating-badge">
              {/* <img className="rating-bg" alt="Rectangle" src="/rectangle-3465773.svg" /> */}
              <img className="rating-avatar" alt="Element b" src={google} />
              <div className="rating-stars">
                <img className="star" alt="Star" src={star1} />
                <img className="star" alt="Star" src={star1} />
                <img className="star" alt="Star" src={star1} />
                <img className="star" alt="Star" src={star1} />
                <img className="star" alt="Star" src={star2} />
              </div>
              <div className="rating-text">4.9 rating on Google</div>
            </div>
          </div>

          <div className="hero-form-card">
            <form onSubmit={handleSubmit}>
              <div className="form-container">
                <h1>Book a Demo</h1>
                <div className="form-field">
                  <input type="text"
                    id="name"
                    className="form-input"
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                    required placeholder=" " />
                  <label htmlFor="name" className="floating-label">Name</label>
                </div>

                <div className="form-field">
                  <input type="tel"
                    id="phone"
                    className="form-input"
                    placeholder=" "
                    value={phoneNo}
                    onChange={(event) => {
                      const onlyDigits = event.target.value.replace(/\D/g, '');
                      if (onlyDigits.length <= 10) {
                        setPhoneNo(onlyDigits);
                      }
                    }}
                    maxLength={10}
                    required
                  />
                  <label htmlFor="phone" className="floating-label">Phone</label>
                </div>

                <div className="form-field">
                  <input
                    type="email"
                    id="email"
                    className="form-input"
                    placeholder=" "
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  <label htmlFor="email" className="floating-label">Email <span className="optional">(Optional)</span></label>
                </div>

                <div className="form-field">
                  <input
                    type="text"
                    id="city"
                    className="form-input"
                    placeholder=" "
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                  />
                  <label htmlFor="city" className="floating-label">City</label>
                </div>

                <div className="form-field">
                  <textarea
                    id="message"
                    className="form-textarea"
                    placeholder=" "
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                  ></textarea>
                  <label htmlFor="message" className="floating-label textarea-label">Message</label>
                </div>
                <button disabled={isSending} className="form-submit-btn">{isSending ? 'Submitting...' : 'Submit'}</button>
              </div>
            </form>
          </div>
        </div>

      </section>

      {/* Client Logos Section */}
      <div className="client-logos-section">
        <div className="client-logos-container">
          <div className="separator"></div>

          <div className="client-logos-marquee">
            <div className="client-logos-track">
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <img
                  key={`client-logo-${index}`}
                  className={`client-logo ${logo.className}`}
                  alt={logo.alt}
                  src={logo.src}


                />
              ))}
            </div>
          </div>

          <div className="separator"></div>
        </div>
      </div>



      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <div className="features-card-wrapper">
            <div className="features-header">
              <h2 className="features-title">
                Everything You Need To Manage Your Workforce Efficiently
              </h2>
            </div>

            <div className="features-grid">
              {/* First row */}
              <div className="features-row">
                {featureCards.slice(0, 3).map((card, index) => (
                  <div key={`feature-card-${index}`} className={`feature-card`}>

                    <div className="feature-content">
                      <div className="feature-icon-wrapper">
                        <img className="feature-icon" alt={card.title} src={card.icon} />
                      </div>
                      <div className="feature-text">
                        <div className="feature-title">{card.title}</div>
                        <div className="feature-description">{card.description}</div>
                      </div>
                    </div>


                  </div>
                ))}
              </div>

              {/* Second row */}
              <div className="features-row">
                {featureCards.slice(3, 6).map((card, index) => (
                  <div key={`feature-card-${index + 3}`} className="feature-card">
                    <div className="feature-content">
                      <div className="feature-icon-wrapper">
                        <img className="feature-icon" alt={card.title} src={card.icon} />
                      </div>
                      <div className="feature-text">
                        <div className="feature-title">{card.title}</div>
                        <div className="feature-description">{card.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Third row */}
              <div className="features-row">
                <div className="feature-card">
                  <div className="feature-content">
                    <div className="feature-icon-wrapper">
                      <img className="feature-icon" alt="Product request" src={icon7} />
                    </div>
                    <div className="feature-text">
                      <div className="feature-title">Regularization</div>
                      <div className="feature-description">
                        Easy attendance correction and regularization with approval workflows
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="main-content-section">
        <div className="main-content-card">
          <div className="decorative-circles">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
            <div className="circle circle-4"></div>
          </div>

          <div className="main-content-wrapper">
            <div className="main-content-left">
              <h2 className="main-content-title">
                Start Transforming Today For Better Productivity
              </h2>
            </div>

            <div className="main-content-right">
              <p className="main-content-description">
                Schedule a free demo with our team and see how No Qu TAM fits your business needs perfectly.
              </p>
              <button onClick={showform} className="explore-btn">Explore Now →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="trust-section">
        <div className="trust-content">
          <div className="trust-text">
            <h2>Why Businesses Trust No Qu TAM</h2>
            <p>
              Experience the difference with our cutting-edge integrations and customizable solutions
            </p>
          </div>

          <div className="trust-cards">

            <div className="trust-cards-wraper">
              <div className="trust-card trust-card-1">
                <div className="trust-card-body">
                  <img src={erp} className='trust-card-icon icon-blue' />
                  <h3>ERP Integration</h3>
                  <p>Seamlessly connects with your existing ERP systems for unified data flow.</p>
                </div>
              </div>

              <div className="trust-card trust-card-2">
                <div className="trust-card-body">
                  <img src={hr} className='trust-card-icon icon-yellow' />
                  <h3>HRMS Integration</h3>
                  <p>Full compatibility with popular HRMS platforms for streamlined operations.</p>
                </div>
              </div>
            </div>
            <div className="trust-card trust-card-3">
              <div className="trust-card-body">
                <img src={payroll} className='trust-card-icon icon-green' />
                <h3>Customize your Payroll</h3>
                <p>Flexible payroll processing with custom rules and automated calculations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-left">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <p className="faq-subtitle">
              Got questions? We've got answers to help you get started with No Qu TAM.
            </p>
          </div>

          <div className="faq-right">
            <div className="faq-accordion">
              {faqItems.map((item, index) => (
                <div key={`faq-${index}`} className="faq-item">
                  <button
                    className="faq-trigger"
                    onClick={() => toggleFaq(index)}
                  >
                    {item.question}
                    <span className={`faq-icon ${openFaq === index ? 'open' : ''}`}>+</span>
                  </button>
                  {openFaq === index && (
                    <div className="faq-content">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-content">
          <div className="cta-left">
            <h2 className="cta-title">Manage Your Workforce From Anywhere</h2>
            <p className="cta-description">
              Handle attendance, leaves, and employee activities right from your mobile. No Qu TAM helps you manage workforce operations efficiently from real-time attendance tracking to leave monitoring all in one powerful mobile app.
            </p>

            <div className="app-download">
              <h3 className="app-download-title">Get the App</h3>
              <div className="store-badges">
                <img src={playStore} alt="Play Store" />
                <img src={appStore} alt="App Store" />
              </div>
            </div>
          </div>

          <div className="cta-right">
            <img className="cta-image" src={CTA} alt="No Qu TAM App" />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-copyright">© 2025 Noqu - All Rights Reserved</div>
          <div className="footer-links">
            <a href="/privacy-policy" target='blank' className="footer-link">Terms of use</a>
            <a href="/terms-and-conditions" target='blank' className="footer-link">Privacy policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
