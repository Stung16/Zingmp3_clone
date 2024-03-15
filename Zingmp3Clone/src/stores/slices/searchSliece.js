import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
};
export const searchSliece = createSlice({
  name: "searchData",
  initialState,
  reducers: {
    getDataSearch: (state, action) => {
      state.data.push(action.payload);
    },
  },
});
