import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import {
   IoIosArrowDropleftCircle,
   IoIosArrowDroprightCircle,
} from "react-icons/io"
import { Navigation, Pagination } from "swiper/modules"
import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import { GoDotFill } from "react-icons/go"
import Image from "next/image"

interface PostSliderProps {
   id: string
}

const PostSlider = ({ id }: PostSliderProps) => {
   return (
      <div className='relative w-full aspect-square overflow-hidden bg-black text-white rounded-[4px] border-[1px] border-gray-100'>
         <div
            className={`cursor-pointer text-2xl p-2 z-10 swiper-arrow after:hidden absolute top-[50%] translate-y-[-50%] left-0 swiper-button-prev-${id}`}
         >
            <IoIosArrowDropleftCircle />
         </div>
         <div
            className={`cursor-pointer text-2xl p-2 z-10 swiper-arrow after:hidden absolute top-[50%] translate-y-[-50%] right-0 swiper-button-next-${id}`}
         >
            <IoIosArrowDroprightCircle />
         </div>
         <Swiper
            navigation={{
               nextEl: `.swiper-button-next-${id}`,
               prevEl: `.swiper-button-prev-${id}`,
            }}
            modules={[Navigation, Pagination]}
            allowTouchMove
            pagination={{
               el: `.swiper-pagination-${id}`,
               clickable: true,
               renderBullet: function (index, className) {
                  return `<span
                        key=${index}
                        class='${className} text-black cursor-pointer bg-white block swiper-pagination-dot'
                     >
                     </span>`
               },
            }}
            className={`w-full h-full slider${id}`}
         >
            <div
               className={`z-10 absolute flex items-center justify-center bottom-[10px] w-full swiper-pagination-${id}`}
            ></div>
            <SwiperSlide>
               <Image
                  className='w-full h-full object-cover z-0'
                  alt='post-image'
                  src={"/assets/images/post_fake.jpg"}
                  width={5000}
                  height={5000}
                  priority
               />
            </SwiperSlide>
            <SwiperSlide>
               <Image
                  className='w-full h-full object-cover z-0'
                  alt='post-image'
                  src={"/assets/images/post_fake.jpg"}
                  width={5000}
                  height={5000}
                  priority
               />
            </SwiperSlide>
            <SwiperSlide>
               <Image
                  className='w-full h-full object-cover z-0'
                  alt='post-image'
                  src={"/assets/images/post_fake.jpg"}
                  width={500}
                  height={500}
                  priority
               />
            </SwiperSlide>
            <SwiperSlide>
               <Image
                  className='w-full h-full object-cover z-0'
                  alt='post-image'
                  src={"/assets/images/post_fake.jpg"}
                  width={500}
                  height={500}
                  priority
               />
            </SwiperSlide>
            <SwiperSlide>
               <Image
                  className='w-full h-full object-cover z-0'
                  alt='post-image'
                  src={"/assets/images/post_fake.jpg"}
                  width={500}
                  height={500}
                  priority
               />
            </SwiperSlide>
         </Swiper>
      </div>
   )
}

export default PostSlider
