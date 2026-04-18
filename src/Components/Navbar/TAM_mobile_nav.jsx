import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import call from '../../assets/call.png'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import TAM_form from '../../Containers/RegForms/TAM_form';
import logo2 from '../../assets/logo2.png';

const TAM_mobile_nav = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [featuresdd, setFeaturesdd] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const navigate = useNavigate();

    // Helper to prevent mobile ghost-clicks from falling through to the page below
    const handleCloseMenu = () => {
        setTimeout(() => setToggleMenu(false), 200);
    };

  return (
    <div>
       {/* Menu Trigger Icon */}
       <RiMenu3Line color='black' size={27} onClick={() => setToggleMenu(true)} />

    {toggleMenu && (
      <div className="navbar-menu_container">
            <div className="menubar_icon">
                <RiCloseLine color='black' size={27} onClick={handleCloseMenu}/>
            </div>
          
          {/* Logo & Product Branding Section */}
          <div className="navbar-menu_container-img" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
             
             <img
                src={logo}
                alt="Main Logo"
                width={80}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/home");
                  handleCloseMenu();
                }}
             />

              <div style={{
                  display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', 
                  background: '#f8f9fa', borderRadius: '8px', border: '1px solid #eee'
              }}>
                   <img
                src={logo2}
                alt="Main Logo"
                width={80}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/tam-time-and-attendance-management");
                  handleCloseMenu();
                }}
             />
                  <p style={{ fontSize: '13px', fontWeight: '700', margin: 0, color: '#27375d' }}>
                      Time & Attendance Management
                  </p>
              </div>
          </div>

          <div className='navbar-menu_container-links' style={{ marginTop: '30px' }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                
                <Link to="/home" onClick={handleCloseMenu}>
                    <li>
                      <div className="Navbar_menu_items">
                        <p>NoQu Home</p>
                      </div>
                    </li>
                </Link>
                
                <Link to="/tam-time-and-attendance-management" onClick={handleCloseMenu}>
                    <li>
                      <div className="Navbar_menu_items">
                        <p>Product Home</p>
                      </div>
                    </li>
                </Link>

                {/* Features Dropdown */}
                <li onClick={() => setFeaturesdd(!featuresdd)}>
                    <div 
                      className="Navbar_menu_items" 
                      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                    >
                        <p>Features</p>
                        <span style={{fontWeight: 'bold'}}>
                          {featuresdd ? '−' : '+'}
                        </span>
                    </div>

                    {featuresdd && (
                        <ul 
                          style={{ 
                            listStyle: 'none', 
                            paddingLeft: '15px', 
                            background: '#fafafa', 
                            borderLeft: '2px solid #27375d' 
                          }}
                        >
                            <Link to="/multichannel" onClick={handleCloseMenu}>
                              <li style={{ padding: '10px 0' }}>Multi-Channel</li>
                            </Link>

                            <Link to="/livetracking" onClick={handleCloseMenu}>
                              <li style={{ padding: '10px 0' }}>Live Tracking</li>
                            </Link>

                             <Link to="/regularization" onClick={handleCloseMenu}>
                              <li style={{ padding: '10px 0' }}>Regularization</li>
                            </Link>

                             <Link to="/biometric" onClick={handleCloseMenu}>
                              <li style={{ padding: '10px 0' }}>Biometric Device Integration</li>
                            </Link>

                             <Link to="/workflow" onClick={handleCloseMenu}>
                              <li style={{ padding: '10px 0' }}>Workflow</li>
                            </Link>

                            <Link to="/roles_permission" onClick={handleCloseMenu}>
                              <li style={{ padding: '10px 0' }}>Roles & Permission</li>
                            </Link>

                            <Link to="/leave_holiday" onClick={handleCloseMenu}>
                              <li style={{ padding: '10px 0' }}>Leave & Holiday Management</li>
                            </Link>

                            <Link to="/shif_management" onClick={handleCloseMenu}>
                              <li style={{ padding: '10px 0' }}>Shift Management</li>
                            </Link>

                            <Link to="/hrms" onClick={handleCloseMenu}>
                              <li style={{ padding: '10px 0' }}>HRMS</li>
                            </Link>

                            <Link to="/payroll" onClick={handleCloseMenu}>
                              <li style={{ padding: '10px 0' }}>Payroll</li>
                            </Link>

                            
                        </ul>
                    )}
                </li>

                <Link to="/tam-pricing" onClick={handleCloseMenu}>
                    <li>
                      <div className="Navbar_menu_items">
                        <p>Pricing</p>
                      </div>
                    </li>
                </Link>

                <Link to="/tam-support" onClick={handleCloseMenu}>
                    <li>
                      <div className="Navbar_menu_items">
                        <p>Support</p>
                      </div>
                    </li>
                </Link>

                <Link to="/tam-casestudies" onClick={handleCloseMenu}>
                    <li>
                      <div className="Navbar_menu_items">
                        <p>Case Studies</p>
                      </div>
                    </li>
                </Link>

                {/* Schedule Demo Button */}
                <li style={{ marginTop: '30px' }}>              
                    <div className="navbar-call">
                        <button 
                          style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '10px', 
                            background: '#27375d', 
                            color: '#ffff', 
                            border: 'none', 
                            padding: '10px', 
                            borderRadius: '8px', 
                            width: '100%' 
                          }} 
                          onClick={() => { 
                            handleCloseMenu();
                            openModal(); 
                          }}
                        >
                            <img src={call} alt="call" width={20} />
                            <p style={{ margin: 0, fontWeight: '500', color: '#ffff' }}>
                              Schedule a Demo
                            </p>
                        </button>
                    </div>
                </li>

            </ul>
          </div>
      </div>
    )}

    <TAM_form isOpen={isModalOpen} onClose={closeModal}/>
</div>
  )
}

export default TAM_mobile_nav
