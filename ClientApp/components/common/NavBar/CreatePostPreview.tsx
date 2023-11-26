import {
   IoIosArrowDropleftCircle,
   IoIosArrowDroprightCircle,
} from "react-icons/io"
import { Navigation, Pagination } from "swiper/modules"
import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import { CreatePostPreviewCaption } from "./CreatePostPreviewCaption"
import { GrLinkPrevious } from "react-icons/gr"
import Image from "next/image"

type CreatePostPreviewProps = {
   files: FileList | null | undefined
   setShowPreviewPost: (show: boolean) => void
}

export const CreatePostPreview = ({
   files,
   setShowPreviewPost,
}: CreatePostPreviewProps) => {
   const [backConfirm, setBackConfirm] = useState(false)
   const [showWriteContent, setShowWriteContent] = useState(false)
   console.log("render")
   return (
      <div>
         <div className='w-fit h-auto relative flex items-center justify-center modal-keyframe'>
            <div className='rounded-lg bg-white'>
               <div className='w-full text-center py-2 v-border-b relative'>
                  <span
                     onClick={() => {
                        setBackConfirm(true)
                     }}
                     className='py-2 px-4 cursor-pointer text-lg absolute block left-0 top-[50%] translate-y-[-50%] '
                  >
                     <GrLinkPrevious />
                  </span>
                  <span className='text-sm font-semibold'>Preview</span>
                  {!showWriteContent && (
                     <button
                        onClick={() => {
                           setShowWriteContent(true)
                        }}
                        className='text-sm py-2 px-4 cursor-pointer absolute right-0 font-semibold text-blue-500 hover:text-blue-700 top-[50%] translate-y-[-50%]'
                     >
                        Next
                     </button>
                  )}
                  {showWriteContent && (
                     <button
                        onClick={() => {
                           setShowWriteContent(true)
                        }}
                        className='text-sm py-2 px-4 cursor-pointer absolute right-0 font-semibold text-blue-500 hover:text-blue-700 top-[50%] translate-y-[-50%]'
                     >
                        Share
                     </button>
                  )}
               </div>
               <div
                  className={`${
                     showWriteContent ? "w-[calc(726px+322px)]" : "w-[726px]"
                  } flex items-start justify-center duration-200 ease-in-out`}
               >
                  <div className='w-[726px] h-[726px] relative bg-black text-white'>
                     <div
                        className={`cursor-pointer text-2xl z-40 swiper-arrow after:hidden absolute top-[50%] translate-y-[-50%] left-0 swiper-button-prev`}
                     >
                        <IoIosArrowDropleftCircle />
                     </div>
                     <div
                        className={`cursor-pointer text-2xl z-40 swiper-arrow after:hidden absolute top-[50%] translate-y-[-50%] right-0 swiper-button-next`}
                     >
                        <IoIosArrowDroprightCircle />
                     </div>
                     <Swiper
                        navigation={{
                           nextEl: `.swiper-button-next`,
                           prevEl: `.swiper-button-prev`,
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
                     </span>`
                           },
                        }}
                        className={`w-full h-full slider`}
                     >
                        <div
                           className={`z-10 absolute flex items-center justify-center bottom-[15px] w-full swiper-pagination`}
                        ></div>
                        {Array.from(files ?? []).map((file, index) => {
                           return (
                              <SwiperSlide key={file.name}>
                                 <Image
                                    className='w-full h-full object-cover z-0'
                                    alt='post-preview-image'
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
                  {showWriteContent && <CreatePostPreviewCaption />}
               </div>
            </div>
         </div>
         {backConfirm === true && (
            <div className='w-[100vw] z-50 grid place-items-center h-[100vh] absolute top-0 left-0 bg-black bg-opacity-50'>
               <div className='w-[400px] rounded-lg bg-white'>
                  <div className='flex flex-col items-center py-8 justify-center v-border-b'>
                     <h1 className=' text-xl'>Discard post?</h1>
                     <p className='text-gray-600 text-sm'>{`If you leave, your edits won't be saved.`}</p>
                  </div>
                  <div className='v-border-b py-3'>
                     <button
                        onClick={() => {
                           setShowPreviewPost(false)
                        }}
                        className='font-semibold text-red-500 text-sm block h-full w-full'
                     >
                        Discard
                     </button>
                  </div>
                  <div className='py-3'>
                     <button
                        onClick={() => {
                           setBackConfirm(false)
                        }}
                        className=' text-sm block h-full w-full'
                     >
                        Cancel
                     </button>
                  </div>
               </div>
            </div>
         )}
      </div>
   )
}
