import React, { useEffect } from 'react'
import success from '../../assets/success.png'
import "./Submit.css"
const Submit = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='Submit'>
         <div className="Submit-container">
             <img src={success} alt="" />
             <h1>Thanks for your interest!!</h1>
             <h2 className='TAM_h1'>A NoQu member will be in touch with you shortly</h2>
             {/* <button>Back</button> */}
         </div>
    </div>
  )
}

export default Submit
