import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from '../src/components/Pages/Landing Page/page'
import Dashboard from '../src/components/Pages/Dashboard/Main'
import LoginPage from './components/Pages/LoginPage/Main'
import RegisterPage from './components/Pages/Register Page/Main'
import StudentEntry from './components/Pages/StudentInput/Main'
function App() {
  return (

    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/landing' element={<LandingPage/>}/>
      <Route path='/student-entry' element={<StudentEntry/>}/>
      
      
    </Routes>
  
    
  )
}

export default App