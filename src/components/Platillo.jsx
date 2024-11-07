import { Box, Typography } from "@mui/material";
import React from "react";

const Platillo = ({ nombre, precio, XD, XF }) => (
  <Box sx={{ marginBottom: 2 }}>
    <Typography variant="h6" component="h3" sx={{ fontWeight: "bold" }}>
      {nombre} <span style={{ color: "red" }}>${precio}</span>
    </Typography>
    <Typography variant="body1">
      <strong>XD:</strong> {XD}
    </Typography>
    {XF && (
      <Typography variant="body1">
        <strong>XF:</strong> {XF}
      </Typography>
    )}
  </Box>
);

export default Platillo;
