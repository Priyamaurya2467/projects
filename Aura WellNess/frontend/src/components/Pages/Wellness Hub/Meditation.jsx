import React from 'react'
import { MdPlayCircle } from 'react-icons/md'

function Meditation() {
  return (
    <>

   
        <div className="md:col-span-2 p-8 rounded-3xl backdrop-blur-lg bg-white/5 border border-white/10 shadow-lg shadow-cyan-500/10">

        
        <div className="flex items-center justify-between mb-8">

            <div>
            <h3 className="text-2xl font-bold text-white">
                Guided Meditation
            </h3>

            <p className="mt-1 text-gray-400">
                AI-curated sessions based on your current stress metrics.
            </p>
            </div>

            <button
            className="p-3 transition-all border rounded-full bg-white/5 border-white/10 hover:bg-white/10"
            >
            <span className="material-symbols-outlined text-cyan-400">
                tune
            </span>
            </button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

        
            <div
            className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer backdrop-blur-lg bg-white/5 border border-white/10"
            >

            <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_034c0kVg3AEJiM8Yrd7xQoJqFko1OqJKTke9B7aXSCSACxVomtQNFZZm3sfa8XuYG4fy-bGo602JcOOwp_z8rZwloPxwzUKBSTZnKnDFZqWv-ZuoUmM97sOR17YfApTUzMM9OSAbLwUWF0O89ltbdeamEtw8gSiIsNMAA6vW4R__eIRorS6mDp8gQWCoxZumWnNT34Cnl9JhYOs26NOctx6JxbG39p7WtKulAIn6ZIK46B1plLWenOQT_MINOvfXkBt5-K0zsQ4Y"
                alt="Meditation focus"
                className="absolute inset-0 w-full h-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>

            <div className="absolute bottom-6 left-6 z-10">

                <span className="block mb-2 text-sm font-semibold tracking-wider text-cyan-400 uppercase">
                10 MINS
                </span>

                <h4 className="text-2xl font-bold text-white">
                Focus Alignment
                </h4>

                <div className="flex items-center gap-2 mt-3">

                <span
                    className="material-symbols-outlined text-cyan-400 text-sm"
                    style="font-variation-settings:'FILL' 1;"
                >
                    <MdPlayCircle/>
                </span>

                <span className="text-xs text-gray-300">
                    Start Session
                </span>

                </div>
            </div>
            </div>

            <div
            className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer backdrop-blur-lg bg-white/5 border border-white/10"
            >

            <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsbTmw30sm8Iedp8Fk_qOJMactZfogMwxRqLpL2-S-vaGt6_cfJqbQYFmGEgmrbbxvVKIiK8lNJPg_OFOZbeUGk13R0pVAttyjUV-C-Tr5b-MUMj291KALoT1K7d82Mn4lvcLH0l_V4KX3AK3q9V2kl9hsfm0zHnFI9bhfvWYENcce-0Bq49R3erUZpca070aWeFYHCoMS551T9hwcTz-YdbFisOzMGNka2aBRcb0oBZuw1SDlALd6t9Iv7R14lo7BWB5lH3MYKtZB"
                alt="Anxiety release"
                className="absolute inset-0 w-full h-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>

            <div className="absolute bottom-6 left-6 z-10">

                <span className="block mb-2 text-sm font-semibold tracking-wider text-emerald-400 uppercase">
                15 MINS
                </span>

                <h4 className="text-2xl font-bold text-white">
                Anxiety Release
                </h4>

                <div className="flex items-center gap-2 mt-3">

                <span
                    className="material-symbols-outlined text-cyan-400 text-sm"
                    style="font-variation-settings:'FILL' 1;"
                >
                    <MdPlayCircle/>
                </span>

                <span className="text-xs text-gray-300">
                    Start Session
                </span>

                </div>
            </div>
            </div>

        </div>
        </div>


    </>
  )
}

export default Meditation