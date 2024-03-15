import React from 'react'
import { Link } from 'react-router-dom';
import './Style.css'
function Navbar() {
  return (
    <div>
      <>
      <div className="desktop--BeE">
        <div className="home-iu4">
          <div className="auto-group-fbje-T5x">
            <p className="logo-ypz">LOGO</p>
            <div className="group-1-V2e">
              <Link to="/" className="home-dee">HOME</Link>
              <div className="frame-17-Jkn">
              <Link to="/service" className="home-dee">SERVICE</Link>
              </div>
              <div className="frame-17-Jkn">
              <Link to="/about" className="home-dee">ABOUT</Link>
              </div>
              <div className="frame-17-Jkn">
              <Link to="/Contact" className="home-dee">CONTACT</Link>
              </div>
              </div>
          </div>   
        </div>
      </div>

      </>
    </div>
  )
}

export default Navbar
