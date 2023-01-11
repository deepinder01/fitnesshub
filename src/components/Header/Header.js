import React from 'react'
import logo from '../../images/logo.png'
function Header() {
  return (
    <header id='top'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand text-uppercase font-weight-bolder text-warning" href="#">
            <img src={logo} alt="Logo" width="30" height="26" class="d-inline-block align-text-top" />
            &nbsp;&nbsp;FitnessHub
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='#about'>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='#team'>Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='#price'>Price</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='#contact'>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header