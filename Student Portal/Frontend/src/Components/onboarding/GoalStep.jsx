import React from "react";

function GoalsStep({ formData, handleGoalSelect, goals }) {
  return (
    <div className="grid grid-cols-2 gap-5">
      {goals.map((goal) => (
        <div
          key={goal.id}
          onClick={() => handleGoalSelect(goal.id)}
          className={`p-5 rounded-3xl cursor-pointer border
          ${
            formData.goals.includes(goal.id)
              ? "border-purple-600 bg-purple-50"
              : "border-gray-200"
          }`}
        >
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
  );
}

export default GoalsStep;