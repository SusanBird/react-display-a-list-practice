import React from 'react';

export default function ChildItem({ name, age, sports }) {
  return (
    <div className='child-item'>
      <h2>{name}</h2>
      <h3>{age} years old</h3>
      <ul className='sports'>
          Favorite sports:
        {sports.map(sport => <li key={sport}>{sport}</li>)}
      </ul>
    </div>
  );
}

