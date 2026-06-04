import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HiOutlineStar } from 'react-icons/hi'
import {  FaArrowRight } from 'react-icons/fa'

function Capabilities() {
     const navigation = useNavigate();
  return (
   
    <>

    <div className='bg-gradient-to-r from-white via-purple-50 to-purple-50 py-5'>
        
        <div className='py-8 flex justify-center'>
            <p className=' flex  items-center gap-1.5 text-xs bg-white px-4 py-2 rounded-full font-semibold'> <HiOutlineStar  className='text-purple-400'/> The Future of Student Success</p>
        </div>

        <div className='font-sans-sarif  '>
            <h1 className='text-6xl text-center font-semibold tracking-wider'>Your Complete</h1>
            <h1 className='text-6xl text-center font-semibold tracking-widest'>Student</h1>
            <p className='font-semibold text-7xl text-center bg-gradient-to-r from-purple-200 via-purple-400 to-green-500 bg-clip-text text-transparent py-2 tracking-wider'>Success Platform</p>
        </div>


        <p className='text-gray-500 text-xl  px-13 py-1 text-center'>Master your academics, prepare for placements, track wellness, and grow with a community of 10,000+ students. All in one beautiful, intuitive platform.</p>



        <div className='flex justify-center gap-5 py-8'>
            <button className='flex justify-center items-center gap-2 px-4 py-3 rounded-4xl text-white font-semibold bg-purple-500 shadow-lg hover:scale-105 transition-all duration-300' onClick={()=>navigation('/dashboard')}>Explore Dashboard <FaArrowRight className='h-3'/></button>
            <button className='flex justify-center items-center gap-2 px-4 py-3 rounded-4xl font-semibold  shadow-lg hover:scale-105 transition-all duration-300'>Watch Demo <FaArrowRight className='h-3'/></button>
            
        </div>




    </div>

        

    
    </>
  )
}

export default Capabilities