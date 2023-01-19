import React from 'react'
import team1 from '../../images/team/team-1.jpg'
import team2 from '../../images/team/team-2.jpg'
import team3 from '../../images/team/team-3.jpg'
import team4 from '../../images/team/team-4.jpg'
function Team() {
  return (
    <section className='bg-light wt-section' id='team'>
      <div className='container'>
        <div className='row justify-content-md-center text-center mb-lg-5 mb-4 pb-lg-5'>
          <div className='col-md-12'>
            <h2 className='h1'>
              Our Team
            </h2>
            <p className='lorem'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, voluptas.</p>
          </div>
        </div>

        <div className='row'>

          {/* team member 1 */}
          <div className='col-lg-3 col-sm-6 mb-5'>
            <img src={team1} alt='team member' className='w-100 rounded-top' />
            <div className='wt-box-shadow-sm bg-white text-center rounded p-4'>
              <div className='mb-3'>
                <h5 className='mb-1'>
                  Jessica Biel
                </h5>
                <small className='d-block font-style-normal text-uppercase text-primary-y wt-letter-spacing-x5'>
                  Ceo
                </small>
              </div>
            </div>
          </div>

          {/* team member 2 */}
          <div className='col-lg-3 col-sm-6 mb-5'>
            <img src={team2} alt='team member' className='w-100 rounded-top' />
            <div className='wt-box-shadow-sm bg-white text-center rounded p-4'>
              <div className='mb-3'>
                <h5 className='mb-1'>
                  Giga Chad
                </h5>
                <small className='d-block font-style-normal text-uppercase text-primary-y wt-letter-spacing-x5'>
                  Sr. Trainer
                </small>
              </div>
            </div>
          </div>

          {/* team member 3 */}
          <div className='col-lg-3 col-sm-6 mb-5'>
            <img src={team3} alt='team member' className='w-100 rounded-top' />
            <div className='wt-box-shadow-sm bg-white text-center rounded p-4'>
              <div className='mb-3'>
                <h5 className='mb-1'>
                  Bruce Willamson
                </h5>
                <small className='d-block font-style-normal text-uppercase text-primary-y wt-letter-spacing-x5'>
                  Trainer
                </small>
              </div>
            </div>
          </div>

          {/* team member 4 */}
          <div className='col-lg-3 col-sm-6 mb-5'>
            <img src={team4} alt='team member' className='w-100 rounded-top' />
            <div className='wt-box-shadow-sm bg-white text-center rounded p-4'>
              <div className='mb-3'>
                <h5 className='mb-1'>
                  Johanna Care
                </h5>
                <small className='d-block font-style-normal text-uppercase text-primary-y wt-letter-spacing-x5'>
                  Operations Head
                </small>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Team