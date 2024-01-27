import React from "react";
import "./Banner.css";
import Cookies from "js-cookie";
import { ImGithub } from "react-icons/im";
import Button from "../Button/Button";
import backgrd from '../../Pages/Home/backgrd.png';
import Navbar from "../Navbar/Navbar";

const HomeBanner = () => {
    const overlayStyle = {
        position: 'relative',
        backgroundImage: `url(${backgrd})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      
      };
    
      const dullOverlayStyle = {
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Adjust the alpha value for the desired opacity
      };
      const textContainerStyle = {
        zIndex: 100, // Ensure the text is above the overlay
        position: 'relative',
      };
    
    return (
        <>
            <div style={overlayStyle}>
                <div style={dullOverlayStyle}>
                    <Navbar />
                </div>
                <div className="banner_mainparent" style={textContainerStyle}>
                    <div className="banner_subparent">
                        <div className="banner_textdiv">
                            <h1 className="banner_header1">
                                Connecting Excess to Empathy. <br />  Minimize Waste. <br /> Maximize Impact.
                            </h1>
                            <div>
                                <p className="banner_header3">
                                    An initiative to raise awareness and services for <span> food sustainability,</span>
                                    <br />
                                    promoting inclusivity across  <span>all communities </span> and <br />{" "}
                                    fostering a
                                    <span> world </span> without hunger.
                                </p>
                            </div>

                            <div className="banner_signup_btndiv">
                                <div className="banner_btn_div">
                                    {Cookies.get("isLoggedIn") ? (
                                        Cookies.get("usertype") === "club" ? (
                                            <Button
                                                className="banner_signup_btn"
                                                data-cy="landingpage-club-signup"
                                                id="landingpage-club-signup"
                                                variant="solid"
                                                to="/auth/signup"
                                            >
                                                Create an event
                                            </Button>
                                        ) : (
                                            <Button
                                                className="banner_signup_btn"
                                                data-cy="landingpage-club-signup"
                                                id="landingpage-club-signup"
                                                variant="solid"
                                                to="/shop"
                                            >
                                                Checkout our shop
                                            </Button>
                                        )
                                    ) : (
                                        <Button
                                            className="banner_signup_btn"
                                            data-cy="landingpage-club-signup"
                                            id="landingpage-club-signup"
                                            variant="solid"
                                            to="/auth/signup"
                                        >
                                            Sign up now
                                        </Button>
                                    )}
                                    <Button
                                        className="banner_signup_btn"
                                        to="https://github.com/MilanCommunity/Milan"
                                        target="_blank"
                                        rel="noreferrer"
                                        variant="outline"
                                    >
                                        <ImGithub className="banner_contribute_logo" />
                                        GitHub
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeBanner;