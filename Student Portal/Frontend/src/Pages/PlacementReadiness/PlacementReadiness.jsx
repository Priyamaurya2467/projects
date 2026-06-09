import React, { useState } from "react";
import { HiOutlinePencil } from "react-icons/hi";
import { HiMiniClipboardDocument } from "react-icons/hi2";
import {
  MdOutlineArrowLeft,
  MdPeople,
  MdTerminal,
  MdThunderstorm,
  MdTrendingUp,
  MdCheckCircle,
  MdSyncLock,
  MdOutlineError,
} from "react-icons/md";
import { FaBrain } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

function PlacementReadiness() {
  const location = useLocation();

  const {
    readiness = 0,
    milestonesCompleted = 0,
    milestonesRemaining = 0,
    tracker = [],
    skills = [],
    roadmap = [],
  } = location.state || {};


  const [isEditing , setIsEditing] = useState(false);
  const [redinessValue , setReadinessValue] = useState(readiness);
  const [remainingValue , setRemainingValue] = useState(milestonesCompleted)
  const [remainingValue , setReadinessValue] = useState(milestonesRemaining);

  const iconMap = {
    terminal: <MdTerminal />,
    people: <MdPeople />,
    resume: <HiMiniClipboardDocument />,
    brain: <FaBrain />,
    completed: <MdCheckCircle />,
    progress: <MdSyncLock />,
    pending: <MdOutlineError />,
  };

  return (
    <div className="bg-gradient-to-r from-purple-50 to-purple-100 min-h-screen">
      {/* Navbar */}
      <div className="flex justify-between p-5 bg-white">
        <div className="flex items-center gap-2">
          <MdOutlineArrowLeft />
          Placement Readiness
        </div>

        <button className="flex items-center gap-3 rounded-2xl p-2 cursor-pointer hover:bg-gray-50 border-none">
          <HiOutlinePencil />
          Edit Metrics
        </button>
      </div>

      {/* Readiness Card */}
      <div className="bg-white rounded-3xl m-4 p-3">
        <div className="flex flex-col text-center p-10">
          <p className="text-5xl font-bold text-purple-600">
            {isEditing ? (
              <input
                type="number"
                value={redinessValue}
                onChange={(e) => setReadinessValue(e.target.value)}
                className="border rounded p-2 w-24 text-center"
              />
            ) : (
              <p>{redinessValue}% </p>
            
            )}
          </p>
          <span>Readiness</span>
        </div>

        {isEditing && (
          <div className="bg-white rounded-3xl m-4 p-6 shadow">
            <h2 className="text-xl font-semibold mb-4">
              Edit Placement Metrics
            </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm  mb-1">
                Readiness %
              </label>

              <input 
                type="number" 
                value={redinessValue}
                onChange={(e) => 
                  setReadinessValue(e.target.value)
                }
                className="w-full border rounded p-2"
                    />
            </div>

            <div>
              <label className="block text-sm mb-1">
                Completed Milestones
              </label>
              <input 
                type="number"
                value={completedValue}
                onChange={(e) =>
                  setCompletedValue(e.target.value)
                }   
                className="w-full border rounded p-2"                 
                    />
            </div>

            <div>
              <label className="block text-sm mb-1">
                Remaining Milestones
              </label>

              <input type="number"
                value={remainingValue}
                onChange={(e) => 
                  setRemainingValue(e.target.value)
                }
                className="w-full border rounded p-2" />
            </div>
          </div>
          
          </div>

        )}

        <div className="text-center">
          <h2 className="tracking-wider font-semibold text-xl">
            You're on track for placements!
          </h2>

          <p className="text-green-500 font-semibold text-xs">
            ✓ {milestonesCompleted} milestones completed
          </p>
        </div>

        {/* Tracker Cards */}
        <div className="p-5">
          {tracker.map((item, index) => (
            <div
              className="flex justify-between p-5"
              key={index}
            >
              <div>
                <p className="text-xs font-semibold text-gray-600">
                  {item.title}
                </p>

                <h1 className="font-semibold text-3xl">
                  {item.number}
                </h1>
              </div>

              <div
                className={`h-12 w-12 rounded-xl flex justify-center items-center text-white ${item.bg}`}
              >
                {iconMap[item.iconType]}
              </div>
            </div>
          ))}
        </div>

        {/* Milestone Progress */}
        <div className="p-5">
          <h1 className="font-semibold text-sm p-2">
            Milestone Progress
          </h1>

          <div className="h-2 bg-gradient-to-r from-purple-800 via-blue-900 to-green-700 rounded-2xl"></div>

          <span className="text-xs text-gray-600">
            {milestonesCompleted} completed,{" "}
            {milestonesRemaining} remaining
          </span>
        </div>
      </div>

      {/* Skills Progress */}
      <div className="m-4">
        <h1 className="flex items-center text-3xl p-4 gap-2 tracking-wider">
          <MdTrendingUp className="text-purple-900" />
          Skills Progress
        </h1>

        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition mb-4"
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-purple-100 flex items-center justify-center text-purple-950 rounded-xl">
                {iconMap[skill.iconType]}
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 text-xl">
                  {skill.topic}
                </h3>

                <p className="text-xs text-gray-600 font-medium">
                  {skill.caption}
                </p>
              </div>
            </div>

            <div className="text-lg font-medium">
              {skill.status}
            </div>
          </div>
        ))}
      </div>

      {/* Roadmap */}
      <div className="m-4">
        <h1 className="flex items-center text-3xl p-4 gap-2 tracking-wider">
          <MdThunderstorm className="text-purple-900" />
          Placement Roadmap
        </h1>

        {roadmap.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition mb-4"
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-purple-100 flex items-center justify-center text-purple-950 text-2xl rounded-xl">
                {iconMap[item.iconType]}
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 text-xl">
                  {item.topic}
                </h3>

                <p className="text-xs text-gray-600 font-medium">
                  {item.status}
                </p>
              </div>
            </div>

            <div className="text-lg font-medium">
              {item.progress}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacementReadiness;