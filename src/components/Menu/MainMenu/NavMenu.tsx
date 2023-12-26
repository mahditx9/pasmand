import { Menu, MenuItem, MenuList } from "@mui/material";
import { flexStyles } from "../../../globalStyles/styles";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

interface NavMenuProps {
  open: boolean;
  setOpen: (arg0: boolean) => void;
}

const CustomMenu = styled(Menu)({
  ".MuiPaper-elevation": {
    height: "100%",
    background: "#D3FFE8",
    top: "20 !important",
    left: "0 !important",
  },
});

export const NavMenu: React.FC<NavMenuProps> = ({ open, setOpen }) => {
  return (
    <>
      <MenuList className={`${flexStyles.flexCenter} hidden sm:flex`}>
        <NavLink to="/">
          <MenuItem>خانه</MenuItem>
        </NavLink>
        <NavLink to="/request">
          <MenuItem>ثبت درخواست</MenuItem>
        </NavLink>
        <NavLink to="/reports">
          <MenuItem>گزارش</MenuItem>
        </NavLink>
        <NavLink to="/learn">
          <MenuItem>آموزش</MenuItem>
        </NavLink>
        <NavLink to="/faq">
          <MenuItem>سوالات</MenuItem>
        </NavLink>
      </MenuList>
      <CustomMenu
        open={open}
        onClose={() => setOpen(false)}
        onClick={() => setOpen(false)}
        // className="bg-bgLightest"
        anchorOrigin={{ horizontal: "left", vertical: "center" }}
      >
        <NavLink to="/">
          <MenuItem>خانه</MenuItem>
        </NavLink>
        <NavLink to="/request">
          <MenuItem>ثبت درخواست</MenuItem>
        </NavLink>
        <NavLink to="/reports">
          <MenuItem>گزارش</MenuItem>
        </NavLink>
        <NavLink to="/learn">
          <MenuItem>آموزش</MenuItem>
        </NavLink>
        <NavLink to="/faq">
          <MenuItem>سوالات</MenuItem>
        </NavLink>
      </CustomMenu>
      {/* <div
        className={`${open ? "block" : "hidden"} relative inset-0 bg-primary`}
      >
        <div className="absolute left-0 top-0 z-10 h-full bg-bgLightest px-3 py-4">
          <NavLink to="/">
            <MenuItem>خانه</MenuItem>
          </NavLink>
          <NavLink to="/request">
            <MenuItem>ثبت درخواست</MenuItem>
          </NavLink>
          <NavLink to="/reports">
            <MenuItem>گزارش</MenuItem>
          </NavLink>
          <NavLink to="/learn">
            <MenuItem>آموزش</MenuItem>
          </NavLink>
          <NavLink to="/faq">
            <MenuItem>سوالات</MenuItem>
          </NavLink>
        </div>
      </div> */}
    </>
  );
};
