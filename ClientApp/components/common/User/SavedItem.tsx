import Image from "next/image"
import Link from "next/link"
import React from "react"
import { usePathname } from "next/navigation"

export default function SavedItem() {
   const pathname = usePathname()
   return (
      <div className=' relative w-full aspect-square border-[1px] border-gray-200 rounded-md cursor-pointer'>
         <Image
            src={"/assets/images/post_fake.jpg"}
            width={300}
            height={300}
            alt='saved'
            priority
            className='w-full h-full object-cover'
         />
         <div className='group absolute z-10 w-full h-full top-0 left-0'>
            <div className='w-full h-full relative'>
               <div className='group-hover:hidden block z-20 absolute w-full h-full cover-saved-bg'></div>
               <div className='hidden group-hover:block z-20 absolute w-full h-full cover-saved-bg-hover'></div>
               <Link
                  href={`${pathname}/saved-id`}
                  className='z-30 absolute text-lg font-medium bg-transparent pb-3 pl-5 text-white w-full h-full flex items-end justify-start'
               >
                  <span className='max-w-[60%] truncate block'>saved</span>
               </Link>
            </div>
         </div>
      </div>
   )
}
