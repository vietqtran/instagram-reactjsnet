import HomeOutline from "./Icons/Home/HomeOutline"
import HomeSolid from "./Icons/Home/HomeSolid"
import Link from "next/link"
import React from "react"
import { useRouter } from "next/navigation"

interface HomeButtonProps {
   tab: string
   setTab: (tab: string) => void
}

const HomeButton: React.FC<HomeButtonProps> = ({ tab, setTab }) => {
   return (
      <div
         onClick={() => {
            setTab("home")
         }}
         className='group rounded-lg duration-200 ease-linear hover:bg-gray-100 md:my-3'
      >
         <Link href={"/"} className='hover:text-black'>
            <div className='flex items-center justify-start p-3'>
               <div className='block w-fit text-left group-hover:scale-105 md:w-[40px]'>
                  {tab === "home" ? <HomeSolid /> : <HomeOutline />}
               </div>
               <span
                  className={`${tab === "home" ? "font-bold" : ""} ${
                     tab === "search" || tab === "notification"
                        ? "hidden"
                        : "block"
                  } `}
               >
                  <span className='hidden lg:block'>Home</span>
               </span>
            </div>
         </Link>
      </div>
   )
}

export default HomeButton
