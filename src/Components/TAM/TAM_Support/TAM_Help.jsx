import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async';
import "./TAM_Help.css"
import TAM_Support_form from '../../../Containers/RegForms/TAM_Support_form';

const TAM_Help = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

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
                <title>NoQu TAM: Help & Support - User Manual</title>
                <meta name="description" content="Access the NoQu TAM user manual and get help with workforce management. Find guides, tutorials, and support resources for the Time and Attendance Management system." />
                <meta property="og:title" content="NoQu TAM: Help & Support" />
                <meta property="og:description" content="Access the NoQu TAM user manual and support resources." />
                <meta property="og:url" content="https://noqu.in/tam-support" />
            </Helmet>
            <div className='TAM_Help' ref={sectionRef}>
                <div className={`TAM_Help_header ${isVisible ? 'header-animated' : ''}`}>
                    <h1 className='TAM_h1'>
                        <span className='title-dark'>Support</span>
                    </h1>
                    <p className='TAM_Help_subtitle'>
                        NoQu TAM Support: Navigating Workforce efficiency
                    </p>
                </div>

                <div className={`TAM_Help-content ${isVisible ? 'content-animated' : ''}`}>
                    <p>
                       Our Support team is here to ensure you get the best experience with No Qu TAM. From initial setup to day-to-day usage, we provide reliable assistance to keep your operations running smoothly.

Whether you need help with configuration, resolving issues, or understanding features, our experts are ready to guide you with clear and practical solutions—so you can focus on managing your workforce efficiently.
                    </p>
                </div>

                <div className={`TAM_Help-form-container ${isVisible ? 'form-animated' : ''}`}>
                    <TAM_Support_form />
                </div>
            </div>
        </>
    )
}

export default TAM_Help
