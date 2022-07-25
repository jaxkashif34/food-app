import { configureStore } from "@reduxjs/toolkit";
import Slice from "./features";
export const store = configureStore({
  reducer: {
    slice: Slice,
  },
});
