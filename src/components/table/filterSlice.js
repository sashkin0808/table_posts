import { createSlice} from '@reduxjs/toolkit';
import { api } from '../../services/api/api';

const initialState = {
  field: '',
  search: ''
};

export const slice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.field = action.payload;
    },
    setSearchValue: (state, action) => {
      state.search = action.payload;
    }
  },
});
export default slice.reducer;

export const {
  setFilter,
  setSearchValue
} = slice.actions;