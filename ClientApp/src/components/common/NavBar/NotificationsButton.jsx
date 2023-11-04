import React from "react"
import { RiHeartLine } from "react-icons/ri"

function NotificationsButton({ tab, setTab }) {
   return (
      <div className='my-1 rounded-lg duration-100 ease-linear hover:bg-gray-100'>
         <div className='cursor-pointer hover:text-black'>
            <div className='flex items-center justify-start px-2 py-[10px]'>
               <span className='block w-[40px] text-left text-[28px]'>
                  <RiHeartLine />
               </span>
               <span className=''>Notifications</span>
            </div>
         </div>
      </div>
   )
}

export default NotificationsButton
