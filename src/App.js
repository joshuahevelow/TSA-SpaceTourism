import './App.css';
import { useState } from "react";
import "./Fonts/nicomoji/NicoMoji-Regular.ttf";
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Sub1 from './Components/Sub1';
import Voyages from './Components/Voyages';
import Vehicles from './Components/Vehicles';
import Details from './Components/Details';
import Sub6 from './Components/Sub6';

import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";


//Currently returns three canvases, each with two cylinders
//Check ./Components/Cylinder3d.js for cylinder documentation
function App() {




  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>;
        <Route path="/sub1" element={<Sub1/>}/>;
        <Route path="/voyages" element={<Voyages/>}/>;
        <Route path="/vehicles" element={<Vehicles/>}/>;
        <Route path="/details" element={<Details/>}/>;
        <Route path="/sub6" element={<Sub6/>}/>;
      </Routes>
    </>
  );
}

export default App;
