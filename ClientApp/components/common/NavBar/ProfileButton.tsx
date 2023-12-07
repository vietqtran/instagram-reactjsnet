import Avatar from "../User/Avatar"
import Link from "next/link"
import React from "react"
import { RootState } from "@redux/reducers"
import { User } from "@type/models/User"
import { useSelector } from "react-redux"

interface ProfileButtonProps {
   tab: string
   setTab: (tab: string) => void
}

function ProfileButton({ tab, setTab }: ProfileButtonProps) {
   const user: User = useSelector((state: RootState) => state.user)
   console.log(user)
   return (
      <div
         onClick={() => {
            setTab("profile")
         }}
         className='group rounded-lg duration-200 ease-linear hover:bg-gray-100 md:my-3'
      >
         <Link href={`/u/${user.username}`} className='hover:text-black'>
            <div className='flex items-center justify-start p-3'>
               <div className='block w-fit md:w-[40px]'>
                  <div
                     className={`${
                        tab === "profile"
                           ? "outline-2 outline outline-black"
                           : ""
                     } w-fit rounded-full group-hover:scale-105`}
                  >
                     <Avatar
                        size={24}
                        src={user.avatar || "/assets/logo/user.png"}
                     />
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
