import React from 'react'
import { MdDoorbell, MdNotifications, MdOutlineNotificationAdd, MdOutlineNotifications, MdOutlineNotificationsActive } from 'react-icons/md'

function NavBar() {
  return (
    <>

     <div className='flex justify-between py-4 px-6'>
    
            <div className='flex items-center gap-3'>
                
                <h1 className='text-2xl font-semibold font-mono'>StudentSphere </h1>
            </div>
    
    
            <div className='flex items-center gap-5'>
                <MdOutlineNotifications className='text-gray-600 h-5 w-5' cursor='pointer'/>
                <div>
                    <div>
                        <p className='text-sm text-right font-medium '>Sarah Kumar</p>
                        <span className='text-xs font-thin text-gray-800'>Gate 2024 Aspirant</span>
                    </div>
                </div>
                <div className='w-9 h-9 rounded-full bg-gradient-to-r from-purple-300 via-purple-500 to-purple-800 flex items-center justify-center '>
                               
                </div>
            </div>
    
    
    
        </div>
    
    
    </>
  )
}

export default NavBar