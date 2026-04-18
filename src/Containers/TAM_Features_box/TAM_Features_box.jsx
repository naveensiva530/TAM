import React from 'react'
import "./TAM_Features_box.css"


const TAM_Features_box = ({img1 , img2, img3, img4, Feature1, Feature2, Feature3}) => {
  return (
    <div className='TAM_Features_box'>
        <div className="TAM_Features_box-img">
            <img src={img1} alt=""/>
        </div>
        <div className="TAM_Features_box-container">
            <div className='TAM_Features_box-container-box'>
                <div className="TAM_Features_box-container-img">
                    <img src={img2} alt="" width={50}/>
                </div>
                <p>{Feature1}</p>
            </div>
            <div className='TAM_Features_box-container-box'>
                <div className="TAM_Features_box-container-img">
                    <img src={img3} alt="" width={50}/>
                </div>
                <p>{Feature2}</p>
            </div>
            <div className='TAM_Features_box-container-box'>
                <div className="TAM_Features_box-container-img">
                    <img src={img4} alt="" width={50}/>
                </div>
                <p>{Feature3}</p>
            </div>
        </div>

    </div>
  )
}

export default TAM_Features_box;
