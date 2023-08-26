import React from "react";
import "../styles/About.css";
import Banner from "../assets/AboutImage.jpg";

function About() {
  return (
    <div className="about">
      <div className="aboutTop" style={{ backgroundImage: `url(${Banner})` }}>
        {" "}
      </div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Embark on a culinary adventure at TastefulTrek Diner. Our cozy
          restaurant is a gateway to a world of flavors, where every dish tells
          a story. Explore a menu inspired by global cuisines, thoughtfully
          crafted for your palate. Join us and let your taste buds wander.
        </p>
      </div>
    </div>
  );
}

export default About;
