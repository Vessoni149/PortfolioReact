import React from "react";
import './NavBar.css';
import kayak from'../assets/kayaking_white_24dp.svg';
import { NavLink } from "react-router-dom";
function NavBar(){
    return(
        <div className="navBar-container">
            <div className="icon-container">
                <img className="icon-container-img" src={kayak} alt="kayak"></img>
            </div>
            <div className="navBar-list-container">
            <ul className="navBar-list">
                <li className="navBar-list-li"><NavLink className={({isActive}) => isActive ? "active" : ""} to="/">Inicio</NavLink></li>
                <li className="navBar-list-li"><NavLink to="/certificados">Certificados</NavLink></li>
                <li className="navBar-list-li"><NavLink to="contacto">Contacto</NavLink></li>
            </ul>
            </div>
        </div>
    )
}

export { NavBar };