import EmojiPicker, { EmojiClickData } from "emoji-picker-react"
import React, { useState } from "react"

import { FaRegFaceSmile } from "react-icons/fa6"
import { useOutsideClick } from "@components/hooks/useClickOutSide"
import Editor from "../Editor"

interface CommentInputProps {
   handleAddComment: (content: string) => void
}

const CommentInput = ({ handleAddComment }: CommentInputProps) => {
   const [comment, setComment] = useState("")
   const [showEmoji, setShowEmoji] = useState(false)

   const closeEmojiBoard = () => {
      setShowEmoji(false)
   }

   const chooseEmoji = (emojiObject: EmojiClickData, event: MouseEvent) => {
      setComment((prev) => prev.replace(/(<\/p>)$/, emojiObject.emoji))
   }

   const ref = useOutsideClick(closeEmojiBoard)
   console.log(comment)
   return (
      <div className='mt-1 flex w-full items-center justify-between'>
         <div className='comment-input max-w-[227px] flex-1'>
            <Editor data={comment} setData={setComment} />
         </div>
         <div className='flex cursor-pointer items-center p-2'>
            {comment !== "" && (
               <button
                  onClick={() => {
                     handleAddComment(comment)
                     console.log(comment)
                     setComment("")
                  }}
                  className='font-semibold text-blue-500 hover:text-blue-700'
               >
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
