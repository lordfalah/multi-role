import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/api";
const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (body, { rejectWithValue }) => {
    try {
      const response = await api.post(`login`, body);
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

const getUser = createAsyncThunk(
  "auth/getUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`me`);
      return response.data;
    } catch (error) {
      if (JSON.parse(localStorage.getItem("auth"))) {
        localStorage.removeItem("auth");
      }

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

const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.delete("logout");
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

export { loginUser, getUser, logout };
