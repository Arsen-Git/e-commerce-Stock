import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "all",
  title: "",
  size: "All",
};

export const filterSlice = createSlice({
  name: "activeFilter",
  initialState,
  reducers: {
    changeActiveFilter: (state, action) => {
      state.type = action.payload;
    },
    changeFilterTitle: (state, action) => {
      state.title = action.payload;
    },
    changeFilterSize: (state, action) => {
      state.size = action.payload;
    },
  },
});

export const { changeActiveFilter, changeFilterTitle, changeFilterSize } =
  filterSlice.actions;

export default filterSlice.reducer;
