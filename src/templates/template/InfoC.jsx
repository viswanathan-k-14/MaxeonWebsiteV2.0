import React from 'react';
import '../styles/InfoC.css';
import Vector from '../../images/vector.png';
const InfoC = () => {
  return (
    <>
      <main className='info-c-wrapper container'>
        <section className='info-c-1'>
          <h1>
            dolores eos qui <br /> ratione
          </h1>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
        </section>
        <img src={Vector} alt='arrow' />
        <section className='info-c-2'>
          <h1>
            dolores eos <br /> qui ratione
          </h1>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem </p>
        </section>
        <img src={Vector} alt='arrow' />
        <section className='info-c-3'>
          <h1>
            dolores eos <br /> qui ratione
          </h1>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
        </section>
      </main>
    </>
  );
};

export default InfoC;
