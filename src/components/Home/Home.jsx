import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import MovieList from '../MovieList/MovieList'

import { fetchAsyncMovies } from '../../redux/Movies/MovieSlice'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAsyncMovies())
  }, [dispatch])

  return (
    <div>
      <div className="banner-img"></div>
      <MovieList />
    </div>
  )
}

export default Home
