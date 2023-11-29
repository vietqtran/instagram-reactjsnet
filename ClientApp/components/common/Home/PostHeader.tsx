import React, { useState } from "react"

import { BsDot } from "react-icons/bs"
import { HiOutlineDotsHorizontal } from "react-icons/hi"
import Link from "next/link"
import Overlay from "../Overlay"
import PostOptions from "./PostOptions"
import PostUserAvatar from "./PostUserAvatar"
import { UserVM } from "@type/UserVM"

interface PostHeaderProps {
   type: string
   user: UserVM
}

function PostHeader({ type, user }: Readonly<PostHeaderProps>) {
   const [showOptions, setShowOptions] = useState(false)

   return (
      <>
         {showOptions && (
            <Overlay show={showOptions} setShow={setShowOptions}>
               <PostOptions setShowOptions={setShowOptions} />
            </Overlay>
         )}
         <div className='flex w-full items-center justify-between pb-3 pt-2 text-[13px]'>
            <div className='relative cursor-pointer'>
               {type === "tag" && (
                  <div className='story-border absolute bottom-[-3px] right-[-5px] m-[1px] grid h-[17px] w-[17px] place-items-center rounded-full text-xs text-white'>
                     #
                  </div>
               )}
               <PostUserAvatar
                  src={user.avatar ?? "/assets/logo/user.png"}
                  size={32}
                  hasStories={true}
               />
            </div>
            <div className='flex-1 pl-3 leading-4'>
               {type === "tag" && <div className='font-semibold'>#tagname</div>}
               <div className='flex items-center'>
                  <Link href={"/u/username"} className='font-semibold'>
                     {user.username}
                  </Link>
                  <span className='text-gray-600'>
                     <BsDot />
                  </span>
                  <span className='text-gray-400'>1d</span>
               </div>
               <div>address</div>
            </div>
            <div
               onClick={() => {
                  setShowOptions(true)
               }}
               className='cursor-pointer p-1 text-xl'
            >
               <HiOutlineDotsHorizontal />
            </div>
         </div>
      </>
   )
}

export default PostHeader
