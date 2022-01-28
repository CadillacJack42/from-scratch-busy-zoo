import './Parade.css';
import React from 'react';

export default function Parade({ parade, handleParade }) {
  console.log(parade);
  return (
    <div className='parade-container'>
      <div className='animals'>
        {parade.map((animal, i) => {
          return <span key={animal + i} className='animal-span'>{animal}</span>;
        })}
      </div>
      <div className='buttons-container'>
        <button className='buttons' onClick={() => handleParade('lion')}>Add Lion</button>
        <button className='buttons' onClick={() => handleParade('tiger')}>Add Tiger</button>
        <button className='buttons' onClick={() => handleParade('bear')}>Add Bear</button>
      </div>
      
    </div>
  );
}
