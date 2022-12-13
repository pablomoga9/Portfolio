import React, { Component } from "react";
import { Link } from 'react-router-dom';
import SideBar from "./sidebar";
import Media from "react-media";

function Nav() {


  return <div className="navContainer">

    <Media query="(min-width: 600px)">
      {matches => {
        return matches ? <div className="separatedNav">
          <Link className="navItem" to="/">Home</Link>
          <Link className="navItem" to="/skills">Skills</Link>
          <Link className="navItem" to="/works">Works</Link>
          <Link className="navItem" to="/experience">Experience</Link>
          <Link className="navItem" to="/education">Education</Link>
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

    {/* <Link>Home</Link>
      <Link>Proyectos</Link>
      <Link>CV</Link>  */}
  </div>
}
export default Nav;
