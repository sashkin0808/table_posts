import { createSlice} from '@reduxjs/toolkit';

const initialState = {
  perPage: 10,
  currentPage: 1
};

export const slice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    }
  },
});
export default slice.reducer;

export const {
  setCurrentPage
} = slice.actions;