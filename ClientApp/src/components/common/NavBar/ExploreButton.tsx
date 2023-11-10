import React from "react"
import { Link } from "react-router-dom"
import CompassOutline from "./Icons/Compass/CompassOutline"
import CompassSolid from "./Icons/Compass/CompassSolid"

interface ExploreButtonProps {
   tab: string
   setTab: (tab: string) => void
}

const ExploreButton: React.FC<ExploreButtonProps> = ({ tab, setTab }) => {
   console.log(tab)

   return (
      <div
         onClick={() => {
            setTab("explore")
         }}
         className='group my-3 rounded-lg duration-200 ease-linear hover:bg-gray-100'
      >
         <Link to={"#"} className='hover:text-black'>
            <div className='flex items-center justify-start p-3'>
               <div className='block w-[40px] group-hover:scale-105'>
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
