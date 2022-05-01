import React from 'react';
import ChildItem from './ChildItem';

export default function ChildList({ kids }) {
  return (
    <div>
      {
        kids.map((child) =>
          <ChildItem
            key={child.name}
            name={child.name}
            age={child.age}
            sports={child.sports}
          />
        )
      }
    </div>
  );
}

