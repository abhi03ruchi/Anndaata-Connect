import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";
import SustainableGoals from "../../Components/SustainableGoals";
import { Parallax } from "react-parallax";
import group from "../../Components/assets/groupPic.png";
import Footer from "../../Components/Footer/Footer";
import HomeBanner from "../../Components/Banner/HomeBanner";
import About from "../../Components/About/About";
import Features from "../../Components/Features/Feature";
import Stats from "../../Components/Stats/Stats";
import Team from "../../Components/Team/Team";
import OurServices from "../../Components/Services/OurServices";

const Home = () => {
  return (
    <>
      <div className="">
        <Navbar />
        
        <HomeBanner />
        <Stats />
        <Features />
        <About />
        <SustainableGoals />
        <div className="image-container">
          <img src={group} alt="group" className="parallax-img" />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
