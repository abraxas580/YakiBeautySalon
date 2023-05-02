import React, { useState } from 'react'
import "./navbarStyle.css"
import { Link } from 'react-router-dom'
import Logo from "../../assets/img/logoSalon.jpeg"
import { Squash as Hamburger } from 'hamburger-react'

const Navbar = () => {

     const [isOpen, setOpen] = useState(false);

     const toggleNavbar = () => {
        setOpen(!isOpen);
     }

     return (
          <nav className='navbar'>
                    <div className='container-logo'>
                         <img src={Logo} className='logo' alt='logo'></img>
                    </div>

                    <ul className={`navbar-options ${isOpen ? "fade-in" : "fade-out"}`} onClick={() => setOpen(false)}>
                         <Link to='/' className='navbar-option'><li>Home</li></Link>
                         <Link to='/Services' className='navbar-option'><li>Services</li></Link>
                         <Link to='/AboutUs' className='navbar-option'><li>About us</li></Link>
                         <Link to='/ContactUs' className='navbar-option'><li>Contact us</li></Link>
                    </ul>

                    <div className='hamburguer-menu'  onClick={toggleNavbar}>
                         <Hamburger toggled={isOpen}/>
                    </div>
          </nav>
     )
}

export default Navbar

