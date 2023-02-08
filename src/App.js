import './App.css';
import { useState } from "react";

//Currently returns three canvases, each with two cylinders
//Check ./Components/Cylinder3d.js for cylinder documentation
function App() {
  const [clicked, setClicked] = useState(true);

  const beginFunc = () => {
    console.log("Begin button pressed.");
    setClicked(!clicked);
  };

  return (
    <>
      <nav className='nav-bar'>
        <a className='nav-item'>Sub1</a>
        <a className='nav-item'>Home</a>
        <a className='nav-item'>Voyages</a>
        <a className='nav-item' id='gap'>&nbsp;</a>
        <div className='hexagon'>
          <div id='hexagon-top' />
          <div id='hexagon-middle'>
            <img id='nav-image' src='https://upload.wikimedia.org/wikipedia/commons/5/58/Icon-Space-Shuttle-317704.svg' alt='rocket icon'
              width='90px' height='112.5px'/>
          </div>
          <div id='hexagon-bottom' />
        </div>
        <a href='../vehicles.html' className='nav-item'>Vehicles</a>
        <a className='nav-item'>Details</a>
        <a className='nav-item'>Sub6</a>
      </nav>
      <div className='nav-line-straight-left' />
      <div className='nav-line-angle-left' />
      <div className='nav-line-straight-center' />
      <div className='nav-line-straight-right' />
      <div className='nav-line-angle-right' />
      <img className='bg-image' src='//live.staticflickr.com/4153/5091372229_ff09a9ce9c_h.jpg' />
      <h1 id='home-title'><span style={{color:'white'}}>GO</span>&nbsp;BEYOND</h1>
      <h4 id='home-subtitle'>WITH STANDARD COMPANY NAME</h4>
      <button className='begin-button' style={{backgroundColor: clicked? '#FF614C' : 'blue'}} onClick={() => beginFunc()}>Begin</button>
      <div id='begin-button-outline' />
    </>
  );
}

export default App;
