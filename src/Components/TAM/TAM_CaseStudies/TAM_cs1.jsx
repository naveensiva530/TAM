import React, { useEffect } from 'react'
import './TAM_cs.css'
import caseStudy1 from '../../../assets/banner/caseStudy1.png';
import { Link } from 'react-router-dom'
import pdfFile from '../../../assets/cs1.pdf';

const handleClick = () => {
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = 'case-study.pdf';
    link.click();
};
import { Helmet } from 'react-helmet-async'
import TAM_Footer from '../TAM_Footer/TAM_Footer';

const TAM_cs1 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
   
  return (
    <>

    <Helmet>
            <title>"Healthcare Case Studies: Time & Attendance Tracking with NoQu"</title>
            <meta name="description" content="NoQu’s Time and Attendance Tracking and Geofencing Systems are transforming the healthcare industry. Our solutions optimize staff management, reduce wait times, and boost efficiency. Discover our impact in healthcare case studies!" />
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
             <img src={caseStudy1} alt="" />
        </div>
     <h1 className='TAM_h1'>
           <span className="title-green">Health Care </span>
            <span className="title-blue">Industry</span>
     </h1>
        <div className="TAM_cases-content">
            <h5>Background</h5>
            <p>Our Hospitals, committed to 24/7 medical services, grappled with workforce management challenges due to diverse departments. The existing manual attendance tracking system resulted in delays, errors, and difficulties in ensuring adequate staffing, impacting patient care.</p>
            <h5>Challenges</h5>
            <p>Managing a diverse healthcare workforce efficiently proved challenging for Hospitals. The manual attendance system led to operational bottlenecks, affecting coordination and timely staffing, crucial for 24/7 medical services.</p>
            <h5>Solutions Proposed by NoQu</h5>
            <p>In response to the Hospitals' challenges, NoQu TAM was deployed with tailored solutions. Live location tracking ensured real-time staff presence, especially in emergencies. Geo-fencing enhanced security by creating virtual boundaries, and seamless API integration streamlined data accuracy. Workflow integration prevented disruptions, while reports and dashboards provided insights. Access control, roles and permissions features ensured data security.</p>
            <h5>Results</h5>
            <p>NoQu TAM's implementation transformed workforce management at Hospitals. AI-enabled Facial Recognition improved attendance precision. Live Location Tracking enhanced real-time monitoring for emergency response. Geo-fencing secured sensitive areas, improving patient care.
API Integration streamlined data flow, and workflow integration prevented disruptions. Access control and permissions ensured data security, ultimately reducing errors.</p>
            <h5>Key Factors</h5>
            <ul>
                <li>• Real-time staff presence tracking for emergency response.</li>
                <li>• Enhanced security through geo-fencing.</li>
                <li>• API integration for accurate data flow.</li>
                <li>• Workflow integration for operational efficiency.</li>
                <li>• Access control and permissions for data security.</li>
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
   

export default TAM_cs1
