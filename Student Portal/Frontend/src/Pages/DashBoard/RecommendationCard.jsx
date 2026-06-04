import React from 'react'
import { MdCheck } from 'react-icons/md'

function RecommendationCard() {
    const recommendation=[
        "Focus on binary search problems-8 weak areas detected",
        "Schedule wellness break - 12 hours of study detected ",
        "Join discussion on multithreading - trending in community",
        "Review yesterday's topics - 3 concepts need reinforcement"
    ] 
  return (
    <>

    <div className='bg-white rounded-4xl p-5'>
        <h1 className='text-3xl tracking-wider font-medium'>
           📌 Smart Recommendations 
        </h1>

        <ul className='mt-4 rounded-2xl p-5'>
          {recommendation.map((item,index)=>(
            <li key={index} className='flex gap-2 items-center pt-5'>
              <div className='h-8 w-8 bg-purple-200 rounded-2xl flex justify-center items-center'>
                <MdCheck className='text-purple-500 font-medium'/>
              </div>
              <span className='text-gray-600'>{item}</span>
            </li>
          ))}
        </ul>
       
    </div>


    
    </>
  )
}

export default RecommendationCard