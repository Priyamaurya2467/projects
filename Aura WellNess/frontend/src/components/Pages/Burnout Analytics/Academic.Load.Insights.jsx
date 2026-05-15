import React, { useState } from 'react'
import { MdArchitecture, MdAutoAwesome, MdMenuBook, MdTerminal } from "react-icons/md";
function AcademicLoadInsights() {

  const [selectCard , setselectCard] = useState(null)

    const cards = [
        {
            card_icon: <MdMenuBook/>,
            card_content: "Adv. Physics",
            card_duration: "12h / week",
            card_progress: "High Stress Correlation"
        },
        {
            card_icon: <MdArchitecture/>,
            card_content: "Design Systems",
            card_duration: "8h / week",
            card_progress: "Low Stress Correlation"
        },
        {
            card_icon: <MdTerminal/>,
            card_content: "Neural Networks",
            card_duration: "15h / week",
            card_progress: "Balanced Load"
        }
    ]

    const button = ["Monthly" , "Yearly"]
    const [period,setperiod] = useState("Monthly")

    const getStressColor = (hours) => {
      if (hours > 14) return "text-red-400";
      if (hours > 10) return "text-yellow-400";
          return "text-green-400";
};

  return (
    <>

    {selectedCard && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/60">
    <div className="w-[400px] rounded-2xl bg-black p-6 text-white border border-white/10">
      <h2 className="text-xl font-bold">{selectedCard.card_content}</h2>
      <p className="text-gray-400 mt-2">{selectedCard.card_duration}</p>
      <p className="mt-4 text-sm text-violet-300">
        {selectedCard.card_progress}
      </p>

      <button
        className="mt-6 w-full rounded-lg bg-violet-500/20 p-2"
        onClick={() => setSelectedCard(null)}
      >
        Close
      </button>
    </div>
  </div>
      )}



    <section
       className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(255,255,255,0.05)] lg:col-span-12"
>

    <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
        <h3 className="text-3xl font-bold text-white">
            Load Distribution
        </h3>

        <p className="text-gray-400">
            Correlation between study hours and stress markers
        
            </p>
        </div>

    
        <div className="flex rounded-xl bg-white/5 p-1">
        {button.map((label)=>(
            <button
            key={label}
            onClick={()=>setperiod(label)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition
                ${period === label
                  ? "bg-violet-400/20 text-violet-300"
                  : "text-gray-400 hover:text-white"
                }
              `}
        >
            {buttons}
        </button>

        ))}
    

        
        </div>

    </div>

  
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 " onClick={()=>setselectCard(cards)}>
    {cards.map((card , index)=>(
        <div
        key={index}
      className="group relative flex cursor-pointer items-center gap-6 rounded-2xl border border-white/5 bg-white/5 p-6 transition-all hover:bg-white/10 hover:scale-[1.02]"
    >
     
      <div
        className="flex h-16 w-16 items-center justify-center rounded-full border border-violet-400/20 bg-violet-400/10 text-violet-300"
      >
        <span className="material-symbols-outlined text-4xl">
          {card.card_icon}
        </span>
      </div>

   
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
          {card.card_content}
        </p>

        <p className="text-2xl font-bold text-white">
          {card.card_duration}
        </p>

        
        <div
          className="mt-2 h-1.5 w-32 overflow-hidden rounded-full bg-white/10"
        >
          <div className="h-full w-[85%] rounded-full bg-red-400" style={{width: `${card.card_progress}%`}}></div>
        </div>

        <p className="mt-1 text-sm text-red-400 transition-all duration-500 group-hover:w-[92%]">
          {card.card_progress}
        </p>
      </div>
    </div>

    ))}
   
 

     </div>

     <p className={`mt-1 text-sm ${getStressColor(cardDurationHours)}`}>
  {card.card_progress}
        </p>
    </section>
    
    </>
  )
}

export default  AcademicLoadInsights