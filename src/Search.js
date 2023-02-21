import React, { useState } from 'react';

function AssetSearch(props) {
  const [searchItem, setSearchItem] = useState('');

  function handleSearch(event) {
    event.preventDefault();
    props.onSearch(searchItem);
  }

  return (
    <form onSubmit={handleSearch}>
      <input type="text" value={searchItem} onChange={(event) => setSearchItem(event.target.value)} placeholder="Search by name or serial number" />
      <button type="submit">Search</button>
    </form>
  );
}

export default AssetSearch;