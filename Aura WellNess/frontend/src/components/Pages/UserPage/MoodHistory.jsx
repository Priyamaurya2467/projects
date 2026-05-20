import React from 'react'

function MoodHistory() {

    const chartData = [
    { day: "Mon", height: "60%", color: "bg-violet-400/20 hover:bg-violet-400/40" },
    { day: "Tue", height: "85%", color: "bg-emerald-400/20 hover:bg-emerald-400/40" },
    { day: "Wed", height: "45%", color: "bg-violet-400/20 hover:bg-violet-400/40" },
    { day: "Thu", height: "70%", color: "bg-emerald-400/20 hover:bg-emerald-400/40" },
    { day: "Fri", height: "95%", color: "bg-violet-400/20 hover:bg-violet-400/40" },
    { day: "Sat", height: "55%", color: "bg-emerald-400/20 hover:bg-emerald-400/40" },
    { day: "Sun", height: "40%", color: "bg-violet-400/20 hover:bg-violet-400/40" },
  ];
  
  return (
    <>
  

    <div className="relative h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_40px_rgba(255,255,255,0.04)] backdrop-blur-xl sm:p-8">

      {/* Header */}
      <div className="relative z-10 mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <h3 className="text-2xl font-bold text-violet-300">
          Cognitive Load & Mood Flow
        </h3>

        {/* Tabs */}
        <div className="flex gap-2">

          <span className="rounded-full bg-emerald-400/10 px-4 py-1 text-sm text-emerald-300">
            7 Days
          </span>

          <span className="rounded-full bg-white/5 px-4 py-1 text-sm text-gray-400">
            30 Days
          </span>
        </div>
      </div>

      {/* Bars */}
      <div className="absolute inset-x-6 bottom-14 flex h-52 items-end justify-between sm:inset-x-8">

        {chartData.map((item, index) => (
          <div
            key={index}
            className={`group relative w-8 rounded-t-2xl transition-all duration-300 sm:w-12 ${item.color}`}
            style={{
              height: item.height,
            }}
          >

            {/* Tooltip */}
            <div className="absolute -top-9 left-1/2 -translate-x-1/2 rounded-md bg-black/80 px-2 py-1 text-[10px] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">

              {item.day}
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Wave */}
      <svg
        className="absolute bottom-12 left-0 w-full opacity-30"
        height="100"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >

        <defs>
          <linearGradient
            id="gradient"
            x1="0%"
            x2="100%"
            y1="0%"
            y2="0%"
          >
            <stop
              offset="0%"
              stopColor="#c4b5fd"
              stopOpacity="1"
            />

            <stop
              offset="100%"
              stopColor="#6ee7b7"
              stopOpacity="1"
            />
          </linearGradient>
        </defs>

        <path
          d="M0,50 C200,10 400,90 600,50 C800,10 1000,90 1200,50 L1440,50"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="3"
        />
      </svg>

    </div>

    </>
  
  )
}

export default MoodHistory