import AvatarWithStory from "@components/common/User/AvatarWithStory"
import { CgClose } from "react-icons/cg"
import Link from "next/link"
import React from "react"

interface SearchAccountItemProps {
   isStory: boolean
}

const SearchAccountItem = ({ isStory }: SearchAccountItemProps) => {
   return (
      <div className='w-full relative'>
         <Link
            href={"/u/username"}
            className='flex px-5 py-1 cursor-pointer hover:bg-gray-100 duration-100 ease-in items-center justify-between w-full'
         >
            <div className='w-fit'>
               <AvatarWithStory
                  hasStories={isStory}
                  size={44}
                  src='/assets/logo/user.png'
               />
            </div>
            <div className='text-sm flex-1 px-2 w-full'>
               <p className='font-semibold truncate max-w-[70%]'>username</p>
               <p className='text-gray-500 max-w-[70%] truncate'>
                  name . n followers
               </p>
            </div>
         </Link>
         <div className='absolute top-[50%] translate-y-[-50%] right-[20px] p-2 cursor-pointer '>
            <CgClose />
         </div>
      </div>
   )
}

export default SearchAccountItem
