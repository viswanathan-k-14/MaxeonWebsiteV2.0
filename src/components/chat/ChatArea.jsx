import React, { useRef, useState, useEffect } from 'react';
import PreLoader from '../../images/preloader.gif';
const ChatArea = ({ addChat, chats, loading }) => {
  const [text, setText] = useState('');
  const chatRef = useRef();
  useEffect(() => {
    if (chatRef) {
      chatRef.current.addEventListener('DOMNodeInserted', (event) => {
        event.currentTarget.scroll({
          top: event.currentTarget.scrollHeight,
          behavior: 'smooth',
        });
      });
    }
  }, []);
  function handleChatInput(e) {
    setText(e.target.value);
  }
  function handleChatSubmit(e) {
    e.preventDefault();

    if (text !== '') {
      const chat = { text };
      chat.id = Date.now();
      chat.loading = false;
      addChat(chat);
      setText('');
    }
  }
  return (
    <div className='chat-area-wrapper'>
      <div className='chats-area' ref={chatRef}>
        {chats.map((chat) => {
          return (
            <div key={chat.id} className='message-wrapper'>
              <p className='message'>
                {chat.loading ? <img src={PreLoader} alt='' /> : chat.text}
              </p>
            </div>
          );
        })}
      </div>

      {!loading && (
        <form className='chat-input-wrapper'>
          <input
            type='text'
            value={text}
            placeholder={
              chats.length === 0 ? 'Send a Message...' : 'Write a reply...'
            }
            onChange={handleChatInput}
          />

          <button
            type='submit'
            className='chat-submit'
            onClick={handleChatSubmit}
            value=''
          >
            <i className='fa-solid fa-paper-plane fa-2x'></i>
          </button>
        </form>
      )}
    </div>
  );
};

export default ChatArea;
