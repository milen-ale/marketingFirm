import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import './Style.css';

function Footer() {
  return (
    <div>
      <div className='Footer-container'>
         <div className='Follow-us'>
            <h3 className='follow-us-text'>FOLLOW US</h3>
            <div className='social-icons'>
               <FaFacebookF className='facebook'/>
               <AiFillInstagram className='instagram'/>
               <FaTwitter className='twitter'/>
            </div>
         </div>
         <div className='Information'>
         <h3 className='info-text'>INFORMATION</h3>
           <p>About us</p>
           <p>Customers</p>
           <p>Service</p>
         </div>
         <div className='Subscribe'>
            <h3 className='subscribe-text'>SUBSCRIBE</h3>
            <p>Don't miss to subscribe to our news feed. kindly fill the form below</p><br></br>
            <input className='subscribe-textfield' type="text" name="Email Address" value="Email Address"/> 

         </div>
      </div>
    </div>
  )
}

export default Footer
     