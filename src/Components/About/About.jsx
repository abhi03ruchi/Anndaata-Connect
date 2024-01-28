import React from 'react';
import './About.css';
import About from '../assets/foodWaste.png';
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Hero = () => {
    return (
        <div class="red" id='about'>
            <div class="left">
                <h1>MISSION + VISION</h1>
                <p>Our aim is to eradicate food wastage and alleviate hunger through the efficient distribution of surplus food. We leverage technology to connect restaurants, event hosts, and individuals with excess food to those facing food insecurity. Our vision is to create a world where every meal contributes to positive change, fostering a community that values and acts upon the potential of shared resources to combat hunger. By seamlessly connecting generosity with need, we aim to build a sustainable and inclusive future where no edible food goes to waste, and everyone has access to nourishing meals, creating a ripple effect of social responsibility and compassion.
                </p>
                <div class="buttons">
                   <h2>Follow Us : </h2>
                   <div className='social'>
                   <FaGithub className='h-9 w-9'/>
                   <FaXTwitter className='h-9 w-9'/>
                   <FaInstagram className='h-9 w-9'/>
                   </div>
                </div>
            </div>
            <div class="right">
                <img src={About} alt="" />
            </div>
        </div>
    );
};

export default Hero;