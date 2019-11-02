import React from 'react';

const Countries = ({ items }) => {
  return (
    <ul>
      {items.map(el => (
        <li key={el.population}>{el.name}</li>
      ))}
    </ul>
  );
};

export default Countries;
