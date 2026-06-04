import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import LandingPage from '../src/Pages/LandingPage/Main'
import LoginPage from '../src/Pages/LoginCard/Main'
import RegistrationPage from '../src/Pages/RegistrationPage/Main'
import DashboardPage from './Pages/DashBoard/Dashboard'
function App() {
  return (

    <BrowserRouter>

      <Routes>

        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/registration' element={<RegistrationPage/>}/>
        <Route path='/dashboard' element={<DashboardPage/>}/>
        
      </Routes>
    </BrowserRouter>
    


  )
}

export default App