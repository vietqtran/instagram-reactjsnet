import React, { useState } from "react"

import CreateOutline from "@components/Icons/Create/CreateOutline"
import CreatePost from "../CreatePost"
import { CreatePostPreview } from "./CreatePostPreview"
import Overlay from "../Overlay"

interface ExploreButtonProps {
   tab: string
}

function CreateButton({ tab }: Readonly<ExploreButtonProps>) {
   const [files, setFiles] = useState<FileList | null>()

   const [showModal, setShowModal] = useState(false)
   const [showPreviewPost, setShowPreviewPost] = useState(false)

   return (
      <>
         {showModal === true && showPreviewPost === false && (
            <Overlay setShow={setShowModal} show={showModal}>
               <CreatePost
                  setShowPreviewPost={setShowPreviewPost}
                  setFiles={setFiles}
               />
            </Overlay>
         )}
         {showModal === true && showPreviewPost === true && (
            <Overlay setShow={setShowModal} show={showModal}>
               <CreatePostPreview
                  setShowPreviewPost={setShowPreviewPost}
                  files={files}
               />
            </Overlay>
         )}
         <div
            onClick={() => setShowModal(true)}
            className='group rounded-lg duration-200 ease-linear hover:bg-gray-100 md:my-3'
         >
            <div className='cursor-pointer hover:text-black'>
               <div className='flex items-center justify-start p-3'>
                  <div className='block w-fit duration-200 ease-out group-hover:scale-105 md:w-[40px]'>
                     <CreateOutline />
                  </div>
                  <div
                     className={`${
                        tab === "search" || tab === "notification"
                           ? "hidden"
                           : "block"
                     }`}
                  >
                     <span className='hidden lg:block'>Create</span>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default CreateButton
