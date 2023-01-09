import React, { Component, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Skills from './Skills/Skills';
import Works from './Works/Works';
import Experience from './Experience/Experience';
import Education from './Education/Education';
import ParticlesBackground from "../ParticlesBackground";

function Main(){

  useEffect(()=>{
    document.title = 'Pablo Moya';
  },[])

    return <div className="mainContainer">
          {/* <Routes>
            <Route element={<Home/>} path="/"/>
            <Route element={<Skills/>} path="/skills"/>
            <Route element={<Works/>} path="/works"/>
            <Route element={<Experience/>} path="/experience"/>
            <Route element={<Education/>} path="/education"/>
          </Routes> */}
          
          <Home/>
          <Skills/>
          <Works/>
          <Experience/>
          <Education/>
          <ParticlesBackground/>
        </div>;
  
}

export default Main;
