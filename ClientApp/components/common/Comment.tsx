import React from "react"
import Avatar from "./User/Avatar"
import { calcTimeToNow } from "@utils/helper"
import type { Comment } from "@type/models/comment"

type CommentProps = {
   comment: Comment
}

function Comment({ comment }: Readonly<CommentProps>): React.JSX.Element {
   return (
      <div className='flex w-full items-start'>
         <div>
            <Avatar size={32} src={comment.user.avatar} />
         </div>
         <div className='pl-2'>
            <div className='text-sm'>
               <span className='font-semibold'>{comment.user.username}</span>
               <span className='ml-2 text-gray-400'>
                  {calcTimeToNow(comment.modifiedAt ?? "")}
               </span>
            </div>
            <div
               className='text-sm'
               dangerouslySetInnerHTML={{
                  __html: comment.content,
               }}
            ></div>
         </div>
      </div>
   )
}

export default Comment
