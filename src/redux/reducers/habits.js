import { createSlice } from '@reduxjs/toolkit';

const habitSlicer = createSlice({
  name: 'habits',
  initialState: {
    habits: [],
    habitStatus: [],
  },
  reducers: {},
});

export const {} = habitSlicer.actions;
export default habitSlicer.reducer;
