import React, { useMemo, useState } from "react";

import {
  MdArchitecture,
  MdMenuBook,
  MdTerminal,
} from "react-icons/md";

function AcademicLoadInsights({
  assessmentData = {},
  subjects,setSubjects
}) {

  const [newSubject , setNewSubject] = useState({
    name: "",
    hours: ""
  })

  const [selectedCard, setSelectedCard] =
    useState(null);

  const [period, setPeriod] =
    useState("Monthly");

  const buttons = ["Monthly", "Yearly"];

  // SAFE VALUES
  const workload =
    assessmentData?.workload ?? 5;

  const fatigue =
    assessmentData?.cognitiveFatigue ?? 4;

  const focusTime =
    assessmentData?.focustime ?? 6.2;

  

  // TOTAL HOURS
 const totalHours = subjects.reduce(
    (acc,item) => acc + Number(item.hours),
    0
 )

  // DYNAMIC COLORS
  const getStressColor = (stress) => {
    if (stress >= 75){
      return "text-red-400";
    }

    if(stress <= 40){
      return "text-emerald-400"
    }

    return "text-yellow-400"

    
  };

  const handleAddSubject = () =>{
    if(!newSubject.name || !newSubject.hours)
      return;
  
  const generatedStress = 
    Math.min(
      100 , Math.round(newSubject.hours * 7)
    );
  
    const newCards = {
      id: Date.now(),
      name: newSubject.name,
      hours: Number(newSubject.hours),
      stress: generatedStress,
      icon: <MdMenuBook/>
    }

    setSubjects([...subjects , newCards]);
    setNewSubject({
      name: "",
      hours: "",
    })
  }

  return (
    <>

      <div className="mb-8 rounded-3xl border border-white/10 bg-white/5 p-6">
        <h4 className="mb-5 text-xl font-semibold text-white">
          Add Study Subject
        </h4>

        <div>
          <input type="text"
                  placeholder="Subject Name"
                  value={newSubject.name}
                  onChange={(e) => 
                    setNewSubject({
                      ...newSubject,
                      name: e.target.value
                    })
                  }
                  className="rounded-2xl border border-white/10 bg-black/20 p-4 text-white outline-none" />

                  <input type="number" 
                          placeholder="Study Hours"
                          value={newSubject.hours}
                          onChange={(e)=> 
                            setNewSubject({
                              ...newSubject,
                              hours: Number(e.target.value)
                            })
                          }
                          className="rounded-2xl border border-white/10 bg-black/20 p-4 text-center outline-none"/>


                          <button
                            onClick={handleAddSubject}
                            className="rounded-2xl bg-violet-500/20 p-4 font-semibold text-violet-300 transition hover:bg-violet-500/30"

                            >Add Subject</button>
               </div>
      
      </div>


      {/* MODAL */}
      {selectedCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">

          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#0f172a] p-6 text-white shadow-2xl">

            <h2 className="text-2xl font-bold">
              {selectedCard.name}
            </h2>

            <p className="mt-2 text-gray-400">
              {selectedCard.hours}
            </p>

            <div className="mt-5">

              <div className="h-2 overflow-hidden rounded-full bg-white/10">

                <div
                  className="h-full rounded-full bg-violet-400 transition-all duration-700"
                  style={{
                    width: `${selectedCard.stress}%`,
                  }}
                />
              </div>
            </div>

            <p
              className={`mt-4 text-sm ${getStressColor(
                selectedCard.stress
              )}`}
            >
              {selectedCard.stress}
            </p>

            <button
              className="mt-6 w-full rounded-xl border border-violet-400/20 bg-violet-500/10 p-3 text-violet-300 transition hover:bg-violet-500/20"
              onClick={() =>
                setSelectedCard(null)
              }
            >
              Close
            </button>
          </div>
        </div>
      )}

      <section className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_40px_rgba(255,255,255,0.05)] backdrop-blur-xl">

        {/* HEADER */}
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

          <div>
            <h3 className="text-3xl font-bold text-white">
              Load Distribution
            </h3>

            <p className="mt-2 text-gray-400">
              Correlation between study hours
              and stress markers
            </p>
          </div>

          {/* PERIOD SWITCH */}
          <div className="flex rounded-2xl bg-white/5 p-1">

            {buttons.map((label) => (

              <button
                key={label}
                onClick={() =>
                  setPeriod(label)
                }
                className={`rounded-xl px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  period === label
                    ? "bg-violet-400/20 text-violet-300"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        

        {/* SUBJECT CARDS */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

          {subjects.map((subject, index) => (

            <div
              key={index}
              onClick={() =>
                setSelectedCard(subject)
              }
              className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
            >

              {/* GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-emerald-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">

                {/* ICON */}
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/10 text-violet-300">

                  {subject.icon}
                </div>

                {/* CONTENT */}
                <p className="text-xs uppercase tracking-[0.25em] text-gray-400">

                  {subject.name}
                </p>

                <h4 className="mt-2 text-3xl font-bold text-white">

                  {subject.hours}h / week
                </h4>

                {/* PROGRESS */}
                <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">

                  <div
                    className="h-full rounded-full bg-gradient-to-r from-violet-400 to-emerald-400 transition-all duration-700"
                    style={{
                      width: `${subject.stress}%`,
                    }}
                  />
                </div>

                <p
                  className={`mt-3 text-sm ${getStressColor(
                    subject.stress
                  )}`}
                >
                  {subject.stress >= 75 ? "High Stress" : subject.stress <= 40 ? "Low Stress" : "Balanced Load"}
                </p>
              </div>


          <button
            onClick={(e) => {
              e.stopPropagation();

              setSubjects((prev) => 
              prev.filter(
                (s) => s.id !== subject.id
              )
              )
            }}
            className="absolute right-4 top-4 text-red-400"
          >
            ✕
          </button>

            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">

          <p className="text-gray-400">
            Total Academic Load
          </p>

          <h4 className="text-2xl font-bold text-white">
            {totalHours}h
          </h4>
        </div>
      </section>
    </>
  );
}

export default AcademicLoadInsights;