import React from 'react'

function NumberStats() {
    const Count = [
        {
            count: "10,000",
            desc: "Active Students"

        },
        {
            count: "94%",
            desc: "Success Rate"
        },
        {
            count: "₹8.5L",
            desc: "Avg PLacement"
        },
        {
            count: "2.5M +",
            desc: "Study Hours"
        }
    ]
  return (
    <>

    <div className='flex gap-10 justify-center items-center py-20 px-5 flex-nowrap bg-purple-50'>
        {Count.map((count,index)=>(
            <div className='flex flex-col items-center text-center' key={index}>
                <p className='text-4xl bg-gradient-to-r from-purple-300 via-purple-600 to-green-600 bg-clip-text text-transparent'>{count.count}</p>
                <p className='text-lg font-light text-gray-400'>{count.desc}</p>
            </div>
        ))}
    </div>
    
    </>
  )
}

export default NumberStats