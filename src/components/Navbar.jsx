import React from 'react'
import { IoIosMoon, IoIosSunny } from 'react-icons/io'
import { HiOutlineBars3 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <div className="container nav__container">
            <Link to="/" className='nav__logo'>VotingAPP</Link>
            <div>
              <menu>
                  <NavLink to="/elections">Elections</NavLink>
                  <NavLink to="/results">Results</NavLink>
                  <NavLink to="/logout">Logout</NavLink>
              </menu>
              <button className="theme__toggle-btn"><IoIosMoon /></button>
              <button className="theme__toggle-btn"><HiOutlineBars3 /></button>
            </div>
        </div>

    </nav>
  )
}

export default Navbar