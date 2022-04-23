import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface user {
  email: string;
  password: string;
}

const initialState: user = {
  email: null,
  password: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<user>) => {
      state = action.payload;
    },
    logoutSuccess: (state) => {
      state = null;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
