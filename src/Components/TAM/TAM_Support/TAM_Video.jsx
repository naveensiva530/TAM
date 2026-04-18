import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async';
import "./TAM_Video.css"
import ReactPlayer from 'react-player';
import TAM_English1 from "../../../assets/TAM/TAM_English1.mp4";
import NoQu_Attendance from "../../../assets/TAM/NoQu_Attendance.mp4";
import noquapp from "../../../assets/TAM/noquapp.mp4";
import { Link } from 'react-router-dom';

const TAM_Video = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Helmet>
                <title>NoQu TAM: Video Materials & Tutorials</title>
                <meta name="description" content="Watch NoQu TAM video tutorials and learn how to use the Time and Attendance Management system effectively. Step-by-step guides for attendance tracking and workforce management." />
                <meta property="og:title" content="NoQu TAM: Video Materials & Tutorials" />
                <meta property="og:description" content="Watch NoQu TAM video tutorials for workforce management." />
                <meta property="og:url" content="https://noqu.in/tam-videos" />
            </Helmet>
            <div className='TAM_Video' ref={sectionRef}>
                <div className={`TAM_Video_header ${isVisible ? 'header-animated' : ''}`}>
                    <h1 className='TAM_h1'>
                        <span className="title-dark">Video </span>
                        <span className="title-blue">Materials</span>
                </h1>
            </div>

            <div className="TAM_Video-content">
                <div className="TAM_Video-container">
                    <div className={`TAM_Video-box ${isVisible ? 'box-animated' : ''}`} style={{ animationDelay: '0.1s' }}>
                        <h2>NoQu TAM application</h2>
                        <div className="TAM_Video-box-videomaterial">
                            <ReactPlayer url={TAM_English1} controls={true} muted={true} width="100%" height="100%"/>
                        </div>
                    </div>

                    <div className={`TAM_Video-box ${isVisible ? 'box-animated' : ''}`} style={{ animationDelay: '0.2s' }}>
                        <h2>NoQu TAM QR Attendance workflow</h2>
                        <div className="TAM_Video-box-videomaterial">
                            <ReactPlayer url={NoQu_Attendance} controls={true} muted={true} width="100%" height="100%"/>
                        </div>
                    </div>

                    <div className={`TAM_Video-box ${isVisible ? 'box-animated' : ''}`} style={{ animationDelay: '0.3s' }}>
                        <h2>NoQu TAM Live Location Tracking</h2>
                        <div className="TAM_Video-box-videomaterial">
                            <ReactPlayer url={noquapp} controls={true} muted={true} width="100%" height="100%"/>
                        </div>
                    </div>
                </div>

                <Link to="https://appnoqu.com/#/login" className="TAM_Video-btn">
                    Log on
                </Link>
            </div>
        </div>
        </>
    )
}

export default TAM_Video
