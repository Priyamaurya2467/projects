import React from 'react'

function StreakCalender() {
    const weekData = [
        { day: "Mon" , active: true},
        { day: "Tue" , active: true},
        { day: "Wed" , active: true},
        { day: "Thu" , active: true},
        { day: "Fri" , active: false},
        { day: "Sat" , active: true},
        { day: "Sun" , active: true},
    ]
  return (
    <>
    <div className='bg-white rounded-3xl p-6 shadow-md'>
        <h2 className='text-3xl font-semibold mb-4'>
            Weekly Activity
        </h2>

        <div className='flex justify-between'>
            {weekData.map((item) => (
                <div
                    key={item.day}
                    className='flex flex-col items-center gap-2'
                    >
                        <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                                item.active
                                    ? "bg-green-500" : "bg-gray-300"
                            }`}
                        > {item.day[0]}

                        </div>

                        <span className='text-sm text-gray-600'>
                            {item.day}
                        </span>

                </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default StreakCalender