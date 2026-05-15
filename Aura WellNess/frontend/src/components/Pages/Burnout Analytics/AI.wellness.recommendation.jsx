import React from 'react'
import { MdAutoAwesome } from "react-icons/md";
function AIwellnessRecommendation() {
  return (
    <>

   

<section
  className="flex flex-col items-center gap-10 rounded-3xl border border-violet-400/20 bg-white/5 p-8 shadow-[0_0_40px_rgba(167,139,250,0.15)] backdrop-blur-xl lg:col-span-12 md:flex-row">

  
  <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-2xl md:w-1/3">
    <img
      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe_HtFR-h4nskl1YgD-YVOAIUk4QWNlGhVwgoi6JgtBIz4FQzPIu-6yq3gbeF0HbOCMA1a0RRDciWeoB42XqTtYZch4yFVG1o9_qOkGE5dNs5dHQ5eJ8v4nsgrXyALVtbhtgAhRJlLiFVtQBw5oaO8OKsFKLTjPmHZHRhjfEeDtWAMQ45M1wmyU79l7VPuQZme1L0fJNf9zC93QaLPH3E8rEWz-DCPco6Kk3o4tWfKZx2NGjTWGojYzvYhtiz9QTPZ8TDWpLnRIPS3"
      alt="Meditation scene"
      className="h-full w-full object-cover"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">

    {/* Badge */}
    <div className="absolute bottom-6 left-6">
      <span
        className="rounded-full border border-violet-400/30 bg-violet-400/20 px-3 py-1 text-sm text-violet-300 backdrop-blur-md"
      >
        AI Insight
      </span>
    </div>
    </div>

  {/* Content */}
  <div className="flex-1">
    <div className="mb-6">
      {/* Title */}
      <div className="mb-2 flex items-center gap-2 text-violet-300">
        <MdAutoAwesome className="text-2xl" />

        <h4 className="text-3xl font-bold text-white">
          MindShield AI Recommendation
        </h4>
      </div>

      {/* Text */}
      <p className="leading-relaxed text-gray-300 md:text-lg">
        "Based on your recent workload and biometric markers, your
        sympathetic nervous system has been dominant for 72 hours.
        To maintain cognitive performance, we recommend a{" "}
        <strong className="text-white">
          Digital Sabbatical
        </strong>{" "}
        this evening starting at 8:00 PM. Your sleep quality
        typically increases by 14% after these sessions."
      </p>
    </div>

    {/* Buttons */}
    <div className="flex flex-wrap gap-4">
      <button
        className="rounded-xl bg-violet-400 px-8 py-4 font-bold text-black shadow-lg shadow-violet-400/20 transition-all hover:scale-105"
      >
        Accept Sabbatical
      </button>

      <button
        className="rounded-xl border border-white/10 px-8 py-4 font-bold text-white transition-all hover:bg-white/5"
      >
        View Scientific Logic
      </button>
    </div>
  </div>
  </div>
</section>
    
    </>
  )
}

export default AIwellnessRecommendation