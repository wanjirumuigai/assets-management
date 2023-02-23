import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

function AssetDisplay({assets}) {

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "assetName", headerName: "Asset Name", width: 200 },
    { field: "assetTag", headerName: "Asset Tag", width: 200 },
    { field: "serialNumber", headerName: "Serial Number", width: 200 },
    { field: "purchaseCost", headerName: "Purchase Cost", width: 200 },
    { field: "category", headerName: "Category", width: 200 },
    { field: "model", headerName: "Model", width: 200 },
    { field: "acquisition_date", headerName: "Acquisition Date", width: 200 },
    { field: "location", headerName: "Location", width: 200 },
    { field: "status", headerName: "Status", width: 200 },
    { field: "assigned", headerName: "Assigned", width: 200 },
  ];

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={assets}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </Box>
  );
}

export default AssetDisplay;

