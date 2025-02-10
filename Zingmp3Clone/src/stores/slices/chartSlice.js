import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  dataChart: {},
};
export const chartSlice = createSlice({
  name: "chartData",
  initialState,
  reducers: {
    updateDataChart: (state, action) => {
      state.dataChart = action.payload;
    },
  },
});
