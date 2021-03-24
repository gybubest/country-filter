import React, {useContext} from 'react';
import CountriesContext from '../countriesContext';

function Count() {
  const countries = useContext(CountriesContext);
  return (
    <section>
      <p>Search result: {countries.length}</p>
    </section>
  );
}

export default Count;
