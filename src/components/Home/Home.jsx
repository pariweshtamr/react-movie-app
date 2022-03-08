import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import MovieList from '../MovieList/MovieList'

import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from '../../redux/Movies/MovieSlice'

const Home = () => {
  const dispatch = useDispatch()

  const movieText = 'Spider'
  const showText = 'Friends'
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText))
    dispatch(fetchAsyncShows(showText))
  }, [dispatch])

  return (
    <div>
      <div className="banner-img"></div>
      <MovieList />
    </div>
  )
}

export default Home
