import React from 'react'
import { FaBolt ,  FaArrowLeft} from 'react-icons/fa6'
import { useNavigate , useLocation } from 'react-router-dom'

function BlankPage() {
    const navigation = useNavigate();
    const location = useLocation();
    const pageName = location.state?.pageName || 'Feature'
  return (
    <>

    {/* Navbar */}

    <div className='flex items-center gap-3 p-5'>
        <div className='w-9 h-9 rounded-full bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300 flex items-center justify-center '>
            <FaBolt className='text-white'/>
        </div>
        <h1 className='text-xl font-semibold font-mono'>StudentSphere </h1>
    </div>

    {/* Main Page */}
    <div >
    <div className='flex flex-col items-center' >
        <div className='w-15 h-15 rounded-full bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300 flex items-center justify-center'>
            <FaBolt className='text-white h-11 w-11'/>
        </div>

        <h1 className='text-center text-3xl tracking-wider font-semibold pt-5'>{pageName} Coming Soon</h1>
        <p className='text-center text-xl  tracking-wide text-gray-600 pt-5'>This page is being crafted with love and attention to detail. Let us know what you'd like to see here!</p>
    </div>

    <div className='flex justify-center items-center pt-20 bg-white rounded-2xl p-10 m-15 text-gray-600 text-center'>
        <p>While you wait explore other parts of StudentSphere or check back soon for updates!</p>
    </div>


    <div className='text-center flex items-center justify-center'>
         <button className='flex justify-center items-center gap-2 px-4 py-3 rounded-4xl text-white font-semibold bg-purple-500 shadow-lg hover:scale-105 transition-all duration-300' onClick={()=>navigation('/dashboard')}> <FaArrowLeft className='h-3'/>Explore Dashboard </button>
    </div>

    </div>

    </>






  )
}

export default BlankPage