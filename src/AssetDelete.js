import React from 'react';

function AssetDelete(props) {
  const handleDelete = () => {
    props.onDelete(props.assetId);
  };
  return (
    <button onClick={handleDelete}>Delete</button>
  );
}

export default AssetDelete;