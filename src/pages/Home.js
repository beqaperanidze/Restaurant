import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import Banner from "../assets/BannerImage.jpg";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
      <div className="headerContainer">
        <h1>TastefulTrek Diner</h1>
        <p>Embark on Flavorful Journeys with Every Bite!</p>
        <Link to="/menu">
          <button>Order now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
