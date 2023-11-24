import React, { useState } from "react"

import MoreOutline from "@components/Icons/More/MoreOutline"
import MoreSolid from "@components/Icons/More/MoreSolid"
import { logoutRedux } from "@redux/actions/user"
import { useDispatch } from "react-redux"
import { useOutsideClick } from "@components/hooks/useClickOutSide"
import { useRouter } from "next/navigation"

interface MoreButtonProps {
   tab: string
}

function MoreButton({ tab }: MoreButtonProps) {
   const [showOptions, setShowOptions] = useState(false)
   const dispatch = useDispatch()
   const router = useRouter()

   const handleLogOut = () => {
      dispatch(logoutRedux())
      router.push("/a/login")
   }

   const handleCloseMenu = () => {
      setShowOptions(false)
   }

   const ref = useOutsideClick(handleCloseMenu)

   return (
      <div className='w-full relative'>
         <div
            onClick={() => {
               setShowOptions(!showOptions)
            }}
            className={` group my-3 w-full rounded-lg duration-200 ease-linear hover:bg-gray-100`}
         >
            <div className='cursor-pointer hover:text-black'>
               <div className='flex items-center justify-start p-3'>
                  <div className='block w-[40px] group-hover:scale-105'>
                     {showOptions ? <MoreSolid /> : <MoreOutline />}
                  </div>
                  <div
                     className={`${
                        tab === "search" || tab === "notification"
                           ? "hidden"
                           : "block"
                     }`}
                  >
                     <span className='hidden lg:block'>More</span>
                  </div>
               </div>
            </div>
         </div>
         {showOptions && (
            <div
               ref={ref}
               className='bottom-[70px] rounded-lg absolute menu-shadow w-[266px] text-sm'
            >
               <div className='p-2 border-b-2 border-b-gray-100'>
                  <div className='p-3 rounded-lg hover:bg-gray-100 cursor-pointer'>
                     Switch Account
                  </div>
               </div>
               <div className='p-2'>
                  <div
                     onClick={handleLogOut}
                     className='p-3 rounded-lg hover:bg-gray-100 cursor-pointer'
                  >
                     Log Out
                  </div>
               </div>
            </div>
         )}
      </div>
   )
}

export default MoreButton
