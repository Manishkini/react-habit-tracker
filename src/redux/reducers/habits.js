import { createSlice } from '@reduxjs/toolkit';

// const habitStatus = {
//   habitID,
//   status,
//   date,
// };

const habitSlicer = createSlice({
  name: 'habits',
  initialState: {
    habits: [],
    habitStatus: [],
  },
  reducers: {
    addHabit: (state, { payload }) => {
      state.habits.push(payload);
    },
  },
});

export const { addHabit } = habitSlicer.actions;
export default habitSlicer.reducer;
