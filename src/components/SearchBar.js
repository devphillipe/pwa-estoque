import React from 'react';

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Pesquisar produto..."
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchBar;
