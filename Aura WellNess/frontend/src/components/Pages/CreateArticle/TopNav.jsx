import React from 'react'
import { MdArrowBack, MdSettings } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
function TopNav() {
    const navigate = useNavigate();
  return (
    <>

    <header className='fixed top-0 z-50 w-full bg-transparent px-4 pt-4 sm:px-6 lg:px-8'>
        <div className='mx-auto flex w-full max-w-[1440px] items-center justify-between'>
            {/* Left Section */}
            <div className='flex items-center gap-4'>

                <div className='flex h-11 w-11 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.25)]'>
                
                    <span 
                        className='material-symbols-outlined'
                        style={{fontVariationSettings: "'FILL' 1"}}
                        onClick={()=>navigate('/wellness-hub')}
                        >
                            <MdArrowBack size={25}/>
                    </span>
                
                </div>

                {/* Logo */}
                <span className='text-2xl font-medium tracking-tight text-violet-300'>
                    MindShield
                </span>

                {/* Divider */}
                <div className='hidden h-4 w-px bg-white/10 md:block'></div>

                {/* Subtitle */}
                <span className='hidden text-xs uppercase tracking-[0.3em] text-gray-400 md:block'>
                    Writing Studio
                </span>
            </div>

            {/* Right Section */}
            <div className='flex items-center gap-4 sm:gap-6'>

                {/* Settings button */}
                <button className='scale-95 text-gray-400 transition-all duration-300 hover:text-emerald-300 active:scale-90'>
                    <span className='material-symbols-outlined'>
                        <MdSettings/>
                    </span>
                </button>

                {/* Profile Avatar */}
                <div className='h-10 w-10 cursor-pointer overflow-hidden rounded-full border border-white/10 transition-colors hover:border-violet-400/50'>
                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRUu6695Num_0p3-_UqYERW3V5hkqsSCbf9w6piLJ5VjyK2TjqemLq3nRHHLlAG6zkzloPAboQp4VZqdKC22O3RMGFD8Pl156W8F5tOVeDbk32G6LHEpT1dd48ynAPVezT8neuY8jFHR7g90ZnPS0jTl0Dtmtj9i_VN7PJ2TWoUlJo3wB_TJi87Y4_xgkF7h_UithPNh_7cm1gOqAXSMWTt22XYCrkru7URGpw_9o2FnyQxmllXUG94TbMj4wXYQLWaJjv6dApuir3"
                        alt="Profile"
                        className="h-full w-full object-cover"
                     />
                </div>
            </div>
        </div>
    </header>
    
    </>
  )
}

export default TopNav