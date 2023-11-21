import React, { Component } from 'react'
import IeeeLogo from "./Ieee_Logo.png";
import Facebook from "./Facebook.png";
import Snap from "./Snap.png";
import Insta from "./Insta.png";
import Linkedin from "./Linkedin.png";
// import '../index.js'
import { Image } from 'react-bootstrap';
import './style.css'
import discord from "./discord.png"



export default class footer extends Component {
  render() {
    return (
        <>
        <div className="mainContainer">

        <div className='container1' >
       <div className="about">
        <img src={IeeeLogo} alt="" style={{height:'25%',width:'40%'}}/>
        <div className="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis impedit earum dignissimos atque adipisci necessitatibus cumque labore officia nam ad sunt, numquam ut, amet eos quaerat nobis maiores at unde? Veniam tempora assumenda quae! At, mollitia! Culpa, laudantium iure nulla officia quos natus repellat similique doloremque expedita. Asperiores, consectetur aliquam.
        </div>
    

       </div> 
       <div className="address">
        <h2 className="footerhead">
            Address
        </h2>
        <div>Netaji Subhash University of Technology</div>
        <div>Sector -3, Dwarka</div>
        <div>New Delhi - 110078</div>
        <div className="email">
            <a href="">dsc/ieee website here</a>
        </div>
        <h4>
            Venus Dharmik
            <br></br>
            Chief-Converner: xxxxxxxxxx
        </h4>
        <h4>
            Yogya Aggarwal
            <br></br>
            Chief-Converner: xxxxxxxxxx
        </h4>


       </div>
      <div className="links">
      <h2> Links: </h2>
                                
                                <ul>
                                    <li>About</li>
                                    <li>Sponsors</li>
                                    <li>FAQs</li>
                                    <li>Contact</li>
                                </ul>

      </div>
      <div className="sponsers">
        <div className='server'>
        <Image src={discord} alt="Facebook Logo" rounded style={{ width: '20%', height: '100%' }} />
        <h2>Join Server</h2>

        </div>
      
      <div className="icons">
            
              <Image src={Facebook} alt="Facebook Logo" rounded style={{ width: '18%', height: '100%' }} />
            
            
              <Image src={Insta} alt="Instagram Logo" rounded style={{ width: '18%', height: '100%' }} />
            
            
              <Image src={Snap} alt="Snapchat Logo" rounded style={{ width: '18%', height: '100%' }} />
            
            
              <Image src={Linkedin} alt="LinkedIn Logo" rounded style={{ width: '18%', height: '100%' }} />
            
          </div>
          
          <h2 className="mt-4 text-white text-xl font-weight-bold mt-4 mb-7">Interested in sponsering us?</h2>
          <div className="sponserus">Sponser Us</div>
          

      </div>
      
       </div>
       
       {/* <div className="lin" style={{backgroundColor:'white',height:"9px",width:'80%',zIndex:'2',position:'absolute'}}></div> */}
       <div className="lowerfooter">
        <h4>Code of Conduct</h4>
        <h4>IEEE DSC @ 2023- All rights reserved</h4>
      </div>
      </div>
       </>

    )
  }
}
;
