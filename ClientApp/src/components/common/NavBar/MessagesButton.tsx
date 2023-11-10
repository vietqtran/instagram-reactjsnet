import React from "react"
import { Link } from "react-router-dom"
import MessageOutline from "./Icons/Message/MessageOutline"
import MessageSolid from "./Icons/Message/MessageSolid"

interface MessagesButtonProps {
   tab: string
   setTab: (tab: string) => void
}

const MessagesButton: React.FC<MessagesButtonProps> = ({ tab, setTab }) => {
   console.log(tab)

   return (
      <div
         onClick={() => {
            setTab("message")
         }}
         className='group my-3 rounded-lg duration-200 ease-linear hover:bg-gray-100'
      >
         <Link to='#' className='hover:text-black'>
            <div className='flex items-center justify-start p-3'>
               <div className='block w-[40px] group-hover:scale-105'>
                  {tab === "message" ? <MessageSolid /> : <MessageOutline />}
               </div>
               <span
                  className={`${tab === "message" ? "font-bold" : ""} ${
                     tab === "search" || tab === "notification"
                        ? "hidden"
                        : "block"
                  } `}
               >
                  <span className='hidden lg:block'>Messages</span>
               </span>
            </div>
         </Link>
      </div>
   )
}

export default MessagesButton
