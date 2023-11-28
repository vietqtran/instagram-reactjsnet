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
import { uploadFiles } from "@utils/upload/clouldinaryUpload"

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

   const handleSharePost = async () => {
      if (files) {
         const imageLinks = await uploadFiles(files).then((res) => {
            return res
         })
         console.log(imageLinks)
      }
   }

   return (
      <div>
         <div className='modal-keyframe relative flex h-auto w-fit items-center justify-center'>
            <div className='rounded-lg bg-white'>
               <div className='v-border-b relative w-full py-2 text-center'>
                  <span
                     onClick={() => {
                        setBackConfirm(true)
                     }}
                     className='absolute left-0 top-[50%] block translate-y-[-50%] cursor-pointer px-4 py-2 text-lg'
                  >
                     <GrLinkPrevious />
                  </span>
                  <span className='text-sm font-semibold'>Preview</span>
                  {!showWriteContent && (
                     <button
                        onClick={() => {
                           setShowWriteContent(true)
                        }}
                        className='absolute right-0 top-[50%] translate-y-[-50%] cursor-pointer px-4 py-2 text-sm font-semibold text-blue-500 hover:text-blue-700'
                     >
                        Next
                     </button>
                  )}
                  {showWriteContent && (
                     <button
                        onClick={handleSharePost}
                        className='absolute right-0 top-[50%] translate-y-[-50%] cursor-pointer px-4 py-2 text-sm font-semibold text-blue-500 hover:text-blue-700'
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
                  <div className='relative h-[726px] w-[726px] bg-black text-white'>
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
                        className={`slider h-full w-full`}
                     >
                        <div
                           className={`swiper-pagination absolute bottom-[15px] z-10 flex w-full items-center justify-center`}
                        ></div>
                        {Array.from(files ?? []).map((file, index) => {
                           return (
                              <SwiperSlide key={file.name}>
                                 <Image
                                    className='z-0 h-full w-full object-cover'
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
            <div className='absolute left-0 top-0 z-50 grid h-[100vh] w-[100vw] place-items-center bg-black bg-opacity-50'>
               <div className='w-[400px] rounded-lg bg-white'>
                  <div className='v-border-b flex flex-col items-center justify-center py-8'>
                     <h1 className='text-xl'>Discard post?</h1>
                     <p className='text-sm text-gray-600'>{`If you leave, your edits won't be saved.`}</p>
                  </div>
                  <div className='v-border-b py-3'>
                     <button
                        onClick={() => {
                           setShowPreviewPost(false)
                        }}
                        className='block h-full w-full text-sm font-semibold text-red-500'
                     >
                        Discard
                     </button>
                  </div>
                  <div className='py-3'>
                     <button
                        onClick={() => {
                           setBackConfirm(false)
                        }}
                        className='block h-full w-full text-sm'
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
