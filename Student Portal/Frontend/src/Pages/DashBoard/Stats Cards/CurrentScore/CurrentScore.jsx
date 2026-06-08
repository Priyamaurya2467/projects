import React, { useContext } from "react";
import { DashboardContext } from "../../DashboardContext";
import ScoreHistory from "./ScoreHistory";
import Leaderboard from "./Leaderboard";

export default function CurrentScore() {
  const { dashboardData } = useContext(DashboardContext);

  const performance = dashboardData?.performance || {};

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          📊 Learning Overview
        </h1>

        <p className="text-gray-500">
          Your learning and placement preparation progress
        </p>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-3xl p-6 shadow-md">
        <h2 className="text-gray-500">
          Primary Goal
        </h2>

        <h1 className="text-4xl font-bold text-purple-600">
          {dashboardData.goal || "Not Set"}
        </h1>

        <p className="text-gray-500 mt-2">
          Track your progress toward this goal.
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white rounded-3xl p-5 shadow">
          <h3 className="text-gray-500">Courses</h3>
          <p className="text-3xl font-bold">
            {performance.coursesCompleted || 0}
          </p>
        </div>

        <div className="bg-white rounded-3xl p-5 shadow">
          <h3 className="text-gray-500">DSA Problems</h3>
          <p className="text-3xl font-bold">
            {performance.problemsSolved || 0}
          </p>
        </div>

        <div className="bg-white rounded-3xl p-5 shadow">
          <h3 className="text-gray-500">Mock Tests</h3>
          <p className="text-3xl font-bold">
            {performance.mockTests || 0}
          </p>
        </div>

        <div className="bg-white rounded-3xl p-5 shadow">
          <h3 className="text-gray-500">Certificates</h3>
          <p className="text-3xl font-bold">
            {performance.certifications || 0}
          </p>
        </div>
      </div>

      <ScoreHistory />
      <Leaderboard />
    </div>
  );
}