import React, { useEffect } from 'react'
import success from '../../assets/success.png'
import "./LP_Submit.css"
const LP_Submit = ({email}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='LP_Submit'>
         <div className="LP_Submit-container">
             <img src={success} alt="" />
             {/* <p>Thanks for submitting {email},</p> */}
             <h1>Thanks for submitting <span>{email}</span></h1>
             <h2 className='TAM_h1'>A NoQu member will be in touch with you shortly</h2>
             {/* <button>Back</button> */}
         </div>
    </div>
  )
}

export default LP_Submit
