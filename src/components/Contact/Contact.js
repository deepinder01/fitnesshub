import React from 'react'

function Contact() {
  return (
    <section className='wt-section bg-light'>
      <div className='container'>
        <div className='row justify-content-md-center text-center pb-lg-4 mb-lg-5 mb-4'>
          <div className='col-md-8 text-center w-md-50 mx-auto mb-0'>
            <h2 className='mb-md-2'>
              Let Us Know
            </h2>
            <p className='lorem'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum nulla, quasi illo voluptates rem consequatur molestias quia tempore maxime atque!</p>
          </div>
        </div>

        {/* contact section */}
        {/* <div className='row justify-content-md-center text-center pb-5'>
          <div className='col-md-8'>

          </div>
        </div> */}

        <div className='row'>
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe width="800" height="424" id="gmap_canvas" src={"https://maps.google.com/maps?q=FZ%20GYM%20&%20SPA%20-%20Gym%20in%20Derabassi,%201st%20FLOOR%20,%20PARAS%20SQUARE%20BANK%20BUILDING%20CHD%20Ambala,%20Road,%20Dera%20Bassi,%20Punjab%20140507,%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"} frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
              </iframe>
              <br />
              <a href="https://www.embedgooglemap.net">google maps insert</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact