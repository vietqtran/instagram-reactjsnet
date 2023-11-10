import React, { useState } from "react"
import Overlay from "../Overlay"
import CreateOutline from "./Icons/Create/CreateOutline"

interface ExploreButtonProps {
   tab: string
}

function CreateButton({ tab }: ExploreButtonProps) {
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
            className='group my-3 rounded-lg duration-200 ease-linear hover:bg-gray-100'
         >
            <div className='cursor-pointer hover:text-black'>
               <div className='flex items-center justify-start p-3'>
                  <div className='block w-[40px] duration-200 ease-out group-hover:scale-105'>
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
