import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import LandingPage from '../src/Pages/LandingPage/Main'
import LoginPage from '../src/Pages/LoginCard/Main'
function App() {
  return (

    <BrowserRouter>

      <Routes>

        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        
      </Routes>
    </BrowserRouter>
    


  )
}

export default App