import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
} from '../../redux/Movies/MovieSlice'
import { FaThumbsUp } from 'react-icons/fa'
import { BsFillCalendarCheckFill, BsFilm, BsStarFill } from 'react-icons/bs'
import './MovieDetail.scss'

const MovieDetail = () => {
  const dispatch = useDispatch()
  const { imdbID } = useParams()
  const data = useSelector(getSelectedMovieOrShow)
  console.log(data)

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID))
    return () => {
      dispatch(removeSelectedMovieOrShow())
    }
  }, [dispatch, imdbID])

  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{data.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <BsStarFill className="star-icon" /> :{' '}
                {data.imdbRating}
              </span>
              <span>
                IMDB Votes <FaThumbsUp className="thumb-icon" /> :{' '}
                {data.imdbVotes}
              </span>
              <span>
                Runtime <BsFilm className="film-icon" /> : {data.Runtime}
              </span>
              <span>
                Released <BsFillCalendarCheckFill className="calendar-icon" /> :{' '}
                {data.Released}
              </span>
            </div>

            <div className="movie-plot">{data.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Actors</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Genre</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>

          <div className="section-right">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
    </div>
  )
}

export default MovieDetail
