import React, { useEffect, useState } from 'react';
import { FaFire, FaTrophy } from 'react-icons/fa6';
import StreakCalender from './StreakCalender';
import StreakBadge from './StreakBadge';

function StudyStreak() {
  const [activities, setActivities] = useState([]);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  useEffect(() => {
    const storedActivities =
      JSON.parse(localStorage.getItem("studyActivities")) || [];

    setActivities(storedActivities);
    setCurrentStreak(calculateCurrentStreak(storedActivities));
    setLongestStreak(calculateLongestStreak(storedActivities));
  }, []);

  const calculateCurrentStreak = (dates) => {
    let streak = 0;
    let currentDate = new Date();

    while (true) {
      const dateString = currentDate.toISOString().split("T")[0];

      if (dates.includes(dateString)) {
        streak++;
        currentDate.setDate(currentDate.getDate() - 1);
      } else {
        break;
      }
    }

    return streak;
  };

  const calculateLongestStreak = (dates) => {
    if (!dates.length) return 0;

    const sortedDates = [...dates].sort();

    let longest = 1;
    let current = 1;

    for (let i = 1; i < sortedDates.length; i++) {
      const prev = new Date(sortedDates[i - 1]);
      const curr = new Date(sortedDates[i]);

      const diff = (curr - prev) / (1000 * 60 * 60 * 24);

      if (diff === 1) {
        current++;
        longest = Math.max(longest, current);
      } else {
        current = 1;
      }
    }

    return longest;
  };

  const markStudyActivity = () => {
    const today = new Date().toISOString().split("T")[0];

    if (!activities.includes(today)) {
      const updatedActivities = [...activities, today];

      localStorage.setItem(
        "studyActivities",
        JSON.stringify(updatedActivities)
      );

      setActivities(updatedActivities);

      setCurrentStreak(
        calculateCurrentStreak(updatedActivities)
      );

      setLongestStreak(
        calculateLongestStreak(updatedActivities)
      );
    }
  };

  const getMotivation = () => {
    if (currentStreak >= 30) {
      return "Amazing consistency! Keep it up 🔥";
    }

    if (currentStreak >= 7) {
      return "You're building a strong habit 🚀";
    }

    return "Start small and stay consistent 💪";
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          🔥 Study Streak
        </h1>

        <p className="text-gray-500">
          Track your consistency and achievements
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl p-6 shadow-md">
          <FaFire className="text-orange-500 text-4xl mb-4" />

          <h3 className="text-gray-500">
            Current Streak
          </h3>

          <p className="text-5xl font-bold">
            {currentStreak} Days
          </p>

          <p className="text-green-500 mt-2">
            Keep Going 🚀
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-md">
          <FaTrophy className="text-yellow-500 text-4xl mb-4" />

          <h3 className="text-gray-500">
            Longest Streak
          </h3>

          <p className="text-5xl font-bold">
            {longestStreak} Days
          </p>

          <p className="text-purple-500 mt-2">
            Personal Best
          </p>

          <button
            onClick={markStudyActivity}
            className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
          >
            Complete Today's Study
          </button>
        </div>
      </div>

      <StreakCalender activityDates={activities} />

      <StreakBadge currentStreak={currentStreak} />

      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-3xl p-6">
        <h2 className="text-2xl font-bold">
          Motivation Corner
        </h2>

        <p className="mt-2">
          {getMotivation()}
        </p>
      </div>
    </div>
  );
}

export default StudyStreak;