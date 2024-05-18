import React from "react"
import './About.css'
import { Link } from 'react-router-dom'

const About = () => {
    return(
        <div className= "About-container">
            <div className="Individual-container">         
                    <Link to= "/" className="individual">
                        <img src=".\individual1.jpg" alt="Individual" className="indiv-img"/>
                    </Link>
               
                <h1>Individual</h1>
                <p>Therapy For 18+</p>
                <button className="individual-button">Get Started</button>
            </div>

            <div className="Teen-container">
                <Link to="/" className="teen">
                    <img src=".\teenage.jpg" alt="Teens" className="Teen-img" />
                </Link>
                    <h1> Teens</h1>
                    <p>Therapy For Age 13-17</p>
                    <button className="teen-button">Get Started</button>
               
            </div>

            <div className="Parents-child-container">
                <Link to="/" className="parents-child">
                    <img src=".\parentschild11.jpg" alt="Parents-Child" className="Parents-and-child-img"/>
                </Link>
                    <h1>Parents and Child</h1>
                    <p>Therapy For Parents and Child</p>
                    <button className="parents-child-button">Get Started</button>
               

            </div>

        </div>

        

        
    )
}

export default About

