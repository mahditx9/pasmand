import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RecycleType } from "../../pages/Requests/Determination/DeterminationTypes";

interface InitialState {
  address: string | undefined;
  recyclesList: RecycleType[];
  requestType: string;
  date: string;
  time: string;
}

const initialState: InitialState = {
  address: "",
  recyclesList: [],
  requestType: "",
  date: "",
  time: "",
};

const requestSlice = createSlice({
  name: "request",
  initialState,
  reducers: {
    addAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    addRecycle: (state, action: PayloadAction<RecycleType>) => {
      state.recyclesList.push(action.payload);
    },
    updateRecycle: (state, action: PayloadAction<RecycleType>) => {
      state.recyclesList = state.recyclesList.map((item) =>
        item.id === action.payload.id ? { ...action.payload } : item,
      );
    },
    removeRecycle: (state, action: PayloadAction<number>) => {
      state.recyclesList = state.recyclesList.filter(
        (item) => item.id !== action.payload,
      );
    },
  },
});

export const { addRecycle, addAddress, removeRecycle, updateRecycle } =
  requestSlice.actions;

export default requestSlice.reducer;
