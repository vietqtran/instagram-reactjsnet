import Link from "next/link"
import MessageOutline from "@components/Icons/Message/MessageOutline"
import MessageSolid from "@components/Icons/Message/MessageSolid"
import React from "react"

interface MessagesButtonProps {
   tab: string
   setTab: (tab: string) => void
}

const MessagesButton: React.FC<MessagesButtonProps> = ({ tab, setTab }) => {
   return (
      <div
         onClick={() => {
            setTab("message")
         }}
         className='group rounded-lg duration-200 ease-linear hover:bg-gray-100 md:my-3'
      >
         <Link href='/message/inbox' className='hover:text-black'>
            <div className='flex items-center justify-start p-3'>
               <div className='block w-fit group-hover:scale-105 md:w-[40px]'>
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
