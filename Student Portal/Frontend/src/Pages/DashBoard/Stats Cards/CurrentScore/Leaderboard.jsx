import React from 'react'

function Leaderboard() {
    const students = [
        {
            rank: 1,
            name: "Rahul",
            score: 920,
        },

        {
            rank: 2,
            name: "Priya",
            score: 687,
        },
        {
            rank: 3,
            name: "Aman",
            score: 650,
        },
        {
            rank: 4,
            name: "Sneha",
            score: 610,
        },
    ]
  return (
    <>

    <div className='bg-white rounded-3xl p-6 shadow-md'>
        <h2 className='text-2xl font-semibold mb-5'>
            🏆 Leaderboard
        </h2>

        <div className='space-y-4'>

            {students.map((student) => (
                <div className='flex justify-between border-b pb-3'>
                    <span>#{student.rank} {student.name}</span>
                    <span className='font-bold'>{student.score}</span>
                </div>
            ))}

        </div>
    </div>
    
    </>
  )
}

export default Leaderboard;