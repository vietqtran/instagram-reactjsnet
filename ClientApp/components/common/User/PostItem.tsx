import { FaHeart, FaMessage } from "react-icons/fa6"

import Image from "next/image"
import React from "react"

export default function PostItem() {
   return (
      <div className='group relative col-span-1 aspect-square overflow-hidden w-full cursor-pointer'>
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
            {/* carousel  */}
            <svg
               aria-label='Carousel'
               className='v-svg'
               fill='currentColor'
               height='22'
               role='img'
               viewBox='0 0 48 48'
               width='22'
            >
               <path d='M34.8 29.7V11c0-2.9-2.3-5.2-5.2-5.2H11c-2.9 0-5.2 2.3-5.2 5.2v18.7c0 2.9 2.3 5.2 5.2 5.2h18.7c2.8-.1 5.1-2.4 5.1-5.2zM39.2 15v16.1c0 4.5-3.7 8.2-8.2 8.2H14.9c-.6 0-.9.7-.5 1.1 1 1.1 2.4 1.8 4.1 1.8h13.4c5.7 0 10.3-4.6 10.3-10.3V18.5c0-1.6-.7-3.1-1.8-4.1-.5-.4-1.2 0-1.2.6z'></path>
            </svg>

            {/* pin icon */}
            <svg
               aria-label='Pinned post icon'
               className='v-svg'
               fill='currentColor'
               height='22'
               role='img'
               viewBox='0 0 24 24'
               width='22'
            >
               <path d='m22.707 7.583-6.29-6.29a1 1 0 0 0-1.414 0 5.183 5.183 0 0 0-1.543 3.593L8.172 8.79a5.161 5.161 0 0 0-4.768 1.42 1 1 0 0 0 0 1.414l3.779 3.778-5.89 5.89a1 1 0 1 0 1.414 1.414l5.89-5.89 3.778 3.779a1 1 0 0 0 1.414 0 5.174 5.174 0 0 0 1.42-4.769l3.905-5.287a5.183 5.183 0 0 0 3.593-1.543 1 1 0 0 0 0-1.414Z'></path>
            </svg>
         </div>
      </div>
   )
}
