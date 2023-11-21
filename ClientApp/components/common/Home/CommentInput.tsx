import React, { useState } from "react"

import { FaRegFaceSmile } from "react-icons/fa6"

const CommentInput = () => {
   const [comment, setComment] = useState("")
   return (
      <div className='w-full flex items-start justify-between mt-1'>
         <div className='flex-1'>
            <textarea
               value={comment}
               onChange={(e) => setComment(e.target.value)}
               className='h-auto min-h-[1.25rem] resize-none w-full outline-none py-2 placeholder:text-gray-500'
               placeholder='Add a comment...'
            ></textarea>
         </div>
         <div className='p-2 cursor-pointer flex items-center'>
            {comment !== "" && (
               <button className='font-semibold text-blue-500 hover:text-blue-700'>
                  Post
               </button>
            )}
            <button className='pl-2 text-gray-500 hover:text-gray-400'>
               <FaRegFaceSmile />
            </button>
         </div>
      </div>
   )
}

export default CommentInput
