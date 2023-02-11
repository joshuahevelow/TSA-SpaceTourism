import React from 'react'
import './Vehicles.css';

import starshipImage from '../Pictures/starshipImage.jpg'

export default function Vehicles() {
  return (
    <>
      <div id='vehicles-bg' className='scrollable'>
          <img id='starship' src={starshipImage}/>
          <div className='center-contents'>
            <h1 id='starship-title'>STARSHIP</h1>
            <h4 id='starship-subtitle'>THE FUTURE OF SPACE TRAVEL</h4>
          </div>
          <div>
            <p style={{color: 'white', font:'Times New Roman'}}>Starship DescriptionStarship</p>
          </div>
          <img id='arrow-down' src='https://enterprisefilmsllc.com/wp-content/uploads/2018/07/white-down-arrow-png-2.png'/>
      </div>
    </>
  )
}
