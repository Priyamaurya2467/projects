import React from 'react'
import { FiSmile } from 'react-icons/fi'
import { HiBookOpen, HiTrendingUp } from 'react-icons/hi'
import { HiBars2, HiBolt } from 'react-icons/hi2'
import { MdPeople } from 'react-icons/md'

function Cards() {

    const cards = [
        {
            icon: <HiBookOpen/>,
            topic: 'GATE Preparation',
            desc: 'Structured courses, mock tests, and personalized study plans'
        },
        {
            icon: <HiBars2/>,
            topic: 'PLacement Tracker',
            desc: 'Real-time job leads, interview prep, and company insights'

        },
        {
            icon: <HiTrendingUp/>,
            topic: 'Study Scheduler',
            desc: 'AI-powered schedule optimization and time management'
        },
        {
            icon: <FiSmile/>,
            topic: 'Wellness Tracker',
            desc: 'Monitor mood, sleep, stress, and overall well-being'
        },
        {
            icon: <MdPeople/>,
            topic: 'Community Forum',
            desc: 'Connect with peers, share resources, and grow together'
        },
        {
            icon: <HiBolt/>,
            topic: 'AI Assistant',
            desc: 'Smart recommendations and personalized guidance 24/7'
        }


    ]
  return (
    <>

    <div className='pt-5'>
        <h1 className='text-5xl text-center tracking-widest'>Everything you Need to Succeed</h1>
        <p className='text-center py-2 text-gray-500 text-lg'>Six powerful modules designed together to accelerate your growth</p>
    </div>

    <div className='flex justify-center items-center min-h-screen py-15 px-5'>

     <div class="grid grid-cols-3 grid-rows-2 gap-8 max-w-5xl">

        {cards.map((item,index)=>(
        <div className='w-80 h-56 bg-white rounded-3xl p-8 flex flex-col justify-center shadow-lg transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_25px_50px_rgba(168,85,247,0.35)]' key={index}>
        <p className='h-14 w-14 rounded-2xl flex items-center justify-center text-white text-xl bg-gradient-to-r from-purple-400 via-blue-500 to-green-400'>{item.icon}</p>
        <h3 className='text-2xl font-semibold tracking-wide mt-5'>{item.topic}</h3>
        <p className='mt-3 text-gray-500 leading-relaxed'>{item.desc}</p>
        </div>
         ))}
  
    </div>

    </div>
   
    
    
    </>
  )
}

export default Cards