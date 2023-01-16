import React from 'react'
import { FaBath, FaFan, FaWifi } from 'react-icons/fa'
function Amenities() {
  return (
    <section className='wt-section bgs-primary'>
      <div className='container'>
        <div className='row justify-content-md-center text-center pb-lg-4 mb-lg-5 mb-4'>
          <div className='col-md-8 text-center w-md-50 mx-auto mb-0'>
            <h2 className='mb-md-2 display-4 font-weight-normal'>
              Amenities
            </h2>
            <p className='lorem'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, perferendis. Qui fuga dignissimos nulla amet?</p>
          </div>

          {/* Features Block */}

          <div className='col-md-4 cards'>
            <div className='bg-white p-5 mb-4 text-center rounded-lg rounded-mg'>
              <i className='display-4 text-primary mb-4'><FaBath /></i>
              <h6 className='my-2'>Stream Bath</h6>
              <p className='text-muted lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eligendi quos tenetur sed animi perspiciatis.</p>
            </div>
          </div>

          <div className='col-md-4 cards'>
            <div className='bg-white p-5 mb-4 text-center rounded-lg rounded-mg'>
              <i className='display-4 text-primary mb-4'><FaWifi /></i>
              <h6 className='my-2'>Wi- Fi</h6>
              <p className='text-muted lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eligendi quos tenetur sed animi perspiciatis.</p>
            </div>
          </div>

          <div className='col-md-4 cards'>
            <div className='bg-white p-5 mb-4 text-center rounded-lg rounded-mg'>
              <i className='display-4 text-primary mb-4'><FaFan /></i>
              <h6 className='my-2'>Air Conditiones</h6>
              <p className='text-muted lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eligendi quos tenetur sed animi perspiciatis.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Amenities