import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
            <label className="form-check-label" htmlFor="switchCheckDefault">Enable Dark Mode</label>
          </div>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            {['red', 'green', 'blue', 'orange'].map((c) => (
              <div
                key={c}
                onClick={() => props.changeColor(c)}
                style={{
                  backgroundColor: c,
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  border: props.color === c ? '3px solid black' : '1px solid gray',
                }}
                title={`Set ${c} as dark mode background`}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

//fuction_name.propType = {
//                             props_name : PropTypes.varible_type,
//                             props_name : PropTypes.varible_type
// //                          }

Navbar.propTypes = { title :PropTypes.string.isRequired,
                    about : PropTypes.string }

Navbar.defaultProps = {
  title : 'TextUtils2',
  about : 'About Us2'
}                    

