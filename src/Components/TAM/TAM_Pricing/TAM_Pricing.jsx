import React, { useEffect, useRef } from 'react'
import "./TAM_Pricing.css"
import banner_img from '../../../assets/banner/web banner pricing.png';
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { BriefcaseBusiness, Crown, Wrench, Check, Zap, Shield, Clock, Users, BarChart3, Building2, CalendarCheck, Bell, Fingerprint, MapPin, RefreshCw, FileText, UserCog, Settings, Globe, ChevronRight } from 'lucide-react'
import TAM_Footer from '../TAM_Footer/TAM_Footer';

const TamPricing = () => {
    const cardsRef = useRef([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('card-visible');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        cardsRef.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    const stdFeatures = [
        { icon: <BarChart3 size={16} />, text: 'Attendance Reports' },
        { icon: <Users size={16} />, text: 'Employee Management' },
        { icon: <Settings size={16} />, text: 'Role Configuration' },
        { icon: <Clock size={16} />, text: 'Shift Management' },
        { icon: <RefreshCw size={16} />, text: 'Workflow' },
        { icon: <Globe size={16} />, text: 'Mobile App Attendance - QR / App Button' },
        { icon: <MapPin size={16} />, text: 'Multi Location Attendance' },
        { icon: <Building2 size={16} />, text: 'Multi Time Attendance' },
        { icon: <Users size={16} />, text: 'Role Chart' },
        { icon: <Building2 size={16} />, text: 'Organization Chart' },
        { icon: <CalendarCheck size={16} />, text: 'Holiday Management' },
        { icon: <CalendarCheck size={16} />, text: 'Week Off Management' },
        { icon: <RefreshCw size={16} />, text: 'Break Management' },
        { icon: <Bell size={16} />, text: 'Notification & Alerts' },
        { icon: <Fingerprint size={16} />, text: 'Biometric Device Integration' },
    ];

    const preFeatures = [
        { icon: <RefreshCw size={16} />, text: 'Regularization' },
        { icon: <Building2 size={16} />, text: 'Organization Chart' },
        { icon: <CalendarCheck size={16} />, text: 'Leave Management' },
        { icon: <FileText size={16} />, text: 'Report Scheduler' },
        { icon: <RefreshCw size={16} />, text: 'Break Management' },
        { icon: <Users size={16} />, text: 'Role Chart' },
        { icon: <CalendarCheck size={16} />, text: 'Holiday Management' },
        { icon: <CalendarCheck size={16} />, text: 'Week Off Management' },
        { icon: <Bell size={16} />, text: 'Announcement' },
        { icon: <MapPin size={16} />, text: 'Multi Location Attendance' },
        { icon: <Building2 size={16} />, text: 'Multi Time Attendance' },
        { icon: <Bell size={16} />, text: 'Notification & Alerts' },
        { icon: <FileText size={16} />, text: 'Selfie Report' },
        { icon: <Fingerprint size={16} />, text: 'Face Attendance' },
        { icon: <Globe size={16} />, text: 'Mobile App Attendance - QR / App Button' },
        { icon: <Fingerprint size={16} />, text: 'Biometric Device Integration' },
        { icon: <RefreshCw size={16} />, text: 'Workflow' },
        { icon: <Users size={16} />, text: 'Employee Management' },
        { icon: <BarChart3 size={16} />, text: 'Attendance Reports' },
        { icon: <Settings size={16} />, text: 'Role Configuration' },
        { icon: <Clock size={16} />, text: 'Shift Management' },
    ];

    const addFeatures = [
        { icon: <MapPin size={16} />, text: 'Field Tracking' },
    ];

    return (
        <>
            <Helmet>
                <title>"Explore NoQu Pricing: Face Recognition & Time Attendance Systems"</title>
                <meta name="description" content="Discover NoQu's pricing plans tailored to your needs. Our advanced face recognition attendance system and time attendance management system offer efficient, cutting-edge solutions to optimize your time and operations." />
                <meta property="og:title" content="NoQu: Revolutionizing Attendance Software & Queue Management Systems" />
                <meta property="og:description" content="NoQu is revolutionizing queues with cutting-edge attendance software and management systems, helping businesses and individuals reclaim time by eliminating waiting. Join us in reshaping time management." />
                <meta property="og:image" content="https://noqu.in/logo.png" />
                <meta property="og:url" content="https://noqu.in/" />
                <meta name="twitter:card" content="NoQu" />
                <meta name="twitter:title" content="NoQu: Revolutionizing Attendance Software & Queue Management Systems" />
                <meta name="twitter:description" content="NoQu is revolutionizing queues with cutting-edge attendance software and management systems, helping businesses and individuals reclaim time by eliminating waiting. Join us in reshaping time management." />
                <meta name="twitter:image" content="https://noqu.in/logo.png" />
            </Helmet>

            <div className='TAM_Pricing'>
                {/* ── SECTION 1: HERO HEADER ── */}
                <div className="TAM_Pricing_head">
                    <div className="TAM_Pricing_head_left">
                        <div className="TAM_Pricing_center_stack">
                            <h1 className='TAM_h1'>
                                <span className="w-black">Power of </span>
                                <span className="w-green">Creation.</span>
                                <br />
                                <span className="w-black">Pocket-friendly </span>
                                <span className="w-green">Price.</span>
                            </h1>
                           
                        </div>

                        
                    </div>
                    <div className="TAM_Pricing_head_right">
                        <img src={banner_img} alt="Pricing Banner" />
                    </div>
                </div>

                {/* ── SECTION 2: PRICING CARDS ── */}
                <div className="TAM_Pricing_list">

                    {/* Header */}
                    <div className="pricing-hd">
                        <h1>Pricing</h1>
                      
                    </div>

                    {/* Cards Grid */}
                    <div className="pricing-grid">

                        {/* STANDARD */}
                        <div
                            className="pricing-card card-std"
                            ref={(el) => (cardsRef.current[0] = el)}
                        >
                            <div className="card-glow glow-std"></div>
                            <div className="card-header">
                                <div className="card-icon-wrap icon-std">
                                    <BriefcaseBusiness size={28} color="#0077B6" strokeWidth={2.5} />
                                </div>
                                <div className="card-badge badge-std">Most Popular</div>
                            </div>

                            <div className="card-body">
                                <div className="card-tier">Standard</div>
                               
                               
                            </div>

                            <div className="card-divider"></div>

                            <ul className="card-feats">
                                {stdFeatures.map((feat, i) => (
                                    <li key={i} className="feat-item" style={{ animationDelay: `${i * 50}ms` }}>
                                        <span className="feat-icon">{feat.icon}</span>
                                        <span className="feat-text">{feat.text}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link to="https://appnoqu.com/#/login" className="card-cta cta-std">
                                Get Started
                                <ChevronRight size={18} />
                            </Link>
                        </div>

                        {/* PREMIUM */}
                        <div
                            className="pricing-card card-pre"
                            ref={(el) => (cardsRef.current[1] = el)}
                        >
                            <div className="card-glow glow-pre"></div>
                            <div className="popular-ribbon">
                                <Shield size={14} />
                                Best Value
                            </div>
                            <div className="card-header">
                                <div className="card-icon-wrap icon-pre">
                                    <Crown size={28} color="#fff" strokeWidth={2.5} />
                                </div>
                            </div>

                            <div className="card-body">
                                <div className="card-tier">Premium</div>
                               
                            </div>

                            <div className="card-divider"></div>

                            <ul className="card-feats">
                                {preFeatures.map((feat, i) => (
                                    <li key={i} className="feat-item" style={{ animationDelay: `${i * 40}ms` }}>
                                        <span className="feat-icon">{feat.icon}</span>
                                        <span className="feat-text">{feat.text}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link to="https://appnoqu.com/#/login" className="card-cta cta-pre">
                                Get Premium
                                <ChevronRight size={18} />
                            </Link>
                        </div>

                        {/* ADD ONS */}
                        <div
                            className="pricing-card card-add"
                            ref={(el) => (cardsRef.current[2] = el)}
                        >
                            <div className="card-glow glow-add"></div>
                            <div className="card-header">
                                <div className="card-icon-wrap icon-add">
                                    <Wrench size={28} color="#0077B6" strokeWidth={2.5} />
                                </div>
                            </div>

                            <div className="card-body">
                                <div className="card-tier">Add Ons</div>
                                
                            </div>

                            <div className="card-divider"></div>

                            <ul className="card-feats">
                                {addFeatures.map((feat, i) => (
                                    <li key={i} className="feat-item" style={{ animationDelay: `${i * 50}ms` }}>
                                        <span className="feat-icon">{feat.icon}</span>
                                        <span className="feat-text">{feat.text}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link to="https://appnoqu.com/#/login" className="card-cta cta-add">
                                Explore Add Ons
                                <ChevronRight size={18} />
                            </Link>
                        </div>

                    </div>

                    {/* Bottom CTA */}
                    <div className="pricing-btm">
                       
                        <Link to="https://appnoqu.com/#/login" className="pricing-btm-btn">Review All Plans →</Link>
                    </div>

                </div>
                <TAM_Footer />
            </div>
        </>
    )
}

export default TamPricing
