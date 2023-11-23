import CompassOutline from "@components/Icons/Compass/CompassOutline"
import CompassSolid from "@components/Icons/Compass/CompassSolid"
import Link from "next/link"
import React from "react"

interface ExploreButtonProps {
   tab: string
   setTab: (tab: string) => void
}

const ExploreButton: React.FC<ExploreButtonProps> = ({ tab, setTab }) => {
   return (
      <div
         onClick={() => {
            setTab("explore")
         }}
         className='group rounded-lg duration-200 ease-linear hover:bg-gray-100 md:my-3'
      >
         <Link href={"/explore"} className='hover:text-black'>
            <div className='flex items-center justify-start p-3'>
               <div className='block w-fit group-hover:scale-105 md:w-[40px]'>
                  {tab === "explore" ? <CompassSolid /> : <CompassOutline />}
               </div>
               <div
                  className={`${tab === "explore" ? "font-bold" : ""} ${
                     tab === "search" || tab === "notification"
                        ? "hidden"
                        : "block"
                  } `}
               >
                  <span className='hidden lg:block'>Explore</span>
               </div>
            </div>
         </Link>
      </div>
   )
}

export default ExploreButton
