import React from 'react'
import SidebarNavigation from '../../component/Sidebar.Navigation'
import TopNavigationBar from './Top.Navigation.Bar'
import DailyFocusOverview from './Daily.Focus.Overview'
import MoodCheckin from './Mood.Checkin'
import BurnoutAnalysis from '../Burnout Analytics/Main'
import Burnoutrisklevel from './Burnout.risk.level'
import WellnessActivityFeed from './Wellness.Activity.Feed'
import PulseAiFeedbackBubble from '../../component/Pulse.Ai.Feedback.Bubble'

function MoodTracker() {
  return (
    <>

    <div className='min-h-screen bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b] font-sans text-white antialiased'>
        <SidebarNavigation/>

        <div className='ml-64 min-h-screen max-w-7xl mx-auto px-6 py-8'>
            <TopNavigationBar/>
            <div className='grid grid-cols-12 gap-8'>
                <DailyFocusOverview/>
                <MoodCheckin/>
                <Burnoutrisklevel/>
                <WellnessActivityFeed/>
            </div>
            <PulseAiFeedbackBubble/>

        </div>

    </div>
    
    </>
  )
}

export default MoodTracker