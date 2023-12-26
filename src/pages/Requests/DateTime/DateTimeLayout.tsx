import { Box, Card, Typography } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import { StyledCard } from "../../../components/StyledCard";

interface DateTimeLayoutProps {
  title: string;
  children: any;
}
export const StyledDateTimeCard = styled(Card)({
  border: "1px solid",
  borderColor: "#D9D9D9",
  borderRadius: 16,

  "&:hover": {
    background: "#0FA958",
    color: "#ffffff",
  },
});

export const DateTimeLayout: React.FC<DateTimeLayoutProps> = ({
  title,
  children,
}) => {
  return (
    <Box>
      <StyledCard className=" space-y-9 p-6">
        <Typography
          variant="h3"
          className="text-textDark"
          fontSize={26}
          fontWeight={600}
          align="right"
        >
          {title}
        </Typography>
        {children}
      </StyledCard>
    </Box>
  );
};
