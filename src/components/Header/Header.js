import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../images/logo.png'
import { toast } from 'react-toastify';
import { GoSignOut } from 'react-icons/go'
import '../../styles/header.css'
function Header() {
  let navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem('Auth Token');
    sessionStorage.removeItem('Email');
    navigate('/');
    toast.success('Logged Out Successfully')
  }
  return (
    <header style={{ maxWidth: '100vw' }} id='top'>
      <nav style={{ maxWidth: '100vw' }} className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand text-uppercase font-weight-bolder text-warning" href="/home">
            <img src={logo} alt="Logo" width="30" height="26" className="d-inline-block align-text-top" />
            &nbsp;&nbsp;FitnessHub
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to='home' >Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='about'>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='trainers'>Trainers</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='price'>Price</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='contact'>Contact</Link>
              </li>
            </ul>
            <div className="d-flex">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link text-light btn btn-outline-warning" onClick={handleLogout}><GoSignOut size={20} className='text-warning' /> Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header