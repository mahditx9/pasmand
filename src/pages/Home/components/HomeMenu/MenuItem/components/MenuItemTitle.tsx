import { Box, Typography } from "@mui/material";
import { MenuIItemTitleProps } from "../../HomeMenuTypes";
import React from "react";

export const MenuItemTitle: React.FC<MenuIItemTitleProps> = ({
  icon: Icon,
  index = 1,
  title,
}) => {
  return (
    <Box
      className={` flex flex-1 flex-col  items-center   justify-center space-y-3 bg-bgDark p-2  text-textLight hover:bg-bgDarkest xs:flex-[60%] sm:flex-[40%] ${
        (index + 1) % 2 === 0 ? "rounded-l-xl" : "rounded-r-xl"
      } `}
    >
      {Icon && <Icon style={{ width: 50, height: 50 }} />}
      {title && (
        <Typography
          variant="h5"
          component="p"
          className="text-center text-textLight"
        >
          {title}
        </Typography>
      )}
    </Box>
  );
};
