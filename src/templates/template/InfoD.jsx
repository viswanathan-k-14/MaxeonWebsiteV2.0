import React from 'react';
import '../styles/InfoD.css';
import People1 from '../../images/people1.png';
import People2 from '../../images/people2.png';
import People3 from '../../images/people3.png';
import People4 from '../../images/people4.png';
import Music from '../../images/music.png';
const InfoD = () => {
  return (
    <article className='info-d-wrapper container'>
      <div className='image-group'>
        <section className='image-container-1'>
          <img src={People1} id='people1' alt='' />
          <img src={People2} id='people2' alt='' />
        </section>
        <section className='image-container-2'>
          <img src={People3} id='people3' alt='' />
          <img src={People4} id='people4' alt='' />
        </section>
      </div>
      <section className='info-d-2'>
        <h1>
          EVOLVE. <br /> EXPLORE.
        </h1>
        <p>
          All the pods you hold dear, find them here first. <br /> From chart
          toppers to newly discovered gems.
        </p>
        <button className='play-btn'>
          <img src={Music} alt='' />
          Listen Now
        </button>
      </section>
    </article>
  );
};

export default InfoD;
