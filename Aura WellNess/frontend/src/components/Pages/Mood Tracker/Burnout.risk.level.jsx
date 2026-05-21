import React, { useMemo } from 'react'

import {
  MdCheckCircle,
  MdTrendingUp,
  MdWarning,
} from 'react-icons/md'

import {
  FaBrain,
  FaMoon,
  FaBriefcase,
  FaUsers,
} from 'react-icons/fa'

function Burnoutrisklevel() {
  const metrics = {
    sleepQuality: 85,
    workload: 42,
    socialBattery: 68,
    stressLevel: 34,
  }

  /*
    ----------------------------------------
    BURNOUT SCORE
    ----------------------------------------
  */

  const burnoutScore = useMemo(() => {
    const score =
      metrics.workload * 0.35 +
      metrics.stressLevel * 0.35 +
      (100 - metrics.sleepQuality) * 0.2 +
      (100 - metrics.socialBattery) * 0.1

    return Math.round(score)
  }, [])

  /*
    ----------------------------------------
    RISK DATA
    ----------------------------------------
  */

  const riskData = useMemo(() => {
    if (burnoutScore < 35) {
      return {
        label: 'LOW RISK',
        badgeClass:
          'border-emerald-400/20 bg-emerald-400/10 text-emerald-300',
        icon: <MdCheckCircle size={18} />,
        advice:
          'Your recovery patterns look healthy. Keep maintaining balanced routines.',
      }
    }

    if (burnoutScore < 70) {
      return {
        label: 'MODERATE',
        badgeClass:
          'border-yellow-400/20 bg-yellow-400/10 text-yellow-300',
        icon: <MdTrendingUp size={18} />,
        advice:
          'Your workload is increasing. Consider short breaks and lighter evenings.',
      }
    }

    return {
      label: 'HIGH RISK',
      badgeClass:
        'border-red-400/20 bg-red-400/10 text-red-300',
      icon: <MdWarning size={18} />,
      advice:
        'Your stress indicators are elevated. Prioritize rest and reduce overload.',
    }
  }, [burnoutScore])

  /*
    ----------------------------------------
    PROGRESS BAR
    ----------------------------------------
  */

  const ProgressBar = ({
    icon,
    label,
    value,
    barColor,
    textColor,
  }) => {
    return (
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className={`rounded-xl p-2 ${textColor} bg-white/5`}
            >
              {icon}
            </div>

            <span className="text-sm font-medium tracking-wide text-gray-300">
              {label}
            </span>
          </div>

          <span className={`text-sm font-semibold ${textColor}`}>
            {value}%
          </span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-white/5">
          <div
            className={`h-full rounded-full transition-all duration-700 ${barColor}`}
            style={{ width: `${value}%` }}
          />
        </div>
      </div>
    )
  }

  return (
    <section
      className="
        col-span-12
        lg:col-span-4
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
        shadow-[0_0_40px_rgba(255,255,255,0.05)]
      "
    >
      {/* HEADER */}

      <header className="mb-8 flex items-start justify-between">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <div className="rounded-2xl bg-violet-500/10 p-3 text-violet-300">
              <FaBrain size={24} />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">
                Burnout Risk
              </h2>

              <p className="text-sm text-gray-400">
                AI wellness monitoring
              </p>
            </div>
          </div>
        </div>

        <div
          className={`
            flex items-center gap-2
            rounded-full border px-4 py-2
            text-sm font-semibold
            ${riskData.badgeClass}
          `}
        >
          {riskData.icon}
          {riskData.label}
        </div>
      </header>

      {/* SCORE */}

      <div className="mb-10">
        <div className="mb-3 flex items-end gap-2">
          <h1 className="text-5xl font-black text-white">
            {burnoutScore}
          </h1>

          <span className="mb-1 text-gray-400">/100</span>
        </div>

        <p className="text-sm leading-relaxed text-gray-400">
          This score is calculated from stress patterns,
          workload intensity, social energy, and recovery quality.
        </p>
      </div>

      {/* METRICS */}

      <div className="space-y-7">
        <ProgressBar
          icon={<FaMoon size={16} />}
          label="Sleep Quality"
          value={metrics.sleepQuality}
          barColor="bg-emerald-400"
          textColor="text-emerald-400"
        />

        <ProgressBar
          icon={<FaBriefcase size={16} />}
          label="Workload"
          value={metrics.workload}
          barColor="bg-cyan-400"
          textColor="text-cyan-400"
        />

        <ProgressBar
          icon={<FaUsers size={16} />}
          label="Social Battery"
          value={metrics.socialBattery}
          barColor="bg-violet-400"
          textColor="text-violet-400"
        />

        <ProgressBar
          icon={<MdWarning size={16} />}
          label="Stress Level"
          value={metrics.stressLevel}
          barColor="bg-rose-400"
          textColor="text-rose-400"
        />
      </div>

      {/* AI INSIGHT */}

      <div className="mt-10 rounded-2xl border border-white/10 bg-black/20 p-5">
        <div className="mb-3 flex items-center gap-2">
          <div className="rounded-lg bg-violet-500/10 p-2 text-violet-300">
            <FaBrain size={18} />
          </div>

          <h3 className="font-semibold text-violet-200">
            Pulse AI Insight
          </h3>
        </div>

        <p className="text-sm leading-relaxed text-gray-300">
          {riskData.advice}
        </p>
      </div>

      {/* MINI STATS */}

      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs uppercase tracking-wider text-gray-500">
            Recovery Trend
          </p>

          <h3 className="mt-2 text-xl font-bold text-emerald-300">
            +12%
          </h3>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs uppercase tracking-wider text-gray-500">
            Focus Stability
          </p>

          <h3 className="mt-2 text-xl font-bold text-cyan-300">
            Stable
          </h3>
        </div>
      </div>
    </section>
  )
}

export default Burnoutrisklevel