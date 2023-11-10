import React, { useRef, useState } from "react"
import TextLogo from "../TextLogo"
import { Link } from "react-router-dom"
import HomeButton from "./HomeButton"
import SearchButton from "./SearchButton"
import NotificationsButton from "./NotificationsButton"
import CreateButton from "./CreateButton"
import ProfileButton from "./ProfileButton"
import ExploreButton from "./ExploreButton"
import MessagesButton from "./MessagesButton"
import Logo from "./Icons/Logo"
import SubNavContent from "../SubNavContent"
import SearchContent from "./Icons/Search/SearchContent"
import NotificationContent from "./Icons/Heart/NotificationContent"
import MoreButton from "./MoreButton"

function NavBar() {
   const [tab, setTab] = useState<string>("home")

   const handleChangeTab = (newTab: string) => {
      setTab(newTab)
   }

   return (
      <nav
         className={`duration-200 ease-linear fixed bottom-0 left-0 right-0 h-[48px] w-full sm:right-auto md:w-[74px] md:top-0 md:h-[100vh] 
         ${
            tab === "search" || tab === "notification"
               ? "lg:w-[74px]"
               : "lg:w-[335px]"
         }
         `}
      >
         <div className='relative z-10 h-full'>
            <div className='z-20 flex h-full w-full flex-col items-center justify-between border-r-[1px] border-gray-300 bg-white p-3'>
               <div className='w-full text-black'>
                  <div className='relative mb-4 flex w-full cursor-pointer justify-center px-2 pb-7 pt-[21px] lg:justify-start'>
                     {!(tab === "search" || tab === "notification") && (
                        <Link to='/home'>
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
               <div className='w-full'>
                  <MoreButton />
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
