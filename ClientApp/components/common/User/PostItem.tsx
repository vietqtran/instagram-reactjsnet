import { FaHeart, FaMessage } from 'react-icons/fa6'

import CarouselSolid from '@components/Icons/Carousel/CarouselSolid'
import Image from 'next/image'
import PinSolid from '@components/Icons/Pin/PinSolid'
import { PostResponse } from '@type/responseModel/postResponse'
import React from 'react'
import Link from 'next/link'

type PostItemProps = {
  post: PostResponse
}

export default function PostItem({ post }: Readonly<PostItemProps>) {
  return (
    <Link
      href={`/p/${post.id}`}
      className="group relative col-span-1 block aspect-square h-full w-full cursor-pointer overflow-hidden"
    >
      <div className="h-full w-full">
        <Image
          alt="post"
          src={post.postImages[0]}
          width={500}
          height={500}
          priority
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute left-0 top-0 z-10 hidden h-full w-full items-center justify-center bg-black bg-opacity-25 text-white group-hover:flex">
        <span className="mx-4 flex items-center">
          <FaHeart />
          <span className="ml-1 font-semibold">2</span>
        </span>
        <span className="mx-4 flex items-center">
          <FaMessage />
          <span className="ml-1 font-semibold">2</span>
        </span>
      </div>

      <div className="absolute right-0 top-0 z-0 p-2">
        {post.postImages.length > 1 && !post.isPinned && <CarouselSolid />}
        {post.isPinned && <PinSolid />}
      </div>
    </Link>
  )
}
