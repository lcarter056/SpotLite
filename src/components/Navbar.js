import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import myLogo from './GreenLogo.png';

const Navbar = () => {
    return (
      <>
        <nav className ="navbar"> 
        <div className='navbar-logo'>
        <img className='photo' src={myLogo} alt='spotLite'/> 
        </div>
          <ul>
             <div className='navbar-link'>
                <Link to="/"> Home </Link>
                <Link to="/Profile"> Profile </Link>
                <Link to="/Engage"> Engage </Link>
                <Link to="/Cart"> Cart </Link>
             </div>
          </ul>
        </nav>
      </>
    );
 };

export default Navbar;