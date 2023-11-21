import { BsDot } from "react-icons/bs"
import { HiOutlineDotsHorizontal } from "react-icons/hi"
import Link from "next/link"
import PostUserAvatar from "./PostUserAvatar"
import React from "react"

function TagPostHeaderHeader() {
   return (
      <div className='w-full flex items-center justify-between text-[13px] pt-2 pb-3'>
         <div className='cursor-pointer relative'>
            <div className='grid place-items-center text-white m-[1px] text-xs absolute w-[17px] h-[17px] story-border bottom-[-3px] right-[-5px] rounded-full'>
               #
            </div>
            <PostUserAvatar
               src='/assets/logo/user.png'
               size={32}
               hasStories={true}
            />
         </div>
         <div className='flex-1 pl-3 leading-4'>
            <div className='font-semibold'>#tagname</div>
            <div className='flex items-center'>
               <Link href={"/u/username"} className='font-semibold'>
                  username
               </Link>
               <span className='text-gray-600'>
                  <BsDot />
               </span>
               <span className='text-gray-400'>1d</span>
            </div>
         </div>
         <div className='text-xl p-1 cursor-pointer'>
            <HiOutlineDotsHorizontal />
         </div>
      </div>
   )
}

export default TagPostHeaderHeader
