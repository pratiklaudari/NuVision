import React from 'react'
import './Dashchat.css'
import ChatIcon from '@mui/icons-material/Chat';
import Chatbox from './Chatbox';
import { useState } from 'react';

const Dashchat = () => {

  const [chatclick, setchatclick] = useState(false);

  const toggleclick = () => {
    setchatclick(!chatclick);
  };

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
            <p className='book-description'>

            The Meditations of Marcus Aurelius is a collection of personal reflections and Stoic philosophy, emphasizing self-discipline, inner peace, and ethical living amidst life's challenges.
            </p>
          </div>

          <div className='book1'>
            <img src='\midnight-library.jpg'/>
            <p className='book-description'>
            The Midnight Library by Matt Haig is a novel that follows the life of Nora Seed, who finds herself in a library between life and death, with the opportunity to try out alternate versions of her life and find the one where she truly belongs.
            </p>
          </div>

          <div className='book1'>
            <img src='\veronica-decides-to-die.jpg'/>
            <p className='book-description' >
            Veronika Decides to Die is a thought-provoking novel by Paulo Coelho. It tells the story of Veronika, a young woman who decides to end her life but finds herself in a psychiatric hospital where she learns valuable lessons about the meaning of life.
            </p>
          </div>

        </div>
      </div>

      <div className='dashright-movie'>
        <p className='dashchat-title'>Movies you may watch</p>
        <div className='movies'>
          <div className='movie'>
            <p className='movie-title'>A silent Voice</p>
            <p className='movie-description'>A Silent Voice is one of the best Japanese animated films of the past decade and an essential watch.The film covers elements of coming of age and psychological drama, dealing with themes of bullying, disability, forgiveness, mental health, suicide, and friendship of opposite sexes. It follows the story of a former bully turned social outcast, who decides to reconnect and befriend the deaf girl he had bullied years prior.</p>
          </div>

          <div className='movie'>
            <p className='movie-title'>It's kind of a funny story</p>
            <p className='movie-description'>This movie addresses "the influence of peer pressure", and how depression recovery can be attributed to being oneself and "acceptance for who he is".</p>
          </div>

          <div className='movie'>
            <p className='movie-title'>Stand By Me</p>
            <p className='movie-description'>Stand by Me accurately depicts the painful process of maturation that has plagued both teens and preteens for ages. Ultimately, the boys' unyielding sense of camaraderie and irrepressible spirit see them through towering adversity.</p>
          </div>
        </div>
      </div>


      <div className='auto-chat'>
        <ChatIcon
        htmlColor='white'
        />
        
        <button className='dash-chat-btn' onClick={toggleclick} >Chat Now</button>

      </div>

      { chatclick && <Chatbox setchatclick={setchatclick}/>}
    </div>
  )
}

export default Dashchat
