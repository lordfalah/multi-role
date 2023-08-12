import { createSlice } from "@reduxjs/toolkit";
import { createProduct, getProduct, getProductById } from "./ProductApi";

const initialState = {
  product: null,
  isSuccess: false,
  isLoading: false,
  isError: false,
  error: null,
};

const productSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getProduct.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.product = payload;
      state.error = null;
      state.isSuccess = true;
      state.isError = false;
    });
    builder.addCase(getProduct.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      state.product = null;
      state.isError = true;
    });

    // get product by id
    builder.addCase(getProductById.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getProductById.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.product = payload;
      state.error = null;
      state.isSuccess = true;
      state.isError = false;
    });
    builder.addCase(getProductById.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      state.product = null;
      state.isError = true;
    });

    // created product
    builder.addCase(createProduct.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(createProduct.fulfilled, (state) => {
      state.isLoading = false;
      state.error = null;
      state.isSuccess = true;
      state.isError = false;
    });
    builder.addCase(createProduct.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      state.product = null;
      state.isError = true;
    });
  },
});

export const { reset } = productSlice.actions;
export default productSlice.reducer;
