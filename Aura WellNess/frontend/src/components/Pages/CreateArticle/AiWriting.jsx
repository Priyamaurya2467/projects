import React from 'react'
import { MdAutoAwesomeMotion, MdLightbulb } from 'react-icons/md'

function AiWriting() {
  return (
    <>

            {/* Sidebar */}
        <aside className="flex flex-col gap-6 lg:col-span-4">

        {/* AI Insight Panel */}
        <div className="rounded-2xl border border-emerald-400/10 bg-white/5 p-6 shadow-xl backdrop-blur-xl">

            {/* Header */}
            <div className="mb-6 flex items-center gap-4">

            {/* Icon */}
            <div className='flex h-11 w-11 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.25)]'>

                <span 
                    className='material-symbols-outlined'
                    style={{fontVariationSettings: "'FILL' 1"}}
                >
                    <MdAutoAwesomeMotion/>
                </span>

            </div>


            {/* Title */}
            <div>
                <h3 className="text-lg font-semibold text-white">
                AI Writing Insights
                </h3>

                <p className="text-sm text-emerald-300">
                Real-time Analysis Active
                </p>
            </div>
            </div>

            {/* Insights */}
            <div className="space-y-5">

            {/* Card 1 */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-emerald-400/20 hover:bg-white/10">

                <div className="mb-3 flex items-center justify-between">

                <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
                    Tone Analysis
                </span>

                <span className="rounded-md bg-emerald-400/10 px-2 py-0.5 text-[10px] text-emerald-300">
                    Optimal
                </span>
                </div>

                <p className="text-sm italic leading-relaxed text-gray-300">
                "Your tone is currently reflective and grounded.
                This aligns well with your Mood Flow data from
                earlier today."
                </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-violet-400/20 hover:bg-white/10">

                <div className="mb-3 flex items-center justify-between">

                <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
                    Focus Tip
                </span>

                <span className="material-symbols-outlined text-violet-300">
                    <MdLightbulb/>
                </span>
                </div>

                <p className="text-sm leading-relaxed text-gray-300">
                Try reducing complex sentence structures in the
                third paragraph to maintain a Deep Focus
                readability score.
                </p>
            </div>

            {/* Progress */}
            <div className="border-t border-white/10 pt-5">

                <div className="mb-3 flex items-center justify-between">

                <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
                    Cognitive Resonance
                </span>

                <span className="text-sm font-medium text-emerald-300">
                    84%
                </span>
                </div>

                {/* Progress Bar */}
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">

                <div className="h-full w-[84%] rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.5)]"></div>
                </div>
            </div>
            </div>
        </div>

        {/* Inspiration Image Card */}
        <div className="group relative h-56 cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-xl">

            <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUH4oqREJLqwfkuxiIeIPMbvU7JhGBheOm3BQZpEq2NRalXSivdga6Gx7ofK1H6x6ouRrDjLBcoDDRq7M9RzVXnvlQ6HdBSNu8ly9fWlWaBqSO0YnzHasJefAgBh6fqAnz1KmC4xrh2ar9ZU4LrJFH8rvsC7VvRIIcDFIut47lWs9K7VGbEkVPDsXJTgmpsfSvV2oWFxYSFa6kRzfbn8fcBXbuogBSM2k8DJT8hnVYKLLYL9ys7nkgZyAusdQFgA3kqOL7hgG_yLgf"
            alt="Inspiration Flow"
            className="h-full w-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            {/* Label */}
            <div className="absolute bottom-5 left-5">

            <span className="text-xs uppercase tracking-[0.25em] text-violet-300">
                Inspiration Flow
            </span>
            </div>
        </div>
        </aside>
    
    
    </>
  )
}

export default AiWriting