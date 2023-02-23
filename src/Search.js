import React, { useState } from 'react';

function AssetSearch(props) {
  const [searchTerm, setSearchTerm] = useState('');

  function handleSearch(event) {
    event.preventDefault();
    props.onSearch(searchTerm);
  }

  return (
    <form onSubmit={handleSearch}>
      <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search by name or serial number" />
      <button type="submit">Search</button>
    </form>
  );
}

export default AssetSearch;