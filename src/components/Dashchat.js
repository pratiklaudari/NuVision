import React from 'react'
import './Dashchat.css'
import ChatIcon from '@mui/icons-material/Chat';

const Dashchat = () => {
  return (
    <div className='dashchat-container'>
      <div className='dashright-quote'>
      <p className='dashchat-title'>Quotations of the day</p>
      <div className='quotations'>
        <p>
        “You are the one thing in this world, above all other things, that you must never give up on.
        Asking for help is the first step. You are more precious to this world than you’ll ever know.” — Lili Reinhart
      </p>

      <p>
      “I found that with depression, one of the most important things you can realize is that you’re not alone.
       You’re not the first to go through it, you’re not gonna be the last to go through it,” — Dwayne “The Rock” Johnson
      </p>
      </div>
      </div>

      <div className='dashright-book'>
        <p className='dashchat-title'>Books for you</p>
        <div className='books'>
          <div className='book1'>
            <img src='\book1.jpg'/>
            <p>

"The Meditations of Marcus Aurelius is a collection of personal reflections and Stoic philosophy, emphasizing self-discipline, inner peace, and ethical living amidst life's challenges."
            </p>
          </div>

          <div className='book1'>
            <img src='\book1.jpg'/>
            <p>

"The Meditations of Marcus Aurelius is a collection of personal reflections and Stoic philosophy, emphasizing self-discipline, inner peace, and ethical living amidst life's challenges."
            </p>
          </div>

        </div>
      </div>




      <div className='auto-chat'>
        <ChatIcon
        htmlColor='white'
        />
        <button className='dash-chat-btn'>Chat Now</button>
      </div>
    </div>
  )
}

export default Dashchat
