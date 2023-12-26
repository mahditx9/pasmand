import { Box, Typography } from "@mui/material";
import { flexStyles } from "../../globalStyles/styles";
import { ActiveRequestAddress } from "./ActiveRequestAddress";
import { ActiveStatus } from "./ActiveStatus";
import { StyledCard } from "../StyledCard";
import React from "react";

interface ActiveRequestProps {
  address: string;
  totalPrice: number;
  date: string;
  time: string;
  uniqCode: string;
  requestStatus: string;
  children: any;
}

export const ActiveRequest: React.FC<ActiveRequestProps> = ({
  address,
  totalPrice,
  date,
  time,
  uniqCode,
  requestStatus = "unsubmitted",
  children,
}) => {
  return (
    <StyledCard className="space-y-6 overflow-hidden rounded-md  px-6 py-4">
      <Box
        className={`${flexStyles.flexBetween} flex-col-reverse gap-5 sm:flex-row-reverse`}
      >
        {address && <ActiveRequestAddress address={address} />}
        <ActiveStatus requestStatus={requestStatus} />
      </Box>
      {/* price Row*/}
      {totalPrice && (
        <Box
          className={`${flexStyles.flexStart} justify-between gap-12  sm:justify-start`}
        >
          <Typography
            className="text-textDark"
            variant="body1"
            fontWeight={500}
            fontSize={20}
            component="p"
          >
            : قیمت کل
          </Typography>
          <Typography
            className="text-textDark"
            variant="body1"
            fontWeight={500}
            fontSize={20}
            component="span"
          >
            تومان {totalPrice}
          </Typography>
        </Box>
      )}
      {/* price Row*/}
      {/* Date and Time Row*/}
      <Box
        className={`${flexStyles.flexStart} flex-col items-stretch gap-5 sm:flex-row  sm:items-start`}
      >
        <Box className={"flex flex-row-reverse items-center justify-between"}>
          <Typography
            className="text-textDark"
            variant="body1"
            fontWeight={500}
            fontSize={20}
            component="p"
          >
            : تاریخ
          </Typography>
          <Typography
            className="text-textDark"
            variant="body1"
            fontWeight={500}
            fontSize={20}
            component="p"
          >
            {date}
          </Typography>
        </Box>
        <Box className={"flex flex-row-reverse items-center justify-between"}>
          <Typography
            className="text-textDark"
            variant="body1"
            fontWeight={500}
            fontSize={20}
            component="span"
          >
            : زمان
          </Typography>
          <Typography
            className="text-textDark"
            variant="body1"
            fontWeight={500}
            fontSize={20}
            component="p"
          >
            {time}
          </Typography>
        </Box>
      </Box>
      {/* Date and Time Row*/}
      {/* Action Buttons */}
      <Box className={`${flexStyles.flexBetween}  gap-12`}>{children}</Box>
      {/* Action Buttons */}
    </StyledCard>
  );
};
