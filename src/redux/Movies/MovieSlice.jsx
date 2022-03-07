import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movies: {},
}

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload
    },
  },
})

const { reducer, actions } = movieSlice

export const { addMovies } = actions

export const getAllMovies = (state) => state.movies.movies

export default reducer
