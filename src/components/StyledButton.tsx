import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";

interface StyledButtonProps {
  type: string;
  label: string;
  className?: string;
  onClickHandler?: () => any;
  sx?: any;
}

const CustomButton = styled(Button)({
  fontSize: 20,
  fontWeight: "bold",
  borderRadius: 16,
});

export const StyledButton: React.FC<StyledButtonProps> = ({
  type,
  label,
  className: Classes,
  onClickHandler,
  sx,
}) => {
  switch (type) {
    case "error":
      return (
        <CustomButton
          className={`${Classes}`}
          onClick={onClickHandler}
          color="error"
          sx={sx}
          variant="contained"
        >
          {label}
        </CustomButton>
      );
    case "success":
      return (
        <CustomButton
          className={`${Classes}`}
          onClick={onClickHandler}
          sx={sx}
          color="success"
          variant="contained"
        >
          {label}
        </CustomButton>
      );
    case "info":
      return (
        <CustomButton
          className={`${Classes}`}
          onClick={onClickHandler}
          sx={sx}
          color="info"
          variant="contained"
        >
          {label}
        </CustomButton>
      );
    case "warning":
      return (
        <CustomButton
          className={`${Classes}`}
          onClick={onClickHandler}
          sx={sx}
          color="warning"
          variant="contained"
        >
          {label}
        </CustomButton>
      );
    default:
      console.log("type dose`nt exist!");
      return null;
  }
};
