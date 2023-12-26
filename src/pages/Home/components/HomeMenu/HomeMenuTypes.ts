import { SvgIconProps } from "@mui/material";

export interface MenuItemTypes {
  id: number;
  title: string;
  description: string;
  route: string;
  icon: (props: SvgIconProps) => JSX.Element;
}

// DEFINE PROPS OF MENU ITEM
export interface MenuItemProps {
  key?: number;
  index: number;
  menuItem: MenuItemTypes;
}
// DEFINE PROPS OF MENU ITEM

export interface MenuIItemTitleProps {
  title: string;
  index?: number;
  icon: (props: SvgIconProps) => JSX.Element;
}
