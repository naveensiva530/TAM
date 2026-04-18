import React, { useEffect } from 'react'
import "./ChannelPartner.css"
import CP_banner from '../../assets/CP_banner.png'
import CP_1 from '../../assets/CP_1.svg'
import CP_2 from '../../assets/CP_2.svg'
import CP_3 from '../../assets/CP_3.svg'
import CP_4 from '../../assets/CP_4.svg'
import { Link } from 'react-router-dom'
import Counter from '../../Containers/CounterUp'
import { Helmet } from 'react-helmet-async'

const ChannelPartner = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
    <Helmet>
            <title>Partner with NoQu: Innovate Time Management and Queue Solutions</title>
            <meta name="description" content="Become a NoQu channel partner and help reshape the future of time management. Offer our innovative queue management and attendance systems to save time and boost efficiency."/>
            <meta property="og:title" content="NoQu: Revolutionizing Attendance Software & Queue Management Systems" />
            <meta property="og:description" content="NoQu is revolutionizing queues with cutting-edge attendance software and management systems, helping businesses and individuals reclaim time by eliminating waiting. Join us in reshaping time management." />
            <meta property="og:image" content="https://noqu.in/logo.png" />
            <meta property="og:url" content="https://noqu.in/" />
            <meta name="twitter:card" content="NoQu" />
            <meta name="twitter:title" content="NoQu: Revolutionizing Attendance Software & Queue Management Systems" />
            <meta name="twitter:description" content="NoQu is revolutionizing queues with cutting-edge attendance software and management systems, helping businesses and individuals reclaim time by eliminating waiting. Join us in reshaping time management." />
            <meta name="twitter:image" content="https://noqu.in/logo.png" />
        </Helmet>
    
    <div className='ChannelPartner'>
          <div className="ChannelPartner_head">
            <div className="ChannelPartner_head-content fade_in_right">
                <h1> <span>NoQu</span> Partner</h1>
                <h1>Program</h1>
                <h5>Paving the way to a mutual growth</h5>
                <p>
                    Embark on a NoQu-powered journey of expansion with boundless opportunities and enhanced user experience
                </p>
                <Link to="/channel-partner-form"><button>Become a partner</button></Link>
                {/* <button onClick={handleButtonClick}>Become a partner</button> */}
            </div>
            <div className="ChannelPartner_head-img fade_in_left">
                <img src={CP_banner} alt="" />
            </div>
        </div>
        <div className="ChannelPartner_adv">
             <div className="ChannelPartner_adv-1">
                <h1>Why join NoQu as a Channel Partner?</h1>
             </div>
             <div className="ChannelPartner_adv-2">
                  <div className="ChannelPartner_adv_box">
                      <img src={CP_2} alt="" />
                      <h5>Full-Spectrum Support</h5>
                      <p>Enjoy comprehensive support, personalized training, and the guidance of a dedicated channel manager at every step.</p>
                  </div>
             </div>
             <div className="ChannelPartner_adv-3">
                  <div className="ChannelPartner_adv_box">
                      <img src={CP_1} alt="" />
                      <h5>Rewarding Commissions</h5>
                      <p>Reap the benefits of competitive commissions and performance-based incentives, ensuring your success is acknowledged.</p>
                  </div>
                  <div className="ChannelPartner_adv_box">
                      <img src={CP_3} alt="" />
                      <h5>Cutting Edge Solutions</h5>
                      <p>NoQu delivers solutions that provide high value to both the consumers and corporation alike by incorporating the latest technologies available.</p>
                  </div>
             </div>
        </div>
        <div className="ChannelPartner_Clients">
            <h1>Why Forge a Partnership with NoQu ?</h1>
            <p>Partnering with NoQu can assuredly enhance your customer service multi-fold.</p>
            <div className="ChannelPartner_Clients_Counts">
                 <div className="ChannelPartner_Clients_Counts-box">
                      <h1><Counter targetNumber={20000} />+</h1>
                      <p>Active Users</p>
                 </div>
                 <div className="ChannelPartner_Clients_Counts-box">
                      <h1><Counter targetNumber={1000} />+</h1>
                      <p>Clients</p>
                 </div>
                 <div className="ChannelPartner_Clients_Counts-box">
                      <h1><Counter targetNumber={12} />+</h1>
                      <p>Countries covered</p>
                 </div>
            </div>
        </div>
        <div className="ChannelPartner_footer fade_in_bottom">
            <div className="ChannelPartner_footer-content">
                <h1>Join Forces with NoQu Preferred Partners of Leading Businesses</h1>
            
                <Link to="/channel-partner-form"><button>Become a partner</button></Link>
            </div>
            <div className="ChannelPartner_footer-img">
                <img src={CP_4} alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default ChannelPartner;
