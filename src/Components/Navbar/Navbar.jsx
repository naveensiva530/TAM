import React, { useEffect, useLayoutEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import call from '../../assets/call.png';
import { Link } from 'react-router-dom';
import Navbar_mobile from './Navbar_mobile';
import TAM_mobile_nav from './TAM_mobile_nav';
import { useLocation } from 'react-router-dom';
import TAM_form from '../../Containers/RegForms/TAM_form';
import logo2 from '../../assets/logo2.png';

const Navbar = () => {
  const [navbar, setNavbar] = useState(<Navbar_mobile />);
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [tamVisible, setTamVisible] = useState(true);
  const [isSticky, setIsSticky] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const tamPaths = [
    '/tam-time-and-attendance-management',
    '/tam-support',
    '/tam-casestudies',
    '/tam-pricing',
    '/health-care-industry',
    '/financial-institutions',
    '/supply-chain-and-logistics-industry',
    '/construction-industry',
    '/manpower-and-staffing-industry',
    '/retail-chain',
    '/manufacturing-industry',
    '/multichannel',
    '/livetracking',
    '/regularization',
    '/biometric',
    '/workflow',
    '/roles_permission',
    '/leave_holiday',
    '/shif_management',
    '/hrms',
    '/payroll',
   
  ];
  
  const isTamPage = tamPaths.includes(location.pathname);

  const navbarComponents = {
    '/tam-time-and-attendance-management': <TAM_mobile_nav />,
    '/tam-support': <TAM_mobile_nav />,
    '/tam-casestudies': <TAM_mobile_nav />,
    '/tam-pricing': <TAM_mobile_nav />,
    '/health-care-industry': <TAM_mobile_nav />,
    '/financial-institutions': <TAM_mobile_nav />,
    '/supply-chain-and-logistics-industry': <TAM_mobile_nav />,
    '/construction-industry': <TAM_mobile_nav />,
    '/manpower-and-staffing-industry': <TAM_mobile_nav />,
    '/retail-chain': <TAM_mobile_nav />,
    '/manufacturing-industry': <TAM_mobile_nav />,
    '/multichannel': <TAM_mobile_nav />,
    '/livetracking': <TAM_mobile_nav />,
    '/regularization': <TAM_mobile_nav />,
     '/biometric': <TAM_mobile_nav />,
      '/workflow': <TAM_mobile_nav />,
        '/roles_permission': <TAM_mobile_nav />,
        '/leave_holiday':<TAM_mobile_nav/>,
        '/shif_management':<TAM_mobile_nav/>,
         '/hrms':<TAM_mobile_nav/>,
         '/payroll':<TAM_mobile_nav/>,
    
  };

  useLayoutEffect(() => {
    const currentPath = location.pathname;
    const navbarComponent = navbarComponents[currentPath] || <Navbar_mobile />;
    setNavbar(navbarComponent);
  }, [location.pathname]);

  const handleTamScroll = () => {
    if (!isTamPage) return;
    const currentScrollY = window.scrollY;
    const isMobile = window.innerWidth <= 780;

    if (isMobile) {
      setTamVisible(currentScrollY <= 10);
      setIsSticky(false);
    } else {
      setTamVisible(currentScrollY <= 10);
      setIsSticky(currentScrollY >= 100);
    }
  };

  useEffect(() => {
    if (isTamPage) {
      window.addEventListener('scroll', handleTamScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleTamScroll);
    }
  }, [isTamPage]);

  return (
    <>
      {!isTamPage ? (
        /* ── Standard Navbar ── */
        <div className="navbar">
          <div className="navbar-links">
            <div className="navbar-logo-and-links">
              <div className='navbar-links_logo'>            
                <Link to="/home"><img src={logo} alt="logo" /></Link>
              </div>
              <div className='navbar-links_container'>
                <ul>
                  <li><p><Link to="/home">Home</Link></p></li>
                  <li className='Navbar_product'>
                    <p><Link to="#">Products</Link></p>
                    <div className='Navbar_product_list'>
                      <ul className="Navbar_product_list_dropdown">
                        <li style={{marginLeft:"0px"}}>
                          <Link to="#">NoQu Office</Link>
                          <ul className="Navbar_product_dropdown">
                            <li><Link to="/tam-time-and-attendance-management">TAM(Time And Attendence Management)</Link></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className='Navbar_company'>
                    <p><Link to="#">Company</Link></p>
                    <ul className="Navbar_company_dropdown">
                      <Link to="/about-us"><li>AboutUs</li></Link>
                      <Link to="/news"><li>News</li></Link>
                      <Link to="/awards"><li>Awards</li></Link>
                      <Link to="/career"><li>Career</li></Link>
                      <Link to="/contact"><li>Contact</li></Link>
                    </ul>
                  </li>
                  <li><p><Link to="/channel-partner">Channel Partner</Link></p></li>
                </ul>
              </div>
            </div>
            <div className="navbar-demo scale-hover">
              <a href="callto:+91 7401600600">
                <button><img src={call} width={25} alt="call" /><p>+91 7401 600 600</p></button>
              </a>
            </div>
          </div>
          <div className="navbar-menu-wraper">
            <div className="navbar-menu">{navbar}</div>
          </div>
        </div>

      ) : (
        /* ── TAM Page Layout ── */
        <>
          {/* ── SECOND NAVBAR ── */}
          <div className={`tam-navbar-extension ${tamVisible ? 'slide-down' : 'slide-up'}`}>
            <div className="tam-navbar-container">

              {/* Logo — left (desktop + mobile) */}
              <div className="tam-nav-logo">
                <Link to="/home"><img src={logo} width={75} alt="logo" /></Link>
              </div>

              {/* Desktop: center nav links */}
              <div className="tam-navbar-links">
                <h5><Link to="/tam-time-and-attendance-management">Home</Link></h5>
                <div className="tam-navbar-features">
                  <h5>Features</h5>
                  <ul className="tam-navbar-features-dropdown">
                    <li><Link to="/multichannel">Multi-Channel Attendance</Link></li>
                    <li><Link to="/livetracking">Live Tracking</Link></li>
                    <li><Link to="/regularization">Regularization</Link></li>
                    <li><Link to="/biometric">Biometric Device Integration</Link></li>
                    <li><Link to="/workflow">Workflow</Link></li>
                    <li><Link to="/roles_permission">Roles & Permission</Link></li>
                    <li><Link to="/leave_holiday">Leave & Holiday Management</Link></li>
                    <li><Link to="/shif_management">Shift Management</Link></li>
                    <li><Link to="/hrms">HRMS</Link></li>
                    <li><Link to="/payroll">Payroll</Link></li>
                  </ul>
                </div>
                <h5><Link to="/tam-pricing">Pricing</Link></h5>
                <h5><Link to="/tam-support">Support</Link></h5>
                <h5><Link to="/tam-casestudies">Case Studies</Link></h5>
              </div>

              {/* Desktop: call button — right */}
              <div className="scale-hover tam-nav-call">
                <a href="callto:+91 7401600600" style={{textDecoration:'none'}}>
                  <button style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    backgroundColor: '#27375d', border: 'none', color: 'white',
                    fontSize: '14px', fontWeight: '700',
                    padding: '10px 20px', borderRadius: '10px', cursor: 'pointer'
                  }}>
                    <img src={call} width={25} alt="call icon" />
                    <p style={{ margin: 0, color: 'white' }}>+91 7401 600 600</p>
                  </button>
                </a>
              </div>

              {/* Mobile: hamburger — right side INSIDE second navbar */}
              <div className="tam-mobile-menu-btn">
                {navbar}
              </div>

            </div>
          </div>

          {/* ── THIRD NAVBAR ──
            
          */}
          <div
            className={`third-nav-wrapper ${!tamVisible ? 'second-nav-hidden' : ''}`}
            style={{ marginTop: '100px', position: 'relative' }}
          >
            <div className={`third-navbar-extension ${isSticky ? 'sticky-top' : ''} ${isSticky ? 'scrolled-shadow' : ''}`}>
              <div className="third-navbar-container">
                <Link to="/tam-time-and-attendance-management" className="third-navbar-brand">
                  <img src={logo2} alt="sub-logo" />
                  <span className="brand-name">
                    <span className="brand-green">Time and Attendance </span>
                    <span className="brand-blue">Management App</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>

        </>
      )}

      <TAM_form isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Navbar;
