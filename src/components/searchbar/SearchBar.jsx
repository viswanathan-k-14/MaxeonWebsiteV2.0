import React from 'react';
import './SearchBar.css';
const SearchBar = () => {
  return (
    <div className='search-placeholder'>
      <div className='search-container'>
        <i className='fas fa-search fa-1x'></i>
        <input
          className='search-input'
          type='text'
          placeholder='Search for Playlists'
        />
      </div>
    </div>
  );
};

export default SearchBar;
