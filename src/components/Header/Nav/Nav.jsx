import React, { Component } from "react";
import SideBar from "./sidebar";
import Media from "react-media";
import { useRef } from "react";
import {BrowserRouter} from 'react-router-dom';
import { HashLink as Link } from "react-router-hash-link";
import Home from '../../Main/Home/Home';
import Skills from '../../Main/Skills/Skills';
import Experience from '../../Main/Experience/Experience';
import Education from '../../Main/Education/Education';
import Works from '../../Main/Works/Works';



// https://www.youtube.com/watch?v=bdOHxlrS5UM&ab_channel=TovCode



function Nav() {
  const services = useRef(null);

  return <div className="navContainer">

    <Media query="(min-width: 600px)">
      {matches => {
        return matches ? <div className="separatedNav">
          <BrowserRouter>
            <Link className="navItem" to="/">Home</Link>
            <Link className="navItem" to="/skills">Skills</Link>
            <Link className="navItem" to="/projects">Projects</Link>
            <Link className="navItem" to="/experience">Experience</Link>
            <Link className="navItem" to="/education">Education</Link>
          </BrowserRouter>
          <a className="navLogo" href="https://github.com/pablomoga9" target="_blank"><img src="https://img.icons8.com/ios-filled/50/null/github.png" alt="" /></a>
          <a className="navLogo" href="https://www.linkedin.com/in/pablo-moya-garc%C3%ADa-526588167/" target="_blank"><img src="https://img.icons8.com/ios-filled/50/null/linkedin-circled--v1.png" alt="" /></a>
        </div> :
          <div>
            <SideBar pageWrapId={"page-wrap"} outerContainerId={"navContainer"} />
            <a className="navLogo" href="https://github.com/pablomoga9" target="_blank"><img src="https://img.icons8.com/ios-filled/50/null/github.png" alt="" /></a>
           <a className="navLogo" href="https://www.linkedin.com/in/pablo-moya-garc%C3%ADa-526588167/" target="_blank"><img src="https://img.icons8.com/ios-filled/50/null/linkedin-circled--v1.png" alt="" /></a>
          </div>
      }}
    </Media>

  </div>
}
export default Nav;
