import React from 'react';
import VehicleItem from './VehicleItem';

export default function VehicleList({ vehicles }) {
  return (
    <div className='vehicle-list'>
      {vehicles.map((vehicle) => <VehicleItem key={vehicle.type} 
        {...vehicle} />)}
    </div>
  );
}

