import React from 'react'
import { FaBolt, FaBoltLightning } from 'react-icons/fa6'
import { MdFlashlightOn, MdOutlineThunderstorm, MdThunderstorm } from 'react-icons/md'

function NavBar() {
  return (
    <div className='flex justify-between py-7 px-5'>

        <div className='flex items-center gap-3'>
            <div className='w-9 h-9 rounded-full bg-gradient-to-r from-purple-300 via-purple-500 to-purple-800 flex items-center justify-center '>
                <FaBolt className='text-white'/>
            </div>
            <h1 className='text-xl font-semibold font-mono'>StudentSphere </h1>
        </div>

        <div>
            <button className='px-6 py-3 rounded-xl text-white font-semibold bg-purple-500 shadow-lg hover:scale-105 transition-all duration-300'>Get Started</button>
        </div>



    </div>
  )
}

export default NavBar