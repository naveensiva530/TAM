import React, { useState } from 'react';
import './Lp4.css';
import star1 from '../../assets/Star1.png';
import star2 from '../../assets/Star2.png';
import google from '../../assets/google.png';
import client1 from '../../assets/client1.png';
import client2 from '../../assets/client2.png';
import client3 from '../../assets/client3.png';
import client4 from '../../assets/client4.png';
import client5 from '../../assets/client5.png';
import client6 from '../../assets/client6.png';
import CTA from '../../assets/Lp-cta.png';
import playStore from '../../assets/Store-badge.png';
import appStore from '../../assets/Store-badge2.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Slider from '../../Containers/Slider1/Slider1';
import Slider2 from '../../Containers/Slider2/Slider2';
import award1 from '../../assets/awards1.jpg';
import award2 from '../../assets/awards2.jpeg';
import award3 from '../../assets/awards3.jpeg';
import call from '../../assets/call.png'





const LandingPage = () => {

    const [fullName, setFullName] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [countryCode, setCountryCode] = useState('+91');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [message, setMessage] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const showform = () => {
        window.scrollTo(0, 0);
    }
    // Client logos data
    const clientLogos = [
        { src: client1, alt: "Client logo", className: "lp-5-client-logo-1" },
        { src: client2, alt: "Client logo", className: "lp-5-client-logo-2" },
        { src: client3, alt: "Client logo", className: "lp-5-client-logo-3" },
        { src: client4, alt: "Client logo", className: "lp-5-client-logo-4" },
        { src: client5, alt: "Client logo", className: "lp-5-client-logo-5" },
        { src: client6, alt: "Client logo", className: "lp-5-client-logo-6" },
    ];


    const testimonials = [
        {
            text: "The Febulas application is truly impressive. The concept of allowing staff members to mark their attendance directly from their mobile phones, along with integrated break features, is outstanding. The live tracking functionality adds even more value -truly a remarkable solution!",
            author: "BEST MONEY GOLD",
            logo: "bmg.png" // Optional: Replace with actual logo path or remove if not needed
        },
        {
            text: "I had an amazing experience with this company! The customer service was top-notch, and the product exceeded my expectations. I highly recommend them to anyone looking for quality products and excellent service.",
            author: "MANJU ASSOCIATIONS",
            // Optional: Replace with actual logo path or remove if not needed
        },
        {
            text: "We wish to voice our thoughts about NOQU. We've been using this for over a year, and it provides tracking information, site position, and other details. Numerous advancements are being made that provide exact information on what we require. Additionally, Mr.Dev and Mr.Mathesh, patiently answered all of my questions. We wish the team great success in future.",
            author: "HI TECH CONCRETE SOLUTIONS",
            logo: "hitech.png" // Optional: Replace with actual logo path or remove if not needed
        },
        {
            text: "We have been using the NOQU App for the past 3 months. This Mail is to drop a Feedback regarding the App & Customer Care Person at your end. Mr.Nandhakumar is more Responsive in Clearing all the doubts & picking the Calls with no delay. We are thankful in this regard and help us to Grow better.",
            author: "JAI SAKTHI BALAJI",
            // No logo provided, so it will be optional
        },
    ];

    function handlePrev() {
        setCurrentIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
    }

    function handleNext() {
        setCurrentIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }

    const [currentIndex, setCurrentIndex] = useState(0);
    // FAQ data
    const faqItems = [
        { question: "Do we need to purchase additional hardware, such as biometric devices, to use your Time Attendance management system?", answer: "No, NoQu TAM utilizes advanced technologies such as facial recognition and GPS tracking, making it a cost-effective and hassle-free solution for attendance management." },
        { question: "Is your system cloud-based, or do we need to host it on our own servers?", answer: "NoQu TAM system can be hosted in the AWS cloud for ease of use, but we also provide on-premises options for organizations with specific requirements." },
        { question: "Can you assist with the migration of our existing attendance data into your system?", answer: "Yes, our team can help you migrate existing data to our system to ensure a smooth transition. " },
        { question: "What types of support and training do you offer to help us get started?", answer: "NoQu TAM offers various support options, including training videos and customer support, to ensure you make the most of our system." },
        { question: "Do you offer customization to suit our specific business needs?", answer: "Yes, we provide customization options to tailor our system to your unique requirements." },
        { question: "Does it give real-time data and can I get individual reports? ", answer: "Yes, you can see who’s present, late, or absent instantly and download detailed reports for each employee anytime." },
    ];

    const statsData = [
        { number: "2000+", label: "Happy Clients" },
        { number: "143000+", label: "Active Users" },
        { number: "3+", label: "Years of Excellence" },
    ];

    const formData = {
        fullName,
        countryCode: '+91',
        phoneNo,
        email,
        city,
        message,
    };

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSending(true);


        // Send the form data to the backend API
        axios.post('https://app.noqu.in/api/bing', formData)
            //   axios.post('http://localhost:3004/api/ig-form', formData)
            .then((_response) => {
                // navigate('/LP_Submit');
                console.log("Email sent successfully")
                setIsSending(false);
                navigate('/Submit');
                // setIsSubmitted(true)
            })
            .catch((error) => {
                navigate('/submit-fail');
                console.error(error);
                setIsSending(false);

            });
    };

    const [openFaq, setOpenFaq] = React.useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="lp-5-landing-page">
            {/* Header Section */}
            <section className="lp-5-header-section">
                <div className="lp-5-hero-content">
                    <div className="lp-5-hero-form-card">
                        <form onSubmit={handleSubmit}>
                            <div className="lp-5-form-container">
                                <h1>Book For Free Demo</h1>
                                <div className="lp-5-form-field">
                                    <input type="text"
                                        id="name"
                                        className="lp-5-form-input"
                                        value={fullName}
                                        onChange={(event) => setFullName(event.target.value)}
                                        required placeholder=" " />
                                    <label htmlFor="name" className="lp-5-floating-label">Name</label>
                                </div>

                                <div className="lp-5-form-field">
                                    <input type="tel"
                                        id="phone"
                                        className="lp-5-form-input"
                                        placeholder=" "
                                        value={phoneNo}
                                        onChange={(event) => {
                                            const onlyDigits = event.target.value.replace(/\D/g, '');
                                            if (onlyDigits.length <= 10) {
                                                setPhoneNo(onlyDigits);
                                            }
                                        }}
                                        maxLength={10}
                                        required
                                    />
                                    <label htmlFor="phone" className="lp-5-floating-label">Phone</label>
                                </div>

                                <div className="lp-5-form-field">
                                    <input
                                        type="email"
                                        id="email"
                                        className="lp-5-form-input"
                                        placeholder=" "
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                    />
                                    <label htmlFor="email" className="lp-5-floating-label">Email <span className="lp-5-optional">(Optional)</span></label>
                                </div>

                                <div className="lp-5-form-field">
                                    <input
                                        type="text"
                                        id="city"
                                        className="lp-5-form-input"
                                        placeholder=" "
                                        value={city}
                                        onChange={(event) => setCity(event.target.value)}
                                    />
                                    <label htmlFor="city" className="lp-5-floating-label">City</label>
                                </div>

                                <div className="lp-5-form-field">
                                    <textarea
                                        id="message"
                                        className="lp-5-form-textarea"
                                        placeholder=" "
                                        value={message}
                                        onChange={(event) => setMessage(event.target.value)}
                                    ></textarea>
                                    <label htmlFor="message" className="lp-5-floating-label textarea-label">Message</label>
                                </div>
                                <button disabled={isSending} className="lp-5-form-submit-btn">{isSending ? 'Submitting...' : 'Book Now'}</button>
                            </div>
                        </form>
                    </div>

                    <div className="lp-5-hero-left">
                        <h1 className="lp-5-hero-title">
                            The Smart AI-Powered Attendance Solution for the Modern Workforce
                        </h1>
                        <div className="lp-5-hero-button">
                            <p>50 paise per employee</p>
                        </div>
                        <div className="lp-5-hero-description">
                            <ul className="lp-5-description-list">
                                <li>Maintain Error-Free Attendance Records</li>
                                <li>Easy to Setup & Simple to Use</li>
                                <li>Supports Live Tracking & Geo-Fencing</li>
                                <li>Seamless HRMS & Biometric Integration</li>
                                <li>Dedicated Support Team Included</li>
                            </ul>
                        </div>
                    </div>

                </div>

            </section>

            {/* Client Logos Section */}
            <div className="lp-5-client-logos-section">
                            <div className="lp5-testimonials-title-wrapper">
                <h1 className="lp-5-awards-title">Our Clients</h1>
            </div>
                <div className="lp-5-client-logos-container">
                    <div className="lp-5-separator"></div>

                    <div className="lp-5-client-logos-marquee">
                        <div className="lp-5-client-logos-track">
                            {[...clientLogos, ...clientLogos].map((logo, index) => (
                                <img
                                    key={`client-logo-${index}`}
                                    className={`lp-5-client-logo ${logo.className}`}
                                    alt={logo.alt}
                                    src={logo.src}


                                />
                            ))}
                        </div>
                    </div>

                    <div className="lp-5-separator"></div>
                </div>
            </div>

            <section className="new-lp5-main-content-section">
                <div className="new-lp5-main-content-card">
                    <div className="new-lp5-decorative-circles">
                        <div className="new-lp5-circle new-lp5-circle-1"></div>
                        <div className="new-lp5-circle new-lp5-circle-2"></div>
                        <div className="new-lp5-circle new-lp5-circle-3"></div>
                        <div className="new-lp5-circle new-lp5-circle-4"></div>
                    </div>

                    <div className="new-lp5-main-content-wrapper">
                        <div className="new-lp5-main-content">
                            <h2 className="new-lp5-main-content-description">
                                Manage employee work hours and live tracking in mobile
                            </h2>
                        </div>

                    </div>
                </div>
            </section>

            <div className="lp-5-videoWrapper">
                <div className="lp-5-videoContainer">
                    <iframe
                        src="https://www.youtube.com/embed/4IZMOjJuRho?playlist=4IZMOjJuRho&loop=1&rel=0&modestbranding=1&controls=1"
                        title="Demo Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>


            {/* Stats Section */}
            <div className="lp5-testimonials-title-wrapper">
                <h1 className="lp-5-awards-title">Trusted By</h1>
            </div>
            <section className="new-lp5-stats-section">
                <div className="new-lp5-stats-container">
                    {statsData.map((stat, index) => (
                        <div key={`stat-${index}`} className="new-lp5-stat-item">
                            <div className="new-lp5-stat-number">{stat.number}</div>
                            <div className="new-lp5-stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

                                       <div className="lp5-testimonials-title-wrapper">
                <h1 className="lp-5-awards-title">Our Features</h1>
            </div>

            <div className="lp-5-slider1-wrapper">
                <Slider />
                <button className="lp-5-cta-slider-btn" onClick={showform}>Book a Demo</button>
            </div>

            {/* Main Content Section */}
            <div className="lp5-testimonials-title-wrapper">
                <h1 className="lp-5-awards-title">Testimonials</h1>
            </div>
            <section className="lp-5-main-content-section">
                <div className="lp-5-main-content-card">
                    <div className="lp-5-decorative-circles">
                        <div className="lp-5-circle lp-5-circle-1"></div>
                        <div className="lp-5-circle lp-5-circle-2"></div>
                        <div className="lp-5-circle lp-5-circle-3"></div>
                        <div className="lp-5-circle lp-5-circle-4"></div>
                    </div>

                    <div className="lp-5-testimonial-wrapper">
                        <button className="lp-5-testimonial-nav lp-5-prev" onClick={handlePrev}>
                            ‹
                        </button>

                        <div className="lp-5-testimonial-content">
                            {testimonials[currentIndex].logo && (
                                <img
                                    src={testimonials[currentIndex].logo}
                                    alt="Company Logo"
                                    className="lp-5-testimonial-logo"
                                />
                            )}
                            <p className="lp-5-testimonial-text">
                                {testimonials[currentIndex].text}
                            </p>
                            <h4 className="lp-5-testimonial-author">
                                {testimonials[currentIndex].author}
                            </h4>
                        </div>

                        <button className="lp-5-testimonial-nav lp-5-next" onClick={handleNext}>
                            ›
                        </button>
                    </div>
                </div>
            </section>

            <div className="lp-5-slider2-wrapper">
                <div className="lp-5-slider2">
                    <Slider2 />

                </div>
                <button className="lp-5-cta-slider-btn" onClick={showform}>Book a Demo</button>
            </div>


            {/* Awards Section */}
            <section className="lp-5-awards-section">
                <div className="lp-5-awards-container">
                    <h2 className="lp-5-awards-title">Our Awards & Recognitions</h2>
                    <div className="lp-5-awards-list">
                        <img src={award1} alt="Award 1" className="lp-5-award-image" />
                        <img src={award2} alt="Award 2" className="lp-5-award-image" />
                        <img src={award3} alt="Award 3" className="lp-5-award-image" />
                        <img src="https://www.softwaresuggest.com/award_logo/highly-recommended-winter-2024.png" alt="Award 4" className="lp-5-award-image" />
                    </div>
                </div>
            </section>

            <section className="new-lp5-faq-section">
                <div className="new-lp5-faq-container">
                    <h2 className="new-lp5-faq-main-title">Frequently Asked Questions</h2>

                    <div className="new-lp5-faq-accordion">
                        {faqItems.map((item, index) => (
                            <div key={`faq-${index}`} className="new-lp5-faq-item">
                                <button
                                    className="new-lp5-faq-trigger"
                                    onClick={() => toggleFaq(index)}
                                >
                                    {item.question}
                                    <span className={`new-lp5-faq-icon ${openFaq === index ? 'new-lp5-open' : ''}`}>+</span>
                                </button>
                                {openFaq === index && (
                                    <div className="new-lp5-faq-content">
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="new-lp5-faq-cta">
                        <button onClick={showform} className="new-lp5-book-now-btn">BOOK NOW</button>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="lp-5-cta-section">
                <div className="lp-5-cta-content">
                    <div className="lp-5-cta-left">
                        <h2 className="lp-5-cta-title">Manage Your Workforce From Anywhere</h2>
                        <p className="lp-5-cta-description">
                            Handle attendance, leaves, and employee activities right from your mobile. No Qu TAM helps you manage workforce operations efficiently from real-time attendance tracking to leave monitoring all in one powerful mobile app.
                        </p>

                        <div className="lp-5-app-download">
                            <h3 className="lp-5-app-download-title">Get the App</h3>
                            <div className="lp-5-store-badges">
                                <img src={playStore} alt="Play Store" />
                                <img src={appStore} alt="App Store" />
                            </div>
                            <div className="lp-5-call">
                                <p className="lp-5-call-text">Need Help? Call Us Now:</p>
                            <a href="callto:+91 7401600600"><button><img src={call} width={25} /><p>+91 7401 600 600</p></button></a>
                            </div>
                        </div>
                    </div>

                    <div className="lp-5-cta-right">
                        <img className="lp-5-cta-image" src={CTA} alt="No Qu TAM App" />
                    </div>
                     
                </div>
            </section>

            {/* Footer Section */}
            <footer className="lp-5-footer-section">
                <div className="lp-5-footer-container">
                    <div className="lp-5-footer-copyright">© 2025 Noqu - All Rights Reserved</div>
                    <div className="lp-5-footer-links">
                        <a href="/privacy-policy" target='blank' className="lp-5-footer-link">Terms of use</a>
                        <a href="/terms-and-conditions" target='blank' className="lp-5-footer-link">Privacy policy</a>
                    </div>

                </div>
            </footer>
        </div>
    );
};

export default LandingPage;