import React from "react"
import Link from "next/link"
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
         className='group rounded-lg duration-200 ease-linear hover:bg-gray-100 md:my-3'
      >
         <Link href='#' className='hover:text-black'>
            <div className='flex items-center justify-start p-3'>
               <div className='block w-fit md:w-[40px]'>
                  <div
                     className={`${
                        tab === "profile"
                           ? "outline-2 outline outline-black"
                           : ""
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
