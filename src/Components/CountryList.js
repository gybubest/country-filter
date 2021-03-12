import React from 'react';

function CountryList() {
  return (
    <section>
      <ul className="card country-list" data-testid="countryList">
        <li key="india" className="pa-10 pl-20">India</li>
      </ul>
    </section>
  );
}

export default CountryList;
