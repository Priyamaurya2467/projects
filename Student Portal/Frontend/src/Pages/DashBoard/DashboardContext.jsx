import { createContext, useState } from "react";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [dashboardData , setDashboardData] = useState({
    streak: {
      current: 47,
      longest: 65,
    },

    score: {
      current: 687,
      xp: 3450,
      level: 6,
      nextLevel:700
    },

    studyHours: {
      today: 2.3,
      week: 18.5,
      month: 74,
    },

    placementReady: {
      overall: 78,
      dsa: 85,
      aptitude: 70,
      resume: 90,
      interviews: 60,
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