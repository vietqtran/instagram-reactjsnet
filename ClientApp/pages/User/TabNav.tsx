import Link from "next/link"
import PostOutline from "@components/Icons/Post/PostOutline"
import React from "react"
import ReelOutline from "@components/Icons/Reel/ReelOutline"
import { RootState } from "@redux/reducers"
import SaveOutline from "@components/Icons/Save/SaveOutline"
import TabNavItem from "@components/common/User/TabNavItem"
import TaggedOutline from "@components/Icons/Tagged/TaggedOutline"
import { User } from "@type/models/User"
import { usePathname } from "next/navigation"
import { useSelector } from "react-redux"

export default function TabNav() {
   const pathname = usePathname()
   const user: User = useSelector((state: RootState) => state.user)
   const tab = pathname?.split("/").at(-1) || ""

   return (
      <div className='w-full border-t-[1px] tracking-wider border-t-gray-300 flex justify-center'>
         <TabNavItem
            currentTab={["saved", "tagged", "reels"].includes(tab) ? tab : ""}
            tab={""}
         >
            <Link
               href={`/u/${user.username}`}
               className={`flex items-center py-5`}
            >
               <PostOutline />
               <span className='ml-2'>POSTS</span>
            </Link>
         </TabNavItem>
         <TabNavItem currentTab={tab} tab={"reels"}>
            <Link
               href={`/u/${user.username}/reels`}
               className={`py-5 flex items-center`}
            >
               <ReelOutline />
               <span className='ml-2'>REELS</span>
            </Link>
         </TabNavItem>
         <TabNavItem currentTab={tab} tab={"saved"}>
            <Link
               href={`/u/${user.username}/saved`}
               className={`${
                  tab === "saved" ? "" : "text-gray-400"
               } flex items-center py-5`}
            >
               <SaveOutline />
               <span className='ml-2'>SAVED</span>
            </Link>
         </TabNavItem>
         <TabNavItem currentTab={tab} tab={"tagged"}>
            <Link
               href={`/u/${user.username}/tagged`}
               className={`flex items-center py-5`}
            >
               <TaggedOutline />
               <span className='ml-2'>TAGGED</span>
            </Link>
         </TabNavItem>
      </div>
   )
}
