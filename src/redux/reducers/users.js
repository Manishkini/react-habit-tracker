import { createSlice } from '@reduxjs/toolkit';

const userSlicer = createSlice({
  name: 'users',
  initialState: {
    user: {
      email: 'something',
    },
  },
  reducers: {},
});

export const {} = userSlicer.actions;
export default userSlicer.reducer;
