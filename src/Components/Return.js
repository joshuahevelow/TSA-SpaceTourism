import React from 'react'
import NavBar from './NavBar';
import './Return.css';
import rocketIcon from '../Pictures/white_rocketship.png';
import returnIcon from '../Pictures/53-530312_return-arrow-curve-pointing-left-vector-return-sign-png-removebg-preview.png'

export default function Return() {
  return (
    <>
      <div id='return-bg'>
          <img id='vehicle' src={"https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGQzNi01LWtzYy05NnBjMTI5Ml8xLmpwZw.jpg?s=yJss6GdvYE3Smb7G9K7NHR4F0NAe8elYXx_47QkWDQ4"}/>
          <div className='return-box' style={{backgroundColor: 'rgba(50, 47, 64, 0.5)'}}>
            <h1 id='return-title' style={{transform: 'translateY(17vh)', textDecoration: 'underline', letterSpacing: '10px'}}>YOUR TRIP</h1>
            <h4 id='return-subtitle' style={{transform: 'translateY(-3vh)'}}>LAUNCH & RECOVERY</h4>
          </div>
          <div className='return-description' style={{marginBottom: '10vh'}}>
            <p className='return-text' style={{fontSize: '16px'}}>Arrive at the launch site at the posted time and confrim with Horizon Ventures employees that you are cleared for takeoff. Proceed to the staging room and board the rocket vehicle. Strap in, perform the pre-flight checks in accordance with your training, and get ready for the ride of your life. The launch should take around 10 minutes. Once in orbit, you can unbuckle and enjoy zero-g.</p>
            <img className='return-description-logo' src={'https://upload.wikimedia.org/wikipedia/commons/5/58/Icon-Space-Shuttle-317704.svg'} alt="rocket" />
            <p className='return-speed'>THE LAUNCH</p>
          </div>
          <div style={{backgroundColor: 'rgba(255, 97, 76, 1)', margin: '2vh'}}>
            <p>&nbsp;</p>
          </div>
          <div className='return-description'>
            <p className='return-speed' style={{marginLeft: '4vh', marginTop: '4vh'}}>THE RECOVERY</p>
            <img style={{width: 'fit-content', marginLeft: '2vh', float: 'left', transform: 'translateX(-10vw)'}} src={returnIcon} alt="rocket" />
            <p className='return-text' style={{marginLeft: '4vh', marginTop: '3vh', transform: 'translateX(-10vw)', fontSize: '16px'}}>During the return process make sure to follow all instruction of your on-board Horizon Ventures captain & crew. Make sure you are securely fastened to your seat and brace for the g-forces of re-entry. Stay tight once we set down in the Pacific Ocean as we send a boat to your location.</p>
          </div>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <img id='return-arrow-down' src='https://enterprisefilmsllc.com/wp-content/uploads/2018/07/white-down-arrow-png-2.png'/>
          </div>
      </div>
    </>
  )
}
