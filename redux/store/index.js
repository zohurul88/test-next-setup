import { configureStore } from "@reduxjs/toolkit";
import reducers from "../root-reducers/index";
import { createWrapper } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";

const env = process.env.NODE_ENV === "development";

export const store = () => {
  let store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(
        thunkMiddleware
      ),
    devTools: env,
  });
  return store;
};

export const wrapper = createWrapper(store, { debug: env });
