import React from "react"
import HeartOutline from "./Icons/Heart/HeartOutline"
import HeartSolid from "./Icons/Heart/HeartSolid"

interface NotificationsButtonProps {
   tab: string
   setTab: (tab: string) => void
}

function NotificationsButton({ tab, setTab }: NotificationsButtonProps) {
   console.log(tab)

   return (
      <div
         onClick={() => {
            setTab("notification")
         }}
         className={`group my-3 rounded-lg duration-200 ease-linear hover:bg-gray-100 md:block hidden ${
            tab === "notification" ? "outline-1 outline-gray-300 outline" : ""
         }`}
      >
         <div className='cursor-pointer hover:text-black'>
            <div className='flex items-center justify-start p-3'>
               <div className='block w-[40px] group-hover:scale-105'>
                  {tab === "notification" ? <HeartSolid /> : <HeartOutline />}
               </div>
               <div
                  className={`${
                     tab === "search" || tab === "notification"
                        ? "hidden"
                        : "block"
                  }`}
               >
                  <span className='hidden lg:block'>Notifications</span>
               </div>
            </div>
         </div>
      </div>
   )
}

export default NotificationsButton
