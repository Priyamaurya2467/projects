import React from 'react'

function Burnoutrisklevel() {
  return (
    <>


    <section className="col-span-12 lg:col-span-4 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(255,255,255,0.05)]">

            {/* HEADER */}
        <header className="mb-10 flex items-center justify-between">

            <h2 className="text-2xl font-bold text-violet-300">
            Burnout Risk
            </h2>

            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-sm font-semibold text-emerald-300">
            LOW RISK
            </span>
        </header>

            {/* METRICS */}
        <div className="space-y-6">

            {/* SLEEP QUALITY */}
            <div className="space-y-2">

            <div className="flex justify-between text-sm">

                <span className="uppercase tracking-wider text-gray-400">
                Sleep Quality
                </span>

                <span className="text-emerald-400">
                85%
                </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-white/5">

                <div className="h-full w-[85%] rounded-full bg-emerald-400" />
            </div>
            </div>

            {/* WORKLOAD */}
            <div className="space-y-2">

            <div className="flex justify-between text-sm">

                <span className="uppercase tracking-wider text-gray-400">
                Workload
                </span>

                <span className="text-cyan-400">
                42%
                </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-white/5">

                <div className="h-full w-[42%] rounded-full bg-cyan-400" />
            </div>
            </div>

            {/* SOCIAL BATTERY */}
            <div className="space-y-2">

            <div className="flex justify-between text-sm">

                <span className="uppercase tracking-wider text-gray-400">
                Social Battery
                </span>

                <span className="text-violet-300">
                68%
                </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-white/5">

                <div className="h-full w-[68%] rounded-full bg-violet-400" />
            </div>
            </div>
        </div>

             {/* Footer */}
        <div className="mt-8 border-t border-white/10 pt-8">

            <p className="leading-relaxed italic text-gray-400">
            "Your rest patterns are stabilizing. AI suggests a light reading session tonight."
            </p>
        </div>
</section>
    
    </>
  )
}

export default Burnoutrisklevel