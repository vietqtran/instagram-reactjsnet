import React, { useState } from "react"

import Overlay from "../Overlay"
import { RootState } from "@redux/reducers"
import { User } from "@type/User"
import { useSelector } from "react-redux"

type PostOptionsProps = {
   setShowOptions: (value: boolean) => void
   userId: string
   handleDelete: () => void
}

const PostOptions = ({
   setShowOptions,
   userId,
   handleDelete,
}: PostOptionsProps) => {
   const user: User = useSelector((state: RootState) => state.user)
   const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

   return (
      <>
         {showDeleteConfirm && (
            <Overlay setShow={setShowDeleteConfirm} show={showDeleteConfirm}>
               <div className='w-[400px] bg-white rounded-lg modal-keyframe'>
                  <div className='v-border-b text-center py-6'>
                     <div className='text-lg font-normal mb-1'>
                        Delete post?
                     </div>
                     <div className='text-sm text-gray-500'>
                        Are you sure you want to delete this post?
                     </div>
                  </div>
                  <div
                     onClick={handleDelete}
                     className='cursor-pointer py-3 w-full text-center v-border-b text-red-600 font-bold'
                  >
                     Delete
                  </div>
                  <div
                     onClick={() => {
                        setShowDeleteConfirm(false)
                     }}
                     className='cursor-pointer w-full py-3 text-center'
                  >
                     Cancel
                  </div>
               </div>
            </Overlay>
         )}
         {!showDeleteConfirm && (
            <div className='w-[400px] bg-white rounded-lg modal-keyframe'>
               <ul className='text-sm'>
                  {userId === user.id && (
                     <>
                        <li
                           onClick={() => {
                              setShowDeleteConfirm(true)
                           }}
                           className='cursor-pointer py-[14px] w-full text-center v-border-b text-red-600 font-bold'
                        >
                           Delete
                        </li>
                        <li className='cursor-pointer w-full py-[14px] text-center v-border-b'>
                           Edit
                        </li>
                     </>
                  )}
                  {userId !== user.id && (
                     <li className='cursor-pointer py-[14px] w-full text-center v-border-b text-red-600 font-bold'>
                        Report
                     </li>
                  )}
                  <li className='cursor-pointer w-full py-[14px] text-center v-border-b'>
                     Go to post
                  </li>
                  <li className='cursor-pointer w-full py-[14px] text-center v-border-b'>
                     Share to...
                  </li>
                  <li className='cursor-pointer w-full py-[14px] text-center v-border-b'>
                     Copy link
                  </li>
                  <li className='cursor-pointer w-full py-[14px] text-center v-border-b'>
                     About this account
                  </li>
                  <li
                     onClick={() => {
                        setShowOptions(false)
                     }}
                     className='cursor-pointer w-full py-[14px] text-center'
                  >
                     Cancel
                  </li>
               </ul>
            </div>
         )}
      </>
   )
}

export default PostOptions
