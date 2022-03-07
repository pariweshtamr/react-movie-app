import React, { useEffect } from 'react'
import MovieList from '../MovieList/MovieList'
import movieApi from '../../common/api/MovieApi'
import { APIKey } from '../../common/api/MovieApiKey'

const Home = () => {
  const movieText = 'Spider'

  useEffect(() => {
    try {
      const fetchMovies = async () => {
        const response = await movieApi.get(
          `?apiKey=${APIKey}&s=${movieText}&type=movie`,
        )
        console.log(response, 'response from api')
      }
      fetchMovies()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <div>
      <div className="banner-img"></div>
      <MovieList />
    </div>
  )
}

export default Home
