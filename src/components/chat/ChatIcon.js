import React from 'react';
import ChatImage from '../../images/chat.png';
import './Chat.css';
const ChatIcon = ({ chatOpen, onClick }) => {
  return (
    <div onClick={onClick}>
      <img className='chat-icon' src={ChatImage} alt='' />
      <h3 className='chat-symbol'>{chatOpen ? <span>X</span> : 'm.'}</h3>
    </div>
  );
};

export default ChatIcon;
