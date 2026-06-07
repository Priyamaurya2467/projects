import React from 'react'
import { HiOutlineFire } from 'react-icons/hi'
import { MdLoop, MdOutlineBadge, MdTrendingUp} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'


function Cards() {
    const card = [
        {
            icon: <HiOutlineFire/>,
            site: 'streak',
            heading: "Study Streak",
            daysLeft: "47 days",
            bg: "bg-gradient-to-r from-orange-300 to-orange-500",
            caption: "Keep it going"
        },
        {

            icon: <MdLoop/>,
            site: 'score',
            heading: "Current Score",
            daysLeft: "687/900",
            bg: "bg-gradient-to-r from-purple-500 to-purple-300",
            caption: "↑ 12 pts this week"

        },
        {
            icon: <MdTrendingUp/>,
            site: 'hours',
            heading: "Study Hours",
            daysLeft: "18.5 hrs",
            bg: "bg-gradient-to-r from-green-200 to-green-400",
            caption: "On track for goals"

        },
        {
            icon: <MdOutlineBadge/>,
            site: 'placement',
            heading: "Placement Ready",
            daysLeft: "78%",
            bg: "bg-gradient-to-r from-purple-500 to-purple-300",
            caption: "2 skills to polish"

        }
    ]
    const navigate = useNavigate()
  return (
    <>

    <div className='flex flex-row justify-evenly rounded-4xl px-2 '>
        {card.map((item,index)=>(

            <div className='group flex flex-col gap-1 p-4 px-5 bg-white w-60 rounded-4xl shadow-sm transition-all duration-500 hover:shadow-[0_20px_40px_rgba(168,85,247,0.25)] hover:-translate-y-1' key={index} onClick={() => navigate(`/dashboard/${item.site}`)}>

                <div className={`w-12 h-12 rounded-full ${item.bg} flex items-center justify-center text-white transition-all duration-500 group-hover:scale-110 group-hover:shadow[0_10px_25px_rgba(168,85,247,0.45)] `}>
                {item.icon}
                 </div>

                 <p className='text-m text-gray-600'>{item.heading}</p>
                 <h1 className='text-black text-2xl font-semibold'>{item.daysLeft}</h1>
                 <p className='text-sm font-light text-gray-400'>{item.caption}</p>

            </div>

            

            

        ))}
        


    </div>




    </>
  )
}

export default Cards