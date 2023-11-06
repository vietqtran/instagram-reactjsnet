import React, { useState } from "react"
import { LuPlusCircle } from "react-icons/lu"
import Overlay from "../Overlay"

function CreateButton() {
   const [showModal, setShowModal] = useState(false)
   return (
      <>
         {showModal === true && (
            <div className='relative'>
               <Overlay setShow={setShowModal} show={showModal}>
                  aad
               </Overlay>
            </div>
         )}
         <div
            onClick={() => setShowModal(true)}
            className='my-1 rounded-lg duration-100 ease-linear hover:bg-gray-100'
         >
            <div className='cursor-pointer hover:text-black'>
               <div className='flex items-center justify-start px-2 py-[10px]'>
                  <span className='block w-[40px] text-left text-[28px]'>
                     <LuPlusCircle />
                  </span>
                  <span>Create</span>
               </div>
            </div>
         </div>
      </>
   )
}

export default CreateButton
