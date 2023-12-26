import { AppBar, Container, Toolbar } from "@mui/material";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import BodyContent from "./BodyContent";
import React from "react";
import { ToastContainer } from "react-toastify";

const AppLayout = () => {
  return (
    <>
      <NavBar />
      <Container maxWidth="lg" className="flex gap-4 py-3">
        <BodyContent />
        {/* <SideBar /> */}
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={true}
          className="fixed bottom-4  right-4 bg-bgSeccondary p-3 "
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        ></ToastContainer>
      </Container>
    </>
  );
};

export default AppLayout;
