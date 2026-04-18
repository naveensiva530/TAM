import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import call from '../../assets/call.png'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Navbar_mobile = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [companydd, setCompanydd] = useState(false)
    const [productdd, setProductdd] = useState(false)
  return (
    <div>
              <RiMenu3Line color='black' size={27} onClick={() =>  setToggleMenu(true)}/>
            {toggleMenu && (
            <>
                <div className="navbar-menu_container-wrapper">
                    <div className="navbar-menu_container scale-up-center">
                        <div className="menubar_icon">
                        <RiCloseLine color='black' size={27} onClick={() =>  setToggleMenu(false)}/>
                        </div>
                    <div className="navbar-menu_container-img">
                        <img src={logo} alt="" width={100}/>
                    </div>
                    <div className='navbar-menu_container-links'>
                    <ul>
                    <Link to="/home" onClick={() =>  setToggleMenu(false)}><li>
                                <div className="Navbar_menu_items">
                                    <p>Home</p>
                                </div>
                            </li></Link>
                            <li className='Navbar_menu_product' onClick={() => {setProductdd(productdd ? false : true)
                                                                                setCompanydd(false)}}>
                                <div className="Navbar_menu_items">
                                    <p>Products</p>
                                </div>
                        
                                <div className='Navbar_menu_product_list'>
                                    <ul className="Navbar_menu_product_list_dropdown" style={{display : productdd ? 'block' : 'none'}}>
                                        <li>
                                        <p><span>|</span> NoQu Office</p>
                                            <ul className="Navbar_menu_product_dropdown">
                                            <Link to="/tam-time-and-attendance-management" onClick={() =>  setToggleMenu(false)}><li><span><p>|</p></span><p>TAM(Time And Attendence Management)</p></li></Link>
                                            {/* <Link to="/scan-homepage" onClick={() =>  setToggleMenu(false)}><li><span><p>|</p></span><p>NoQu Scan</p></li></Link> */}
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className='Navbar_menu_company' onClick={() =>  {setCompanydd( companydd ? false : true) 
                                                                                 setProductdd(false)}} >
                                    <div className="Navbar_menu_items">
                                          <p>Company</p>
                                      </div><ul className="Navbar_menu_company_dropdown" style={{ display: companydd ? 'block' : 'none' }}>
                                              <Link to="/about-us" onClick={() => setToggleMenu(false)}><li><span>|</span>AboutUs</li></Link>
                                              <Link to="/news" onClick={() => setToggleMenu(false)}><li><span>|</span>News</li></Link>
                                              <Link to="/awards" onClick={() => setToggleMenu(false)}><li><span>|</span>Awards</li></Link>
                                              <Link to="/career" onClick={() => setToggleMenu(false)}><li><span>|</span>Career</li></Link>
                                              <Link to="/contact" onClick={() => setToggleMenu(false)}> <li><span>|</span>Contact</li></Link>
                                          </ul>
                            </li>
                            {/* <Link to="/affiliate-marketing" onClick={() =>  setToggleMenu(false)}><li>
                                <div className="Navbar_menu_items">
                                        <p>Affiliate Marketing</p>
                                </div>
                            </li></Link> */}
                            <Link to="/channel-partner" onClick={() =>  setToggleMenu(false)}><li>
                                <div className="Navbar_menu_items">
                                <p>Channel Partner</p>
                                </div>
                            </li></Link>
                            <li>              
                                <div className="navbar-call">
                                    <a href="callto:+91 7401600600"><button><img src={call}/><p>+91 7401 600 600</p></button></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
            </>
            )

            }
    </div>
  )
}

export default Navbar_mobile
