import React from 'react'
import { MdBedtime, MdWaves, MdWbSunny } from 'react-icons/md'

function DailyVisualisation() {
  return (
    <>


    <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl mb-8">
         <div className="mb-8 flex items-end justify-between">
            <div>
                <h3 className="mb-1 text-3xl font-bold text-purple-300">
                    Daily Rhythm
                </h3>

                <p className="text-sm tracking-widest text-gray-400">
                    CIRCADIAN BIOMARKER TRACKING
                </p>
             </div>

          <div className="text-right">
            <span className="text-3xl font-bold text-emerald-300">88%</span>

                <p className="text-sm tracking-widest text-gray-400">
                    ALIGNMENT SCORE
                </p>
          </div>

         </div>

         <div className="relative h-64 w-full">
            {/* SVG Rhythm Wave */}
            <svg className="h-full w-full" viewBox="0 0 1000 200">
                <defs>
                    <linearGradient
                    id="waveGradient"
                    x1="0%"
                    x2="100%"
                    y1="0%"
                    y2="0%"
                    >
                    <stop offset="0%" stopColor="#cac1ed" stopOpacity="0.2" />
                    <stop offset="20%" stopColor="#cac1ed" stopOpacity="1" />
                    <stop offset="50%" stopColor="#89d5ba" stopOpacity="1" />
                    <stop offset="80%" stopColor="#cac1ed" stopOpacity="1" />
                    <stop offset="100%" stopColor="#cac1ed" stopOpacity="0.2" />
                    </linearGradient>
                </defs>

                <path
                    d="M0,100 C150,20 250,180 400,100 C550,20 650,180 800,100 C950,20 1000,100 L1000,200 L0,200 Z"
                    fill="url(#waveGradient)"
                    fillOpacity="0.1"
                />

                <path
                    d="M0,100 C150,20 250,180 400,100 C550,20 650,180 800,100 C950,20 1000,100"
                    fill="none"
                    stroke="url(#waveGradient)"
                    strokeWidth="3"
                    className="animate-pulse"
                />

                 {/* Time Markers */}
                <circle
                    cx="200"
                    cy="45"
                    r="6"
                    fill="#cac1ed"
                    className="animate-pulse"
                />

                <circle
                    cx="530"
                    cy="55"
                    r="6"
                    fill="#89d5ba"
                />
             </svg>

             {/* Time Overlay */}
                <div className="absolute bottom-0 flex w-full justify-between px-2 text-sm text-gray-400 opacity-60">
                    <span>06:00</span>
                    <span>09:00</span>
                    <span>12:00</span>
                    <span>15:00</span>
                    <span>18:00</span>
                    <span>21:00</span>
                    <span>00:00</span>
                </div>
        </div>

              {/* Annotation Cards */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex items-start gap-3 rounded-2xl bg-white/5 p-4">
            <span className="material-symbols-outlined text-emerald-300">
                <MdWbSunny/>
            </span>

            <div>
                <p className="font-bold text-white">Morning Peak</p>

                <p className="text-sm text-gray-400">
                Optimal for logical reasoning & rapid learning.
                </p>
            </div>
            </div>

        <div className="flex items-start gap-3 rounded-2xl bg-white/5 p-4">
        <span className="material-symbols-outlined text-purple-300">
            <MdWaves/>
        </span>

        <div>
            <p className="font-bold text-white">Oceanic Focus</p>

            <p className="text-sm text-gray-400">
            Ideal for deep creative immersion.
            </p>
        </div>
        </div>

        <div className="flex items-start gap-3 rounded-2xl bg-white/5 p-4">
            <span className="material-symbols-outlined text-indigo-200">
                <MdBedtime/>
            </span>

        <div>
            <p className="font-bold text-white">Wind Down</p>

            <p className="text-sm text-gray-400">
            Best for consolidation and review.
            </p>
        </div>

        </div>
    </div>
    </section>
    
    
    </>
  )
}

export default DailyVisualisation