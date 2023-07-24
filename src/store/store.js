import { configureStore } from '@reduxjs/toolkit'
import { api } from '../services/api/api';
import filterReducer from '../components/table/filterSlice';
import pageReducer from '../components/pagination/pageSlice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    filter: filterReducer,
    page: pageReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      api.middleware
    ]
  )
});

