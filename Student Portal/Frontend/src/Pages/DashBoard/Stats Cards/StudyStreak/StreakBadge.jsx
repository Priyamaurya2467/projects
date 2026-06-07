import React from 'react'

function StreakBadge() {
    const badges = [
        {
            title: "7 Day Warrior",
            icon: "🔥"
        },
        {
            title: "30 Day Consistency",
            icon: "🏅"
        },
        {
            title: "50 Day Champion",
            icon: "🏆"
        },
        {
            title: "100 Day Legend",
            icon: '⭐'
        }
    ]
  return (
    <>
    <div className='bg-white rounded-3xl p-6 shadow-md'>
        <h2 className='text-xl font-semibold mb-4'>
            Achievements
        </h2>

        <div className='grid md:grid-cols-2 gap-4'>
            {badges.map((badge,index) => (
                <div 
                    key={index}
                    className='border rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition'>
                    <span className='text-3xl'>
                        {badge.icon}

                    </span>

                    <div>
                        <h3 className='font-semibold'>
                            {badge.title}
                        </h3>
                        <p className='text-sm text-gray-500'>
                            Badge Unlocked
                        </p>
                    </div>
                </div>
            ))}

        </div>
    </div>

    </>
  )
}

export default StreakBadge