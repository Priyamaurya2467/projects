import React, { useContext } from "react";
import { DashboardContext } from "../../DashboardContext";

function Leaderboard() {
  const { dashboardData } = useContext(DashboardContext);

  return (
    <div className="bg-white rounded-3xl p-6 shadow">
      <h2 className="text-xl font-semibold mb-4">
        Achievements
      </h2>

      <ul className="space-y-2">
        {dashboardData.achievements?.map((achievement, index) => (
          <li
            key={index}
            className="p-3 bg-purple-50 rounded-xl"
          >
            🏆 {achievement}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;