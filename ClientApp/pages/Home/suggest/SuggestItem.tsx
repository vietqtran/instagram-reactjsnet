import Avatar from "@components/common/User/Avatar"
import React from "react"

function SuggestItem() {
   return (
      <div className='flex items-center mb-3'>
         <div>
            <Avatar src={"/assets/logo/user.png"} size={44} />
         </div>
         <div className='flex flex-col flex-1 items-start pl-3'>
            <span className='text-[13px] font-semibold'>{"username"}</span>
            <span className='text-[13px] text-gray-500'>{"name"}</span>
         </div>
         <div>
            <button className='text-xs text-blue-500 font-semibold hover:text-blue-600'>
               Follow
            </button>
         </div>
      </div>
   )
}

export default SuggestItem
