import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { WatchLater, Mail, Notifications } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Fade,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
// import theme from "../theme";
import React from "react";
import { NavMenu } from "./Menu/MainMenu/NavMenu";
import MenuIcon from "@mui/icons-material/Menu";
const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "#fff",
});

const StyledSearch = styled("div")(({ theme }) => ({
  background: "#ffffff",
  width: "40%",
  // borderRadius: theme.shape.borderRadius,
}));

const Icons = styled("div")(({ theme }) => ({
  display: "none",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
  // [theme.breakpoints.up("sm")]: {
  //   display: "flex",
  // },
}));

const UserBox = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  // [theme.breakpoints?.up("sm")]: {
  //   display: "none",
  // },
}));

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const theme = useTheme();
  return (
    <AppBar
      position="sticky"
      className="min-w-full max-w-full overflow-hidden"
      sx={{ padding: ".5rem .8rem", background: "#0FA958" }}
    >
      <StyledToolBar>
        <MenuIcon
          className="inline-block cursor-pointer sm:hidden"
          style={{ fontSize: 25, height: 40, width: 40 }}
          onClick={() => setOpenMenu((prev) => !prev)}
        />

        <Typography variant="h3" sx={{ display: { xs: "none", sm: "block" } }}>
          logo
        </Typography>
        <WatchLater sx={{ display: { xs: "block", sm: "none" } }} />
        <NavMenu open={openMenu} setOpen={setOpenMenu} />

        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail sx={{ width: 30, height: 30 }} />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications sx={{ width: 30, height: 30 }} />
          </Badge>
          <Avatar
            onClick={() => setIsOpen(true)}
            sx={{ width: 50, height: 50 }}
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww"
          />
        </Icons>
        <UserBox>
          <Avatar
            onClick={() => setIsOpen(true)}
            sx={{ width: 50, height: 50 }}
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww"
          />
          <Typography variant="h4" className="whitespace-nowrap  ">
            کاربر وارد شده
          </Typography>
        </UserBox>
      </StyledToolBar>
    </AppBar>
  );
};

export default NavBar;
