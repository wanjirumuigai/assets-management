import React from 'react';

function AssetDelete(props) {
  const handleDelete = () => {
    props.onDelete(props.assetId);
  };