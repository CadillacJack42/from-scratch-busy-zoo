import './Open.css';
import React from 'react';

export default function Open({ isOpen, handleOpenChange }) {
  return (
    <div className='open-container'>
      <div className='open-border'>
        <p className={`open-text ${isOpen ? ' on' : ' close' }`}>Open</p>
      </div>
      <button onClick={() => handleOpenChange()}>{isOpen ? 'Close Zoo' : 'Open Zoo'}</button>
    </div>
  );
}
