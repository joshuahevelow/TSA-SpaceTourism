import React from 'react'
import { useState } from "react";

export default function Home() {

    const [clicked, setClicked] = useState(true);

    const beginFunc = () => {
        console.log("Begin button pressed.");
        setClicked(!clicked);
    };

    return (
        <div>
            <img className='bg-image' src='//live.staticflickr.com/4153/5091372229_ff09a9ce9c_h.jpg' />
            <h1 id='home-title'><span style={{color:'white'}}>GO</span>&nbsp;BEYOND</h1>
            <h4 id='home-subtitle'>WITH STANDARD COMPANY NAME</h4>
            <button className='begin-button' style={{backgroundColor: clicked? '#FF614C' : 'blue'}} onClick={() => beginFunc()}>Begin</button>
            <div id='begin-button-outline' />
        </div>
    )
}
