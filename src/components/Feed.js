import { Box } from "@mui/material";
import React from "react";
import AssetList from "./AssetList";

function Feed() {
  return (
    <Box bgcolor="whitesmoke" flex={5} p={2}>
      <AssetList />
    </Box>
  );
}
export default Feed;
