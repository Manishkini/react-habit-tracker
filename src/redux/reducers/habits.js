import { createSlice } from '@reduxjs/toolkit';

// const habitStatus = {
// id,
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
    addHabitStatus: (state, { payload }) => {
      const foundHabitStatusIndex = state.habitStatus.findIndex(
        (obj) => obj.id === payload.id
      );
      if (foundHabitStatusIndex === -1) {
        state.habitStatus.push(payload);
      } else {
        state.habitStatus[foundHabitStatusIndex].status = payload.status;
      }
      // state.habitStatus = [...state.habitStatus, payload];
    },
  },
});

export const { addHabit, addHabitStatus } = habitSlicer.actions;
export default habitSlicer.reducer;
