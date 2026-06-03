import React from 'react'
import LoginCard from './LoginCard'
import { FaBolt } from 'react-icons/fa'
function Main() {
  return (
    <>

    <div className=' p-5 bg-gradient-to-r from-pink-100 to-purple-100'>
        <div className='flex items-center gap-3 justify-center'>
            <div className='w-8 h-8 rounded-full bg-gradient-to-r from-purple-300 via-purple-500 to-purple-800 flex items-center justify-center '>
                <FaBolt className='text-white h-5 w-5'/>
            </div>
            <h1 className='text-2xl font-semibold font-mono'>StudentSphere </h1>
        </div>
        <div className='flex flex-col items-center p-4'>
            <p className='text-2xl tracking-wider font-semibold'>Welcome Back</p>
            <p className='text-xl text-gray-600 pt-3'>Sign in to continue your learing journey</p>
        </div>
   

    <LoginCard/>


    



    </div>

    

    </>
  )
}

export default Main