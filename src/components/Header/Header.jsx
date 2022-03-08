import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import { BiSearch } from 'react-icons/bi'
import './Header.scss'
import { useDispatch } from 'react-redux'
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from '../../redux/Movies/MovieSlice'

const Header = () => {
  const [term, setTerm] = useState('')
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()

    if (term === '') return alert('Please enter a serch term')

    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncShows(term))

    setTerm('')
  }
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Movie App</Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Seach Movies or Shows"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">
            <BiSearch />
          </button>
        </form>
      </div>

      <div className="user-icon">
        <FaUserCircle className="icon" />
      </div>
    </div>
  )
}

export default Header
