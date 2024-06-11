import React from "react";
import './Therapist.css';
import { Link } from "react-router-dom";

const therapist = () => {
    return(
        <div className="therapist-container">
            <div className="container-content">
                <p className="leftcontent1">MEET OUR THERAPISTS </p>
                {/* <p className="leftcontent2">therapists </p> */}
                {/* <p className="leftcontent3"> who you can trust!</p> */}
            
                <div className="therapist-text">
                     <p className="textcontent">
                     Our platform provides Nepal’s most experienced and trustworthy therapists, counsellors, psychologists and psychiatrists enabling clients to receive high quality and professional therapy sessions according to their needs, budget and time schedule.
                        </p> 
                    <button className="therapist-button">Get Matched to therapists</button>
               </div>

            </div>

            
            

            <div className="therapist-image">
                <Link to='/' className="therapist-image">
                <img src=".\therapists.png" alt="Therapist" className="therapist-img"/>
                </Link>
            </div>
           
        </div>

    )
}

export default therapist