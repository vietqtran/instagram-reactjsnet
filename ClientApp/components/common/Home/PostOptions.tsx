import React, { useState } from "react"

import Link from "next/link"
import Overlay from "../Overlay"
import { RootState } from "@redux/reducers"
import { User } from "@type/models/User"
import { useSelector } from "react-redux"

type PostOptionsProps = {
   setShowOptions: (value: boolean) => void
   userId: string
   handleDelete: () => void
   postId: string
}

const PostOptions = ({
   setShowOptions,
   userId,
   handleDelete,
   postId,
}: PostOptionsProps) => {
   const user: User = useSelector((state: RootState) => state.user)
   const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

   return (
      <>
         {showDeleteConfirm && (
            <Overlay setShow={setShowDeleteConfirm} show={showDeleteConfirm}>
               <div className='modal-keyframe w-[400px] rounded-lg bg-white'>
                  <div className='v-border-b py-6 text-center'>
                     <div className='mb-1 text-lg font-normal'>
                        Delete post?
                     </div>
                     <div className='text-sm text-gray-500'>
                        Are you sure you want to delete this post?
                     </div>
                  </div>
                  <div
                     onClick={handleDelete}
                     className='v-border-b w-full cursor-pointer py-3 text-center font-bold text-red-600'
                  >
                     Delete
                  </div>
                  <div
                     onClick={() => {
                        setShowDeleteConfirm(false)
                     }}
                     className='w-full cursor-pointer py-3 text-center'
                  >
                     Cancel
                  </div>
               </div>
            </Overlay>
         )}
         {!showDeleteConfirm && (
            <div className='modal-keyframe w-[400px] rounded-lg bg-white'>
               <div className='text-sm'>
                  {userId === user.id && (
                     <>
                        <div
                           onClick={() => {
                              setShowDeleteConfirm(true)
                           }}
                           className='v-border-b w-full cursor-pointer py-[14px] text-center font-bold text-red-600'
                        >
                           Delete
                        </div>
                        <div className='v-border-b w-full cursor-pointer py-[14px] text-center'>
                           Edit
                        </div>
                     </>
                  )}
                  {userId !== user.id && (
                     <div className='v-border-b w-full cursor-pointer py-[14px] text-center font-bold text-red-600'>
                        Report
                     </div>
                  )}
                  <Link
                     href={`/p/${postId}`}
                     className='v-border-b block w-full cursor-pointer py-[14px] text-center'
                  >
                     Go to post
                  </Link>
                  <div className='v-border-b w-full cursor-pointer py-[14px] text-center'>
                     Share to...
                  </div>
                  <div className='v-border-b w-full cursor-pointer py-[14px] text-center'>
                     Copy link
                  </div>
                  <div className='v-border-b w-full cursor-pointer py-[14px] text-center'>
                     About this account
                  </div>
                  <div
                     onClick={() => {
                        setShowOptions(false)
                     }}
                     className='w-full cursor-pointer py-[14px] text-center'
                  >
                     Cancel
                  </div>
               </div>
            </div>
         )}
      </>
   )
}

export default PostOptions
