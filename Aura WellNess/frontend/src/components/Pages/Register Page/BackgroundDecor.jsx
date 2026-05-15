import React from 'react'
import { MdPsychology, MdSpa } from 'react-icons/md'

function BackgroundDetail() {
  return (
    <>

    <div className="fixed top-20 left-[10%] opacity-20 pointer-events-none animate-bounce">
             <span className="material-symbols-outlined text-[120px] text-cyan-400">
                 <MdSpa/>
             </span>
    </div>
    <div className="fixed bottom-20 right-[10%] opacity-20 pointer-events-none animate-float [animation-delay:2s]">
        <span className="material-symbols-outlined text-[100px] text-purple-400">
            <MdPsychology/>
        </span>
    </div>
    
    </>
  )
}

export default BackgroundDetail