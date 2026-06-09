import React from "react";
import SkillsProgress from "./SkillsProgress";
import Roadmap from "./Roadmap";
import { useLocation } from "react-router-dom";

function PlacementReady() {
  const defaultSkills = [
  { name: "DSA", progress: 85 },
  { name: "Aptitude", progress: 70 },
  { name: "Resume Building", progress: 90 },
  { name: "Communication", progress: 75 },
  { name: "Mock Interviews", progress: 60 },
];
  const defaultRoadmap = [
        {
            title: "Complete Arrays & Strings",
            status: "Completed",
        },
        {
            title: "Master Linked Lists",
            status: "Completed",
        },
        {
            title: "Practice Trees",
            status: "In Progress",
        },
        {
            title: "Mock Interview Round 1",
            status: "Pending",
        },
        {
            title: "Resume Review",
            status: "Pending",
        }
    ]
  const location = useLocation();

  const {
    readiness = 0,
    problemSolved = 0,
    mockinterviews = 0,
    resumeScore = 0,
    recommendation = "No recommendations available.",
    skills = defaultSkills,
    roadmap = defaultRoadmap,
  } = location.state || {}
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
          {readiness}%
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
            {problemSolved}
          </p>
        </div>

        <div className="bg-white rounded-3xl p-5 shadow">
          <h3 className="text-gray-500">
            Mock Interviews
          </h3>

          <p className="text-3xl font-bold">
            {mockinterviews}
          </p>
        </div>

        <div className="bg-white rounded-3xl p-5 shadow">
          <h3 className="text-gray-500">
            Resume Score
          </h3>

          <p className="text-3xl font-bold">
            {resumeScore}
          </p>
        </div>
      </div>

      {/* Skills Progress */}
      <SkillsProgress skill = {skills} />

      {/* Roadmap */}
      <Roadmap roadmaps = {roadmap}/>

      {/* AI Recommendation */}
      <div className="bg-purple-100 rounded-3xl p-6">
        <h2 className="font-semibold text-xl mb-2">
          🤖 AI Recommendation
        </h2>

        <p className="text-gray-700">
          {recommendation}
        </p>
      </div>
    </div>
  );
}

export default PlacementReady;