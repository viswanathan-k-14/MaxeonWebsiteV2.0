import React from 'react';
import NavBar from '../../components/navbar/NavBar';
import SearchBar from '../../components/searchbar/SearchBar';
import HeroImage from '../../images/hero3.png';
import '../styles/Hero.css';
const Hero = (props) => {
  return (
    <header className='main-header'>
      <NavBar />
      <div className='hero-wrapper'>
        <div className='text-wrapper'>
          {' '}
          <h1>
            {' '}
            Where <br /> words
            <br /> fail,
            <br /> Music
            <br /> speaks.
          </h1>
        </div>

        <img src={HeroImage} className='hero-image' alt='hero' />

        <SearchBar />
        {props.children}
      </div>
    </header>
  );
};

export default Hero;
