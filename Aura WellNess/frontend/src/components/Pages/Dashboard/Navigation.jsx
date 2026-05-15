import React from 'react'
import { MdAccountCircle } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

function Navigation() {
  const navigation = useNavigate()
  return (
    <>

     <nav
  className="sticky top-4 z-50 flex justify-between items-center
             px-8 py-4 w-[95%] mx-auto rounded-full mt-4
             bg-white/60 backdrop-blur-md shadow-xl
             border border-white/40"
>


  <div className="flex items-center gap-2">
    <span
      className="text-2xl font-bold bg-gradient-to-r
                 from-cyan-400 to-purple-400
                 bg-clip-text text-transparent"
    >
      MindShield AI
    </span>
  </div>

  
  <div className="hidden md:flex items-center gap-8">

    <a
      className="text-cyan-400 font-bold border-b-2
                 border-cyan-400 pb-1"
      href="#"
    >
      Dashboard
    </a>

    <a
      className="text-gray-700 hover:text-cyan-400
                 transition-colors duration-300"
      href="/burnout-analysis"
      onClick={()=>navigation('/burnout-analysis')}
    >
      Analytics
    </a>

    <a
      className="text-gray-700 hover:text-cyan-400
                 transition-colors duration-300"
      href="/burnout-analysis"
    >
      Mood Tracker
    </a>

    <a
      className="text-gray-700 hover:text-cyan-400
                 transition-colors duration-300"
      href="#"
    >
      Wellness Hub
    </a>

    <a
      className="text-gray-700 hover:text-cyan-400
                 transition-colors duration-300"
      href="#"
    >
      Study Planner
    </a>

    <a
      className="text-gray-700 hover:text-cyan-400
                 transition-colors duration-300"
      href="#"
    >
      Community
    </a>

  </div>

  
  <div className="flex items-center gap-4">

    <button
      className="p-2 rounded-full hover:bg-white/20 transition-all"
    >
      <span className="material-symbols-outlined text-cyan-400">
        notifications
      </span>
    </button>

    <button
      className="p-2 rounded-full hover:bg-white/20 transition-all"
    >
      <span className="material-symbols-outlined text-cyan-400">
        <MdAccountCircle/>
      </span>
    </button>

  </div>

    </nav>
    
    
    </>
  )
}

export default Navigation