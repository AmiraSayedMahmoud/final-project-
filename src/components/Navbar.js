import React from "react";
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
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Diet</a>
        </li>
        <li>
          <a href="#">Excercise</a>
        </li>
        <li>
          <a href="#">Trainee</a>
        </li>
       <li><FaUser className='profil'/> </li> 
        
      </ul>
    </div> 
  );
}

export default Navbar;
