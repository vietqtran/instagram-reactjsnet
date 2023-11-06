import React from "react"

interface OverlayProps {
   children: React.ReactNode
   show: boolean
   setShow: (show: boolean) => void
}

function Overlay({ children, show, setShow }: OverlayProps) {
   const handleClose = () => {
      setShow(false)
   }

   return (
      <div
         onClick={handleClose}
         className={`${
            show === true ? "fixed" : "hidden"
         } inset-0 z-50 flex h-[100vh] w-[100vw] items-center justify-center bg-black bg-opacity-50 p-4`}
      >
         <div className='fixed inset-0 flex items-center justify-center'>
            <div
               onClick={(e) => {
                  e.stopPropagation()
               }}
               className='modal h-fit w-fit bg-white'
            >
               {children}
            </div>
         </div>
      </div>
   )
}

export default Overlay
