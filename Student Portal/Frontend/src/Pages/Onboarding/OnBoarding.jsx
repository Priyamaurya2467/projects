import React, { useState } from "react";
import { FaBook, FaBriefcase, FaHeart, FaUsers } from "react-icons/fa6";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

import WelcomeStep from "../../Components/onboarding/WelcomeStep";
import GoalsStep from "../../Components/onboarding/GoalStep";
import ScheduleStep from "../../Components/onboarding/ScheduleStep";
import NotificationStep from "../../Components/onboarding/Notifications";

function OnBoarding() {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    goals: [],
    weeklyHours: 20,
    studyTime: "",
    timezone: "",
    pushNotification: true,
    emailUpdates: true,
  });

  const handleGoalSelect = (goalId) => {
    setFormData((prev) => ({
      ...prev,
      goals: prev.goals.includes(goalId)
        ? prev.goals.filter((id) => id !== goalId)
        : [...prev.goals, goalId],
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

  return (
  <div className="min-h-screen bg-gradient-to-r from-pink-50 via-purple-50 to-pink-100 flex flex-col items-center p-8">

    {/* Progress Section */}
    <div className="w-full max-w-4xl mb-8">
      <div className="flex justify-between mb-2">
        <span className="font-medium">
          Step {currentStep} of 4
        </span>

        <span>{progress}%</span>
      </div>

      <div className="w-full h-3 bg-gray-200 rounded-full">
        <div
          className="h-full bg-purple-600 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>

    {/* Greeting Section */}
    <div className="text-center">
      <h1 className="text-4xl font-bold">
        Welcome to StudentSphere 👋
      </h1>

      <p className="mt-4 text-gray-600">
        Let's personalize your learning experience.
      </p>
    </div>

    {/* Main Card */}
    <div className="w-full max-w-4xl rounded-3xl p-8 bg-white/80 backdrop-blur-lg shadow-xl border border-white/30">

      {currentStep === 1 && <WelcomeStep />}

      {currentStep === 2 && (
        <GoalsStep
          goals={goals}
          formData={formData}
          handleGoalSelect={handleGoalSelect}
        />
      )}

      {currentStep === 3 && (
        <ScheduleStep
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {currentStep === 4 && (
        <NotificationStep
          formData={formData}
          setFormData={setFormData}
        />
      )}

      <div className="flex justify-between mt-10">
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gray-200 disabled:opacity-50"
        >
          <MdArrowBack />
          Previous
        </button>

        {currentStep < 4 ? (
          <button
            onClick={nextStep}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-purple-600 text-white hover:bg-purple-700"
          >
            Next
            <MdArrowForward />
          </button>
        ) : (
          <button
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-green-600 text-white hover:bg-green-700"
          >
            Complete Setup
          </button>
        )}
      </div>
    </div>
  </div>
);
}

export default OnBoarding;