import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/Modal';
import Signup from '../signup/Signup';
import './NavBar.css';
const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    }
  };
  window.addEventListener('resize', handleResize);

  const handleToggle = (e) => {
    setToggle(!toggle);
  };

  const closeModal = (e) => {
    setIsModalOpen(false);
  };

  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='logo-wrapper'>
          <h1>Maxeon</h1>
        </div>
        <div className='nav-link-wrapper'>
          <ul
            className={`flex-row ${toggle ? 'nav-menu-active' : 'nav-menu'} `}
          >
            <li>
              <Link to='/'>Products</Link>
            </li>
            <li>
              {' '}
              <Link to='/'>Features</Link>
            </li>
            <li>
              {' '}
              <Link to='/'>Use Cases</Link>
            </li>
            <li>
              {' '}
              <Link to='/'>Pricing</Link>
            </li>
            <li>
              <Link
                className='btn signup'
                onClick={() => setIsModalOpen(true)}
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
        <Signup>
          <button className='close' onClick={closeModal}>
            <i className='fa fa-times fa-3x'></i>
          </button>
        </Signup>
      </Modal>
    </nav>
  );
};

export default NavBar;
