import React, { useState } from 'react';
import './TAM_Homepage2.css';
import client1 from '../../../assets/client1.png';
import client2 from '../../../assets/client2.png';
import client3 from '../../../assets/client3.png';
import client4 from '../../../assets/client4.png';
import client5 from '../../../assets/client5.png';
import client6 from '../../../assets/client6.png';
import Slider from '../../../Containers/Slider1/Slider1';
import Slider2 from '../../../Containers/Slider2/Slider2';
import award1 from '../../../assets/awards1.jpg';
import award2 from '../../../assets/awards2.jpeg';
import award3 from '../../../assets/awards3.jpeg';
import adv from '../../../assets/career_adv2.png';

export default function TAM_Homepage2() {
  const [email, setEmail] = useState('');
  const statsData = [
    { number: "2000+", label: "Happy Clients" },
    { number: "143000+", label: "Active Users" },
    { number: "3+", label: "Years of Excellence" },
  ];

const features = [
  {
    title: "Fast Performance",
    description: "Experience optimized performance with quicker load times and smooth workflows.",
    image: adv,
  },
  {
    title: "Secure Platform",
    description: "Enterprise-grade protection that keeps your data safe at all times.",
    image: adv,
  },
  {
    title: "Easy Integration",
    description: "Seamlessly connect with your internal tools and third-party systems.",
    image: adv,
  },
  {
    title: "24/7 Support",
    description: "Our support team is available round-the-clock for your needs.",
    image: adv,
  },
];


  const testimonials = [
    {
      msg: "We love this App! It’s user-friendly, efficient, and accurate for tracking attendance. The GPS feature provides real-time updates, and the customizable options fit our needs perfectly. Managing teams and generating reports is a breeze.",
      avatar: "GW",
      name: "Dilip",
      role: "Managing Director / Project Delivery",
    },
    {
      msg: "This platform has helped us streamline attendance and payroll. Reports are accurate and it reduced manual work drastically. A must-have for modern workforce management.",
      avatar: "RK",
      name: "Rahul Kumar",
      role: "HR Operations Specialist",
    },
    {
      msg: "Fantastic UI & easy onboarding. The mobile GPS feature transformed our remote team coordination. Customer support is also excellent and responsive.",
      avatar: "SM",
      name: "Sangeetha M",
      role: "Project Manager",
    },
    {
      msg: "This solution has elevated our productivity. Insightful reports and excellent performance tracking. Worth every penny!",
      avatar: "AP",
      name: "Ajith Prasad",
      role: "Team Lead",
    },
  ];

  const [active, setActive] = useState(0);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index) => {
    setActive(index);
  };

  const handleNewsletterSignup = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <div className="TAM_Homepage2_wrapper">
      {/* Hero Section */}
      <section className="TAM_Homepage2_hero">
        <div className="TAM_Homepage2_hero_container">
          <div className="TAM_Homepage2_hero_content">
            <h1 className="TAM_Homepage2_hero_title">
              The Smart AI-Powered Attendance Solution for the Modern Workforce
            </h1>
            <p className="TAM_Homepage2_hero_subtitle">
              Say to AI Efficiency, Punctuality, Attendance Efficiency and Streamlined Productivity
            </p>
            <div className="TAM_Homepage2_hero_buttons">
              <button className="TAM_Homepage2_btn_primary">Sign up for free trail</button>
              <button className="TAM_Homepage2_btn_secondary">Request Demo</button>
            </div>
          </div>
          <div className="TAM_Homepage2_hero_visual">
            <div className="TAM_Homepage2_hero_image_wrapper">
              <div className="TAM_Homepage2_phone_frame">
                <div className="TAM_Homepage2_phone_screen">
                  <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', height: '100%', borderRadius: '20px' }}></div>
                </div>
              </div>
              <div className="TAM_Homepage2_dashboard_preview">
                <div style={{ background: '#f0f4ff', padding: '20px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                  <div style={{ background: 'white', height: '150px', borderRadius: '8px' }}></div>
                </div>
              </div>
              <div className="TAM_Homepage2_woman_avatar">
                <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="TAM_Homepage2_trusted">
        <div className="TAM_Homepage2_trusted_container">
          <p className="TAM_Homepage2_trusted_label">Trusted by leading organizations</p>
          <div className="TAM_Homepage2_logos_grid">
            <img className='TAM_Homepage2_logo_item' src={client1} alt="" />
            <img className='TAM_Homepage2_logo_item' src={client2} alt="" />
            <img className='TAM_Homepage2_logo_item' src={client3} alt="" />
            <img className='TAM_Homepage2_logo_item' src={client4} alt="" />
            <img className='TAM_Homepage2_logo_item' src={client5} alt="" />
          </div>
        </div>
      </section>

      <div className='TAM_Homepage2_slider1'>
        <Slider color="#4f7df0" />
      </div>

      <div className="TAM_homepage-section">
        <h2 className="TAM_homepage-stats-title">
          AI Attendance that grows with your business worldwide
        </h2>

        <a href="#" className="TAM_homepage-learnmore">Learn more</a>

        <div className="TAM_homepage-stats-container">
          <div className="TAM_homepage-stat-box">
            <h3 className="TAM_homepage-number TAM_homepage-blue">1000+</h3>
            <p className="TAM_homepage-caption">
              Serving diverse organizations with reliable solutions.
            </p>
          </div>

          <div className="TAM_homepage-stat-box">
            <h3 className="TAM_homepage-number TAM_homepage-green">30000+</h3>
            <p className="TAM_homepage-caption">
              Supporting professionals with seamless workforce management
            </p>
          </div>

          <div className="TAM_homepage-stat-box">
            <h3 className="TAM_homepage-number TAM_homepage-purple">12+</h3>
            <p className="TAM_homepage-caption">
              Extending trusted AI attendance across global markets.
            </p>
          </div>
        </div>
      </div>




      <div className="ts-wrapper">
        <h2 style={{ fontSize: '25px' }}>Testimonials</h2>
        <div className="ts-quote-icon">❝❞</div>

        <p className="ts-description">{testimonials[active].msg}</p>

        <div className="ts-user">
          <div className="ts-avatar">{testimonials[active].avatar}</div>
          <div className="ts-user-info">
            <div className="ts-user-name">{testimonials[active].name}</div>
            <div className="ts-user-role">{testimonials[active].role}</div>
          </div>
        </div>


        <div className="ts-dots">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`ts-dot ${active === index ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
      </div>






      <div className='TAM_Homepage2_slider2'>
        <Slider2 color="#4f7df0" />
      </div>
      <section className="lp-5-awards-section">
        <div className="lp-5-awards-container">
          <h2 className="tam-homepage-awards-title">We're leading the competition in every category</h2>
          <div className="lp-5-awards-list">
            <img src={award1} alt="Award 1" className="lp-5-award-image" />
            <img src={award2} alt="Award 2" className="lp-5-award-image" />
            <img src={award3} alt="Award 3" className="lp-5-award-image" />
            <img src="https://www.softwaresuggest.com/award_logo/highly-recommended-winter-2024.png" alt="Award 4" className="lp-5-award-image" />
          </div>
        </div>
      </section>
      <div className="feature-section">

  <div className="tam-homepage2-wrapper">

      <h2 className="tam-homepage2-title">
        Trusted Attendance <br /> for Modern Teams
      </h2>

      <p className="tam-homepage2-subtitle">
        No Qr TAM brings everything together in one place, making work easier, faster, and more organized.
      </p>

      <div className="tam-homepage2-container">
        {features.map((f, i) => (
          <div key={i} className="tam-homepage2-card">

            <div className="tam-homepage2-image-wrapper">
              <img src={f.image} alt={f.title} className="tam-homepage2-image" />
            </div>

            <h3 className="tam-homepage2-feature-title">{f.title}</h3>

            <p className="tam-homepage2-feature-desc">{f.description}</p>

          </div>
        ))}
      </div>
    </div>
      </div>
    </div>
  );
}