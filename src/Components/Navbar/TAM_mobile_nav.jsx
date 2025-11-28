import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import call from '../../assets/call.png'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import TAM_form from '../../Containers/RegForms/TAM_form';

const TAM_mobile_nav = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [featuresdd, setFeaturesdd] = useState(false)  // State for Features dropdown
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const openModal = () => {
      setIsModalOpen(true);
    };
   
    const closeModal = () => {
      setIsModalOpen(false);
    };

  return (
    <div>
       <RiMenu3Line color='black' size={27} onClick={() =>  setToggleMenu(true)} />

    {toggleMenu && (
      <div className="navbar-menu_container scale-up-center">
            <div className="menubar_icon">
                <RiCloseLine color='black' size={27} onClick={() =>  setToggleMenu(false)}/>
            </div>
          <div className="navbar-menu_container-img">
              <img src={logo} alt="" width={100}/>
          </div>
          <div className='navbar-menu_container-links'>
          <ul>
          <Link to="/home" onClick={() =>  setToggleMenu(false)}><li>
                      <div className="Navbar_menu_items">
                          <p>NoQu Home</p>
                      </div>
                  </li></Link>
                  <li className='Navbar_menu_company' onClick={() => setFeaturesdd(featuresdd ? false : true)}>  {/* Changed to Company-style dropdown for direct listing */}
                      <div className="Navbar_menu_items">
                          <p>Features</p>
                      </div>
                      <ul className="Navbar_menu_company_dropdown" style={{ display: featuresdd ? 'block' : 'none' }}>
                          <Link to="/tam-time-and-attendance-management" onClick={() => setToggleMenu(false)}><li><span>|</span>Time Tracking</li></Link>
                          <Link to="/tam-time-and-attendance-management" onClick={() => setToggleMenu(false)}><li><span>|</span>Attendance Monitoring</li></Link>
                          <Link to="/tam-time-and-attendance-management" onClick={() => setToggleMenu(false)}><li><span>|</span>Reporting & Analytics</li></Link>
                          <Link to="/tam-time-and-attendance-management" onClick={() => setToggleMenu(false)}><li><span>|</span>Integration</li></Link>
                          <Link to="/tam-time-and-attendance-management" onClick={() => setToggleMenu(false)}><li><span>|</span>Mobile Access</li></Link>
                      </ul>
                  </li>
                  <Link to="/tam-pricing" onClick={() =>  setToggleMenu(false)}><li>
                      <div className="Navbar_menu_items">
                          <p>Pricing</p>
                      </div>
                  </li></Link>
                  <Link to="/tam-support" onClick={() =>  setToggleMenu(false)}><li>
                      <div className="Navbar_menu_items">
                          <p>Support</p>
                      </div>
                  </li></Link>
                  <Link to="/tam-casestudies" onClick={() =>  setToggleMenu(false)}><li>
                      <div className="Navbar_menu_items">
                          <p>Case Studies</p>
                      </div>
                  </li></Link>
                  <li>              
                    <div className="navbar-call">
                        <button onClick={() => {
                        setToggleMenu(false) 
                        openModal()
                        }}><img src={call}/><p>Schedule a Demo</p></button>
                    </div>
                  </li>
              </ul>
          </div>
      </div>
    )
    }
    < TAM_form isOpen={isModalOpen} onClose={closeModal}/>
</div>
  )
}

export default TAM_mobile_nav