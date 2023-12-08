import React, { useState } from "react"

import { AiOutlinePlus } from "react-icons/ai"
import Overlay from "@components/common/Overlay"
import SavedItem from "@components/common/User/SavedItem"
import { TfiClose } from "react-icons/tfi"

export default function SavedContainer() {
   const [showAdd, setShowAdd] = useState<boolean>(false)
   const [showSelectPost, setShowSelectPost] = useState<boolean>(false)

   return (
      <>
         <div>
            <div className='w-full flex flex-col gap-1 mt-8'>
               <div className='flex -items-center justify-between'>
                  <p className='text-xs opacity-80'>{`Only you can see what you've saved`}</p>
                  <button
                     onClick={() => setShowAdd(true)}
                     className='flex text-blue-500 text-sm hover:text-blue-600 items-center font-semibold'
                  >
                     <span className='mr-2 '>
                        <AiOutlinePlus />
                     </span>
                     <span>New Collection</span>
                  </button>
               </div>
               <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mt-2'>
                  <SavedItem />
                  <SavedItem />
                  <SavedItem />
                  <SavedItem />
                  <SavedItem />
                  <SavedItem />
                  <SavedItem />
                  <SavedItem />
               </div>
            </div>
         </div>
         {showAdd && !showSelectPost && (
            <Overlay setShow={setShowAdd} show={showAdd}>
               <div className='lg:w-[500px] w-[350px]'>
                  <div className='rounded-lg overflow-hidden bg-white'>
                     <div className='relative py-3 w-full text-center text-sm font-semibold text-opacity-80 v-border-b'>
                        <span>New Collection</span>
                        <button
                           onClick={() => setShowAdd(false)}
                           className='absolute block p-3 cursor-pointer top-[50%] translate-y-[-50%] right-0'
                        >
                           <TfiClose />
                        </button>
                     </div>
                     <div className='flex justify-center px-5 py-8 v-border-b'>
                        <input
                           autoFocus
                           type='text'
                           className='p-2 outline-none w-full border-[1px] border-gray-400 bg-gray-100 text-sm rounded-md placeholder:text-black placeholder:text-opacity-80'
                           placeholder='Collection name'
                        />
                     </div>
                     <div className='flex justify-center'>
                        <button className='w-full py-3 text-sm font-semibold text-opacity-80'>
                           Next
                        </button>
                     </div>
                  </div>
               </div>
            </Overlay>
         )}
      </>
   )
}
