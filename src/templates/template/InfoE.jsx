import React from 'react';
import Rocket from '../../images/rocket.png';
import Tick from '../../images/tick.png';
import '../styles/InfoE.css';

const InfoE = () => {
  return (
    <article className='info-e-wrapper'>
      <section className='rocket-image'>
        <img src={Rocket} alt='' />
      </section>
      <section className='info-e-content'>
        <h1>
          Accusantium doloremque <br /> laudantium
        </h1>
        <section className='quote-wrapper'>
          <section className='quote'>
            <img src={Tick} alt='' />
            <p>
              Neque porro <br />
              quisquam{' '}
            </p>
          </section>
          <section className='quote'>
            <img src={Tick} alt='' />
            <p>
              Neque porro <br />
              quisquam{' '}
            </p>
          </section>
        </section>
        <section className='quote-wrapper'>
          <section className='quote'>
            <img src={Tick} alt='' />
            <p>
              Neque porro <br />
              quisquam{' '}
            </p>
          </section>
          <section className='quote'>
            <img src={Tick} alt='' />
            <p>
              Neque porro <br />
              quisquam{' '}
            </p>
          </section>
        </section>
      </section>
    </article>
  );
};

export default InfoE;
