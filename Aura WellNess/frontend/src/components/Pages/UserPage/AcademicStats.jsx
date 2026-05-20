import React from 'react'
import { MdSchedule , MdHub , MdCheckCircle , MdRadioButtonUnchecked } from 'react-icons/md'
function AcademicStats() {
  return (
    <>

    <div className="flex flex-col gap-8 lg:col-span-4">

      {/* Vital Resonance */}
      <div className="space-y-6 rounded-3xl border border-emerald-400/10 bg-white/5 p-6 shadow-[0_0_40px_rgba(16,185,129,0.08)] backdrop-blur-xl sm:p-8">

        <h3 className="text-2xl font-bold text-violet-300">
          Vital Resonance
        </h3>

        <div className="space-y-8">

          {/* Progress */}
          <div>

            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
                Resilience Score
              </span>

              <span className="text-sm font-medium text-emerald-300">
                88%
              </span>
            </div>

            <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">

              <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-emerald-400 to-violet-400 shadow-[0_0_12px_rgba(16,185,129,0.4)]"></div>

            </div>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

            {/* Focus Hours */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">

              <MdSchedule className="mb-3 text-3xl text-emerald-300" />

              <p className="text-3xl font-bold text-white">
                142
              </p>

              <p className="mt-1 text-sm text-gray-400">
                Focus Hours
              </p>
            </div>

            {/* Community */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">

              <MdHub className="mb-3 text-3xl text-violet-300" />

              <p className="text-3xl font-bold text-white">
                9.4
              </p>

              <p className="mt-1 text-sm text-gray-400">
                Community
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Goals */}
      <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">

        <h3 className="text-2xl font-bold text-violet-300">
          MindShield Goals
        </h3>

        <ul className="space-y-5">

          {/* Goal 1 */}
          <li className="group flex items-center gap-3">

            <MdCheckCircle className="text-2xl text-emerald-300 transition-transform group-hover:scale-110" />

            <span className="text-gray-300">
              Reduce Finals Stress
            </span>
          </li>

          {/* Goal 2 */}
          <li className="group flex items-center gap-3">

            <MdRadioButtonUnchecked className="text-2xl text-gray-500 transition-transform group-hover:scale-110" />

            <span className="text-gray-300">
              Improve Circadian Alignment
            </span>
          </li>

          {/* Goal 3 */}
          <li className="group flex items-center gap-3">

            <MdRadioButtonUnchecked className="text-2xl text-gray-500 transition-transform group-hover:scale-110" />

            <span className="text-gray-300">
              Neuro-Linguistic Depth
            </span>
          </li>
        </ul>
      </div>
    </div>
   
    </>
  )
}

export default AcademicStats