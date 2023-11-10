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
            <Overlay setShow={setShowModal} show={showModal}>
               aad
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
