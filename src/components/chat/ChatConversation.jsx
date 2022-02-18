import React from 'react';

const ChatConversation = ({ children }) => {
  return (
    <div className='conversation'>
      <h3 className='con-title'>Start a Conversation</h3>
      <p className='con-info'>The team typically replies in few minutes</p>
      {children}
    </div>
  );
};

export default ChatConversation;
