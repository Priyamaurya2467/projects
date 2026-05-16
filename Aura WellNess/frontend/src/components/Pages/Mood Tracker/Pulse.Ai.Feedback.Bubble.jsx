import React from 'react'
import { MdSmartToy } from 'react-icons/md'

function PulseAiFeedbackBubble() {
  return (
    <>

    <div className="fixed bottom-10 right-10 z-50">

        <div className="relative max-w-sm overflow-hidden rounded-3xl border border-violet-400/20 bg-white/5 p-6 shadow-[0_0_40px_rgba(167,139,250,0.15)] backdrop-blur-xl">

            {/* Animated Glow */}
            <div className="absolute inset-0 animate-pulse bg-violet-400/5" />

            {/* CONTENT */}
            <div className="relative flex gap-4">

            {/* ICON */}
            <span className="material-symbols-outlined text-3xl text-violet-300">
                <MdSmartToy/>
            </span>

            {/* TEXT */}
            <div>

                <p className="mb-2 text-base font-bold text-violet-300">
                MindShield Insight
                </p>

                <p className="text-sm leading-relaxed text-gray-300">
                You've reached your focus peak for the afternoon.
                AI suggests taking a 15-minute screen break
                to maintain cognitive agility.
                </p>
            </div>
            </div>

        </div>

    </div>
    
    
    </>
  )
}

export default PulseAiFeedbackBubble