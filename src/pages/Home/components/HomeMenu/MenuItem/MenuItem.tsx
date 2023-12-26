import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { MenuItemProps } from "../HomeMenuTypes";
import { MenuItemTitle } from "./components/MenuItemTitle";
import { MenuItemDescriptions } from "./components/MenuItemDescriptions";

export const MenuItem: React.FC<MenuItemProps> = ({ menuItem, index }) => {
  const { title, description, route, icon: Icon } = menuItem;
  return (
    <Link to={route}>
      <Box
        className={`${
          (index + 1) % 2 === 0 ? "flex-row" : "flex-row-reverse"
        } flex items-stretch`}
      >
        <MenuItemTitle icon={Icon} index={index} title={title} />
        <MenuItemDescriptions index={index} description={description} />
      </Box>
    </Link>
  );
};
