import Comment from "./icons/Comment"
import CommentInput from "./CommentInput"
import Heart from "./icons/Heart"
import Link from "next/link"
import PostContent from "./PostContent"
import PostHeader from "./PostHeader"
import PostSlider from "./PostSlider"
import React from "react"
import Save from "./icons/Save"
import Share from "./icons/Share"

interface PostProps {
   type: string
}

export default function Post({ type }: Readonly<PostProps>) {
   return (
      <div className='w-full max-w-[470px] select-none v-border-b pt-5'>
         <div className='w-full px-2'>
            <PostHeader type={type} />
         </div>
         <div className='w-full px-2'>
            <PostSlider id={type} />
         </div>
         <div className='w-full flex items-center justify-between my-1'>
            <div className='flex-1 flex items-center justify-start'>
               <Heart />
               <Comment />
               <Share />
            </div>
            <div>
               <Save />
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
            <PostContent />
            <div className='mt-3 text-gray-500 cursor-pointer w-fit'>
               View all 7 comments
            </div>
            <div>
               <CommentInput />
            </div>
         </div>
      </div>
   )
}
