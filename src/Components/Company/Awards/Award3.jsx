import React, { useEffect } from 'react'
import "./Award3.css"
import News2 from '../../../assets/News2.jpeg'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
const Award3 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>

    <Helmet>
            <title>NoQu Earns DPIIT Recognition: A Mark of Innovation</title>
            <link rel="canonical" href="https://www.noqu.in/startuptn" />
            <meta name="description" content="NoQu earns DPIIT recognition, validating its role as a leading startup. This milestone highlights the company’s commitment to innovation, growth, and job creation in the tech industry." />
            <meta property="og:title" content="NoQu: Revolutionizing Attendance Software & Queue Management Systems" />
            <meta property="og:description" content="NoQu is revolutionizing queues with cutting-edge attendance software and management systems, helping businesses and individuals reclaim time by eliminating waiting. Join us in reshaping time management." />
            <meta property="og:image" content="https://noqu.in/logo.png" />
            <meta property="og:url" content="https://noqu.in/" />
            <meta name="twitter:card" content="NoQu" />
            <meta name="twitter:title" content="NoQu: Revolutionizing Attendance Software & Queue Management Systems" />
            <meta name="twitter:description" content="NoQu is revolutionizing queues with cutting-edge attendance software and management systems, helping businesses and individuals reclaim time by eliminating waiting. Join us in reshaping time management." />
            <meta name="twitter:image" content="https://noqu.in/logo.png" />
        </Helmet>

    <div className='Newspage2'>
        <h1 className='TAM_h1'>DPIIT</h1>
        <h5 className='TAM_h5'>Department for Promotion of Industry and Internal Trade</h5>
        <div className="Newspage2-content">
            <div>
                <img src={News2} alt="" />
            </div>
            <div className="Newspage2-text">
                <p>In a moment of pride, NoQu announces the acquisition of DPIIT recognition, a prestigious acknowledgment that solidifies its standing as a promising startup. As a dynamic and vibrant company, NoQu is celebrated for its significant contributions to innovation, playing a pivotal role in driving economic development and fostering job creation within its industry.</p>
                <p>The DPIIT recognition serves as a testament to NoQu's commitment to excellence and its dedication to pushing the boundaries of innovation. This milestone not only validates the company's current achievements but also propels it forward as a key player in the technology solutions sector. With a focus on shaping the future, NoQu anticipates leveraging this recognition to further fuel its trajectory of success, making lasting contributions to the industry and beyond</p>
            </div>
        </div>
        <div className="Newspage2_button">
            <Link to="/Awards"><button>Back</button></Link>
        </div>
    </div>
    </>
  )
}

export default Award3
