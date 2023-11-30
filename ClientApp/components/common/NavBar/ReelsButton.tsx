import ReelOutlineNav from "@components/Icons/Reel/ReelOutlineNav"
import ReelSolidNav from "@components/Icons/Reel/ReelSolidNav"
import Link from "next/link"
import React from "react"

interface ReelsButtonProps {
   tab: string
   setTab: (tab: string) => void
}

const ReelsButton: React.FC<ReelsButtonProps> = ({ tab, setTab }) => {
   return (
      <div
         onClick={() => {
            setTab("reels")
         }}
         className='group rounded-lg duration-200 ease-linear hover:bg-gray-100 md:my-3'
      >
         <Link href={"/reels"} className='hover:text-black'>
            <div className='flex items-center justify-start p-3'>
               <div className='block w-fit group-hover:scale-105 md:w-[40px]'>
                  {tab === "reels" ? <ReelSolidNav /> : <ReelOutlineNav />}
               </div>
               <div
                  className={`${tab === "reels" ? "font-bold" : ""} ${
                     tab === "search" || tab === "notification"
                        ? "hidden"
                        : "block"
                  } `}
               >
                  <span className='hidden lg:block'>Reels</span>
               </div>
            </div>
         </Link>
      </div>
   )
}

export default ReelsButton
