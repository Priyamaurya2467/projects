import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from '../src/components/Pages/Landing Page/page'

import LoginPage from './components/Pages/LoginPage/Main'
import RegisterPage from './components/Pages/Register Page/Main'

function App() {
  return (

    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      
      
    </Routes>
  
    
  )
}

export default App