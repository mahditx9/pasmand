import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export const RequestLayout: React.FC = () => {
  return (
    <Box>
      <Outlet />
    </Box>
  );
};
