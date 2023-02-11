import React from 'react';
import { useState } from 'react';
import './Vehicles.css';

import starshipImage from '../Pictures/starshipImage.jpg'
import rocketIcon from '../Pictures/white_rocketship.png';

export default function Vehicles() {
  const [arrowOpacity, setArrowOpacity] = useState(1);

  window.onscroll = () => {
    setArrowOpacity(1 - (window.scrollY / 200));
  };

  return (
    <>
      <div id='vehicles-bg'>
          <img id='vehicle' src={starshipImage}/>
          <div className='center-contents'>
            <h1 id='vehicle-title' style={{transform: 'translateY(-8vh)', letterSpacing: '40px'}}>STARSHIP</h1>
            <h4 id='vehicle-subtitle' style={{transform: 'translateY(-8vh)'}}>THE FUTURE OF SPACE TRAVEL</h4>
          </div>
          <div className='vehicle-description'>
            <p className='vehicle-text'>The Starship’s purpose is to make interplanetary travel accessible and affordable with the use of the Super Heavy Booster, which helps the ship house up to a hundred people and provide service to the Earth, moon, mars, and beyond.</p>
            <img className='vehicle-description-logo' src={rocketIcon} alt="rocket" />
            <p className='vehicle-speed'>Top Speed: <br/> Mach 6</p>
          </div>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <img style={{opacity: arrowOpacity}} id='arrow-down' src='https://enterprisefilmsllc.com/wp-content/uploads/2018/07/white-down-arrow-png-2.png'/>
          </div>

          <img id='vehicle' src='https://cdn.mos.cms.futurecdn.net/p9V7c2ixSrXwie8QCcYPcm.jpg'/>
          <div className='center-contents'>
            <h1 id='vehicle-title'>NEW SHEPARD</h1>
            <h4 id='vehicle-subtitle'>BLUE ORIGIN'S ORIGINAL SHUTTLE</h4>
          </div>
          <div className='vehicle-description'>
            <p className='vehicle-text'>Being Blue Origin’s first functional spacecraft, this vehicle can house up to 32 passengers for suborbital flights. This spacecraft is also fully reusable with landing capabilities, making the experience more accessible to the public.</p>
            <img className='vehicle-description-logo' src={rocketIcon} alt="rocket" />
            <p className='vehicle-speed'>Top Speed: <br/> Mach 3</p>
          </div>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <img style={{opacity: arrowOpacity}} id='arrow-down' src='https://enterprisefilmsllc.com/wp-content/uploads/2018/07/white-down-arrow-png-2.png'/>
          </div>

          <img id='vehicle' src='https://www.spaceflightinsider.com/wp-content/uploads/2017/03/newglenn-launch.png'/>
          <div className='center-contents'>
            <h1 id='vehicle-title'>NEW GLENN</h1>
            <h4 id='vehicle-subtitle'>BLUE ORIGIN'S REMAKE</h4>
          </div>
          <div className='vehicle-description'>
            <p className='vehicle-text'>Also made by Blue Origin, this spacecraft is a heavy-lift orbital launch vehicle capable of carrying people and payloads routinely. This ship is capable of orbital voyages unlike its predecessor, the New Shepard spacecraft, which is limited to suborbital flights.</p>
            <img className='vehicle-description-logo' src={rocketIcon} alt="rocket" />
            <p className='vehicle-speed'>Top Speed: <br/> Mach 6</p>
          </div>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <img style={{opacity: arrowOpacity}} id='arrow-down' src='https://enterprisefilmsllc.com/wp-content/uploads/2018/07/white-down-arrow-png-2.png'/>
          </div>

          <img id='vehicle' src='http://cdn.shopify.com/s/files/1/0173/8204/7844/articles/SpaceX-Crew-Dragon.jpg?v=1575766678&width=2048'/>
          <div className='center-contents'>
            <h1 id='vehicle-title'>DRAGON</h1>
            <h4 id='vehicle-subtitle'>TRANQUILITY AND LUXURY</h4>
          </div>
          <div className='vehicle-description'>
            <p className='vehicle-text'>Being the first private space capsule to take humans to the space station, this ship is more exclusive than many of SpaceX’s others. It’s capable of carrying only 7 passengers to and from Earth’s orbit and beyond.</p>
            <img className='vehicle-description-logo' src={rocketIcon} alt="rocket" />
            <p className='vehicle-speed'>Top Speed: <br/> Mach 2</p>
          </div>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <img style={{opacity: arrowOpacity}} id='arrow-down' src='https://enterprisefilmsllc.com/wp-content/uploads/2018/07/white-down-arrow-png-2.png'/>
          </div>

          <img id='vehicle' src='https://www.spaceflightinsider.com/wp-content/uploads/2017/05/VSS-Unity_20170501-02_rsz-1600x900-c.jpg'/>
          <div className='center-contents'>
            <h1 id='vehicle-title'>VSS UNITY</h1>
            <h4 id='vehicle-subtitle'>SEE SPACE IN STYLE</h4>
          </div>
          <div className='vehicle-description'>
            <p className='vehicle-text'>While this spaceplane offers a more luxurious and relaxed experience, the exclusiveness of the flight makes it more expensive than the average commercial class spaceship. This plane offers orbital flights to the moon, Mars, and beyond.</p>
            <img className='vehicle-description-logo' src={rocketIcon} alt="rocket" />
            <p className='vehicle-speed'>Top Speed: <br/> Mach 3</p>
          </div>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <img style={{opacity: arrowOpacity}} id='arrow-down' src='https://enterprisefilmsllc.com/wp-content/uploads/2018/07/white-down-arrow-png-2.png'/>
          </div>

          <img id='vehicle' src='https://cdnx.nextinpact.com/compress/1003-485/data-next/images/bd/square-linked-media/9726.jpg'/>
          <div className='center-contents'>
            <h1 id='vehicle-title' style={{transform: 'translateY(-30vh)'}}>VSS IMAGINE</h1>
            <h4 id='vehicle-subtitle' style={{transform: 'translateY(-30vh)'}}>HIGH-CAPACITY SPACE TRAVEL</h4>
          </div>
          <div className='vehicle-description'>
            <p className='vehicle-text'>The VSS Imagine also offers a luxury experience similar to its predecessor, the VSS Unity, but is capable of carrying more people and cargo. This plane offers orbital flights from Mercury to Pluto.</p>
            <img className='vehicle-description-logo' src={rocketIcon} alt="rocket" />
            <p className='vehicle-speed'>Top Speed: <br/> Mach 5</p>
          </div>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <img style={{opacity: arrowOpacity}} id='arrow-down' src='https://enterprisefilmsllc.com/wp-content/uploads/2018/07/white-down-arrow-png-2.png'/>
          </div>
      </div>
    </>
  )
}
