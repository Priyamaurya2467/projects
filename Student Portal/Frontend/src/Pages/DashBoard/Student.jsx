import React from 'react'
import { FaCalendar } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa6'
function Student({user}) {
  return (
    <>

    <div className='bg-white p-6 rounded-4xl '>
        <h1 className='text-4xl'>Welcome back, {user?.name}👋</h1>
        <p className='text-sm text-gray-500 py-2 font-semibold'>You're making amazing progress. Keep up the momentum!</p>

        <div className='flex py-5 gap-2'>
            
            <button className='flex justify-center text-sm items-center gap-2 p-2 px-3 rounded-4xl text-white font-semibold bg-purple-500 shadow-lg hover:scale-105 transition-all duration-300'>Continue Learning <FaArrowRight className='h-3'/></button>
            <button className='flex justify-center text-sm items-center gap-2 p-2 px-3 rounded-4xl font-semibold  shadow-lg hover:scale-105 transition-all duration-300'>View Today's Plan <FaCalendar className='h-3'/></button>
                    
        </div>

    </div>
    
    </>
  )
}

export default Student