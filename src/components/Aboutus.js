import React from "react";
import './Aboutus.css';

const Aboutus = () => {
    return(
        <div className="aboutus-section" id="aboutus">
            <div className="Aboutus-leftpart">
                <h1 className="aboutusleft1">Our Vision</h1>
                <h1 className="aboutusleft1">Is</h1>
                <h1 className="aboutusleft2">"Mental Well-Being </h1>
                <h1 className="aboutusleft2"> For All"</h1>
            </div>
            <div className="Aboutus-rightpart">
                <h3 className="aboutus-line1">
                    WELCOME TO NUVISION
                </h3>

                <p className="aboutus-line2">Your Mind’s Journey Starts Here!</p>
                <p> 
                We provide convenient and affordable online counselling services enabling our clients to connect to their therapists through their medium of choice(phone, chat or video). Our platform enables individuals to overcome barriers and get the proper mental health care that they so need and rightfully deserve. Further, our innovative <span className="payasyoucan">"Pay as you can"</span> model ensures that cost isn't an obstacle to improve one's mental well-being. NuVision is your great opportunity and trusted ally in hard times.
                </p>

            </div>
            
        </div>

    )
}

export default Aboutus
