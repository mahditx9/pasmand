import { Box, Typography } from "@mui/material";
import React from "react";

interface MenuItemDescriptionsProps {
  index: number;
  description: string;
}

export const MenuItemDescriptions: React.FC<MenuItemDescriptionsProps> = ({
  index,
  description,
}) => {
  return (
    <Box
      className={` ${
        (index + 1) % 2 === 0 ? "rounded-r-full " : "rounded-l-full "
      }  hidden flex-grow items-center justify-center   overflow-hidden bg-bgSeccondary p-6 hover:bg-bgLightest sm:flex `}
    >
      {description && (
        <Typography
          variant="body1"
          component="p"
          className=" text-right text-textDark"
        >
          {description}
        </Typography>
      )}
    </Box>
  );
};
