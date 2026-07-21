import React, { useEffect } from 'react'
import './TAM_cs.css'
import caseStudy7 from '../../../assets/banner/caseStudy8.png';
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import TAM_Footer from '../TAM_Footer/TAM_Footer';
const TAM_cs7 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const handleClick = () => {
        const link = document.createElement("a");
        link.href = "/pdf/cs7.pdf";
        link.download = "case-study.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
  return (
    <>
    <Helmet>
            <title>"Case Studies: NoQu’s Solutions for Manufacturing | Live Tracking & Attendance"</title>
            <meta name="description" content="NoQu’s solutions, including employee live tracking software and time and attendance management software, help the manufacturing industry optimize workforce management, eliminate inefficiencies, and boost productivity." />
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
             <img src={caseStudy7} alt="" />
        </div>
        <h1 className='TAM_h1'>
           <span className="title-green">Manufacturing</span>
            <span className="title-blue">Industry</span>
     </h1>
        <div className="TAM_cases-content">
            <h5>Background</h5>
            <p>Our manufacturing Industry faced challenges in workforce optimization, production delays, and operational coordination. Inefficient workforce management and a lack of real-time visibility caused delays, bottlenecks, and coordination difficulties in their dynamic manufacturing setting</p>
            <h5>Challenges</h5>
            <p>Our Industries faced challenges in workforce optimization, production delays, and operational coordination. Inefficient workforce management and a lack of real-time visibility caused delays, bottlenecks, and coordination difficulties in their dynamic manufacturing setting.</p>
            <h5>Solutions Proposed by NoQu</h5>
            <p>NoQu TAM presented a comprehensive suite of solutions to optimize manufacturing processes. Live Workforce Tracking ensured real-time monitoring and deployment for efficient workforce management. Geo-fencing established virtual boundaries for enhanced security and monitoring in specific manufacturing zones. Seamless API Integration facilitated accurate data flow within existing systems, while Workflow Integration aligned with current workflows to prevent disruptions on the factory floor. Access Control and Roles/Permissions provided customization to ensure authorized personnel manage and modify manufacturing data.</p>
            <h5>Results</h5>
            <p>The implementation of NoQu TAM in our industries resulted in a transformative impact. Workforce management efficiency was significantly improved, mitigating delays in production and boosting overall operational efficiency. The introduction of real-time visibility across the factory floor addressed the major pain point, minimizing operational bottlenecks and providing a dynamic overview of manufacturing processes. Manual errors were reduced through automation and integration, ensuring smoother operations. Access Control and Roles/Permissions features contributed to enhanced security in sensitive manufacturing areas. The combined effect of these results led to a streamlined, error- resistant, and efficiently managed manufacturing system in our industries.</p>
            <h5>Key Factors</h5>
            <ul>
                <li>• Live Workforce Tracking for real-time monitoring.</li>
                <li>• Geo-fencing for enhanced security.</li>
                <li>• Seamless API Integration for accurate data flow.</li>
                <li>• Workflow Integration for preventing disruptions.</li>
                <li>• Access Control and Roles/Permissions for Secure Data Management.</li>
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

export default TAM_cs7
