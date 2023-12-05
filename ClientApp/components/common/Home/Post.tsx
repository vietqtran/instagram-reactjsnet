import React, { useEffect, useState } from "react"
import { addComment, getPostComments } from "@utils/api/commentApi"

import CommentInput from "./CommentInput"
import CommentOutline from "@components/Icons/Comment/CommentOutline"
import { CommentRequest } from "@type/requestModels/commentRequest"
import { CommentResponse } from "@type/responseModel/commentResponse"
import HeartOutline from "@components/Icons/Heart/HeartOutline"
import Link from "next/link"
import PostContent from "./PostContent"
import PostFooter from "./PostFooter"
import PostHeader from "./PostHeader"
import { PostResponse } from "@type/responseModel/postResponse"
import PostSlider from "./PostSlider"
import { RootState } from "@redux/reducers"
import SaveOutlineBig from "@components/Icons/Save/SaveOutlineBig"
import ShareOutline from "@components/Icons/Share/ShareOutline"
import { User } from "@type/User"
import { deletePost } from "@utils/api/postApi"
import { trimExtraParagraphTags } from "@utils/helper"
import { useSelector } from "react-redux"

interface PostProps {
   type: string
   post: PostResponse
   updateAfterDeletePost: (postId: string) => void
}

export default function Post({
   type,
   post,
   updateAfterDeletePost,
}: Readonly<PostProps>) {
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

   const handelDelete = async () => {
      const deleteResult: boolean = await deletePost(post.id).then(
         (res: any) => {
            console.log(res)
            return res
         }
      )

      if (deleteResult === true) {
         updateAfterDeletePost(post.id)
      }
   }

   const handleAddComment = async (content: string) => {
      if (content !== "") {
         const comment: CommentRequest = {
            content: trimExtraParagraphTags(content),
            isReply: false,
            replyId: null,
            postId: post.id,
            userId: user.id,
         }
         console.log(comment)
         const data: CommentResponse = await addComment(comment).then(
            (res: any) => {
               return res
            }
         )
         if (data) {
            setComments((prev) => [data, ...prev])
         }
      }
   }

   return (
      <div className='v-border-b w-full max-w-[470px] select-none pt-5'>
         <div className='w-full px-2'>
            <PostHeader
               handleDelete={handelDelete}
               post={post}
               user={post.user}
               type={type}
            />
         </div>
         <div className='w-full px-2'>
            <PostSlider images={post.postImages} id={post.id} />
         </div>
         <PostFooter postId={post.id} />
         <div className='px-2 text-sm'>
            <PostContent content={post.title} />
            {comments.length > 0 && (
               <div className='mt-3 w-fit cursor-pointer text-gray-500'>
                  View all {comments.length} comments
               </div>
            )}
            {comments.length > 0 && (
               <div className='my-2 overflow-hidden'>
                  {comments[0] && (
                     <div className='flex items-start'>
                        <p className='font-semibold'>
                           {comments[0].user.username}
                        </p>
                        <p
                           className='pl-2'
                           dangerouslySetInnerHTML={{
                              __html: comments[0].content,
                           }}
                        ></p>
                     </div>
                  )}
                  {comments[1] && (
                     <div className='flex items-start'>
                        <p className='font-semibold'>
                           {comments[1].user.username}
                        </p>
                        <p
                           className='pl-2 block'
                           dangerouslySetInnerHTML={{
                              __html: comments[1].content,
                           }}
                        ></p>
                     </div>
                  )}
               </div>
            )}
            <div className='post'>
               <CommentInput handleAddComment={handleAddComment} />
            </div>
         </div>
      </div>
   )
}
