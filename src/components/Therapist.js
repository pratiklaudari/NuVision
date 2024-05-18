import React from "react";
import './Therapist.css';
import { Link } from "react-router-dom";

const therapist = () => {
    return(
        <div className="therapist-container">
            <div className="container-content">
                <p className="leftcontent1">Professional and Credentialled </p>
                <p className="leftcontent2">therapists </p>
                <p className="leftcontent3"> who you can trust!</p>
            
                <div className="therapist-text">
                     <p className="textcontent">
                        Tap into the world's largest network of credentialled and
                        experienced therapist who can help you with a range of 
                        issues including depression, anxiety, relationships, 
                        trauma, grief and more. With our therapists, you get
                        the same professionalism and quality you would expect
                        from an in-office therapist, but with the ability to 
                        communicate when and how you want.
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