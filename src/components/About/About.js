import React from 'react'
import aboutImg from '../../images/hero.jpg'
function About() {
  return (
    <>
      <section className='wt-section pb-0' id='about'>
        <div className='container'>
          <div className='row justify-content-between align-items-center'>
            <div className='col-md-5'>
              <img width={'90%'} src={aboutImg} alt='' className='rounded-lg' />
            </div>
            <div className='col-md-7'>
              <h2 className='mb-4'>About Us</h2>
              <p className='text-muted lorem'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga eum asperiores commodi unde. Expedita a sed quidem aut quod, aperiam cupiditate consequatur nihil, vero, maiores deleniti necessitatibus nesciunt incidunt minima?</p>
            </div>
          </div>
        </div>
      </section>


      <section className='wt-section'>
        <div className='container'>
          <div className='row justify-content-between align-items-center'>
            
            <div className='col-md-7'>
              <h2 className='mb-4'>Professional Team</h2>
              <p className='text-muted lorem'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga eum asperiores commodi unde. Expedita a sed quidem aut quod, aperiam cupiditate consequatur nihil, vero, maiores deleniti necessitatibus nesciunt incidunt minima?</p>
            </div>

            {/* TODO second about image */}
            <div className='col-md-5'>
              <img width={'90%'} src={aboutImg} alt='' className='rounded-lg' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About