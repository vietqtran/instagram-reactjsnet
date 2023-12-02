import EmojiPicker, { EmojiClickData } from "emoji-picker-react"
import React, { useState } from "react"

import Avatar from "../User/Avatar"
import { FaRegFaceSmile } from "react-icons/fa6"
import { RootState } from "@redux/reducers"
import { User } from "@type/User"
import dynamic from "next/dynamic"
import { stripHtml } from "@utils/helper"
import { useOutsideClick } from "@components/hooks/useClickOutSide"
import { useSelector } from "react-redux"

const CustomEditor = dynamic(
   () => {
      return import("../Editor")
   },
   { ssr: false }
)

type CreatePostPreviewCaptionProps = {
   postCaption: string
   setPostCaption: (postCaption: string) => void
}

export const CreatePostPreviewCaption = ({
   postCaption,
   setPostCaption,
}: CreatePostPreviewCaptionProps) => {
   const [showEmoji, setShowEmoji] = useState(false)

   const chooseEmoji = (emojiObject: EmojiClickData, event: MouseEvent) => {
      setPostCaption(postCaption.replace(/<\/p>$/, emojiObject.emoji + "</p>"))
   }
   const closeEmojiBoard = () => {
      setShowEmoji(false)
   }

   const ref = useOutsideClick(closeEmojiBoard)

   const user: User = useSelector((state: RootState) => state.user)

   return (
      <div className={`flex-1`}>
         <div className='p-4'>
            <div className='flex items-center justify-start pb-3'>
               <Avatar size={28} src={user.avatar ?? "/assets/logo/user.png"} />
               <span className='pl-3 text-sm font-semibold'>vietqtran</span>
            </div>
            <CustomEditor data={postCaption} setData={setPostCaption} />
         </div>
         <div className='v-border-b relative flex items-center justify-between px-4 py-2 text-sm'>
            <div
               onClick={() => {
                  setShowEmoji((prev) => !prev)
               }}
               className='cursor-pointer'
            >
               <FaRegFaceSmile />
            </div>
            {showEmoji && (
               <div
                  ref={ref}
                  className='absolute right-[100%] top-[-100px] z-50'
               >
                  <EmojiPicker onEmojiClick={chooseEmoji} />
               </div>
            )}
         </div>
      </div>
   )
}
