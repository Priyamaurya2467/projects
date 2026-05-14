import React from 'react'
import { MdPsychology, MdVerifiedUser } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

function Hero() {
  const navigate = useNavigate()
  return (
    <>
    <section className="relative flex min-h-[819px] flex-col items-center justify-between pt-12 pb-24 md:flex-row">
  
  {/* Left Content */}
  <div className="z-10 w-full text-left md:w-1/2">
    
    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
      <span className="material-symbols-outlined text-[18px] text-teal-300">
        <MdVerifiedUser/>
      </span>

      <span className="text-sm uppercase tracking-widest text-teal-300">
        Academic Sanctuary v2.0
      </span>
    </div>

    <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl">
      Your Digital Sanctuary for <br />
      <span className="font-medium text-purple-300">
        Academic Excellence
      </span>
    </h1>

    <p className="mb-10 max-w-lg text-lg leading-relaxed text-gray-400">
      Navigate the pressures of university life with AI-driven mental
      wellness support. Detect burnout early and regain your focus.
    </p>

    <div className="flex flex-wrap gap-4">
      
      <button className="rounded-full bg-purple-400 px-8 py-4 text-sm font-bold text-black shadow-[0_0_20px_rgba(202,193,237,0.3)] transition-transform hover:scale-105 active:scale-95" onClick={()=>navigate('/register')}>
        Begin Your Journey
      </button>

      <button className="rounded-full border border-teal-300/40 px-8 py-4 text-sm font-bold text-teal-300 backdrop-blur-md transition-all hover:bg-teal-300/5 active:scale-95">
        Talk to AI
      </button>

    </div>
  </div>

  {/* Right Visual Section */}
  <div className="relative mt-16 flex w-full items-center justify-center md:mt-0 md:w-1/2">
    
    {/* Glowing Orb */}
    <div className="absolute h-[300px] w-[300px] rounded-full bg-purple-500 blur-3xl opacity-40 animate-pulse"></div>

    <div className="relative h-[500px] w-full">
      
      {/* Main AI Sphere */}
      <div className="absolute left-1/2 top-1/2 flex h-64 w-64 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-2xl backdrop-blur-xl">
        
        <div className="absolute h-48 w-48 animate-pulse rounded-full bg-gradient-to-tr from-purple-400 to-pink-300 opacity-20"></div>

        <span
          className="material-symbols-outlined absolute text-[80px] text-purple-300"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          <MdPsychology/>
        </span>
      </div>

      {/* Floating Chart 1 */}
      <div
        className="absolute right-10 top-0 w-64 animate-bounce rounded-xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl"
        style={{ animationDuration: "4s" }}
      >
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm text-teal-300">
            Emotional Stability
          </span>

          <span className="material-symbols-outlined text-[16px] text-teal-300">
            show_chart
          </span>
        </div>

        <div className="flex h-16 w-full items-end gap-1">
          <div className="h-[60%] flex-1 rounded-t-sm bg-teal-300/40"></div>
          <div className="h-[80%] flex-1 rounded-t-sm bg-teal-300/60"></div>
          <div className="h-[50%] flex-1 rounded-t-sm bg-teal-300/40"></div>
          <div className="h-[95%] flex-1 rounded-t-sm bg-teal-300/80"></div>
          <div className="h-[70%] flex-1 rounded-t-sm bg-teal-300/50"></div>
        </div>
      </div>

      {/* Floating Chart 2 */}
      <div className="absolute bottom-10 left-0 w-72 rounded-xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
        
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm text-purple-300">
            Burnout Risk
          </span>

          <span className="text-sm text-gray-300">
            Low
          </span>
        </div>

        <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
          <div className="h-full w-[25%] rounded-full bg-purple-300 shadow-[0_0_10px_rgba(202,193,237,0.8)]"></div>
        </div>

        <p className="mt-4 text-[12px] leading-relaxed text-gray-400">
          Neural patterns indicate optimal cognitive recovery. Continue
          current focus blocks.
        </p>
      </div>

    </div>
  </div>

</section>
    
    </>
  )
}

export default Hero