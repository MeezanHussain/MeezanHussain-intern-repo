import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;

// Selector functions
export const selectCounter = (state) => state.counter.value;
export const selectCounterStatus = (state) => {
  const value = state.counter.value;
  if (value === 0) return 'zero';
  if (value > 0 && value <= 5) return 'low';
  if (value > 5 && value <= 10) return 'medium';
  if (value > 10) return 'high';
  return 'negative';
};
export const selectCounterMessage = (state) => {
  const value = state.counter.value;
  if (value === 0) return 'Start counting!';
  if (value > 0 && value <= 5) return 'Just getting started';
  if (value > 5 && value <= 10) return 'Making progress';
  if (value > 10) return 'Great job!';
  return 'Going backwards';
};

export default counterSlice.reducer;
