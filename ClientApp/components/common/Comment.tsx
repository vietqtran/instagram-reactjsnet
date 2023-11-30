import React from "react"
import Avatar from "./User/Avatar"

type CommentProps = {
   comment: any
}

const Comment = ({}: CommentProps) => {
   return (
      <div className='flex w-full items-start'>
         <div>
            <Avatar size={32} src={comment.user.avatar} />
         </div>
         <div className='pl-2'>
            <div className='text-sm'>
               <span className='font-semibold'>{post.user.username}</span>
               <span className='ml-2 text-gray-400'>
                  {calcTimeToNow(post.createdAt)}
               </span>
            </div>
            <div
               className='text-sm'
               dangerouslySetInnerHTML={{
                  __html: post.title,
               }}
            ></div>
         </div>
      </div>
   )
}

export default Comment
