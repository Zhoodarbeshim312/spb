import { createSlice } from "@reduxjs/toolkit";

interface IInitial {
  product: any[];
}

const initialState = {
  product: [],
};
export const productSlice = createSlice({
  name: "PRODUCT",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});
export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
