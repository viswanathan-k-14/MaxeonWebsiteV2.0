import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/Modal';
import Signup from '../signup/Signup';
import './NavBar.css';
const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [size, setSize] = useState('');
  useEffect(() => {
    if (window.innerWidth <= 960) {
      setSize('small');
    } else {
      setSize('large');
    }
  }, []);
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isModalOpen === true) {
      document.querySelector('body').style.overflow = 'hidden';
    } else {
      document.querySelector('body').style.overflow = 'scroll';
    }
  }, [isModalOpen]);

  const handleResize = () => {
    if (window.innerWidth >= 960) {
      setToggle(false);
      document.querySelector('nav').className = 'navbar-lg';
    } else {
      document.querySelector('nav').className = 'navbar';
    }
  };

  const handleToggle = (e) => {
    setToggle(!toggle);
  };

  return (
    <nav className={size === 'large' ? 'navbar-lg' : 'navbar'}>
      <div className='container'>
        <div className='logo-wrapper'>
          <h1>Maxeon</h1>
        </div>
        <div className='nav-link-wrapper'>
          <ul
            className={`flex-row ${toggle ? 'nav-menu-active' : 'nav-menu'} `}
          >
            <li>
              <Link className='nav-link' to='/'>
                Products
              </Link>
            </li>
            <li>
              {' '}
              <Link className='nav-link' to='/'>
                Features
              </Link>
            </li>
            <li>
              {' '}
              <Link className='nav-link' to='/'>
                Use Cases
              </Link>
            </li>
            <li>
              {' '}
              <Link className='nav-link' to='/'>
                Pricing
              </Link>
            </li>
            <li>
              <Link
                className='btn signup'
                onClick={() => {
                  // let modal = document.querySelector('.modal-close');
                  // modal.className = 'modal-container';
                  setIsModalOpen(true);
                }}
                to='/'
              >
                SignUp
              </Link>
            </li>
          </ul>
          <Link className='mobile-menu-btn' onClick={handleToggle} to='/'>
            {!toggle ? (
              <i className='fa fa-bars fa-2x'></i>
            ) : (
              <i className='fa fa-times fa-3x'></i>
            )}
          </Link>
        </div>
      </div>
      <Modal open={isModalOpen} toggle={() => setIsModalOpen(false)}>
        <Signup></Signup>
      </Modal>
    </nav>
  );
};

export default NavBar;
