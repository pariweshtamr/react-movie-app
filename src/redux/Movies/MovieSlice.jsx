import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import movieApi from '../../common/api/MovieApi'
import { APIKey } from '../../common/api/MovieApiKey'

export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async () => {
    const movieText = 'Spider'

    try {
      const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${movieText}&type=movie`,
      )
      return response.data
    } catch (error) {
      console.log(error)
    }
  },
)

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

    addShows: (state, { payload }) => {
      state.shows = payload
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log('Pending')
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log('fetched Successfully')
      return { ...state, movies: payload }
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log('Rejected')
    },
  },
})

const { reducer, actions } = movieSlice

export const { addMovies } = actions

export const getAllMovies = (state) => state.movies.movies

export default reducer
