import React from 'react'

function Header() {
  return (
    <>

    <header className='w-full top-0 px-4 md:px-10 bg-white dark:bg-gray-950'>
        <div className='flex flex-col items-center py-12 w-full max-w-[1100px] mx-auto text-center space-y-4'>
            <h1 className='text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white'>
                MindShield Setup
            </h1>

            <p className='text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-[600px]'>
                Tell us about your lifestyle so AI can personalize your wellness experience
            </p>

            <span className='text-xs md:text-sm uppercase tracking-widest text-gray-400 dark:text-gray-500'>
                Powered by MindShield Intelligence Engine
            </span>
        </div>

    </header>
    
    
    </>
  )
}

export default Header