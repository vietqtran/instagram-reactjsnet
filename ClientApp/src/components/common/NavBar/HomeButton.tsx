import React from "react"
import { RiHome6Fill } from "react-icons/ri"
import { Link } from "react-router-dom"

interface HomeButtonProps {
   tab: string
   setTab: (tab: string) => void
}

const HomeButton: React.FC<HomeButtonProps> = ({ tab, setTab }) => {
   return (
      <div className='my-1 rounded-lg duration-100 ease-linear hover-bg-gray-100'>
         <Link to='/home' className='hover:text-black'>
            <div className='flex items-center justify-start px-2 py-[10px]'>
               <span className='block w-[40px] text-left text-3xl'>
                  <RiHome6Fill />
               </span>
               <span className='font-bold'>Home</span>
            </div>
         </Link>
      </div>
   )
}

export default HomeButton
