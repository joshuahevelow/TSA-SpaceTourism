import React from 'react';
import { useState } from 'react';
import NavBar from './NavBar';
import './Preparation.css';

export default function Preparation() {
  const [trainingSubheadingColor, setTrainingSubheadingColor] = useState("#FF614C");
  const [safetySubheadingColor, setSafetySubheadingColor] = useState("white");
  const [trainingAnimation, setTrainingAnimation] = useState("");
  const [safetyAnimation, setSafetyAnimation] = useState("");


  function switchInfo(heading){
    if(heading == "training"){
      setTrainingSubheadingColor("#FF614C");
      setSafetySubheadingColor("white");
      setTrainingAnimation("text-down");
      setSafetyAnimation("text-down");
    }else{
      setTrainingSubheadingColor("white");
      setSafetySubheadingColor("#FF614C");
      setTrainingAnimation("text-up");
      setSafetyAnimation("text-up");
    }
  }

  return (
    <>
      <img className='bg-image' src="https://live.staticflickr.com/65535/51881823865_1bbf378950_b.jpg" />
      <div className="page-top">
        <h1 style={{fontSize: '40px'}}>Preparations <br/> <div className="heading-underline">&nbsp;</div></h1>
        <h3 className='page-subheading' id="training-subheading" style={{color: trainingSubheadingColor}} onClick={() => switchInfo("training")}>Training</h3>
        <h3 className='page-subheading' id='safety-subheading' style={{color: safetySubheadingColor}} onClick={() => switchInfo("safety")}>Safety</h3>
      </div>
      <div className='page-info'>
        <div style={{animation: `${trainingAnimation} 2s ease-out 1 forwards`}}>
        <h1 id='info-heading-training'>Training</h1>
        <p id='info-body'>All tourists who wish to ride with Horizon Ventures must attend our mandatory space 
                                    safety seminar prior to scheduling a flight. This seminar will include procedures for the 
                                    entrance and departure of a spacecraft, gravity training, intergalactic language, and more.
                                    Upon completing the seminar, you will be required to take a final exam to ensure you are prepared
                                    for space travel. Failing this test will result in a retaking of the space safety seminar. If
                                    you have traveled with us in the past, you may skip the seminar and take the final exam right away.
                                  </p>
      </div>
      <br/><br/><br/>
      <div style={{animation: `${safetyAnimation} 2s ease-out 1 forwards`}}>
        <h1 id='info-heading-safety'>Safety</h1>
        <p id='info-body'>During space travel, all tourists are required to wear Horizon Ventures's custom space suit, custom
                          designed to maximize both comfort and safety. Your suit will be supplied with a double tank of oxygen,
                          ensuring that you will be given plenty of fresh air as you take your journey through the stars. Every
                          flight is led by two pilots with countless years of experience, as well as 4 flight attendants to monitor
                          any potential safety concerns. Our triple-cushioned seats, which are part of every one of our space vessels,
                          reduce bumps and bruises by 99%, and our two-way seatbelts keep you secured to your seat, even in zero
                          gravity!</p>
      </div>
    </div>
    </>
  )
}