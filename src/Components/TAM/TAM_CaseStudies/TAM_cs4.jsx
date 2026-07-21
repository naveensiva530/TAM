import React, { useEffect } from 'react'
import './TAM_cs.css'
import caseStudy4 from '../../../assets/banner/caseStudy4.png';
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import TAM_Footer from '../TAM_Footer/TAM_Footer';

import pdfFile from '../../../assets/cs4.pdf';


const handleClick = () => {
    const link = document.createElement("a");
    link.href = "/pdf/cs4.pdf";
    link.download = "case-study.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};


const TAM_cs4 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
     
  return (
    <>

    <Helmet>
            <title>"NoQu Case Studies: Transforming the Construction Industry with Tech"</title>
            <meta name="description" content="NoQu's solutions revolutionize the construction industry with employee live tracking software and geofencing attendance systems, streamlining workforce management and boosting productivity." />
            <meta property="og:title" content="NoQu: Revolutionizing Attendance Software & Queue Management Systems" />
            <meta property="og:description" content="NoQu is revolutionizing queues with cutting-edge attendance software and management systems, helping businesses and individuals reclaim time by eliminating waiting. Join us in reshaping time management." />
            <meta property="og:image" content="https://noqu.in/logo.png" />
            <meta property="og:url" content="https://noqu.in/" />
            <meta name="twitter:card" content="NoQu" />
            <meta name="twitter:title" content="NoQu: Revolutionizing Attendance Software & Queue Management Systems" />
            <meta name="twitter:description" content="NoQu is revolutionizing queues with cutting-edge attendance software and management systems, helping businesses and individuals reclaim time by eliminating waiting. Join us in reshaping time management." />
            <meta name="twitter:image" content="https://noqu.in/logo.png" />
        </Helmet>

    <div className='TAM_cases'>
       <div className="TAM_cases-img">
             <img src={caseStudy4} alt="" />
        </div>
        <h1 className='TAM_h1'>
           <span className="title-green">Construction</span>
            <span className="title-blue">Industry</span>
     </h1>
        <div className="TAM_cases-content">
            <h5>Background</h5>
            <p>Facing the unique challenges of orchestrating tasks, personnel, and timelines in the dynamic construction environment, our industry sought a transformative solution to elevate its operations to unprecedented heights.</p>
            <h5>Challenges</h5>
            <p>The complexities of construction coordination, timely deployment of personnel, manual processes leading to delays, and the critical need for safety posed significant challenges for Olympia Housing.</p>
            <h5>Solutions Proposed by NoQu</h5>
            <p>NoQu TAM addressed challenges with AI-enabled Facial Recognition for precise personnel tracking. Real-time personnel tracking improved deployment efficiency. Geo-fencing enhanced security, ensuring safety. API Integration streamlined operations and Workflow Integration prevented disruptions. Detailed Reports and Dashboards provided actionable insights. Access control and customizable roles ensured data security.</p>
            <h5>Results</h5>
            <p>The integration of NoQu TAM yielded optimized construction coordination, ensuring efficiency in tasks and personnel deployment. Real-time tracking contributed to timely project completion, reducing delays and enhancing operational precision. Safety measures were enhanced through geo-fencing, access control, and roles/permissions features. Real-time visibility improved coordination, and detailed reports empowered construction managers with actionable insights, contributing to data-driven decision-making.

NoQu TAM's real-time visibility across the logistics network enabled better coordination and minimized disruptions. Detailed reports and dashboards empowered logistics managers with actionable insights, facilitating data-driven decision-making.</p>
            <h5>Key Factors</h5>
            <ul>
                <li>• Real-time personnel tracking for efficient deployment.</li>
                <li>• Geo-fencing for enhanced security.</li>
                <li>• Seamless API integration with existing systems.</li>
                <li>• Workflow integration for preventing disruptions.</li>
                <li>• Detailed reports and dashboards for actionable insights.</li>
            </ul>
            <div className="TAM_cases-content-buttons">
                <Link to="/tam-casestudies"><button>back</button></Link>
                <button onClick={handleClick}>download</button>
            </div>
        </div>
    </div>
     <TAM_Footer />
    </>
  )
}

export default TAM_cs4
