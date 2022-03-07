import Clear from '../../images/clear.png';
import React from 'react';
import ChatImage from '../../images/chat.png';
import './Chat.css';
const ChatIcon = ({ chatOpen, Click }) => {
  return (
    <div onClick={Click} className='chat-icon-wrapper'>
      <img className='chat-icon' src={ChatImage} alt='' />
      <h3 className='chat-symbol'>
        {chatOpen ? (
          <span>
            <img src={Clear} alt='X' />
          </span>
        ) : (
          'm.'
        )}
      </h3>
    </div>
  );
};

export default ChatIcon;
