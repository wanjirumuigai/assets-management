import React, { useState, useEffect } from "react";
import AssetDisplay from "./AssetDisplay";

import Search from "./Search";

function AssetsList() {
  const [assets, setAssets] = useState([]);
  const [searchItems, setSearchItems] = useState([]);

  const url = "http://localhost:4000/assets";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAssets(data);
        setSearchItems(data);
      });
  }, []);

  function handleSearch(e) {
    const searchMatch = assets.filter(
      (item) =>
        item.assetName.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.assetTag.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchItems(searchMatch);
  }

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <h1>List of Assets</h1>

      {/* <AssetDisplay assets={searchItems} setAssets={setAssets} /> */}
      <AssetDisplay assets={searchItems} setAssets={setAssets} />

      {/* <OneAsset assets={assets} /> */}
    </div>
  );
}

export default AssetsList;
