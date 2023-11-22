import { BsDot } from "react-icons/bs"
import { HiOutlineDotsHorizontal } from "react-icons/hi"
import Link from "next/link"
import PostUserAvatar from "./PostUserAvatar"
import React from "react"

function UserPostHeader() {
   return (
      <div className='w-full flex items-center justify-between text-[13px] pt-2 pb-3'>
         <div className='cursor-pointer'>
            <PostUserAvatar
               src='/assets/logo/user.png'
               size={32}
               hasStories={true}
            />
         </div>
         <div className='flex-1 pl-3 leading-4'>
            <div className='flex items-center'>
               <Link href={"/u/username"} className='font-semibold'>
                  username
               </Link>
               <span className='text-gray-600'>
                  <BsDot />
               </span>
               <span className='text-gray-400'>1d</span>
            </div>
            <div>address</div>
         </div>
         <div className='text-xl p-1 cursor-pointer'>
            <HiOutlineDotsHorizontal />
         </div>
      </div>
   )
}

export default UserPostHeader
