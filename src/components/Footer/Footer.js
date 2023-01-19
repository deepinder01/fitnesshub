import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

function Footer() {
  return (
    <footer className='bg-dark py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 text-center text-md-left mb-3 mb-md-0'>
            <small className='text-white'>&#169; FitnessHub by Deepinder Singh</small>
          </div>
          <div className='col-md-4 align-self-center'>
            <ul className='list-inline text-center text-md-right mb-0'>
              <li className='list-inline-item mx-2' data-toggle='tooltip' data-placement='top' title='facebook'>
                <a href=''>
                  <FaFacebook className='text-white'/>
                </a>
              </li>
              <li className='list-inline-item mx-2' data-toggle='tooltip' data-placement='top' title='facebook'>
                <a href=''>
                  <FaTwitter className='text-white'/>
                </a>
              </li>
              <li className='list-inline-item mx-2' data-toggle='tooltip' data-placement='top' title='facebook'>
                <a href=''>
                  <FaInstagram className='text-white'/>
                </a>
              </li>
              <li className='list-inline-item mx-2' data-toggle='tooltip' data-placement='top' title='facebook'>
                <a href=''>
                  <FaYoutube className='text-white'/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer