import React from 'react'
import Greeting from './Greeting'
import DailyEmotional from './DailyEmotional'
import CircularGauge from './CircularGauge'
import ScatterPlot from './ScatterPlot'
import WellnessRecommendation from './WellnessRecommendation'
import Navigation from './Navigation'
function Main() {
  return (
    <>
    <div className='text-base text-white'>
        <Navigation/>
    <main className='max-w-7xl mx-auto px-6 md:px-12 md:py-24'>
        <Greeting/>
        <DailyEmotional/>
    <div className='grid grid-cols-1 md:grid-cols-12 gap-6'>
        <CircularGauge/>
        <ScatterPlot/>
        
    </div>  
    <WellnessRecommendation/> 
    </main>

    </div>
    </>
  )
}

export default Main