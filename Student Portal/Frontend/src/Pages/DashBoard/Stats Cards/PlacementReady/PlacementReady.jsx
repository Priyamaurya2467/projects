import React from "react";
import SkillsProgress from "./SkillsProgress";
import Roadmap from "./Roadmap";

function PlacementReady() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          🚀 Placement Readiness
        </h1>

        <p className="text-gray-500">
          Track your preparation journey
        </p>
      </div>

      {/* Overall Readiness Card */}
      <div className="bg-white rounded-3xl p-6 shadow-md">
        <h2 className="text-xl text-gray-500">
          Overall Readiness
        </h2>

        <p className="text-6xl font-bold text-purple-600 mt-2">
          78%
        </p>

        <p className="text-green-600 mt-2">
          You're on track for placements!
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-3xl p-5 shadow">
          <h3 className="text-gray-500">
            Problems Solved
          </h3>

          <p className="text-3xl font-bold">
            320
          </p>
        </div>

        <div className="bg-white rounded-3xl p-5 shadow">
          <h3 className="text-gray-500">
            Mock Interviews
          </h3>

          <p className="text-3xl font-bold">
            8
          </p>
        </div>

        <div className="bg-white rounded-3xl p-5 shadow">
          <h3 className="text-gray-500">
            Resume Score
          </h3>

          <p className="text-3xl font-bold">
            90%
          </p>
        </div>
      </div>

      {/* Skills Progress */}
      <SkillsProgress />

      {/* Roadmap */}
      <Roadmap />

      {/* AI Recommendation */}
      <div className="bg-purple-100 rounded-3xl p-6">
        <h2 className="font-semibold text-xl mb-2">
          🤖 AI Recommendation
        </h2>

        <p className="text-gray-700">
          Focus on Trees, Graphs, and Mock
          Interviews to increase your placement
          readiness from <strong>78%</strong> to{" "}
          <strong>90%</strong>.
        </p>
      </div>
    </div>
  );
}

export default PlacementReady;