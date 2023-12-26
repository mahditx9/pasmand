import React from "react";
import { Box } from "@mui/material";
import { flexStyles } from "../../../../globalStyles/styles";
import { TimeItem } from "./TimeItem";
import { TimeType } from "../DateTimeTypes";

const timeList: TimeType[] = [
  {
    id: 1,
    hour: "08",
    minute: "00",
  },
  {
    id: 2,
    hour: "08",
    minute: "00",
  },
  {
    id: 3,
    hour: "08",
    minute: "00",
  },
  {
    id: 4,
    hour: "08",
    minute: "00",
  },
  {
    id: 5,
    hour: "08",
    minute: "00",
  },
  {
    id: 6,
    hour: "08",
    minute: "00",
  },
];

export const TimeCard: React.FC = () => {
  return (
    <>
      <Box
        className={`${flexStyles.flexCenter} flex-wrap justify-evenly gap-5`}
      >
        {timeList.map((time) => (
          <TimeItem time={time} key={time.id} />
        ))}
      </Box>
    </>
  );
};
