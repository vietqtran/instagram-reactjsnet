import { FaHeart, FaMessage } from "react-icons/fa6"

import CarouselSolid from "@components/Icons/Carousel/CarouselSolid"
import Image from "next/image"
import React from "react"

type ExplorePostItemProps = {}

const ExplorePostItem = ({}: ExplorePostItemProps) => {
   return (
      <div className='group relative col-span-1 aspect-square overflow-hidden h-full w-full cursor-pointer'>
         <div>
            <Image
               alt='post'
               src={"/assets/images/post_fake.jpg"}
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
            <CarouselSolid />
         </div>
      </div>
   )
}

export default ExplorePostItem
