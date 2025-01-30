import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">PasteApp</NavLink>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex justify-content-around w-25 ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/paste">Paste</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
