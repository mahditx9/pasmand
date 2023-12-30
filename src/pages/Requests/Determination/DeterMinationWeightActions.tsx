import { Box, IconButton, TextField } from "@mui/material";
import React from "react";
import { flexStyles } from "../../../globalStyles/styles";
import { Add, Remove } from "@mui/icons-material";
import styled from "@emotion/styled";

const StyledTextField = styled(TextField)({
  ".MuiOutlinedInput-root": {
    height: "33px",
    borderRadius: 200,
    border: "none",
    outline: "none",
    "&:hover": {
      //   background: "#D3FFE8",
      border: "none",
      outline: "none",
    },
    ".MuiOutlinedInput-input": {
      textAlign: "left",

      border: "none",
      outline: "none",
      padding: "6px 12px",
    },
    ".MuiOutlinedInput-notchedOutline": {
      border: "1px solid #D9D9D9",
      outline: "none",

      "&:hover": {
        borderColor: "#0FA958",
      },
    },
  },
});

interface DeterMinationWeightActionsProps {
  weight: number;
  weightQuery: number;
  setWeightQuery: (arg?: any) => void;
}

export const DeterMinationWeightActions: React.FC<
  DeterMinationWeightActionsProps
> = ({ weight, weightQuery, setWeightQuery }) => {
  return (
    <Box className={`${flexStyles.flexCenter} flex-row gap-2  `}>
      <IconButton
        sx={{
          backgroundColor: "white",
          color: "red",
          border: "1px solid #D9D9D9",
          height: "33px",
          width: "33px",
        }}
        onClick={() => setWeightQuery((prev: number) => prev + 1)}
      >
        <Add sx={{ fontSize: 18 }} />
      </IconButton>
      <StyledTextField
        inputProps={{
          step: 0.1,
        }}
        type="number"
        id=""
        label=""
        className="w-20"
        value={weightQuery}
        onChange={(e) => setWeightQuery(+e.target.value)}
        defaultValue={weight}
      />
      <IconButton
        sx={{
          backgroundColor: "white",
          color: "green",
          border: "1px solid #D9D9D9",
          height: "33px",
          width: "33px",
        }}
        onClick={() => setWeightQuery((prev: number) => prev - 1)}
      >
        <Remove sx={{ fontSize: 18 }} />
      </IconButton>
    </Box>
  );
};
