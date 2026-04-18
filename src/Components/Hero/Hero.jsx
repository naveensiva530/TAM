import { useEffect, useState } from "react";
import "./Hero.css"
import hero from '../../assets/hero.png'
import Usecase from "../../Containers/Usecase/Usecase";
import Verses from "../Verses/Verses";
import { Link } from "react-router-dom";
import ScheduleAdemo from "../../Containers/RegForms/ScheduleAdemo";

const Hero = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
          entry.target.classList.add('popup_after');
        } else {
          entry.target.classList.remove('popup_after');
        }
      })
    })

    const hiddenElements = document.querySelectorAll('.popup_initial');
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className='hero'>
      <div className='hero-container'>
        <div className="hero-text">
          <h1><span>O</span>nce upon a time, there
            was a concept called 'Queue'.</h1>
          <h2>Now, it is no more !!!</h2>
          
          <button className="scale-hover" onClick={() => openModal()}>Schedule a Demo / Call</button>
        </div>
        <img src={hero} loading="eager" fetchPriority="high" alt="Hero Banner" />
      </div>
      <div className="hero-content">
        <Verses />
      </div>
      < ScheduleAdemo isOpen={isModalOpen} onClose={closeModal} />

    </div>

  )
}

export default Hero
