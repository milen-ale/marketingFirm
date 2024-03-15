import React, { useState } from 'react';
import { Button } from './Button';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.PNG'
import './Navbar2.css';
import Dropdown from './Dropdown';

function Navbar2() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const location = useLocation();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <div>
          <p className="logo-ypzz">LOGO</p>
          </div>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link
              to='/'
              className={`nav-links ${location.pathname === '/' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              HOME
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
          
          </li>
          <li className='nav-item'>
            <Link
              to='/Service'
              className={`nav-links ${location.pathname === '/About' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              SERVICE
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/About'
              className={`nav-links ${location.pathname === '/News' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              ABOUT
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/Contact'
              className={`nav-links ${location.pathname === '/Vacancy' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              CONTACT
            </Link>
          </li>
         
        </ul>
       
      </nav>
    </>
  );
}

export default Navbar2;
