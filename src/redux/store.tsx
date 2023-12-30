import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import userReducer from "./features/user";
import requestReducer from "./features/request";

// import logger from "redux-logger";
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["_persist"],
};

const rootReducer = combineReducers({
  user: userReducer,
  request: requestReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development
});

export type RootState = ReturnType<typeof rootReducer>;
// export default store;
