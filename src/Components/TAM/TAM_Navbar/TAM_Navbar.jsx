import React, { useEffect, useState } from 'react';
import './TAM_Navbar.css'
import "../../Navbar/Navbar.css"
import logo from '../../../assets/logo.png'
import call from '../../../assets/call.png'
import email1 from '../../../assets/email1.svg'
import { Link } from 'react-router-dom';
import TAM_mobile_nav from '../../Navbar/TAM_mobile_nav';
import TAM_form from '../../../Containers/RegForms/TAM_form';

const TAM_Navbar = () => {

     const [visible, setVisible] = useState(true);
     const [lastScrollY, setLastScrollY] = useState(0);
     const [isModalOpen, setIsModalOpen] = useState(false);

     const openModal = () => {
       setIsModalOpen(true);
     };
   
     const closeModal = () => {
       setIsModalOpen(false);
     };

     const handleScroll = () => {
          const currentScrollY = window.scrollY;
      
          if (currentScrollY > lastScrollY && currentScrollY > 50) {
            // Scrolling down
            setVisible(false);
          } else {
            // Scrolling up
            setVisible(true);
          }
          
          setLastScrollY(currentScrollY);
        };
      
        useEffect(() => {
          window.addEventListener('scroll', handleScroll);
          
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, [lastScrollY]);

  return (
<>
    <div className={`TAM_Navbar`}>
        <div className='TAM_Navbar-container'> 
             <div className="TAM_Navbar-logo">
                  <img src={logo} alt=""/>
             </div>
             <div className="TAM_Navbar-links">
                  <h5><Link to="/home">NoQu Home</Link></h5>
                  <h5><Link to="/tam-time-and-attendance-management">Attendance Management</Link></h5>
                  <h5><Link to="/tam-pricing">Pricing</Link></h5>
                  <h5><Link to="/tam-support">Support</Link></h5>
                  <h5><Link to="/tam-casestudies">Case Studies</Link></h5>                                   
                  {/* <div className='TAM_Navbar-links-call'><a href="callto:+91 7401600600"><span><img src={call} alt="" width={25}/></span><h5>+91 7401 600 600</h5></a></div> */}
             </div>
             <div className="TAM_Navbar-button">
               <button onClick={() => openModal()}>Product Demo / Call</button>   
             </div>
        </div>
    </div>
    <div className="TAM_navbar-menu">
           <div className='navbar-links_logo'>
               <img src={logo} alt="logo" />
            </div>
          <TAM_mobile_nav />
     </div>
     < TAM_form isOpen={isModalOpen} onClose={closeModal}/>
</>
  )
}

export default TAM_Navbar
