import React, { useEffect } from 'react'
import "./Submit.css"

const SubmitFail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='Submit'>
         <div className="Submit-container">
             <h1>Oops!!</h1>
             <h2 className='TAM_h1'>Something Went Wrong</h2>
         </div>
    </div>
  )
}

export default SubmitFail
