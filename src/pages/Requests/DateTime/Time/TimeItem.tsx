import React from "react";
import { StyledDateTimeCard } from "../DateTimeLayout";
import { Typography } from "@mui/material";
import { flexStyles } from "../../../../globalStyles/styles";
import { TimeType } from "../DateTimeTypes";

interface TimeItemProps {
  time: TimeType;
}

export const TimeItem: React.FC<TimeItemProps> = ({ time }) => {
  return (
    <StyledDateTimeCard
      className={`${flexStyles.flexCenter} flex-1 cursor-pointer  hover:text-textLight`}
    >
      <Typography
        variant="body1"
        component="span"
        fontWeight={600}
        fontSize={20}
        align="center"
        className="h-full w-full p-3 text-center text-textDark hover:text-textLight"
      >
        {time.hour}:{time.minute}
      </Typography>
    </StyledDateTimeCard>
  );
};
