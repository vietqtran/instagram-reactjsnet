import Image from "next/image"
import React from "react"

interface AvatarWithStoryProps {
   size: number
   src: string
   hasStories: boolean
}

export default function AvatarWithStory({
   size,
   src,
   hasStories,
}: AvatarWithStoryProps) {
   return (
      <div
         className={`rounded-full bg-black md:p-1 p-[2px] ${
            hasStories ? "story-border" : ""
         }`}
      >
         <div
            style={{ width: size, height: size }}
            className={`${
               hasStories ? "md:border-4 border-2 border-white" : ""
            } aspect-square h-fit w-fit overflow-hidden rounded-full`}
         >
            <Image
               src={src}
               alt='avatar'
               className='aspect-square h-full w-full'
               width={size}
               height={size}
               priority
            />
         </div>
      </div>
   )
}
