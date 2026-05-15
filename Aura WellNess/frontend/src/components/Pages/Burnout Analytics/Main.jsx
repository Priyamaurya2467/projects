import React, { useState } from "react";
import Header from "./Header";
import BurnoutStatusCard from "./Burnout.Status.Card";
import BurnoutAssessmentForm from "./Burnout.Assessment.form";
import AcademicLoadInsights from "./Academic.Load.Insights";
import AIwellnessRecommendation from "./AI.wellness.recommendation";
import Navigation from "../Dashboard/Navigation";

function BurnoutAnalysis() {
  const [assessmentData, setAssessmentData] = useState({
    workload: 7,
    sleepQuality: "Deep",
    cognitiveFatigue: 4,
    heartrate: 72,
    focustime: 6.2,
  });

  return (
    <>
      <Navigation />

      {/* ✅ FIXED: Better responsive container spacing */}
      {/* ✅ FIXED: Mobile padding reduced */}
      {/* ✅ FIXED: Added responsive left margin */}
      {/* ✅ FIXED: Prevent overflow on smaller screens */}
      <main className="mx-auto min-h-screen max-w-7xl px-4 pb-10 pt-24 sm:px-6 md:ml-64 md:px-8 lg:px-10">

        {/* Header */}
        <Header />

        {/* ✅ FIXED: Removed wrong class -> lg: grid-cols-12 */}
        {/* OLD:
            lg: grid-cols-12
        */}

        {/* ✅ FIXED: Proper responsive grid */}
        {/* Mobile -> 1 column */}
        {/* Tablet/Desktop -> 12 column layout */}
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-12">

          {/* Status Card */}
          <BurnoutStatusCard
            assessmentData={assessmentData}
          />

          {/* Assessment Form */}
          <BurnoutAssessmentForm
            assessmentData={assessmentData}
            setAssessmentData={setAssessmentData}
          />

          {/* Academic Insights */}
          <AcademicLoadInsights
            assessmentData={assessmentData}
            setAssessmentData={setAssessmentData}
          />

          {/* AI Recommendation */}
          <AIwellnessRecommendation
            assessmentData={assessmentData}
            setAssessmentData={setAssessmentData}
          />
        </div>
      </main>
    </>
  );
}

export default BurnoutAnalysis;