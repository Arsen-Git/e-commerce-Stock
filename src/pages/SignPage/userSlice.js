import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: null,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { setUserProfile } = userSlice.actions;

export default userSlice.reducer;
