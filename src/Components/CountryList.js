import React from 'react';

function CountryList({countries}) {
  console.log(countries)
  const countryList = countries.map(country => <li key={country.toLowerCase()} className="pa-10 pl-20">{country}</li>);

  return (
    <section>
      <ul className="card country-list" data-testid="countryList">
        {countryList}
      </ul>
    </section>
  );
}

export default CountryList;
