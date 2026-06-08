import React, { useState } from "react";
import { FaBook, FaBriefcase, FaHeart, FaUsers } from "react-icons/fa6";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

import WelcomeStep from "../../Components/onboarding/WelcomeStep";
import GoalsStep from "../../Components/onboarding/GoalStep";
import ScheduleStep from "../../Components/onboarding/ScheduleStep";
import NotificationStep from "../../Components/onboarding/Notifications";
import { useLocation, useNavigate } from "react-router-dom";

function OnBoarding() {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1);
  const location = useLocation()
  const user = location.state?.user
  const [formData, setFormData] = useState({
  goals: [],
  weeklyHours: 20,
  studyTime: "",
  timezone: "",
  pushNotification: true,
  emailUpdates: true,

  // Schedule step data
  studyBest: "",
  studyHours: 10,
});

  const handleGoalSelect = (goalId) => {
    setFormData((prev) => ({
      ...prev,
      goals: prev.goals.includes(goalId)
        ? prev.goals.filter((id) => id !== goalId)
        : [...prev.goals, goalId],
    }));
  };

  const handleStudyBestSelect = (id) => {
  setFormData((prev) => ({
    ...prev,
    studyBest: id,
  }));
};

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const progress = (currentStep / 4) * 100;

  const goals = [
    {
      id: "gate",
      title: "Master GATE",
      description:
        "Prepare for GATE with study plans, PYQs and mock tests.",
      icon: <FaBook />,
      color: "bg-blue-100",
    },
    {
      id: "placement",
      title: "Secure Placement",
      description:
        "Practice aptitude, coding and interview skills.",
      icon: <FaBriefcase />,
      color: "bg-green-100",
    },
    {
      id: "wellness",
      title: "Improve Wellness",
      description:
        "Build healthy habits and manage academic stress.",
      icon: <FaHeart />,
      color: "bg-pink-100",
    },
    {
      id: "community",
      title: "Join Community",
      description:
        "Connect and collaborate with fellow students.",
      icon: <FaUsers />,
      color: "bg-purple-100",
    },
  ];

  const studyBest = [
    {
      id: "morning",
      symbol: "🌅",
      description: "Early Morning"
    },

    {
      id: "afternoon",
      symbol: "☀️",
      description: "Afternoon"
    },

    {
      id: "evening",
      symbol: "🌃",
      description: "Evening"
    },

     {
      id: "night",
      symbol: "🌙",
      description: "Night Owl"
    },

    {
      id: "alarm",
      symbol: "⏰",
      description: "Mixed Schedule"
    },

  ]

  return (
  <div className="min-h-screen bg-gradient-to-r from-pink-50 via-purple-50 to-pink-100 flex flex-col items-center p-8">

      {/* Progress Section */}
      <div className="w-full max-w-4xl mb-8 p-4">
        <div className="flex justify-between mb-2">
          <span className="font-medium text-xs text-gray-600 ">
            Step {currentStep} of 4
          </span>

          <span className="text-xs text-blue-600 font-semibold">{progress}%</span>
        </div>

        <div className="w-full h-2 bg-white/50 rounded-full">
          <div
            className="h-2 bg-gradient-to-r from-purple-100 via-purple-300 to-purple-500 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

     

     
      {currentStep === 1 && <WelcomeStep user={user} />}

      {currentStep === 2 && (
        <GoalsStep
          goals={goals}
          formData={formData}
          handleGoalSelect={handleGoalSelect}
        />
      )}

      {currentStep === 3 && (
  <ScheduleStep
    studyBest={studyBest}
    formData={formData}
    setFormData={setFormData}
    handleStudyBestSelect={handleStudyBestSelect}
  />
)}

      {currentStep === 4 && (
        <NotificationStep
          formData={formData}
          setFormData={setFormData}
        />
      )}
    

      <div className="flex justify-between mt-10 gap-3 ">
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className="flex items-center justify-center  gap-2 px-5 py-3 rounded-full bg-gray-100 disabled:opacity-50 w-50 transition-all duration-300 hover:bg-gray-200 hover:-translate-y-2 hover:scale-105 shadow-md hover:shadow-xl"
        >
          <MdArrowBack />
          Previous
        </button>

        {currentStep < 4 ? (
          <button
            onClick={nextStep}
            className="flex items-center justify-center gap-2 px-5 py-3 w-50 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300 hover:bg-gray-200 hover:-translate-y-2 hover:scale-105 shadow-md hover:shadow-xl"
          >
            Next
            <MdArrowForward />
          </button>
        ) : (
          <button
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-green-600 text-white hover:bg-green-700" onClick={()=>navigate('/dashboard')}
          >
            Complete Setup
          </button>
        )}
      </div>

      <p className="text-sm py-3 text-gray-400 hover:bg-black">Skip for now</p>
    </div>
  
);
}

export default OnBoarding;