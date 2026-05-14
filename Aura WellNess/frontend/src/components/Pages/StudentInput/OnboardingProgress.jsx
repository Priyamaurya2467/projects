import React, { useState } from 'react'

function OnboardingProgress() {
    const totalSteps = 4;
    const [currentStep,setCurrentStep]=useState(1);
    const progressPercent = (currentStep/totalSteps)*100

  return (
    <>
    <main className='px-4 md:px-10 pb-10'>
        <div className='max-w-[700px] mx-auto'>
            <div className='flex items-center justify-between mb-8'>
                <div className='h-2 flex-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden'>
                    <div
                        className='h-full bg-emerald-500 transition-all duration-500 ease-out rounded-full'
                        style={{width: `${progressPercent}`}}/>
                </div>

                <span className='ml-4 text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap'>
                    Step {currentStep} of {totalSteps}
                </span>
            </div>

            <div className='flex gap-3'>
                <button onClick={()=>setCurrentStep((s)=>Math.max(1,s-1))}>
                    Back
                </button>

                <button onClick={()=> setCurrentStep((s)=> Math.min(totalSteps,s+1))} className='px-4 py-2 rounded-lg bg-emerald-500 text-white'>
                    Next
                </button>
            </div>
        </div>
    </main>

    </>
  )
}

export default OnboardingProgress