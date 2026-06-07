import React, { useState } from "react";
import { FiArrowRight, FiBookOpen } from "react-icons/fi";
import { HiEye } from "react-icons/hi";
import {
  MdOutlineEmail,
  MdOutlineLock,
  MdOutlinePerson,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

function RegistrationCard() {
  const navigate = useNavigate();
  

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    password: "",
    confirmPassword: "",
    studentCategory:""
  });

  const handleRegister = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log(data);
        alert("Registration Successful!");
        navigate('/onboardingPage' , {
            state: {
                user: data.userP
            }
        });
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <>
      <div className="bg-gradient-to-r from-pink-100 to-purple-100 min-h-screen flex flex-col justify-start pt-6 items-center">
        <div className="bg-white rounded-4xl px-20 py-5 shadow-lg max-w-md">
          <form
            onSubmit={handleRegister}
            className="flex flex-col gap-6"
          >
            {/* Full Name */}
            <div className="flex flex-col gap-3">
              <label>Full Name</label>

              <div className="flex items-center gap-3 border-2 rounded-2xl border-blue-600 px-6 py-2">
                <MdOutlinePerson className="h-5 w-5 text-gray-800" />

                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="flex-1 outline-none"
                  placeholder="Sarah Kumar"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-3">
              <label>Email Address</label>

              <div className="flex items-center gap-3 border-2 rounded-2xl border-blue-600 px-6 py-2">
                <MdOutlineEmail className="h-5 w-5 text-gray-800" />

                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="flex-1 outline-none"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            {/* Category */}
            <div className="flex flex-col gap-3">
              <label>Category</label>

              <div className="flex items-center gap-3 border-2 rounded-2xl border-blue-600 px-6 py-2">
                <FiBookOpen className="h-5 w-5 text-gray-800" />

                <select
                  value={formData.studentCategory}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      studentCategory: e.target.value,
                    })
                  }
                  className="flex-1 outline-none"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="gate">
                    GATE Aspirant
                  </option>
                  <option value="placement">
                    Placement Seeker
                  </option>
                  <option value="both">
                    Both GATE & Placement
                  </option>
                  <option value="general">
                    General Learning
                  </option>
                </select>
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between">
                <label>Password</label>
              </div>

              <div className="flex items-center gap-3 border-2 rounded-2xl border-blue-600 px-4 py-3">
                <MdOutlineLock className="h-5 w-5 text-gray-800" />

                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      password: e.target.value,
                    })
                  }
                  className="flex-1 outline-none"
                  required
                />

                <HiEye />
              </div>
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-3">
              <label>Confirm Password</label>

              <div className="flex items-center gap-3 border-2 rounded-2xl border-blue-600 px-4 py-3">
                <MdOutlineLock className="h-5 w-5 text-gray-800" />

                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                  className="flex-1 outline-none"
                  required
                />

                <HiEye />
              </div>

              {formData.confirmPassword &&
                formData.password !==
                  formData.confirmPassword && (
                  <p className="text-red-500 text-sm">
                    Passwords do not match
                  </p>
                )}
            </div>

            {/* Terms */}
            <div className="flex gap-2">
              <input type="checkbox" required />

              <label className="text-sm">
                I agree to the{" "}
                <span className="text-purple-500">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-purple-500">
                  Privacy Policy
                </span>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="flex justify-center items-center gap-2 bg-purple-500 text-white py-3 rounded-2xl hover:bg-purple-800 transition"
            >
              Create Account <FiArrowRight />
            </button>
          </form>
        </div>

        <div>
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-white/30"></div>

            <span className="px-4 text-white/70 text-sm font-medium">
              OR
            </span>

            <div className="flex-1 border-t border-white/30"></div>
          </div>

          <div className="flex gap-15">
            <button className="rounded-2xl px-10 py-2 bg-white text-gray-400 font-medium hover:bg-gradient-to-r from-pink-50 to-purple-50">
              Google
            </button>

            <button className="rounded-2xl px-10 py-2 bg-white text-gray-400 font-medium hover:bg-gradient-to-r from-pink-50 to-purple-50">
              Github
            </button>
          </div>
        </div>

        <div className="flex items-center p-8">
          <p className="text-gray-500">
            Already have an Account?{" "}
            <span className="text-purple-400 font-semibold cursor-pointer">
              Sign In
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default RegistrationCard;