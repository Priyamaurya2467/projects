import React from 'react'
import { MdBolt, MdNaturePeople, MdWaves } from 'react-icons/md'

function AiReommendation() {
  return (
    <>

    <div className="space-y-8 lg:col-span-2">
  <div className="rounded-[32px] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
    
    {/* Header */}
    <div className="mb-6 flex items-center justify-between">
      <h3 className="text-2xl font-bold text-white">
        Circadian Schedule
      </h3>

      <span className="rounded-full bg-emerald-300/20 px-3 py-1 text-sm font-medium text-emerald-200">
        AI OPTIMIZED
      </span>
    </div>

    <div className="space-y-4">

      {/* Peak Session */}
      <div className="relative border-l-2 border-emerald-300/30 py-2 pl-8">
        <div className="absolute -left-[9px] top-4 h-4 w-4 rounded-full bg-emerald-300 shadow-[0_0_20px_rgba(110,231,183,0.8)]" />

        <div className="flex items-start justify-between rounded-2xl border border-emerald-300/20 bg-emerald-300/5 p-5">
          <div>
            <p className="mb-1 text-sm text-emerald-300">
              09:00 - 11:30 • HIGH ENERGY PEAK
            </p>

            <h4 className="mb-2 text-xl font-semibold text-white">
              Advanced Neuro-Linguistics
            </h4>

            <p className="text-gray-400">
              Core learning block. High dopamine availability detected.
            </p>
          </div>

          <span
            className="material-symbols-outlined text-emerald-300"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            <MdBolt/>
          </span>
        </div>
      </div>

      {/* Recovery Break */}
      <div className="relative border-l-2 border-white/10 py-2 pl-8">
        <div className="absolute -left-[9px] top-4 h-4 w-4 rounded-full bg-gray-500/40" />

        <div className="flex items-center justify-between rounded-2xl bg-white/5 p-4 opacity-80">
          <div>
            <p className="text-sm text-gray-400">
              11:30 - 12:15 • RECOVERY
            </p>

            <p className="text-white">
              Forest Walk & Hydration
            </p>
          </div>

          <span className="material-symbols-outlined text-gray-400">
            <MdNaturePeople/>
          </span>
        </div>
      </div>

      {/* Oceanic Focus */}
      <div className="relative border-l-2 border-purple-300/30 py-2 pl-8">
        <div className="absolute -left-[9px] top-4 h-4 w-4 rounded-full bg-purple-300 shadow-[0_0_20px_rgba(196,181,253,0.8)]" />

        <div className="flex items-start justify-between rounded-2xl border border-purple-300/20 bg-purple-300/5 p-5">
          <div>
            <p className="mb-1 text-sm text-purple-300">
              14:00 - 16:00 • OCEANIC FOCUS
            </p>

            <h4 className="mb-2 text-xl font-semibold text-white">
              Thesis Synthesis
            </h4>

            <p className="text-gray-400">
              Low-distraction creative flow. Gamma wave stimulation active.
            </p>
          </div>

          <span className="material-symbols-outlined text-purple-300">
            <MdWaves/>
          </span>
        </div>
      </div>

    </div>
  </div>
</div>
    
    
    
    </>
  )
}

export default AiReommendation