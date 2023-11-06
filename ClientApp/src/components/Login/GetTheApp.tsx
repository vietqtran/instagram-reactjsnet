import React from "react"
import { Link } from "react-router-dom"

function GetTheApp() {
   return (
      <div className='flex flex-col items-center justify-center p-2 pb-20 text-sm'>
         <span>Get the app.</span>
         <div className='mt-2 flex items-center justify-center'>
            <div className='m-2 h-[40px] w-fit'>
               <Link to={"#"} className='block h-full w-fit'>
                  <img
                     src='/assets/images/download-app-chplay.png'
                     alt='download-app-chplay'
                     className='h-full w-auto'
                  />
               </Link>
            </div>
            <div className='m-2 h-[40px]'>
               <Link to={"#"} className='block h-full w-fit'>
                  <img
                     src='/assets/images/download-app-microsoft.png'
                     alt='download-app-chplay'
                     className='h-full w-auto'
                  />
               </Link>
            </div>
         </div>
      </div>
   )
}

export default GetTheApp
