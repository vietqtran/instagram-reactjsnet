import CommentInput from "./CommentInput"
import CommentOutline from "@components/Icons/Comment/CommentOutline"
import HeartOutline from "@components/Icons/Heart/HeartOutline"
import Link from "next/link"
import PostContent from "./PostContent"
import PostHeader from "./PostHeader"
import PostSlider from "./PostSlider"
import React from "react"
import SaveOutlineBig from "@components/Icons/Save/SaveOutlineBig"
import ShareOutline from "@components/Icons/Share/ShareOutline"
import { PostResponse } from "@type/responseModel/postResponse"

interface PostProps {
   type: string
   post: PostResponse
}

export default function Post({ type, post }: Readonly<PostProps>) {
   console.log(post)
   return (
      <div className='v-border-b w-full max-w-[470px] select-none pt-5'>
         <div className='w-full px-2'>
            <PostHeader user={post.user} type={type} />
         </div>
         <div className='w-full px-2'>
            <PostSlider images={post.postImages} id={type} />
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
               <CommentInput />
            </div>
         </div>
      </div>
   )
}
