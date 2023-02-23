import React from 'react';

function AssetDelete(props) {
  const handleDelete = () => {
    fetch(`http://localhost:4000/assets/${props.assetId}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          console.log('Asset deleted successfully');
          props.onDelete(props.assetId); // Remove the deleted asset from the list
        } else {
          throw new Error('Failed to delete asset');
        }
      })
      .catch(error => {
        console.log(error.message); // Handle error
      });
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
}

export default AssetDelete;