import { Button } from 'react-bootstrap'
import { useState } from 'react'
import FormModal from '../FormModal/FormModal';

function Price() {
  const [modalShow, setModalShow] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [exerciseType, setExerciseType] = useState('');

  const handleModal = (exerciseType) => {
    const tempemail = sessionStorage.getItem('Email');
    setUserEmail(tempemail);
    setExerciseType(exerciseType);
    setModalShow(true)
  }

  return (
    <>
      <section className='wt-section' id='price' style={{minHeight: '80vh'}}>

        <div className='container'>
          <div className='row justify-content-md-center text-center mb-lg-5 mb-4 pb-lg-5'>
            <div className='col-md-12 text-center mx-auto mb-0'>
              <h2 className='h1'>
                Price &#38; Schdule
              </h2>
              <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, exercitationem!</p>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-12 text-center mx-auto mb-0'>
              <div className='table-responsive'>
                <table className='table u custom-table table-borderless'>

                  <thead>
                    <tr>
                      <th>Time</th>
                      <th>Class</th>
                      <th>Price</th>
                      <th>Join Now</th>
                    </tr>
                  </thead>

                  <tbody>

                    {/* service-1 */}
                    <tr>
                      <td>10:00am - 12:00pm</td>
                      <td>
                        <h6>Aerobic Exercises</h6>
                        <span className='text-muted'>Indoor</span>
                      </td>
                      <td>
                        <h6>&#8377;700</h6>
                        <span className='text-muted'>Monthly</span>
                      </td>
                      <td>
                        <Button onClick={() => handleModal('Aerobics')} className='btn btn-primary btn-pill'>Join Now</Button>
                      </td>
                    </tr>

                    {/* service-2 */}
                    <tr>
                      <td>05:00am - 12:00pm</td>
                      <td>
                        <h6>Body-Building</h6>
                        <span className='text-muted'>BW-Training</span>
                      </td>
                      <td>
                        <h6>&#8377;700</h6>
                        <span className='text-muted'>Monthly</span>
                      </td>
                      <td>
                        <Button onClick={() => handleModal('Body-Building')} className='btn btn-primary btn-pill'>Join Now</Button>
                      </td>
                    </tr>

                    {/* service-3 */}
                    <tr>
                      <td>04:00am - 10:00am</td>
                      <td>
                        <h6>Yoga</h6>
                        <span className='text-muted'>Outdoor</span>
                      </td>
                      <td>
                        <h6>&#8377;700</h6>
                        <span className='text-muted'>Monthly</span>
                      </td>
                      <td>
                        <Button onClick={() => handleModal('Yoga')} className='btn btn-primary btn-pill'>Join Now</Button>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <FormModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        useremail={userEmail}
        exercisetype={exerciseType}
      />
    </>
  )
}

export default Price