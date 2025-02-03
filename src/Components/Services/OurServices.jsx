import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const ServiceCard = ({ title, description, linkTo }) => (
  <div className="w-full md:w-96 transform transition-all duration-300 hover:translate-y-[-8px]">
    <div className="h-full bg-white rounded-2xl shadow-lg overflow-hidden border-b-4 border-[rgb(226,105,89)]">
      <div className="p-8 h-full flex flex-col">
        <div className="flex items-center justify-center mb-6">
          <h3 className="text-2xl font-bold text-[rgb(226,105,89)] pb-2 border-b-2 border-[rgb(226,105,89)]">
            {title}
          </h3>
        </div>
        <p className="text-gray-600 flex-grow mb-6 text-center">
          {description}
        </p>
        <Link 
          to={linkTo}
          className="inline-block bg-[rgb(226,105,89)] from-indigo-900 to-indigo-700 text-white font-semibold px-6 py-3 rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Learn More
        </Link>
      </div>
    </div>
  </div>
);

const OurServices = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 my-[5vh] mx-0">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-lg text-gray-600">
            We bridge the gap between surplus food and those in need, fostering a
            community-driven approach to eliminate food wastage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center max-w-5xl mx-auto">
          <ServiceCard
            title="NEED FOOD"
            description="The service provides a seamless connection between individuals and restaurants with surplus food to spare, and NGOs dedicated to supporting the underprivileged."
            linkTo="/ngoProfile"
          />
          
          <ServiceCard
            title="DONATE FOOD"
            description="The service empowers individuals hosting events, such as weddings or functions, to effortlessly contribute their excess food to the less fortunate"
            linkTo="/donorProfile"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurServices;