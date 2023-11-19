"use client"

import HomeLayout from "@components/layouts/HomeLayout"
import React from "react"
import TabNav from "@pages/User/TabNav"
import UserPreviewTop from "@components/common/User/UserPreviewTop"

interface UserLayoutProps {
   children: React.ReactNode
}

export default function UserLayout({ children }: UserLayoutProps) {
   return (
      <HomeLayout>
         <div className='flex justify-center py-8 md:px-5'>
            <div className='w-full max-w-[935px] md:px-0 px-5'>
               <UserPreviewTop />
               <TabNav />
               {children}
            </div>
         </div>
      </HomeLayout>
   )
}
