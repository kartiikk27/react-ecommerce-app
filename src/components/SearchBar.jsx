import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={handleChange}
      style={{ margin: '10px', padding: '8px', width: '200px' }}
    />
  );
};

export default SearchBar;
