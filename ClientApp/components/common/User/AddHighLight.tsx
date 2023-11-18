import { HiPlus } from "react-icons/hi"
import React from "react"

export default function AddHighLight() {
   return (
      <div className='px-2 grid place-items-center cursor-pointer'>
         <div className='rounded-full bg-gray-100 border-[1px] p-[1px] border-gray-200 md:w-[79px] md:h-[79px] w-[58px] h-[58px]'>
            <div className='w-full h-full grid place-items-center rounded-full p-[1px] border-[1px] border-white'>
               <div className='w-fit h-fit text-2xl text-gray-500'>
                  <HiPlus />
               </div>
            </div>
         </div>
         <div className='mt-[10px] block w-full max-w-[71px] truncate text-center text-xs'>
            New
         </div>
      </div>
   )
}
