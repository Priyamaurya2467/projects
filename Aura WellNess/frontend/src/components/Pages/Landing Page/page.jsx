import React from 'react'
import Navbar from '../../component/Navbar'
import Footer from '../../component/Footer'
import Hero from './Hero'
import Stats from './Stats'
import Features from './Features'
import Testimonial from './Testimonial'

function page() {
  return (
    <div>
        <Navbar/>
        <main className='mx-auto max-w-7xl px-4 md:px-6 lg:px-8'>
        <Hero/>
        <Stats/>
        <Features/>
        <Testimonial/>
        </main>

        <Footer/>
    </div>
  )
}

export default page