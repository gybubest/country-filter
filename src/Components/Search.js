import React, { useState } from 'react'

function Search({handleSearch}) {
  const [input, setInput] = useState('');

  return (
    <input data-testid="filterInput" className="large" placeholder="Enter Country Name" onChange={e => handleSearch(e.target.value)}/>
  );
}

export default Search;
