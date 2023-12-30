import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RecycleType } from "../../pages/Requests/Determination/DeterminationTypes";
import {
  DateType,
  TimeType,
} from "../../pages/Requests/DateTime/DateTimeTypes";

interface InitialState {
  address: string | undefined;
  recyclesList: RecycleType[];
  requestType: string;
  date: DateType | null;
  time: TimeType | null;
}

const initialState: InitialState = {
  address: "",
  recyclesList: [],
  requestType: "",
  date: null,
  time: null,
};
  
const requestSlice = createSlice({
  name: "request",
  initialState,
  reducers: {
    addAddress: (state, action: PayloadAction<string>): void => {
      state.address = action.payload;
    },
    addRecycle: (state, action: PayloadAction<RecycleType>): void => {
      state.recyclesList.push(action.payload);
    },
    updateRecycle: (state, action: PayloadAction<RecycleType>): void => {
      state.recyclesList = state.recyclesList.map((item) =>
        item.id === action.payload.id ? { ...action.payload } : item,
      );
    },
    removeRecycle: (state, action: PayloadAction<number>): void => {
      state.recyclesList = state.recyclesList.filter(
        (item) => item.id !== action.payload,
      );
    },
    setType: (state, action: PayloadAction<string>): void => {
      state.requestType = action.payload;
    },
    setDate: (state, action: PayloadAction<DateType>): void => {
      state.date = action.payload;
    },
    setTime: (state, action: PayloadAction<TimeType>): void => {
      state.time = action.payload;
    },
  },
});

export const {
  addRecycle,
  addAddress,
  removeRecycle,
  updateRecycle,
  setType,
  setDate,
  setTime,
} = requestSlice.actions;

export default requestSlice.reducer;
