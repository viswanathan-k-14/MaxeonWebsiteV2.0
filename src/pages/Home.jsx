import React, { useState } from 'react';
import Hero from '../templates/template/Hero';
import InfoA from '../templates/template/InfoA';
import InfoB from '../templates/template/InfoB';
import InfoC from '../templates/template/InfoC';
import InfoD from '../templates/template/InfoD';
import ImageSection from '../components/ImageSection/ImageSection';
import './Home.css';
import InfoE from '../templates/template/InfoE';
import Footer from '../templates/template/Footer';
import ChatIcon from '../components/chat/ChatIcon';
import ChatBox from '../components/chat/ChatBox';

const Home = () => {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <Hero>
        <ChatBox chatOpen={chatOpen} />
        <ChatIcon onClick={() => setChatOpen(!chatOpen)} chatOpen={chatOpen} />
      </Hero>
      <div className='divider'></div>
      <InfoA />
      <div className='divider'></div>
      <InfoB />
      <div className='divider'></div>
      <InfoC />
      <div className='divider'></div>
      <InfoD />
      <div className='emuse-wrapper'>
        <figure className='emuse-bg'></figure>
      </div>
      <InfoB />
      <div className='divider'></div>
      <ImageSection imgPos='right' />
      <div className='divider'></div>
      <ImageSection imgPos='left' />
      <div className='divider'></div>
      <ImageSection imgPos='right' />
      <div className='divider'></div>
      <InfoE />
      <Footer />
    </>
  );
};

export default Home;
