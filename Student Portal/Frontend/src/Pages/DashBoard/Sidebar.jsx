import React from 'react'
import { FaChartBar, FaRegChartBar } from 'react-icons/fa6'
import { FiBookOpen } from 'react-icons/fi'
import { HiPhotograph } from 'react-icons/hi'
import { Md10K, MdAutoGraph, MdBarChart, MdEmojiEmotions, MdOutlineCalendarMonth, MdOutlineDoorBack, MdOutlineEditCalendar, MdOutlineEmojiEmotions, MdOutlinePeopleOutline, MdPeople, MdSettings, MdTrendingUp } from 'react-icons/md'
import { useNavigate} from 'react-router-dom'

function Sidebar() {
    const navigate = useNavigate()
     const sideBarContent = [
        {
            icon: <FaRegChartBar/>,
            content: "Overview"
        },
        {
            icon: <FiBookOpen/>,
            content: "GATE Prep"
        },
        {
            icon: <MdTrendingUp/>,
            content: "Placements"
        },

         {
            icon: <MdOutlineCalendarMonth/>,
            content: "Placements"
        },

        {
            icon: <MdOutlineEmojiEmotions/>,
            content: "Wellness"
        },
        {
            icon: <MdOutlinePeopleOutline/>,
            content: "Community"
        }

     ]
  return (
   
    <>

    <div className='w-64 min-h-screen p-5  py-10 flex flex-col justify-between'>
        
        <div>
        {sideBarContent.map((item,index)=>(

        
           
                <div 
                key={index}
                className='flex  items-center p-2 gap-3 text-gray-500 font-semibold text-m py-5 px-3 hover:text-black'
                onClick={()=>navigate('/no-result' , {
                    state: {
                        pageName : item.content
                    }
                })} >
                    {item.icon}{item.content}</div>
                
        ))}

        </div>


        <div className='space-y-4 px-5'>
            <div className='flex items-center p-2 gap-3 text-gray-500 font-semibold hover:text-black cursor-pointer'>
                <MdSettings/>Settings
            </div>

            <div className='flex items-center gap-3 text-gray-500 p-2 font-semibold hover:text-red-500 cursor-pointer hover:bg-red-50 hover:rounded-2xl hover:p-2' onClick={()=>navigate('/')}>
                <MdOutlineDoorBack/>Sign Out
            </div>
        </div>

       

    </div>



    </>
  )
}

export default Sidebar