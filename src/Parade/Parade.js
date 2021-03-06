import './Parade.css';
import React from 'react';
import Animal from './Animal';

export default function Parade({ parade, handleParade }) {
  return (
    <div className="parade-container">
      <div className="animals" title="parade">
        {parade.map((animal, i) => (
          <Animal key={animal + i} animal={animal} />
        ))}
      </div>
      <div className="buttons-container">
        <button className="buttons" onClick={() => handleParade('lion')}>
          Add Lion
        </button>
        <button className="buttons" onClick={() => handleParade('tiger')}>
          Add Tiger
        </button>
        <button
          title="bear-button"
          id="bear-button"
          className="buttons"
          onClick={() => handleParade('bear')}
        >
          Add Bear
        </button>
      </div>
    </div>
  );
}
