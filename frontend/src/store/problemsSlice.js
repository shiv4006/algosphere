import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  completedList: [],
  revisedList: [],
}

const problemSlice = createSlice({
  name: 'problms',
  initialState,
  reducers: {
    setCompletedList: (state, action) => {
      state.completedList = action.payload.map(p => p.problemId);
    },
    setRevisedList: (state, action) => {
      state.revisedList = action.payload;
    },
    resetProblemsData: (state) => {
      state.completedList = [];
      state.revisedList = [];
    },
  },
})

export const { setCompletedList, setRevisedList, resetProblemsData } = problemSlice.actions;

export default problemSlice.reducer;