import { Stack, SvgIconProps } from "@mui/material";
import { MenuItem } from "./MenuItem/MenuItem";
import {
  FireTruck,
  BorderColor,
  School,
  QuestionAnswer,
} from "@mui/icons-material";
import React from "react";
import { MenuItemTypes } from "./HomeMenuTypes";

type Menu = MenuItemTypes[];

const menu: Menu = [
  {
    id: 1,
    title: "درخواست جدید",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    route: "/request",
    icon: (props: SvgIconProps) => React.createElement(FireTruck, props),
  },
  {
    id: 2,
    title: "گزارش ها",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    route: "/reports",
    icon: (props: SvgIconProps) => React.createElement(BorderColor, props),
  },
  {
    id: 3,
    title: "آموزش",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    route: "/learn",
    icon: (props: SvgIconProps) => React.createElement(School, props),
  },
  {
    id: 4,
    title: "سوالات",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    route: "/faq",
    icon: (props: SvgIconProps) => React.createElement(QuestionAnswer, props),
  },
];

export const HomeMenu: React.FC = () => {
  return (
    <Stack direction="column" gap={3} className="w-full xs:w-[80%] " mx="auto">
      {menu.map((item: MenuItemTypes, index: number) => (
        <MenuItem key={item.id} menuItem={item} index={index} />
      ))}
    </Stack>
  );
};
