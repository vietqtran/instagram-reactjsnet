import EmojiPicker, { EmojiClickData } from "emoji-picker-react"
import React, { useEffect, useRef, useState } from "react"

import { EmojiType } from "@node_modules/next/dist/compiled/@vercel/og/emoji"
import { FaRegFaceSmile } from "react-icons/fa6"
import { useOutsideClick } from "@components/hooks/useClickOutSide"

const CommentInput = () => {
   const [comment, setComment] = useState("")
   const [showEmoji, setShowEmoji] = useState(false)

   const closeEmojiBoard = () => {
      setShowEmoji(false)
   }

   const chooseEmoji = (emojiObject: EmojiClickData, event: MouseEvent) => {
      setComment((prev) => prev + emojiObject.emoji)
   }

   const ref = useOutsideClick(closeEmojiBoard)

   return (
      <div className='mt-1 flex w-full items-start justify-between'>
         <div className='flex-1'>
            <textarea
               value={comment}
               rows={4}
               onChange={(e) => setComment(e.target.value)}
               className='h-[40px] min-h-[1.25rem] w-full resize-none py-2 outline-none placeholder:text-gray-500'
               placeholder='Add a comment...'
            ></textarea>
         </div>
         <div className='flex cursor-pointer items-center p-2'>
            {comment !== "" && (
               <button className='font-semibold text-blue-500 hover:text-blue-700'>
                  Post
               </button>
            )}
            <div className='relative'>
               <button
                  onClick={() => {
                     setShowEmoji((prev) => !prev)
                  }}
                  className='pl-2 text-gray-500 hover:text-gray-400'
               >
                  <FaRegFaceSmile />
               </button>

               {showEmoji && (
                  <div
                     ref={ref}
                     className='absolute bottom-[25px] right-0 z-50'
                  >
                     <EmojiPicker onEmojiClick={chooseEmoji} />
                  </div>
               )}
            </div>
         </div>
      </div>
   )
}

export default CommentInput
