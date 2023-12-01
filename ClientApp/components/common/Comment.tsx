import React from "react"
import Avatar from "./User/Avatar"
import { calcTimeToNow } from "@utils/helper"
import LikeCommentButton from "./Button/LikeCommentButton"
import { CommentResponse } from "@type/responseModel/commentResponse"
import { PiDotsThreeOutlineFill } from "react-icons/pi"

type CommentProps = {
   comment: CommentResponse
}

function Comment({ comment }: Readonly<CommentProps>): React.JSX.Element {
   return (
      <div className='group flex max-w-[calc(337px)] items-start px-4 py-2 pr-0'>
         <div>
            <Avatar
               size={32}
               src={comment.user.avatar ?? "/assets/logo/user.png"}
            />
         </div>
         <div className='w-full pl-2'>
            <div className='text-sm'>
               <span className='font-semibold'>{comment.user.username}</span>
               <span className='pl-2 text-gray-400'>
                  {calcTimeToNow(comment.modifiedAt ?? Date.now.toString())}
               </span>
            </div>
            <div className='flex w-full items-center justify-between'>
               <div className='text-sm'>
                  <div
                     className='whitespace-normal break-all'
                     dangerouslySetInnerHTML={{
                        __html: comment.content,
                     }}
                  ></div>
               </div>
               <div className='cursor-pointer px-3'>
                  <LikeCommentButton />
               </div>
            </div>
            <div className='mt-2 flex items-center text-xs font-semibold text-gray-500'>
               <div className='mr-4 cursor-pointer'>10 likes</div>
               <div className='mr-4 cursor-pointer'>Reply</div>
               <div className='hidden cursor-pointer group-hover:block'>
                  <PiDotsThreeOutlineFill />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Comment
