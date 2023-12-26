import { Box, Button } from "@mui/material";
import React from "react";
import { flexStyles } from "../../../globalStyles/styles";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const StepsActionButton = styled(Button)({
  fontSize: 20,
  fontWeight: "bold",
  borderRadius: 16,
});

interface StepActionsProp {
  activeStep: number;
  lastStep?: number;
  nextRoute: string;
  onNextClick?: () => any;
  disabled?: boolean;
}

export const StepActions: React.FC<StepActionsProp> = ({
  activeStep,
  lastStep = 6,
  nextRoute,
  onNextClick,
  disabled,
}) => {
  const navigate = useNavigate();
  const handleNextClick = () => {
    onNextClick && onNextClick();
    navigate(nextRoute);
  };
  return (
    <Box className={`${flexStyles.flexBetween} my-5 w-full gap-5 `}>
      <StepsActionButton
        // onClick={() => navigate("/request/categories")}
        className="w-full px-4 py-2 sm:w-[30%]"
        onClick={handleNextClick}
        variant="contained"
        color="success"
        disabled={disabled}
      >
        {activeStep === lastStep ? "ثبت" : "ادامه"}
      </StepsActionButton>
      {activeStep > 1 && (
        <StepsActionButton
          className="w-full px-4 py-2 sm:w-[30%]"
          onClick={
            () => navigate(-1)
            // () => console.log("its work")
          }
          variant="contained"
          color="error"
        >
          قبلی
        </StepsActionButton>
      )}
    </Box>
  );
};
