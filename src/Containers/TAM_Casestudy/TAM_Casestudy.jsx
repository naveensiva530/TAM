import React from 'react'
import "./TAM_Casestudy.css"
const TAM_Casestudy = ({img , heading, text}) => {
  return (
    <div className='TAM_cs'>
      <div className="TAM_cs_body">
          <div className="TAM_cs_head">
            <img src={img} alt=""/>
            <h4>{heading}</h4>
          </div>
        <p>{text}</p>
      </div>
        <button>Read more</button>
    </div>
  )
}

export default TAM_Casestudy
