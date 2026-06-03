import React from 'react'
import NavBar from '../../Components/NavBar'
import Capabilities from './Capabilities'
import Statistics from './Statistics'
import Cards from './Cards'
import NumberStats from './NumberStats'
import LowerBody from './LowerBody'
import Footer from './Footer'

function Main() {
  return (
    <>
        <NavBar/>
        <Capabilities/>
        <Statistics/>
        <Cards/>
        <NumberStats/>
        <LowerBody/>
        <Footer/>
    </>
  )
}

export default Main