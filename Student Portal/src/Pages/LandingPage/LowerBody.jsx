import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

function LowerBody() {
  return (
    <>

    <div className='bg-gradient-to-r from-purple-100 via-purple-200 to-green-100 flex-col text-center py-15 px-5'>
        <p className='text-5xl font-bold'>Ready to Transform Your Future?</p>
        <p className='text-gray-500 font-medium py-5 text-xl'>Join thousands of students already using StudentSphere to achieve their dreams</p>
        <div className='flex justify-center py-2'>
            <button className='flex justify-center items-center gap-2 px-4 py-3 rounded-xl font-semibold bg-purple-500 text-white shadow-lg hover:scale-105 transition-all duration-300'>Start Your Journey <FiArrowRight/></button>
        </div>
        
    </div>
    
    </>
  )
}

export default LowerBody