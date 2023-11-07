import React from "react"
import { RiCompass3Line } from "react-icons/ri"
import { Link } from "react-router-dom"

interface ExploreButtonProps {
   tab: string
   setTab: (tab: string) => void
}

const ExploreButton: React.FC<ExploreButtonProps> = ({ tab, setTab }) => {
   return (
      <div className='my-1 rounded-lg duration-100 ease-linear hover:bg-gray-100'>
         <Link to={"/explore"} className='hover:text-black'>
            <div className='flex items-center justify-start px-2 py-[10px]'>
               <span className='block w-[40px] text-left text-[28px]'>
                  <RiCompass3Line />
               </span>
               <span className=''>Explore</span>
            </div>
         </Link>
      </div>
   )
}

export default ExploreButton
