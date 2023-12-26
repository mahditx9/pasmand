import React from "react";
import { DateType } from "../DateTimeTypes";
import { Box } from "@mui/material";
import { flexStyles } from "../../../../globalStyles/styles";
import { DateItem } from "./DateItem";

const dateList: DateType[] = [
  {
    id: 1,
    day: 1,
    month: "دی",
  },
  {
    id: 2,
    day: 2,
    month: "دی",
  },
  {
    id: 3,
    day: 3,
    month: "دی",
  },
  {
    id: 4,
    day: 4,
    month: "دی",
  },
  {
    id: 5,
    day: 5,
    month: "دی",
  },
  {
    id: 6,
    day: 6,
    month: "دی",
  },
];

export const DateCard: React.FC = () => {
  return (
    <>
      <Box className={`${flexStyles.flexCenter}  justify-evenly gap-5 flex-wrap`}>
        {dateList.map((date) => (
          <DateItem date={date} key={date.id} />
        ))}
      </Box>
    </>
  );
};
