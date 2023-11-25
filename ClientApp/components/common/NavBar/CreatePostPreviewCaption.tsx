import EmojiPicker, { EmojiClickData } from "emoji-picker-react"
import React, { useState } from "react"

import Avatar from "../User/Avatar"
import Editor from "../Editor"
import { FaRegFaceSmile } from "react-icons/fa6"
import { RootState } from "@redux/reducers"
import { User } from "@type/User"
import { stripHtml } from "@utils/helper"
import { useOutsideClick } from "@components/hooks/useClickOutSide"
import { useSelector } from "react-redux"

type Props = {}

export const CreatePostPreviewCaption = (props: Props) => {
   const [showEmoji, setShowEmoji] = useState(false)
   const [postCaption, setPostCaption] = useState("")

   const chooseEmoji = (emojiObject: EmojiClickData, event: MouseEvent) => {
      setPostCaption((prev) =>
         prev.replace(/<\/p>$/, emojiObject.emoji + "</p>")
      )
   }
   const closeEmojiBoard = () => {
      setShowEmoji(false)
   }

   const ref = useOutsideClick(closeEmojiBoard)

   const user: User = useSelector((state: RootState) => state.user)

   return (
      <div className={`flex-1`}>
         <div className='p-4 '>
            <div className='flex items-center justify-start pb-3'>
               <Avatar size={28} src={user.avatar ?? "/assets/logo/user.png"} />
               <span className='font-semibold text-sm pl-3'>vietqtran</span>
            </div>
            <Editor data={postCaption} setData={setPostCaption} />
         </div>
         <div className='relative flex items-center justify-between text-sm py-2 v-border-b px-4'>
            <div
               onClick={() => {
                  setShowEmoji((prev) => !prev)
               }}
               className='cursor-pointer'
            >
               <FaRegFaceSmile />
            </div>
            <div>{stripHtml(postCaption).length.toLocaleString()}/2,200</div>
            {showEmoji && (
               <div
                  ref={ref}
                  className='absolute z-50 top-[-100px] right-[100%]'
               >
                  <EmojiPicker onEmojiClick={chooseEmoji} />
               </div>
            )}
         </div>
      </div>
   )
}
