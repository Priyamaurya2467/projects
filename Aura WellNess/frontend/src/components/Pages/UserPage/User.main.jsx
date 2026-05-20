import React from 'react'
import TopNav from './TopNav'
import UserIdentity from './UserIdentity'
import AcademicStats from './AcademicStats'
import MoodHistory from './MoodHistory'
import PersonalJourney from './PersonalJourney'

function UserMain() {
  return (
    <>

    <div className='min-h-screen overflow-x-hidden bg-gradient-to-br from-[#0B1020] via-[#111827] to-[#0F172A] text-white'>
        <TopNav/>

        <div className='mx-auto max-w-[1440px] px-4 pb-24 pt-32 sm:px-6 lg:px-8'>
            <UserIdentity/>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
                <AcademicStats/>
                <div className='lg:col-span-8 flex flex-col gap-8'>
                <MoodHistory/>
                <PersonalJourney/>
                </div>
            </div>

        </div>


    </div>
    
    
    </>
  )
}

export default UserMain