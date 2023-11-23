import React, { useState } from "react"

import { IoIosCloseCircle } from "react-icons/io"
import SearchAccountItem from "./SearchAccountItem"
import SearchTagItem from "./SearchTagItem"

function SearchContent() {
   const [searchValue, setSearchValue] = useState("")

   return (
      <div className='w-full'>
         <div className='p-5'>
            <h1 className='font-semibold text-2xl'>Search</h1>
         </div>
         <div className='v-border-b w-full p-4 pb-6'>
            <div className='flex items-center justify-between bg-gray-100 rounded-md'>
               <div className='flex-1'>
                  <input
                     value={searchValue}
                     onChange={(e) => setSearchValue(e.target.value)}
                     className='bg-transparent outline-none w-full p-2 pl-4'
                     type='text'
                     placeholder='Search'
                  />
               </div>
               {searchValue !== null && searchValue !== "" && (
                  <div
                     onClick={() => {
                        setSearchValue("")
                     }}
                     className='cursor-pointer p-2 text-gray-300'
                  >
                     <IoIosCloseCircle />
                  </div>
               )}
            </div>
         </div>
         <div className='w-full'>
            <div className='flex items-center justify-between p-5'>
               <div className='flex-1 font-semibold'>Recent</div>
               <div className='text-blue-500 hover:text-blue-600 cursor-pointer text-sm font-semibold'>
                  Clear all
               </div>
            </div>
            <div className='w-full'>
               <SearchAccountItem isStory={true} />
               <SearchAccountItem isStory={false} />
               <SearchAccountItem isStory={false} />
               <SearchTagItem />
            </div>
         </div>
      </div>
   )
}

export default SearchContent
