import React from 'react'
import { MdBolt, MdCo2, MdLightMode, MdNature, MdPriorityHigh, MdTempleHindu, MdWaves } from 'react-icons/md'

function GridSlot() {
  return (
    <>

    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

  {/* LEFT COLUMN */}
  <div className="space-y-8 lg:col-span-2">

    {/* Circadian Schedule */}
    <div className="rounded-[32px] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">

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

        {/* Recovery */}
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
              <MdNature/>
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

  {/* RIGHT COLUMN */}
  <div className="space-y-8">

    {/* Critical Mission */}
    <div className="group relative overflow-hidden rounded-[32px] border border-emerald-300/40 bg-emerald-300/5 p-8 shadow-2xl backdrop-blur-xl">

      <div className="absolute right-0 top-0 p-4 opacity-10">
        <span className="material-symbols-outlined text-[120px]">
          <MdPriorityHigh/>
        </span>
      </div>

      <p className="mb-4 text-sm font-bold tracking-[0.25em] text-emerald-300">
        CRITICAL MISSION
      </p>

      <h3 className="mb-4 text-2xl font-bold text-white">
        Solve Calculus Field Equations
      </h3>

      <p className="mb-6 text-gray-400">
        Placed at 09:15 AM: Your cognitive peak.
        Will require 100% pre-frontal cortex capacity.
      </p>

      <button className="w-full rounded-2xl bg-emerald-300 py-4 font-bold text-black transition-all hover:brightness-110 active:scale-95">
        Prepare Session
      </button>
    </div>

    {/* Eco Ambient */}
    <div className="rounded-[32px] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">

      <h3 className="mb-6 text-2xl font-bold text-white">
        Eco-Focus Ambient
      </h3>

      <div className="space-y-6">

        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5">
            <span className="material-symbols-outlined text-emerald-300">
              <MdTempleHindu/>
            </span>
          </div>

          <div>
            <p className="font-bold text-white">
              Room Temp: 19°C
            </p>

            <p className="text-xs text-gray-400">
              Ideal for mental alertness.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5">
            <span className="material-symbols-outlined text-purple-300">
              <MdLightMode/>
            </span>
          </div>

          <div>
            <p className="font-bold text-white">
              Lux Level: 450
            </p>

            <p className="text-xs text-gray-400">
              Suppressing melatonin production.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5">
            <span className="material-symbols-outlined text-cyan-200">
              <MdCo2/>
            </span>
          </div>

          <div>
            <p className="font-bold text-white">
              CO2: 600ppm
            </p>

            <p className="text-xs text-gray-400">
              Fresh air optimal for focus.
            </p>
          </div>
        </div>

      </div>
    </div>

    {/* Workspace Image */}
    <div className="group relative h-48 overflow-hidden rounded-[32px]">

      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBh_Mz5Ub37ZAQreu6HDKWBT3HAsK8wIp0QKmxMQawWAb77R3Nu_cGY65cYCdiXyunSChP2sXwux0nwyqxoVJtVEqCFM9dRRigdLVl4hTMwrNvCV4z3fwxj2I8LX_NG3g0u7KV4Gsu3nnxpJ6MXBAeC2Ey7xFSMjR-Mp_53NiFSW6eZ9g88jQRH2TlkNvyMYQNo2zVxOdrrrxj9Sr7PSivtK5Nj7RjNWJhWPmwNzpQeVpOdeX2s6Ne-hq4J_dv2X6fJLks-Q9e2nVbb"
        alt="Zen Workspace"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

      <div className="absolute bottom-4 left-4">
        <p className="font-bold text-white">
          Zen Workspace
        </p>

        <p className="text-xs text-gray-300">
          Active Calibration
        </p>
      </div>

    </div>

  </div>
</div>


    
    </>
  )
}

export default GridSlot