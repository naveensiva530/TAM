import React, { useEffect, useRef } from 'react'
import "./TAM_CaseStudies.css"
import casestudybanner from '../../../assets/banner/case.png';
import cs_head1 from '../../../assets/TAM/cs_head1.svg'
import cs_head2 from '../../../assets/TAM/cs_head2.svg'
import cs_head3 from '../../../assets/TAM/cs_head3.svg'
import cs_head4 from '../../../assets/TAM/cs_head4.svg'
import cs_head5 from '../../../assets/TAM/cs_head5.svg'
import cs_head6 from '../../../assets/TAM/cs_head6.svg'
import cs_head7 from '../../../assets/TAM/cs_head7.svg'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'
import TAM_Footer from '../TAM_Footer/TAM_Footer';
import '../Features/TAM_Features_Common.css';

const caseStudies = [
  {
    colorClass: 'cs-card-4',
    img: cs_head1,
    heading: 'Healthcare',
    shortText: '24/7 medical services faced workforce management challenges across diverse departments and varying shifts.',
    detailText: 'The existing practices resulted in delays and errors, directly impacting patient care quality and operational efficiency across all units.',
    link: '/health-care-industry',
  },
  {
    colorClass: 'cs-card-4',
    img: cs_head2,
    heading: 'Financial Institutions',
    shortText: 'Optimizing collection staff efficiency and in-house monitoring became a pressing concern.',
    detailText: 'The optimization of collection staff efficiency, in-house monitoring, and ensuring timely customer service across various business units became a pressing concern.',
    link: '/financial-institutions',
  },
  {
    colorClass: 'cs-card-4',
    img: cs_head3,
    heading: 'Supply Chain and Logistics',
    shortText: 'Dynamic logistics networks required transformative solutions to optimize operations.',
    detailText: 'Grappling with workforce management challenges, delayed deliveries, and operational disruptions, the extensive logistics network required a transformative solution.',
    link: '/supply-chain-and-logistics-industry',
  },
  {
    colorClass: 'cs-card-4',
    img: cs_head4,
    heading: 'Construction',
    shortText: 'Orchestrating multitude of tasks, personnel, and timelines in a dynamic construction environment.',
    detailText: 'Faced with the unique challenges of orchestrating a multitude of tasks, personnel, and timelines in the dynamic construction environment, our client needed a transformative change.',
    link: '/construction-industry',
  },
  {
    colorClass: 'cs-card-4',
    img: cs_head5,
    heading: 'Manpower and Staffing',
    shortText: 'Diverse staffing needs, timely placements, and ensuring client satisfaction required comprehensive tools.',
    detailText: 'Faced with the challenges of diverse staffing needs, timely placements, and ensuring client satisfaction, our clients sought a comprehensive tool to revolutionize their operations.',
    link: '/manpower-and-staffing-industry',
  },
  {
    colorClass: 'cs-card-4',
    img: cs_head6,
    heading: 'Retail Chain',
    shortText: 'In the busy world of retail, where every sale matters, operations and customer service needed improvement.',
    detailText: 'In the busy world of retail, where every sale matters, Rishwant Traders aimed to make their operations and customer service better.',
    link: '/retail-chain',
  },
  {
    colorClass: 'cs-card-4',
    img: cs_head7,
    heading: 'Manufacturing',
    shortText: 'Manual processes and lack of real-time visibility led to operational bottlenecks and delays.',
    detailText: 'Manual processes and a lack of real-time visibility led to operational bottlenecks, delays, and difficulties in coordinating a diverse workforce in a dynamic manufacturing environment.',
    link: '/manufacturing-industry',
  },
];

const TAM_CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('cs-visible');
            // Once visible, stop observing
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    // Observe all animated elements
    const cards     = document.querySelectorAll('.cs-card-wrapper');
    const leftPanels  = document.querySelectorAll('.cs-card-left');
    const rightPanels = document.querySelectorAll('.cs-card-right');

    cards.forEach((el) => observer.observe(el));
    leftPanels.forEach((el) => observer.observe(el));
    rightPanels.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>Explore Case Studies: Employee Tracking & Time Attendance Management</title>
        <meta name="description" content="Discover how NoQu's employee live tracking software and time attendance management system boost efficiency. Our technology eliminates queue time, improving productivity across sectors." />
        <meta property="og:title" content="NoQu: Revolutionizing Attendance Software & Queue Management Systems" />
        <meta property="og:description" content="NoQu is revolutionizing queues with cutting-edge attendance software and management systems, helping businesses and individuals reclaim time by eliminating waiting. Join us in reshaping time management." />
        <meta property="og:image" content="https://noqu.in/logo.png" />
        <meta property="og:url" content="https://noqu.in/" />
      </Helmet>

      <div className='TAM_CaseStudies tf-page-wrapper'>
        <div className="tf-hero-main">
          <div className="tf-hero-left">
            <div className="tf-hero-center-stack">
              <h1 className="tf-hero-title">
                <span className="tf-hero-title-dark">Case </span>
                <span className="tf-hero-title-green">Studies</span>
              </h1>
            </div>
          </div>
          <div className="tf-hero-right">
            <img src={casestudybanner} alt="Case Studies Banner" />
          </div>
        </div>

        <div className="TAM_CaseStudies_container" ref={containerRef}>
          {caseStudies.map((cs, index) => {
            const slideDir = index % 2 === 0 ? 'slide-from-left' : 'slide-from-right';

            return (
              <Link to={cs.link} key={cs.colorClass}>
                <div className={`cs-card-wrapper ${slideDir}`}>
                  <div className={`cs-card ${cs.colorClass}`}>

                    <div className="cs-card-left anim-from-top">
                      <div className="cs-card-icon">
                        <img src={cs.img} alt={cs.heading} />
                      </div>
                      <h2 className="cs-card-heading">{cs.heading}</h2>
                      <p className="cs-card-short-text">{cs.shortText}</p>
                    </div>

                    <div className="cs-card-right anim-from-bottom">
                      <p className="cs-card-detail-text">{cs.detailText}</p>
                      <button className="cs-card-btn">Read Case Study →</button>
                    </div>

                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <TAM_Footer />
    </>
  );
};

export default TAM_CaseStudies;
