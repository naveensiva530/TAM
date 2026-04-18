import { useEffect } from "react";
import "./Verses.css"
import Usecase from "../../../Containers/Usecase/Usecase";
import FaceRecognition from '../../assets/FaceRecognition.png'
import liveLocation from '../../assets/liveLocation.png'
import dashboard from '../../assets/dashboard.png'
import accessControl from '../../assets/accessControl.png'
import productSupport from '../../assets/productSupport.png'
import qrCode from '../../assets/qrCode.png'
import integrations from '../../assets/integrations.png'
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
      <h1>Use mobile devices to manage employee work hours and Live Tracking.</h1>
        <div className="scroller" data-speed="fast">
        <ul className="tag-list scroller__inner">
            
            <li><Usecase img={liveLocation} heading="Live Location Tracker" content="Realize Effective Workforce Oversight with Geo-Fencing and Live Location Tracking "/></li>
            <li><Usecase img={integrations} heading="Integration" content="Revolutionize workplace with workflow integration"/></li>
            <li><Usecase img={dashboard} heading="Reports and Dashboards" content="Get data-driven insights for a better workforce management strategy "/></li>
            <li><Usecase img={qrCode} heading="QR Scan" content="NOQU improves employee productivity and simplifies workforce management"/></li>
            <li><Usecase img={locator} heading="Geo Fencing" content="Realize Effective Workforce Oversight with Geo-Fencing and Live Location Tracking "/></li>
            <li><Usecase img={accessControl} heading="Access Control" content="Realize Effective Workforce Oversight with Geo-Fencing and Live Location Tracking "/></li>
            <li><Usecase img={FaceRecognition} heading="Face Recognition" content="Get data-driven insights for a better workforce management strategy"/></li>
            <li><Usecase img={productSupport} heading="Product Support" content="Realize Effective Workforce Oversight with Geo-Fencing and Live Location Tracking "/></li>

        </ul>
        </div>
    </div>

  )
}

export default Verses
