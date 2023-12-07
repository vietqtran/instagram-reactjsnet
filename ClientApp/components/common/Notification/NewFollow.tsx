import AvatarWithStory from "../User/AvatarWithStory"
import FollowButton from "../Button/FollowButton"
import Link from "next/link"
import React from "react"
import { UserVM } from "@type/view/UserVM"

interface NewFollowProps {
   sender: UserVM
}

const NewFollow = ({ sender }: NewFollowProps) => {
   return (
      <div className='py-1 w-full flex items-center justify-between'>
         <div className=' flex items-center justify-between'>
            <div className='min-w-[54px] min-h-[54px] grid place-items-center'>
               <div className='w-fit'>
                  <AvatarWithStory
                     hasStories={true}
                     size={44}
                     src={sender.avatar ?? ""}
                  />
               </div>
            </div>
            <div className='text-[0.825rem] whitespace-pre-line px-3'>
               <div className='break-words'>
                  <Link href={`/u/${sender.username}`}>
                     <span className='font-semibold'>{sender.username}</span>
                     <span> started following you.</span>
                     <span className='text-gray-500'> 5w</span>
                  </Link>
               </div>
            </div>
         </div>
         <div>
            <FollowButton />
         </div>
      </div>
   )
}

export default NewFollow
