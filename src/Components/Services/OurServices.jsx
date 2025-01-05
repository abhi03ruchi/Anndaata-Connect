import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
const OurServices = () => {
    return (
        <>
        <Navbar/>
        <div id="ourServices" className="h-[100%] bg-[whitesmoke] lg:h-[100vh] relative lg:p-20 lg:ml-20 lg:mr-20">
            <div className="relative z-[5]">
                {/* Title */}
                <div className='mb-12 space-y-4 text-center'>
                    <h1 className='text-4xl font-bold text-gray-900 md:text-5xl'
                        style={{ fontFamily: 'Inder, sans-serif' }}
                    >Our Services </h1>
                    <p className='text-gray-600 lg:w-8/12 lg:mx-auto'>We bridge the gap between surplus food and those in need, fostering a community-driven approach to eliminate food wastage.</p>
                </div>

                {/* Card Containers */}
                <div id="cardContainer" className="mt-5 lg:flex lg:flex-row lg:p-10 lg:mt-6 lg:justify-evenly">
                    <div id="tailorCard" className="lg:mt-0 mt-5" 
                    style={{borderBottom :'6px solid #28183b',
                    borderRadius:'25px' }}>
                        <div
                            id="tailerCardContent"
                            className="lg:w-[350px] lg:h-[360px] rounded-3xl mt-5 drop-shadow-md flex justify-center content-center flex-wrap transform transition duration-500 hover:scale-105"
                            style={{ backgroundColor: "#e26959", color: "#fff", textAlign: "center" }}
                        >
                            <div id="tailerCardTitle" className="text-center">
                                <span className="text-lg lg:text-4xl text-[#28183b]"
                                style={{ fontFamily: 'Poppins, sans-serif' , borderBottom: '2px solid #28183b' }}
                                > NEED FOOD</span>
                            </div>
                            <p className="text-xs lg:text-base px-20 lg:px-10 py-5 lg:p-3">
                                The service provides a seamless connection between individuals and restaurants with surplus food to spare, and NGOs dedicated to supporting the underprivileged.{" "}
                            </p>
                            <Link to="/ngoProfile">
                                <div className="md:block hidden">
                                    <Button />
                                </div>
                            </Link>
                        </div>
                    </div>
                    {/* Tailor Card */}
                    <div id="tailorCard" className="lg:mt-0 mt-5"
                     style={{borderBottom :'6px solid #28183b',
                     borderRadius:'25px' }}>
                        <div
                            id="tailerCardContent"
                            className="lg:w-[350px] lg:h-[360px] rounded-3xl mt-5 drop-shadow-md flex justify-center content-center flex-wrap bg-red-500 transform transition duration-500 hover:scale-105"
                            style={{ backgroundColor: "#e26959", color: "#fff", textAlign: "center" }}
                        >
                            <div id="tailerCardTitle" className="text-center" 
                             style={{ fontFamily: 'Poppins, sans-serif' , borderBottom: '2px solid #28183b' }}
                            >
                                <span className="text-lg lg:text-3xl text-[#28183b]">DONATE FOOD</span>
                            </div>
                            <p className="text-xs lg:text-base px-20 lg:px-10 py-5 lg:p-3">
                                The service empowers individuals hosting events, such as weddings or functions, to effortlessly contribute their excess food to the less fortunate{" "}
                            </p>
                            <Link to="/donorProfile">
                                <div className="md:block hidden">
                                    <Button />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* BG-Gradients */}
            <div className="absolute circleGradient-peach w-[670px] h-[570px] top-[220px] left-[475px] z-0 blur-xl"></div>
        </div>
        <Footer/>
        </>
    );
};

export default OurServices;