import React from 'react'
import { FaFire, FaTrophy } from 'react-icons/fa6'
import StreakCalender from './StreakCalender'
import StreakBadge from './StreakBadge'

function StudyStreak() {
  return (
    <>

    <div className='p-6 space-y-6'>
        <div>
            <h1 className='text-3xl font-bold'>
                🔥 Study Streak
            </h1>

            <p className='text-gray-500'>
                Track your consistency and achievements
            </p>
        </div>

        {/* Stats Cards */}
        <div className='grid md:grid-cols-2 gap-6'>
            <div className='bg-white rounded-3xl p-6 shadow-md'>
                <FaFire className='text-orange-500 text-4xl mb-4'/>
                <h3 className='text-gray-500'>
                    Current Streak
                </h3>

                <p className='text-5xl font-bold'>
                    47 Days
                </p>

                <p className='text-green-500 mt-2'>
                    Keep Going 🚀
                </p>
            </div>

            <div className='bg-white rounded-3xl p-6 shadow-md'>
                <FaTrophy className='text-yellow-500 text-4xl mb-4'/>
                <h3 className='text-gray-500'>Longest Streak</h3>
                <p className='text-5xl font-bold'>65 days</p>
                <p className='text-purple-500 mt-2'>Personal Best</p>
            </div>
        </div>

        
        <StreakCalender/>
        <StreakBadge/>

        <div className='bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-3xl p-6'>
            <h2 className='text-2xl font-bold'>
                Motivation Corner
            </h2>
            <p>
                Consistency beats intensity.
                You're among the top learners who show
                up every day. Keep building your streak!
            </p>
        </div>
    </div>
    
    </>
  )
}

export default StudyStreak