import React from 'react'
import Button from '../Generics/Buttons/Button';
import { Link, NavLink } from 'react-router-dom';
import './Nav.css';


import img_logotype from '../../Assets/images/Logo.svg';


const NavSection = () => {
  return (
    <header>
        <div className="container">
            <Link to="/"><img src={img_logotype} alt="Crito Logotype"/></Link>
            <Link to="*" target="_blank"><button className="menu-bar"><i className="fa-solid fa-ellipsis"></i></button></Link>
            <div className="menu">
                <div className="top-menu">
                    
                    <div className="cont-info">
                        <div className="content-box"><i className="fa-solid fa-phone"></i>+46 (8) 121 470 50</div>
                        <div className="content-box"><i className="fa-regular fa-envelope"></i>info@crito.com</div>
                        <div className="content-box last"><i className="fa-solid fa-location-dot"></i>Sveavägen 31, 111 34 STOCKHOLM</div>
                    </div>
                    
                    <div className="social">
                        <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                        <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    </div>               
                </div>

                <div className="bottom-menu">  
                         
                    <nav className="Navigation">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="*">News</NavLink>
                        <NavLink to="*">Services</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </nav>    
                    
                    <div>
                        <Button type="yellow" Title="Log in" url="/Home/login"/>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default NavSection