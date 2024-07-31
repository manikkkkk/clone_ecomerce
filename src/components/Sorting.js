import React from 'react';
import './Sorting.css';

const Sorting = ({ onSortChange }) => {
  return (
    <div className="sorting">
      <label>
        Sort by:
        <select onChange={e => onSortChange(e.target.value)}>
          <option value="popularity">Popularity</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
        </select>
      </label>
    </div>
  );
};

export default Sorting;
