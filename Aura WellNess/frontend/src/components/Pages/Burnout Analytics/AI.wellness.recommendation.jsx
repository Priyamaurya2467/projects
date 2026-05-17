import React, { useState, useEffect } from "react";
import { MdAutoAwesome } from "react-icons/md";
import { model } from "../../../utils/gemini";

function AIwellnessRecommendation({
  assessmentData = {},
  subjects = [],
}) {
  const [loading, setLoading] = useState(false);

  const [recommendation, setRecommendation] =
    useState("");

  const workload =
    assessmentData?.workload ?? 5;

  const fatigue =
    assessmentData?.cognitiveFatigue ?? 4;

  const sleepQuality =
    assessmentData?.sleepQuality ?? "Deep";

  const heartrate =
    assessmentData?.heartrate ?? 72;

  const focustime =
    assessmentData?.focustime ?? 6.2;

  // TOTAL HOURS
  const totalHours = subjects.reduce(
    (acc, item) =>
      acc + Number(item.hours),
    0
  );

  // GENERATE AI RESPONSE
  const generateAIRecommendation =
    async () => {
      try {
        setLoading(true);

        const prompt = `
You are an AI wellness coach.

Analyze these student health metrics:

Workload: ${workload}/10
Cognitive Fatigue: ${fatigue}/10
Sleep Quality: ${sleepQuality}
Heart Rate: ${heartrate}
Focus Time: ${focustime} hours
Total Study Load: ${totalHours} hours/week

Give:
1. Burnout risk
2. Wellness advice
3. Recovery recommendation
4. Productivity suggestion

Keep response under 120 words.
`;

        const result =
          await model.generateContent(
            prompt
          );

        const response =
          await result.response;

        const text = response.text();

        setRecommendation(text);

      } catch (error) {
        console.log("GEMINI Error",error);

        setRecommendation(
          "Unable to generate recommendation right now."
        );

      } finally {
        setLoading(false);
      }
    };

  // AUTO GENERATE
  useEffect(() => {
    generateAIRecommendation();
  }, [
    workload,
    fatigue,
    sleepQuality,
    heartrate,
    focustime,
    totalHours,
  ]);

  return (
    <>
      <section className="lg:col-span-12">

        <div className="flex flex-col gap-10 rounded-3xl border border-violet-400/20 bg-white/5 p-8 shadow-[0_0_40px_rgba(167,139,250,0.15)] backdrop-blur-xl md:flex-row">

          {/* IMAGE */}
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl md:w-1/3">

            <img
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop"
              alt="AI Wellness"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

            <div className="absolute bottom-5 left-5">

              <span className="rounded-full border border-violet-400/30 bg-violet-400/20 px-4 py-2 text-sm text-violet-300 backdrop-blur-md">

                AI Insight
              </span>
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex flex-1 flex-col justify-center">

            <div className="mb-6">

              <div className="mb-3 flex items-center gap-3 text-violet-300">

                <MdAutoAwesome className="text-3xl" />

                <h4 className="text-3xl font-bold text-white">

                  Gemini AI Wellness Recommendation
                </h4>
              </div>

              <p className="leading-relaxed text-gray-300 md:text-lg">

                {loading
                  ? "Analyzing biometric and academic patterns..."
                  : recommendation}
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4">

              <button className="rounded-2xl bg-violet-400 px-8 py-4 font-bold text-black shadow-lg shadow-violet-400/20 transition hover:scale-105">

                Accept Recommendation
              </button>

              <button
                onClick={
                  generateAIRecommendation
                }
                className="rounded-2xl border border-white/10 px-8 py-4 font-bold text-white transition hover:bg-white/5"
              >
                Regenerate
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AIwellnessRecommendation;