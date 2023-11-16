import Image from "next/image"
import React from "react"

function StoryItem() {
   return (
      <div className='z-0 grid place-items-center'>
         <div className='px-2'>
            <div className='story-border w-fit cursor-pointer overflow-hidden rounded-full p-[2px]'>
               <div className='rounded-full border-2 border-white'>
                  <Image
                     className='aspect-square rounded-full object-cover'
                     src='/assets/logo/user.png'
                     alt='user-avatar'
                     width={56}
                     height={56}
                     priority
                  />
               </div>
            </div>
         </div>
         <div className='mt-1 block w-full max-w-[71px] truncate text-center text-xs'>
            username
         </div>
      </div>
   )
}

export default StoryItem
