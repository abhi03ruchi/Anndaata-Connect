import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
const Contributors = () => {
  const [contributors, setContributors] = useState([]);
  const [error, setError] = useState("");

  const fetchContributors = async () => {
    try {
    const response = await axios.get(`https://api.github.com/repos/abhi03ruchi/Anndaata-Connect/contributors`);

      setContributors(response.data);
    } catch (err) {
      setError("Failed to load contributors. Please try again later.");
      console.error("Error fetching contributors:", err);
    }
  };

  useEffect(() => {
    fetchContributors();
  }, []);

  return (
    <>
     <Navbar/>
    <div className="max-w-6xl mx-auto mt-24 p-4 bg-white-100 rounded-xl ">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
         Contributors Of Anndaata Connect
      </h2>

      {error ? (
        <div className="text-red-600 text-center font-semibold">
          {error}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {contributors.map((contributor) => (
            <div
              key={contributor.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transform transition duration-300 text-center"
            >
              <img
                src={contributor.avatar_url}
                alt={contributor.login}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-700">
                {contributor.login}
              </h3>
              <a
                href={contributor.html_url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block bg-red-400 text-white py-2 px-4 rounded-lg hover:bg-red-300 transition duration-300"
              >
                 GitHub Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default Contributors;


