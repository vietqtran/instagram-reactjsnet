import Avatar from "../User/Avatar"
import AvatarWithStory from "../User/AvatarWithStory"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { UserVM } from "@type/UserVM"

interface LikeStoryProps {
   sender: UserVM
}

const LikeStory = ({ sender }: LikeStoryProps) => {
   return (
      <div className='py-1 w-full flex items-center justify-between'>
         <div className=' flex items-center justify-between'>
            <div className='min-w-[54px] min-h-[54px] grid place-items-center'>
               <div className='w-fit relative'>
                  {/* <AvatarWithStory
                     hasStories={true}
                     size={44}
                     src={sender.avatar ?? ""}
                  /> */}
                  <div className='z-10 outline outline-2 outline-white absolute top-[-10px] left-[-10px]'>
                     <Avatar size={32} src={sender.avatar ?? ""} />
                  </div>
                  <div className='z-0 absolute right-[-10px] bottom-[-10px]'>
                     <Avatar size={32} src={sender.avatar ?? ""} />
                  </div>
               </div>
            </div>
            <div className='text-[0.825rem] whitespace-pre-line px-3'>
               <div className='break-words'>
                  {/* <Link href={`/u/${sender.username}`}>
                     <span className='font-semibold'>{sender.username}</span>
                     <span> liked your story.</span>
                     <span className='text-gray-500'> 5w</span>
                  </Link> */}
                  <Link href={`/u/${sender.username}`}>
                     <span className='font-semibold'>{sender.username}</span>
                     <span>, </span>
                  </Link>
                  <Link href={`/u/${sender.username}`}>
                     <span className='font-semibold'>{sender.username}</span>
                  </Link>
                  <span> and others liked your story.</span>
                  <span className='text-gray-500'> 5w</span>
               </div>
            </div>
         </div>
         <div>
            <Link href={"/story/story_id"} className='block w-[44px] h-[44px]'>
               <Image
                  className='w-full h-full object-cover'
                  alt=''
                  src={"/assets/images/post_fake.jpg"}
                  width={500}
                  height={500}
                  priority
               />
            </Link>
         </div>
      </div>
   )
}

export default LikeStory
