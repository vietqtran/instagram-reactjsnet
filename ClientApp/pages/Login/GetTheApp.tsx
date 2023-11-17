import Image from "next/image"
import Link from "next/link"
import React from "react"

function GetTheApp() {
   return (
      <div className='flex flex-col items-center justify-center p-2 pb-20 text-sm'>
         <span>Get the app.</span>
         <div className='mt-2 flex items-center justify-center'>
            <div className='m-2 h-[40px] w-fit'>
               <Link href={"#"} className='block h-full w-fit'>
                  <Image
                     src='/assets/images/download-app-chplay.png'
                     alt='download-app-chplay'
                     className='h-full w-auto'
                     width={400}
                     height={400}
                     priority
                  />
               </Link>
            </div>
            <div className='m-2 h-[40px]'>
               <Link href={"#"} className='block h-full w-fit'>
                  <Image
                     src='/assets/images/download-app-microsoft.png'
                     alt='download-app-chplay'
                     className='h-full w-auto'
                     height={400}
                     width={400}
                  />
               </Link>
            </div>
         </div>
      </div>
   )
}

export default GetTheApp
