import React from 'react'

function Price() {
  return (
    <section className='wt-section' id='price'>

      <div class='container'>
        <div class='row justify-content-md-center text-center mb-lg-5 mb-4 pb-lg-5'>
          <div class='col-md-12'>
            <h2 class='h1'>
              Price &#38; Schdule
            </h2>
            <p class='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, exercitationem!</p>
          </div>
        </div>

      <div class='row'>
        <div class='col-md-12'>
          <div class='table-responsive'>
            <table class='table u custom-table table-borderless'>

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
                    <span class='text-muted'>Indoor</span>
                  </td>
                  <td>
                    <h6>&#8377;700</h6>
                    <span class='text-muted'>Monthly</span>
                  </td>
                  <td>
                    <a href='' class='btn btn-primary btn-pill'>Join Now</a>
                  </td>
                </tr>

                {/* service-2 */}
                <tr>
                  <td>05:00am - 12:00pm</td>
                  <td>
                    <h6>Body-Building</h6>
                    <span class='text-muted'>BW-Training</span>
                  </td>
                  <td>
                    <h6>&#8377;700</h6>
                    <span class='text-muted'>Monthly</span>
                  </td>
                  <td>
                    <a href='' class='btn btn-primary btn-pill'>Join Now</a>
                  </td>
                </tr>

                {/* service-3 */}
                <tr>
                  <td>04:00am - 10:00am</td>
                  <td>
                    <h6>Yoga</h6>
                    <span class='text-muted'>Outdoor</span>
                  </td>
                  <td>
                    <h6>&#8377;700</h6>
                    <span class='text-muted'>Monthly</span>
                  </td>
                  <td>
                    <a href='' class='btn btn-primary btn-pill'>Join Now</a>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Price