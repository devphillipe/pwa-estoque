import React from 'react';

const FilterByDate = ({ value, onChange }) => {
  return (
    <input
      type="date"
      value={value}
      onChange={onChange}
      placeholder="Filtrar por data de vencimento"
    />
  );
};

export default FilterByDate;
