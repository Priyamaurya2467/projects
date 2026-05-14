import React from 'react'
import {MdInsights, MdSchedule, MdSelfImprovement} from 'react-icons/md'

function Features() {
    const Features = [
        {
           image: <MdInsights/> ,
           heading: "Burnout Analytics",
           description: "Predictive mapping of cognitive load using propietary biometric and"
        },

         {
           image: <MdSelfImprovement/> ,
           heading: "AI Wellness Guide",
           description: "24/7 empathetic support and grounding exercises designed to diffuse high-stress academic moments."
        },

         {
           image: <MdSchedule/> ,
           heading: "Eco-Study Planner",
           description: "Circadian-synced productivity scheduling that aligns your deep work with your natural biological peaks."
        }
    ]
  return (
    <>
    <section className='py-24'>
        <div className='mb-16 text-center'>
            <h2 className='mb-4 text-4xl font-bold text-white md:text-5xl'>Engineered for Human Thriving</h2>
            <p className='mx-auto max-w-2xl text-lg leading-relaxed text-gray-400'>Our ecosystem combines advanced cognitive science with empathetic AI to create a friction-less academic life.</p>
        </div>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
            {Features.map((content,index)=>(
                <div className='group rounded-3xl border border-white/5 bg-white/5 p-10 backdrop-blur-xl transition-all hover:border-teal-300/30' key={index}>
                    <div className='mb-8 flex h-16 w-16 items-center justi'>
                         <span className='material-symbol-outlined text-[32px] text-teal-300'>{content.image}</span>
                    </div>
                         <h4 className='mb-4 text-2xl font-semibold text-white'>{content.heading}</h4>
                         <p className='leading-relaxed text-gray-400'>{content.description}</p>
                </div>

            ))}
        
        </div>
    </section>
    
    </>
  )
}

export default Features