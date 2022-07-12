import React,{useState} from 'react'
import { Link } from "react-router-dom";
import './navbar.css'
import Logo from './assets/logo01.png'

const navbar = () => {

    const [isMobile,setIsMobile] = useState(false);

  return (
          <nav className='navbar'>
        <Link to='/'>
            {/* <h3 className='logo'>logo</h3> */}
            <img src={Logo} alt='Logo' className='logo'></img>
        </Link>
        
        <ul className={isMobile?"nav-links-mobile":"nav-links"} 
        onClick={() => setIsMobile(false)}>
            <Link to="/" className="home">
                <li>Home</li>
            </Link>
            <Link to="/about" className="about">
                <li>About</li>
            </Link>
            <Link to="/contact" className="contact">
                <li>Contact</li>
            </Link>
            <Link to="/skills" className="skills">
                <li>Skills</li>
            </Link>
            <Link to="/signup" className="signup">
                <li>Signup</li>
            </Link>
        </ul>
        <button className='mobile-menu-icon'
        onClick={() => setIsMobile(!isMobile)}>
        </button>
            </nav>
 )
}

export default navbar