import React, { useEffect } from 'react'
import "./Awards.css"
import awards1 from '../../../assets/awards1.jpg'
import awards2 from '../../../assets/awards2.jpeg'
import awards3 from '../../../assets/awards3.jpeg'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const Awards = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Helmet>
            <title>NoQu Awards: Recognizing Excellence in Time & Attendance Solutions</title>
            <meta name="description" content="At NoQu, we’re proud to showcase our innovative achievements. Our employee live tracking software and geofencing attendance system have transformed industries by eliminating inefficiencies and saving valuable time." />
            <meta property="og:title" content="NoQu: Revolutionizing Attendance Software & Queue Management Systems" />
            <meta property="og:description" content="NoQu is revolutionizing queues with cutting-edge attendance software and management systems, helping businesses and individuals reclaim time by eliminating waiting. Join us in reshaping time management." />
            <meta property="og:image" content="https://noqu.in/logo.png" />
            <meta property="og:url" content="https://noqu.in/" />
            <meta name="twitter:card" content="NoQu" />
            <meta name="twitter:title" content="NoQu: Revolutionizing Attendance Software & Queue Management Systems" />
            <meta name="twitter:description" content="NoQu is revolutionizing queues with cutting-edge attendance software and management systems, helping businesses and individuals reclaim time by eliminating waiting. Join us in reshaping time management." />
            <meta name="twitter:image" content="https://noqu.in/logo.png" />
        </Helmet>

    <div className='awards'>
        <h1>Awards</h1>
        <div className="award_section">
            <Link to="/iso-ceritificate">            
                <div className="award_1">
                      <img src={awards1} alt="" />
                      <h5>ISO / IEC 27001: 2022</h5>
                </div>
            </Link>
            <Link to="/dpiit">
                <div className="award_1">
                  <img src={awards2} alt="" />
                  <h5>DPIIT</h5>
                </div>
            </Link>
            <Link to="/startuptn">
              <div className="award_1">
                  <img src={awards3} alt="" />
                  <h5>StartupTN</h5>
              </div>  
            </Link>
            <a href='https://www.softwaresuggest.com/noqu' target='_blank'>
            <div className="award_1">
                  <img src='https://www.softwaresuggest.com/award_logo/highly-recommended-winter-2024.png' alt="" />
                  <h5>Software Suggest</h5>
              </div> 
            </a>


        </div>
    </div>
    </>
  )
}

export default Awards
