import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const OurServices = () => {
    return (
        <>
            <Navbar />
            <div
                id="ourServices"
                className="bg-[whitesmoke] px-4 py-10 md:px-10 lg:px-20 pt-28"
            >
                <div className="text-center mb-12">
                    <h1
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
                        style={{ fontFamily: "Inder, sans-serif" }}
                    >
                        Our Services
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:w-8/12 mx-auto mt-4">
                        We bridge the gap between surplus food and those in need, fostering a
                        community-driven approach to eliminate food wastage.
                    </p>
                </div>

                <div
                    id="cardContainer"
                    className="flex flex-col sm:flex-row justify-center gap-8"
                >
                    {/* NEED FOOD Card */}
                    <div
                        className="flex flex-col items-center bg-[#e26959] text-white rounded-3xl shadow-lg transform transition duration-500 hover:scale-105 w-full sm:w-80 lg:w-96 p-6 border-b-8 border-[#28183b]"
                    >
                        <h2
                            className="text-xl sm:text-2xl lg:text-3xl text-[#28183b] font-semibold mb-3 border-b-2 border-[#28183b] pb-2"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                            NEED FOOD
                        </h2>
                        <p className="text-center text-sm sm:text-base mb-6">
                            Connects individuals and restaurants with surplus food to NGOs supporting the underprivileged.
                        </p>
                        <Link to="/ngoProfile">
                            <Button />
                        </Link>
                    </div>

                    {/* DONATE FOOD Card */}
                    <div
                        className="flex flex-col items-center bg-[#e26959] text-white rounded-3xl shadow-lg transform transition duration-500 hover:scale-105 w-full sm:w-80 lg:w-96 p-6 border-b-8 border-[#28183b]"
                    >
                        <h2
                            className="text-xl sm:text-2xl lg:text-3xl text-[#28183b] font-semibold mb-3 border-b-2 border-[#28183b] pb-2"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                            DONATE FOOD
                        </h2>
                        <p className="text-center text-sm sm:text-base mb-6">
                            Enables event hosts to donate excess food to those in need effortlessly.
                        </p>
                        <Link to="/donorProfile">
                            <Button />
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default OurServices;
