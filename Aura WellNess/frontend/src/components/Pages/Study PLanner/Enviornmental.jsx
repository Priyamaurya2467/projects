import React from 'react'
import { MdCo2, MdDeviceThermostat, MdLightMode } from 'react-icons/md'

function Enviornmental() {
  return (
    <>

    <div className="rounded-[32px] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
  
  <h3 className="mb-6 text-2xl font-bold text-white">
    Eco-Focus Ambient
  </h3>

  <div className="space-y-6">

    {/* Temperature */}
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5">
        <span className="material-symbols-outlined text-emerald-300">
          <MdDeviceThermostat/>
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

    {/* Light */}
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

    {/* CO2 */}
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
    
    
    
    </>
  )
}

export default Enviornmental