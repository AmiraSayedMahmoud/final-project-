import React from "react";
import {NavLink} from 'react-router-dom'
import logo from "../images/gym logo 4.png";
// import ReactDOM from 'react-dom'
import { FaUser } from "react-icons/fa"; 



function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo pic" className="logoRest" />
        <h1 id="logo">
          GMS{" "}
          <span id="logoDecoration" style={{ color: "var(--prime)" }}></span>.{" "}
        </h1>
      </div>
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/food">Diet</NavLink>
        </li>
        <li>
          <NavLink to="/exercise">Excercise</NavLink>
        </li>
        <li>
          <NavLink to="/trainee">Trainee</NavLink>
        </li>
       <li><NavLink to="/profile"><FaUser className='profil'/></NavLink></li> 
        
      </ul>
    </div> 
  );
}

export default Navbar;
