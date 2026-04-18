import React, { useEffect } from 'react'
import "./Award2.css"
import News3 from '../../../assets/News3.jpeg'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const Award2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>

    <Helmet>
            <title>NoQu Recognized by Startup TN: A Leader in Innovation</title>
            <link rel="canonical" href="https://www.noqu.in/dpiit" />
            <meta name="description" content="NoQu is honored by Startup TN, showcasing its commitment to innovation, economic growth, and job creation in the region." />
            <meta property="og:title" content="NoQu: Revolutionizing Attendance Software & Queue Management Systems" />
            <meta property="og:description" content="NoQu is revolutionizing queues with cutting-edge attendance software and management systems, helping businesses and individuals reclaim time by eliminating waiting. Join us in reshaping time management." />
            <meta property="og:image" content="https://noqu.in/logo.png" />
            <meta property="og:url" content="https://noqu.in/" />
            <meta name="twitter:card" content="NoQu" />
            <meta name="twitter:title" content="NoQu: Revolutionizing Attendance Software & Queue Management Systems" />
            <meta name="twitter:description" content="NoQu is revolutionizing queues with cutting-edge attendance software and management systems, helping businesses and individuals reclaim time by eliminating waiting. Join us in reshaping time management." />
            <meta name="twitter:image" content="https://noqu.in/logo.png" />
        </Helmet>

    <div className='Newspage3'>
        <h1 className='TAM_h1'>StartupTN</h1>
        <div className="Newspage3-content">
            <img src={News3} alt="" />
            <div className="Newspage3-text">
                <p>NoQu is thrilled to share its recent success - achieving recognition from Startup TN. This acknowledgment solidifies NoQu's reputations an innovative force, positioning the company as a leader in the startup ecosystem. Known for its dynamic contributions to the tech industry, NoQu stands as a shining example of entrepreneurial excellence.</p>
                <p>The Startup TN recognition underscores NoQu's unwavering commitment to innovation,highlighting its pivotal role in the thriving startup landscape. This acknowledgment affirms the company's dedication to driving economic growth and creating job opportunities within the region</p>
            </div>

        </div>
        <p>Far from being just a milestone, this recognition serves as a stepping-stone for NoQu . The company looks forward to leveraging the Startup TN acknowledgment to foster partnerships, attract top-tier talent, and enhance its influence in the startup community. With a strategic eye on the future, NoQu is set to make enduring contributions, influencing the trajectory of innovation inthe region and beyond</p>
        <div className="News3_button">
            <Link to="/Awards"><button>Back</button></Link>
        </div>
    </div>
    </>
  )
}

export default Award2
