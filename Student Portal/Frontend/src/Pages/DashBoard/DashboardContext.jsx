import { createContext, useState } from "react";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [dashboardData , setDashboardData] = useState({
    streak: {
      current: 0,
      longest: 0,
    },

    score: {
      current: 0,
      xp: 0,
      level: 1,
      nextLevel:2
    },

    studyHours: {
      today: 0,
      week: 0,
      month: 0,
    },

    placementReady: {
      overall:0,
      dsa: 0,
      aptitude: 0,
      resume: 0,
      interviews: 0,
    },
  });

  return (
    <DashboardContext.Provider
      value={{ dashboardData , setDashboardData }}
    >
      {children}
    </DashboardContext.Provider>
  );
};