import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaBurn } from 'react-icons/fa'
import { MdCalendarToday, MdDashboard, MdGroup, MdHub, MdMood, MdSmartToy } from 'react-icons/md'

function SidebarNavigation() {
    const navigate = useNavigate()
  return (
    <>

    <aside className="fixed left-0 top-0 z-40 flex h-full w-64 flex-col border-r border-white/10 bg-black/30 p-6 backdrop-blur-xl shadow-lg shadow-violet-500/5">

        <div className="mb-10 px-2">
            <h1 className="text-3xl font-bold text-violet-400">
            MindShield AI
            </h1>

            <p className="mt-1 text-sm text-gray-400">
            Academic Wellness
            </p>
        </div>
  

              {/* Navigation */}
        <nav className="flex-1 space-y-2">

                {/* ACTIVE */}
                <a
                href="/dashboard"
                onClick={()=> navigate('/dashboard')}
                className="flex items-center gap-4 rounded-2xl bg-violet-500/20 px-4 py-3 font-semibold text-violet-300 shadow-lg shadow-violet-500/10 transition-all"
                >
                <span className="material-symbols-outlined">
                    <MdDashboard/>
                </span>
                <span>Dashboard</span>

               
                </a>

                {/* ITEM */}
                <a
                href="/burnout-analysis"
                onClick={()=>navigate('/burnout-analysis')}
                className="flex items-center gap-4 rounded-2xl px-4 py-3 text-gray-400 transition-all duration-300 hover:translate-x-1 hover:bg-white/5 hover:text-violet-300"
                >
                <span className="material-symbols-outlined">
                    <FaBurn/>
                </span>

                <span>Burnout Anaytics</span>

               
                </a>

                <a
                href="#"
                onClick={()=>navigate('/mood-tracker')}
                className="flex items-center gap-4 rounded-2xl px-4 py-3 text-gray-400 transition-all duration-300 hover:translate-x-1 hover:bg-white/5 hover:text-violet-300"
                >
                <span className="material-symbols-outlined">
                    <MdMood/>
                </span>
                <span>Mood Tracker</span>

                </a>

               

                <a
                href="/wellness-hub"
                onClick={()=>navigate('/wellness-hub')}
                className="flex items-center gap-4 rounded-2xl px-4 py-3 text-gray-400 transition-all duration-300 hover:translate-x-1 hover:bg-white/5 hover:text-violet-300"
                >
                <span className="material-symbols-outlined">
                    <MdHub/>
                </span>

                <span>Wellness Hub</span>
                </a>

                <a
                href="#"
                onClick={()=>navigate('/study-plan')}
                className="flex items-center gap-4 rounded-2xl px-4 py-3 text-gray-400 transition-all duration-300 hover:translate-x-1 hover:bg-white/5 hover:text-violet-300"
                >
                <span className="material-symbols-outlined">
                    <MdCalendarToday/>
                </span>

                <span>Study Planner</span>
                </a>

                <a
                href="#"
                className="flex items-center gap-4 rounded-2xl px-4 py-3 text-gray-400 transition-all duration-300 hover:translate-x-1 hover:bg-white/5 hover:text-violet-300"
                >
                <span className="material-symbols-outlined">
                    <MdGroup/>
                </span>

                <span>Community</span>
                </a>
        </nav>

                 {/* BUTTON */}
        <div className="mt-auto pt-6">
                <button className="w-full rounded-2xl bg-gradient-to-r from-violet-500 to-emerald-400 px-6 py-4 font-bold text-black shadow-lg shadow-violet-500/20 transition-all duration-300 hover:scale-105 active:scale-95">

                Start Focus Session
                </button>
        </div>

    </aside>



    
    
    </>
  )
}

export default SidebarNavigation