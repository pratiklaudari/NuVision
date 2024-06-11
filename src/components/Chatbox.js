import React from 'react'
import './Chatbox.css'
import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';
const Chatbox = () => {
  return (
    <div className='dashchatbox-container'>
      <div className='chatbox-header'>
        <h2 className='header'>Chatbot</h2>
        <div>
        <CloseIcon className='closeicon'/>
        </div>
      </div>
      

      
      <ul className='chatbox'>
        <li className='chat-incoming'>
          <div className='incoming'>
          <PersonIcon className='personicon'/>
          <p>Hi there!  How can i help you today?</p>
          </div>
        </li>

        <li className='chat-outgoing'>
          <p>Hello!</p>
        </li>

        <li className='chat-incoming'>
          <div className='incoming'>
          <PersonIcon className='personicon'/>
          <p>Hi there!  How can i help you today?</p>
          </div>
        </li>

        <li className='chat-outgoing'>
          <p>Hello!</p>
        </li>

        <li className='chat-incoming'>
          <div className='incoming'>
          <PersonIcon className='personicon'/>
          <p>Hi there!  How can i help you today?</p>
          </div>
        </li>

        <li className='chat-outgoing'>
          <p>Hello!</p>
        </li>

        <li className='chat-incoming'>
          <div className='incoming'>
          <PersonIcon className='personicon'/>
          <p>Hi there!  How can i help you today?</p>
          </div>
        </li>

        <li className='chat-outgoing'>
          <p>Hello!</p>
        </li>

        <li className='chat-incoming'>
          <div className='incoming'>
          <PersonIcon className='personicon'/>
          <p>Hi there!  How can i help you today?</p>
          </div>
        </li>

        <li className='chat-outgoing'>
          <p>Hello!</p>
        </li>

        
      </ul>

      <div className='chat-input'>
        <textarea placeholder='Enter a message...'></textarea>
        <span><SendIcon className='sendicon'/></span>
      </div>
    </div>
  )
}

export default Chatbox
