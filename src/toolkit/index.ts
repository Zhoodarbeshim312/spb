import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";

const rootReducer = combineReducers({
  productReducer: productSlice,
});
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type rootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
