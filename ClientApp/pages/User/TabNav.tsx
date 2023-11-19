import { BsGrid3X3 } from "react-icons/bs"
import Link from "next/link"
import React from "react"
import { RootState } from "@redux/reducers"
import TabNavItem from "@components/common/User/TabNavItem"
import { User } from "@type/User"
import { usePathname } from "next/navigation"
import { useSelector } from "react-redux"

export default function TabNav() {
   const pathname = usePathname()
   const user: User = useSelector((state: RootState) => state.user)
   const tab = pathname?.split("/").at(-1) || ""

   return (
      <div className='w-full border-t-[1px] border-t-gray-300 flex justify-center'>
         <TabNavItem
            currentTab={["saved", "tagged", "reels"].includes(tab) ? tab : ""}
            tab={""}
         >
            <Link
               href={`/u/${user.username}`}
               className={`flex items-center text-[13px] font-medium`}
            >
               <span>
                  <svg
                     aria-label=''
                     className='block relative text-inherit'
                     fill='currentColor'
                     height='12'
                     role='img'
                     viewBox='0 0 24 24'
                     width='12'
                  >
                     <rect
                        fill='none'
                        height='18'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        width='18'
                        x='3'
                        y='3'
                     ></rect>
                     <line
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        x1='9.015'
                        x2='9.015'
                        y1='3'
                        y2='21'
                     ></line>
                     <line
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        x1='14.985'
                        x2='14.985'
                        y1='3'
                        y2='21'
                     ></line>
                     <line
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        x1='21'
                        x2='3'
                        y1='9.015'
                        y2='9.015'
                     ></line>
                     <line
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        x1='21'
                        x2='3'
                        y1='14.985'
                        y2='14.985'
                     ></line>
                  </svg>
               </span>{" "}
               <span className='ml-2'>POSTS</span>
            </Link>
         </TabNavItem>
         <TabNavItem currentTab={tab} tab={"reels"}>
            <Link
               href={`/u/${user.username}/reels`}
               className={` flex items-center text-[13px] font-medium`}
            >
               <span>
                  <svg
                     aria-label=''
                     className='block relative text-inherit'
                     fill='currentColor'
                     height='12'
                     role='img'
                     viewBox='0 0 24 24'
                     width='12'
                  >
                     <line
                        fill='none'
                        stroke='currentColor'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        x1='2.049'
                        x2='21.95'
                        y1='7.002'
                        y2='7.002'
                     ></line>
                     <line
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        x1='13.504'
                        x2='16.362'
                        y1='2.001'
                        y2='7.002'
                     ></line>
                     <line
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        x1='7.207'
                        x2='10.002'
                        y1='2.11'
                        y2='7.002'
                     ></line>
                     <path
                        d='M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z'
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                     ></path>
                     <path
                        d='M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z'
                        fillRule='evenodd'
                     ></path>
                  </svg>
               </span>{" "}
               <span className='ml-2'>REELS</span>
            </Link>
         </TabNavItem>
         <TabNavItem currentTab={tab} tab={"saved"}>
            <Link
               href={`/u/${user.username}/saved`}
               className={`${
                  tab === "saved" ? "" : "text-gray-400"
               } flex items-center text-[13px] font-medium`}
            >
               <span>
                  <svg
                     aria-label=''
                     className='block text-inherit relative'
                     fill='currentColor'
                     height='12'
                     role='img'
                     viewBox='0 0 24 24'
                     width='12'
                  >
                     <polygon
                        fill='none'
                        points='20 21 12 13.44 4 21 4 3 20 3 20 21'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                     ></polygon>
                  </svg>
               </span>{" "}
               <span className='ml-2'>SAVED</span>
            </Link>
         </TabNavItem>
         <TabNavItem currentTab={tab} tab={"tagged"}>
            <Link
               href={`/u/${user.username}/tagged`}
               className={`flex items-center text-[13px] font-medium`}
            >
               <span>
                  <svg
                     aria-label=''
                     className='block text-inherit relative'
                     fill='currentColor'
                     height='12'
                     role='img'
                     viewBox='0 0 24 24'
                     width='12'
                  >
                     <path
                        d='M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z'
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                     ></path>
                     <path
                        d='M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603'
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                     ></path>
                     <circle
                        cx='12.072'
                        cy='11.075'
                        fill='none'
                        r='3.556'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                     ></circle>
                  </svg>
               </span>{" "}
               <span className='ml-2'>TAGGED</span>
            </Link>
         </TabNavItem>
      </div>
   )
}
