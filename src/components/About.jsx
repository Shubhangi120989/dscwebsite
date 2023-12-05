import React, { Component } from 'react'
import './about.css'
export default class About extends Component {
  render() {
    return (
      <div>
        <div className="dsc">
            <div className="left_1">

            </div>
            <div className="right_text1">
                <h className="about_head">About DSC</h>
                <p className='about_text'>TechWeek is the Annual flagship event of IEEE NSUT comprising events ranging from grand Tech events like HackNSUT (one of India's largest hackathons), Coding contests, CSS battles, and Robowars to networking and personal growth sessions, like speaker sessions, workshops, and also fun events like Trading Contests, Cryptic Hunts and Cultural nights. We’re unifying it into a single cross-disciplinary offline experience so that some unique knowledgeable insights could be given to students attending it from various zones of India with diverse domains and skills. It’s not only limited to tech activities, the integration of fun sessions and networking opportunities at the end of the day makes it unique in itself. The presence of such a diverse and premium audience involving students and professionals from top Universities and companies alike, makes it an event to cherish.</p>
            <div className="stats">
                <div className="stats_text">
                    <h5>Events</h5>
                    <div className="stats_Num">
                    <span>15</span>+
                    </div>

                </div>
                <div className="stats_text">
                <h5>Footfall</h5>
                    <div className="stats_Num">
                    <span>3000</span>+
                    </div>
                </div>
                <div className="stats_text">
                <h5>Days</h5>
                    <div className="stats_Num">
                        <span>4</span>+
                    </div>
                </div>
            </div>
            


            </div>
        </div>
        <div className="ieee">
            
            <div className="right_text1">
                <h className="about_head">About IEEE NSUT</h>
                <p className='about_text'>IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. IEEE's core purpose is to foster technological innovation and excellence for the benefit of humanity. IEEE-NSUT Student Branch works to create an atmosphere of technical excellence for the students. We manage and organize various events and conferences at national level. It aims at helping students in building an attitude towards applying engineering in daily life by learning ways to use the latest technology on offer.
</p>
            
            </div>
            <div className="left_1">

            </div>
        </div>

      </div>
    )
  }
}
