import React from 'react'
import { MdPriorityHigh } from 'react-icons/md'

function TaskSlot() {
  return (
    <>
    
    <div className="group relative overflow-hidden rounded-[32px] border border-emerald-300/40 bg-emerald-300/5 p-8 shadow-2xl backdrop-blur-xl">

  {/* Background Icon */}
  <div className="absolute right-0 top-0 p-4 opacity-10">
    <span className="material-symbols-outlined text-[120px]">
      <MdPriorityHigh/>
    </span>
  </div>

  {/* Content */}
  <p className="mb-4 text-sm font-bold tracking-[0.25em] text-emerald-300">
    CRITICAL MISSION
  </p>

  <h3 className="mb-4 text-2xl font-bold text-white">
    Solve Calculus Field Equations
  </h3>

  <p className="mb-6 text-gray-400">
    Placed at 09:15 AM: Your cognitive peak. Will require
    100% pre-frontal cortex capacity.
  </p>

  {/* Button */}
  <button className="w-full rounded-2xl bg-emerald-300 py-4 font-bold text-black transition-all hover:brightness-110 active:scale-95">
    Practise Session
  </button>
</div>
    
    </>
  )
}

export default TaskSlot