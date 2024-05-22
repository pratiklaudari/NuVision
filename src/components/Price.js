import React from "react";
import { Link } from "react-router-dom";
import './Price.css';

const Price = () =>{
    return(
        <div className="title-price" id="pricing">
        <h1>Pricing</h1>

       <div className="container">
        <div className="card1">
            <div className="card-title">
                <h1>Free</h1>
                <p className="free">Pay as you can</p>
            </div>
            <div className="card-content">
                <ul>
                    <li><i class="fa-solid fa-check-circle"></i>One therapy session <p className="permonth">per month</p></li>
                    <li><i class="fa-solid fa-times-circle"></i>Multiple therapy sessions</li>
                    <li><i class="fa-solid fa-times-circle"></i>On demand access of <p className="therapist">therapist</p></li>
                    <li><i class="fa-solid fa-times-circle"></i>Meditation session</li>
                    <li><i class="fa-solid fa-times-circle"></i>User interaction platform</li>
                </ul>
                <button><a href='a'>Buy Now</a></button>
            </div>
        </div>

        <div className="card2">
            <div className="card-title">
                <h1>Monthly</h1>
                <p><i class="fa-solid fa-dollar-sign"></i><span>15</span> per month</p>
            </div>
            <div className="card-content">
                <ul>
                    {/* <li><i class="fa-solid fa-check-circle"></i>One therapy session per month</li> */}
                    <li><i class="fa-solid fa-check-circle"></i>Multiple therapy sessions</li>
                    <li><i class="fa-solid fa-check-circle"></i>Meditation session</li>
                    <li><i class="fa-solid fa-check-circle"></i>On demand access of <p className="therapist">therapist</p></li>
                    <li><i class="fa-solid fa-check-circle"></i>User interaction platform</li>
                </ul>
                <button><a href='a'>Buy Now</a></button>

            </div>
        </div>

        <div className="card3">
            <div className="card-title">
                <h1>Annually</h1>
                <p><i class="fa-solid fa-dollar-sign"></i><span>150</span> per year</p>
            </div>
            <div className="card-content">
                <ul>
                    <li><i class="fa-solid fa-check-circle"></i>Multiple therapy sessions</li>
                    <li><i class="fa-solid fa-check-circle"></i>Meditation session</li>
                    <li><i class="fa-solid fa-check-circle"></i>On demand access of <p className="therapist">therapist</p></li>
                    <li><i class="fa-solid fa-check-circle"></i>User interaction platform</li>
                </ul>
                <button><a href='a'>Buy Now</a></button>
            </div>
        </div>
       </div>
       </div>
    )
}

export default Price