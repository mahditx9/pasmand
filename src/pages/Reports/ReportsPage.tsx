import { Box, Container, IconButton, InputBase, Paper } from "@mui/material";
import { Banner } from "../../components/Banner";
import { flexStyles } from "../../globalStyles/styles";
import { SelectOptions } from "../../components/SelectOptions/SelectOptions";
import { days, months, years } from "./reportsFilttersTypes";
import { ActiveRequest } from "../../components/ActiveRequests/ActiveRequest";
import { StyledButton } from "../../components/StyledButton";
import { PageTitle } from "../../components/PageTitle";
import { Search } from "@mui/icons-material";
import React, { useState } from "react";

const ShowDetailsButton = () => {
  return (
    <StyledButton
      type="success"
      label="مشاهده جزییات کامل"
      className="w-full sm:w-[60%]"
      sx={{ fontSize: 20, fontWeight: 500, mx: "auto" }}
    />
  );
};

export const ReportsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setSearchQuery(event.target.value);
  };

  const handleClick = () => {};

  return (
    <Box className="space-y-6">
      <Banner imgAlt="reports-page-cover" imgSrc="reports.jpg" />
      <Box className={`${flexStyles.flexEvenly} bg-bgLightest`}></Box>
      <Box className={`${flexStyles.flexEvenly} gap-5`}>
        <SelectOptions
          label="سال"
          helperText="فیلتر بر اساس سال"
          defaultValue="1402"
          list={years}
          className="flex-1"
        />
        <SelectOptions
          label="ماه"
          helperText="فیلتر بر اساس ماه"
          defaultValue="دی"
          list={months}
          className="flex-1"
        />
        <SelectOptions
          label="روز"
          helperText="فیلتر بر اساس روز"
          defaultValue="3"
          list={days}
          className="flex-1"
        />
      </Box>
      <Box className={`${flexStyles.flexCenter} flex-col gap-5`}>
        <PageTitle title="جستجو بر اساس کد رهگیری" fontSize={30} />
        <Paper
          dir="rtl"
          component="form"
          sx={{
            // p: "2px 0px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1, p: "2px 6px", color: "#4F4F4F" }}
            placeholder="کد رهگیری را وارد کنید"
            inputProps={{ "aria-label": "کد رهگیری را وارد کنید" }}
            value={searchQuery}
            onChange={handleChange}
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
      </Box>
      <PageTitle
        fontSize={26}
        classNames="border-b-[1px] border-t-[1px] rounded-sm border-borderLight"
        title="سوابق درخواست"
      />
      <Container
        maxWidth="xl"
        sx={{ display: "flex", gap: "20px", justifyContent: "space-evenly" }}
        className="flex flex-col flex-wrap sm:flex-row"
      >
        <ActiveRequest
          children={<ShowDetailsButton />}
          address="مازندران - تنکابن - اندیشه - انقلاب"
          date="1402/10/3"
          time="08:36"
          totalPrice={96000}
          uniqCode="#FG263S213"
          requestStatus="accepted"
        />
        <ActiveRequest
          children={<ShowDetailsButton />}
          address="مازندران - تنکابن - اندیشه - انقلاب"
          date="1402/10/3"
          time="08:36"
          totalPrice={96000}
          uniqCode="#FG263S213"
          requestStatus="canceled"
        />
        <ActiveRequest
          children={<ShowDetailsButton />}
          address="مازندران - تنکابن - اندیشه - انقلاب"
          date="1402/10/3"
          time="08:36"
          totalPrice={96000}
          uniqCode="#FG263S213"
          requestStatus="unsubmitted"
        />
      </Container>
    </Box>
  );
};
