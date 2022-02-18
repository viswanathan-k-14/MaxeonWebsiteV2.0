import React from 'react';
import './Signup.css';
const Signup = (props) => {
  return (
    <div className='overlay'>
      <div className='form-wrapper'>
        <h2 className='form-header'>Sign Up</h2>
        <form className='signup-form'>
          <div className='form-group'>
            <label htmlFor=''>Full Name:</label>
            <input
              type='text'
              className='form-cntrl'
              placeholder='
          First and Last Name'
            />
          </div>
          <div className='form-group'>
            <label htmlFor=''>Email Address:</label>
            <input
              type='text'
              className='form-cntrl'
              placeholder='harry@surveysparrow.com'
            />
          </div>
          <div className='form-group'>
            <label htmlFor=''>Password:</label>
            <input type='text' className='form-cntrl' placeholder='Password' />
          </div>
          <div className='form-group'>
            <label htmlFor=''>Confirm Password:</label>
            <input
              type='text'
              className='form-cntrl'
              placeholder='Re-enter password'
            />
          </div>
          <button className='form-submit'>SignUp</button>
          <p>
            By signing up you agree to our terms of service and privacy policy
          </p>
        </form>
        {props.children}
      </div>
    </div>
  );
};

export default Signup;
