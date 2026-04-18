import { useEffect } from "react";
import "./Services.css"
import ServiceCard from '../../Containers/ServiceCard/ServiceCard'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'
import icon5 from '../../assets/icon5.png'
import icon6 from '../../assets/icon6.png'

const Services = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-show');
        }else {
          entry.target.classList.remove('reveal-show');
        }
      })
     })
  
     const hiddenElements = document.querySelectorAll('.reveal-hidden');
     hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className='services'>
        <h1>NoQu's Products</h1>
        <div className="softwares">
            <div className="reveal-hidden"><ServiceCard img={icon1} heading="Time and Attendance Management (TAM)" text="Traditional attendance systems have become a thing of the past. With NOQU TAM, institutions can now become super efficient, with zero capital investment."/></div>
            <div className="reveal-hidden"><ServiceCard img={icon2} heading="Visitor Appointment Management (VAM)" text="NoQu VAM identifies and validates the visitors virtually. It authenticates, manages, and generates all the reports of the visiting persons in an efficient manner. So, no more tresspassing"/></div>
            <div className="reveal-hidden"><ServiceCard img={icon3} heading="Vault Services" text="Store your important documents and files confidentially in NoQu Vault, your personal digital safe that can be accessed anytime for use and cross-verification."/></div>
            <div className="reveal-hidden"><ServiceCard img={icon4} heading="Education Time and Attendance Management (E-TAM)" text="In addition to the regular features of time attendance management, NoQu provides an attendance system that enables students of educational institutions to check in to the premises using their faces as identification."/></div>
            <div className="reveal-hidden"><ServiceCard img={icon5} heading="Field Tracking System (FTS)" text="Now, managing field service executives has become easy with NoQu FTS. It gives the privilege of tracking the field executives through real-time locations on a map, thereby enabling the institution to keep a watch during working hours."/></div>
            <div className="reveal-hidden"><ServiceCard img={icon6} heading="NoQu Scan" text="NoQu Scan is an advanced mobile app that transforms devices into facial recognition biometric readers for seamless attendance management."/></div>
        </div>
    </div>
  )
}

export default Services
