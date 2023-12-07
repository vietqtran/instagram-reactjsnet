import React, { useState } from "react"
import { likeComment, unlikeComment } from "@utils/api/likeCommentApi"

import Avatar from "./User/Avatar"
import { CommentResponse } from "@type/responseModel/commentResponse"
import LikeCommentButton from "./Button/LikeCommentButton"
import { LikedCommentButton } from "./Button/LikedCommentButton"
import LikedUserModal from "@components/common/LikedUserModal"
import Overlay from "./Overlay"
import { PiDotsThreeOutlineFill } from "react-icons/pi"
import { RootState } from "@redux/reducers"
import { User } from "@type/models/User"
import { calcTimeToNow } from "@utils/helper"
import { useSelector } from "react-redux"

type CommentProps = {
   comment: CommentResponse
}

function Comment({ comment }: Readonly<CommentProps>): React.JSX.Element {
   const user: User = useSelector((state: RootState) => state.user)
   const [liked, setLiked] = useState(comment.likeComments.includes(user.id))
   const [likedQuantity, setLikedQuantity] = useState(
      comment.likeComments.length
   )
   const [showLikedUser, setShowLikedUser] = useState(false)

   const like = async () => {
      const likeSuccess = await likeComment(comment.id, user.id).then(
         (res: any) => {
            return res
         }
      )
      if (likeSuccess) {
         setLiked(true)
         setLikedQuantity((prev) => prev + 1)
      }
   }

   const unlike = async () => {
      const unlikeSuccess = await unlikeComment(comment.id, user.id).then(
         (res: any) => {
            return res
         }
      )
      if (unlikeSuccess) {
         setLiked(false)
         setLikedQuantity((prev) => prev - 1)
      }
   }

   return (
      <>
         {showLikedUser && (
            <Overlay setShow={setShowLikedUser} show={showLikedUser}>
               <LikedUserModal
                  setShowLikedUser={setShowLikedUser}
                  id={comment.id}
                  type='comment'
               />
            </Overlay>
         )}
         <div className='group flex max-w-[calc(337px)] items-start overflow-x-hidden px-4 py-2 pr-0'>
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
                  {!liked && (
                     <div onClick={like} className='cursor-pointer px-3'>
                        <LikeCommentButton />
                     </div>
                  )}
                  {liked && (
                     <div
                        onClick={unlike}
                        className='heart-keyframe cursor-pointer px-3'
                     >
                        <LikedCommentButton />
                     </div>
                  )}
               </div>
               <div className='mt-2 flex items-center text-xs font-semibold text-gray-500'>
                  {likedQuantity > 0 && (
                     <div
                        onClick={() => {
                           setShowLikedUser(true)
                        }}
                        className='mr-4 cursor-pointer'
                     >
                        {likedQuantity} likes
                     </div>
                  )}
                  <div className='mr-4 cursor-pointer'>Reply</div>
                  <div className='hidden cursor-pointer group-hover:block'>
                     <PiDotsThreeOutlineFill />
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Comment
