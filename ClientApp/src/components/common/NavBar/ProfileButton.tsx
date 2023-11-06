import React from "react"
import { Link } from "react-router-dom"
import Avatar from "../Avatar"

interface ProfileButtonProps {
   tab: string
   setTab: (tab: string) => void
}

function ProfileButton({ tab, setTab }: ProfileButtonProps) {
   return (
      <div className='my-2 rounded-lg duration-100 ease-linear hover:bg-gray-100'>
         <Link to='/profile' className='hover:text-black'>
            <div className='flex items-center justify-start px-2 py-[10px]'>
               <span className={`block w-[40px] text-left text-[28px]`}>
                  <div
                     className={`${
                        tab === "profile" ? "border-2 border-black" : ""
                     } w-fit rounded-full`}
                  >
                     <Avatar size={26} src='/assets/logo/user.png' />
                  </div>
               </span>
               <span className={`${tab === "profile" ? "font-bold" : ""}`}>
                  Profile
               </span>
            </div>
         </Link>
      </div>
   )
}

export default ProfileButton
