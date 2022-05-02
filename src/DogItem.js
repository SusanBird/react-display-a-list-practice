import React from 'react';

export default function DogItem({ name, age, color }) {
  return (
    <div className='dog-item'>
      <h3>{name}</h3>
      <p>{age} years old</p>
      <p>{color}</p>
    </div>
  );
}

