import React from 'react'
import { MdPause, MdPlayArrow, MdSkipNext, MdWaterDrop } from 'react-icons/md'

function MusicSection() {
  return (
    <>

<div
  class="flex flex-col p-8 rounded-3xl backdrop-blur-lg bg-white/5 border border-white/10 shadow-lg shadow-cyan-500/10"
>

 
  <h3 className="mb-2 text-2xl font-bold text-white">
    Deep Work Music
  </h3>

  <p className="mb-6 text-gray-400">
    Generative lo-fi beats designed to sustain flow state.
  </p>


  <div className="flex-grow space-y-4">


    <div
      className="flex items-center gap-4 p-4 transition-all border rounded-2xl cursor-pointer bg-white/5 border-white/5 hover:border-cyan-400/40 hover:bg-white/10"
    >

      <div
        className="flex items-center justify-center w-12 h-12 rounded-lg bg-cyan-500/20"
      >
        <span className="material-symbols-outlined text-cyan-400">
          equalizer
        </span>
      </div>

      <div className="flex-grow">
        <p className="leading-none text-white font-medium">
          Neural Focus
        </p>

        <p className="mt-1 text-xs text-gray-400">
          Binaural Beats • 64 bpm
        </p>
      </div>

      <span className="material-symbols-outlined text-gray-400">
        <MdPlayArrow/>
      </span>
    </div>

    
    <div
      className="flex items-center gap-4 p-4 transition-all border rounded-2xl cursor-pointer bg-white/5 border-white/5 hover:border-emerald-400/40 hover:bg-white/10"
    >

      <div
        className="flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-500/20"
      >
        <span className="material-symbols-outlined text-emerald-400">
          <MdWaterDrop/>
        </span>
      </div>

      <div className="flex-grow">
        <p className="leading-none text-white font-medium">
          Zen Rain
        </p>

        <p className="mt-1 text-xs text-gray-400">
          Ambient Nature • 0 bpm
        </p>
      </div>

      <span className="material-symbols-outlined text-gray-400">
        <MdPlayArrow/>
      </span>
    </div>


    <div
      className="flex items-center gap-4 p-4 transition-all border rounded-2xl cursor-pointer bg-white/5 border-white/5 hover:border-purple-400/40 hover:bg-white/10"
    >

      <div
        className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-500/20"
      >
        <span className="material-symbols-outlined text-purple-400">
          nightlight
        </span>
      </div>

      <div className="flex-grow">
        <p className="leading-none text-white font-medium">
          Midnight Code
        </p>

        <p className="mt-1 text-xs text-gray-400">
          Dark Lo-Fi • 72 bpm
        </p>
      </div>

      <span className="material-symbols-outlined text-gray-400">
        <MdPlayArrow/>
      </span>
    </div>

  </div>

  <div
    className="flex items-center justify-between pt-6 mt-8 border-t border-white/10"
  >

  
    <div className="flex items-center gap-3">

      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBg4G42aGVCpVirTFimxFLrKipP7AzHFgcN5kcDuQ9CX1VbMZZ7BgEasooDaiG0PiKhG5YpAfnGsECaW0_mnhALAvqY874Fps9CXzHT54VjomB2mXRhl-ucemaLRPKw9bOu13l3TjnyW3z9GJtmg_aQ9uh8g0OIFQuj_StAeypmMny3zsxj7YdRpvjWbv4cioiZRxElHSXXRO4CZwZBOI-VM-FqTayg77PBW6yk6E61hCfCbk5QyY_OqJ-W8T_pXPjUsJc5lvBlwASm"
        alt="Music artwork"
        className="object-cover w-10 h-10 rounded-full"
      />

      <div className="text-sm">
        <p className="font-medium text-white">
          Currently Playing
        </p>

        <p className="text-xs text-gray-400">
          Neural Focus
        </p>
      </div>
    </div>

    
    <div className="flex gap-2">

      <span
        className="material-symbols-outlined cursor-pointer text-cyan-400 hover:scale-110 transition-transform"
      >
        <MdSkipNext/>
      </span>

      <span
        className="material-symbols-outlined cursor-pointer text-cyan-400 hover:scale-110 transition-transform"
      >
        <MdPause/>
      </span>

    </div>
  </div>
</div>

    </>
  )
}

export default MusicSection