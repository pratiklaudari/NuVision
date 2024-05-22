import React from "react";
import './Comparision.css';

const Comparision = () => {
    return(
        <div className="Comparision-section" id="comparision">
            <h1 className="comp-title">NuVision Vs. Traditional In-Person Therapy</h1>
            <div className="comparision-container">

                <div className="comp-card1">
                    <div className="compcard-title">
                        <h2>Services</h2>
                    </div>
                    <div className="compcard-content">
                        <ul>
                            <li className="c11">Pay as you can</li>
                            <li>Get access to licensed therapist</li>
                             <li>In-Person Visit</li>  
                            <li>On demand access of therapist</li>
                            <li className="c11">Accessible from anywhere</li>
                            <li>Flexibility in scheduling</li>
                            <li>Chat, phone or video session</li>
                            <li>Meditation Session</li>
                            <li>User interaction platform</li>             
                        </ul>
                    </div>
                </div>

                <div className="comp-card2">
                    <div className="compcard-title">
                        <h2>NuVision</h2>
                    </div>
                    <div className="compcard-content">
                        <ul>
                            <li className="c11"><i class="fa-solid fa-check"></i></li>
                            <li className="c11"><i class="fa-solid fa-check"></i></li>
                            <li><i class="fa-solid fa-times"></i></li>
                            <li><i class="fa-solid fa-check"></i></li>
                            <li className="c11"><i class="fa-solid fa-check"></i></li>
                            <li><i class="fa-solid fa-check"></i></li>
                            <li><i class="fa-solid fa-check"></i></li>
                            <li><i class="fa-solid fa-check"></i></li>
                            <li><i class="fa-solid fa-check"></i></li>             
                        </ul>
                    </div>
                </div>

                <div className="comp-card3">
                    <div className="compcard-title">
                        <h2>Traditional In-Person Therapy</h2>
                    </div>
                    <div className="compcard-content">
                        <ul>
                            <li><i class="fa-solid fa-times"></i></li>
                            <li><i class="fa-solid fa-check"></i></li>
                            <li><i class="fa-solid fa-check"></i></li>
                            <li><i class="fa-solid fa-times"></i></li>
                            <li><i class="fa-solid fa-times"></i></li>
                            <li><i class="fa-solid fa-times"></i></li>
                            <li><i class="fa-solid fa-times"></i></li>
                            <li><i class="fa-solid fa-times"></i></li>
                            <li><i class="fa-solid fa-times"></i></li>             
                        </ul>
                    </div>
                </div>
                


            </div>
            
        </div>

    )
}

export default Comparision