"use client"

import HomeLayout from "@components/layouts/HomeLayout"
import React from "react"
import TabNav from "@pages/User/TabNav"
import UserPreviewTop from "@components/common/User/UserPreviewTop"

export default function User() {
   return (
      <HomeLayout>
         <div className='container mx-auto flex justify-center py-8 md:px-5'>
            <div className='w-full max-w-[935px]'>
               <UserPreviewTop />
               <TabNav />
            </div>
         </div>
      </HomeLayout>
   )
}
