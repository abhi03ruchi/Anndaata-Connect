import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
// import "./RegisterAndLogin.css";
import { useUserAuth } from "../../context/UserAuthContext";
import { Alert } from "react-bootstrap";
import logo from "../../Components/assets/logo.png";
import GoogleButton from "react-google-button";
import { motion } from 'framer-motion';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/services");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/services");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <motion.div
      className="loginstyle flex flex-1 flex-col  items-center justify-center sm:h-screen lg:h-2/3 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="logoImage"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img className="mx-auto h-12 w-auto" src={logo} alt="Your Company" />
        <h2 className="mt-6 text-center text-4xl sm:text-5xl font-bold leading-9 tracking-tight text-blue-600">
          Log In
        </h2>
      </motion.div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm w-full">
        {error && <Alert variant="danger">{error}</Alert>}

        <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-left text-md font-medium leading-6 text-blue-600">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                placeholder="email"
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-md font-medium leading-6 text-blue-600">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                placeholder="password"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-600 px-4 py-2 text-md font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Log In
            </button>
          </div>

          {error && <span className="text-red-500 text-sm"> Wrong email or password</span>}
        </form>
        <hr />
        <motion.div
          className="flex justify-center px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          {/* Google Sign-In Button (optional) */}
          <GoogleButton
            className="w-full"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </motion.div>
        <p className="mt-6 text-center text-lg text-gray-500">
          Don't have an account?{" "}
          <Link to="/registration" className="text-lg text-blue-600 hover:text-blue-500">
            Register
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default Login;
