import React, { useEffect } from 'react'
import "./Career.css"
import career from '../../../assets/career.png'
import career_2 from '../../../assets/career_2.png'
import career_adv1 from '../../../assets/career_adv1.png'
import career_adv2 from '../../../assets/career_adv2.png'
import career_adv3 from '../../../assets/career_adv3.png'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'
const Career = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
        <Helmet>
            <title>NoQu Careers: Join Our Team and Shape the Future of Technology</title>
            <meta name="description" content="At NoQu, we’re on a mission to eliminate inefficiencies in traditional queuing systems. Join our innovative team and help transform the way people experience time." />
            <meta property="og:title" content="NoQu: Revolutionizing Attendance Software & Queue Management Systems" />
            <meta property="og:description" content="NoQu is revolutionizing queues with cutting-edge attendance software and management systems, helping businesses and individuals reclaim time by eliminating waiting. Join us in reshaping time management." />
            <meta property="og:image" content="https://noqu.in/logo.png" />
            <meta property="og:url" content="https://noqu.in/" />
            <meta name="twitter:card" content="NoQu" />
            <meta name="twitter:title" content="NoQu: Revolutionizing Attendance Software & Queue Management Systems" />
            <meta name="twitter:description" content="NoQu is revolutionizing queues with cutting-edge attendance software and management systems, helping businesses and individuals reclaim time by eliminating waiting. Join us in reshaping time management." />
            <meta name="twitter:image" content="https://noqu.in/logo.png" />
        </Helmet>
    
    <div className='Career'>
        <div className="Career_head">
            <h2>Want to craft greatness? <span>Join us!!</span></h2>
            <p>Experience innovation and collaboration at NoQu, where creativity thrives. Join us in a dynamic environment, contribute ideas, and grow professionally with our open positions.</p>
            <img src={career} alt="" />
        </div>
        <div className="Career_growth">
          <div className="Career_growth_head">
              <h2>NoQu: A Place where bright minds flourish</h2>
              <p>Come to NoQu, where work is fun, ideas flow freely...</p>
          </div>
           <div className="Career_growth_adv">
               <div className="Career_growth_adv1">
                     <img src={career_adv1} alt="" />
                    <h4>Team Work</h4>
                    <p>Weave success together with our incredible team</p>
               </div>
               <div className="Career_growth_adv2">
                    <img src={career_adv2} alt="" />
                    <h4>Flexible</h4>
                    <p>Experience a workplace that is dynamic and adaptable</p>
               </div>
               <div className="Career_growth_adv3">
                    <img src={career_adv3} alt="" />
                    <h4>Grow</h4>
                    <p>Harness your career growth day by day</p>
               </div>
           </div>
        </div>
        <div className="Career_hiring">
            <div className="Career_hiring-1">
                <h1>We're Hiring</h1>
                  <p>We're seeking talented individuals to join our team in various roles. Explore our open positions now!</p>

                  <Link to="/career-form"><button>Apply Here</button></Link>
            </div>
            <div>
                <img src={career_2} alt="" />  
            </div>
        </div>
    </div>
    </>
  )
}

export default Career
