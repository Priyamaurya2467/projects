import React from 'react'

function ScoreHistory() {
    const history = [
        {
            activity: "Completed React Quiz",
            points: "+20",
            date: "Today",
        },
        {
            activity: "Finished DSA Lesson",
            points: "+10",
            date: "Yesterday",
        },
        {
            activity: "Completed Module",
            points: "+100",
            date: "2 days ago",

        },
        {
            activity: "Mock Test",
            points: "+35",
            date: "3 days ago",

        }
    ]
  return (
    <>

    <div className='bg-white rounded-3xl p-6 shadow-md'>
        <h2 className='text-2xl font-semibold mb-5'>
            📈 Score History
        </h2>

        <div className='space-y-4'>
            {history.map((item,index) => (
                <div 
                    key={index}
                    className='flex justify-between border-b pb-3'>
                        <div>
                            <p className='font-medium'>{item.activity}</p>
                            <p className='text-green-600 font-bold'>{item.points}</p>
                        </div>

                </div>
            ))}

        </div>
    </div>
    
    
    </>
  )
}

export default ScoreHistory