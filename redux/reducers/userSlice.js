import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import postCreateUser from "../../actions/users/postCreateUser";

const initialState = {
  isLoading: false,
  items: [],
  rowPerPage: 10,
  nextPage: true,
  currentPage: 0,
  hasError: false,
  filter: {
    name: null,
    email: null,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleLoading(state, action) {
      state.isLoading = !state.isLoading;
    },
    stopLoading(state, action) {
      state.isLoading = false;
    },
    pushOnItem(state, action) {
      const { id, firstName, lastName, email, password } = action.payload;
      state.items.push({
        id,
        firstName,
        lastName,
        email,
        password,
      });
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log("HYDRATE", state, action);
    },
  },
});
export const { toggleLoading, stopLoading, pushOnItem } = userSlice.actions;

export const postCreateUserThunk = (data) => async (dispatch, getState) => {
  dispatch(toggleLoading());
  const resp = await postCreateUser(data);
  dispatch(toggleLoading());
  dispatch(pushOnItem(resp));
};

export default userSlice.reducer;
