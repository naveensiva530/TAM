import React from 'react'
import "./ServiceCard.css"
const ServiceCard = ({img , heading, text}) => {
  return (
    <div className='Service'>
        <img src={img} alt=""/>
        <h6>{heading}</h6>
        <p>{text}</p>
    </div>
  )
}

export default ServiceCard
