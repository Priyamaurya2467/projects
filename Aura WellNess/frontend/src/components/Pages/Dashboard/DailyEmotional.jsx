import React from 'react'

function DailyEmotional({form}) {
  return (
    <>

    <section className="mb-12">

    <div className="flex flex-col gap-8 rounded-[32px] border border-white/10 bg-white/10 p-5 shadow-2xl shadow-indigo-500/20 backdrop-blur-xl sm:p-6 md:flex-row md:items-center md:p-8">
        <div className="w-full md:w-1/3">
          <img className="rounded-2xl w-full h-48 object-cover shadow-2xl"alt="Tranquil digital landscape" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9LyfxVW0r8MADqlLgxr1gwGNuXWEX5xr6AAeJZ_KwyPV5t-s9rZ8qk1J0Wr9vgvPCoeTo9B09WnypoSSYOkQXPDp491H-wvid8wpPrDsJCI38v54sebMeQ03_ZjMs1fKukYgWjDoJe3wvfeTSD743SDTuFc0u7vDKmQ-yTyT2Qk8fof5o4z7lP_OCrnZfTu0AIGGy_FicjCcJAMV3BZ75_bpPCiT1Bw8Cb2rJ6Wy_tF-0gRGXBecABfO9glVNzw0bEUlhj6Mp90FV"/>
        </div>

     <div className="flex-1">
        <span className="text-sm text-cyan-300 mb-2 block uppercase tracking-widest font-semibold">
             Today's Reflection
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
             Emotional Stability: {form.emotional}
        </h2>

        <p className="text-base text-gray-300 mb-6">
             Your mood has remained consistently elevated since 7:00 AM.
             The AI detected a peak in creative flow around mid-morning.
             Current state suggests you are well-prepared for high-cognition tasks.
        </p>

        <div className="flex flex-wrap gap-4">
            <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-medium">
                 #Focused
            </span>

             <span className="px-4 py-2 rounded-fullbg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium">
                    #Resilient
            </span>
            
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium">
                  #Energetic
            </span>

        </div>

     </div>

     </div>

    </section>
    
    </>
  )
}

export default DailyEmotional