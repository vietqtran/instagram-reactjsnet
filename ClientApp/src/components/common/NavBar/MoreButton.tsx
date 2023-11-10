import React, { useState } from "react"
import MoreOutline from "./Icons/More/MoreOutline"
import MoreSolid from "./Icons/More/MoreSolid"

function MoreButton() {
   const [clicked, setClicked] = useState(false)
   return (
      <div
         onClick={() => {
            setClicked(!clicked)
         }}
         className={`group my-3 w-full rounded-lg duration-200 ease-linear hover:bg-gray-100`}
      >
         <div className='cursor-pointer hover:text-black'>
            <div className='flex items-center justify-start p-3'>
               <div className='block w-[40px] group-hover:scale-105'>
                  {clicked ? <MoreSolid /> : <MoreOutline />}
               </div>
               <div>
                  <span
                     className={`hidden lg:block ${clicked ? "font-bold" : ""}`}
                  >
                     More
                  </span>
               </div>
            </div>
         </div>
      </div>
   )
}

export default MoreButton
