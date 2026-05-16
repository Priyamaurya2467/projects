import React, { useMemo } from "react";

function BurnoutStatusCard({
  assessmentData = {},
}) {

  // SAFE VALUES
  const workload = assessmentData?.workload ?? 5;
  const cognitiviFatigue =
    assessmentData?.cognitiviFatigue ?? 4;

  const heartrate =
    assessmentData?.heartrate ?? 72;

  const focustime =
    assessmentData?.focustime ?? 6.2;

  const sleepQuality =
    assessmentData?.sleepQuality ?? "Deep";

  // DAYS
  const days = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
  ];

  // DYNAMIC STATS
  const cards = [
    {
      content: "Focus",
      quantity: `${focustime}h`,
    },
    {
      content: "Stress",
      quantity: `${workload * 10}%`,
    },
    {
      content: "Recovery",
      quantity:
        workload > 7
          ? "32%"
          : workload > 4
          ? "65%"
          : "91%",
    },
    {
      content: "Sleep",
      quantity: sleepQuality,
    },
  ];

  // DYNAMIC GRAPH
  const graphPoints = useMemo(() => {

    return [
      {
        x: 0,
        y: 130 - workload * 4,
      },

      {
        x: 160,
        y: 140 - cognitiviFatigue * 5,
      },

      {
        x: 320,
        y: 150 - focustime * 10,
      },

      {
        x: 520,
        y: 180 - (heartrate - 60) * 2,
      },

      {
        x: 800,
        y:
          sleepQuality === "Deep"
            ? 70
            : sleepQuality === "REMT"
            ? 90
            : 140,
      },
    ];
  }, [
    workload,
    cognitiviFatigue,
    heartrate,
    focustime,
    sleepQuality,
  ]);

  // CREATE CURVE
  const createSmoothPath = (points) => {

    if (!points.length) return "";

    let path = `M ${points[0].x} ${points[0].y}`;

    for (let i = 1; i < points.length; i++) {

      const prev = points[i - 1];
      const curr = points[i];

      const cpX = (prev.x + curr.x) / 2;

      path += `
        C ${cpX} ${prev.y},
          ${cpX} ${curr.y},
          ${curr.x} ${curr.y}
      `;
    }

    return path;
  };

  const linePath =
    createSmoothPath(graphPoints);

  const fillPath = `
    ${linePath}
    L 800 200
    L 0 200
    Z
  `;

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 pt-6 shadow-[0_0_30px_rgba(255,255,255,0.04)] backdrop-blur-xl sm:p-6 lg:p-8">

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-emerald-500/5" />

      {/* HEADER */}
      <div className="relative z-10 mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
            Weekly Stress Equilibrium
          </h3>

          <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-gray-500 sm:text-xs">
            Real-time Biometric Analysis
          </p>
        </div>

        <span className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">

          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

          {workload > 7
            ? "High Stress"
            : workload > 4
            ? "Balanced"
            : "Optimal Flow"}
        </span>
      </div>

      {/* CHART */}
      <div className="relative z-10 h-52 w-full sm:h-60">

        <svg
          className="h-full w-full"
          viewBox="0 0 800 200"
          fill="none"
        >

          {/* GRID */}
          {[50, 100, 150].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="800"
              y2={y}
              stroke="rgba(255,255,255,0.04)"
            />
          ))}

          {/* GRADIENT */}
          <defs>
            <linearGradient id="waveGradient">
              <stop
                offset="0%"
                stopColor="#c4b5fd"
              />

              <stop
                offset="50%"
                stopColor="#d8b4fe"
              />

              <stop
                offset="100%"
                stopColor="#6ee7b7"
              />
            </linearGradient>
          </defs>

          {/* MAIN LINE */}
          <path
            d={linePath}
            stroke="url(#waveGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            className="transition-all duration-700 ease-in-out"
          />

          {/* FILL */}
          <path
            d={fillPath}
            fill="url(#waveGradient)"
            fillOpacity="0.06"
            className="transition-all duration-700 ease-in-out"
          />

          {/* POINTS */}
          {graphPoints.map((point, index) => (
            <g key={index}>

              <circle
                cx={point.x}
                cy={point.y}
                r="10"
                fill="white"
                opacity="0.05"
              />

              <circle
                cx={point.x}
                cy={point.y}
                r="5"
                fill={
                  index % 2 === 0
                    ? "#d8b4fe"
                    : "#6ee7b7"
                }
              />
            </g>
          ))}
        </svg>

        {/* DAYS */}
        <div className="mt-4 flex justify-between text-[11px] text-gray-500 sm:text-sm">
          {days.map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>
      </div>

      {/* STATS */}
      <div className="relative z-10 mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">

        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-md transition hover:border-white/20 hover:bg-white/10"
          >

            <p className="text-[11px] text-gray-400 sm:text-xs">
              {card.content}
            </p>

            <p className="mt-2 text-lg font-semibold text-white sm:text-xl">
              {card.quantity}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BurnoutStatusCard;