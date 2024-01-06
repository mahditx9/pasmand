import { Search } from "@mui/icons-material";
import { IconButton, InputBase, Paper } from "@mui/material";
import React from "react";

interface SearchInputProps {
  placeHolder: string;
  searchValue: string;
  setSearchValue: (arg: string) => void;
  handleClick: () => void;
  _calssName?: string;
  _zIndex?: number;
  _sx?: {};
  _defaultValue?: string;
  _inputProps?: any;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  placeHolder,
  searchValue,
  setSearchValue,
  handleClick,
  _calssName,
  _zIndex,
  _sx,
  _defaultValue,
  _inputProps,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim().length > 2) {
      handleClick();
    }
  };
  return (
    <Paper
      dir="rtl"
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: "2px 0px",
        display: "flex",
        zIndex: { _zIndex },
        alignItems: "center",
        maxWidth: "100%",
        ..._sx,
      }}
    >
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          p: "2px 6px",
          color: "#4F4F4F",
          maxWidth: "100%",
        }}
        placeholder={placeHolder}
        inputProps={{ ..._inputProps }}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <IconButton
        type="button"
        sx={{
          color: "white",
          p: "10px",
          backgroundColor: "darkgreen",
          borderBottomLeftRadius: 0,
          borderTopLeftRadius: 0,
          "&:hover": {
            backgroundColor: "green",
          },
        }}
        aria-label="search"
        onClick={handleClick}
      >
        <Search
          sx={{
            fontSize: 30,
            p: 0,
          }}
        />
      </IconButton>
    </Paper>
  );
};
