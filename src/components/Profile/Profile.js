import '../../styles/profile.css'
import female from '../../images/avatars/female.png'
import male from '../../images/avatars/male.png'
function Profile() {
  return (
    <section className='wt-section' id='profile-section'>
      <div className='container py-5'>
        <div className='row justify-content-center align-items-center'>
          <div className='col col-lg-10 mb-4 mb-lg-0'>
            <div className='card mb-3' id='#profile-card'>
              <div className='row g-0'>
                <div className='col-lg-4 gradient-custom text-center text-white'>
                  <img src={true ? male : female}
                    alt="Avatar" className="img-fluid my-5" width={250} />
                  <h1>Marie Horwitz</h1>
                  <p className='h4'>Age: </p>
                  <p className='h5'>Gender: </p>
                </div>
                <div className='col-lg-8 bg-dark text-white'>
                  <div className='card-body p-4'>
                    <h2>Information</h2>
                    <hr className='mt-0 mb-4'/>
                    <div className='row pt-1'>
                      <div className='col-6 mb-3'>
                        <h3>Email</h3>
                        <p className='text-muted h4'>in@abc.com</p>
                      </div>
                      <div className='col-6 mb-3'>
                        <h3>Phone</h3>
                        <p className='text-muted h4'>934 032 3093</p>
                      </div>
                    </div>
                    <hr className='mt-0 mb-4'/>
                    <div className='row pt-1'>
                      <div className='col-10 mb-3'>
                        <h3>Address</h3>
                        <p className='text-muted h4'>Lorem ipsum dolor sit amet consectetur. Lorem, ipsum dolor.</p>
                      </div>
                    </div>
                    <hr className='mt-0 mb-4'/>
                    <div className='row pt-1'>
                      <div className='col-6 mb-3'>
                        <h3>Exercise</h3>
                        <p className='text-muted h4'>in@abc.com</p>
                      </div>
                      <div className='col-6 mb-3'>
                        <h3>Timings</h3>
                        <p className='text-muted h4'>934 032 3093</p>
                      </div>
                    </div>
                    <hr className='mt-0 mb-4'/>
                    <div className='row pt-1'>
                      <div className='col-6 mb-3'>
                        <h3>Joining Date</h3>
                        <p className='text-muted h4'>in@abc.com</p>
                      </div>
                      <div className='col-6 mb-3'>
                        <h3>Plan Duration</h3>
                        <p className='text-muted h4'>934 032 3093</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile