import React, { useState } from 'react';
import "./TAM_Footer.css";
import logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';
import ScheduleAdemo from '../../../Containers/RegForms/ScheduleAdemo';

/* ── Inline SVG icons — clean, no background baked in ── */
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TAM_Footer = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert('Subscribed successfully');
      setEmail('');
      setLoading(false);
    }, 1200);
  };

  return (
    <footer className="tam2-Footer">
      <div className="tam2-Footer-container">

        {/* LOGO */}
        <div className="tam2-Footer-logo">
          <Link to="/home">
            <img src={logo} alt="NoQu Logo" />
          </Link>
        </div>

        {/* COLUMNS */}
        <div className="tam2-Footer-grid">

          <div className="tam2-Footer-column">
            <h5>Company</h5>
            <Link to="/about-us">About</Link>
            <Link to="/career">Careers</Link>
            <Link to="/news">News</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/awards">Awards</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="tam2-Footer-column">
            <h5>Product</h5>
            <span className="tam2-muted-text">NoQu Office</span>
            <Link to="/tam-time-and-attendance-management" className="tam2-product-sub-link">Time and Attendance Management App</Link>
          </div>

          <div className="tam2-Footer-column">
            <h5>Sales & Support</h5>
            <Link to="/schedule-a-demo">Schedule A Demo</Link>
            <Link to="/tam-support">Support</Link>
          </div>

          <div className="tam2-Footer-column">
            <h5>Partners</h5>
            <Link to="/channel-partner">Channel Partners</Link>
          </div>

          <div className="tam2-Footer-column tam2-newsletter-col">
            <h5>News Letters</h5>
            <p className="tam2-muted">Subscribe for the latest updates.</p>

            <form className="tam2-Footer-newsletter" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">
                {loading ? '...' : 'Subscribe'}
              </button>
            </form>

            {/* SOCIAL ICONS — single clean circle, brand color on hover */}
            <div className="tam2-social-container">
              <a
                href="https://www.facebook.com/NoQuOffice"
                target="_blank"
                rel="noreferrer"
                className="tam2-social-link facebook"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>

              <a
                href="https://x.com/noqutech"
                target="_blank"
                rel="noreferrer"
                className="tam2-social-link twitter"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </a>

              <a
                href="https://www.instagram.com/noqu.official"
                target="_blank"
                rel="noreferrer"
                className="tam2-social-link instagram"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>

              <a
                href="https://www.youtube.com/@NoquTechSolutions"
                target="_blank"
                rel="noreferrer"
                className="tam2-social-link youtube"
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </a>

              <a
                href="https://www.linkedin.com/company/noqutechsolutions"
                target="_blank"
                rel="noreferrer"
                className="tam2-social-link linkedin"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
            </div>

          </div>
        </div>
      </div>

      <div className="tam2-Footer-bottom">
        <p>© NoQu. All rights reserved.</p>
        <div className="tam2-Footer-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <span>|</span>
          <Link to="/terms-and-conditions">Terms & Conditions</Link>
        </div>
      </div>

      <ScheduleAdemo isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </footer>
  );
};

export default TAM_Footer;
