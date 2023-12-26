import React from "react";
import banner from '../../assets/images/banner1.png'
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
  const naviagate = useNavigate()
  return (
    <div className="hero">
      <div className="content">
        <h3>Fitness Club</h3>
        <h1>Sweat, Smile And Repeat</h1>
        <p>
          Check out the most effective exercises personalized to you Explore
          Exercises Exercise hero-banner
        </p>
       <button onClick={()=>window.scrollTo({top:1580,behavior:'smooth'})}>Explore Exercises</button>
      </div>
      <div className="image-container">
        <img src={banner} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
