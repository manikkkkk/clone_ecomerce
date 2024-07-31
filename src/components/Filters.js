import React from 'react';
import './Filter.css';

const Filters = ({ onFilterChange }) => {
  return (
    <div className="filters">
      <label>
        Category:
        <select onChange={e => onFilterChange('category', e.target.value)}>
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
        </select>
      </label>
      <label>
        Price Range:
        <select onChange={e => onFilterChange('price', e.target.value)}>
          <option value="">All</option>
          <option value="0-50">$0 - $50</option>
          <option value="51-100">$51 - $100</option>
        </select>
      </label>
    </div>
  );
};

export default Filters;
