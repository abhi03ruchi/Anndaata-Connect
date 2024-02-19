

//THIS IS FOR REGISTRATION PAGE 

import React, { useState } from 'react';
import "./RegisterAndLogin.css";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { useUserAuth } from "../../context/UserAuthContext";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };



  return (
    <div className='loginstyle' >
      <div className="flex flex-1 flex-col justify-center ">
        <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
            Register
          </h2>
        </div>
        
        <div className=" mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {error && <Alert variant="danger">{error}</Alert>}
          <form onSubmit = {handleSubmit} className="space-y-6" action="#" method="POST">
            <div >
              <label htmlFor="email" className="block text-left text-md font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder = "email"
                  onChange = {e => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-md font-medium leading-6 text-gray-900">
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder = "password"
                  onChange = {e => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-lg text-gray-500">
            Already have an account? <Link to = "/loginN"  className='text-lg text-indigo-600  hover:text-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' >Log In</Link>
          </p>

        </div>
      </div>
    </div>
  )
}

export default Registration;
