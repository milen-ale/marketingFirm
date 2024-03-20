import React from 'react'
import './Style.css'
import Navbar2 from './Navbar2'
import icon5 from '../assets/icon5.png';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
function Service() {
  return (
    <div>
      <>
      <div className="desktop--BeE">
        <div className="auto-group-czqk-bKC">
          <div className='.service-GXp'>     
            <div className="title-Wh4">
              <p className="inspiring-you-to-reach-business-goals-4Cn" id='Services'>
                INSPIRING YOU TO REACH
                <br />
                BUSINESS $ GOALS
              </p> 
            </div>
            </div>
          <div className='Services'>
        
              <div className='Services1'>
                <div className='Title'>
                  <div className='icon-image'>
                    <img className='icon5-ruL'src={icon1} /> 
                  </div>
                 <div className='service-title'>
                   <p className='service-title1'>Business Analysis</p>
                 </div> 
               </div>
               <p className='service-description'>finding solutions to organizational problems <br></br> and creating positive value for stackholders</p>
              </div>
              <div className='Services2'>
                <div className='Title'>
                  <div className='icon-image'>
                    <img className='icon5-ruL'src={icon2} /> 
                  </div>
                 <div className='service-title'>
                   <p className='service-title1'>Reports Analysis</p>
                 </div> 
               </div>
               <p className='service-description'>finding solutions to organizational problems <br></br> and creating positive value for stackholders</p>
              </div>
             
          </div>

           
          <div className='Services'>
        
        <div className='Services1'>
          <div className='Title'>
            <div className='icon-image'>
              <img className='icon5-ruL'src={icon3} /> 
            </div>
           <div className='service-title'>
             <p className='service-title1'>Strategy Planning</p>
           </div> 
         </div>
         <p className='service-description'>finding solutions to organizational problems <br></br> and creating positive value for stackholders</p>
        </div>
      
 
 
        <div className='Services2'>
          <div className='Title'>
            <div className='icon-image'>
              <img className='icon5-ruL'src={icon5} /> 
            </div>
           <div className='service-title'>
             <p className='service-title1'>Management</p>
           </div> 
         </div>
         <p className='service-description'>finding solutions to organizational problems <br></br> and creating positive value for stackholders</p>
        </div>
       
    </div>



         </div>
      </div>
      
      </>
  </div>
    
  )
}

export default Service
