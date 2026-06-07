import React from "react";

function ScheduleStep({
  studyBest,
  formData,
  setFormData,
  handleStudyBestSelect,
}) {
  return (
    <>
      <div className="text-center p-3">
        <h1 className="text-3xl font-bold tracking-wider">
          Study Schedule & Preferences ⏰
        </h1>

        <p className="mt-1 text-gray-600">
          Help us understand your learning style
        </p>
      </div>

      <div className="flex flex-col w-full gap-5 bg-white p-5 rounded-3xl">
        <h3 className="font-semibold">
          How many hours per week can you dedicate to learning?
        </h3>

        <div className="flex justify-between items-center">
          <span className="text-gray-600">Study Hours</span>

          <span className="font-bold text-purple-600">
            {formData.studyHours} hrs/week
          </span>
        </div>

        <input
          type="range"
          min="0"
          max="50"
          step="5"
          value={formData.studyHours}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              studyHours: Number(e.target.value),
            }))
          }
          className="w-full cursor-pointer"
        />

      

        <h3 className="font-semibold mt-4">
          When do you study best?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {studyBest.map((item) => (
            <div
              key={item.id}
              onClick={() => handleStudyBestSelect(item.id)}
              className={`flex items-center gap-3 p-4 rounded-2xl cursor-pointer transition-all duration-300 border ${
                formData.studyBest === item.id
                  ? "border-2 border-purple-600 bg-purple-100"
                  : "border-gray-200 hover:border-purple-400"
              }`}
            >
              <div className="text-2xl">{item.symbol}</div>

              <h3 className="font-medium">
                {item.description}
              </h3>
            </div>
          ))}
        </div>
        
        <h3 className="font-semibold text-sm">Your Timezone</h3>
        <select name="timeZone" id="timeZone"
          value={formData.timeZone}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              timeZone: e.target.value
            }))
          }
        >
          <option value="IST">IST (Indian Standard Time)</option>
          <option value="UTC">UTC (Coordinated Universal Time)</option>
          <option value="EST">EST (Eastern Standard Time)</option>
          <option value="PST">PST (Pacific Standard Time)</option>
          <option value="GMT">GMT (Greenwich Mean Time)</option>
        </select>
      </div>
    </>
  );
}

export default ScheduleStep;