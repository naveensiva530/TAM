import React, { useEffect, useState } from 'react';
import "./Footer.css";
import logo from '../../assets/logo.png';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import youtube from '../../assets/youtube.png';
import linkedin from '../../assets/linkedin.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ScheduleAdemo from '../../Containers/RegForms/ScheduleAdemo';

const Footer = () => {

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [htmlBody, setHtmlBody] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
          entry.target.classList.add('fadeIn');
        }
      })
     })
  
     const hiddenElements = document.querySelectorAll('.fadeOut');
     hiddenElements.forEach((el) => observer.observe(el));
    }, []);

    useEffect(() => {
      const loadMailTemplate = async () => {
        const response = await fetch('/Welcome.html');
        const htmlContent = await response.text();
        setHtmlBody(htmlContent);
      };
    
      loadMailTemplate();
    }, []);

    const validateEmail = (email) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
    };


    const handleSubmit = async (event) => {
      event.preventDefault(); // Prevent the default form submission
      setLoading(true); // Set loading to true when the request starts

      if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        setLoading(false); // Reset loading state
        return;
    }

    // try {
    //   const response = await axios.post('http://localhost:3003/db/subscribe', {
    //     email: email,
    //     htmlBody: htmlBody, // Send the rich HTML content
    //   }); 

      try {
          const response = await fetch('https://noqu.in/db/subscribe', {
            // const response = await fetch('http://localhost:3003/db/subscribe', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email, htmlBody }),
          });

          // Check if the response is OK (status in the range 200-299)
          if (!response.ok) {
              const errorData = await response.json(); // Parse the error response
              throw new Error(errorData.message || 'Network response was not ok');
          }

          const data = await response.json(); // Parse the success response
          alert(data.message); // Display success message
          setEmail(''); // Clear the input field
          setLoading(false);
      } catch (error) {
        if (error.message === 'Failed to fetch') {
          alert('Unable to connect to the server. Please check your internet connection or try again later.');
      } else {
          alert(error.message); // Display other error messages
      }
      } finally {
          setLoading(false); // Set loading to false when the request is complete
      }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      validateEmail();
      handleSubmit();
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className='Footer'>
        <div className="Footer-container">
            <div className="Footer_logo fadeOut">
                <Link to="/home"><img src={logo} alt="" /></Link>
                  
            </div>
            <div className="Footer_box">
                <div className="Footer_column fadeOut">
                  <h5>Company</h5>
                  <ul>
                      <li><Link to="/about-us"><p>About</p></Link></li>
                      <li><Link to="/career"><p>Careers</p></Link></li>
                      <li><Link to="/news"><p>News</p></Link></li>
                      <li><Link to="/blog"><p>Blog</p></Link></li>
                      <li><Link to="/awards"><p>Awards</p></Link></li>
                      <li><Link to="/contact"><p>Contact</p></Link></li>
                  </ul>
                </div>
                <div className="Footer_column fadeOut">
                      <h5>Product</h5>
                      <p>NoQu Office</p>
                      <ul className='Footer_column_products'>
                        <li><div className='Footer_dot'>•</div><Link to="/tam-time-and-attendance-management"><h6>Time And Attendance Management (TAM)</h6></Link></li>
                        {/* <li><div className='Footer_dot'>•</div><Link to="/scan-homepage"><h6>NoQu Scan</h6></Link></li> */}
                      </ul>
                </div>
                <div className="Footer_column fadeOut">
                  <h5>Sales & Support</h5>
                  <ul>
                    <li><Link to="/schedule-a-demo"><p>Schedule A Demo</p></Link></li>
                    <li><Link to="/tam-support"><p>Support</p></Link></li>
                  </ul>
                </div>
                <div className="Footer_column fadeOut">
                    <h5>Partners</h5>
                    <ul>
                      <li><Link to="/channel-partner"><p>Channel Partners</p></Link></li>
                      {/* <li><Link to="/affiliate-marketing"><p>Affilitate Marketing</p></Link></li> */}
                    </ul>
                </div>
                <div className="Footer_column fadeOut">
                    <h5>News Letter</h5>
                    <p style={{cursor:"unset"}}>Subscribe for the latest updates.</p>
                    <div className="Footer_emailbox">
                        <div className="Footer_email">
                            <input  
                            style={{ display: loading ? "none" : "block" }}
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder='Email'
                            required/>
                            <button onClick={handleSubmit} style={{ width: loading ? "100%" : "50%"}}>{loading ? 'Subscribing...' : 'Subscribe'}</button>
                        </div>
                        {/* {message &&
                        <div className='Footer_email_subscribe'>
                              <p>{message}</p>
                        </div>} */}
                    </div>  
                    <div className="Footer_social fadeOut">
                        <li><Link to="https://www.facebook.com/NoQuOffice"><img className='scale-hover' src={facebook} alt="" /></Link></li>
                        <li><Link to="https://x.com/noqutech?t=UuSXs6NwxyH7TYjAWwa3TQ&s=08"><img className='scale-hover' src={twitter} alt="" /></Link></li>
                        <li><Link to="https://www.instagram.com/noqu.official?igsh=bXk5ZGp5cHZ5enlj"><img className='scale-hover' src={instagram} alt="" /></Link></li>
                        <li><Link to="https://www.youtube.com/@NoquTechSolutions"><img className='scale-hover' src={youtube} alt="" /></Link></li>
                        <li><Link to="https://www.linkedin.com/company/noqutechsolutions/posts/?feedView=all"><img className='scale-hover' src={linkedin} alt="" /></Link></li>
                    </div>
                </div>
            </div>
        </div>
        <div className="Footer_copyrights fadeOut">
            <Link to="/home"><p><span>© NoQu</span></p></Link>
            <p>. All rights reserved.</p>
            <a href="/privacy-policy" target='blank'><p>Privacy Policy </p></a>
            <p>|</p>
            <a href="/terms-and-conditions" target='blank'><p>Terms & Conditions</p></a>
        </div>
        < ScheduleAdemo isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}

export default Footer
