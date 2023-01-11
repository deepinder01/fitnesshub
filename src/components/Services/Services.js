import React from 'react'
import cardimg1 from '../../images/img1.jpg'
function Services() {
  return (
    <section className='wt-section services-section bg-light' id='services'>
      <div className='container'>
        <div className='row justify-content-md-center text-center pb-lg-4 mb-lg-5 mb-4'>
          {/* our services */}
          <div className='col-md-8 text-center w-md-50 mx-auto mt-5'>
            <h2 className='mb-md-2'>Our Services</h2>
            <p className='text-muted lorem'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident repudiandae expedita,</p>
          </div>
        </div>
        <div className='row justify-content-center'>
          {/* card-1 */}
          <div className='col-md-4'>
            <div className='card mb-md-0 mb-3'>
              <a href='#'><img src={cardimg1} alt='' className='card-img-top'/></a>
              <div className='card-body py-4'>
                <strong className='mb-2 d-block'>Aerobic</strong>
                <h5 className='mb-4 text-warning'>World Class Coaching</h5>
                <div className='mb-4'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, magni sunt sit eaque molestias earum!</p>
                </div>
              </div>
            </div>
          </div>
          {/* card-2 */}
          <div className='col-md-4'>
            <div className='card mb-md-0 mb-3'>
              <a href='#'><img src={cardimg1} alt='' className='card-img-top'/></a>
              <div className='card-body py-4'>
                <strong className='mb-2 d-block'>Aerobic</strong>
                <h5 className='mb-4 text-warning'>World Class Coaching</h5>
                <div className='mb-4'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, magni sunt sit eaque molestias earum!</p>
                </div>
              </div>
            </div>
          </div>
          {/* card-3 */}
          <div className='col-md-4'>
            <div className='card mb-md-0 mb-3'>
              <a href='#'><img src={cardimg1} alt='' className='card-img-top'/></a>
              <div className='card-body py-4'>
                <strong className='mb-2 d-block'>Aerobic</strong>
                <h5 className='mb-4 text-warning'>World Class Coaching</h5>
                <div className='mb-4'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, magni sunt sit eaque molestias earum!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services