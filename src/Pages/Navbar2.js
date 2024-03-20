import React, { useState } from 'react';
import { Button } from './Button';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/MKLOGO2.png';
import './Navbar2.css';
import Dropdown from './Dropdown';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

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
          {/* <p className="logo-ypzz">LOGO</p> */}
          <img className="mk-logo" src={Logo}/>
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
  <ScrollLink
    to='Services'
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    className={`nav-links ${location.pathname === '/About' ? 'active' : ''}`}
    onClick={closeMobileMenu}
  >
    SERVICE
  </ScrollLink>
</li>
<li className='nav-item'>
  <ScrollLink
    to='About'
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    className={`nav-links ${location.pathname === '/About' ? 'active' : ''}`}
    onClick={closeMobileMenu}
  >
    ABOUT
  </ScrollLink>
</li>
<li className='nav-item'>
  <ScrollLink
    to='Contact'
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    className={`nav-links ${location.pathname === '/About' ? 'active' : ''}`}
    onClick={closeMobileMenu}
  >
    CONTACT
  </ScrollLink>
</li>
         
        </ul>
       
      </nav>
    </>
  );
}

export default Navbar2;
