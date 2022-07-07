import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
const initialState = {
  isMenuOpen: false,
};

export const utilsSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    toggleMenu(state, action) {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log("HYDRATE", state, action);
    },
  },
});

export const { toggleMenu } = utilsSlice.actions;

export default utilsSlice.reducer;
