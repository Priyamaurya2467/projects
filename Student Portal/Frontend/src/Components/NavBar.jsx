import {React} from 'react'
import { FaBolt, FaBoltLightning } from 'react-icons/fa6'
import { MdFlashlightOn, MdOutlineThunderstorm, MdThunderstorm } from 'react-icons/md'
import {useNavigate} from "react-router-dom"

function NavBar() {
    const navigation = useNavigate();
  return (
    <div className='flex justify-between py-4 px-6'>

        <div className='flex items-center gap-3'>
            <div className='w-9 h-9 rounded-full bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300 flex items-center justify-center '>
                <FaBolt className='text-white'/>
            </div>
            <h1 className='text-xl font-semibold font-mono'>StudentSphere </h1>
        </div>


        <div>
            <button className='pr-5' onClick={()=>navigation('/login')}>Sign In</button>
            <button className='p-2 px-5 rounded-4xl text-white font-semibold bg-purple-600 shadow-lg hover:scale-105 transition-all duration-300'  onClick={()=>navigation('/registration')}>Get Started</button>
        </div>



    </div>
  )
}

export default NavBar