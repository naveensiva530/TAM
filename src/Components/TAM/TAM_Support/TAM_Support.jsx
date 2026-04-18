import React, { useEffect, useState } from 'react'
import "./TAM_Support.css"
import Help1 from '../../../assets/TAM/Help1.svg'
import VideoMaterials1 from '../../../assets/TAM/VideoMaterials1.svg'
import FAQs1 from '../../../assets/TAM/FAQs1.svg'
import TAM_Help from './TAM_Help'
import TAM_Video from './TAM_Video'
import TAM_FAQ from './TAM_FAQ'
import { Helmet } from 'react-helmet-async'
import banner_img from '../../../assets/banner/support.png';
import TAM_Footer from '../TAM_Footer/TAM_Footer';

import '../Features/TAM_Features_Common.css';

const TAM_Support = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [data, setData] = useState(0)
    const content = [<TAM_Help />, <TAM_Video />, <TAM_FAQ />]

    return (
        <>
            <Helmet>
                <title>Get Support from NoQu: Transform Time Management with Our Systems</title>
                <meta name="description" content="Welcome to NoQu's support page! Access documentation, guides, and resources to get the most out of our queue management and attendance systems. Start here for a smooth setup and seamless experience." />
                <meta property="og:title" content="NoQu: Revolutionizing Attendance Software & Queue Management Systems" />
                <meta property="og:description" content="NoQu is revolutionizing queues with cutting-edge attendance software and management systems, helping businesses and individuals reclaim time by eliminating waiting. Join us in reshaping time management." />
                <meta property="og:image" content="https://noqu.in/logo.png" />
                <meta property="og:url" content="https://noqu.in/" />
                <meta name="twitter:card" content="NoQu" />
                <meta name="twitter:title" content="NoQu: Revolutionizing Attendance Software & Queue Management Systems" />
                <meta name="twitter:description" content="NoQu is revolutionizing queues with cutting-edge attendance software and management systems, helping businesses and individuals reclaim time by eliminating waiting. Join us in reshaping time management." />
                <meta name="twitter:image" content="https://noqu.in/logo.png" />
            </Helmet>

            <div className='TAM_Support tf-page-wrapper'>

                {/* ── SECTION 1 : HERO (tf-hero layout) ── */}
                <div className="tf-hero-main support-hero-override">
                    <div className="tf-hero-left">
                        <div className="tf-hero-center-stack">
                            <h1 className="tf-hero-title">
                                <span className="tf-hero-title-dark">Support </span>
                            </h1>
                            <p className="tf-hero-subtitle">
                                Clients Support, video tutorials, and frequently asked questions — everything you need to get the most out of NoQu.
                            </p>
                        </div>
                    </div>

                    <div className="tf-hero-right">
                        <img src={banner_img} alt="Support Banner" />
                    </div>
                </div>

                {/* ── SECTION 2 : TABS + CONTENT ── */}
                <div className="TAM_Support_list_container">
                    <div className="TAM_Support_head-container">
                        <div className={`TAM_Support_head_box${data === 0 ? ' active' : ''}`} onClick={() => setData(0)}>
                            <img src={Help1} alt="" />
                            <h5>Support</h5>
                        </div>
                        <div className={`TAM_Support_head_box${data === 1 ? ' active' : ''}`} onClick={() => setData(1)}>
                            <img src={VideoMaterials1} alt="" />
                            <h5>Video Materials</h5>
                        </div>
                        <div className={`TAM_Support_head_box${data === 2 ? ' active' : ''}`} onClick={() => setData(2)}>
                            <img src={FAQs1} alt="" />
                            <h5>FAQs</h5>
                        </div>
                    </div>
                    <div className="TAM_Support_content">
                        {content[data]}
                    </div>
                </div>

                <TAM_Footer />
            </div>
        </>
    )
}

export default TAM_Support