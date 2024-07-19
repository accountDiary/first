// src/redux/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../Api/api";

export const login = createAsyncThunk(
  "auth/login",
  async (userCredentials, { rejectWithValue }) => {
    try {
      console.log("Attempting login with credentials:", userCredentials); // 콘솔에 전달된 데이터 출력
      const response = await api.post("/user/login", userCredentials);
      console.log("데이터 응답", response.data);
      return response.data;
    } catch (error) {
      console.error("Login 안됨:", error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true; 
    },
  },

});

export const {  logout } = authSlice.actions;
export default authSlice.reducer;
