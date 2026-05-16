import React from 'react'
import { MdNotifications, MdSearch, MdSmartToy } from 'react-icons/md'

function TopNavigationBar() {
  return (
    <>

    <header className="mb-10 flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-6 shadow-lg shadow-violet-500/5 backdrop-blur-xl">

        {/* SEARCH */}
        <div className="flex items-center gap-4">
            <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2">
                <span className="material-symbols-outlined text-violet-400">
                    <MdSearch/>
                </span>
            </div>
            <span className="text-sm text-gray-400">
            Search your insights...
            </span>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-6">

            {/* NOTIFICATION */}
            <button className="relative text-gray-400 transition hover:text-violet-300">

            <span className="material-symbols-outlined">
                <MdNotifications/>
            </span>

            <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-emerald-400" />
            </button>

            {/* AI BUTTON */}
            <button className="text-gray-400 transition hover:text-violet-300">

                    <span className="material-symbols-outlined">
                        <MdSmartToy/>
                    </span>
            </button>

            {/* PROFILE */}
            <div className="flex items-center gap-3 border-l border-white/10 pl-4">

                <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwRSb1LLjegffrmF95Sy2fAlHQP23LivJemEwy5cXTzN0igyju-T65t0tHKWo1vJU5D7ifkAh9j93ZSpF32T-rf4h-6fxt0yTYY8_mgcgzDGD3_g3afASrf8Obw2yGi3Ir7E29a0-93wgtzJnCRuM0vNLbMcev6yPak68eC4DoYMPuBm5ko6a5iiyXAJjV_TVxkotN2uQ8reeH0BKzwqR_6LlKBDg1qkKdye-LW0NNbk19TgOnyt2irD9JWyG2xtP__1Ww5Ed20rai"
                    alt="User profile"
                    className="h-10 w-10 rounded-full border border-violet-400/30 object-cover"
                />
            </div>
        </div>


    </header>
    
    
    </>
  )
}

export default TopNavigationBar