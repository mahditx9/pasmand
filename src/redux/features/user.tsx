import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserType {
  firstName: string;
  lastName: string;
  password: string;
  mobile: number;
  createdAt: string;
}

interface InitialState {
  userData: UserType[] | any;
  loading: boolean;
}

const initialState: InitialState = {
  userData: [],
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getDataPanel: (state, action: PayloadAction<UserType>) => {
      return { userData: action.payload, loading: true };
    },

    LoginDataPanel: (state, action) => {
      return { userData: action.payload, loading: true };
    },

    LogoutPanel: (state) => {
      state.userData = [];
      state.loading = false;
    },
  },
});

export const { LoginDataPanel } = userSlice.actions;
export const { LogoutPanel } = userSlice.actions;
export const { getDataPanel } = userSlice.actions;

export default userSlice.reducer;
