import React from 'react';

function StreakCalender({ activityDates = [] }) {

  const today = new Date();

  const weekDays = [];

  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(today.getDate() - i);

    const dateString = date.toISOString().split("T")[0];

    weekDays.push({
      day: date.toLocaleDateString("en-US", {
        weekday: "short",
      }),
      active: activityDates.includes(dateString),
    });
  }

  return (
    <div className='bg-white rounded-3xl p-6 shadow-md'>
      <h2 className='text-3xl font-semibold mb-4'>
        Weekly Activity
      </h2>

      <div className='flex justify-between'>
        {weekDays.map((item, index) => (
          <div
            key={index}
            className='flex flex-col items-center gap-2'
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                item.active
                  ? "bg-green-500"
                  : "bg-gray-300"
              }`}
            >
              {item.day[0]}
            </div>

            <span className='text-sm text-gray-600'>
              {item.day}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StreakCalender;