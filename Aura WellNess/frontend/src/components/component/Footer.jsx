import React from 'react'

function Footer() {
    const footerContents = ["Privacy Policy","Terms of Service", "Wellness Ethics" , "Student Support"]
  return (

    <footer className='mt-20 w-full border-t border-white/10 bg-[#121212]'>
        <div className='mx-auto flex max-w-7xl flex-col items-center justify-between px-6 py-12 md:flex-row'>
            <div className='mb-8 text-center md:mb-0 md:text-left'>
                <span className='mb-2 block text-2xl font-semibold text-white'>MindShield AI</span>
                <p className='max-w-xs text-sm text-gray-400'>
                     © 2024 MindShield AI. All rights reserved. Built for cognitive sanctuary.
                </p>
            </div>
            <div className='flex flex-wrap justify-center gap-8'>
                {footerContents.map((footObj , index)=>(
                      <a
                        index={index}
                        href="#"
                        className="text-sm text-gray-400 transition-colors hover:text-purple-400"
                      > {footObj}</a>

                ))}

            </div>

        </div>
        
    </footer>
  )
}

export default Footer