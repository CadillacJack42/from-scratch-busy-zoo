import React from 'react';
import './Fight.css';

export default function Fight({
  unicornSize,
  lionSize,
  handleUnicornSizeIncrement,
  handleLionSizeIncrement,
  handleUnicornSizeDecrement,
  handleLionSizeDecrement 
}) {

  const unicornStyle = { 
    fontSize: `${unicornSize}rem`,
  };
  const lionStyle = { 
    fontSize: `${lionSize}rem`,
  };

  return (
    <div className='fight-div'>
      <div className='fighters'>
        <div className='fighter unicorn-style' style={unicornStyle}>{'🦄'}</div>
        <div className='fighter' style={lionStyle}>{'🦁'}</div>
      </div>
      
      <div className='buttons'>
        <button onClick={() => handleUnicornSizeIncrement()}>Unicorn Gain Power</button>
        <button onClick={() => handleLionSizeDecrement()}>Unicorn attack Lion</button>
        <button onClick={() => handleLionSizeIncrement()}>Lion Gain Power</button>
        <button onClick={() => handleUnicornSizeDecrement()}>Lion Attack Unicorn</button>
      </div>
    </div>
  );
  
}
