import React from 'react';
import Rocket from '../../images/rocket.png';
import Read from '../../images/read.png';
import '../styles/InfoE.css';

const InfoE = () => {
  return (
    <article className='info-e-wrapper'>
      <section className='rocket-image'>
        <img src={Rocket} alt='' />
      </section>
      <section className='info-e-content'>
        <div className='text-cont'>
          <h1>
            Accusantium doloremque <br /> laudantium
          </h1>
        </div>

        <section className='quote-wrapper'>
          <section className='quote'>
            <img src={Read} alt='' />
            <p>
              Neque porro <br />
              quisquam{' '}
            </p>
          </section>
          <section className='quote'>
            <img src={Read} alt='' />
            <p>
              Neque porro <br />
              quisquam{' '}
            </p>
          </section>
        </section>
        <section className='quote-wrapper'>
          <section className='quote'>
            <img src={Read} alt='' />
            <p>
              Neque porro <br />
              quisquam{' '}
            </p>
          </section>
          <section className='quote'>
            <img src={Read} alt='' />
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
