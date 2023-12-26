import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const BodyContent: React.FC = () => {
  return (
    <Box className="flex-1">
      <Outlet />
    </Box>
  );
};

export default BodyContent;
