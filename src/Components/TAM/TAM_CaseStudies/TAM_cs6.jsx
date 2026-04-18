import React, { useEffect } from 'react'
import './TAM_cs.css'
import caseStudy6 from '../../../assets/banner/caseStudy4.png';
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import TAM_Footer from '../TAM_Footer/TAM_Footer';

const TAM_cs6 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      const handleClick = () => {
        const pdfUrl = 'assets/cs6.pdf';
        const mimeType = 'application/pdf';
        window.open(pdfUrl, '_newtab', `mime=${mimeType}`);
    };
  return (
    <>

    <Helmet>
            <title>"Case Studies: NoQu’s Impact on Retail Chains with Real-Time Solutions"</title>
            <meta name="description" content="NoQu's solutions, including employee live tracking software and live inventory tracking system, transform the retail chain industry by reducing inefficiencies, streamlining operations, and improving resource utilization in real-time." />
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
             <img src={caseStudy6} alt="" />
        </div>
        <h1 className='TAM_h1'>
           <span className="title-green">Retail</span>
            <span className="title-blue">Chain</span>
     </h1>
        <div className="TAM_cases-content">
            <h5>Background</h5>
            <p>Retail Chain Navigating the bustling realm of retail where every transaction holds significance, our traders as a small retail outlet aspired to enhance their operations and elevate customer service. Recognizing the need for improved efficiency and customer satisfaction, the quest for a solution to modernize their operations was initiated.</p>
            <h5>Challenges</h5>
            <p>To perating in a fast-paced retail environment, our traders faced challenges in optimizing operations and ensuring seamless customer service. Manual processes led to inefficiencies, potential errors, and limitations in meeting the dynamic demands of the retail industry.</p>
            <h5>Solutions Proposed by NoQu</h5>
            <p>To address these challenges, the implementation of NoQu was proposed for our traders. Live Inventory Tracking was suggested to ensure real-time monitoring of stock levels, and optimizing restocking processes. Seamless Integration aimed to streamline the sales process, offering quick and accurate transactions. Customizable Dashboards and Reports were introduced to provide insights into sales trends, inventory turnover, and customer preferences. Access Control and Permissions were also implemented.</p>
            <h5>Results</h5>
            <p>The implementation of NoQu at our traders yielded productive outcomes like enhancing tracking precision in retail operations, optimizing stock management, ensuring quick and accurate transactions in sales, providing actionable insights, and securing data management in the fast-paced retail environment</p>
            <h5>Key Factors</h5>
            <ul>
                <li>• Live Inventory Tracking for optimized stock management.</li>
                <li>• Customizable Dashboards and Reports for actionable insights.</li>
                <li>• Access Control and Permissions for Secure Data Management.</li>
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

export default TAM_cs6
