import styled from "@emotion/styled";
import { MenuItem, TextField } from "@mui/material";
import React from "react";
import { OptionType } from "./selectOptionsTypes";

const StyledTextField = styled(TextField)({
  ".MuiSelect-select": {
    padding: "5px 8px",
  },
  ".MuiOutlinedInput-root:": {
    "&:focus": {
      outlineColor: "GrayText",
    },
  },
});

interface SelectOptionsProps {
  list: OptionType[];
  defaultValue?: string | any;
  helperText?: string | any;
  label: string | any;
  className: string;
}

export const SelectOptions: React.FC<SelectOptionsProps> = ({
  list,
  defaultValue,
  helperText,
  label,
  className,
}) => {
  return (
    <StyledTextField
      className={`${className}`}
      id="outlined-select-currency"
      select
      label={label}
      defaultValue={defaultValue}
      helperText={helperText}
    >
      {list.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </StyledTextField>
  );
};
