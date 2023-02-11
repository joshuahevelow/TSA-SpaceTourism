import React from 'react';
import NavBar from './NavBar';

export default function Voyages() {

  return (
    <div className='voyages-container'>
      <img className='bg-image' src="https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3BhY2UlMjBzdGFyc3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="background stars" />
      <div>  
        <div className='planet'/>
        <div className='planet-info'>
          <h1 className="planet-name">MERCURY</h1>
          <p className='planet-cost'>Cost: $4500/night</p>
          <h3 className="planet-subtitle">THE <span style={{color: '#FF614C'}}>1ST</span> PLANET FROM THE SUN</h3>
          <h6 className="planet-description">Mercury is the smallest planet in the Solar System and is closest to the Sun. It has a rocky surface and experiences extreme temperature swings, with temperatures reaching up to 800°F during the day and dropping to -290°F at night.</h6>
        </div>
      </div>
  
      <div>  
        <div className='planet'/>
        <div className='planet-info'>
          <h1 className="planet-name">VENUS</h1>
          <p className='planet-cost'>Cost: $5000/night</p>
          <h3 className="planet-subtitle">THE <span style={{color: '#FF614C'}}>2ND</span> PLANET FROM THE SUN</h3>
          <h6 className="planet-description">Venus is the second planet from the Sun and is often referred to as Earth's twin. Despite its similarities in size and composition to Earth, its thick atmosphere traps heat, making its surface temperature the hottest in the Solar System.</h6>
        </div>
      </div>

      <div>  
        <div className='planet'/>
        <div className='planet-info'>
          <h1 className="planet-name">EARTH</h1>
          <p className='planet-cost'>Cost: Check local deals</p>
          <h3 className="planet-subtitle">THE <span style={{color: '#FF614C'}}>3RD</span> PLANET FROM THE SUN</h3>
          <h6 className="planet-description">Earth is the third planet from the Sun and is the only known planet to support life. It has a diverse climate, with temperatures ranging from -127°F at the poles to up to 104°F near the equator.</h6>
        </div>
      </div>

      <div>  
        <div className='planet'/>
        <div className='planet-info'>
          <h1 className="planet-name">MARS</h1>
          <p className='planet-cost'>Cost: $3000/night</p>
          <h3 className="planet-subtitle">THE <span style={{color: '#FF614C'}}>4TH</span> PLANET FROM THE SUN</h3>
          <h6 className="planet-description">Mars is the fourth planet from the Sun and is often referred to as the "Red Planet." It has a rocky, barren surface and a thin atmosphere, which allows for harsh temperature swings from 20°F to -195°F.</h6>
        </div>
      </div> 

      <div>  
        <div className='planet'/>
        <div className='planet-info'>
          <h1 className="planet-name">JUPITER</h1>
          <p className='planet-cost'>Cost: $6500/night</p>
          <h3 className="planet-subtitle">THE <span style={{color: '#FF614C'}}>5TH</span> PLANET FROM THE SUN</h3>
          <h6 className="planet-description">Jupiter is the largest planet in the Solar System and is a gas giant. It has a strong magnetic field and is surrounded by a number of moons, including the four largest, known as the Galilean moons.</h6>
        </div>
      </div>

      <div>  
        <div className='planet'/>
        <div className='planet-info'>
          <h1 className="planet-name">SATURN</h1>
          <p className='planet-cost'>Cost: $6000/night</p>
          <h3 className="planet-subtitle">THE <span style={{color: '#FF614C'}}>6TH</span> PLANET FROM THE SUN</h3>
          <h6 className="planet-description">Saturn is the second-largest planet in the Solar System and is also a gas giant. It is best known for its distinctive ring system, which is made up of numerous smaller rings that encircle the planet.</h6>
        </div>
      </div>

      <div>  
        <div className='planet'/>
        <div className='planet-info'>
          <h1 className="planet-name">URANUS</h1>
          <p className='planet-cost'>Cost: $4000/night</p>
          <h3 className="planet-subtitle">THE <span style={{color: '#FF614C'}}>7TH</span> PLANET FROM THE SUN</h3>
          <h6 className="planet-description">Uranus is the seventh planet from the Sun and is a gas giant. It is notable for its unusual tilt, which causes it to rotate on its side, and its faint ring system.</h6>
        </div>
      </div>

      <div>  
        <div className='planet'/>
        <div className='planet-info'>
          <h1 className="planet-name">NEPTUNE</h1>
          <p className='planet-cost'>Cost: $2000/night</p>
          <h3 className="planet-subtitle">THE <span style={{color: '#FF614C'}}>8TH</span> PLANET FROM THE SUN</h3>
          <h6 className="planet-description">Neptune is the eighth and furthest planet from the Sun. It is a gas giant and has a similar composition to Uranus. It is also known for its large, dark storms and its numerous moons, including Triton, which is one of the largest in the Solar System.</h6>
        </div>
      </div>
    </div>
  )
}
