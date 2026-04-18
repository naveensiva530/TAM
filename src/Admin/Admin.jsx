
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Admin.css";
import Subscribers from './Content/Subscribers/Subscribers';
import logo from "../../src/assets/logo.png";
import Admin_dashboard from "../../src/assets/Admin_dashboard.png";
import AdminLogin from "../../src/assets/AdminLogin.jpg";
import newsletterimg from "../../src/assets/newsletterimg.png";
import arrow1 from "../../src/assets/arrow1.png";
import { RiMenu3Line } from 'react-icons/ri';
import UnSubscribers from './Content/UnSubscribers/UnSubscribers';
import Compose from './Content/Compose/Compose';
import Dashboard from './Content/Dashboard/Dashboard';
import CMS_News from './Content/CMS/News_CMS/CMS_News';


const Admin = () => {
      const [PassWord, setPassWord] = useState('')
      const [crtPassWord, setCrtPassWord] = useState(false)
      const [activeComponent, setActiveComponent] = useState('Dashboard');
      const [toggleMenu, setToggleMenu] = useState(false)
      const [newsLetter, setNewsLetter] = useState(false)
      const [CMSmenu, setCMSmenu] = useState(false)

      // -------------------------------------SUBCRIBERS DATA-----------------------------------------------------------------------
      const [subdata, setSubData] = useState([]);
      const [filteredSubData, setFilteredSubData] = useState([]);
      const [subloading, setSubLoading] = useState(true);
      const [suberrormessage, setSubErrorMessage] = useState("no data found");
      const [subcount, setSubCount] = useState()
      const [subscriptionToday, setSubscriptionToday] = useState()

      // Fetch all data from the API
      const fetchSubData = async () => {
            setSubLoading(true); // Set loading to true before fetching data
            try {
                  // const response = await axios.post('http://localhost:3003/db/data'); // Use POST request

                  const response = await axios.post('https://noqu.in/db/data'); // Use POST request
                  const fetchedData = response.data.message; // Assuming message contains the data
                  setSubData(fetchedData); // Set data state
                  setFilteredSubData(fetchedData); // Initially show all data
                  setSubCount(fetchedData.length); // Set total count

                  // Calculate today's subscriptions
                  const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
                  const todaysub = fetchedData.filter(item => {
                        const createdDate = new Date(item.created_at).toISOString().split('T')[0];
                        return createdDate === today; // Compare dates
                  });

                  setSubscriptionToday(todaysub.length); // Set today's subscription count
            } catch (error) {
                  setSubErrorMessage(error.message); // Set error message on error
            } finally {
                  setSubLoading(false); // Set loading to false after fetching
            }
      };

      // --------------------------------------------UNSUBSCIBERS DATA------------------------------------------------------------

      const [unsubdata, setUnSubData] = useState([]);
      const [filteredUnSubData, setFilteredUnSubData] = useState([]);
      const [unsubloading, setUnsubLoading] = useState(true);
      const [unsuberrormessage, setUnsubErrorMessage] = useState("no data found");
      const [unsubcount, setUnSubCount] = useState()
      const [unsubscriptionToday, setUnSubscriptionToday] = useState()
      // Fetch all data from the API
      const fetchUnSubData = async () => {
            setUnsubLoading(true); // Set loading to true before fetching data
            try {
                  // const response = await axios.post('http://localhost:3003/db/Unsubdata'); // Use POST request

                  const response = await axios.post('https://noqu.in/db/Unsubdata'); // Use POST request
                  const fetchedData = response.data.message; // Assuming message contains the data
                  setUnSubData(fetchedData); // Set data state
                  setFilteredUnSubData(fetchedData); // Initially show all data
                  setUnSubCount(fetchedData.length); // Set total count

                  // Calculate today's subscriptions
                  const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
                  const todayunsub = fetchedData.filter(item => {
                        const createdDate = new Date(item.deleted_at).toISOString().split('T')[0];
                        return createdDate === today; // Compare dates
                  });
                  // const todayCount = todaysub.length
                  setUnSubscriptionToday(todayunsub.length); // Set today's subscription count
            } catch (error) {
                  setUnsubErrorMessage(error.message); // Set error message on error
            } finally {
                  setUnsubLoading(false); // Set loading to false after fetching
            }
      };

      useEffect(() => {
            fetchSubData(); // Fetch data when the component mounts
            fetchUnSubData();
      }, []);


      const handleMenuItemClick = (componentName) => {
            setActiveComponent(componentName);
      };

      const checkLogIn = () => {
            if (PassWord === "Welcome@noqu") {
                  setCrtPassWord(true)
            }
      }

      if (crtPassWord) return (
            <div className='admin'>
                  <div className="admin_mobile_menu_control">
                        <RiMenu3Line color='black' size={27} onClick={() => setToggleMenu(true)} />
                  </div>

                  <div className="admin_menu">
                        <div className="admin_menu_head">
                              <div className="admin_menu_head-img">
                                    <img src={logo} alt="" />
                              </div>
                              <h5>Admin</h5>
                        </div>
                        <ul>
                              <li onClick={() => handleMenuItemClick('Dashboard')}> <img src={Admin_dashboard} width={15} style={{ marginRight: "8px" }} /> Dashboard</li>
                              <li onClick={() => setNewsLetter(!newsLetter)}> <img src={newsletterimg} width={15} style={{ marginRight: "8px" }} /> News Letter</li>
                              {newsLetter && (
                                    <div className='drop1' style={{ marginLeft: "25px" }}>
                                          <li onClick={() => handleMenuItemClick('Compose')}> <img src={arrow1} width={10} style={{ marginRight: "8px" }} /> Compose</li>
                                          <li onClick={() => handleMenuItemClick('Subscribers')}> <img src={arrow1} width={10} style={{ marginRight: "8px" }} /> Subscribers</li>
                                          <li onClick={() => handleMenuItemClick('UnSubscribers')}> <img src={arrow1} width={10} style={{ marginRight: "8px" }} /> UnSubscribers</li>
                                    </div>)}
                              <li onClick={() => setCMSmenu(!CMSmenu)}> <img src={newsletterimg} width={15} style={{ marginRight: "8px" }} />CMS</li>
                              {CMSmenu && (
                                    <div className='drop1' style={{ marginLeft: "25px" }}>
                                          <li onClick={() => handleMenuItemClick('News')}> <img src={arrow1} width={10} style={{ marginRight: "8px" }} /> News</li>
                                    </div>)}
                        </ul>
                  </div>
                  <div className="admin_display">
                        {activeComponent === 'Dashboard' && <Dashboard
                              subdata={subdata}
                              unsubdata={unsubdata}
                              subscriptionToday={subscriptionToday}
                              unsubscriptionToday={unsubscriptionToday}
                        />}
                        {activeComponent === 'Compose' && <Compose />}
                        {activeComponent === 'Subscribers' && <Subscribers
                              data={subdata}
                              filteredData={filteredSubData}
                              setFilteredData={setFilteredSubData}
                              loading={subloading}
                              errorMessage={suberrormessage}
                              fetchData={fetchSubData}
                              count={subcount}
                              subscriptionToday={subscriptionToday}
                              setSubscriptionToday={setSubscriptionToday}
                        />}
                        {activeComponent === 'UnSubscribers' && <UnSubscribers
                              data={unsubdata}
                              filteredData={filteredUnSubData}
                              setFilteredData={setFilteredUnSubData}
                              loading={unsubloading}
                              errorMessage={unsuberrormessage}
                              fetchData={fetchUnSubData}
                              count={unsubcount}
                              unsubscriptionToday={unsubscriptionToday}
                              setUnSubscriptionToday={setUnSubscriptionToday}
                        />}
                        {activeComponent === 'News' && <CMS_News />}
                  </div>
            </div>
      )

      return (
            <div className="AdminLogin">
                  <div className="AdminLogin-img">
                        <img src={AdminLogin} alt="" />
                  </div>
                  <div className="AdminLogin-form">
                  <form onSubmit={checkLogIn}>
                  <img src={logo} alt="" />
                  <h5 className='TAM_h1' style={{fontSize:"15px",margin:"0px 15px 15px 15px"}}>ADMIN LOGIN</h5>
                        <div className='AdminLogin-form-inputbox'>
                              <label htmlFor="">PASSWORD</label>
                              <input type="password"
                                    placeholder=""
                                    value={PassWord}
                                    onChange={(e) => setPassWord(e.target.value)}
                                    required
                              />
                        </div>
                        <button type="submit">
                              Log In
                        </button>
                  </form>
                  </div>
            </div>
      )
}

export default Admin
