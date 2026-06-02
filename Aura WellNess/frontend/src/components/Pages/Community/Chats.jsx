import React from 'react'
import { MdAdd, MdMic } from 'react-icons/md'

function Chats() {
  return (
    <>

<div className="flex min-h-screen bg-[#0b1020] text-white">

  <aside className="hidden w-72 border-r border-white/10 bg-white/5 backdrop-blur-2xl lg:flex lg:flex-col">
    <div className="border-b border-white/10 px-6 py-6">
      <h1 className="text-2xl font-semibold tracking-tight">MindShield AI</h1>
      <p className="mt-1 text-sm text-white/50">Your calm digital companion</p>
    </div>

    <nav className="flex-1 space-y-2 px-4 py-6">
      <button className="w-full rounded-2xl bg-violet-400/10 px-4 py-3 text-left transition hover:bg-violet-400/20">
        Wellness Chat
      </button>

      <button className="w-full rounded-2xl px-4 py-3 text-left text-white/70 transition hover:bg-white/5">
        Breathing Sessions
      </button>

      <button className="w-full rounded-2xl px-4 py-3 text-left text-white/70 transition hover:bg-white/5">
        Mood Tracking
      </button>

      <button className="w-full rounded-2xl px-4 py-3 text-left text-white/70 transition hover:bg-white/5">
        Daily Reflection
      </button>
    </nav>
  </aside>

  
    <main className="relative z-10 ml-0 flex h-screen flex-1 flex-col px-8 py-10 lg:ml-10 xl:ml-16">
     <div className="mx-auto flex h-full w-full max-w-5xl flex-col">

        <div className="scrollbar-hide flex flex-1 flex-col-reverse space-y-8 overflow-y-auto pr-4">
            
            <div className="flex max-w-2xl flex-col items-start">
            <div
                className="rounded-2xl rounded-tl-none border border-emerald-300/20 bg-white/10 p-6 shadow-[0_0_30px_rgba(137,213,186,0.1)] backdrop-blur-xl"
            >
                <p className="text-lg leading-relaxed text-white/90">
                I sense a slight tension in your digital footprint today. Let's take a
                moment for a guided grounding exercise. Would you like to focus on your
                breathing or a cognitive shift?
                </p>

                <div className="mt-4 flex gap-3">
                <button
                    className="rounded-full border border-emerald-300/40 bg-emerald-300/5 px-4 py-2 text-sm font-medium text-emerald-200 transition-all hover:bg-emerald-300/10"
                >
                    Breathing focus
                </button>

                <button
                    className="rounded-full border border-emerald-300/40 bg-emerald-300/5 px-4 py-2 text-sm font-medium text-emerald-200 transition-all hover:bg-emerald-300/10"
                >
                    Cognitive shift
                </button>
                </div>
            </div>

            <span className="ml-1 mt-2 text-sm text-emerald-200/60">
                AI Wellness Guide
            </span>
            </div>

        
            <div className="ml-auto flex max-w-2xl flex-col items-end">
            <div
                className="rounded-2xl rounded-tr-none border border-violet-300/20 bg-violet-300/5 p-6 backdrop-blur-xl"
            >
                <p className="text-lg text-white/90">
                I've been feeling a bit overwhelmed with my study schedule lately. I
                need help finding a calm headspace.
                </p>
            </div>

            <span className="mr-1 mt-2 text-sm text-white/50">
                You • 10:42 AM
            </span>
            </div>

        
            <div className="flex max-w-2xl flex-col items-start">
            <div
                className="rounded-2xl rounded-tl-none border border-emerald-300/20 bg-white/10 p-6 backdrop-blur-xl"
            >
                <p className="text-lg text-white/90">
                Welcome back to MindShield AI. I am here to facilitate your
                tranquility. How are you feeling in this present moment?
                </p>
            </div>

            <span className="ml-1 mt-2 text-sm text-emerald-200/60">
                AI Wellness Guide
            </span>
            </div>

        </div>
        </div>

        
        <div className="mt-auto pt-8">
            <div
            className="flex items-center gap-4 rounded-full border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-xl"
            >
            
            <button
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white/60 transition-colors hover:text-violet-300"
            >
                <span className="material-symbols-outlined"><MdAdd/></span>
            </button>

            
            <div
                className="flex flex-1 items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2"
            >
                <input
                type="text"
                placeholder="Share your thoughts..."
                className="w-full border-none bg-transparent text-white placeholder:text-white/40 focus:outline-none"
                />
            </div>

            
            <div className="flex h-8 items-center gap-1 border-l border-white/10 px-4">
                <div
                className="h-3 w-1 animate-pulse rounded-full bg-emerald-300"
                style={{animationDelay: "0.1s"}}
                ></div>

                <div
                className="h-6 w-1 animate-pulse rounded-full bg-violet-300"
                style={{animationDelay: '0.1s'}}
                ></div>

                <div
                className="h-4 w-1 animate-pulse rounded-full bg-emerald-300"
                style={{animationDelay: '0.1s'}}
                ></div>

                <div
                className="h-7 w-1 animate-pulse rounded-full bg-pink-300"
                style={{animationDelay:'0.5s'}}
                ></div>

                <div
                className="h-5 w-1 animate-pulse rounded-full bg-violet-300"
                style={{animationDelay: '0.4s'}}
                ></div>
            </div>

            
            <button
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-violet-300 to-pink-300 text-white shadow-[0_0_20px_rgba(202,193,237,0.4)] transition-transform hover:scale-105 active:scale-95"
            >
                <span className="material-symbols-outlined"><MdMic/></span>
            </button>
            </div>
        </div>
    </main>

</div>


    
    
   
   

    </>
  )}
  

export default Chats