import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import moviesReducer from '../features/movies/moviesSlice';
import movieDetailsReducer from '../features/movies/movieDetailsSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    movieDetails: movieDetailsReducer
  },
});
