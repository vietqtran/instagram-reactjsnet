import React, { useState } from "react"

const PostContent = () => {
   const [readMore, setReadMore] = useState(false)

   return (
      <div className='w-full mt-3'>
         <div className={`${readMore ? "h-auto" : "h-[20px]"} overflow-hidden`}>
            <span>assdkjhdsbk</span>
            <br />
            <span>assdkjhdsbk</span>
            <br />
            <span>assdkjhdsbk</span>
            <br />
            <span>assdkjhdsbk</span>
            <br />
            <span>assdkjhdsbk</span>
            <br />
         </div>
         {!readMore && (
            <div
               onKeyDown={() => {}}
               onClick={() => setReadMore(true)}
               className='leading-4 cursor-pointer'
            >
               <span>...</span>
               <br />
               <span className='text-gray-500'>more</span>
            </div>
         )}
      </div>
   )
}

export default PostContent
