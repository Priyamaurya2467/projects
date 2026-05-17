import React from 'react'
import SidebarNavigation from '../../component/Sidebar.Navigation'
import TopNavigationBar from './Top.Navigation'
import HeroSection from './HeroSection'
import Meditation from './Meditation'
import MusicSection from './MsuicSection'
import StudentSupportArticle from './StudentSupportArticle'
import PulseAiFeedbackBubble from '../../component/Pulse.Ai.Feedback.Bubble'

function WellnessHub() {
  return (
    <>
    <SidebarNavigation/>
    <TopNavigationBar/>
    <main className='md: ml-64 pt-24 px-8 pb-12'>
        <HeroSection/>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <Meditation/>
            <MusicSection/>
            <StudentSupportArticle/>

        </div>

        <PulseAiFeedbackBubble/>
    </main>
    
    </>
  )
}

export default WellnessHub