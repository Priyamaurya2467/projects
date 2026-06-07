import React from "react";
import Leaderboard from "./Leaderboard";
import ScoreHistory from "./ScoreHistory";
import { useContext } from "react";
import { DashboardContext } from "../../DashboardContext";


export default function CurrentScore(){
    const {dashboardData} = useContext(DashboardContext)
    return (
        <>
        <div className="p-6 space-y-6">
            <div>
                <h1 className="text-3xl font-bold">
                    🎯 Learning Score
                </h1>

                <p className="text-gray-500">
                    Track your learning performance
                </p>
            </div>

            {/* Score Card */}
            <div className="bg-white rounded-3xl p-6 shadow-md">
                <h2 className="text-gray-500">
                    Current Score
                </h2>
                <h1 className="text-6xl font-bold text-purple-600">
                    {dashboardData.score.current}
                </h1>
                <p className="text-green-600 mt-2 ">
                    +12 points this week
                </p>
            </div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-3xl p-5 shadow">
                    <h3 className="text-gray-500">
                        Level
                    </h3>

                    <p className="text-3xl font-bold">
                        {dashboardData.score.level}
                    </p>
                 </div>

                <div className="bg-white rounded-3xl p-5 shadow">
                    <h3 className="text-gray-500">
                        XP Earned
                    </h3>

                    <p className="text-3xl font-bold">
                        {dashboardData.score.xp}
                    </p>
                </div>

                <div className="bg-white rounded-3xl p-5 shadow">
                    <h3 className="text-gray-500">
                        Next Level
                    </h3>

                    <p className="text-3xl font-bold">
                        {dashboardData.score.nextLevel}
                    </p>
                </div>
            </div>
            <ScoreHistory/>
            <Leaderboard/>
        </div>
        </>
    )
}