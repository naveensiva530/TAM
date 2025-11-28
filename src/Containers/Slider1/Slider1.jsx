import { useState, useEffect } from 'react';
import { Star, Clock, X, MapPin, DollarSign, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import './Slider1.css';

const slides = [
  {
    id: 1,
    icon: Star,
    title: 'MULTIPLE ATTENDANCE MODES',
    description: 'No Qu TAM offers multiple ways to mark attendance, providing businesses with the flexibility to suit every work model. Whether in office, remote, or on site, the system ensures an accurate and convenient online Contactless attendance marking process.',
    video: 'videos/modes.mp4',
  },
  {
    id: 2,
    icon: Clock,
    title: 'LIVE TRACKING',
    description: 'Track your workforce in real time with No Qu Live Tracking. From on field to remote teams, get live activity tracking with location proof, geo tagging, and fencing rules. Live Tracking allows employers to monitor employees real time location and attendance status, ensuring workforce visibility and improved productivity.',
    video: 'videos/tracking.mp4',
  },
  {
    id: 3,
    icon: X,
    title: 'Regularization',
    description: 'Regularization allows HR, Admin, or any authorized person to correct attendance records. Through this process, a reporting officer can make changes for missed punches, late check-ins, and ensure accurate and up to date attendance for payroll and compliance.',
    video: 'videos/regularisation.mp4',
  },
  {
    id: 4,
    icon: MapPin,
    title: 'BIOMETRIC INTEGRATION',
    description: 'No Qu Time and Attendance Management system offers seamless Biometric device Integration, enabling businesses to connect their existing devices. Attendance data is captured and synchronized in real time, ensuring accuracy and eliminating manual errors. With secure identity verification and centralized data, organizations gain a reliable and efficient way to monitor workforce attendance while enhancing real time attendance reports and visibility.',
    video: 'videos/biometric.mp4',
  },
];

export default function Slider({color}) {
  const [activeSlide, setActiveSlide] = useState(3);
  const [tabSlide, setTabSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const activeSlideData = slides[activeSlide];
  const tabsPerSlide = 4;
  const totalSlides = Math.ceil(slides.length / tabsPerSlide);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrevTabSlide = () => {
    setTabSlide((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
  };

  const handleNextTabSlide = () => {
    setTabSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
  };

  const currentTabs = isMobile ? slides.slice(tabSlide * tabsPerSlide, (tabSlide + 1) * tabsPerSlide) : slides;

  return (
    <div className="slider-container">
      <div className="slider-tabs-container">
        <div className="slider-tabs">
          {currentTabs.map((slide, index) => {
            const globalIndex = isMobile ? tabSlide * tabsPerSlide + index : index;
            return (
              <button
                key={slide.id}
                onClick={() => setActiveSlide(globalIndex)}
                className={`slider-tab ${activeSlide === globalIndex ? 'active' : ''}`}
              >
                <div className="slider-tab-text">
                  <div className="slider-tab-title">{slide.title}</div>
                </div>
              </button>
            );
          })}
        </div>
        {/* {isMobile && (
          <div className="slider-nav-container">
            <button className="slider-nav-btn" onClick={handlePrevTabSlide}>
              <ChevronLeft size={24} />
            </button>
            <button className="slider-nav-btn" onClick={handleNextTabSlide}>
              <ChevronRight size={24} />
            </button>
          </div>
        )} */}
      </div>

      <div className="slider-content">
        <div className="slider-video-container">
          {activeSlideData.video && (
            <video
              src={activeSlideData.video}
              className="slider-video"
              autoPlay
              muted
              loop
            />
          )}
        </div>

        <div className="slider-text-container">
          <h2 className="slider-title">{activeSlideData.title}</h2>
          <p className="slider-description">{activeSlideData.description}</p>
        </div>
      </div>
    </div>
  );
}