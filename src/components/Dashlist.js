import React from 'react'
import './Dashlist.css'


const Dashlist = () => {
  return (
    <div className='Dashlist-container'>
      <div className='Dashlist-section'>
        <ul className='Dashlist-items'>
            <a><li className='dash-text'>Account</li></a>
            <a><li className='dash-text'>History</li></a>
            <a><li className='dash-text'>One therapy session</li></a>
            <a><li className='dash-text'>Multiple therapy sessions</li></a>
            <a><li className='dash-text'>Meditation</li></a>
            <a><li className='dash-text'>Webinar</li></a>
            <a><li className='dash-text'>Chat</li></a>
            <button className='dashlist-btn'><a href='/login'>Log out </a></button>

        </ul>
        </div>  
      
    </div>
  )
}

export default Dashlist
