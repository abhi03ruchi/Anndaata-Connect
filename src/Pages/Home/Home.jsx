import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './Home.css';
import goal from '../../Components/assets/goals.png';
import { Parallax } from 'react-parallax';
import group from './groupPic.png';
import Footer from '../../Components/Footer/Footer'
import HomeBanner from '../../Components/Banner/HomeBanner';
import About from '../../Components/About/About';
import Features from '../../Components/Features/Feature';
import Stats from '../../Components/Stats/Stats';
import Team from '../../Components/Team/Team';
import OurServices from '../../Components/Services/OurServices';

const Home = () => {
    return (
        <>
            <div>
                <Navbar />
                <HomeBanner />
                <OurServices/>
                <Stats/>
                <Features />
                <About />
                <div className="section-4">
                    <div className="custom-typography">
                        <h2>Sustainable Development Goals</h2>
                    </div>
                    <img src={goal} alt="" srcset="" />
                </div>
                <Parallax
                    // blur={{ min: -15, max: 15 }}
                    bgImage={group}
                    bgImageAlt="the dog"
                    strength={300}
                >
                    {/* Blur transition from min to max */}
                    <div style={{ height: '80vh' }} />
                </Parallax>
                {/* <Team/> */}
                <Footer />
            </div>
        </>
    )
}

export default Home
