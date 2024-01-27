import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/name.png";
import Button from "./Button";
import "./Navbar.css";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar-body">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 md:w-auto w-full flex justify-between">
          <img src={Logo} alt="logo" className="md:cursor-pointer" style={{height:'100px'}}/>
          <div className=" text-4xl px-6 py-6 md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link to="/" className="nav-li">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-li">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-li">
              About
            </Link>
          </li>
         
        </ul>
        <div className="md:block hidden">
          <Button />
        </div>
        {/* Mobile nav */}
        <ul
          className={` md:hidden fixed w-full top-0 overflow-y-auto bottom-0 justify-center flex-col items-center text-center text-black font-medium transition-all h-60
          duration-500
         ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <div className="py-5">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;