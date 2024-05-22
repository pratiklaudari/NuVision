import React from 'react'
import './coverpage.css'

const Coverpage = () => {
  return (
    <div className='cover-container'>
      <video src="\background_video.mp4" className='bgvideo' loop autoplay muted/>
        <p className='cover-header'>
            Your mind's journey starts here.
        </p>

        <p className='para'>What mental health support do you need?</p>
    </div>
  )
}

export default Coverpage
