import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <div className="container nav__container">
            <Link to="/" className='nav__logo'>VotingAPP</Link>
            <menu>
                <NavLink to="/elections">Elections</NavLink>
                <NavLink to="/results">Results</NavLink>
                <NavLink to="/logout">Logout</NavLink>
            </menu>
            <button className="theme__toggle-btn"></button>

        </div>

    </nav>
  )
}

export default Navbar