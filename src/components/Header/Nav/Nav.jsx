import React, { Component } from "react";
import {Link} from 'react-router-dom';
import SideBar from "./sidebar";
import { useMediaQuery } from '../../../hooks/mediaQuery.ts';

function Nav(){
  
  return <div className="navContainer">
    <p>herehere</p>
    <SideBar pageWrapId={"page-wrap"} outerContainerId={"navContainer"} />
      {/* <Link>Home</Link>
      <Link>Proyectos</Link>
      <Link>CV</Link>  */}
    </div>
}
export default Nav;
