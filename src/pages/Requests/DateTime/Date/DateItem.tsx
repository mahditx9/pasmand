import React from "react";
import { StyledDateTimeCard } from "../DateTimeLayout";
import { Typography } from "@mui/material";
import { flexStyles } from "../../../../globalStyles/styles";
import { DateType } from "../DateTimeTypes";

interface DateItemProps {
  date: DateType;
}

export const DateItem: React.FC<DateItemProps> = ({ date }) => {
  return (
    <StyledDateTimeCard
      className={`${flexStyles.flexCenter} flex-1 cursor-pointer  hover:text-textLight`}
    >
      <Typography
        variant="body1"
        component="span"
        fontWeight={600}
        fontSize={20}
        className="h-full w-full p-3 text-center text-textDark hover:text-textLight"
        dir="rtl"
      >
        {date.day}&nbsp;
        {date.month}
      </Typography>
    </StyledDateTimeCard>
  );
};
