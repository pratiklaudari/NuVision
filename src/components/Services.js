import React from "react";
import './Services.css'
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Services = () => {
    return(
        <div className="Services-section" id="services">
            <div className="services-card-container">
                <div className="services-card1" id="PARENTSandCHILD">
                    <Link to= '/' className="service-pictures">
                         <img src=".\mon-and-child.png" alt="Individual" className="service-image"/>
                    </Link>         
                    <div className="service-content">
                        <h2>Parent and Child</h2>
                        <p>Therapy for child of age between</p>
                        <p>4 to 12 and mothers</p>
                        <button>Get Started</button>
                    </div>  
                </div>

                <div className="services-card2" id="TEENAGERS">
                    <Link to= '/' className="service-pictures">
                        <img src=".\teenagers.png" alt="Teenagers" className="service-image"/>
                    </Link>
                    <div className="service-content">
                        <h2>Teenagers</h2>
                        <p>Therapy for teenagers of age between</p>
                        <p>13 to 17</p>
                        <button>Get Started</button>
                    </div>
                    
                </div>

                <div className="services-card3" id="ADULTS">
                    <Link to= '/' className="service-pictures-adult">
                        <img src=".\adults.png" alt="Adults" className="service-image-adult"/>
                    </Link>
                    <div className="service-content">
                        <h2>Adults</h2>
                        <p>Therapy for adults of age between</p>
                        <p>18 to 55</p>
                        <button>Get Started</button>
                    </div>
                   
                </div>

            </div>
        </div>


    )
}

export default Services