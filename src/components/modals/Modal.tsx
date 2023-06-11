'use-client';
import React from 'react';

// import './modal.module.css';

const Modal = ({ children, isOpen, closeModal }) => {
  const stopCloseModal = (e) => e.stopPropagation();
  return (
    <article className={`modal ${!isOpen && 'is-open'}`} onClick={closeModal}>
      <div className='modal-container' onClick={stopCloseModal}>
        <button className='modal-close' onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
