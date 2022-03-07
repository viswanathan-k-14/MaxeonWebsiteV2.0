import Line from '../../images/Line.png';
import React from 'react';
import '../styles/InfoA.css';
const InfoA = () => {
  return (
    <article className='info-a-wrapper container'>
      <section className='info-a-quote'>
        <h1>
          LIVE SPORTS. <br />
          MUSIC.
          <br /> NEWS.
          <br /> PODCASTS.
          <br />
        </h1>
      </section>
      <section className='info-a-content'>
        <section className='line'>
          <span className='clr'></span>
          <span className='norm norm-1'></span>
          <span className='norm norm-2'></span>
          <span className='norm norm-3'></span>
          <img src={Line} alt='line' />
        </section>
        <section className='content-section'>
          <p>
            emuse brings you live <br /> sports.
          </p>
          <p>
            emuse brings you live <br /> music.
          </p>
          <p>
            emuse brings you live <br /> news.
          </p>
          <p>
            emuse brings you live <br /> podcast.
          </p>
        </section>
      </section>
    </article>
  );
};

export default InfoA;
