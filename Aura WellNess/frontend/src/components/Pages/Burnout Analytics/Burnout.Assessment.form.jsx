import React from 'react'
import { MdAutoAwesomeMotion } from 'react-icons/md'

function BurnoutAssessmentForm({assessmentData,setAssessmentData,}) {
    const button = ["Restless" , "Deep" , "REMT"]
  return (
    <section
  className="rounded-3xl border-l-4 border-l-emerald-400/40 border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(255,255,255,0.05)] lg:col-span-4"
>
 
  <h3 className="mb-6 text-3xl font-bold text-white">
    Daily Pulse Check
  </h3>

  <form className="space-y-8">

   
    <div>
      <label className="mb-4 block text-base text-gray-300">
        Workload Intensity
      </label>

      <div className="relative pt-1">
        <input
          type="range"
          min="0"
          max="10"
          value={assessmentData.workload}
          onChange={(e)=>
            setAssessmentData({
                ...assessmentData,
                workload: Number(e.target.value),
            })
          }
          className="w-full cursor-pointer accent-violet-400"
        />

        <div className="mt-2 flex justify-between text-sm text-gray-500">
          <span>Zen</span>
          <span>Max</span>
        </div>
      </div>
    </div>

  
    <div>
      <label className="mb-4 block text-base text-gray-300">
        Sleep Quality Level
      </label>

      <div className="flex gap-2">
        {button.map((button,index)=>(
             <button
          key={index}
          type="button"
          onClick={()=>
            setAssessmentData({
                ...assessmentData,
                sleepQuality: button
            })
          }
          className="flex-1 rounded-xl border border-white/10 py-3 font-medium text-gray-300 transition-all hover:border-emerald-400/50 hover:bg-emerald-400/5 hover:text-emerald-300"
        >
          {button}
        </button>

        ))}
       
      </div>
    </div>

   
    <div>
      <label className="mb-4 block text-base text-gray-300">
        Cognitive Fatigue
      </label>

      <div className="relative pt-1">
        <input
          type="range"
          min="0"
          max="10"
          value={assessmentData.cognitiviFatigue}
          onChange={(e)=>
            setAssessmentData({
                ...assessmentData,
                cognitiviFatigue: Number(e.target.value)
            })
          }
          className="w-full cursor-pointer accent-pink-400"
        />

        <div className="mt-2 flex justify-between text-sm text-gray-500">
          <span>Clear</span>
          <span>Clouded</span>
        </div>
      </div>
    </div>

    <div>
      <label className='mb-2 block text-gray-300'>
        Heart Rate
      </label>

      <input 
        type="number"
        value={assessmentData.heartrate}
        onChange={(e)=>
          setAssessmentData({
            ...assessmentData,
            heartrate : e.target.value
          })
        } 
        className='w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white outline-none'
        
        />
    </div>

    <div>
      <label className='mb-2 block text-gray-300'>
          Focus Time

          <input 
            type="number" 
            step="0.1"
            value={assessmentData.focustime}
            onChange={(e)=>
              setAssessmentData({
                ...assessmentData,
                focustime: e.target.value
              })
            }
            className='w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white outline-none'
            />
      </label>
    </div>
 
    <div className="pt-4">
      <button
        type="submit"
        className="group flex w-full items-center justify-center gap-2 rounded-2xl border border-violet-400/20 bg-white/5 py-4 font-bold text-violet-300 transition-all hover:bg-violet-400/10"
      >
        Sync Assessment

        <span
          className="material-symbols-outlined transition-transform group-hover:translate-x-1"
        >
          <MdAutoAwesomeMotion/>
        </span>
      </button>
    </div>

  </form>
</section>
  )
}

export default BurnoutAssessmentForm