import React from 'react';

const FilterByDate = ({ value, onChange }) => {
  return (
    <div className="filter-by-date">
      <input
        type="date"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FilterByDate;
