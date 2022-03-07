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
  const [size, setSize] = useState('lg');

  function handleSize() {
    if (window.innerWidth <= 600) {
      setSize('sm');
    } else {
      setSize('lg');
    }
  }
  window.addEventListener('resize', handleSize);
  return (
    <>
      <main>
        <Hero>
          <ChatBox chatOpen={chatOpen} />
          <ChatIcon Click={() => setChatOpen(!chatOpen)} chatOpen={chatOpen} />
        </Hero>

        <div className={size === 'lg' ? 'divider-lg' : 'divider'}></div>
        <InfoA />
        <div className='divider'></div>
        <InfoB />
        <div className='divider'></div>
        <InfoC />
        <div className={size === 'lg' ? 'divider-lg' : 'divider'}></div>
        <InfoD />
        <div className={size === 'lg' ? 'divider-lg' : 'divider'}></div>
        <div className='emuse-wrapper'>
          <figure className='emuse-bg'></figure>
        </div>
        <div className={size === 'lg' ? 'divider-lg' : 'divider'}></div>
        <InfoB />
        <div className='divider'></div>
        <ImageSection imgPos='right' />
        <div className='divider'></div>
        <ImageSection imgPos='left' />
        <div className='divider'></div>
        <ImageSection imgPos='right' />
        <div className={size === 'lg' ? 'divider-lg' : 'divider'}></div>
        <InfoE />
      </main>
      <Footer />
    </>
  );
};

export default Home;
