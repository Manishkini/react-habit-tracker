import { createSlice } from '@reduxjs/toolkit';

const userSlicer = createSlice({
  name: 'users',
  initialState: {
    user: {
      email: '',
    },
  },
  reducers: {
    signIn: (state, action) => {
      state.user.email = action.payload;
    },
    signOut: (state, action) => {
      state.user.email = '';
    },
  },
});

export const { signIn, signOut } = userSlicer.actions;
export default userSlicer.reducer;
