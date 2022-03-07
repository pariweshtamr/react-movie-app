import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import MovieList from '../MovieList/MovieList'
import movieApi from '../../common/api/MovieApi'
import { APIKey } from '../../common/api/MovieApiKey'
import { addMovies } from '../../redux/Movies/MovieSlice'

const Home = () => {
  const dispatch = useDispatch()
  const movieText = 'Spider'

  useEffect(() => {
    try {
      const fetchMovies = async () => {
        const response = await movieApi.get(
          `?apiKey=${APIKey}&s=${movieText}&type=movie`,
        )
        dispatch(addMovies(response.data))
      }
      fetchMovies()
    } catch (error) {
      console.log(error)
    }
  }, [dispatch])

  return (
    <div>
      <div className="banner-img"></div>
      <MovieList />
    </div>
  )
}

export default Home
