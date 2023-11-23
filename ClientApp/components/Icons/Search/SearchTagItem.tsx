import { CgClose } from "react-icons/cg"
import NumberSign from "../NumberSign/NumberSign"
import React from "react"

const SearchTagItem = () => {
   return (
      <div className='w-full relative'>
         <div className='flex px-5 py-1 cursor-pointer hover:bg-gray-100 duration-100 ease-in items-center justify-between w-full'>
            <div className='grid place-items-center text-xl border-[1px] border-gray-300 rounded-full min-w-[47px] min-h-[47px]'>
               <NumberSign />
            </div>
            <div className='text-sm px-2 w-full'>
               <p className='font-semibold truncate max-w-[70%]'>#hashtag</p>
            </div>
         </div>
         <div className='absolute top-[50%] translate-y-[-50%] right-[20px] p-2 cursor-pointer '>
            <CgClose />
         </div>
      </div>
   )
}

export default SearchTagItem
