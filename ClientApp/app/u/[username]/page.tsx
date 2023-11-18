"use client"

import HomeLayout from "@components/layouts/HomeLayout"
import React from "react"
import UserPreviewTop from "@components/common/User/UserPreviewTop"
import { usePathname } from "next/navigation"

export default function User() {
   return (
      <HomeLayout>
         <div className='container mx-auto flex justify-center py-8 md:px-5'>
            <div className='w-full max-w-[935px]'>
               <UserPreviewTop />
            </div>
         </div>
      </HomeLayout>
   )
}
