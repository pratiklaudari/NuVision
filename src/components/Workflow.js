import React from "react";
import './Workflow.css';
import { Link } from "react-router-dom";

const Workflow = () =>{
    return(

        <div className='working' id="howitworks">
            <h1 className='title'>HOW DOES IT WORK?</h1>

            <div className='workflow1'>
                <div className='part1'>
                    <h2 className='process1'>1. GET MATCH</h2>
                    <p className='description1'>
                    Answer a few questions and get match with a suitable credentialed therapist who fits your needs and preferences.
                     </p>
                </div>
                
                <Link to='/' className='process1-image'>
                    <img src='.\QnA.jpeg' alt='Questionnaires' className='qna-img'/>
                </Link>
            </div>

            <div className='workflow2'>
                <Link>
                    <img src='.\onlinesession.jpg' alt='online session' className='session-img'/>
                </Link>
                <div className='part2'>
                    <h2 className='process2'>2. TALK TO YOUR THERAPIST</h2>
                    <p className='description2'>Talk to your therapist however you prefer — phone, chat or video.</p>
                </div>
                    
            </div>
               

            <div className='workflow3'>
                <div className='part3'>
                    <h2 className='process3'>3. GET COUNSELLING</h2>
                    <p className='description3'>Get counselling at any time and from anywhere. Schedule live sessions at your own convenience, and can connect through a mobile phone or computer.</p>
                </div>
                <Link>
                <img src='.\connect.jpg' alt='connect with counsellors' className='connect-img'/>
                </Link>
               
            </div>

        </div>
       


    )

}

export default Workflow