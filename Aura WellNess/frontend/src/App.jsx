import React , {useState} from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from '../src/components/Pages/Landing Page/page'
import Dashboard from '../src/components/Pages/Dashboard/Main'
import LoginPage from './components/Pages/LoginPage/Main'
import RegisterPage from './components/Pages/Register Page/Main'
import StudentEntry from './components/Pages/StudentInput/Main'
import BurnoutAnalysis from './components/Pages/Burnout Analytics/Main'

import MoodTracker from './components/Pages/Mood Tracker/Main'
import WellnessHub from './components/Pages/Wellness Hub/Main'
function App() {
   const [form , setForm] = useState({
          sleep : 7,
          study: 4,
          stress: 2,
          mood: 8,
          focus: 45,
          exam: 3,
          emotional: '',
          relax: '',
      });
  return (

    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/dashboard' element={<Dashboard form = {form} />}/>
      <Route path='/student-entry' element={<StudentEntry formupdate = {form} setFormupdate = {setForm}/>}/>
      <Route path='/burnout-analysis' element={<BurnoutAnalysis/>}/>
      <Route path='/mood-tracker' element={<MoodTracker/>}></Route>
      <Route path='/wellness-hub' element={<WellnessHub/>}></Route>
      
      
    </Routes>
  
    
  )
}

export default App