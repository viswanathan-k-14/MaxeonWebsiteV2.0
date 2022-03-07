import React, { useRef, useState, useEffect } from 'react';
import Oval from '../../images/Oval.png';
import Send1 from '../../images/send1.png';
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
            <>
              <div
                key={chat.id}
                className={chat.loading ? 'load-wrapper' : 'message-wrapper'}
              >
                {chat.loading && <span className='.chat-profile'></span>}
                <p className='message'>
                  {chat.loading ? (
                    <div className='preload'>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  ) : (
                    chat.text
                  )}
                </p>
              </div>
            </>
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
            <img
              src={Send1}
              alt='send-blue'
              style={{ width: '30px', height: '30px' }}
            />
          </button>
        </form>
      )}
    </div>
  );
};

export default ChatArea;
