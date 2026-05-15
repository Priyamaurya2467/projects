import React from 'react'

function CircularGauge({form}) {
  return (
    <>

    <div
  className="md:col-span-4 rounded-[32px] p-8
             flex flex-col items-center justify-between text-center
             backdrop-blur-xl bg-white/10 border border-white/10
             shadow-2xl shadow-emerald-400/20"
>

  <h3 className="text-3xl font-semibold text-white mb-8">
    Burnout Risk
  </h3>

  <div
    className="relative w-48 h-48 rounded-full
               bg-gradient-to-br from-emerald-400
               via-cyan-400 to-blue-500
               flex items-center justify-center p-4"
  >

    <div
      className="w-full h-full bg-slate-900 rounded-full
                 flex flex-col items-center justify-center"
    >
      <span className="text-5xl font-bold text-emerald-300">
        {form.sleep}
      </span>

      <span className="text-sm text-gray-300 uppercase tracking-wider">
        Low Risk
      </span>
    </div>

  </div>

  <p className="text-base text-gray-300 mt-8">
    You're in the safe zone. Productivity is sustainable for 6 more hours.
  </p>

</div>

        

    </>
  )
}

export default CircularGauge