import { createSlice } from "@reduxjs/toolkit";

const tokenKey = "ll_token";

const initialState = {
  token: localStorage.getItem(tokenKey) || null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials(state, action) {
      const { token, user } = action.payload;
      if (token) {
        state.token = token;
        localStorage.setItem(tokenKey, token);
      }
      if (user) state.user = user;
    },
    clearCredentials(state) {
      state.token = null;
      state.user = null;
      localStorage.removeItem(tokenKey);
    },
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;
export default authSlice.reducer;
