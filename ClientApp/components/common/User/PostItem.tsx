import { FaHeart, FaMessage } from "react-icons/fa6"

import CarouselSolid from "@components/Icons/Carousel/CarouselSolid"
import Image from "next/image"
import PinSolid from "@components/Icons/Pin/PinSolid"
import { PostResponse } from "@type/responseModel/postResponse"
import React from "react"

type PostItemProps = {
   post: PostResponse
}

export default function PostItem({ post }: Readonly<PostItemProps>) {
   return (
      <div className='group relative col-span-1 aspect-square overflow-hidden h-full w-full cursor-pointer'>
         <div className='w-full h-full'>
            <Image
               alt='post'
               src={post.postImages[0]}
               width={500}
               height={500}
               priority
               className='w-full h-full object-cover'
            />
         </div>

         <div className='text-white z-10 hidden group-hover:flex items-center justify-center absolute top-0 left-0 bg-opacity-25 w-full h-full bg-black'>
            <span className='flex items-center mx-4'>
               <FaHeart />
               <span className='ml-1 font-semibold'>2</span>
            </span>
            <span className='flex items-center mx-4'>
               <FaMessage />
               <span className='ml-1 font-semibold'>2</span>
            </span>
         </div>

         <div className='absolute top-0 right-0 p-2 z-0'>
            {post.postImages.length > 1 && !post.isPinned && <CarouselSolid />}
            {post.isPinned && <PinSolid />}
         </div>
      </div>
   )
}
