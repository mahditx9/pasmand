import { Box, Container, TextField } from "@mui/material";
import React from "react";
import { Banner } from "../components/Banner";
import { StyledButton } from "../components/StyledButton";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <Container
      maxWidth="md"
      sx={{ display: "flex", alignItems: "center", gap: "20px" }}
    >
      <Box className="flex-1 self-stretch overflow-hidden rounded-lg bg-bgDark">
        <img
          src="/register.jpg"
          alt="register-page-cover"
          className="h-full w-full object-cover"
        />
      </Box>
      <Box
        className="flex flex-1 flex-col items-center justify-center  gap-5  rounded-lg border-[1px] border-borderLight p-6 shadow-2xl "
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Box className="flex items-center gap-5">
          <TextField
            dir="rtl"
            className="text-end"
            required
            id="outlined-required"
            label="نام خانوادگی"
            placeholder="نام خود را وارد کنید"
          />
          <TextField
            dir="rtl"
            className="text-end"
            required
            id="outlined-required"
            label="نام"
            placeholder="نام خود را وارد کنید"
          />
        </Box>
        <Box className="flex items-center gap-5">
          <TextField
            dir="rtl"
            className="text-end"
            required
            id="outlined-password-input"
            label="رمز ورود"
            placeholder="یک رمز انتخاب کنید"
            type="password"
          />
          <TextField
            dir="rtl"
            className="text-end"
            required
            id="outlined-required"
            label="نام کاربری"
            placeholder="یک نام کاربری انتخاب کنید"
          />
        </Box>
        <Box className="flex items-center gap-5">
          <TextField
            dir="rtl"
            className="text-end"
            id="outlined-password-input"
            label="ایمیل"
            placeholder="ایمیل الکترونیکی خود را وارد کنید"
            type="email"
          />
          <TextField
            dir="rtl"
            className="text-end"
            required
            id="outlined-password-input"
            label="شماره همراه"
            placeholder="شماره همراه خود را وارد کنید"
            type="tel"
          />
        </Box>
        <StyledButton label="ثبت نام" type="success" className="w-full" />
        <Box className={`flex w-full flex-col items-end gap-5`}>
          <Link className="font-semibold text-bgDark" to="#">
            فراموشی رمز؟
          </Link>
          <Link className="font-semibold text-bgDark" to="#">
            ورود از طریق شماره
          </Link>
        </Box>
      </Box>
    </Container>
  );
};
