import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='login-section'>
    <div className='login-container'>
        <div className='login-header'>
            <div className='login-text'>Sign In</div>
            {/* <div className='reg-underline'></div> */}
        </div>

            <div className='login-inputs'>
            <div className='login-input'>
                <img src='.\email (1).png' alt=''/>
                <input type='email' placeholder='Enter email id'/>
            </div>

            <div className='login-input'>
                <img src='.\padlock.png' alt=''/>
                <input type='password' placeholder='Enter password'/>
            </div>
        </div>
         
        <div className='login-submit-container'>
            <button className='login-submit'><a href='/'>Submit</a></button>

        </div>
        <div className='new-user'>New user? <a href='/register'>Register here</a></div>  
       
      
    </div>
    </div>
  )
}

export default Login
