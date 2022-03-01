import React, { useState, useEffect } from 'react';
import ChatArea from './ChatArea';
import './ChatBox.css';
import ChatConversation from './ChatConversation';
import ChatGreetings from './ChatGreetings';
const ChatBox = ({ chatOpen }) => {
  const [chatStart, setChatStart] = useState(false);
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading === true) {
      setTimeout(() => {
        messageFromApi();
      }, 200);
    }
    //eslint-disable-next-line
  }, [loading]);

  function handleClick(e) {
    setChatStart(true);
  }
  function addChat(chat) {
    setChats([...chats, chat]);
    setLoading(true);
  }

  async function messageFromApi() {
    const data = await fetch('https://api.adviceslip.com/advice');
    const chatData = await data.json();
    let messageApi = { text: '', id: Date.now(), loading: true };
    setChats([...chats, messageApi]);

    setTimeout(() => {
      messageApi.text = chatData.slip.advice;
      messageApi.loading = false;
      setLoading(false);
    }, 2000);
  }

  function endChat() {
    setChatStart(false);
    setChats([]);
  }

  if (chatOpen) {
    if (chatStart) {
      return (
        <div className='chat-box-wrapper chat-lg'>
          <ChatGreetings chatStart={chatStart} endChat={() => endChat()} />
          <ChatArea
            addChat={(chat) => addChat(chat)}
            chats={chats}
            loading={loading}
          />
        </div>
      );
    } else {
      return (
        <div className='chat-box-wrapper'>
          <ChatGreetings />
          <ChatConversation>
            <button className='con-btn' onClick={handleClick}>
              New Conversation <i className='fa-solid fa-paper-plane fa-1x'></i>
            </button>
          </ChatConversation>
        </div>
      );
    }
  } else {
    return null;
  }
};

export default ChatBox;
