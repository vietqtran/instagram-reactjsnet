import Image from "next/image"
import React from "react"

export default function HighLightItem() {
   return (
      <div className='z-0 grid place-items-center min-w-fit'>
         <div className='px-2'>
            <div className='border-[1px] border-gray-200 w-fit cursor-pointer overflow-hidden rounded-full p-[1px]'>
               <div className='rounded-full border-[1px] border-white'>
                  <Image
                     className='md:w-[77px] md:h-[77px] w-[56px] h-[56px] aspect-square rounded-full object-cover'
                     src='/assets/logo/user.png'
                     alt='user-avatar'
                     width={200}
                     height={200}
                     priority
                  />
               </div>
            </div>
         </div>
         <div className='mt-2 block w-full max-w-[71px] truncate text-center text-xs'>
            username
         </div>
      </div>
   )
}
