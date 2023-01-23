import React from 'react'
import avatar1 from '../../images/avatars/avatar1.jpg'
import avatar2 from '../../images/avatars/avatar2.jpg'
function Testimonials() {
  return (
    <section className='wt-section'>
      <div className='container'>
        <div className='row justify-content-md-center text-center pb-lg-4 mb-lg-5 mb-4'>
          <div className='col-md-8 text-center w-md-50 mx-auto mb-0'>
            <h2 className='mb-md-2'>
              Testimonials
            </h2>
            <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, esse.</p>
          </div>
        </div>

        {/* testimonial-1 */}
        <div className='row'>
          <div className='col-lg-6 mb-7 mb-lg-0 aos-init aos-animate' data-aos='fade-up' data-aos-easing='linear' data-aos-delay='200'>
            <blockquote className='wt-blockquote-v2 rounded mb-5'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis quisquam aperiam aliquam, quis optio iste.
            </blockquote>
            <div className='media wt-font-size-90'>
              <img src={avatar1} alt='avatar' height={100} className='rounded-circle wt-blockquote-v2__image wt-box-shadow-lg mr-3 mt-2' />
              <div className='media-body'>
                <strong className='d-block'>
                  Sheryl Winfrey
                </strong>
                <span className='wt-font-size-75 text-dark'>
                  XL Director
                </span>
              </div>
            </div>
          </div>
      
          {/* testimonial-2 */}
          <div className='col-lg-6 px-lg-5 aos-init aos-animate' data-aos='fade-down' data-aos-easing='linear' data-aos-delay='400'>
            <blockquote className='wt-blockquote-v2 rounded mb-5'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis quisquam aperiam aliquam, quis optio iste.
            </blockquote>
            <div className='media wt-font-size-90'>
              <img src={avatar2} alt='avatar' height={100} className='rounded-circle wt-blockquote-v2__image wt-box-shadow-lg mr-3 mt-2' />
              <div className='media-body'>
                <strong className='d-block'>
                  John Doe
                </strong>
                <span className='wt-font-size-75 text-dark'>
                  James Bond
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials