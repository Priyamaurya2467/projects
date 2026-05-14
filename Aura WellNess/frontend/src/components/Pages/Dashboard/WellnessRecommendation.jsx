import React from 'react'
import {
  MdSelfImprovement,
  MdSpa,
  MdWaterDrop
} from 'react-icons/md'

function WellnessRecommendation() {

  const Suggestions = [
    {
      image: <MdSpa />,
      heading: "Micro-Meditation",
      content:
        "A 3-minute breath session is recommended to sustain your current focus level.",
      button: "Start Session"
    },

    {
      image: <MdWaterDrop />,
      heading: "Hydration Alert",
      content:
        "MindShield AI noticed a drop in your cognitive speed. Drink 250ml of water.",
      button: "Log Intake"
    },

    {
      image: <MdSelfImprovement />,
      heading: "Posture Check",
      content:
        "Your spinal alignment has shifted slightly. Stretch for 60 seconds.",
      button: "View Stretch"
    }
  ]

  return (

    <div className="w-full py-6">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {Suggestions.map((suggest, index) => (

          <div
            key={index}
            className="w-full min-w-0 rounded-3xl p-6 backdrop-blur-xl bg-white/10 border border-white/10 shadow-2xl hover:scale-[1.02] transition-all duration-300"
          >

            {/* ICON */}
            <div className="w-14 h-14 rounded-2xl bg-cyan-400/20 flex items-center justify-center mb-5">

              <span className="text-cyan-300 text-3xl">
                {suggest.image}
              </span>

            </div>

            {/* TITLE */}
            <h4 className="text-2xl font-bold text-white mb-3 break-words">
              {suggest.heading}
            </h4>

            {/* CONTENT */}
            <p className="text-gray-300 leading-8 text-base break-words">
              {suggest.content}
            </p>

            {/* BUTTON */}
            <button
              className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:opacity-90 transition-all"
            >
              {suggest.button}
            </button>

          </div>

        ))}

      </div>

    </div>
  )
}

export default WellnessRecommendation