import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineHome, AiOutlineClose } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoLogOutOutline } from 'react-icons/io5'
import mainIcon from '../../assets/images/Group 1.svg'
import redLogo from '../../assets/images/redlogo.svg'
import '../../assets/styles/nav.css'

const Nav = ({ setNavbarOpen, navbarOpen }) => {

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    return (
        <div>
            <nav className={navbarOpen ? "active-nav" : "nav"}>
                <div className="nav-title">
                    {navbarOpen ? <div className="nav-logo-open"> <img src={redLogo} alt="logo" /></div> : <div className="nav-logo"> <img src={mainIcon} alt="logo" /></div>}
                    <div className="menu-title"><NavLink to="/main" className="nav-link" activeClassName={navbarOpen ? "active-link-open" : "active-link"}>Hello, LIQID</NavLink></div>
                    <div className="nav-item left-item"><NavLink to="/" className="nav-link"><IoLogOutOutline className="icon" />Logout</NavLink></div>
                </div>

                <div className={navbarOpen ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-right">
                        <li className="nav-item right-item"><NavLink to="/" className="nav-link" ><IoLogOutOutline className="icon" />Logout</NavLink></li>
                        <li className="nav-item"><NavLink to="/home" className="nav-link" activeClassName={navbarOpen ? "active-link-open" : "active-link"}><AiOutlineHome className="icon" />Home</NavLink></li>
                        <li className="nav-item"><NavLink to="/profile" className="nav-link" activeClassName={navbarOpen ? "active-link-open" : "active-link"}><BsPerson className="icon" />Profile</NavLink></li>
                        <li className="nav-item"><NavLink to="/settings" className="nav-link" activeClassName={navbarOpen ? "active-link-open" : "active-link"} ><FiSettings className="icon" />Settings</NavLink></li>
                    </ul>
                    <div className="footer-sidebar">LIQID</div>
                </div>
                <div className="hamburger" onClick={handleToggle}>
                    {navbarOpen ? <AiOutlineClose className="toggle-icon" /> : <GiHamburgerMenu className="toggle-icon" />}
                </div>
            </nav>
        </div>
    )
}
export default Nav