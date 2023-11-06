import React from "react"
import { RiSearchLine } from "react-icons/ri"

interface SearchButtonProps {
   tab: string
   setTab: (tab: string) => void
}

function SearchButton({ tab, setTab }: SearchButtonProps) {
   return (
      <div className='my-1 rounded-lg duration-100 ease-linear hover-bg-gray-100'>
         <div className='cursor-pointer hover-text-black'>
            <div className='flex items-center justify-start px-2 py-10px'>
               <span className='block w-40px text-left text-28px'>
                  <RiSearchLine />
               </span>
               <span>Search</span>
            </div>
         </div>
      </div>
   )
}

export default SearchButton
