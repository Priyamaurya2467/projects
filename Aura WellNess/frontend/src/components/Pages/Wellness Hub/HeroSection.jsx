import React from 'react'

function HeroSection() {
  return (
    <>



        <section
  className="relative flex items-center h-[300px] px-12 mb-12 overflow-hidden rounded-3xl backdrop-blur-lg bg-white/5 border border-white/10 shadow-lg shadow-cyan-500/20"
>
  
 
  <div className="absolute inset-0 z-0">
    <img
      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtw_w9tUv7UIKiBdC5BId9BUVdGwYabM61tZoYQPbeT6tlFSDjm_CBvZfes02OrvUbwWdcC-nj4YdMKb48XyVx-SFXpBFhl_nitLNFxOHxxMQmN7HBnTCocxuh11qm1JR9mQOf-NJqsN5QMa5yWTf1lnzWCnMIltjBeboUgQBmbcxr8Ckw3voG6IFFi8LB_Co7rUrxxxiA1b8S7PPaHjjVOCyh3S6e9aiGn5ibaE9X_FADXS8LRY7j7r0ZGJllgXrkoA-UHThfaPo5"
      alt="Digital wellness background"
      className="w-full h-full object-cover opacity-20"
    />
  </div>

  
  <div className="relative z-10 max-w-2xl">

    <span
      className="block mb-4 text-sm font-semibold tracking-[0.25em] uppercase text-cyan-400"
    >
      AI-GUIDED RESTORATION
    </span>

    <h1 className="mb-4 text-5xl font-bold text-white leading-tight">
      Restore your cognitive balance.
    </h1>

    <p className="mb-8 text-lg text-gray-300 leading-relaxed">
      Personalized mental wellness paths powered by MindShield AI,
      designed specifically for the academic journey.
    </p>

    
    <div className="flex gap-4">

      <button
        className="px-8 py-3 font-bold text-white transition-all rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/30 hover:scale-105 active:scale-95"
      >
        Quick Zen
      </button>

      <button
        className="px-8 py-3 font-bold transition-all border rounded-full backdrop-blur-md bg-white/5 border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/10"
      >
        Daily Check-in
      </button>

    </div>
  </div>
</section>



    
    
    
    </>
  )
}

export default HeroSection