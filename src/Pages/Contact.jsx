import React from 'react'
//import Navbar from './Navbar'
import bpt from '../assets/-bBt.png';
import eij from '../assets/-eiJ.png';
import mcj from '../assets/-McJ.png';
import add from '../assets/add.png';
import Navbar2 from './Navbar2';
function Contact() {
  return (
    <div>
      <>
       <div className='main-contact'>
          <div className='contact-big-card'>
             <div className='contact-tfield'>
                <p className='feel-free'>Feel free to contact us anytime. We will get back to you as soon us we can.</p> 
                <input className='textfields' type="text" name="Name" value="Name"/> <br></br>
                <input className='textfields' type="text" name="Name" value="Email"/> <br></br>
                <input className='textfields' type="text" name="Name" value="Message"/> <br></br>
                <button className='send-button'>SEND</button>
             </div>
             <div className='contact-info'>
                 <p className='info'>INFO</p>
                 <div className='icon-and-text-container'>
                   <div className='icon-and-text'>
                      <div className='icon-and-text-content'>
                          <img className="item-3916611-1-7dY" src={bpt} />
                      </div>
                      <div className='icon-and-text-content'>
                        <p className="examplegmailcom-3GJ">example@gmail.com</p>
                      </div> 
                   </div>
                   <br></br>
                   <div className='icon-and-text'>
                      <div className='icon-and-text-content'>
                          <img className="item-3916611-1-7dY" src={eij} />
                      </div>
                      <div className='icon-and-text-content'>
                        <p className="examplegmailcom-3GJ">0000000000</p>
                      </div> 
                   </div>
                   <br></br>
                   <div className='icon-and-text'>
                      <div className='icon-and-text-content'>
                          <img className="item-3916611-1-7dY" src={add} />
                      </div>
                      <div className='icon-and-text-content'>
                        <p className="examplegmailcom-3GJ">Addis Ababa, Ethiopia</p>
                      </div> 
                   </div>
                   <br></br>
                   <div className='icon-and-text'>
                      <div className='icon-and-text-content'>
                          <img className="item-3916611-1-7dY" src={mcj} />
                      </div>
                      <div className='icon-and-text-content'>
                        <p className="examplegmailcom-3GJ">3:00AM - 5:00PM</p>
                      </div> 
                   </div>
                   
                   
                 </div>
             </div>
          </div>
       </div>
      </>
    </div>
  )
}

export default Contact
