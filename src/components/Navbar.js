import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Navbar({ title = "set title here", aboutText = "About", mode = "light", toggleMode, mode2 = "light", toggleMode2}) {
  return (
        <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode} || navbar navbar-expand-lg navbar-${mode2} bg-${mode2}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{aboutText}</Link>
              </li>
            </ul>

            {/* Button 2: */}
            <div className={`form-check form-switch text-${mode === 'dark' || mode2 !== 'light' ? 'light' : 'dark'} mx-3`} >
            <input className="form-check-input" type="checkbox" onClick={toggleMode2} role="switch" id="switchCheckDefault2"/>
            <label className="form-check-label" htmlFor="switchCheckDefault2">Enable {mode2 === 'light' ? 'Blue' : 'Light'} Mode</label>
            </div>

            {/* Button 1: */}
            <div className={`form-check form-switch text-${mode === 'dark' || mode2 !== 'light' ? 'light' : 'dark'}`}>
            <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
            <label className="form-check-label" htmlFor="switchCheckDefault">Enable {mode === 'light' ? 'Dark' : 'Light'} Mode</label>
            </div>

          </div>
        </div>
      </nav>
  )
}
Navbar.propTypes = {
    title :PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,
    // mode: PropTypes.string,
    // toggleMode: PropTypes.func
};