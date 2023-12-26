import { Box, Container, TextField } from "@mui/material";
import { Banner } from "../components/Banner";
import { StyledButton } from "../components/StyledButton";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <Container
      maxWidth="md"
      sx={{ display: "flex", alignItems: "center", gap: "20px" }}
    >
      <Banner imgAlt="login-page-cover" imgSrc="recycle.jpg" sx={{ flex: 1 }} />
      <Box
        className="flex-2  flex flex-col items-center  justify-center  gap-5 self-stretch rounded-lg border-[1px] border-borderLight p-6 shadow-2xl "
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          id="outlined-required"
          label="نام کاربری"
          placeholder="نام خود را وارد کنید"
        />
        <TextField
          required
          id="outlined-password-input"
          label="رمز ورود"
          placeholder="رمز خود را وارد کنید"
          type="password"
          autoComplete="current-password"
        />
        <StyledButton label="ورود" type="success" className="w-full" />
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
