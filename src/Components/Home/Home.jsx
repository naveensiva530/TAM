import React, { useEffect, useState } from 'react';
import "./Home.css";
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import HP_doodle1 from '../../assets/HP_doodle1.png';
import HP_doodle2 from '../../assets/HP_doodle2.svg';
import HP_icon1 from '../../assets/HP_icon1.svg';
import HP_icon2 from '../../assets/HP_icon2.svg';
import HP_icon3 from '../../assets/HP_icon3.svg';
import HP_icon4 from '../../assets/HP_icon4.svg';
import HP_icon5 from '../../assets/HP_icon5.svg';
import demobox1 from '../../assets/demobox1.svg';
import demobox2 from '../../assets/demobox2.svg';
import ReactPlayer from 'react-player';
import TAM_English1 from "../../assets/TAM/TAM_English1.mp4";
import Counter from '../../Containers/CounterUp';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ScheduleAdemo from '../../Containers/RegForms/ScheduleAdemo';


const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


      const [isModalOpen, setIsModalOpen] = useState(false);

      const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };
      
  return (
    <>
    <Helmet>
        <title>NoQu: Revolutionizing Workforce Management with Payroll & Attendance Software
        </title>
        <meta name="description" content="NoQu combines innovative time and attendance tracking with cutting-edge HR payroll software, boosting efficiency, saving time, and eliminating inefficiencies, so businesses can focus on what truly matters." />
        <meta property="og:title" content="NoQu: Revolutionizing Attendance Software & Queue Management Systems" />
        <meta property="og:description" content="NoQu is revolutionizing queues with cutting-edge attendance software and management systems, helping businesses and individuals reclaim time by eliminating waiting. Join us in reshaping time management." />
        <meta property="og:image" content="https://noqu.in/logo.png" />
        <meta property="og:url" content="https://noqu.in/" />
        <meta name="twitter:card" content="NoQu" />
        <meta name="twitter:title" content="NoQu: Revolutionizing Attendance Software & Queue Management Systems" />
        <meta name="twitter:description" content="NoQu is revolutionizing queues with cutting-edge attendance software and management systems, helping businesses and individuals reclaim time by eliminating waiting. Join us in reshaping time management." />
        <meta name="twitter:image" content="https://noqu.in/logo.png" />
    </Helmet>
    <div className='Homepage'>
        < Hero />
        <Services/>
        <div className="Homepage_Clients">
            <h1>Clients All over Countries</h1>
            {/* <p>Partnering with NoQu can assuredly enhance your customer service multi-fold.</p> */}
            <div className="Homepage_Clients_Counts">
                 <div className="Homepage_Clients_Counts-box">
                      <h1><Counter targetNumber={1000} />+</h1>
                      <p>Clients</p>
                 </div>
                 <div className="Homepage_Clients_Counts-box">
                      <h1><Counter targetNumber={20000} />+</h1>
                      <p>Users</p>
                 </div>
                 <div className="Homepage_Clients_Counts-box">
                      <h1><Counter targetNumber={12} />+</h1>
                      <p>Countries</p>
                 </div>
            </div>
        </div>
        <div className="Homepage_features">
                <div className="Homepage_features_head">
                      <h1>All-in-one app</h1>
                      <p>One-stop-App for everything, whether it’s a big business, small- scale industry or even an individual.
                      NoQu makes life easier by simplifying your daily office routine</p>
                </div>
                <div className="Homepage_features_continer">
                    <div className="Homepage_features_continer-img1">
                          <img src={HP_doodle1} alt="" />
                    </div>
                    <div className="Homepage_features_content">
                        <div className="Homepage_features_content-boxouter1">
                          <div className="Homepage_features_content-box">
                                <img src={HP_icon1} alt="" />
                                <p>Applicable to all industry</p>
                            </div>
                        </div>
                        <div className="Homepage_features_content-boxouter2">
                          <div className="Homepage_features_content-box">
                                <img src={HP_icon2} alt="" />
                                <p>Improved organizational efficiency</p>
                            </div>
                        </div>
                        <div className="Homepage_features_content-boxouter3">
                          <div className="Homepage_features_content-box" >
                                <img src={HP_icon3} alt="" />
                                <p>Enhanced human capital management</p>
                            </div>
                        </div>
                        <div className="Homepage_features_content-boxouter4">
                          <div className="Homepage_features_content-box">
                                <img src={HP_icon4} alt="" />
                                <p>Boasting workplace accountability</p>
                            </div>
                        </div>
                        <div className="Homepage_features_content-boxouter5">
                          <div className="Homepage_features_content-box">
                                <img src={HP_icon5} alt="" />
                                <p>One stop solution </p>
                            </div>
                        </div>
                    </div>
                    <div className="Homepage_features_continer-img2">
                          <img src={HP_doodle2} alt="" />
                    </div>
                </div>
            </div>
        
        <div className="Homepage_update">
                <h5 className='TAM_h1'>Latest Update</h5>
                <div className="Homepage_update_container">
                            <div className="Homepage_update_container_video">
                                <ReactPlayer url={TAM_English1} controls={true} muted={true}  className="my-player"/>
                            </div>
                                

                            
                    <div className="Homepage_update_content">
                          <div>
                              <p>NoQu - Time & Attendance Management App streamlines workforce tracking and management, resulting in precise attendance data capture for a seamless & error-free payroll process thanks to customizable check-in & check-out options such as button, face recognition and QR codes.</p>
                              <p>Boasting with features like AI, Live Location Tracker and Geo Fencing, NoQu – Time & Attendance Management App goes beyond simple attendance management as it gives businesses a comprehensive and efficient human capital management system.</p>
                          </div>
                          <ul>
                                <li><p>• AI-enabled features</p></li>
                                <li><p>• Customizable employee check-in & outs</p></li>
                                <li><p>• Real-time tracking</p></li>
                                <li><p>• Geo-Fencing</p></li>
                                <li><p>• Workflow Integration</p></li>
                                <li><p>• API Integration</p></li>
                                <li><p>• Roles & Permissions</p></li>
                                <li><p>• Reports & Analytics</p></li>
                                <li><p>• Notifications & Alert</p></li>
                          </ul>
                     </div>
                </div>
            </div>
            <div className="Homepage_demobox">
                    <div className="Homepage_demobox-img1">
                         <img src={demobox1} alt="" />
                    </div>
                    <div className="Homepage_demobox-content">
                         <h1 className='TAM_h1'>Experience is worth
                         more than words</h1>
                         <p>We would like to have a demo. Book a slot now for a personalized walkthrough of our products</p>
                         <button onClick={() => openModal()}>Schedule a Demo / Call</button>
                    </div>
                    <div className="Homepage_demobox-img2">
                        <img src={demobox2} alt=""/>
                    </div>  
            </div>
            < ScheduleAdemo isOpen={isModalOpen} onClose={closeModal} />
    </div>
    </>
  )
}

export default Home
