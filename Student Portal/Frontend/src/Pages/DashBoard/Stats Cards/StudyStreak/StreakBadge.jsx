import React from 'react';

function StreakBadge({ currentStreak }) {
  const badges = [
    {
      title: "7 Day Warrior",
      icon: "🔥",
      requirement: 7,
    },
    {
      title: "30 Day Consistency",
      icon: "🏅",
      requirement: 30,
    },
    {
      title: "50 Day Champion",
      icon: "🏆",
      requirement: 50,
    },
    {
      title: "100 Day Legend",
      icon: "⭐",
      requirement: 100,
    },
  ];

  return (
    <div className='bg-white rounded-3xl p-6 shadow-md'>
      <h2 className='text-xl font-semibold mb-4'>
        Achievements
      </h2>

      <div className='grid md:grid-cols-2 gap-4'>
        {badges.map((badge, index) => {
          const unlocked =
            currentStreak >= badge.requirement;

          return (
            <div
              key={index}
              className={`border rounded-xl p-4 flex items-center gap-4 transition ${
                unlocked
                  ? "hover:shadow-md"
                  : "opacity-50"
              }`}
            >
              <span className='text-3xl'>
                {badge.icon}
              </span>

              <div>
                <h3 className='font-semibold'>
                  {badge.title}
                </h3>

                <p
                  className={`text-sm ${
                    unlocked
                      ? "text-green-600"
                      : "text-gray-500"
                  }`}
                >
                  {unlocked
                    ? "Badge Unlocked 🎉"
                    : `${badge.requirement} Day Streak Required`}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StreakBadge;