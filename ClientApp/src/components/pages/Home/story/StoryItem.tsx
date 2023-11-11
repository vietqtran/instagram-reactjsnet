import React from "react"

function StoryItem() {
   return (
      <div className='grid place-items-center'>
         <div className='px-2'>
            <div className='story-border w-fit cursor-pointer overflow-hidden rounded-full p-[2px]'>
               <div className='rounded-full border-2 border-white'>
                  <img
                     className='aspect-square h-[56px] w-[56px] rounded-full object-cover'
                     src='/assets/logo/user.png'
                     alt='user-avatar'
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
