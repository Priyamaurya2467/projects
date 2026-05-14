import React from 'react'
import LoginCard from '../Pages/LoginPage/LoginCard';
import {useNavigate} from 'react-router-dom';

function Navbar() {
    const NavLinks = ["Dashboard" , "Analytics ", "Mood Tracker" , "Wellness huB"];
    const navigate = useNavigate()
  return (
    <>

    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-surface/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-max-width items-center justify-between px-container-padding py-4">
            <div className="flex items-center gap-8">
                 <span className="font-headline-md text-headline-md font-bold tracking-tight text-[#cac1ed] dark:text-primary-fixed">MindShield AI </span>

                <div className="gap-6 md:flex justify-center">
                    {NavLinks.map((navComponent,index)=> (
                        <a 
                        key={index}
                        href="#" className='font-body-md text-body-md text-[#c9c5ce]dark:text-[#c9c5ce] hover:text-[#cac1ed] transition-colors hover:bg-white/5 rounded-lg'>{navComponent}</a>
                    ))}
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <button className="text-sm font-medium text-gray-400 transition-colors hover:text-purple-400" onClick={()=>navigate("/login")}>Login</button>

                <button className="rounded-full bg-purple-500 px-6 py-2.5 text-sm font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95" onClick={()=>navigate('/register')}>Get Started</button>
            </div>
        </nav>
    </header>
    
    
    </>
  )
}

export default Navbar