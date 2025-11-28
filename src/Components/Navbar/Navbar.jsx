import React, { useEffect, useLayoutEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import call from '../../assets/call.png';
import { Link } from 'react-router-dom';
import Navbar_mobile from './Navbar_mobile';
import TAM_mobile_nav from './TAM_mobile_nav';
import { useLocation } from 'react-router-dom';
import TAM_form from '../../Containers/RegForms/TAM_form';  // Added for modal

const Navbar = () => {
  const [navbar, setNavbar] = useState(<Navbar_mobile />);
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);  // Added for modal
  const [tamVisible, setTamVisible] = useState(true);  // For TAM extension visibility
  const [tamLastScrollY, setTamLastScrollY] = useState(0);  // For TAM extension scroll tracking

  const openModal = () => setIsModalOpen(true);  // Added for modal
  const closeModal = () => setIsModalOpen(false);  // Added for modal

  // Define TAM paths (matches your navbarComponents)
  const tamPaths = [
    '/tam-time-and-attendance-management',
    '/tam-support',
    '/tam-casestudies',  // Note: Your navbarComponents has '/tam-caseStudies' – ensure consistency in your routes
    '/tam-pricing',
    '/health-care-industry',
    '/financial-institutions',
    '/supply-chain-and-logistics-industry',
    '/construction-industry',
    '/manpower-and-staffing-industry',
    '/retail-chain',
    '/manufacturing-industry',
  ];
  const isTamPage = tamPaths.includes(location.pathname);

  const navbarComponents = {
    '/tam-time-and-attendance-management': <TAM_mobile_nav />,
    '/tam-support': <TAM_mobile_nav />,
    '/tam-caseStudies': <TAM_mobile_nav />,  // Ensure this matches your route
    '/tam-pricing': <TAM_mobile_nav />,
    '/health-care-industry': <TAM_mobile_nav />,
    '/financial-institutions': <TAM_mobile_nav />,
    '/supply-chain-and-logistics-industry': <TAM_mobile_nav />,
    '/construction-industry': <TAM_mobile_nav />,
    '/manpower-and-staffing-industry': <TAM_mobile_nav />,
    '/retail-chain': <TAM_mobile_nav />,
    '/manufacturing-industry': <TAM_mobile_nav />,
  };

  useLayoutEffect(() => {
    const currentPath = location.pathname;
    const navbarComponent = navbarComponents[currentPath] || <Navbar_mobile />;
    setNavbar(navbarComponent);
  }, [location.pathname]);

  // Scroll handler for TAM extension (only on TAM pages)
  const handleTamScroll = () => {
    if (!isTamPage) return;  // Only apply on TAM pages
    const currentScrollY = window.scrollY;
    if (currentScrollY > tamLastScrollY && currentScrollY > 50) {
      // Scrolling down
      setTamVisible(false);
    } else {
      // Scrolling up
      setTamVisible(true);
    }
    setTamLastScrollY(currentScrollY);
  };

  useEffect(() => {
    if (isTamPage) {
      window.addEventListener('scroll', handleTamScroll);
      return () => {
        window.removeEventListener('scroll', handleTamScroll);
      };
    }
  }, [isTamPage, tamLastScrollY]);

  return (
    <>
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
                          {/* <li><Link to="/scan-homepage">NoQu Scan</Link></li> */}
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
            <a href="callto:+91 7401600600"><button><img src={call} width={25} /><p>+91 7401 600 600</p></button></a>
          </div>
        </div>
        <div className="navbar-menu-wraper">
          <div className="navbar-menu">
            {navbar}
          </div>
        </div>
      </div>

      {/* TAM Extension: Only render for TAM pages on desktop */}
      {isTamPage && (
        <div className={`tam-navbar-extension ${tamVisible ? 'slide-down' : 'slide-up'}`}>
          <div className="tam-navbar-container">
            <div className="tam-navbar-links">
              <h5><Link to="/home">Product Home</Link></h5>
              <div className="tam-navbar-features">
                <h5>Features</h5>
                <ul className="tam-navbar-features-dropdown">
                  <li><Link to="/tam-time-and-attendance-management">Time Tracking</Link></li>
                  <li><Link to="/tam-time-and-attendance-management">Attendance Monitoring</Link></li>
                  <li><Link to="/tam-time-and-attendance-management">Reporting & Analytics</Link></li>
                  <li><Link to="/tam-time-and-attendance-management">Integration</Link></li>
                  <li><Link to="/tam-time-and-attendance-management">Mobile Access</Link></li>
                  {/* Add or edit more features as needed */}
                </ul>
              </div>
              <h5><Link to="/tam-pricing">Pricing</Link></h5>
              <h5><Link to="/tam-support">Support</Link></h5>
              <h5><Link to="/tam-casestudies">Case Studies</Link></h5>
            </div>
          </div>
        </div>
      )}

      {/* Modal */}
      <TAM_form isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Navbar;