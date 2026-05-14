import React from 'react'
import { MdArrowForward, MdLock, MdMail} from 'react-icons/md'
import { FaApple, FaGoogle } from "react-icons/fa";
import {  useNavigate } from 'react-router-dom';
import RegisterPage from '../Register Page/Main';

function LoginCard() {

    const navigate = useNavigate()
  return (
    <>
    <div className='min-h-screen flex items-center justify-center px-4'>

    <div className="w-full max-w-md rounded-[2rem] p-6 md:p-8 flex flex-col items-center backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl">

  
  <div className="text-center mb-8">
    <h1 className="text-3xl md:text-5xl font-bold text-cyan-300 mb-2">
      Welcome Back
    </h1>

    <p className="text-sm md:text-base text-gray-200 italic opacity-80">
      "Peace begins with a single breath of clarity."
    </p>
  </div>

  
  <div className="grid grid-cols-2 gap-4 w-full mb-8">

    
    <button
      className="flex items-center justify-center py-3 px-4 rounded-xl
             backdrop-blur-md bg-white/20 border border-white/20
             hover:bg-white/30 transition-all duration-300 group"

      onClick={()=> window.location.href = "https://accounts.google.com"}
    >
      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCIWwKPAtRzeth5iStKRjH7ayNWmNLZdqkFNaP4klKZHbza1zrttU_6VLyZYlN6K0Qm5VmznYsUv5_rrRaHN12FpxFWoM_z9ar70ALkjbguuU3Ta54mONUxrTCI2HFw_jheNeOnpGBarlpGd20w8M8YV1GWtWDcCIkvGV-60WBcoAByLvdgdvc3aaeJDDIdUE5z7O7S3pmJHiDf6Fmm8UDEnuBcupmaX92XDvkwLZ9NpH2LghhNuuEYAlDr1QvSQQf_XJjfSO7fUqf"
        alt="Google"
        className="w-5 h-5 mr-3 grayscale group-hover:grayscale-0 transition-all"
      />

      <FaGoogle className="text-sm font-medium text-white"/>
        
    </button>

    
    <button
      className="flex items-center justify-center py-3 px-4 rounded-xl
             backdrop-blur-md bg-white/20 border border-white/20
             hover:bg-white/30 transition-all duration-300 group"

       onClick={() => window.location.href = "https://appleid.apple.com"}
    >
      <FaApple className="material-symbols-outlined text-white mr-3 text-xl"/>
        
      

      <span className="text-sm font-medium text-white">
        Apple
      </span>
    </button>

  </div>

  
  <div className="flex items-center w-full mb-8">
    <div className="h-px bg-white/20 flex-grow"></div>

    <span className="px-4 text-xs tracking-[0.3em] uppercase text-gray-300">
      or
    </span>

    <div className="h-px bg-white/20 flex-grow"></div>
  </div>


  <form className="w-full space-y-5">

    
    <div className="space-y-2">
      <label className="text-sm text-gray-300 ml-1">
        Email Address
      </label>

      <div className="relative">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
          <MdMail/>
        </span>

        <input
          type="email"
          placeholder="name@email.com"
          className="w-full pl-11 pr-4 py-3.5 rounded-xl outline-none
                 backdrop-blur-md bg-white/20 border border-white/20
                 text-white placeholder:text-gray-400
                 focus:ring-2 focus:ring-cyan-400"
        />
      </div>
    </div>

    
    <div className="space-y-2">

      <div className="flex justify-between items-center px-1">
        <label className="text-sm text-gray-300">
          Password
        </label>

        <a href="#" className="text-sm text-cyan-300 hover:underline">
          Forgot?
        </a>
      </div>

      <div className="relative">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
          <MdLock/>
        </span>

        <input
          type="password"
          placeholder="••••••••"
          className="w-full pl-11 pr-4 py-3.5 rounded-xl outline-none
                 backdrop-blur-md bg-white/20 border border-white/20
                 text-white placeholder:text-gray-400
                 focus:ring-2 focus:ring-cyan-400"
        />
      </div>
    </div>

    
    <button
      type="submit"
      className="w-full py-4 rounded-xl font-semibold text-white
             bg-gradient-to-r from-cyan-500 to-blue-600
             hover:scale-[1.02] hover:shadow-cyan-500/40
             shadow-lg transition-all duration-300
             flex items-center justify-center space-x-2 group mt-4"
    >
      <span>Enter Sanctuary</span>

      <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
        <MdArrowForward/>
      </span>
    </button>

  </form>


  <p className="mt-8 text-gray-300 text-center">
    New to the shield?

    <a onClick={()=>navigate('/register')} className="text-cyan-300 font-semibold hover:underline">
      Create an account
    </a>
  </p>

    </div>
    
    </div>
    </>
  )
}
export default LoginCard