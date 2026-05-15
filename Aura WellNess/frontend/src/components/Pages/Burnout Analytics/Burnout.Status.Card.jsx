import React from 'react'

function BurnoutStatusCard() {
  return (
   <>

   <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_0_30px_rgba(255,255,255,0.04)] backdrop-blur-xl sm:p-6 lg:p-8">

  {/* Softer background glow (reduced intensity for balance) */}
  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-emerald-500/5 pointer-events-none" />

  {/* HEADER */}
  <div className="relative z-10 mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

    <div>
      <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
        Weekly Stress Equilibrium
      </h3>
      <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-gray-500 sm:text-xs">
        Real-time Biometric Analysis
      </p>
    </div>

    <span className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
      <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
      Optimal Flow
    </span>
  </div>

  {/* CHART */}
  <div className="relative z-10 h-52 w-full sm:h-60">

    {(() => {
      const graphHeight = 70;
      const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

      return (
        <>
          <svg
            className="h-full w-full"
            viewBox="0 0 800 200"
            fill="none"
          >
            {/* lighter grid (less visual weight) */}
            {[50, 100, 150].map((y) => (
              <line
                key={y}
                x1="0"
                y1={y}
                x2="800"
                y2={y}
                stroke="rgba(255,255,255,0.04)"
              />
            ))}

            <defs>
              <linearGradient id="waveGradient">
                <stop offset="0%" stopColor="#c4b5fd" />
                <stop offset="50%" stopColor="#d8b4fe" />
                <stop offset="100%" stopColor="#6ee7b7" />
              </linearGradient>
            </defs>

            {/* smoother, more centered wave */}
            <path
              d={`M0,120 Q200,${graphHeight} 400,110 T800,120`}
              stroke="url(#waveGradient)"
              strokeWidth="3"
              strokeLinecap="round"
            />

            <path
              d={`M0,120 Q200,${graphHeight} 400,110 T800,120 V200 H0 Z`}
              fill="url(#waveGradient)"
              fillOpacity="0.06"
            />

            {/* points */}
            <circle cx="200" cy={graphHeight} r="5" fill="#d8b4fe" />
            <circle cx="400" cy="110" r="5" fill="#c4b5fd" />
            <circle cx="600" cy="140" r="5" fill="#6ee7b7" />
          </svg>

          {/* DAYS */}
          <div className="mt-4 flex justify-between text-[11px] text-gray-500 sm:text-sm">
            {days.map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
        </>
      );
    })()}
  </div>

  {/* STATS */}
  <div className="relative z-10 mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">

    {cards.map((card, index) => (
      <div
        key={index}
        className="rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-md transition hover:border-white/20 hover:bg-white/10"
      >

        <p className="text-[11px] text-gray-400 sm:text-xs">
          {card.content}
        </p>

        <p className="mt-2 text-lg font-semibold text-white sm:text-xl">
          {card.quantity}
        </p>

      </div>
    ))}
  </div>

</section>
   
   </>
  )
}

export default BurnoutStatusCard