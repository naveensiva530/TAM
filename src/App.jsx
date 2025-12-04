import { useState, useEffect } from 'react'
import './App.css'
import ChannelPartner from './Components/ChannelPartner/ChannelPartner'
import AboutUs from './Components/Company/AboutUs/AboutUs'
import Awards from './Components/Company/Awards/Awards'
import Career from './Components/Company/Career/Career'
import Contact from './Components/Company/Contact/Contact'
import News from './Components/Company/News/News'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import TAM_CaseStudies from './Components/TAM/TAM_CaseStudies/TAM_CaseStudies'
import TAM_home_page from './Components/TAM/TAM_Home_Page/TAM_home_page'
import TAM_Navbar from './Components/TAM/TAM_Navbar/TAM_Navbar'
import TAM_Support from './Components/TAM/TAM_Support/TAM_Support'
import CareerForm from './Containers/RegForms/CareerForm'
import ChannelPartnerForm from './Containers/RegForms/ChannelPartnerForm'
import ScheduleAdemo from './Containers/RegForms/ScheduleAdemo'
import {  Routes, Route, Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import TAM_cs1 from './Components/TAM/TAM_CaseStudies/TAM_cs1'
import TAM_cs2 from './Components/TAM/TAM_CaseStudies/TAM_cs2'
import TAM_cs7 from './Components/TAM/TAM_CaseStudies/TAM_cs7'
import TAM_cs6 from './Components/TAM/TAM_CaseStudies/TAM_cs6'
import TAM_cs5 from './Components/TAM/TAM_CaseStudies/TAM_cs5'
import TAM_cs4 from './Components/TAM/TAM_CaseStudies/TAM_cs4'
import TAM_cs3 from './Components/TAM/TAM_CaseStudies/TAM_cs3'
import Footer2 from './Components/Footer2/Footer2'
import Submit from './Containers/Submit/Submit'
import SubmitFail from './Containers/Submit/SubmitFail'
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy'
import TermsAndConditions from './Components/PrivacyPolicy/TermsAndConditions'
import call from './assets/call.png'
import whatsapp from './assets/whatsapp1.png'
import Award3 from './Components/Company/Awards/Award3'
import Award2 from './Components/Company/Awards/Award2'
import Award1 from './Components/Company/Awards/Award1'
import Admin from './Admin/Admin'
import Lp from './Components/LP/Lp'
import TamPricing from './Components/TAM/TAM_Pricing/TAM_Pricing'
import Blog from './Components/Blog/Blog'
import Blog1 from './Components/Blog/Blog1'
import Blog2 from './Components/Blog/Blog2'
import Blog3 from './Components/Blog/Blog3'
import Blog4 from './Components/Blog/Blog4'
import Blog5 from './Components/Blog/Blog5'
import TAM_form from './Containers/RegForms/TAM_form'
import Unsub_popup from './Containers/Unsub_popup/Unsub_popup'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import LP_Submit from './Containers/Submit/LP_Submit'
import NewsDetail from './Components/Company/News/NewsDetail'
import Lp2 from './Components/LP/Lp2'
import Lp3 from './Components/LP/Lp3'
import Lp4 from './Components/LP/Lp4'
import ScheduleAdemolp from './Containers/RegForms/ScheduleAdemolp'
import NotFound from './Components/Error Page/NotFound'
import TAM_Homepage2 from './Components/TAM/TAM_Homepage2/TAM_Homepage2'


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, BarElement, Title, Tooltip, Legend);




function App() {
  const [navbar, setNavbar] = useState(<Navbar />);
  const [additionalNavbar, setAdditionalNavbar] = useState(null);
  const [footer, setFooter] = useState(<Footer2 />);
  const [shorticons, setShorticons] = useState(true)
  const [callicon, setCallicon] = useState(false)
  const location = useLocation();
  
  useEffect(() => {
    if (location.pathname === '/lp') {
      setCallicon(true)
      setShorticons(false)
    } else{
      setCallicon(false)
      setShorticons(true)
    }
  }, [location.pathname]);
  useEffect(() => {
    if (location.pathname === '/tam-time-and-attendance-management'
      || location.pathname === '/tam-support'
      || location.pathname === '/tam'
      || location.pathname === '/tam-casestudies'
      || location.pathname === '/tam-pricing'
      || location.pathname === '/health-care-industry'
      || location.pathname === '/financial-institutions'
      || location.pathname === '/supply-chain-and-logistics-industry'
      || location.pathname === '/construction-industry'
      || location.pathname === '/manpower-and-staffing-industry'
      || location.pathname === '/retail-chain'
      || location.pathname === '/manufacturing-industry'
      || location.pathname === '/tam-form-demo'
    ) {
      setAdditionalNavbar(<TAM_Navbar />);
      setFooter('')
    } else if (
      location.pathname === '/Admin'
    ) {
      setAdditionalNavbar(null);
      setFooter('');
      setShorticons(false);
    } else if (
      location.pathname === '/lp'
      ||  location.pathname === '/lp2'
      ||  location.pathname === '/lp3'
      ||  location.pathname === '/lp4' || location.pathname === '/Lp4'
      || location.pathname === '/tam-time-and-attendance-management'
      || location.pathname === '/tam-support'
      || location.pathname === '/tam'
      || location.pathname === '/tam-casestudies'
      || location.pathname === '/tam-pricing'
      || location.pathname === '/health-care-industry'
      || location.pathname === '/financial-institutions'
      || location.pathname === '/supply-chain-and-logistics-industry'
      || location.pathname === '/construction-industry'
      || location.pathname === '/manpower-and-staffing-industry'
      || location.pathname === '/retail-chain'
      || location.pathname === '/manufacturing-industry'
      || location.pathname === '/tam-form-demo'
    ) {
      setFooter('');
    }
    else {
      setNavbar(<Navbar />);
      setFooter(<Footer2 />);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== '/lp' && location.pathname !== '/Admin') {
      const script = document.createElement('script');
      script.src = 'https://collectcdn.com/launcher.js';
      script.async = true;

      // Set the CollectId variable
      window.CollectId = '65e0437a56c8a5b9944e0223';

      // Append the script to the head
      document.head.appendChild(script);

      // Cleanup function to remove the script when the component unmounts
      return () => {
        document.head.removeChild(script);
      }
    };
  }, [location.pathname]);


  return (
    <>
      <div className="navbars">
        {navbar}
      </div>
      {/* {additionalNavbar} */}
      <div className="routes" id='routes'>
        {shorticons && <div className="icons">
          <a href="tel:+91%207401600600">
            <div className="icon_1 scale-hover">
              <img src={call} alt="" />
            </div>
          </a>
          <a href="https://api.whatsapp.com/send?phone=917401600600&text=Hello NoQu">
            <div className="icon_2 scale-hover">
              <img src={whatsapp} alt="" />
            </div>
          </a>
        </div>}
        {callicon &&
          <div className="callicon">
            <a href="tel:+91%207401600600">
              <div className="icon_1 scale-hover">
                <img src={call} alt="" />
              </div>
            </a>
          </div>
        }
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/channel-partner' element={<ChannelPartner />}></Route>
          <Route path='/channel-partner-form' element={<ChannelPartnerForm />}></Route>
          <Route path='/about-us' element={<AboutUs />}></Route>
          <Route path='/awards' element={<Awards />}></Route>
          <Route path='/iso-ceritificate' element={<Award1 />}></Route>
          <Route path='/startuptn' element={<Award2 />}></Route>
          <Route path='/dpiit' element={<Award3 />}></Route>
          <Route path='/career' element={<Career />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/news' element={<News />}></Route>
          <Route path='/career-form' element={<CareerForm />}></Route>
          <Route path='/tam-time-and-attendance-management' element={<TAM_Homepage2 />}></Route>
          <Route path="/tam" element={<Navigate to="/tam-time-and-attendance-management" replace />} />
          <Route path='/tam-pricing' element={<TamPricing />}></Route>
          <Route path='/tam-casestudies' element={<TAM_CaseStudies />}></Route>
          <Route path='/tam-support' element={<TAM_Support />}></Route>
          <Route path='/health-care-industry' element={<TAM_cs1 />}></Route>
          <Route path='/financial-institutions' element={<TAM_cs2 />}></Route>
          <Route path='/supply-chain-and-logistics-industry' element={<TAM_cs3 />}></Route>
          <Route path='/construction-industry' element={<TAM_cs4 />}></Route>
          <Route path='/manpower-and-staffing-industry' element={<TAM_cs5 />}></Route>
          <Route path='/retail-chain' element={<TAM_cs6 />}></Route>
          <Route path='/manufacturing-industry' element={<TAM_cs7 />}></Route>
          <Route path='/submit' element={<Submit />}></Route>
          <Route path='/submit-fail' element={<SubmitFail />}></Route>
          <Route path='/schedule-a-demo' element={<ScheduleAdemo />}></Route>
          <Route path='/privacy-policy' element={<PrivacyPolicy />}></Route>
          <Route path='/terms-and-conditions' element={<TermsAndConditions />}></Route>
          <Route path='/lp' element={<Lp />}></Route>
          <Route path='/lp2' element={<Lp2 />}></Route>
          <Route path='/lp3' element={<Lp3 />}></Route>
          <Route path='/lp4' element={<Lp4 />}></Route>
          {/* <Route path='/TAM_Homepage2' element={<TAM_Homepage2 />}></Route> */}
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/blog1' element={<Blog1 />}></Route>
          <Route path='/blog2' element={<Blog2 />}></Route>
          <Route path='/blog3' element={<Blog3 />}></Route>
          <Route path='/blog4' element={<Blog4 />}></Route>
          <Route path='/blog5' element={<Blog5 />}></Route>
          <Route path='/Admin' element={<Admin />}></Route>
          <Route path='/tam-form' element={< TAM_form />}></Route>
          <Route path='/schedule-a-demo-lp' element={< ScheduleAdemolp />}></Route>
          <Route path='/unsub-popup' element={< Unsub_popup />}></Route>
          <Route path='/lp-submit' element={< LP_Submit />}></Route>
          <Route path="/news/:slug" element={<NewsDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      {footer}
    </> 
  )
}

export default App
