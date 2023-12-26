import {
  Box,
  Button,
  Input,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useReducer, useState } from "react";
import { flexStyles } from "../../../globalStyles/styles";
import { Add, Remove } from "@mui/icons-material";
import { RecycleType } from "./DeterminationTypes";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { updateRecycle } from "../../../redux/features/request";
const StyledActionButton = styled(Button)({
  borderRadius: "50%",
  width: 12,
  height: 62,
  padding: 6,
  borderColor: "#D9D9D9",
});
const StyledTextField = styled(TextField)({
  ".MuiOutlinedInput-root": {
    borderRadius: 200,
    border: "none",
    outline: "none",
    "&:hover": {
      background: "#D3FFE8",
      border: "none",
      outline: "none",
    },
    ".MuiOutlinedInput-input": {
      border: "none",
      outline: "none",
      padding: "6px 6px",
    },
    ".MuiOutlinedInput-notchedOutline": {
      border: "1px solid #D9D9D9",
      outline: "none",

      "&:hover": {
        borderColor: "#0FA958",
      },
    },
  },
});

interface DeterminationItemProps {
  key: number;
  determination: RecycleType;
}

// interface InitialState {
//   weightQuery: string;
// }
// const initialState = {
//   weightQuery: "",
// };

// interface Action {
//   type: string;
//   action?: any;
// }

// const reducer = (state, action:Action) => {
//   switch (action.type) {
//     case 'increase':

//       break;
//     case 'decrease':

//       break;

//     default:
//       break;
//   }
// };

export const DeterminationItem: React.FC<DeterminationItemProps> = ({
  determination,
}) => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const { id, title, weight, unitPrice, totalPrice } = determination;
  const { recyclesList } = useSelector((state: any) => state.request);
  const dispatch = useDispatch();
  const [weightQuery, setWeightQuery] = useState(1.0);
  const foundRecycleItem = recyclesList.find(
    (item: RecycleType) => item.id === id,
  );
  useEffect(() => {
    if (!foundRecycleItem) return;
    dispatch(
      updateRecycle({
        ...determination,
        totalPrice: +(weightQuery * unitPrice).toFixed(2),
      }),
    );
  }, [weightQuery]);

  return (
    <Paper
      className={`${flexStyles.flexBetween} w-full flex-wrap gap-y-3 rounded-2xl border-[1px] border-borderLight px-8 py-4`}
    >
      <Typography variant="h4" component="span" className="text-9xl">
        {title}
      </Typography>

      {/* DETERMINATION ACTION CONTROLLER */}
      <Box className={`${flexStyles.flexCenter}  gap-1`}>
        <button
          onClick={() => setWeightQuery((prev: number) => prev + 1)}
          className="h-[40px] w-[40px] rounded-full  border-[1px] border-borderLight hover:border-bgDark hover:bg-bgLightest  "
        >
          <Add />
        </button>
        <StyledTextField
          inputProps={{
            step: 0.1,
          }}
          type="number"
          id=""
          label=""
          value={weightQuery}
          onChange={(e) => setWeightQuery(+e.target.value)}
          defaultValue="1.00"
        />
        <button
          onClick={() => setWeightQuery((prev: number) => prev - 1)}
          className="h-[40px] w-[40px] rounded-full border-[1px] border-borderLight hover:border-bgDark hover:bg-bgLightest "
        >
          <Remove />
        </button>
      </Box>
      {/* DETERMINATION ACTION CONTROLLER */}

      <Typography variant="h6" component="span">
        {weight}کیلوگرم
      </Typography>
      <Typography variant="h6" component="span">
        {unitPrice}
      </Typography>
      {totalPrice && (
        <Typography variant="h6" component="span">
          {totalPrice}
        </Typography>
      )}
      <Button
        variant="contained"
        style={{ fontSize: 24, fontWeight: 600, width: "15%", height: 40 }}
        color="error"
      >
        حذف
      </Button>
    </Paper>
  );
};
