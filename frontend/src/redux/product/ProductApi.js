import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/api";

const getProduct = createAsyncThunk(
  "product/getProduct",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`product`);
      return response.data;
    } catch (error) {
      if (!error.response) {
        // Tidak ada respons dari server
        return rejectWithValue("No response from server.");
      }

      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return rejectWithValue(message);
    }
  }
);

const getProductById = createAsyncThunk(
  "product/getProductById",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.get(`product/${payload}`);
      return [response.data];
    } catch (error) {
      if (!error.response) {
        // Tidak ada respons dari server
        return rejectWithValue("No response from server.");
      }

      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return rejectWithValue(message);
    }
  }
);

const createProduct = createAsyncThunk(
  "product/createProduct",
  async (payload, { rejectWithValue }) => {
    try {
      return await api.post(`product`, payload, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      if (!error.response) {
        // Tidak ada respons dari server
        return rejectWithValue("No response from server.");
      }

      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return rejectWithValue(message);
    }
  }
);

export { getProduct, createProduct, getProductById };
