import React from 'react'
import { MdBolt, MdSelfImprovement, MdSpa } from 'react-icons/md'

function BottomNav() {
  return (
    <>
        {/* Bottom Floating Navigation */}

        <nav className="fixed bottom-6 left-1/2 z-50 w-fit min-w-[320px] -translate-x-1/2 rounded-full border border-white/10 bg-white/5 px-8 py-3 shadow-[0_-10px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl">

        <div className="flex items-center justify-around gap-10 sm:gap-12">

            {/* Sanctuary */}
            <a
            href="#"
            className="flex flex-col items-center text-gray-400 opacity-60 transition-all duration-200 hover:text-violet-300 hover:opacity-100"
            >

            <span className="material-symbols-outlined">
                <MdSpa/>
            </span>

            <span className="mt-1 text-xs">
                Sanctuary
            </span>
            </a>

            {/* Optimize Active */}
            <a
            href="#"
            className="flex scale-110 flex-col items-center text-emerald-300 transition-all duration-200 active:scale-95"
            >

            <span
                className="material-symbols-outlined"
                style={{
                fontVariationSettings: "'FILL' 1",
                }}
            >
                <MdBolt/>
            </span>

            <span className="mt-1 text-xs">
                Optimize
            </span>

            {/* Active Dot */}
            <span className="mt-1 h-1 w-1 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
            </a>

            {/* Reflection */}
            <a
            href="#"
            className="flex flex-col items-center text-gray-400 opacity-60 transition-all duration-200 hover:text-violet-300 hover:opacity-100"
            >

            <span className="material-symbols-outlined">
                <MdSelfImprovement/>
            </span>

            <span className="mt-1 text-xs">
                Reflection
            </span>
            </a>
        </div>

        </nav>
 
    </>
  )
}

export default BottomNav