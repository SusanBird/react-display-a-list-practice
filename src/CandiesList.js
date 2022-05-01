import React from 'react';
import CandyItem from './CandyItem';

export default function CandiesList({ candies }) {
  return (
    <div>
      {
        candies.map(candy => 
          <CandyItem key={candy} />
        )}
    </div>
  );
}

