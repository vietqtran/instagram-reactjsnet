import Avatar from "@components/common/User/Avatar"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { RootState } from "@redux/reducers"
import { User } from "@type/User"
import { useSelector } from "react-redux"

function SwitchAccount() {
   const user: User = useSelector((state: RootState) => state.user)

   return (
      <div className='flex items-center'>
         <div>
            <Avatar src={user.avatar} size={44} />
         </div>
         <div className='flex flex-col flex-1 items-start pl-3'>
            <Link href={"/u/username"} className='text-[13px] font-semibold'>
               {user.username}
            </Link>
            <span className='text-[13px] text-gray-500'>{user.name}</span>
         </div>
         <div>
            <button className='text-xs text-blue-500 font-semibold hover:text-blue-600'>
               Switch
            </button>
         </div>
      </div>
   )
}

export default SwitchAccount
