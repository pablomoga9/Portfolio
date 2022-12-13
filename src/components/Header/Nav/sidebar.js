import React from "react";
import { slide as Menu } from "react-burger-menu";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

export default props =>{
    const navigate = useNavigate();

    return(
        <Menu{...props}>
            <Link className="menu-item" to='/'>Inicio</Link>
            <Link className="menu-item" to='/works'>Trabajos</Link>
        </Menu>
    )
}