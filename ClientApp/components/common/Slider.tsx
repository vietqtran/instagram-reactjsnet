import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle
} from 'react-icons/io'
import { Navigation, Pagination } from 'swiper/modules'
import React, { memo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import Image from 'next/image'

type Props = {
  files: FileList | null | undefined
}

const Slider = ({ files }: Props) => {
  console.log('slide')
  return (
    <div className="relative h-[726px] w-[726px] bg-black text-white">
      <div
        className={`swiper-arrow swiper-button-prev absolute left-0 top-[50%] z-40 translate-y-[-50%] cursor-pointer text-2xl after:hidden`}
      >
        <IoIosArrowDropleftCircle />
      </div>
      <div
        className={`swiper-arrow swiper-button-next absolute right-0 top-[50%] z-40 translate-y-[-50%] cursor-pointer text-2xl after:hidden`}
      >
        <IoIosArrowDroprightCircle />
      </div>
      <Swiper
        navigation={{
          nextEl: `.swiper-button-next`,
          prevEl: `.swiper-button-prev`
        }}
        modules={[Navigation, Pagination]}
        allowTouchMove
        pagination={{
          el: `.swiper-pagination`,
          clickable: true,
          renderBullet: function (index, className) {
            return `<span
                                          key=${index}
                                          class='${className} text-black cursor-pointer block swiper-pagination-dot'
                                       >
                                       </span>
                                    `
          }
        }}
        className={`slider h-full w-full`}
      >
        <div
          className={`swiper-pagination absolute bottom-[15px] z-10 flex w-full items-center justify-center`}
        ></div>
        {Array.from(files ?? []).map((file, index) => {
          return (
            <SwiperSlide key={file.name}>
              <Image
                className="z-0 h-full w-full object-cover"
                alt="post-preview-image"
                src={URL.createObjectURL(file)}
                width={5000}
                height={5000}
                priority
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default memo(Slider)
