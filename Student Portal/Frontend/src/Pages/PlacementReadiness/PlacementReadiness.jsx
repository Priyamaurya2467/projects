import React from 'react'
import { HiOutlinePencil } from 'react-icons/hi'
import { HiMiniClipboardDocument } from 'react-icons/hi2'
import { MdArrowLeft, MdCheckCircle, MdKeyboardArrowLeft, MdOutlineArrowLeft, MdOutlineError, MdPeople, MdSyncLock, MdTerminal, MdThunderstorm, MdTrendingUp } from 'react-icons/md'
import { FaBrain } from "react-icons/fa6";

function PlacementReadiness() {
    const tracker = [
        {
            title: "Problem Solved",
            number: 320,
            icon: <MdTerminal/>,
            bg: "bg-gradient-to-r from-purple-800 via-purple-600 to-purple-500"
        },
        {
            title: "Mock Interviews",
            number: 8,
            icon: <MdPeople/>,
            bg: "bg-gradient-to-r from-green-600 via-green-500 to-green-300"
        },
        {
            title: "Resume Score",
            number: "90%",
            icon: <HiMiniClipboardDocument/>,
            bg: "bg-gradient-to-r from-purple-500 via-pink-500 to-pink-400"

        }
    ]
    const skills = [
        {
            icon: <MdTerminal size={24}/>,
            topic: "DSA" ,
            status: "85%",
            caption: "✓ Excellent"
        },
        {
            icon: <FaBrain size={24} /> ,
            topic: "Aptitude" ,
            status: "70%",
            caption: "○ Good"

        },
        {
            icon: <MdPeople size={24} /> ,
            topic: "Communication" ,
            status: "75%",
            caption: "○ Good"

        },
        {
            icon: <HiMiniClipboardDocument size={24} /> ,
            topic: "Mock Interviews" ,
            status: "60%",
            caption: "△ Fair"

        }
    ]
    const roadmap = [
        {
            icon: <MdCheckCircle/>,
            topic: "Resume Built",
            status: 'Completed',
            progress: 'Done'

        },
        {
            icon: <MdCheckCircle/>,
            topic: "Portfolio Setup",
            status: 'Completed',
            progress: 'Done'

        },
        {
            icon: <MdSyncLock/>,
            topic: "Skill Assessment",
            status: 'In Progress',
            progress: 'In Progress'
        },
        {
            icon: <MdOutlineError/>,
            topic: "Interview Prep",
            status: 'Pending',
            progress: ''
        },
        {
            icon: <MdOutlineError/>,
            topic: "Job Applications",
            status: 'Pending',
            progress: ''
        }
    ]
  return (
    <div>

    {/* Navbar */}

    <div className='bg-gradient-to-r from-purple-50 to-purple-100 min-h-screen '>
        <div className='flex justify-between p-5 bg-white '>
            <div className='flex justify-center items-center gap-2'><MdOutlineArrowLeft/> Placement Readiness</div>
            <div>
                <button className='flex justify-center items-center gap-3 border border-gray-50 rounded-2xl p-2 cursor-pointer hover:bg-gray-50 border-none'> <HiOutlinePencil/> Edit Metrices</button>
            </div>
        </div>

        <div className='bg-white rounded-3xl m-4 p-3 '>
            <div className='flex flex-col text-center p-10'>
                <p>0%</p>
                <span>Readiness</span>
            </div>

            <div className='text-center'>
                <h2 className='tracking-wider font-semibold text-xl'>You're on track for placements!</h2>
                <p className='text-green-500 font-semibold text-xs'>✓ 2/5 milestones completed</p>
            </div>

            <div className='p-5'>
                {tracker.map((item,index) => (
                    <div className='flex justify-between p-10' key={index}>
                        <div className='flex flex-col justify-start'>
                            <p className='text-xs font-semibold text-gray-600'>{item.title}</p>
                            <h1 className='lg font-semibold text-3xl'>{item.number}</h1>
                        </div>
                        <div className={`h-12 w-12 rounded-xl flex justify-center items-center ${item.bg}`}>
                                {item.icon} 
                        </div>
                    </div>
                ))}
            </div>

            <div className=' p-5'>
                <h1 className='font-semibold text-sm p-2'>Milestone Progress</h1>
                <div className='h-2  bg-gradient-to-r from-purple-800 to-blue-950 to-green-700 rounded-2xl '></div>
                <span className='text-xs text-gray-600'>2 completed, 3 remaining</span>
            </div>
        </div>
    

        {/* Skills Progress */}

        <div className="m-4">
  <h1 className="flex items-center text-3xl p-4 gap-2 tracking-wider">
    <MdTrendingUp className="text-purple-900" />
    Skills Progress
  </h1>

  {skills.map((skill, index) => (
    <div
      key={index}
      className="flex items-center justify-between bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition mb-4"
    >
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 bg-purple-100 flex items-center justify-center text-purple-950 rounded-xl">
          {skill.icon}
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 text-xl">
            {skill.topic}
          </h3>
          <p className="text-xs text-gray-600 font-medium">
            {skill.caption}
          </p>
        </div>
      </div>

      <div className="text-lg font-medium">
        {skill.status}
      </div>
    </div>
  ))}
        </div>


        <div className="m-4">
  <h1 className="flex items-center text-3xl p-4 gap-2 tracking-wider">
    <MdThunderstorm className="text-purple-900" />
    Placement Roadmap
  </h1>

  {roadmap.map((mapping, index) => (
    <div
      key={index}
      className="flex items-center justify-between bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition mb-4"
    >
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 bg-purple-100 flex items-center justify-center text-purple-950 text-2xl  rounded-xl">
          {mapping.icon}
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 text-xl">
            {mapping.topic}
          </h3>
          <p className="text-xs text-gray-600 font-medium">
            {mapping.status}
          </p>
        </div>
      </div>

      <div className="text-lg font-medium">
        {mapping.progress}
      </div>
    </div>
  ))}
        </div>



    </div>
  
    
    
    </div>
  )
}

export default PlacementReadiness