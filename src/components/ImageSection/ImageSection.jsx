import React from 'react';
import Aside from '../../images/aside.png';
import './ImageSection.css';
const ImageSection = ({ imgPos }) => {
  return (
    <article className='image-section-wrapper container'>
      {imgPos === 'left' ? (
        <>
          <section className='image-section-1'>
            {' '}
            <img style={{ marginLeft: '0px' }} src={Aside} alt='' />
          </section>
          <section className='image-about'>
            {' '}
            <h1>Consequuntur magni</h1>{' '}
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia{' '}
            </p>
          </section>
        </>
      ) : (
        <>
          {' '}
          <section className='image-about'>
            {' '}
            <h1>Consequuntur magni</h1>{' '}
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia{' '}
            </p>
          </section>
          <section className='image-section-1'>
            <img src={Aside} alt='' />
          </section>
        </>
      )}
    </article>
  );
};

export default ImageSection;
