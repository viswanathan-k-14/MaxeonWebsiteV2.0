import React, { useRef } from 'react';
import './Modal.css';
const Modal = (props) => {
  const ref = useRef();
  const handleExit = (e) => {
    if (ref.current === e.currentTarget) {
      props.toggle();
    }
  };
  if (props.open) {
    return (
      <>
        <div onClick={handleExit} ref={ref} className='modal-container'>
          {props.children}
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default Modal;
