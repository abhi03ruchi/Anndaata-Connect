import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const OurServices = () => {
    return (
        <>
        <Navbar/>
        <div className="min-h-screen bg-white relative p-4 sm:p-8 md:p-12 lg:p-20 overflow-hidden">
            {/* Center radial animation */}
            <motion.div 
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-orange-200 via-yellow-200 to-orange-200 rounded-full blur-3xl"
                style={{ zIndex: 0 }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    <motion.div className="mb-8 md:mb-12 space-y-4 text-center px-4">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
                            style={{ fontFamily: 'Inder, sans-serif' }}
                        >Our Services</h1>
                        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                            We bridge the gap between surplus food and those in need, fostering a community-driven approach to eliminate food wastage.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 px-4 max-w-6xl mx-auto">
                        {[
                            {
                                title: "NEED FOOD",
                                description: "The service provides a seamless connection between individuals and restaurants with surplus food to spare, and NGOs dedicated to supporting the underprivileged.",
                                link: "/ngoProfile"
                            },
                            {
                                title: "DONATE FOOD",
                                description: "The service empowers individuals hosting events, such as weddings or functions, to effortlessly contribute their excess food to the less fortunate",
                                link: "/donorProfile"
                            }
                        ].map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 + 0.5 }}
                                whileHover={{ 
                                    scale: 1.03,
                                    rotateY: 5,
                                    transition: { type: "spring", stiffness: 300 }
                                }}
                                className="h-full"
                            >
                                <motion.div
                                    className="h-full rounded-3xl p-6 md:p-8 flex flex-col justify-between backdrop-blur-sm bg-white/80"
                                    style={{ 
                                        background: 'linear-gradient(135deg, #e26959 0%, #fff 200%)',
                                        borderBottom: '6px solid #28183b',
                                        borderRadius: '25px'
                                    }}
                                >
                                    <div>
                                        <motion.div className="text-center mb-4">
                                            <span 
                                                className="text-xl md:text-2xl lg:text-4xl text-[#28183b] inline-block"
                                                style={{ 
                                                    fontFamily: 'Poppins, sans-serif',
                                                    borderBottom: '2px solid #28183b'
                                                }}
                                            >{card.title}</span>
                                        </motion.div>
                                        <p className="text-gray-800 text-sm md:text-base lg:text-lg mb-6">
                                            {card.description}
                                        </p>
                                    </div>
                                    <Link to={card.link} className="block">
                                        <motion.div 
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Button />
                                        </motion.div>
                                    </Link>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default OurServices;