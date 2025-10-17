import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  role: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.userId = action.payload.userId;
      state.role = action.payload.role;
    },
    clearUser(state) {
      state.userId = null;
      state.role = null;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
