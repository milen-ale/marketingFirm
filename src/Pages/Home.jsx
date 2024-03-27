import React, { useState } from 'react';
import './Style.css'
import { Button } from './Button';
import { Link, useLocation } from 'react-router-dom';
//import Logo from '../assets/logo.PNG'
import './Navbar2.css';
import Dropdown from './Dropdown';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';


function Home() {
  return (
    <div>
      <div className="desktop--BeE">
      <div className="content-Se2">
            <p className="we-develop-and-create-future-PJN" id='Home'>
              We develop and
              <br />
              create future.
            </p>
            <p className="achieving-high-performance-substantial-revenue-growth-and-increased-profitability-uXc">
              Achieving high performance, substantial revenue growth
              <br />
              and increased profitability.
            </p>
            <div className="component-1-14r">Discover More</div>
          </div>
    
        

        </div>
       
      <Service />
      <About />
      <Contact />
      <Footer />
        
      </div>
  );
}

export default Home;
