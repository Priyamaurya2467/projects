import React from 'react'
import { WeeklyHoursChart } from './WeeklyHoursChart'
import SessionHistory from './SessionHistory'

function StudyHours() {
  return (
    <>
    <div className='p-6 space-y-6'>
        <div>
            <h1 className='text-3xl font-bold'>
                ⏱️ Study Hours
            </h1>

            <p className='text-gray-500'>
                Monitor your learning consistency
            </p>
        </div>

        <div className='grid md:grid-cols-3 gap-6'>
            <div className='bg-white rounded-3xl p-6 shadow'>
                <h3 className='text-gray-500'>
                    Today
                </h3>

                <p className='text-4xl font-bold'>2.3 hrs</p>
            </div>

            <div className='bg-white rounded-3xl p-6 shadow'>
                <h3 className='text-gray-500'>
                    This Week
                </h3>

                <p className='text-4xl font-bold'>18.5 hrs</p>
            </div>

            <div className='bg-white rounded-3xl p-6 shadow'>
                <h3 className='text-gray-500'>
                    Monthly Total
                </h3>

                <p className='text-4xl font-bold'>74 hrs</p>
            </div>
        </div>

        <WeeklyHoursChart/>
        <SessionHistory/>

        <div className='bg-purple-100 rounded-3xl p-6'>
            <h2 className='font-semibold text-xl mb-2'>
                Productivity insights
            </h2>

            <p>
                You study most effectively between
                7 PM and 10 PM. Keep this Schedule
                for maximum productivity.
            </p>
        </div>

        
    </div>
    
    </>
  )
}

export default StudyHours