import React from 'react'
import { MdAccountCircle, MdSettings } from 'react-icons/md'

function TopNav() {
  return (
    <>


    {/* Header */}
<header className="fixed top-0 z-50 w-full px-4 pt-4 sm:px-6 lg:px-8">

  <nav className="mx-auto flex w-full max-w-[1440px] items-center justify-between bg-transparent">

    {/* Logo */}
    <div className="text-2xl font-semibold tracking-tight text-violet-300">
      Mind Shield
    </div>

    {/* Right Actions */}
    <div className="flex items-center gap-4 sm:gap-6">

      {/* Profile */}
      <button className="scale-95 text-violet-300 transition-all duration-300 hover:text-emerald-300 active:scale-90">

        <span className="material-symbols-outlined">
          <MdAccountCircle/>
        </span>
      </button>

      {/* Settings */}
      <button className="scale-95 text-violet-300 transition-all duration-300 hover:text-emerald-300 active:scale-90">

        <span className="material-symbols-outlined">
          <MdSettings/>
        </span>
      </button>
    </div>
  </nav>
</header>







    
    </>
  )
}

export default TopNav