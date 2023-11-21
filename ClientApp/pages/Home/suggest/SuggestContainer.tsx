import { FaRegCopyright } from "react-icons/fa6"
import Link from "next/link"
import React from "react"
import SuggestItem from "./SuggestItem"
import SwitchAccount from "./SwitchAccount"

function SuggestContainer() {
   return (
      <div className='w-full float-right pl-28 text-[11px] pr-10'>
         <SwitchAccount />
         <div className='flex items-center justify-between mt-6 mb-3 font-semibold'>
            <span className='text-gray-500  text-[13px]'>
               Suggested for you
            </span>
            <Link href={"/e/people"} className=' hover:text-gray-500'>
               See All
            </Link>
         </div>
         <SuggestItem />
         <SuggestItem />
         <SuggestItem />
         <SuggestItem />
         <SuggestItem />
         <div className='text-gray-400 mt-9'>
            <p>
               <Link className='hover:underline' href={""}>
                  About
               </Link>
               <span> . </span>
               <Link className='hover:underline' href={""}>
                  Help
               </Link>
               <span> . </span>
               <Link className='hover:underline' href={""}>
                  Press
               </Link>
               <span> . </span>
               <Link className='hover:underline' href={""}>
                  API
               </Link>
               <span> . </span>
               <Link className='hover:underline' href={""}>
                  Jobs
               </Link>
               <span> . </span>
               <Link className='hover:underline' href={""}>
                  Privacy
               </Link>
               <span> . </span>
               <Link className='hover:underline' href={""}>
                  Terms
               </Link>
               <span> . </span>
               <Link className='hover:underline' href={""}>
                  Locations
               </Link>
               <span> . </span>
               <Link className='hover:underline' href={""}>
                  Language
               </Link>
               <span> . </span>
               <Link className='hover:underline' href={""}>
                  Meta Verified
               </Link>
            </p>
            <p className='flex items-center mt-3'>
               <FaRegCopyright />{" "}
               <span className='ml-2'>2023 INSTAGRAM FROM VIETQTRAN</span>
            </p>
         </div>
      </div>
   )
}

export default SuggestContainer
