import React from 'react'

function DailyFocusOverview() {
    const cards = [
        {
            status: "COMPLETED",
            level: "04",
            total: "/06",
            caption: "Study Modules"

        },

         {
            status: "TIME SPENT",
            level: "128",
            total: "min",
            caption: "Deep Focus"

        },



    ]
  return (
    <>

     <section className="group relative col-span-12 overflow-hidden rounded-3xl border border-white/10 bg-black/30 p-8 shadow-lg shadow-violet-500/5 backdrop-blur-xl lg:col-span-8">

            {/* CONTENT */}
            <div className="relative z-10">

                {/* HEADER */}
                <header className="mb-8 flex items-start justify-between">

                    <div>
                        <h2 className="mb-1 text-3xl font-bold text-violet-400">
                        Daily Focus
                        </h2>

                        <p className="text-gray-400">
                        Your cognitive load is optimal today.
                        Aim for 3 deep sessions.
                        </p>
                    </div>

                    <span
                        className="material-symbols-outlined text-4xl text-emerald-400"
                        style={{
                        fontVariationSettings:
                            "'FILL' 1",
                        }}>
                        bolt
                    </span>

                </header>

                {/* STATS */}
                <div className="mb-8 flex gap-4">

                {/* CARD  */}

                {cards.map((cards , index)=>(
                    <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-6" key={index}>

                    <span className="mb-2 block text-xs font-semibold tracking-[0.2em] text-emerald-300">
                            {cards.status}
                    </span>

                    <div className="text-5xl font-bold text-white">
                            {cards.level}
                    <span className="text-2xl opacity-40">
                            {cards.level}
                    </span>
                    </div>

                    <p className="mt-2 text-gray-400">
                            {cards.caption}
                    </p>
                </div>

                ))}
               

              
                </div>

                {/* PROGRESS BAR */}
                <div className="h-3 w-full overflow-hidden rounded-full bg-white/10">

                <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-violet-500 to-emerald-400 shadow-[0_0_15px_rgba(139,92,246,0.5)]" />
                </div>
            </div>

            {/* BACKGROUND GLOW */}
            <div className="absolute right-[-10%] top-[-20%] h-64 w-64 rounded-full bg-violet-500/10 blur-[100px] transition-transform duration-700 group-hover:scale-110" />
            </section>
                
    
    </>
  )
}

export default DailyFocusOverview