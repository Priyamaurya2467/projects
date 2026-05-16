import React from 'react'
import { MdSentimentDissatisfied, MdSentimentNeutral, MdSentimentSatisfied, MdSentimentVerySatisfied } from 'react-icons/md'

function MoodCheckin() {
  return (
    <>


    <section className="col-span-12 lg:col-span-4 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(255,255,255,0.05)] flex flex-col justify-between">

  {/* HEADER */}
        <div>
                <h2 className="mb-6 text-2xl font-bold text-violet-300">
                Quick Check-in
                </h2>

                <p className="mb-8 text-gray-400">
                How is your mental space feeling right now?
                </p>
        </div>

  {/* MOOD GRID */}
        <div className="grid grid-cols-2 gap-4">

                {/* RADIANT */}
                <button className="group flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10">

                <span className="material-symbols-outlined text-3xl text-emerald-400 transition-transform group-hover:scale-110">
                    <MdSentimentVerySatisfied/>
                </span>

                <span className="text-sm font-medium text-white">
                    Radiant
                </span>
                </button>

                {/* FOCUSED */}
                <button className="group flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10">

                <span className="material-symbols-outlined text-3xl text-cyan-400 transition-transform group-hover:scale-110">
                    <MdSentimentSatisfied/>
                </span>

                <span className="text-sm font-medium text-white">
                    Focused
                </span>
                </button>

                {/* STEADY */}
                <button className="group flex flex-col items-center gap-2 rounded-2xl border border-violet-400/30 bg-violet-500/10 p-4 transition-all hover:bg-violet-500/15">

                <span className="material-symbols-outlined text-3xl text-violet-300 transition-transform group-hover:scale-110">
                    <MdSentimentNeutral/>
                </span>

                <span className="text-sm font-medium text-white">
                    Steady
                </span>
                </button>

                {/* TIRED */}
                <button className="group flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10">

                <span className="material-symbols-outlined text-3xl text-gray-400 transition-transform group-hover:scale-110">
                    <MdSentimentDissatisfied/>
                </span>

                <span className="text-sm font-medium text-white">
                    Tired
                </span>
                </button>

        </div>


    </section>


    
    
    </>
  )
}

export default MoodCheckin