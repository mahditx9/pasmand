import { Box } from "@mui/material";
import { PreservedAddress } from "./components/PreservedAddress";
import { StepActions } from "../components/StepActions";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAddress } from "../../../redux/features/request";

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
  const [selected, setSelected] = useState(0);
  const dispatch = useDispatch();
  let selectedAddress: string | undefined = "طرشت";
  selectedAddress = FAKE_ADDRESS.find((item) => item.id === selected)?.address;
  return (
    <Box>
      <Box>map</Box>
      {/* address list */}
      <Box className="my-5 space-y-7">
        {FAKE_ADDRESS.map((address) => (
          <PreservedAddress
            setSelected={setSelected}
            selected={selected}
            key={address.id}
            addressItem={address}
          />
        ))}
      </Box>
      <StepActions
        activeStep={1}
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
