import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";


export default function NavBar() {


  return (
      <>
        <nav className='nav-bar'>
            <Link to="/sub1" className='nav-item'>Sub1</Link>
            <Link to="/" className='nav-item'>Home</Link>
            <Link to="/voyages" className='nav-item'>Voyages</Link>
            <a className='nav-item' id='gap'>&nbsp;</a>
            <div className='hexagon'>
            <div id='hexagon-top' />
            <div id='hexagon-middle'>
                <img id='nav-image' src='https://upload.wikimedia.org/wikipedia/commons/5/58/Icon-Space-Shuttle-317704.svg' alt='rocket icon'
                width='90px' height='112.5px'/>
            </div>
            <div id='hexagon-bottom' />
            </div>
            <Link to="/vehicles" className='nav-item'>Vehicles</Link>
            <Link to="/details" className='nav-item'>Details</Link>
            <Link to="/sub6"className='nav-item'>Sub6</Link>
        </nav>
        <div className='nav-line-straight-left' />
        <div className='nav-line-angle-left' />
        <div className='nav-line-straight-center' />
        <div className='nav-line-straight-right' />
        <div className='nav-line-angle-right' />
    </>
  )
}
