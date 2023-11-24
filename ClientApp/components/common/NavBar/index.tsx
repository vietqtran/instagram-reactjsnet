"use client"

import React, { useEffect, useState } from "react"

import CreateButton from "./CreateButton"
import ExploreButton from "./ExploreButton"
import HomeButton from "./HomeButton"
import Link from "next/link"
import Logo from "@components/Icons/Logo"
import MessagesButton from "./MessagesButton"
import MoreButton from "./MoreButton"
import NotificationContent from "@components/common/Notification/NotificationContent"
import NotificationsButton from "./NotificationsButton"
import ProfileButton from "./ProfileButton"
import { RootState } from "@redux/reducers"
import SearchButton from "./SearchButton"
import SearchContent from "@components/common/Notification/SearchContent"
import SubNavContent from "../SubNavContent"
import TextLogo from "../TextLogo"
import { User } from "@type/User"
import { usePathname } from "next/navigation"
import { useSelector } from "react-redux"

function NavBar() {
   const pathName = usePathname()
   const user: User = useSelector((state: RootState) => state.user)

   const [tab, setTab] = useState<string>("")

   useEffect(() => {
      const pathElements = pathName?.split("/")
      console.log(pathElements)
      if (pathElements && pathElements[1] === "u") {
         if (pathElements[2] === user.username) {
            setTab("profile")
         } else {
            setTab("")
         }
      }
      if (pathElements && pathElements[1] === "") {
         setTab("home")
      }
      if (pathElements && pathElements[1] === "explore") {
         setTab("explore")
      }
      if (pathElements && pathElements[1] === "message") {
         setTab("message")
      }
   }, [pathName, user.username])

   const handleChangeTab = (newTab: string) => {
      setTab(newTab)
   }

   return (
      <nav
         className={`z-20 duration-200 ease-linear fixed bottom-0 left-0 right-0 h-[48px] w-full sm:right-auto md:w-[74px] md:top-0 md:h-[100vh] 
         ${
            tab === "search" || tab === "notification"
               ? "lg:w-[74px]"
               : "lg:w-[335px]"
         }
         `}
      >
         <div className='relative z-10 h-full'>
            <div className='z-50 flex h-full w-full flex-col items-center justify-between border-t-[1px] border-gray-300 bg-white md:border-r-[1px] md:p-3'>
               <div className='flex w-full items-center justify-around text-black md:block'>
                  <div className='relative mb-4 hidden w-full cursor-pointer justify-center px-2 pb-7 pt-[21px] md:flex lg:justify-start'>
                     {!(tab === "search" || tab === "notification") && (
                        <Link href='/'>
                           <div
                              className={`absolute left-0 px-3 opacity-0 duration-200 ease-linear lg:opacity-100`}
                           >
                              <TextLogo size={110} />
                           </div>
                           <div className='logo-animate w-full p-3 text-center opacity-100 duration-200 ease-linear hover:bg-gray-100 lg:opacity-0'>
                              <Logo />
                           </div>
                        </Link>
                     )}
                     {(tab === "search" || tab === "notification") && (
                        <div className='logo-animate flex w-full justify-center p-3 duration-200 ease-linear'>
                           <Logo />
                        </div>
                     )}
                  </div>
                  <HomeButton tab={tab} setTab={handleChangeTab} />
                  <SearchButton tab={tab} setTab={handleChangeTab} />
                  <ExploreButton tab={tab} setTab={handleChangeTab} />
                  <MessagesButton tab={tab} setTab={handleChangeTab} />
                  <NotificationsButton tab={tab} setTab={handleChangeTab} />
                  <CreateButton tab={tab} />
                  <ProfileButton tab={tab} setTab={handleChangeTab} />
               </div>
               <div className='hidden w-full md:block'>
                  <MoreButton tab={tab} />
               </div>
            </div>
            <div
               className={`${
                  tab === "search" || tab === "notification"
                     ? " translate-x-0"
                     : "translate-x-[-500px]"
               } duration-200 ease-linear z-[-1] md:block hidden sub-nav-shadow absolute bottom-0 right-[-398px] h-[100vh] w-[397px] overflow-hidden rounded-r-2xl border-[1px] border-l-0 border-gray-300 bg-white`}
            >
               {tab === "search" && (
                  <SubNavContent>
                     <SearchContent />
                  </SubNavContent>
               )}
               {tab === "notification" && (
                  <SubNavContent>
                     <NotificationContent />
                  </SubNavContent>
               )}
            </div>
         </div>
      </nav>
   )
}

export default NavBar
