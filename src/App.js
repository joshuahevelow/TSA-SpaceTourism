import './App.css';
import { useState } from "react";
import "./Fonts/nicomoji/NicoMoji-Regular.ttf";
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Preparation from './Components/Preparation';
import Voyages from './Components/Voyages';
import Vehicles from './Components/Vehicles';
import Return from './Components/Return';
import References from './Components/References';

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
        <Route path="/preparation" element={<Preparation/>}/>;
        <Route path="/voyages" element={<Voyages/>}/>;
        <Route path="/vehicles" element={<Vehicles/>}/>;
        <Route path="/return" element={<Return/>}/>;
        <Route path="/references" element={<References/>}/>;
      </Routes>
    </>
  );
}

export default App;
