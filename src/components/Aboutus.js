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
                <p> Welcome to NuVision, a revolutionising access to mental healthcare through convenient and affordable online counselling services.
                    Our vision is mental well being for all with our motto “Everyone deserves to be heard, Everyone deserves to heal”, 
                    especially focusing on people who lack it due to many barriers.
                </p>
                {/* <p>
                    We provide an AI-powered tool that recommends clients with the suitable counsellor by analysing their needs, preferences,
                    and behavioural data tracked within this platform. Our system groups clients with similar profiles into supportive 
                    online communities, enabling them to connect with peers. NuVision also offers AR/VR therapy tools, allowing counsellors 
                    to guide clients through immersive environments for exposure treatment, mindfulness exercises. </p>  */}
                <p>
                Our innovative "Pay as you can" model ensures cost is never an obstacle to improving one's mental wellbeing.
                NuVision is the future of accessible mental healthcare for all.
                </p>

            </div>
            
        </div>

    )
}

export default Aboutus
