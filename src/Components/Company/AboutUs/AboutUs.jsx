import React, { useEffect } from 'react'
import "./AboutUs.css"
import about from '../../../assets/about.png'
import Anbusudar_Director from '../../../assets/Anbusudar_Director.jpg'
import Surendernath_Director from '../../../assets/Surendernath_Director.jpg'
import { Helmet } from 'react-helmet-async'

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
        <Helmet>
            <title>NoQu: Revolutionizing Workforce Management with HR Payroll Software</title>
            <meta name="description" content="NoQu transforms workforce management with innovative HR payroll software and mobile attendance, eliminating inefficiencies and saving valuable time." />
            <meta property="og:title" content="NoQu: Revolutionizing Attendance Software & Queue Management Systems" />
            <meta property="og:description" content="NoQu is revolutionizing queues with cutting-edge attendance software and management systems, helping businesses and individuals reclaim time by eliminating waiting. Join us in reshaping time management." />
            <meta property="og:image" content="https://noqu.in/logo.png" />
            <meta property="og:url" content="https://noqu.in/" />
            <meta name="twitter:card" content="NoQu" />
            <meta name="twitter:title" content="NoQu: Revolutionizing Attendance Software & Queue Management Systems" />
            <meta name="twitter:description" content="NoQu is revolutionizing queues with cutting-edge attendance software and management systems, helping businesses and individuals reclaim time by eliminating waiting. Join us in reshaping time management." />
            <meta name="twitter:image" content="https://noqu.in/logo.png" />
        </Helmet>
    
    <div className='AboutUs'>
        <div className="AboutUs_head">
            <h1>We at NoQu!!!</h1>
            <p>How did we get here? Glad you asked</p>
            <img src={about} alt="" />
        </div>
        <div className="our_story">
            <h1>Our Story</h1>
            <p>NoQu is a company that emerged from the vision of tech enthusiasts. Committed to simplifying complex challenges through cutting-edge technology and reshaping the future, NoQu recognizes the universal frustration of spending precious time standing in queues. Whether it's the morning rush at the workplace, the endless lines at public places, or at the grocery shopping trips, millions of hours are lost every day to the monotony of waiting. NoQu believes that time is our most asset and should not be squandered on mundane tasks.</p>
            <p>
            NoQu objective is clear and that is to change the way people experience queues and waiting, catering to the needs of corporates, SMEs, and individuals alike. Through innovative solutions and forward-thinking approaches, NoQu aims to reshape the future by eliminating the inefficiencies of traditional queuing systems.
            </p>
            <p>Driven by a passion for innovation and a commitment to simplifying complexity, NoQu is proud to be at the forefront of the queue eliminating revolution. Join on NoQu journey as it harness the power of technology to create a future where waiting is no longer a burden, but an opportunity waiting to be seized. Welcome to NoQu - where time is on your side.</p>
        </div>

        <div className="AboutUs_md_profile">
            <h1>Board Members</h1>
            <div className="AboutUs_md_profile_box">
              <div className="AboutUs_md_profile-1">
                  <div className="AboutUs_md_profile-img">
                      <img src={Anbusudar_Director} alt="" />
                  </div>
                  
                  <div className="md_name">
                      <h4>Anbusudar Rajaram</h4>
                      <p>Managing Director</p>
                  </div>
              </div>
              <div className="AboutUs_md_profile-2">
                  <div className="AboutUs_md_profile-img">
                      <img src={Surendernath_Director} alt="" />
                  </div>
                  <div className="md_name">
                      <h4>Surender nath S P</h4>
                      <p>Founder&Director</p>
                  </div>
              </div> 
            </div>
        </div>
        

    </div>
    </>
  )
}

export default AboutUs
