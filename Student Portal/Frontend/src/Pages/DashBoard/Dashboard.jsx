import React from 'react'
import NavBar from './NavBar'
import Sidebar from './Sidebar'
import Student from './Student'
import Cards from './Cards'
import Modules from './Modules'

function Dashboard() {
  return (
    <>

    <NavBar/>

    <div className='flex'>
      <Sidebar/>
        
        <div className='flex-1 p-6 bg-gradient-to-r from-pink-50 via-red-50 to-purple-50 min-h-screen'>
            <h1 className='text-3xl font-bold'><Student/></h1>
            <p className='mt-4'><Cards/></p>
            <h3 className='tracking-wider pt-5 text-2xl font-semibold'>Your Learning Modules</h3>
            <p className='mt-4'><Modules/></p>
        </div>
    </div>

    </>
  )
}

export default Dashboard