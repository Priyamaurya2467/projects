import React from "react";
import { HiArrowTrendingUp, HiUsers } from "react-icons/hi2";
import './Statistics.css'
function DashboardStats() {
  return (
    <div className="flex justify-center items-center py-20 bg-[#f8f5f2]" style={{animation: "float 4s ease-in-out infinite"}}>
      {/* Main Container */}
      <div
        className="
          relative
          w-[900px]
          h-[620px]
          rounded-[40px]
          border border-white/50
          bg-gradient-to-br
          from-[#efe7f9]
          via-[#ebe6f8]
          to-[#e3e4fa]
          shadow-[0_20px_60px_rgba(168,85,247,0.15)]
          overflow-visible
        "
      >
        {/* Floating Top Left Card */}
        <div className="absolute -left-10 top-10 bg-white rounded-[30px] px-8 py-6 shadow-xl">
          <div className="flex items-center gap-4">
            <HiArrowTrendingUp className="text-3xl text-indigo-500" />

            <div>
              <h3 className="font-bold text-4xl text-slate-800">+45%</h3>
              <p className="text-gray-500 text-xl">This Month</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-10 pt-40">
          {/* Top Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-[32px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
              <h2 className="text-[64px] font-bold text-indigo-500 leading-none">
                94%
              </h2>
              <p className="text-gray-500 text-2xl mt-2">
                Success Rate
              </p>
            </div>

            <div className="bg-white rounded-[32px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
              <h2 className="text-[64px] font-bold text-emerald-400 leading-none">
                +120
              </h2>
              <p className="text-gray-500 text-2xl mt-2">
                Placements
              </p>
            </div>
          </div>

          {/* Small Placeholder Cards */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="
                  h-20
                  bg-white
                  rounded-[24px]
                  shadow-[0_8px_25px_rgba(0,0,0,0.04)]
                "
              />
            ))}
          </div>
        </div>

        {/* Floating Bottom Right Card */}
        <div className="absolute -right-10 bottom-16 bg-white rounded-[30px] px-8 py-6 shadow-xl">
          <div className="flex items-center gap-4">
            <HiUsers className="text-4xl text-emerald-400" />

            <div>
              <h3 className="font-bold text-4xl text-slate-800">
                10K+
              </h3>
              <p className="text-gray-500 text-xl">
                Students
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardStats;

  


    