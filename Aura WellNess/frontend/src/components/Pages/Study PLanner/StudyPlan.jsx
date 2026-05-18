import React from 'react'
import SidebarNavigation from '../../component/Sidebar.Navigation'
import headernav from './header'
import DailyVisualisation from './DailyVisualisation'
import GridSlot from './GridSlot'
function StudyPlan() {
  return (
    <>

    <div className="overflow-x-hidden text-base font-normal">
       <SidebarNavigation/> 

       <div className='mx-auto max-w-[1440px] px-6 pb-12 pt-32 md:pl-72'>
            <headernav/>
            <DailyVisualisation/>
            <GridSlot/>

       </div>
    </div>
    
    </>
  )
}

export default StudyPlan