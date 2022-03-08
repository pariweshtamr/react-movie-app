import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import movieApi from '../../common/api/MovieApi'
import { APIKey } from '../../common/api/MovieApiKey'

export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async (term) => {
    try {
      const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${term}&type=movie`,
      )
      return response.data
    } catch (error) {
      console.log(error)
    }
  },
)

export const fetchAsyncShows = createAsyncThunk(
  'shows/fetchAsyncShows',
  async (term) => {
    try {
      const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${term}&type=series`,
      )
      return response.data
    } catch (error) {
      console.log(error)
    }
  },
)

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  'selectedMovieOrShow/fetchAsyncMovieOrShowDetail',
  async (id) => {
    try {
      const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
      return response.data
    } catch (error) {
      console.log(error)
    }
  },
)

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
}

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShow = {}
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

    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log('fetched Successfully')
      return { ...state, shows: payload }
    },

    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      console.log('fetched Successfully')
      return { ...state, selectedMovieOrShow: payload }
    },
  },
})

const { reducer, actions } = movieSlice

export const { removeSelectedMovieOrShow } = actions

export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getSelectedMovieOrShow = (state) =>
  state.movies.selectedMovieOrShow

export default reducer
