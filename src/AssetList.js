import React, { useState, useEffect } from "react";

import DataTable from "./DataTable";

import Search from "./Search";

function AssetsList() {
  const [assets, setAssets] = useState([]);

  const url = "http://localhost:4000/assets";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAssets(data);
      });
  }, []);

  return (
    <div>
      <h1>List of Assets</h1>
      <Search assets={assets} />
      <DataTable assets={assets} setAssets={setAssets} />
    </div>
  );
}

export default AssetsList;
