import React from "react";
import { StyledDateTimeCard } from "../DateTimeLayout";
import { Typography } from "@mui/material";
import { flexStyles } from "../../../../globalStyles/styles";
import { DateType } from "../DateTimeTypes";
import { useDispatch } from "react-redux";
import { setDate } from "../../../../redux/features/request";
import { Selectors } from "../../../../redux";

interface DateItemProps {
  date: DateType;
}

export const DateItem: React.FC<DateItemProps> = ({ date }) => {
  const dispatch = useDispatch();
  const { date: selectedDate } = Selectors.useRequestSelector();

  return (
    <StyledDateTimeCard
      sx={{ backgroundColor: selectedDate?.id === date.id ? "green" : "white" }}
      onClick={() => dispatch(setDate(date))}
      className={`${flexStyles.flexCenter} flex-1 cursor-pointer hover:text-textLight`}
    >
      <Typography
        variant="body1"
        component="span"
        fontWeight={600}
        fontSize={20}
        className={`h-full w-full p-3 text-center text-textDark hover:text-textLight ${
          selectedDate?.id === date.id ? "text-textLight" : "text-textDark"
        } `}
        dir="rtl"
      >
        {date.day}&nbsp;
        {date.month}
      </Typography>
    </StyledDateTimeCard>
  );
};
