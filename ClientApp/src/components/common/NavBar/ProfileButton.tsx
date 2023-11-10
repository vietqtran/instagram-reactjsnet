import React from "react"
import { Link } from "react-router-dom"
import Avatar from "../Avatar"

interface ProfileButtonProps {
   tab: string
   setTab: (tab: string) => void
}

function ProfileButton({ tab, setTab }: ProfileButtonProps) {
   console.log(tab)

   return (
      <div
         onClick={() => {
            setTab("profile")
         }}
         className='group my-3 rounded-lg duration-200 ease-linear hover:bg-gray-100'
      >
         <Link to='#' className='hover:text-black'>
            <div className='flex items-center justify-start p-3'>
               <div className='block w-[40px]'>
                  <div
                     className={`${
                        tab === "profile" ? "border-2 border-black" : ""
                     } w-fit rounded-full group-hover:scale-105`}
                  >
                     <Avatar size={26} src='/assets/logo/user.png' />
                  </div>
               </div>
               <div
                  className={`${tab === "profile" ? "font-bold" : ""} ${
                     tab === "search" || tab === "notification"
                        ? "hidden"
                        : "block"
                  } `}
               >
                  <span className='hidden lg:block'>Profile</span>
               </div>
            </div>
         </Link>
      </div>
   )
}

export default ProfileButton
