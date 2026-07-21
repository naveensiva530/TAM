import React, { useEffect } from 'react'
import './TAM_cs.css'
import caseStudy2 from '../../../assets/banner/caseStudy2.png';
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import TAM_Footer from '../TAM_Footer/TAM_Footer';
import pdfFile from '../../../assets/cs2.pdf';


const handleClick = () => {
    const link = document.createElement("a");
    link.href = "/pdf/cs2.pdf";
    link.download = "case-study.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};;

const TAM_cs2 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
  return (
    <>
    <Helmet>
            <title>"Case Studies: NoQu's Solutions for Financial Institutions' Efficiency"</title>
            <meta name="description" content="NoQu is transforming the financial sector with innovative solutions like employee live tracking software and geofencing attendance systems. Our technology eliminates inefficiencies, enhancing productivity and saving time for financial institutions." />
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
             <img src={caseStudy2} alt="" />
        </div>
        <h1 className='TAM_h1'>
           <span className="title-green">Financial </span>
            <span className="title-blue">Institutions</span>
     </h1>
        <div className="TAM_cases-content">
            <h5>Background</h5>
            <p>Our Finance is a significant player in the financial industry, found itself grappling with operational challenges. The optimization of collection staff efficiency, in-house monitoring, and ensuring timely customer service across various business units became a pressing concern. The reliance on manual processes led to inefficiencies, delayed services, and challenges with staff management.</p>
            <h5>Challenges</h5>
            <p>Inefficient manual procedures harmed the efficiency of operations as a whole, and the incapacity to guarantee the timely deployment of collection agents impeded the provision of timely customer service. The inability to monitor in real-time makes it difficult for internal teams to make well-informed decisions. Security risks were associated with manual access control, particularly when handling sensitive financial data.</p>
            <h5>Solutions Proposed by NoQu</h5>
            <p>To address operational challenges in our industry, NoQu TAM implemented tailored solutions for financial institutions. Real-time tracking of collection agents optimized deployment and resource allocation, ensuring efficiency in operations. Geo-fencing created virtual boundaries, enhancing security and monitoring, while API integration streamlined data flow with existing systems, such as CRM and payment processing. Workflow integration prevented disruptions, aligning attendance tracking with daily operations. Robust reporting features and dashboards provided comprehensive insights, aiding quick decision-making. Access control measures and customization of roles ensured data security, limiting access to sensitive information.</p>
            <h5>Results</h5>
            <p>The implementation of NoQu TAM in our industry yielded transformative outcomes. Streamlining collection operations, improved staff efficiency and resource allocation. Real- time tracking empowered in-house teams, leading to enhanced operational control and efficiency. The deployment of collection agents became more punctual, ensuring prompt customer service. Automation and integration significantly reduced manual errors, resulting in a more accurate and reliable operational system. Access control and roles/permissions collectively improved security, safeguarding sensitive financial areas and customer information. Detailed reports and dashboards provided actionable insights, contributing to better overall financial operations management. NoQu TAM emerged as a game-changer, positioning our industry for sustained success and customer satisfaction in the dynamic financial sector.</p>
            <h5>Key Factors</h5>
            <ul>
                <li>• Real-time tracking for optimized resource allocation.</li>
                <li>• Geo-fencing for enhanced security.</li>
                <li>• Seamless API integration for streamlined data flow.</li>
                <li>• Workflow alignment for preventing disruptions.</li>
                <li>• Access control and customisable roles for data security.</li>
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

export default TAM_cs2
