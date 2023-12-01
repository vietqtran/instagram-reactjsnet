import React, { useEffect, useState } from "react"
import { addComment, getPostComments } from "@utils/api/commentApi"
import { calcTimeToNow, calcTimeToNowDetail } from "@utils/helper"

import Avatar from "@components/common/User/Avatar"
import AvatarWithStory from "@components/common/User/AvatarWithStory"
import { BsThreeDots } from "react-icons/bs"
import Comment from "@components/common/Comment"
import CommentInput from "@components/common/Home/CommentInput"
import CommentOutline from "@components/Icons/Comment/CommentOutline"
import { CommentRequest } from "@type/requestModels/commentRequest"
import { CommentResponse } from "@type/responseModel/commentResponse"
import HeartOutline from "@components/Icons/Heart/HeartOutline"
import Link from "next/link"
import { PiDotOutlineFill } from "react-icons/pi"
import { PostResponse } from "@type/responseModel/postResponse"
import PostSlider from "@components/common/Home/PostSlider"
import { RootState } from "@redux/reducers"
import SaveOutlineBig from "@components/Icons/Save/SaveOutlineBig"
import ShareOutline from "@components/Icons/Share/ShareOutline"
import { User } from "@type/User"
import { useSelector } from "react-redux"

type PostDetailContainer = {
   post: PostResponse
}

const PostDetailContainer = ({ post }: PostDetailContainer) => {
   const user: User = useSelector((state: RootState) => state.user)
   const [comments, setComments] = useState<CommentResponse[]>([])

   useEffect(() => {
      const fetchComments = async () => {
         const data: CommentResponse[] = await getPostComments(post.id).then(
            (res: any) => {
               return res as CommentResponse[]
            }
         )
         if (data) {
            setComments(data)
         }
         console.log(data)
      }

      fetchComments()
   }, [post.id])

   const handleAddComment = async (content: string) => {
      if (content !== "") {
         const comment: CommentRequest = {
            content: content,
            isReply: false,
            replyId: null,
            postId: post.id,
            userId: user.id,
         }
         const data: CommentResponse = await addComment(comment).then(
            (res: any) => {
               return res
            }
         )
         console.log(data)
         if (data) {
            setComments((prev) => [data, ...prev])
         }
      }
   }

   return (
      <div className='w-full max-w-[975px]'>
         <div className='v-border-b py-10'>
            <div className='flex h-full w-auto items-stretch justify-center border-[1px] border-gray-300'>
               <div className='h-full w-[calc(100%-337px)] flex-1'>
                  <PostSlider images={post.postImages} id={post.id} />
               </div>
               <div className='flex min-w-[337px] flex-shrink-0 flex-col justify-between'>
                  <div className='v-border-b flex w-full items-center justify-between px-4 py-[14px]'>
                     <div className='flex items-center'>
                        <div className='w-fit'>
                           <AvatarWithStory
                              hasStories={true}
                              size={32}
                              src={post.user.avatar}
                           />
                        </div>
                        <div className='flex items-center pl-2 text-sm font-semibold'>
                           <span>{post.user.username}</span>
                           <span>
                              <PiDotOutlineFill />
                           </span>
                           <span className='cursor-pointer text-blue-500 hover:text-blue-700'>
                              Follow
                           </span>
                        </div>
                     </div>
                     <div className='cursor-pointer pl-2'>
                        <BsThreeDots />
                     </div>
                  </div>
                  <div className='v-border-b max-h-[420px] max-w-[337px] flex-1 overflow-y-auto py-2'>
                     <div className='w-full px-4 pb-3'>
                        <div className='flex w-full items-start'>
                           <div>
                              <Avatar size={32} src={post.user.avatar} />
                           </div>
                           <div className='max pl-2'>
                              <div className='text-sm'>
                                 <span className='font-semibold'>
                                    {post.user.username}
                                 </span>
                                 <span className='ml-2 text-gray-400'>
                                    {calcTimeToNow(post.createdAt)}
                                 </span>
                              </div>
                              <div
                                 className='overflow-hidden whitespace-break-spaces break-all text-sm'
                                 dangerouslySetInnerHTML={{
                                    __html: post.title,
                                 }}
                              ></div>
                           </div>
                        </div>
                     </div>
                     {comments.map((cmt) => {
                        return <Comment comment={cmt} key={cmt.id} />
                     })}
                  </div>
                  <div className='px-2'>
                     <div className='my-1 flex w-full items-center justify-between'>
                        <div className='flex flex-1 items-center justify-start'>
                           <div className='cursor-pointer p-2 hover:opacity-50'>
                              <HeartOutline />
                           </div>
                           <div className='cursor-pointer p-2 hover:opacity-50'>
                              <CommentOutline />
                           </div>
                           <div className='cursor-pointer p-2 hover:opacity-50'>
                              <ShareOutline />
                           </div>
                        </div>
                        <div className='cursor-pointer p-2 hover:opacity-50'>
                           <SaveOutlineBig />
                        </div>
                     </div>
                     <div className='px-2 text-sm'>
                        <div>
                           Liked by{" "}
                           <Link className='font-semibold' href={"/u/username"}>
                              vietq.tran
                           </Link>{" "}
                           and <span className='font-semibold'>others</span>
                        </div>
                        <div className='text-xs text-gray-500'>
                           {calcTimeToNowDetail(post.createdAt)}
                        </div>
                        <div className='flex items-center justify-between pt-3'>
                           <div className='pr-2'>
                              <Avatar size={32} src={user.avatar} />
                           </div>
                           <CommentInput handleAddComment={handleAddComment} />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div>
            <span>More posts from {post.user.username}</span>
         </div>
      </div>
   )
}

export default PostDetailContainer
