import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/dataSlice";

const store = configureStore({
  reducer: {
    veri: dataReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
