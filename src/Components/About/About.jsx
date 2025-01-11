import React from "react";
import "./About.css";
import About from "../assets/foodWaste.png";
import { FaGithub, FaXTwitter, FaInstagram } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="red" id="about">
      <div className="left">
        <h1>MISSION + VISION</h1>
        <p>
          Our aim is to eradicate food wastage and alleviate hunger through the
          efficient distribution of surplus food. We leverage technology to
          connect restaurants, event hosts, and individuals with excess food to
          those facing food insecurity. Our vision is to create a world where
          every meal contributes to positive change, fostering a community that
          values and acts upon the potential of shared resources to combat
          hunger. By seamlessly connecting generosity with need, we aim to build
          a sustainable and inclusive future where no edible food goes to waste,
          and everyone has access to nourishing meals, creating a ripple effect
          of social responsibility and compassion.
        </p>
<div className="buttons">
  <h2>Follow Us:</h2>
  <div className="social">
    <a href="https://github.com/abhi03ruchi/Anndaata-Connect" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
      <FaGithub role="button" />
    </a>
    <a href="https://x.com/login.do" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
      <FaXTwitter role="button" />
    </a>
    <a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      <FaInstagram role="button" />
    </a>
  </div>
</div>

      </div>
      <div className="right">
        <img src={About} alt="Food Waste Illustration" />
      </div>
    </div>
  );
};

export default Hero;
