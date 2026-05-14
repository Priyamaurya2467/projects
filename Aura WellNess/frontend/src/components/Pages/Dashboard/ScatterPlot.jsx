import React from 'react'

function ScatterPlot() {
  return (
    <>

    <div class="md:col-span-8 glass-card rounded-[32px] p-8">
        <div class="flex justify-between items-center mb-8">
            <h3 class="font-headline-md text-headline-md text-on-surface">Sleep vs Productivity</h3>
        <div class="flex gap-4">
        <div class="flex items-center gap-2">
             <span class="w-3 h-3 rounded-full bg-primary"></span>
             <span class="font-label-sm text-label-sm text-on-surface-variant">Focus</span>
        </div>
        <div class="flex items-center gap-2">
             <span class="w-3 h-3 rounded-full bg-tertiary"></span>
             <span class="font-label-sm text-label-sm text-on-surface-variant">Rest</span>
       </div>
       </div>
        </div>

        <div class="h-64 relative border-l border-b border-white/10 ml-6 mb-6">

             <div class="absolute bottom-[20%] left-[10%] w-4 h-4 rounded-full bg-primary/40 blur-[2px] shadow-[0_0_10px_#cac1ed]"></div>
             <div class="absolute bottom-[40%] left-[25%] w-6 h-6 rounded-full bg-tertiary/40 blur-[2px] shadow-[0_0_10px_#89d5ba]"></div>
             <div class="absolute bottom-[60%] left-[50%] w-3 h-3 rounded-full bg-primary/40 blur-[1px] shadow-[0_0_10px_#cac1ed]"></div>
             <div class="absolute bottom-[80%] left-[70%] w-5 h-5 rounded-full bg-tertiary/40 blur-[2px] shadow-[0_0_10px_#89d5ba]"></div>
             <div class="absolute bottom-[30%] left-[85%] w-4 h-4 rounded-full bg-secondary/40 blur-[2px] shadow-[0_0_10px_#d4bbff]"></div>

             <div class="absolute -left-12 top-1/2 -rotate-90 font-label-sm text-label-sm text-on-surface-variant">Efficiency %</div>
             <div class="absolute -bottom-10 left-1/2 -translate-x-1/2 font-label-sm text-label-sm text-on-surface-variant">Hours of Sleep</div>
        </div>
    </div>

   
    
    </>
  )
}

export default ScatterPlot