import React from "react";
import { StyledDateTimeCard } from "../DateTimeLayout";
import { Typography } from "@mui/material";
import { flexStyles } from "../../../../globalStyles/styles";
import { TimeType } from "../DateTimeTypes";
import { useDispatch } from "react-redux";

import { setTime } from "../../../../redux/features/request";
import { Selectors } from "../../../../redux";

interface TimeItemProps {
  time: TimeType;
}

export const TimeItem: React.FC<TimeItemProps> = ({ time }) => {
  const { time: selectedTime } = Selectors.useRequestSelector();
  const dispatch = useDispatch();
  return (
    <StyledDateTimeCard
      sx={{ backgroundColor: selectedTime?.id === time.id ? "green" : "white" }}
      className={`${flexStyles.flexCenter} flex-1 cursor-pointer  hover:text-textLight`}
      onClick={() => dispatch(setTime(time))}
    >
      <Typography
        variant="body1"
        component="span"
        fontWeight={600}
        fontSize={20}
        align="center"
        className={`h-full w-full p-3 text-center text-textDark hover:text-textLight ${
          selectedTime?.id === time.id ? "text-textLight" : "text-textDark"
        } `}
      >
        {time.hour}:{time.minute}
      </Typography>
    </StyledDateTimeCard>
  );
};
