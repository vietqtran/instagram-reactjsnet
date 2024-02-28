import React, { useState } from 'react'

import { CreatePostPreviewCaption } from './CreatePostPreviewCaption'
import { GrLinkPrevious } from 'react-icons/gr'
import { PostResponse } from '@type/responseModel/postResponse'
import { RootState } from '@redux/reducers'
import Slider from '../Slider'
import { User } from '@type/models/User'
import { Visibility } from '@type/enum/Visibility'
import { addPost } from '@utils/api/postApi'
import { uploadFiles } from '@utils/upload/clouldinaryUpload'
import { useSelector } from 'react-redux'
import { PostRequest } from '@type/requestModels/PostRequest'

type CreatePostPreviewProps = {
   files: FileList | null | undefined
   setShowPreviewPost: (show: boolean) => void
}

export const CreatePostPreview = ({
   files,
   setShowPreviewPost
}: CreatePostPreviewProps) => {
   const [backConfirm, setBackConfirm] = useState(false)
   const [showWriteContent, setShowWriteContent] = useState(false)
   const [postCaption, setPostCaption] = useState('')
   const user: User = useSelector((state: RootState) => state.user)

   const handleSharePost = async () => {
      if (files) {
         const imageLinks = await uploadFiles(files).then((res) => {
            return res
         })
         const post: PostRequest = {
            title: postCaption,
            userId: user.id,
            visibility: Visibility.Public,
            postImages: imageLinks
         }
         const postResponse: PostResponse = await addPost(post).then(
            (res: any) => {
               return res
            }
         )

         if (!(postResponse.id === '' || postResponse.id === null)) {
            window.location.reload()
         }
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
                     showWriteContent ? 'w-[calc(726px+322px)]' : 'w-[726px]'
                  } flex items-start justify-center duration-200 ease-in-out`}
               >
                  <Slider files={files} />
                  {showWriteContent && (
                     <CreatePostPreviewCaption
                        postCaption={postCaption}
                        setPostCaption={setPostCaption}
                     />
                  )}
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
