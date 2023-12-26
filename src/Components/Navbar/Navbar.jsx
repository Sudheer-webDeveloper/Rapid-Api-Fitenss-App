import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/images/logo1.png'

const Navbar = () => {
  return (
    <nav>
      
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="nav-content">
        <NavLink to="/" end className={({isActive})=>(isActive? "active" : "notActive")}>Home</NavLink>
        <a href={`#All`}>Exercises</a>
      </div>
    </nav>
  );
};

export default Navbar;
