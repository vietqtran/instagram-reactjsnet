import React from "react"
import { RiMessengerLine } from "react-icons/ri"
import { Link } from "react-router-dom"

function MessagesButton({ tab, setTab }) {
   return (
      <div className='my-1 rounded-lg duration-100 ease-linear hover:bg-gray-100'>
         <Link to={"/messages"} className='hover:text-black'>
            <div className='flex items-center justify-start px-2 py-[10px]'>
               <span className='block w-[40px] text-left text-[28px]'>
                  <RiMessengerLine />
               </span>
               <span className=''>Messages</span>
            </div>
         </Link>
      </div>
   )
}

export default MessagesButton
