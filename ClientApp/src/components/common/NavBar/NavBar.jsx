import React, { useState } from "react"
import TextLogo from "../TextLogo"
import { Link } from "react-router-dom"
import HomeButton from "./HomeButton"
import SearchButton from "./SearchButton"
import NotificationsButton from "./NotificationsButton"
import CreateButton from "./CreateButton"
import ProfileButton from "./ProfileButton"
import ExploreButton from "./ExploreButton"
import MessagesButton from "./MessagesButton"

function NavBar() {
   const [tab, setTab] = useState("home")
   console.log("oke")
   return (
      <nav className='fixed bottom-0 left-0 right-0 flex h-[48px] w-full flex-col items-center justify-between border-r-[1px] border-gray-300 p-3 sm:right-auto sm:w-[72px] md:top-0 md:h-[100vh] md:w-[335px]'>
         <div className='w-full text-black'>
            <div className='w-fit cursor-pointer px-2 pb-4 pt-[21px]'>
               <Link to={"/home"}>
                  <TextLogo size={110} />
               </Link>
            </div>
            <HomeButton tab={tab} setTab={setTab} />
            <SearchButton tab={tab} setTab={setTab} />
            <ExploreButton tab={tab} setTab={setTab} />
            <MessagesButton tab={tab} setTab={setTab} />
            <NotificationsButton tab={tab} setTab={setTab} />
            <CreateButton />
            <ProfileButton tab={tab} setTab={setTab} />
         </div>
         <div>
            <div>djkdgfasf</div>
         </div>
      </nav>
   )
}

export default NavBar
