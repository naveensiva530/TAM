import React, { useEffect, useState } from 'react';
import "./TAM_Footer.css";
import logo from '../../../assets/logo.png';
// import facebook from '../../assets/facebook.png';
// import instagram from '../../assets/instagram.png';
// import twitter from '../../assets/twitter.png';
// import youtube from '../../assets/youtube.png';
// import linkedin from '../../assets/linkedin.png';
import { Link } from 'react-router-dom';
import ScheduleAdemo from '../../../Containers/RegForms/ScheduleAdemo';

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
            <img src={logo} alt="NoQu" />
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
            <span className="muted">NoQu Office</span>
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

          <div className="tam2-Footer-column tam2-newsletter">
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
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
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
