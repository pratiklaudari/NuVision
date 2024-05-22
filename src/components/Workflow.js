import React from "react";
import './Workflow.css';
import { Link } from "react-router-dom";

const Workflow = () =>{
    return(

        <div className='working' id="howitworks">
            <h1 className='title'>How It Works</h1>

            <div className='workflow1'>
                <div className='part1'>
                    <h2 className='process1'>Get matched to the best therapist for you</h2>
                    <p className='description1'>Answer a few questions to find a credentialled therapist who fits your needs and preferences.
                     Tap into the largest network of credentialled providers.
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
                    <h2 className='process2'>Communicate your way</h2>
                    <p className='description2'>Talk to your therapist however you feel comfortable — text, chat, phone, or video.</p>
                </div>
                    
            </div>
               

            <div className='workflow3'>
                <div className='part3'>
                    <h2 className='process3'>Therapy when you need it</h2>
                    <p className='description3'>You can message your therapist at anytime, from anywhere. You also get to schedule live sessions when it's convenient for you, and can connect from any mobile device or computer.</p>
                </div>
                <Link>
                <img src='.\connect.jpg' alt='connect with counsellors' className='connect-img'/>
                </Link>
               
            </div>

        </div>
       


    )

}

export default Workflow