import React from 'react'
import Header from './Header'
import OnboardingProgress from './OnboardingProgress'
import OnboardingForm from './OnboardingForm'

function Main() {
  return (
    <>
    <div className="bg-gray-50 text-gray-900 min-h-screen relative overflow-x-hidden font-sans">
         <div className="fixed -top-[10%] -left-[10%] w-[500px] h-[500px] rounded-full bg-emerald-300/20 blur-[100px] -z-10"></div>
         <div className="fixed -bottom-[10%] -right-[10%] w-[600px] h-[600px] rounded-full bg-sky-300/20 blur-[120px] -z-10"></div>

         <Header/>

         <main className="px-4 md:px-10 pb-16">
            <div className="max-w-[700px] mx-auto">
                <OnboardingProgress/>
                <OnboardingForm/>


            </div>
        </main>
    </div>


    </>
  )
}

export default Main