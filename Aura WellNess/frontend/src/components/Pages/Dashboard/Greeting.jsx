import React from 'react'

function Greeting() {
    const username = localStorage.getItem("username")
  return (
    <>

    <header className="text-center mb-16">
        <h1 className="font-display-lg text-display-lg text-on-surface mb-4">Good morning, {username}. Let's find your balance today.</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Your mental landscape is evolving. We've detected a shift in your focus patterns over the last 24 hours.</p>
    </header>
    
    
    </>
  )
}

export default Greeting