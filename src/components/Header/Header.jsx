import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import './Header.scss'

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="user-icon">
        <FaUserCircle className="icon" />
      </div>
    </div>
  )
}

export default Header
