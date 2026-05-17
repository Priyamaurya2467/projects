import React, { useState } from "react";
import {
  MdAutoStories,
  MdBedtime,
  MdExpandMore,
  MdLock,
  MdMail,
  MdPerson,
  MdSchool,
  MdVerifiedUser,
} from "react-icons/md";

import { useNavigate } from "react-router-dom";

function Form() {
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save username
    localStorage.setItem("username", name);

    // Navigate to dashboard
    navigate("/student-entry");
  };

  return (
    <div className="lg:col-span-8 relative z-50">
      <div className="relative rounded-[32px] p-8 md:p-12 backdrop-blur-xl bg-white/10 border border-white/10 shadow-2xl">

        {/* Heading */}
        <div className="mb-10 relative z-50">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-2">
            Create Your Sanctuary
          </h2>

          <p className="text-gray-300">
            Complete your profile to personalize your wellness experience.
          </p>
        </div>

        {/* Form */}
        <form
          className="relative z-50 space-y-12"
          onSubmit={handleSubmit}
        >

          {/* SECTION 1 */}
          <section className="space-y-6">

            <div className="flex items-center gap-3">
              <span className="h-8 w-8 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-sm font-bold">
                01
              </span>

              <h3 className="text-sm font-semibold text-white uppercase tracking-[0.2em]">
                Personal Details
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">

              {/* NAME */}
              <div className="group">
                <label className="block text-sm text-gray-300 mb-2 ml-1">
                  Full Name
                </label>

                <div className="relative">

                  <input
                    type="text"
                    required
                    placeholder="Alex Rivers"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="relative z-50 w-full bg-white/10 border border-white/20 rounded-xl py-4 px-5 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300"
                  />

                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/20">
                    <MdPerson />
                  </span>

                </div>
              </div>

              {/* EMAIL */}
              <div className="group">
                <label className="block text-sm text-gray-300 mb-2 ml-1">
                  Student Email
                </label>

                <div className="relative">

                  <input
                    type="email"
                    required
                    placeholder="alex.rivers@edu.com"
                    className="relative z-50 w-full bg-white/10 border border-white/20 rounded-xl py-4 px-5 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300"
                  />

                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/20">
                    <MdMail />
                  </span>

                </div>
              </div>

              {/* PASSWORD */}
              <div className="group md:col-span-2">
                <label className="block text-sm text-gray-300 mb-2 ml-1">
                  Password
                </label>

                <div className="relative">

                  <input
                    type="password"
                    placeholder="••••••••"
                    required
                    className="relative z-50 w-full bg-white/10 border border-white/20 rounded-xl py-4 px-5 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300"
                  />

                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/20">
                    <MdLock />
                  </span>

                </div>
              </div>

            </div>
          </section>

          {/* SECTION 2 */}
          <section className="space-y-6">

            <div className="flex items-center gap-3">
              <span className="h-8 w-8 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center text-sm font-bold">
                02
              </span>

              <h3 className="text-sm font-semibold text-white uppercase tracking-[0.2em]">
                Academic Profile
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">

              {/* UNIVERSITY */}
              <div className="group md:col-span-2">
                <label className="block text-sm text-gray-300 mb-2 ml-1">
                  University Name
                </label>

                <div className="relative">

                  <input
                    type="text"
                    required
                    placeholder="Stanford University"
                    className="relative z-50 w-full bg-white/10 border border-white/20 rounded-xl py-4 px-5 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300"
                  />

                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/20">
                    <MdSchool />
                  </span>

                </div>
              </div>

              {/* COURSE */}
              <div className="group">
                <label className="block text-sm text-gray-300 mb-2 ml-1">
                  Major / Course
                </label>

                <div className="relative">

                  <input
                    type="text"
                    required
                    placeholder="Cognitive Science"
                    className="relative z-50 w-full bg-white/10 border border-white/20 rounded-xl py-4 px-5 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300"
                  />

                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/20">
                    <MdAutoStories />
                  </span>

                </div>
              </div>

              {/* YEAR */}
              <div className="group">
                <label className="block text-sm text-gray-300 mb-2 ml-1">
                  Year of Study
                </label>

                <div className="relative">

                  <select
                    className="relative z-50 w-full bg-white/10 border border-white/20 rounded-xl py-4 px-5 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300"
                  >
                    <option className="bg-slate-900" value="1">
                      1st Year
                    </option>

                    <option className="bg-slate-900" value="2">
                      2nd Year
                    </option>

                    <option className="bg-slate-900" value="3">
                      3rd Year
                    </option>

                    <option className="bg-slate-900" value="4">
                      4th Year
                    </option>

                    <option className="bg-slate-900" value="postgrad">
                      Postgraduate
                    </option>
                  </select>

                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/20">
                    <MdExpandMore />
                  </span>

                </div>
              </div>

            </div>
          </section>

          {/* SECTION 3 */}
          <section className="space-y-6">

            <div className="flex items-center gap-3">
              <span className="h-8 w-8 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center text-sm font-bold">
                03
              </span>

              <h3 className="text-sm font-semibold text-white uppercase tracking-[0.2em]">
                Wellness Goals
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

              <button
                type="button"
                className="relative z-50 flex flex-col items-center gap-3 p-5 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all text-center group"
              >
                <span className="text-cyan-300 group-hover:scale-110 transition-transform">
                  <MdBedtime />
                </span>

                <span className="text-sm font-medium text-white">
                  Better Sleep
                </span>
              </button>

            </div>
          </section>

          {/* BUTTONS */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/5">

            <button
              type="button"
              className="relative z-50 text-gray-300 hover:text-white transition-colors"
            >
              Already have an account?
              <span className="text-cyan-300 font-bold ml-1">
                Sign in
              </span>
            </button>

            <button
              type="submit"
              className="relative z-50 group inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full overflow-hidden shadow-xl hover:shadow-cyan-500/20 transition-all active:scale-95 w-full md:w-auto justify-center"
              onClick={()=>navigate('/student-entry')}
            >

              <span className="relative z-50">
                Complete Registration
              </span>

              <span className="relative z-50 transition-transform group-hover:translate-x-1">
                <MdVerifiedUser />
              </span>

              <div className="pointer-events-none absolute inset-0 bg-white/20 translate-y-14 group-hover:translate-y-0 transition-transform"></div>

            </button>

          </div>
        </form>

        {/* Glow Effect */}
        <div className="pointer-events-none absolute -bottom-12 -right-12 h-48 w-48 bg-cyan-500/10 blur-[80px] rounded-full"></div>

      </div>
    </div>
  );
}

export default Form;