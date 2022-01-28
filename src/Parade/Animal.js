import React from 'react';

export default function Animal({ animal }) {
  return <span className='animal-span'>
    {animal === 'lion' && '🦁'}
    {animal === 'tiger' && '🐯'}
    {animal === 'bear' && '🐻'}
  </span>;
}
