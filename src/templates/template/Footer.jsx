import React from 'react';
import '../styles/footer.css';
const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className='container footer'>
        <div className='footer-content'>
          <p>
            Copyright &copy; maxeon Inc. 2018-19 |{' '}
            <a href='?#'>Privacy Policy</a> | <a href='?#'>Terms of Service</a>{' '}
            | <a href='?#'>Sitemap</a>
          </p>
        </div>
        <div className='footer-logo'>Maxeon</div>
      </div>
    </div>
  );
};

export default Footer;
