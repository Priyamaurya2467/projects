import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { MdEmail, MdOutlineEmail, MdOutlineLock } from 'react-icons/md'

function LoginCard() {
  return (
   

    <>


     <div className='bg-gradient-to-r from-pink-100 to-purple-100 min-h-screen flex flex-col justify-start pt-6 items-center '>
     
      <div className='bg-white rounded-4xl px-20 py-5 shadow-lg max-w-md'>
        <form action="" method='POST' className='flex flex-col gap-6'>
            <div className='flex flex-col gap-3'>
                        <label>Email Address</label>
                        <div className='flex items-center gap-3 border-2 rounded-2xl border-blue-600 px-6 py-2'>
                        <MdOutlineEmail className='h-5 w-5 text-gray-800'/>
                        <input 
                            type="email"
                            name='email'
                            className='flex-1 outline-none'
                            placeholder='you@example.com'
                            required 
                        />
                        </div>
            </div>


            <div className='flex flex-col gap-3'>
                <div className='flex justify-between'>
                    <label>Password</label>
                    <p className='text-sm text-blue-600 cursor-pointer'>Forget?</p>
                </div>

                <div className='flex items-center gap-3 border-2 rounded-2xl border-blue-600 px-4 py-3'>
                    <MdOutlineLock className='h-5 w-5 text-gray-800'/>
                    <input type="password" name='password' className='flex-1 outline-none ' required defaultValue="" />
                </div>

                </div>

                <div className='flex gap-1'>
                    <input type="checkbox" required />
                    <label>Remember me</label>
                </div>

                <button className='flex justify-center items-center gap-2 bg-purple-500 text-white py-3 rounded-2xl hover:bg-purple-800 transition'>Sign In <FiArrowRight/></button>

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

            <div>
                <div className='flex gap-15'>
                    <div>
                        <button className='border-none rounded-2xl px-10 py-2 bg-white hover:bg-gradient-to-r from-pink-50 to-purple-50 border-t-2 text-gray-400 font-medium'>Google</button>
                    </div>

                    <div>
                        <button className='border-none rounded-2xl px-10 py-2 bg-white hover:bg-gradient-to-r from-pink-50 to-purple-50 border-t-2 text-gray-400 font-medium'>Github</button>
                    </div>
                    </div>
                    
            </div>
            
      </div>


      <div className='flex items-center p-8'>
        <p className='text-gray-500'>Don't have an account ? <span className='text-purple-400 font-semibold'>Sign Up</span></p>
      </div>



     </div>
    

    </>
  )
}

export default LoginCard