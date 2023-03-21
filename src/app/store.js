import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import moviesReducer from '../features/movies/moviesSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer
  },
});
