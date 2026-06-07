import React from 'react'
import NavBar from '../../Components/NavBar'
import Sidebar from './Sidebar'
import Student from './Student'
import Cards from './Cards'
import Modules from './Modules'
import RecommendationCard from './RecommendationCard'
import { useLocation } from 'react-router-dom'

function Dashboard() {
  const location = useLocation();
  const user = location.state?.user
  return (
    <>
    <NavBar/>
    <div className='flex'>
      <Sidebar/>       
        <div className='flex-1 p-6 bg-gradient-to-r from-pink-50 via-red-50 to-purple-50 min-h-screen'>
            <h1 className='text-3xl font-bold'><Student user = {user}/></h1>
            <p className='mt-4'><Cards/></p>
            <h3 className='tracking-wider pt-5 text-2xl font-semibold'>Your Learning Modules</h3>
            <p className='mt-4'><Modules/></p>
            <RecommendationCard/>
        </div>
    </div>

    </>
  )
}

export default Dashboard