import React from 'react';

const Search = ({ handleChange, query, handleSearch }) => (
  <>
    <div className="search-container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search by Article title"
          name="query"
          id="searchInput"
          defaultValue={query}
          onChange={handleChange}
        />
        <button type="submit"><i className="fa fa-search" /></button>
      </form>
    </div>
  </>
);


export default Search;
