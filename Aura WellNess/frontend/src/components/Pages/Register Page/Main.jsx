import React from 'react'
import BackgroundDetail from './BackgroundDecor'
import Branding from './Branding'
import Form from './Form'

function RegisterPage() {
  return (
    <>
    <div className="antialiased min-h-screen py-12 px-6 md:px-12 flex flex-col items-center text-white bg-slate-950">
        <BackgroundDetail/>

       <main className="w-full max-w-6xl grid lg:grid-cols-12 gap-12 items-start relative z-10">

        <Branding/>
        <Form/>
        
        
        
        </main> 
    </div>
    
    </>
  )
}

export default RegisterPage