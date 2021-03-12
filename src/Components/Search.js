import React, { useState, useEffect } from 'react'

function Search({handleSearch}) {
  const [input, setInput] = useState('');
  const onChange = e => {
    e.preventDefault();
    setInput(e.target.value);
  };

  useEffect(() => {
    handleSearch(input);
  }, [input]);
  
  return (
    <input data-testid="filterInput" className="large" placeholder="Enter Country Name" onChange={e => onChange(e)}/>
  );
}

export default Search;
