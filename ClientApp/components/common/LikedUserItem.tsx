import { UserVM } from "@type/UserVM"
import React from "react"
import AvatarWithStory from "./User/AvatarWithStory"
import FollowButton from "./Button/FollowButton"

type LikedUserItemProps = {
   user: UserVM
}

const LikedUserItem = ({ user }: LikedUserItemProps) => {
   return (
      <div className='flex w-full items-center justify-between px-2 py-1'>
         <div className='flex flex-1 items-center'>
            <div className='grid w-[54px] place-items-center'>
               <div className='w-fit'>
                  <AvatarWithStory
                     hasStories={true}
                     size={44}
                     src={user.avatar}
                  />
               </div>
            </div>
            <div className='flex-1 px-2 text-sm leading-4'>
               <div className='max-w-[200px] truncate font-semibold'>
                  {user.username}
               </div>
               <div className='max-w-[200px] truncate text-gray-500'>
                  {user.name}
               </div>
            </div>
         </div>
         <div className='px-2'>
            <FollowButton />
         </div>
      </div>
   )
}

export default LikedUserItem
