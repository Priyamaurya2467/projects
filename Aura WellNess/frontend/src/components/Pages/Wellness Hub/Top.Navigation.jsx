import React from 'react'
import { MdMenu, MdNotifications, MdSearch, MdSmartToy } from 'react-icons/md'

function TopNavigationBar() {
  return (
    <>



    <header className="fixed top-0 left-0 md:left-64 right-0 z-50 flex items-center justify-between h-20 px-8 bg-surface/60 backdrop-blur-md border-b border-white/10">

  <div className="flex items-center gap-4">
    
   
    <div className="md:hidden">
      <span className="material-symbols-outlined text-primary text-3xl">
        <MdMenu/>
      </span>
    </div>

  
    <h2 className="hidden md:block text-headline-md font-headline-md text-on-surface">
      Wellness Hub
    </h2>
  </div>

  
  <div className="flex items-center gap-6">

   
    <div className="relative hidden sm:block">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
        <MdSearch/>
      </span>

      <input
        type="text"
        placeholder="Search resources..."
        className="w-64 py-2 pl-10 pr-4 rounded-full bg-white/5 border border-white/10 text-body-md focus:outline-none focus:border-tertiary transition-colors"
      />
    </div>

    {/* Icons */}
    <div className="flex items-center gap-4">

      <span className="material-symbols-outlined cursor-pointer text-on-surface-variant hover:text-primary transition-colors">
        <MdNotifications/>
      </span>

      <span className="material-symbols-outlined cursor-pointer text-on-surface-variant hover:text-primary transition-colors">
        <MdSmartToy/>
      </span>

       {/* pROFILE */}
      <div className="w-8 h-8 overflow-hidden rounded-full bg-primary-container border border-primary/20">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUgv7O12UCs8q91RFnSOaamIi2u8R-N68wvaypQGxp5gmXMxAW0RIcjoM_M8I1npck2LHgIm5rIGSxTQhCVPYTDmaCsDetkimF8DjsF7lryx8itV2aRqeRfs1T_BDmSr5ti2A9R_v_uh6q_tQjVgG19hE36ftxZt6LLS-ykS9TZqINRo0i8De0BWyXwnmNhalqPGFOy2OWkfdHCZcbmir0Y-PJ8-C7_fK32fHK_pf8RTrRLF6wJ-EcQy9c2hTZRbxKr-SgezPapVqz"
          alt="User profile"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  </div>
</header>
    
    
    </>
  )
}

export default TopNavigationBar