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
        <iframe title="location" src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.9009725357064!2d76.83987901518071!3d30.580340800012017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x46e49afbed14c939!2sFZ%20GYM%20%26%20SPA%20-%20Gym%20in%20Derabassi!5e0!3m2!1sen!2sin!4v1674134157472!5m2!1sen!2sin"} width="100%" height="600" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  )
}

export default Contact