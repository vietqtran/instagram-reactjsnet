import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle
} from 'react-icons/io'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Image from 'next/image'
import React from 'react'

interface PostSliderProps {
  id: string
  images: string[]
}

const PostSlider = ({ id, images }: PostSliderProps) => {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-[4px] border-[1px] border-gray-100 text-white">
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
          prevEl: `.swiper-button-prev-${id}`
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
          }
        }}
        className={`w-full h-full slider${id}`}
      >
        <div
          className={`z-10 absolute flex items-center justify-center bottom-[10px] w-full swiper-pagination-${id}`}
        ></div>
        {images.map((image) => {
          return (
            <SwiperSlide key={image}>
              <Image
                className="z-0 h-full w-full object-cover"
                alt="post-image"
                src={image}
                width={500}
                height={500}
                priority
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default PostSlider
