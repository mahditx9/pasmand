import { Box, IconButton, Typography } from "@mui/material";
import { PreservedAddress } from "./components/PreservedAddress";
import { StepActions } from "../components/StepActions";
import { useDispatch } from "react-redux";
import { addAddress } from "../../../redux/features/request";
import { MapComponent } from "../../../components/Map/MapComponent";
import React, { useState } from "react";
import { Search } from "@mui/icons-material";
import { StyledCard } from "../../../components/StyledCard";
import { SearchModal } from "./components/SearchModal";
import { Selectors } from "../../../redux";
import { StyledButton } from "../../../components/StyledButton";
import { flexStyles } from "../../../globalStyles/styles";

interface AddressObj {
  id: number;
  title: string;
  address: string;
}

const FAKE_ADDRESS: AddressObj[] = [
  {
    id: 1,
    title: "خانه",
    address: "مازندران - تنکابن - انقلاب - اندیشه",
  },
  {
    id: 2,
    title: "شرکت",
    address: "مازندران - تنکابن - سرسبز - زیباشهر",
  },
  {
    id: 3,
    title: "خانه2",
    address: "مازندران - تنکابن - سردشت - حامون",
  },
  {
    id: 4,
    title: "خانه",
    address: "مازندران - تنکابن - سازندگان - اندیشه غربی",
  },
];

export const ChooseLocation: React.FC = () => {
  // const [selected, setSelected] = React.useState(0);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { address: selectedAddress } = Selectors.useMapSelector();

  // let selectedAddress: string | undefined = "طرشت";
  // selectedAddress = FAKE_ADDRESS.find((item) => item.id === selected)?.address;

  return (
    <Box>
      <Box className="relative">
        <MapComponent />
        <IconButton
          onClick={() => setOpen(true)}
          sx={{
            backgroundColor: "#0FA958",
            position: "absolute",
            zIndex: 1000,
            top: 3,
            right: 3,
            color: "white",
            "&:hover": {
              backgroundColor: "#D3FFE8",
              color: "#4F4F4F",
              border: "1px solid #0FA958",
            },
          }}
        >
          <Search sx={{ width: 30, height: 30 }} />
        </IconButton>
      </Box>
      <SearchModal open={open} setOpen={setOpen} />
      {selectedAddress && (
        <Box
          className=" my-5 flex flex-col  justify-center gap-5 rounded-lg p-5 shadow-sm shadow-primary "
          dir="rtl"
        >
          <Typography
            variant="h4"
            component="h4"
            fontSize={27}
            fontWeight={600}
            className="text-textDark"
          >
            آدرس انتخابی شما
          </Typography>
          <StyledCard
            className="p-5"
            sx={{ backgroundColor: "lightgreen !important" }}
          >
            <Box
              className={`flex flex-col items-center gap-5 sm:flex-row sm:justify-between`}
            >
              <Typography
                variant="body1"
                component="span"
                fontSize={20}
                fontWeight={500}
                className="text-textDark"
              >
                {selectedAddress}
              </Typography>
              <StyledButton
                label="تغییر ادرس"
                type="warning"
                onClickHandler={() => setOpen(true)}
                sx={{ height: "auto", padding: "2px 1rem" }}
              />
            </Box>
          </StyledCard>
        </Box>
      )}
      {/* address list */}
      <Box className="my-5 space-y-7">
        {FAKE_ADDRESS.map((address) => (
          <PreservedAddress key={address.id} addressItem={address} />
        ))}
      </Box>
      <StepActions
        activeStep={1}
        disabled={!selectedAddress?.length}
        onNextClick={() => {
          selectedAddress !== undefined &&
            dispatch(addAddress(selectedAddress));
        }}
        nextRoute="/request/categories"
      />
      {/* address list */}
    </Box>
  );
};
