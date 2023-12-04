import CommentInput from "./CommentInput"
import CommentOutline from "@components/Icons/Comment/CommentOutline"
import HeartOutline from "@components/Icons/Heart/HeartOutline"
import Link from "next/link"
import PostContent from "./PostContent"
import PostHeader from "./PostHeader"
import { PostResponse } from "@type/responseModel/postResponse"
import PostSlider from "./PostSlider"
import React from "react"
import SaveOutlineBig from "@components/Icons/Save/SaveOutlineBig"
import ShareOutline from "@components/Icons/Share/ShareOutline"
import { deletePost } from "@utils/api/postApi"
import { CommentRequest } from "@type/requestModels/commentRequest"
import { trimExtraParagraphTags } from "@utils/helper"
import { CommentResponse } from "@type/responseModel/commentResponse"
import { User } from "@type/User"
import { useSelector } from "react-redux"
import { RootState } from "@redux/reducers"
import { addComment } from "@utils/api/commentApi"

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
         const data: CommentResponse = await addComment(comment).then(
            (res: any) => {
               return res
            }
         )
         console.log(data)
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
            <PostContent content={post.title} />
            <div className='mt-3 w-fit cursor-pointer text-gray-500'>
               View all 7 comments
            </div>
            <div>
               <CommentInput handleAddComment={handleAddComment} />
            </div>
         </div>
      </div>
   )
}
