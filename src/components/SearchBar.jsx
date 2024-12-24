import React from 'react';

const SearchBar = ({ value, onSearch }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search by location"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    );
};

export default SearchBar;