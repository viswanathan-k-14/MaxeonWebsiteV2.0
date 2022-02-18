import React from 'react';
import NavBar from '../../components/navbar/NavBar';
import SearchBar from '../../components/searchbar/SearchBar';
import HeroImage from '../../images/hero.png';
import '../styles/Hero.css';
const Hero = (props) => {
  return (
    <>
      <NavBar />
      <header className='hero-wrapper'>
        <div className='text-wrapper container'>
          {' '}
          <h1>
            {' '}
            Where <br /> words
            <br /> fail,
            <br /> Music
            <br /> speaks.
          </h1>
        </div>
        <div className='image-wrapper'>
          <img src={HeroImage} alt='' />
        </div>
        <SearchBar />
        {props.children}
      </header>
    </>
  );
};

export default Hero;
