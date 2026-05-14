import React from 'react'
import { MdBubbleChart } from "react-icons/md";
function Graphic() {
  return (
    <>
    <div>
        <div className='absolute insert-0 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 blur-xl opacity-70 animate-pulse'></div>
        <div className='absolute insert-4 rounded-full border border-white/60 flex items-center justify-center backdrop-blur-md bg-white/20 shadow-inner'>
            <MdBubbleChart className="text-4xl text-cyan-300" />
        </div>
    </div>
    
    </>
  )
}

export default Graphic