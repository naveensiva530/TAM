import React, { useEffect, useState } from 'react'
import "./TAM_home_page.css"
import TAM_banner from '../../../assets/TAM_banner.png'
import TAM_Features_1 from '../../../assets/TAM_Features_1.svg'
import TAM_Features_2 from '../../../assets/TAM_Features_2.svg'
import TAM_Features_3 from '../../../assets/TAM_Features_3.svg'
import TAM_Features_4 from '../../../assets/TAM_Features_4.svg'
import TAM_Features_5 from '../../../assets/TAM_Features_5.svg'
import TAM_Features_6 from '../../../assets/TAM_Features_6.svg'
import TAM_Features_7 from '../../../assets/TAM_Features_7.svg'
import TAM_Features_8 from '../../../assets/TAM_Features_8.svg'
import TAM_Features_box from '../../../Containers/TAM_Features_box/TAM_Features_box'
import TAM_1 from '../../../assets/TAM_1.png'
import TAM_1_1 from '../../../assets/TAM_1_1.svg'
import TAM_1_2 from '../../../assets/TAM_1_2.svg'
import TAM_1_3 from '../../../assets/TAM_1_3.svg'

import TAM_2 from '../../../assets/TAM_2.png'
import TAM_2_1 from '../../../assets/TAM_2_1.svg'
import TAM_2_2 from '../../../assets/TAM_2_2.svg'
import TAM_2_3 from '../../../assets/TAM_2_3.svg'

import TAM_3 from '../../../assets/TAM_3.png'
import TAM_3_1 from '../../../assets/TAM_3_1.svg'
import TAM_3_2 from '../../../assets/TAM_3_2.svg'
import TAM_3_3 from '../../../assets/TAM_3_3.svg'

import TAM_4 from '../../../assets/TAM_4.png'
import TAM_4_1 from '../../../assets/TAM_4_1.svg'
import TAM_4_2 from '../../../assets/TAM_4_2.svg'
import TAM_4_3 from '../../../assets/TAM_4_3.svg'

import TAM_5 from '../../../assets/TAM_5.png'
import TAM_5_1 from '../../../assets/TAM_5_1.svg'
import TAM_5_2 from '../../../assets/TAM_5_2.svg'
import TAM_5_3 from '../../../assets/TAM_5_3.svg'

import TAM_6 from '../../../assets/TAM_6.png'
import TAM_6_1 from '../../../assets/TAM_6_1.svg'
import TAM_6_2 from '../../../assets/TAM_6_2.svg'
import TAM_6_3 from '../../../assets/TAM_6_3.svg'

import TAM_7 from '../../../assets/TAM_7.png'
import TAM_7_1 from '../../../assets/TAM_7_1.svg'
import TAM_7_2 from '../../../assets/TAM_7_2.svg'
import TAM_7_3 from '../../../assets/TAM_7_3.svg'

import TAM_8 from '../../../assets/TAM_8.png'
import TAM_8_1 from '../../../assets/TAM_8_1.svg'
import TAM_8_2 from '../../../assets/TAM_8_2.svg'
import TAM_8_3 from '../../../assets/TAM_8_3.svg'

import Improved_Workforce_productivity_1 from '../../../assets/Improved_Workforce_productivity_1.svg'
import Eliminate_use_of_biometric_devices_1 from '../../../assets/Eliminate_use_of_biometric_devices_1.svg'
import High_level_of_Employee_1 from '../../../assets/High_level_of_Employee_1.svg'
import Visibility_and_transparency_1 from '../../../assets/Visibility_and_transparency_1.svg'
import { Helmet } from 'react-helmet-async'
// import NoQuApp from '../../NoQuApp/NoQuApp'

const TAM_home_page = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  const [data, setData] = useState(0)
  const Feature = [< TAM_Features_box img1={TAM_1} img2={TAM_1_1} img3={TAM_1_2} img4={TAM_1_3} 
    Feature1="Capture attendance effortlessly with advanced facial recognition." 
    Feature2="Boost productivity by integrating employee emotions." 
    Feature3="Receive automated alerts for precise workforce management."/>,
  < TAM_Features_box img1={TAM_2} img2={TAM_2_1} img3={TAM_2_2} img4={TAM_2_3} 
  Feature1="Monitor the workforce in real-time for instant visibility." 
  Feature2="Ensure off-site connectivity with advanced remote tracking." 
  Feature3="Achieve unparalleled attendance precision with live tracking."/>,
  < TAM_Features_box img1={TAM_3} img2={TAM_3_1} img3={TAM_3_2} img4={TAM_3_3} 
  Feature1="Elevate attendance tracking with real-time Geofencing alerts." 
  Feature2="Obtain reliable attendance data with a geofencing-enabled system." 
  Feature3="Set geographical boundaries for attendance compliance."/>,
  < TAM_Features_box img1={TAM_4} img2={TAM_4_1} img3={TAM_4_2} img4={TAM_4_3} 
  Feature1="Enhance HR/Payroll with seamless Time & Attendance software API." 
  Feature2="Combine access control and attendance tracking with integration." 
  Feature3="Leverage facial recognition for precise attendance records."/>,
  < TAM_Features_box img1={TAM_5} img2={TAM_5_1} img3={TAM_5_2} img4={TAM_5_3} 
  Feature1="Generate data-driven reports with a customizable interface." 
  Feature2="Provide managers with comprehensive attendance views." 
  Feature3="Generate role and location-specific reports for precision."/>,
  < TAM_Features_box img1={TAM_6} img2={TAM_6_1} img3={TAM_6_2} img4={TAM_6_3} 
  Feature1="Eliminate unauthorized access risks with advanced mechanisms." 
  Feature2="Elevate security standards with a foolproof access system." 
  Feature3="Grant/restrict access based on facial recognition for authorized entry."/>,
  < TAM_Features_box img1={TAM_7} img2={TAM_7_1} img3={TAM_7_2} img4={TAM_7_3} 
  Feature1="Define hierarchy with reporting relationships and positions." 
  Feature2="Categorize employees by departments for a segmented view." 
  Feature3="Managers view subordinate attendance records seamlessly."/>,
  < TAM_Features_box img1={TAM_8} img2={TAM_8_1} img3={TAM_8_2} img4={TAM_8_3} 
  Feature1="Send daily reports summarizing attendance details" 
  Feature2="Receive performance analysis reports for key metrics." 
  Feature3="Stay informed with Battery Charge Notifications."/>]

  const featuresList = document.querySelector('.TAM_home_page_features-list');

  window.addEventListener('scroll', () => {
    const featuresListTop = featuresList.offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight;
    if (scrollPosition > featuresListTop) {
      featuresList.classList.add('scrolled');
      // Add the 'animated' class to each <li> element after animation
      featuresList.querySelectorAll('ul li').forEach((li) => {
        li.style.opacity = 0; // set initial opacity to 0
        li.classList.add('animated');
      });
    } else {
      featuresList.classList.remove('scrolled');
    }
  });


  return (
    <>
        <Helmet>
            <title>NoQu: Efficient Time and Attendance Management System & Tracking Software</title>
            <meta name="description" content="NoQu’s time and attendance software simplifies employee tracking, boosting efficiency, saving time, and eliminating queues, allowing businesses to focus on what truly matters."/>
            <meta property="og:title" content="NoQu: Revolutionizing Attendance Software & Queue Management Systems"/>
            <meta property="og:description" content="NoQu is revolutionizing queues with cutting-edge attendance software and management systems, helping businesses and individuals reclaim time by eliminating waiting. Join us in reshaping time management."/>
            <meta property="og:image" content="https://noqu.in/logo.png" />
            <meta property="og:url" content="https://noqu.in/" />
            <link rel="canonical" href="https://https://noqu.in/tam-time-and-attendance-management" />
            <meta name="twitter:card" content="NoQu" />
            <meta name="twitter:title" content="NoQu: Revolutionizing Attendance Software & Queue Management Systems" />
            <meta name="twitter:description" content="NoQu is revolutionizing queues with cutting-edge attendance software and management systems, helping businesses and individuals reclaim time by eliminating waiting. Join us in reshaping time management." />
            <meta name="twitter:image" content="https://noqu.in/logo.png" />
        </Helmet>
    <div className='TAM_home_page'>
        <div className="TAM_home_page-header">
             <h1 className='TAM_h1'>Time and Attendance Management (TAM)</h1>
             <h5>Bid Farewell to outdated attendance tracking systems!!</h5>
             <p>NoQu TAM, a cutting-edge solution powered by advanced AI capabilities, ensure secure check-ins, real-time tracking, and seamless workflow integration for
             efficient attendance management, all presented through a user-friendly interface with role-based access and insightful analytics to meet modern workforce.</p>
             <img src={TAM_banner} alt=""/>
        </div>
        <div className="TAM_home_page_features">
            <div className="TAM_home_page_features-list">                             
                <ul>
                    <li onClick={() =>  setData(0)}><img src={TAM_Features_1} alt="" width={40} /><h5>AI-enabled Facial Recognition</h5></li>
                    <li onClick={() =>  setData(1)}><img src={TAM_Features_2} alt="" width={40} /><h5>Live location tracking</h5></li>
                    <li onClick={() =>  setData(2)}><img src={TAM_Features_3} alt="" width={40} /><h5>Geo Fencing</h5></li>
                    <li onClick={() =>  setData(3)}><img src={TAM_Features_4} alt="" width={40} /><h5>API Integration</h5></li>
                    <li onClick={() =>  setData(4)}><img src={TAM_Features_5} alt="" width={40} /><h5>Reports and Dashboards</h5></li>
                    <li onClick={() =>  setData(5)}><img src={TAM_Features_6} alt="" width={40} /><h5>Access Control</h5></li>
                    <li onClick={() =>  setData(6)}><img src={TAM_Features_7} alt="" width={40} /><h5>Organizational Charts</h5></li>
                    <li onClick={() =>  setData(7)}><img src={TAM_Features_8} alt="" width={40} /><h5>Notifications</h5></li>
                </ul>
            </div>
            <div className="TAM_home_page_features-box">
                  {Feature[data]}
            </div>
        </div>
        {/* <div className='NoQu'>
            <NoQuApp />
        </div> */}
        <div className="TAM_home_page_avd">
            <h1 className='TAM_h1'>What it leads to</h1>
            <div className="TAM_home_page_avd_box_container">

                <div className="TAM_home_page_avd_box">
                    <img src={Improved_Workforce_productivity_1} alt="" />
                    <p>Improved Workforce productivity</p>
                </div>
                <div className="TAM_home_page_avd_box">
                    <img src={Eliminate_use_of_biometric_devices_1} alt="" />
                    <p>Eliminate use of biometric devices</p>
                </div>
                <div className="TAM_home_page_avd_box">
                    <img src={High_level_of_Employee_1} alt="" />
                    <p>High level of Employee accountability</p>
                </div>
                <div className="TAM_home_page_avd_box">
                    <img src={Visibility_and_transparency_1} alt="" />
                    <p>Visibility and transparency</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default TAM_home_page
