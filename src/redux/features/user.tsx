import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: [],
    loading: false,
  },
  reducers: {
    getDataPanel: (state, action) => {
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
