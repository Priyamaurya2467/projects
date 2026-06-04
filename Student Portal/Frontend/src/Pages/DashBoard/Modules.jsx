import React from 'react'
import { HiOutlineBookOpen, HiOutlineFire } from 'react-icons/hi'
import { MdAnalytics, MdLoop, MdOutlineBadge, MdOutlineCalendarMonth, MdOutlineEmojiEmotions, MdOutlinePeople, MdTrendingUp} from 'react-icons/md'


function Modules() {
    const card = [
        {
            icon: <HiOutlineBookOpen/>,
            heading: "Gate Preparation",
            caption: "Master DSA, DBMS, OS and more",
            bg: "bg-gradient-to-r from-purple-400 to-purple-200",
            
        },
        {

            icon: <MdTrendingUp/>,
            heading: "Placement Tracker",
            
            bg: "bg-gradient-to-r from-green-200 to-green-400",
            caption: "120 students placed this year"

        },
        {
            icon: <MdOutlineCalendarMonth/>,
            heading: "Study Schedule",
        
            bg: "bg-gradient-to-r from-green-200 to-green-400",
            caption: "AI-optimized study plans"

        },
        {
            icon: <MdOutlineEmojiEmotions/>,
            heading: "Wellness Tracker",
        
            bg: "bg-gradient-to-r from-red-200 to-red-400",
            caption: "Mind and body balance"

        },
         {
            icon: <MdOutlinePeople/>,
            heading: "Community Forum",
        
            bg: "bg-gradient-to-r from-blue-200 to-blue-400",
            caption: "AI-optimized study plans"

        },
        {
            icon: <MdAnalytics/>,
            heading: "Analytics",
        
            bg: "bg-gradient-to-r from-yellow-200 to-yellow-400",
            caption: "Deep insights into your progress"

        }
    ]
  return (
    <>

    <div className='grid grid-cols-3 grid-rows-2 gap-3 rounded-4xl p-4 '>
        {card.map((item,index)=>(

            <div className='group flex flex-col gap-1 p-4 px-5 bg-white  rounded-4xl shadow-sm transition-all duration-500 hover:shadow-[0_20px_40px_rgba(168,85,247,0.25)] hover:-translate-y-1' key={index}>

                <div className={`w-10 h-10 rounded-full ${item.bg} flex items-center justify-center text-white transition-all duration-500 group-hover:scale-110 group-hover:shadow[0_10px_25px_rgba(168,85,247,0.45)] `}>
                {item.icon}
                 </div>

                 <p className='text-xl font-semibold text-black-600'>{item.heading}</p>
              
                 <p className='text-sm font-light text-gray-400'>{item.caption}</p>

            </div>

            

            

        ))}
        


    </div>




    </>
  )
}

export default Modules