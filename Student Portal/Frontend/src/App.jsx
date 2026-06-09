import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import LandingPage from '../src/Pages/LandingPage/Main'
import LoginPage from '../src/Pages/LoginCard/Main'
import RegistrationPage from '../src/Pages/RegistrationPage/Main'
import DashboardPage from './Pages/DashBoard/Dashboard'
import BlankPage from './Pages/DashBoard/BlankPage'
import OnBoarding from './Pages/Onboarding/OnBoarding'
import StudyStreak from './Pages/DashBoard/Stats Cards/StudyStreak/StudyStreak'
import CurrentScore from './Pages/DashBoard/Stats Cards/CurrentScore/CurrentScore'
import StudyHours from './Pages/DashBoard/Stats Cards/StudyHours/StudyHours'
import PlacementReady from './Pages/DashBoard/Stats Cards/PlacementReady/PlacementReady'
import PlacementReadiness from './Pages/PlacementReadiness/PlacementReadiness'

function App() {
  return (

    <BrowserRouter>

      <Routes>

        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/registration' element={<RegistrationPage/>}/>
        <Route path='/dashboard' element={<DashboardPage/>}/>
        <Route path= '/no-result'element = {<BlankPage/>}/>
        <Route path='/onboardingPage' element = {<OnBoarding/>}/>
        <Route path='/dashboard/streak' element={<StudyStreak/>}/>
        <Route path='/dashboard/score' element={<CurrentScore/>}/>
        <Route path='/dashboard/hours' element={<StudyHours/>}/>
        <Route path='/dashboard/placement' element={<PlacementReady/>}/>
        <Route path='/dashboard/placementReadiness' element={<PlacementReadiness/>}/>
      </Routes>
    </BrowserRouter>
    


  )
}

export default App