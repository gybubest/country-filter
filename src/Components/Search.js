import React from 'react'

function Search({handleSearch}) {
  const onChange = e => {
    e.preventDefault();
    handleSearch(e.target.value);
  };

  return (
    <input data-testid="filterInput" className="large" placeholder="Enter Country Name" onChange={e => onChange(e)}/>
  );
}

export default Search;
