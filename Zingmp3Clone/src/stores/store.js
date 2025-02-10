import { configureStore } from "@reduxjs/toolkit";
import { songSlices } from "./slices/songSlices";
import { searchSliece } from "./slices/searchSliece";
import { chartSlice } from "./slices/chartSlice";

export const store = configureStore({
  reducer: {
    songValues: songSlices.reducer,
    searchData: searchSliece.reducer,
    chartData: chartSlice.reducer,
  },
});
