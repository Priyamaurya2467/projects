import React from 'react'

export function SessionHistory({sessions}) {
   
  return (
    <>
    <div className='bg-white rounded-3xl p-6 shadow'>
        <h2 className='text-2xl font-semibold mb-6'>
            📝 Session History
        </h2>

        <div className='space-y-4'>
            {sessions.map((session,index) => (
                <div key={index} className='flex justify-between border-b pb-3'>
                    <div>
                        <h3 className='font-medium'>{session.subject}</h3>
                        <p className='text-sm text-gray-500'>{session.date}</p>
                    </div>

                    <span className='font-semibold text-purple-600'>
                        {session.duration}
                    </span>

                </div>
            ))}
        </div>

    </div>
    
    </>
  )
}

export default SessionHistory