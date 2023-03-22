import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    popularMovies: [],
    trendingMovies: []
    }

const moviesSlice = createSlice({
    name: "movies",
    initialState: initialState,
    reducers: {
        setPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        setTrendingMovies: (state, action) => {
            state.trendingMovies = action.payload
        }
    }
})

export const { setPopularMovies, setTrendingMovies } = moviesSlice.actions;

export const selectPopularMovies = (state) => state.movies.popularMovies.popularMovies;
export const selectTrendingMovies = (state) => state.movies.trendingMovies.trendingMovies;

export default moviesSlice.reducer;