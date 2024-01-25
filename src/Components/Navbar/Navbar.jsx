import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Navbar.css'
import Button from '../Button/Button'
import { FaBars } from "react-icons/fa";
const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <FaBars />
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects">Projects</NavLink>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        <li className='btnli'>
                            <Button
                                variant="outline"
                                to="/login"
                                fontweight="bold"
                                className="btn1"
                            >
                                Login in
                            </Button>

                            <Button to="/signup" fontweight="bold" variant="solid">
                                Sign up
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar