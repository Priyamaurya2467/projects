import React, { useContext } from "react";
import { DashboardContext } from "../../DashboardContext";

function ScoreHistory() {
  const { dashboardData } = useContext(DashboardContext);

  return (
    <div className="bg-white rounded-3xl p-6 shadow">
      <h2 className="text-xl font-semibold mb-4">
        Progress History
      </h2>

      <div className="space-y-3">
        {dashboardData.progressHistory?.map((item, index) => (
          <div
            key={index}
            className="flex justify-between border-b pb-2"
          >
            <span>{item.month}</span>
            <span className="font-semibold">{item.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScoreHistory;