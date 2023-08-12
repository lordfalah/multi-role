// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../redux/auth/AuthSlice";
import ProductSlice from "../redux/product/ProductSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    product: ProductSlice,
  },
});

export default store;
