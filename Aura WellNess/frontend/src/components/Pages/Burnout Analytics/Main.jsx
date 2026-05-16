import React, { useState } from "react";
import Header from "./Header";
import BurnoutStatusCard from "./Burnout.Status.Card";
import BurnoutAssessmentForm from "./Burnout.Assessment.form";
import AcademicLoadInsights from "./Academic.Load.Insights";
import AIwellnessRecommendation from "./AI.wellness.recommendation";
import Navigation from "../Dashboard/Navigation";

import {
  MdArchitecture,
  MdMenuBook,
  MdTerminal,
} from "react-icons/md";


function BurnoutAnalysis() {
  const [assessmentData, setAssessmentData] = useState({
    workload: 7,
    sleepQuality: "Deep",
    cognitiveFatigue: 4,
    heartrate: 72,
    focustime: 6.2,
  });

  const [subjects , setSubjects] = useState([
        {
              id: 1,
              name: "Adv. Physics",
              hours: 12,
              stress: 85,
              icon: <MdMenuBook />,
          
        },
        {
  
          id: 2,
          name: "Design Systems",
          hours: 8,
          stress: 45,
          icon: <MdArchitecture />,
  
        },
  
        {
              id: 3,
              name: "Neural Networks",
              hours: 15,
              stress: 70,
              icon: <MdTerminal />,
        }
    ])

  return (
    <>
      <Navigation />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">

  {/* LEFT SIDE */}
  <div className="space-y-6 lg:col-span-8">

    {/* GRAPH CARD */}
    <BurnoutStatusCard
      assessmentData={assessmentData}
    />

   

    {/* ACADEMIC INSIGHTS */}
    <AcademicLoadInsights
      assessmentData={assessmentData}
      setAssessmentData={setAssessmentData}
      subjects = {subjects}
      setSubjects = {setSubjects}
    />

    {/* AI RECOMMENDATIONS */}
    <AIwellnessRecommendation
      assessmentData={assessmentData}
      setAssessmentData={setAssessmentData}
    />
  </div>

  {/* RIGHT SIDE */}
  <div className="lg:col-span-4">

    <BurnoutAssessmentForm
      assessmentData={assessmentData}
      setAssessmentData={setAssessmentData}
    />
    
  </div>
</div>

      
    </>
  );
}

export default BurnoutAnalysis;