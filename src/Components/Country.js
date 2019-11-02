import React from 'react';
import uuidv1 from 'uuid';
import css from './Country.module.css';
const Country = ({ item }) => {
  return (
    <>
      <p>Сapital:{item.capital}</p>
      <img src={item.flag} className={css} alt="coutry flag" />
      <p>Population:{item.population}</p>
      <p>Languages:</p>
      <ul>
        {item.languages.map(el => (
          <li key={uuidv1()}>{el.name}</li>
        ))}
      </ul>
      <p></p>
    </>
  );
};
export default Country;
