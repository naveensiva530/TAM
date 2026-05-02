import React, { useEffect } from 'react'
import './TAM_cs.css'
import caseStudy5 from '../../../assets/banner/caseStudy5.png';
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import TAM_Footer from '../TAM_Footer/TAM_Footer';

import pdfFile from '../../../assets/cs5.pdf';


const handleClick = () => {
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = 'case-study.pdf';
    link.click();
};

const TAM_cs5 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
  return (
    <>

    <Helmet>
            <title>"Case Studies: Revolutionizing Manpower & Staffing with Smart Solutions"</title>
            <meta name="description" content="NoQu’s employee live tracking software and geofencing attendance system optimize workforce management and eliminate inefficiencies in the manpower and staffing industry." />
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
             <img src={caseStudy5} alt="" />
        </div>
       <h1 className='TAM_h1'>
           <span className="title-green">Manpower and</span>
            <span className="title-blue">Staffing Industry</span>
     </h1>
        <div className="TAM_cases-content">
            <h5>Background</h5>
            <p>Manpower and Staffing Industry Challenged by the complexities of diverse staffing requirements, timely placements, and the imperative of ensuring client satisfaction, our clients in the manpower industry sought a transformative tool to modernize their operations. Faced with limitations in manual processes to meet the evolving demands of the industry, the need for an innovative solution became apparent.</p>
            <h5>Challenges</h5>
            <p>The client grappled with the management of diverse staffing needs, struggled to ensure timely placements, and encountered difficulties in consistently meeting client satisfaction benchmarks. Manual processes proved insufficient for the dynamic nature of the manpower industry.</p>
            <h5>Solutions Proposed by NoQu</h5>
            <p>The integration of NoQu TAM catalysed a transformative shift in the client’s operations. Staffing efficiency witnessed a significant improvement with real-time tracking, and Geo- Fencing enhanced security measures at client locations. Timely placements became a hallmark of the client's service, contributing to heightened client satisfaction. Data-driven decision-making was empowered through detailed reports and dashboards, offering insights into industry trends and operational metrics. The client experienced a reduction in manual errors, ensuring smoother operations and improved overall efficiency in meeting the diverse staffing needs of their clients.</p>
            <h5>Results</h5>
            <p>The integration of NoQu TAM yielded optimized construction coordination, ensuring efficiency in tasks and personnel deployment. Real-time tracking contributed to timely project completion, reducing delays and enhancing operational precision. Safety measures were enhanced through geo-fencing, access control, and roles/permissions features. Real-time visibility improved coordination, and detailed reports empowered construction managers with actionable insights, contributing to data-driven decision-making.</p>
            <h5>Key Factors</h5>
            <ul>
                <li>• Real-time tracking for optimized staffing deployment.</li>
                <li>• Geo-fencing for enhanced security.</li>
                <li>• Seamless API integration for accurate data flow.</li>
                <li>• Workflow alignment for timely and efficient placements.</li>
                <li>• Access control and customizable roles for secure data management.</li>
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

export default TAM_cs5
