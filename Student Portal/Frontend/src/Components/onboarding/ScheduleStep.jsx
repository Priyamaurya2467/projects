import React from "react";

function ScheduleStep({ formData, setFormData }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">
        Study Schedule
      </h2>

      <label>
        Weekly Hours: {formData.weeklyHours}
      </label>

      <input
        type="range"
        min="5"
        max="50"
        value={formData.weeklyHours}
        onChange={(e) =>
          setFormData({
            ...formData,
            weeklyHours: e.target.value,
          })
        }
        className="w-full"
      />
    </div>
  );
}

export default ScheduleStep;