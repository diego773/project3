import React from "react";
import jimmy from "../image/jimmy.jpg"
import "./style.css"

function Hero() {
  return (
    <div classname="container hero-image">
      <div className="bg-image">
        <header className="image">
            <img src={jimmy} className="jimmy" alt="dog"/>
        </header>
      </div>
    </div>
  );
}


export default Hero;
      
