import React from 'react'
import Amenities from '../Amenities/Amenities'
import Hero from '../Hero/Hero'
import Services from '../Services/Services'
import Testimonials from '../Testimonials/Testimonials'

function Home() {
  return (
    <>
    {/* Hero section */}
      <Hero/>
      {/* Services section */}
      <Services/>
      {/* Amenities section */}
      <Amenities/>
      {/* Testimonials */}
      <Testimonials/>
    </>
  )
}

export default Home