import { useEffect } from "react";
import "./Verses.css"
import Usecase from "../../Containers/Usecase/Usecase";
import FaceRecognition from '../../assets/FaceRecognition.png'
import geoFencing from '../../assets/geoFencing.png'
import liveLocation from '../../assets/liveLocation.png'
import dashboard from '../../assets/dashboard.png'
import accessControl from '../../assets/accessControl.png'
import productSupport from '../../assets/productSupport.png'
import qrCode from '../../assets/qrCode.png'
import integration from '../../assets/integration.png'
import locator from '../../assets/locator.png'

  const Verses = () => {
    useEffect(() => {
      const scrollers = document.querySelectorAll(".scroller");

      // If a user hasn't opted in for recuded motion, then we add the animation
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
      }
      
      function addAnimation() {
        scrollers.forEach((scroller) => {
          // add data-animated="true" to every `.scroller` on the page
          scroller.setAttribute("data-animated", true);
      
          // Make an array from the elements within `.scroller-inner`
          const scrollerInner = scroller.querySelector(".scroller__inner");
          const scrollerContent = Array.from(scrollerInner.children);

          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
          });
        });
      }
    }, []);

  return (
    <div className="box">
      
        <div className="scroller" data-speed="fast">
        <ul className="tag-list scroller__inner">
            
            <li><Usecase img={liveLocation} heading="Live Location Tracker" content="Track employee locations in real time to enhance operational efficiency."/></li>
            <li><Usecase img={integration} heading="Integration" content="Effortlessly connect HR management and payroll for streamlined processes."/></li>
            <li><Usecase img={dashboard} heading="Reports and Dashboards" content="Comprehensive analytics dashboard for visualizing attendance data and performance metrics. "/></li>
            <li><Usecase img={qrCode} heading="QR Scan" content="Simplify attendance with quick QR code scanning for users."/></li>
            <li><Usecase img={geoFencing} heading="Geo Fencing" content="Set automated location-based boundaries and alerts for active employee monitoring."/></li>
            <li><Usecase img={accessControl} heading="Access Control" content="Manage secure access to facilities, improving safety and accountability."/></li>
            <li><Usecase img={FaceRecognition} heading="Face Recognition" content="Utilize biometric technology to ensure precise employee identification and foolproof security"/></li>
            <li><Usecase img={productSupport} heading="Product Support" content="Dedicated assistance for users to maximize software functionality and satisfaction."/></li>

        </ul>
        </div>
        <h1>Manage employee work hours and live tracking in mobile.</h1>
    </div>

  )
}

export default Verses
