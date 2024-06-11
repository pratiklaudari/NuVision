import React from 'react'
import './Register.css'

const Register = () => {
  return (
    <div className='register-section'>
    <div className='register-container'>
        <div className='register-header'>
            <div className='register-text'>Sign Up</div>
            {/* <div className='reg-underline'></div> */}
        </div>

        <div className='register-inputs'>
            <div className='register-input'>
                <img src='.\user.png' alt=''/>
                <input type='name' placeholder='Enter name'/>
            </div>

            <div className='register-input'>
                <img src='.\email (1).png' alt=''/>
                <input type='email' placeholder='Enter email id'/>
            </div>

            <div className='register-input'>
                <img src='.\padlock.png' alt=''/>
                <input type='password' placeholder='Enter password'/>
            </div>
        </div>


        <div className='register-already'>Already registered? <a href='/login'>Log In</a></div>  
        <div className='register-submit-container'>
            <button className='register-submit'><a href='/login'>Sign Up</a></button>
            {/* <button className='register-submit'><a href='/login'>Sign In</a></button> */}

        </div>
      
    </div>
    </div>
  )
}

export default Register
