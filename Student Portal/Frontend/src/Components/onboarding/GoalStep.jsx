import React from "react";

function GoalsStep({ formData, handleGoalSelect, goals }) {
  return (
    <>
    <div className="text-center p-3">
        <h1 className="text-3xl font-bold tracking-wider">
          What are your goals? 🎯
        </h1>

        <p className="mt-1 text-gray-600">
          Select all that applies
        </p>
    </div> 

    <div className="grid grid-cols-2 gap-5 bg-white p-8 rounded-4xl">
      {goals.map((goal) => (
        <div
          key={goal.id}
          onClick={() => handleGoalSelect(goal.id)}
          className={`relative p-5 rounded-3xl cursor-pointer border transition-all duration-300
          ${
            formData.goals.includes(goal.id)
              ? "border-purple-600 bg-purple-100 border-2"
              : "border-gray-200 hover:border-purple-600"
          }`}
        >

            {formData.goals.includes(goal.id) && (
                <div className="absolute top-3 right-3 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
              )}
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center ${goal.color}`}
          >
            {goal.icon}
          </div>

          <h3 className="font-semibold mt-3">{goal.title}</h3>
          <p className="text-sm text-gray-500 mt-1">
            {goal.description}
          </p>
        </div>
      ))}
    </div>
    </>
  );
}

export default GoalsStep;