import React from 'react';

export default function VehicleItem({ type, wheels, manufactured }) {
  return (
    <div className='vehicle-item'>
      <h2>{type}</h2>
      <h3>{wheels} wheels</h3>
      <p>Manufactured in {manufactured.map(manufacture => <p key={manufacture}>{manufacture.country}</p>)}</p>
    </div>
  );
}

//vehicle.manufactured.map(manufactured => <li key{}) ln36