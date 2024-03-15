import { configureStore } from "@reduxjs/toolkit";
import { songSlices } from "./slices/songSlices";
import { searchSliece } from "./slices/searchSliece";

export const store = configureStore({
  reducer: {
    songValues: songSlices.reducer,
    searchData: searchSliece.reducer,
  },
});
