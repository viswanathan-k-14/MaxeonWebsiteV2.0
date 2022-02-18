import React from 'react';
import './ChatBox.css';
const ChatGreetings = ({ chatStart, endChat }) => {
  return (
    <div className='greeting-container'>
      <h1>Hi There</h1>
      <p>
        {chatStart
          ? 'The team typically replies in few minutes'
          : 'Ask us anything , Share your feedback'}
      </p>
      {chatStart && (
        <button className='btn' onClick={() => endChat()}>
          End Chat
        </button>
      )}
    </div>
  );
};

export default ChatGreetings;
