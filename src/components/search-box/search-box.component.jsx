import React from 'react';
import './search-box.styles.css';

// We are de structuring the props into two object here, placeholder and handleChange
export const SearchBox = ( {placeholder, handleChange} ) => {
    return (
        <input
            className='search'
            type='search'
            placeholder={placeholder}
            onChange={handleChange}
        />
    )
};
