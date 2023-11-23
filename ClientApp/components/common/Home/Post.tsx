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
               <div className='p-2 hover:opacity-50 cursor-pointer'>
                  <HeartOutline />
               </div>
               <div className='p-2 hover:opacity-50 cursor-pointer'>
                  <CommentOutline />
               </div>
               <div className='p-2 hover:opacity-50 cursor-pointer'>
                  <ShareOutline />
               </div>
            </div>
            <div className='p-2 hover:opacity-50 cursor-pointer'>
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
