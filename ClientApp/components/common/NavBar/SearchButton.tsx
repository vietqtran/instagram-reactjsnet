import React, { useRef } from "react"

import SearchOutline from "@components/Icons/Search/SearchOutline"
import SearchSolid from "@components/Icons/Search/SearchSolid"

interface SearchButtonProps {
   tab: string
   setTab: (tab: string) => void
}

function SearchButton({ tab, setTab }: Readonly<SearchButtonProps>) {
   const prevTab = useRef("")
   return (
      <div
         onClick={() => {
            if (tab !== "search" && tab !== "notification") {
               prevTab.current = tab
               console.log(prevTab.current)
               setTab("search")
            }
            if (tab === "search") {
               setTab(prevTab.current)
            }
            if (tab === "notification") {
               setTab("search")
            }
         }}
         className={`md:block hidden group md:my-3 rounded-lg duration-200 ease-linear hover:bg-gray-100 ${
            tab === "search" ? "outline-1 outline-gray-300 outline" : ""
         }`}
      >
         <div className='cursor-pointer'>
            <div className='flex items-center justify-start p-3'>
               <div className='block w-[40px] group-hover:scale-105'>
                  {tab === "search" ? <SearchSolid /> : <SearchOutline />}
               </div>
               <div
                  className={`${
                     tab === "search" || tab === "notification"
                        ? "hidden"
                        : "block"
                  }`}
               >
                  <span className='hidden lg:block'>Search</span>
               </div>
            </div>
         </div>
      </div>
   )
}

export default SearchButton
